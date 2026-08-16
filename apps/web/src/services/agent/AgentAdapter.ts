/**
 * AgentAdapter — a fronteira entre a UI e o motor conversacional.
 *
 * REGRA DE ARQUITETURA (ADR-006): nenhum componente de UI conversa com o
 * Agentforce diretamente. Site e simulador de WhatsApp falam apenas com esta
 * interface. Trocar MockAgentAdapter por AgentforceAdapter não deve exigir
 * mudança em nenhum componente.
 */

import type {
  AgentResponse,
  ConversationContext,
} from '@/types/conversation';

export interface AgentAdapter {
  /** Identificador legível de qual implementação está ativa. Útil na demo. */
  readonly name: string;

  createSession(context: ConversationContext): Promise<string>;

  sendMessage(sessionId: string, message: string): Promise<AgentResponse>;

  endSession(sessionId: string): Promise<void>;
}

/**
 * Mensagem proativa: o agente inicia a conversa sem o usuário perguntar.
 * É o comportamento central do onboarding (pós-venda) e do widget quando há
 * contexto de campanha.
 *
 * Separado de AgentAdapter porque não toda implementação suporta proatividade.
 */
export interface ProactiveAgentAdapter extends AgentAdapter {
  /**
   * Produz a abertura da conversa a partir do contexto, sem input do usuário.
   * @param trigger Evento determinístico que motivou o contato
   *   (ex.: 'ra_created', 'first_access_missing'). Nunca um score de evasão.
   */
  openConversation(
    sessionId: string,
    trigger: string,
  ): Promise<AgentResponse>;
}

export function supportsProactive(
  adapter: AgentAdapter,
): adapter is ProactiveAgentAdapter {
  return typeof (adapter as ProactiveAgentAdapter).openConversation ===
    'function';
}
