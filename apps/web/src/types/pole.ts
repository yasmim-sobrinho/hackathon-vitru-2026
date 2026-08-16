/**
 * Polos. A rede é heterogênea: alguns polos são "minissedes", outros operam
 * com estrutura mínima. Nenhum fluxo deve assumir que todos são iguais.
 *
 * ABSTRAÇÃO — NÃO IMPLEMENTADA NESTA ETAPA.
 * Existe para que o roteamento de escalonamento não nasça hardcoded.
 *
 * TODO: validar com a Vitru quais ações o polo pode executar e quais exigem sede.
 * TODO: o recorte de piloto ("30 polos" / "top 30%") é HIPÓTESE do time, não regra Vitru.
 */
export interface PoleCapabilities {
  poleId: string;
  name?: string;
  supportsHumanEscalation: boolean;
  supportsCareerGuidance: boolean;
  hasDedicatedTeam: boolean;
  channels: string[];
  /** SLA em horas, quando a regra existir. */
  sla?: number;
}
