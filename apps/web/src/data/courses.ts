/**
 * Catálogo de cursos para a demo.
 *
 * DADO MOCKADO. Estrutura de curso, disciplinas e valores são plausíveis mas
 * NÃO são a oferta oficial da UniCesumar. Antes de qualquer uso além da demo,
 * substituir por consulta à base oficial (o agente de pré-venda tem regra
 * explícita de nunca inventar preço, bolsa ou condição comercial —
 * ver alinhamento mestre, seção 11).
 */

export interface CourseModule {
  semester: number;
  subjects: string[];
}

export interface Course {
  slug: string;
  name: string;
  area: string;
  degree: 'Bacharelado' | 'Licenciatura' | 'Tecnólogo';
  durationSemesters: number;
  /** Texto curto de vitrine, no tom do site. */
  tagline: string;
  description: string;
  /** Atuações possíveis. Nunca promessa de emprego ou salário. */
  careers: string[];
  modules: CourseModule[];
  monthlyPrice: number;
  fullPrice: number;
  /** Perguntas frequentes que o widget pode responder sem escalar. */
  faq: { question: string; answer: string }[];
}

export const COURSES: Course[] = [
  {
    slug: 'administracao',
    name: 'Administração',
    area: 'Negócios e Gestão',
    degree: 'Bacharelado',
    durationSemesters: 8,
    tagline: 'Forme-se para liderar negócios, times e decisões.',
    description:
      'O bacharelado em Administração da UniCesumar prepara você para planejar, organizar e liderar organizações de qualquer porte. O curso combina fundamentos de gestão, finanças, pessoas e estratégia com prática aplicada ao mercado brasileiro.',
    careers: [
      'Analista administrativo',
      'Gestor de operações',
      'Consultor de negócios',
      'Analista financeiro',
      'Empreendedor',
      'Gestor de pessoas',
    ],
    modules: [
      {
        semester: 1,
        subjects: [
          'Introdução à Administração',
          'Matemática Aplicada',
          'Comunicação Empresarial',
          'Metodologia Científica',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Teoria Geral da Administração',
          'Contabilidade Geral',
          'Economia',
          'Comportamento Organizacional',
        ],
      },
      {
        semester: 3,
        subjects: [
          'Gestão de Pessoas',
          'Matemática Financeira',
          'Direito Empresarial',
          'Estatística Aplicada',
        ],
      },
      {
        semester: 4,
        subjects: [
          'Marketing',
          'Administração Financeira',
          'Gestão da Produção',
          'Sistemas de Informação',
        ],
      },
    ],
    monthlyPrice: 249.9,
    fullPrice: 399.9,
    faq: [
      {
        question: 'Como funciona a metodologia EAD da UniCesumar?',
        answer:
          'Você estuda pelo Studeo, nosso ambiente virtual, com conteúdo liberado por módulo. As aulas ficam gravadas e disponíveis quando você puder assistir, e há atividades e avaliações com prazos definidos no calendário acadêmico.',
      },
      {
        question: 'Preciso ir ao polo com que frequência?',
        answer:
          'As avaliações presenciais acontecem no polo em datas específicas do calendário. O restante do curso você acompanha de onde estiver.',
      },
      {
        question: 'Quanto tempo por semana preciso dedicar?',
        answer:
          'A recomendação é de 8 a 12 horas semanais, distribuídas como sua rotina permitir. Alunos que definem uma janela fixa de estudo costumam manter o ritmo com mais facilidade.',
      },
      {
        question: 'O diploma é reconhecido pelo MEC?',
        answer:
          'Sim. O curso é reconhecido pelo MEC e o diploma tem a mesma validade do presencial.',
      },
    ],
  },
  {
    slug: 'gestao-de-recursos-humanos',
    name: 'Gestão de Recursos Humanos',
    area: 'Negócios e Gestão',
    degree: 'Tecnólogo',
    durationSemesters: 4,
    tagline: 'Cuide de quem faz a empresa acontecer.',
    description:
      'O tecnólogo em Gestão de Recursos Humanos forma profissionais para recrutar, desenvolver e reter talentos. É um curso mais curto e focado, voltado a quem quer atuar rapidamente na área de pessoas.',
    careers: [
      'Analista de RH',
      'Recrutador',
      'Analista de treinamento e desenvolvimento',
      'Business partner de RH',
    ],
    modules: [
      {
        semester: 1,
        subjects: [
          'Fundamentos de Gestão de Pessoas',
          'Comportamento Organizacional',
          'Comunicação Empresarial',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Recrutamento e Seleção',
          'Legislação Trabalhista',
          'Cargos e Salários',
        ],
      },
    ],
    monthlyPrice: 199.9,
    fullPrice: 329.9,
    faq: [
      {
        question: 'Qual a diferença entre tecnólogo e bacharelado?',
        answer:
          'O tecnólogo é mais curto e focado em uma área específica de atuação. O bacharelado é mais amplo e leva mais tempo. Os dois são cursos superiores reconhecidos pelo MEC.',
      },
    ],
  },
  {
    slug: 'ciencias-contabeis',
    name: 'Ciências Contábeis',
    area: 'Negócios e Gestão',
    degree: 'Bacharelado',
    durationSemesters: 8,
    tagline: 'A linguagem que traduz os números de qualquer negócio.',
    description:
      'O bacharelado em Ciências Contábeis forma profissionais para atuar com contabilidade, auditoria, perícia e planejamento tributário, com forte demanda em empresas de todos os portes.',
    careers: [
      'Contador',
      'Auditor',
      'Analista fiscal',
      'Perito contábil',
      'Consultor tributário',
    ],
    modules: [
      {
        semester: 1,
        subjects: [
          'Contabilidade Introdutória',
          'Matemática Aplicada',
          'Teoria da Contabilidade',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Contabilidade Comercial',
          'Direito Tributário',
          'Estatística',
        ],
      },
    ],
    monthlyPrice: 259.9,
    fullPrice: 419.9,
    faq: [
      {
        question: 'Preciso ser bom em matemática?',
        answer:
          'O curso usa matemática aplicada, não matemática avançada. As disciplinas iniciais retomam a base, então você não precisa chegar pronto.',
      },
    ],
  },
];

export function findCourse(slug: string | undefined): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}
