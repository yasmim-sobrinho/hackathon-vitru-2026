import { useState } from 'react';
import type { ConversationMessage } from '@/types/conversation';

interface ConversationPanelProps {
  messages: ConversationMessage[];
  isBusy: boolean;
  error?: string;
  onSend: (text: string) => void;
  /** Rótulo acessível do painel. */
  label: string;
}

/**
 * Painel de conversa neutro — sem identidade visual de canal.
 * O site e o simulador de WhatsApp vão envolvê-lo com suas próprias cascas.
 */
export function ConversationPanel({
  messages,
  isBusy,
  error,
  onSend,
  label,
}: ConversationPanelProps) {
  const [draft, setDraft] = useState('');

  function submit(text: string) {
    const value = text.trim();
    if (!value) return;
    setDraft('');
    onSend(value);
  }

  return (
    <section
      aria-label={label}
      className="flex h-full min-h-96 flex-col rounded-xl border border-slate-200 bg-white"
    >
      <ol
        aria-live="polite"
        className="flex flex-1 flex-col gap-3 overflow-y-auto p-4"
      >
        {messages.length === 0 && !isBusy && (
          <li className="text-sm text-ink-500">
            Nenhuma mensagem ainda. Envie algo para testar o adapter.
          </li>
        )}

        {messages.map((message) => (
          <li
            key={message.id}
            className={
              message.author === 'user' ? 'flex justify-end' : 'flex justify-start'
            }
          >
            <div className="max-w-[85%]">
              <div
                className={[
                  'rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                  message.author === 'user'
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 text-ink-900',
                ].join(' ')}
              >
                {message.text}
              </div>

              {message.cards?.map((card) => (
                <div
                  key={card.id}
                  className="mt-2 rounded-xl border border-slate-200 p-3"
                >
                  <p className="text-sm font-medium">{card.title}</p>
                  {card.subtitle && (
                    <p className="text-xs text-ink-500">{card.subtitle}</p>
                  )}
                  {card.ctaLabel && (
                    <span className="mt-2 inline-block text-xs font-medium text-brand-600">
                      {card.ctaLabel}
                    </span>
                  )}
                </div>
              ))}

              {message.quickReplies && message.quickReplies.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {message.quickReplies.map((reply) => (
                    <button
                      key={reply.id}
                      type="button"
                      onClick={() => submit(reply.value)}
                      className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 hover:bg-brand-100"
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}

        {isBusy && (
          <li className="text-xs text-ink-500">digitando…</li>
        )}
      </ol>

      {error && (
        <p role="alert" className="border-t border-red-100 bg-red-50 px-4 py-2 text-xs text-red-700">
          {error}
        </p>
      )}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit(draft);
        }}
        className="flex gap-2 border-t border-slate-200 p-3"
      >
        <label className="sr-only" htmlFor="conversation-input">
          Escreva sua mensagem
        </label>
        <input
          id="conversation-input"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Escreva sua mensagem"
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={isBusy || draft.trim().length === 0}
          className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
