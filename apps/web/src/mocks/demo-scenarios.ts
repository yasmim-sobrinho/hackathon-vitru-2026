import type { DemoScenario } from '@/types/demo';

/**
 * Cenários de demonstração.
 *
 * DADOS FICTÍCIOS. Nomes, cursos e datas são inventados para a apresentação e
 * não representam alunos reais nem números da Vitru. Nenhuma regra
 * institucional está codificada aqui.
 *
 * TODO: os cortes em dias que separam early/regular/last_minute/late ainda
 * dependem do BI da UniCesumar. Ver docs/decisions/open-questions.md
 */
export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'ana-early',
    title: 'Ana — veio de anúncio e comprou com meses de antecedência',
    thesis:
      'O contexto da campanha vira contexto do agente, e o propósito declarado sobrevive à matrícula.',
    stage: 'candidate',
    entryUrl:
      '/site?utm_source=meta&utm_medium=paid_social&utm_campaign=administracao-empreender&curso=Administracao',
    student: {
      id: 'demo-ana',
      name: 'Ana',
      course: 'Administração',
      scenario: 'early',
      entryContext: {
        candidateId: 'demo-ana',
        acquisition: {
          source: 'meta',
          medium: 'paid_social',
          campaign: 'administracao-empreender',
          landingPage: '/site',
          courseContext: 'Administração',
        },
        course: {
          consideredCourses: ['Administração'],
          confidence: 'medium',
        },
      },
    },
  },
  {
    id: 'bruno-regular',
    title: 'Bruno — matrícula próxima ao início, ativação padrão',
    thesis:
      'Checklist compacto: acesso, ambientação, agenda e primeiro compromisso, um passo por vez.',
    stage: 'enrolled',
    student: {
      id: 'demo-bruno',
      name: 'Bruno',
      course: 'Análise e Desenvolvimento de Sistemas',
      scenario: 'regular',
      entryContext: {
        studentId: 'demo-bruno',
        ra: 'RA-DEMO-0002',
        intention: { primaryGoal: 'mudar de carreira' },
        course: { selectedCourse: 'Análise e Desenvolvimento de Sistemas' },
        onboarding: {
          scenario: 'regular',
          firstAccessCompleted: false,
        },
      },
    },
  },
  {
    id: 'carla-late',
    title: 'Carla — entrou depois do ciclo começar',
    thesis:
      'Entrada tardia recebe plano de recuperação priorizado, não a régua de boas-vindas genérica.',
    stage: 'enrolled',
    student: {
      id: 'demo-carla',
      name: 'Carla',
      course: 'Pedagogia',
      scenario: 'late',
      entryContext: {
        studentId: 'demo-carla',
        ra: 'RA-DEMO-0003',
        intention: { primaryGoal: 'conquistar o diploma' },
        course: { selectedCourse: 'Pedagogia' },
        onboarding: {
          scenario: 'late',
          firstAccessCompleted: false,
        },
      },
    },
  },
  {
    id: 'diego-migration',
    title: 'Diego — migração / transferência',
    thesis:
      'Placeholder: a definição operacional de "migração" na UniCesumar ainda não foi validada.',
    stage: 'enrolled',
    student: {
      id: 'demo-diego',
      name: 'Diego',
      course: 'Ciências Contábeis',
      scenario: 'migration',
      entryContext: {
        studentId: 'demo-diego',
        ra: 'RA-DEMO-0004',
        course: { selectedCourse: 'Ciências Contábeis' },
        onboarding: { scenario: 'migration' },
      },
    },
  },
];
