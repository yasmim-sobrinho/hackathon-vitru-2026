/**
 * PLACEHOLDER — Superfície 2: simulação de WhatsApp.
 *
 * Não construída nesta etapa. A arquitetura já está no lugar:
 *
 *   WhatsApp Simulator → useConversation → AgentAdapter → Mock | Agentforce
 *
 * O que entra aqui depois (ver docs/backlog.md, P1 — WhatsApp Simulator):
 * - casca visual, lista de conversas, timestamps e status de entrega;
 * - typing indicator, quick replies e cards;
 * - troca de cenários de ingresso;
 * - mensagem proativa disparada por evento determinístico.
 *
 * Nenhuma integração com WhatsApp Business API no MVP — a demo precisa rodar
 * sem dependência externa.
 */
export function WhatsAppPage() {
  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-xl font-semibold tracking-tight">Simulador de WhatsApp</h1>
        <p className="mt-1 max-w-3xl text-sm text-ink-500">
          Estrutura preparada, interface ainda não construída. A conversa
          funcional já pode ser testada em /demo, que usa o mesmo adapter.
        </p>
      </header>

      <section className="rounded-xl border border-dashed border-slate-300 bg-white p-4">
        <h2 className="text-sm font-medium text-ink-700">Camada de abstração</h2>
        <p className="mt-2 text-sm text-ink-500">
          O simulador não fala com o Agentforce. Ele fala com{' '}
          <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">AgentAdapter</code>.
          Trocar o mock pela implementação real não deve exigir mudança nesta tela.
        </p>
      </section>
    </div>
  );
}
