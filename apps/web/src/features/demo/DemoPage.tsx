import { useMemo, useState } from 'react';
import { DEMO_SCENARIOS } from '@/mocks/demo-scenarios';
import { ConversationPanel } from '@/features/conversation/ConversationPanel';
import { useConversation } from '@/features/conversation/useConversation';
import { ENROLLMENT_SCENARIO_LABELS } from '@/types';
import type { ConversationContext } from '@/types/conversation';

/**
 * Seletor de cenários da apresentação.
 *
 * Nesta etapa serve como banco de provas do contrato AgentAdapter: troca de
 * cenário, abertura proativa, captura de contexto e escalonamento.
 */
export function DemoPage() {
  const [scenarioId, setScenarioId] = useState(DEMO_SCENARIOS[0]!.id);

  const scenario = useMemo(
    () => DEMO_SCENARIOS.find((item) => item.id === scenarioId) ?? DEMO_SCENARIOS[0]!,
    [scenarioId],
  );

  const context = useMemo<ConversationContext>(() => {
    const isCandidate = scenario.stage === 'candidate';
    return {
      role: isCandidate ? 'educational_sales' : 'student_onboarding',
      channel: isCandidate ? 'site_widget' : 'whatsapp',
      page: isCandidate
        ? { currentCourse: scenario.student.course, currentSection: 'ementa' }
        : undefined,
      utm: scenario.student.entryContext?.acquisition
        ? {
            source: scenario.student.entryContext.acquisition.source,
            campaign: scenario.student.entryContext.acquisition.campaign,
          }
        : undefined,
      entryContext: scenario.student.entryContext,
    };
  }, [scenario]);

  const trigger =
    scenario.stage === 'candidate' ? 'page_context' : 'ra_created';

  const { messages, entryContext, escalations, isBusy, error, send } =
    useConversation({ context, proactiveTrigger: trigger });

  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-xl font-semibold tracking-tight">Cenários de demonstração</h1>
        <p className="mt-1 max-w-3xl text-sm text-ink-500">
          Banco de provas do contrato de agente. A conversa abaixo roda no
          MockAgentAdapter, então a demo funciona sem Salesforce. Os dados são
          fictícios.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-[320px_1fr_300px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-medium text-ink-700">Cenário</h2>
          {DEMO_SCENARIOS.map((item) => {
            const isActive = item.id === scenario.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setScenarioId(item.id)}
                aria-current={isActive}
                className={[
                  'rounded-xl border p-3 text-left text-sm transition-colors',
                  isActive
                    ? 'border-brand-500 bg-brand-50'
                    : 'border-slate-200 bg-white hover:border-slate-300',
                ].join(' ')}
              >
                <span className="block font-medium text-ink-900">{item.title}</span>
                <span className="mt-1 block text-xs text-ink-500">{item.thesis}</span>
                <span className="mt-2 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-ink-500">
                  {ENROLLMENT_SCENARIO_LABELS[item.student.scenario].label}
                </span>
              </button>
            );
          })}
        </div>

        <ConversationPanel
          label={`Conversa do cenário ${scenario.title}`}
          messages={messages}
          isBusy={isBusy}
          error={error}
          onSend={(text) => void send(text)}
        />

        <aside className="flex flex-col gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <h2 className="text-sm font-medium text-ink-700">StudentEntryContext</h2>
            <p className="mt-1 text-xs text-ink-500">
              O que atravessa a matrícula.
            </p>
            <pre className="mt-2 max-h-72 overflow-auto rounded-lg bg-slate-50 p-2 text-[11px] leading-relaxed text-ink-700">
              {JSON.stringify(entryContext, null, 2)}
            </pre>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <h2 className="text-sm font-medium text-ink-700">Escalonamentos</h2>
            {escalations.length === 0 ? (
              <p className="mt-1 text-xs text-ink-500">Nenhum até agora.</p>
            ) : (
              <ul className="mt-2 flex flex-col gap-2">
                {escalations.map((item, index) => (
                  <li
                    key={`${item.level}-${index}`}
                    className="rounded-lg bg-amber-50 p-2 text-[11px] text-amber-900"
                  >
                    <span className="font-medium">{item.level}</span>
                    <p className="mt-1">{item.summary}</p>
                    <p className="mt-1 italic">{item.requestedAction}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
