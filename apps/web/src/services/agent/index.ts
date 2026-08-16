/**
 * Ponto único de resolução do adapter. A UI importa daqui e nunca instancia
 * um adapter concreto por conta própria.
 */

import { MockAgentAdapter } from './MockAgentAdapter';
import { AgentforceAdapter } from './AgentforceAdapter';
import type { AgentAdapter } from './AgentAdapter';
import { agentMode, agentforceConfig } from '@/lib/env';

export type { AgentAdapter, ProactiveAgentAdapter } from './AgentAdapter';
export { supportsProactive } from './AgentAdapter';
export { MockAgentAdapter } from './MockAgentAdapter';
export { AgentforceAdapter } from './AgentforceAdapter';

let cached: AgentAdapter | undefined;

/**
 * Devolve o adapter ativo conforme VITE_AGENT_MODE.
 * Default é 'mock' — a demo precisa funcionar sem Salesforce.
 */
export function resolveAgentAdapter(): AgentAdapter {
  if (cached) return cached;

  if (agentMode === 'agentforce') {
    const config = agentforceConfig();
    if (!config) {
      console.warn(
        '[agent] VITE_AGENT_MODE=agentforce mas as variáveis de ambiente estão ' +
          'incompletas. Voltando para MockAgentAdapter.',
      );
      cached = new MockAgentAdapter();
      return cached;
    }
    cached = new AgentforceAdapter(config);
    return cached;
  }

  cached = new MockAgentAdapter();
  return cached;
}
