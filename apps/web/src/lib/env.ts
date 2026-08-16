/**
 * Leitura de configuração de ambiente. Nenhum segredo é commitado — ver
 * .env.example na raiz.
 */

import type { AgentforceAdapterConfig } from '@/services/agent/AgentforceAdapter';

export type AgentMode = 'mock' | 'agentforce';

/** Default é 'mock': a demo precisa rodar offline (ADR-005). */
export const agentMode: AgentMode =
  import.meta.env.VITE_AGENT_MODE === 'agentforce' ? 'agentforce' : 'mock';

/**
 * Config do Agentforce, se completa. Retorna undefined quando falta algo,
 * para que o app caia no mock em vez de quebrar a demo.
 */
export function agentforceConfig(): AgentforceAdapterConfig | undefined {
  const instanceUrl = import.meta.env.VITE_SF_INSTANCE_URL;
  const agentId = import.meta.env.VITE_SF_AGENT_ID;

  if (!instanceUrl || !agentId) return undefined;

  return { instanceUrl, agentId };
}
