/**
 * Personas de demonstração. Entre 4 e 6 no total — o objetivo é mostrar a
 * tese, não simular a base de alunos.
 */

import type {
  EnrollmentScenario,
  StudentEntryContext,
} from './student-entry-context';

export interface DemoStudent {
  id: string;
  name: string;
  course: string;
  scenario: EnrollmentScenario;
  entryContext?: StudentEntryContext;
}

/** Etapa da jornada em que a demo está posicionada. */
export type JourneyStage = 'candidate' | 'enrolled' | 'activated';

/**
 * Um cenário de apresentação: da origem de campanha até o desfecho.
 * O seletor em /demo troca entre estes.
 */
export interface DemoScenario {
  id: string;
  title: string;
  /** Frase curta do que este cenário prova no pitch. */
  thesis: string;
  student: DemoStudent;
  stage: JourneyStage;
  /** URL de entrada no site, com UTMs, que reproduz a origem. */
  entryUrl?: string;
}
