/**
 * Captura de contexto de aquisição a partir da URL.
 *
 * É a peça que sustenta o primeiro MUST da demo: abrir a mesma página por
 * duas URLs diferentes e o agente já saber de onde a pessoa veio, sem
 * perguntar. Ver alinhamento mestre, seção 5 — "começar pelo contexto que
 * já existe".
 */

import type { AcquisitionContext } from '@/types/student-entry-context';

/**
 * Campanhas conhecidas da demo. O mapeamento existe para que o agente possa
 * reconhecer a PROMESSA do anúncio, não só o nome da campanha — é a diferença
 * entre "vi que você veio de uma campanha" e "vi que você veio pelo anúncio
 * sobre abrir o próprio negócio".
 */
export const KNOWN_CAMPAIGNS: Record<
  string,
  { label: string; promise: string; course?: string }
> = {
  'adm-empreendedores': {
    label: 'Administração para quem quer empreender',
    promise:
      'anúncio sobre usar a graduação em Administração para abrir ou profissionalizar o próprio negócio',
    course: 'administracao',
  },
  'adm-carreira': {
    label: 'Administração para crescer na carreira',
    promise:
      'anúncio sobre usar o diploma para crescer dentro da empresa onde já trabalha',
    course: 'administracao',
  },
  'rh-transicao': {
    label: 'RH para quem quer mudar de área',
    promise: 'anúncio sobre migrar de carreira para a área de pessoas',
    course: 'gestao-de-recursos-humanos',
  },
};

export function readAcquisitionContext(
  search: string,
  pathname: string,
): AcquisitionContext {
  const params = new URLSearchParams(search);

  const context: AcquisitionContext = {
    landingPage: pathname,
  };

  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  const content = params.get('utm_content');
  const adId = params.get('utm_ad') ?? params.get('ad_id');

  if (source) context.source = source;
  if (medium) context.medium = medium;
  if (campaign) context.campaign = campaign;
  if (content) context.content = content;
  if (adId) context.adId = adId;

  if (document.referrer) {
    context.referrer = document.referrer;
  }

  return context;
}

/** Descreve a origem em uma frase que o agente pode usar na abertura. */
export function describeOrigin(
  acquisition: AcquisitionContext,
): string | undefined {
  if (!acquisition.campaign) return undefined;

  const known = KNOWN_CAMPAIGNS[acquisition.campaign];
  if (known) return known.promise;

  return `campanha ${acquisition.campaign}`;
}
