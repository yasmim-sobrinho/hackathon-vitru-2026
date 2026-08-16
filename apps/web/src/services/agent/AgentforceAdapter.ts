/**
 * AgentforceAdapter — STUB.
 *
 * Não implementado nesta etapa por decisão de escopo: nenhuma org Salesforce
 * está autorizada ainda e a demo precisa funcionar sem Salesforce (ADR-005).
 *
 * Quando for implementado, a integração acontece SOMENTE aqui. Nenhum
 * componente de UI deve ser tocado.
 *
 * Pendências antes de implementar:
 * - autenticar org (`sf org login web --alias vitru-hackathon --set-default`);
 * - definir se a chamada será via Agent API, connected app ou proxy próprio;
 * - decidir onde ficará o segredo (NUNCA no repositório — ver .env.example);
 * - mapear o retorno do Agentforce para o contrato AgentResponse.
 *
 * TODO: validar qual superfície de integração o org do hackathon libera.
 * Ver docs/decisions/open-questions.md
 */

import type { AgentAdapter } from './AgentAdapter';
import type {
  AgentResponse,
  ConversationContext,
} from '@/types/conversation';

export interface AgentforceAdapterConfig {
  /** Domínio My Domain da org. Vem de variável de ambiente, não do código. */
  instanceUrl: string;
  /** Id do agente publicado no org. */
  agentId: string;
}

const NOT_IMPLEMENTED =
  'AgentforceAdapter ainda não implementado. Use MockAgentAdapter (VITE_AGENT_MODE=mock) ' +
  'ou conclua a autenticação da org Salesforce. Ver docs/backlog.md (P1 — Salesforce).';

export class AgentforceAdapter implements AgentAdapter {
  readonly name = 'AgentforceAdapter';

  constructor(private readonly config: AgentforceAdapterConfig) {}

  /** Exposto para diagnóstico na tela de demo. Não expõe segredos. */
  describeTarget(): string {
    return `${this.config.instanceUrl} · agent=${this.config.agentId}`;
  }

  createSession(_context: ConversationContext): Promise<string> {
    return Promise.reject(new Error(NOT_IMPLEMENTED));
  }

  sendMessage(_sessionId: string, _message: string): Promise<AgentResponse> {
    return Promise.reject(new Error(NOT_IMPLEMENTED));
  }

  endSession(_sessionId: string): Promise<void> {
    return Promise.reject(new Error(NOT_IMPLEMENTED));
  }
}
