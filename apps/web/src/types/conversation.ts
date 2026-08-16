/**
 * Contratos de conversa. Compartilhados entre o widget do site e o
 * simulador de WhatsApp — as duas superfícies falam com o MESMO adapter.
 */

import type { StudentEntryContext } from './student-entry-context';

/** Qual agente está atuando. São dois papéis, não um agente só. */
export type AgentRole = 'educational_sales' | 'student_onboarding';

/** Onde a conversa acontece. */
export type ConversationChannel = 'site_widget' | 'whatsapp' | 'studeo';

/**
 * Contexto que o agente recebe ANTES da primeira pergunta.
 * O princípio é: nunca perguntar o que o contexto já informa.
 */
export interface ConversationContext {
  role: AgentRole;
  channel: ConversationChannel;

  /** Contexto de página, quando a conversa nasce no site. */
  page?: {
    currentPage?: string;
    currentCourse?: string;
    currentSection?: string;
  };

  /** Parâmetros de campanha capturados da URL. */
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    adId?: string;
  };

  /** Contexto já conhecido do candidato/aluno. */
  entryContext?: StudentEntryContext;
}

export type MessageAuthor = 'agent' | 'user' | 'system';

/** Ação sugerida que a UI pode renderizar como botão. */
export interface QuickReply {
  id: string;
  label: string;
  value: string;
}

/** Cartão estruturado (curso, checklist, próximo passo). */
export interface MessageCard {
  id: string;
  title: string;
  subtitle?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ConversationMessage {
  id: string;
  author: MessageAuthor;
  text: string;
  /** ISO 8601. */
  sentAt: string;
  quickReplies?: QuickReply[];
  cards?: MessageCard[];
}

/**
 * Resposta do agente. Inclui as mensagens e os efeitos colaterais
 * declarados — o que o agente diz que capturou ou escalou.
 */
export interface AgentResponse {
  messages: ConversationMessage[];
  /** Campos que esta interação acrescentou ao StudentEntryContext. */
  contextUpdates?: Partial<StudentEntryContext>;
  /** Se o agente decidiu escalar, e para qual nível. */
  escalation?: EscalationRequest;
}

/**
 * Níveis de escalonamento. Digital resolve o comum; polo e humano entram
 * por necessidade, nunca como ponto inicial de atendimento.
 * Fonte: alinhamento mestre, seção 7.
 */
export type EscalationLevel =
  | 'L0_self_service'
  | 'L1_transactional'
  | 'L2_whatsapp_central'
  | 'L3_pole'
  | 'L4_specialized_human';

/**
 * Handoff. A regra é: nunca mandar o aluno ao polo sem contexto e sem
 * dizer qual ação está sendo pedida.
 */
export interface EscalationRequest {
  level: EscalationLevel;
  /** Resumo do problema em poucas linhas. */
  summary: string;
  /** Ação concreta solicitada ao próximo nível. */
  requestedAction: string;
  /** O que já foi tentado antes de escalar. */
  attemptsMade?: string[];
  poleId?: string;
}
