/**
 * StudentEntryContext — o contexto que atravessa a matrícula.
 *
 * É o contrato que permite ao agente de onboarding (pós-venda) saber POR QUE
 * a pessoa se matriculou, sem precisar perguntar tudo de novo.
 *
 * CONTRATO INICIAL — NÃO CONGELADO.
 * Fonte: docs/source/time/alinhamento-mestre-jornada-ingresso.md (seção 4).
 *
 * Guardrails de memória (do alinhamento mestre):
 * - Só persistir fato declarado ou dado sistêmico. Inferência vai marcada.
 * - Nunca inferir saúde, religião, política ou perfil psicológico.
 * - Todo campo é corrigível: contexto muda.
 * - Polo recebe apenas os campos necessários para executar a tarefa.
 */

/** De onde vem cada informação. Separa fato de inferência. */
export type FieldOrigin =
  | 'declared_by_student'
  | 'system_of_record'
  | 'marketing_context'
  | 'agent_inference'
  | 'not_collected';

/** Confiança declarada do candidato na escolha do curso. */
export type CourseConfidence = 'high' | 'medium' | 'low' | 'not_collected';

/** Contexto de aquisição: de onde a pessoa veio. */
export interface AcquisitionContext {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  adId?: string;
  landingPage?: string;
  referrer?: string;
  /** Página/curso que estava sendo visto quando a conversa começou. */
  courseContext?: string;
}

/** O que a pessoa declarou querer. Nunca inferido sem marcação. */
export interface IntentionContext {
  primaryGoal?: string;
  careerGoal?: string;
  motivations?: string[];
}

/** Estado da escolha de curso. */
export interface CourseContext {
  consideredCourses?: string[];
  selectedCourse?: string;
  doubts?: string[];
  expectations?: string[];
  confidence?: CourseConfidence;
}

/** Restrições reais de vida que mudam a orientação. */
export interface ConstraintsContext {
  work?: string;
  studyAvailability?: string;
  financialConcerns?: string[];
  locationConstraints?: string[];
}

/** Preferências de contato. Respeitar opt-out é obrigatório. */
export interface PreferencesContext {
  preferredChannel?: string;
  communicationStyle?: string;
  optOutChannels?: string[];
}

/** Marcos de ativação do ingressante. */
export interface OnboardingContext {
  /** Cenário temporal de ingresso. Determinístico, por datas. */
  scenario?: EnrollmentScenario;
  enrollmentDate?: string;
  courseStartDate?: string;
  daysUntilClasses?: number;
  firstAccessCompleted?: boolean;
  orientationCompleted?: boolean;
  firstActivityCompleted?: boolean;
  /** Compromissos combinados com o aluno. */
  commitments?: string[];
}

/**
 * Governança. Existe para que nenhum campo vire "verdade eterna" e para
 * rastrear origem/retenção. Preenchimento real depende da definição de
 * política com a Vitru.
 *
 * TODO: validar política de retenção e base legal com a Vitru (LGPD).
 */
export interface ContextGovernance {
  originByField?: Partial<Record<string, FieldOrigin>>;
  lastUpdatedAt?: string;
  consentOrLegalBasis?: string;
  retentionPolicy?: string;
}

export interface StudentEntryContext {
  candidateId?: string;
  studentId?: string;
  /** Registro Acadêmico. Existir RA é o gatilho de handoff pré → pós. */
  ra?: string;

  acquisition?: AcquisitionContext;
  intention?: IntentionContext;
  course?: CourseContext;
  constraints?: ConstraintsContext;
  preferences?: PreferencesContext;
  onboarding?: OnboardingContext;

  /** Resumo factual e curto. Derivado dos campos acima, nunca livre. */
  conversationSummary?: string;

  governance?: ContextGovernance;
}

/**
 * Cenário de ingresso. Escolhido por DATAS E EVENTOS, nunca por score de evasão.
 *
 * Os cortes exatos em dias (o que é "early" vs "regular") ainda não estão
 * definidos pela Vitru.
 * TODO: definir cortes com o BI da UniCesumar.
 * Ver docs/decisions/open-questions.md
 */
export type EnrollmentScenario =
  | 'early'
  | 'regular'
  | 'last_minute'
  | 'late'
  | 'migration';

export const ENROLLMENT_SCENARIOS: readonly EnrollmentScenario[] = [
  'early',
  'regular',
  'last_minute',
  'late',
  'migration',
] as const;

/** Rótulos para UI. Descrições são do time, não da Vitru. */
export const ENROLLMENT_SCENARIO_LABELS: Record<
  EnrollmentScenario,
  { label: string; description: string }
> = {
  early: {
    label: 'Compra antecipada',
    description:
      'Matrícula meses antes do início. Risco é esfriamento, não urgência.',
  },
  regular: {
    label: 'Compra regular',
    description: 'Matrícula próxima ao início. Fluxo padrão de ativação.',
  },
  last_minute: {
    label: 'Compra em cima da hora',
    description: 'Pouco tempo até as aulas. Só o essencial.',
  },
  late: {
    label: 'Entrada tardia',
    description: 'O ciclo já começou. Precisa de plano de recuperação.',
  },
  migration: {
    label: 'Migração / transferência',
    description:
      'UNKNOWN: definição operacional na UniCesumar ainda não confirmada.',
  },
};
