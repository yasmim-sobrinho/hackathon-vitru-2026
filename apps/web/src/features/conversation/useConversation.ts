import { useCallback, useEffect, useRef, useState } from 'react';
import { resolveAgentAdapter, supportsProactive } from '@/services/agent';
import type {
  ConversationContext,
  ConversationMessage,
  EscalationRequest,
} from '@/types/conversation';
import type { StudentEntryContext } from '@/types/student-entry-context';

interface UseConversationOptions {
  context: ConversationContext;
  /**
   * Evento determinístico que motiva a abertura proativa
   * (ex.: 'ra_created', 'first_access_missing'). Nunca um score de evasão.
   */
  proactiveTrigger?: string;
}

interface UseConversationResult {
  messages: ConversationMessage[];
  /** Contexto acumulado ao longo da conversa. É isso que atravessa a matrícula. */
  entryContext: StudentEntryContext;
  escalations: EscalationRequest[];
  isBusy: boolean;
  error: string | undefined;
  send: (text: string) => Promise<void>;
}

function mergeContext(
  current: StudentEntryContext,
  update: Partial<StudentEntryContext>,
): StudentEntryContext {
  return {
    ...current,
    ...update,
    acquisition: { ...current.acquisition, ...update.acquisition },
    intention: { ...current.intention, ...update.intention },
    course: { ...current.course, ...update.course },
    constraints: { ...current.constraints, ...update.constraints },
    preferences: { ...current.preferences, ...update.preferences },
    onboarding: { ...current.onboarding, ...update.onboarding },
    governance: {
      ...current.governance,
      ...update.governance,
      originByField: {
        ...current.governance?.originByField,
        ...update.governance?.originByField,
      },
    },
  };
}

/**
 * Plumbing conversacional compartilhado. Site e WhatsApp usam este mesmo hook,
 * então trocar o adapter serve as duas superfícies de uma vez.
 */
export function useConversation({
  context,
  proactiveTrigger,
}: UseConversationOptions): UseConversationResult {
  const adapterRef = useRef(resolveAgentAdapter());
  const sessionRef = useRef<string | undefined>(undefined);

  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [entryContext, setEntryContext] = useState<StudentEntryContext>(
    context.entryContext ?? {},
  );
  const [escalations, setEscalations] = useState<EscalationRequest[]>([]);
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const adapter = adapterRef.current;
    let cancelled = false;

    setMessages([]);
    setEscalations([]);
    setError(undefined);
    setEntryContext(context.entryContext ?? {});
    setIsBusy(true);

    void (async () => {
      try {
        const sessionId = await adapter.createSession(context);
        if (cancelled) return;
        sessionRef.current = sessionId;

        if (proactiveTrigger && supportsProactive(adapter)) {
          const response = await adapter.openConversation(
            sessionId,
            proactiveTrigger,
          );
          if (cancelled) return;
          setMessages(response.messages);
        }
      } catch (cause) {
        if (!cancelled) {
          setError(cause instanceof Error ? cause.message : String(cause));
        }
      } finally {
        if (!cancelled) setIsBusy(false);
      }
    })();

    return () => {
      cancelled = true;
      const sessionId = sessionRef.current;
      sessionRef.current = undefined;
      if (sessionId) void adapter.endSession(sessionId).catch(() => undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(context), proactiveTrigger]);

  const send = useCallback(async (text: string) => {
    const sessionId = sessionRef.current;
    const trimmed = text.trim();
    if (!sessionId || !trimmed) return;

    setMessages((current) => [
      ...current,
      {
        id: `user-${Date.now()}`,
        author: 'user',
        text: trimmed,
        sentAt: new Date().toISOString(),
      },
    ]);
    setIsBusy(true);
    setError(undefined);

    try {
      const response = await adapterRef.current.sendMessage(sessionId, trimmed);
      setMessages((current) => [...current, ...response.messages]);

      if (response.contextUpdates) {
        setEntryContext((current) =>
          mergeContext(current, response.contextUpdates!),
        );
      }
      if (response.escalation) {
        setEscalations((current) => [...current, response.escalation!]);
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : String(cause));
    } finally {
      setIsBusy(false);
    }
  }, []);

  return { messages, entryContext, escalations, isBusy, error, send };
}
