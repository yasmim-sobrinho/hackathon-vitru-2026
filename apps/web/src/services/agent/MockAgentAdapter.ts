/**
 * MockAgentAdapter — permite a demo rodar sem Salesforce (ADR-005).
 *
 * ATENÇÃO — LIMITE DESTE MOCK:
 * Os textos aqui são PLACEHOLDER de estrutura conversacional, não conteúdo
 * institucional da UniCesumar. Ele não afirma preço, bolsa, prazo, regra
 * acadêmica ou promessa de carreira. Onde faltar fonte oficial, responde
 * marcando a ausência em vez de inventar.
 *
 * O objetivo é provar o FLUXO: contexto → abertura contextual → uma pergunta
 * útil → captura de contexto → próximo passo. A inteligência real vem do
 * Agentforce depois.
 */

import type {
  ProactiveAgentAdapter,
} from './AgentAdapter';
import type {
  AgentResponse,
  ConversationContext,
  ConversationMessage,
  QuickReply,
} from '@/types/conversation';
import type { StudentEntryContext } from '@/types/student-entry-context';

interface MockSession {
  id: string;
  context: ConversationContext;
  turnCount: number;
}

let sequence = 0;
function nextId(prefix: string): string {
  sequence += 1;
  return `${prefix}-${sequence}`;
}

function agentMessage(
  text: string,
  extras?: Pick<ConversationMessage, 'quickReplies' | 'cards'>,
): ConversationMessage {
  return {
    id: nextId('msg'),
    author: 'agent',
    text,
    sentAt: new Date().toISOString(),
    ...extras,
  };
}

const GOAL_REPLIES: QuickReply[] = [
  { id: 'qr-career', label: 'Mudar de carreira', value: 'Quero mudar de carreira' },
  { id: 'qr-grow', label: 'Crescer no trabalho atual', value: 'Quero crescer onde já trabalho' },
  { id: 'qr-diploma', label: 'Ter o diploma', value: 'Quero conquistar o diploma' },
  { id: 'qr-decided', label: 'Já decidi, quero me matricular', value: 'Já decidi, quero me matricular' },
];

/**
 * Abertura da venda educacional. Usa o contexto que já existe em vez de
 * perguntar o que a página já informa.
 */
function openEducationalSales(context: ConversationContext): ConversationMessage {
  const course = context.page?.currentCourse ?? context.utm?.campaign;
  const section = context.page?.currentSection;

  if (course && section === 'ementa') {
    return agentMessage(
      `Vi que você está olhando a ementa de ${course}. Posso te ajudar a entender ` +
        `como o curso funciona no dia a dia. O que você quer alcançar com essa graduação?`,
      { quickReplies: GOAL_REPLIES },
    );
  }

  if (course) {
    return agentMessage(
      `Vi que você está conhecendo ${course}. Para te orientar direito: o que você ` +
        `quer alcançar profissionalmente?`,
      { quickReplies: GOAL_REPLIES },
    );
  }

  return agentMessage(
    'Oi! Posso te ajudar a encontrar um caminho que faça sentido para o seu objetivo. ' +
      'O que você quer mudar profissionalmente?',
    { quickReplies: GOAL_REPLIES },
  );
}

/**
 * Abertura do onboarding. Reancorada no que a pessoa declarou ANTES da
 * matrícula — é isso que o produto quer demonstrar.
 */
function openOnboarding(
  context: ConversationContext,
  trigger: string,
): ConversationMessage {
  const goal = context.entryContext?.intention?.primaryGoal;
  const course = context.entryContext?.course?.selectedCourse;
  const scenario = context.entryContext?.onboarding?.scenario;

  const anchor = goal
    ? `Você me disse que queria ${goal.toLowerCase()}. `
    : '';

  if (trigger === 'first_access_missing') {
    return agentMessage(
      `${anchor}Notei que seu primeiro acesso ainda não aconteceu. ` +
        `Seu próximo passo é entrar na plataforma — leva poucos minutos. Quer que eu te guie?`,
      {
        quickReplies: [
          { id: 'qr-guide', label: 'Sim, me guia', value: 'Sim, me guia' },
          { id: 'qr-blocked', label: 'Estou com problema para acessar', value: 'Estou com problema para acessar' },
        ],
      },
    );
  }

  if (scenario === 'late') {
    return agentMessage(
      `${anchor}Sua turma de ${course ?? 'graduação'} já começou. Em vez de te mandar ` +
        `tudo de uma vez, vamos pelo que é urgente primeiro. Posso te mostrar as prioridades?`,
      {
        quickReplies: [
          { id: 'qr-priorities', label: 'Mostrar prioridades', value: 'Mostrar prioridades' },
        ],
      },
    );
  }

  return agentMessage(
    `${anchor}Sua matrícula em ${course ?? 'seu curso'} está confirmada. ` +
      `Vou te acompanhar nos primeiros passos, um por vez. Quer começar agora?`,
    {
      quickReplies: [
        { id: 'qr-start', label: 'Vamos começar', value: 'Vamos começar' },
        { id: 'qr-later', label: 'Depois', value: 'Depois' },
      ],
    },
  );
}

/**
 * Extrai contexto do que a pessoa escreveu. Deliberadamente conservador:
 * só registra o que foi declarado, nunca inferência sobre perfil.
 */
function captureContext(message: string): Partial<StudentEntryContext> | undefined {
  const text = message.toLowerCase();

  if (text.includes('mudar de carreira')) {
    return {
      intention: { primaryGoal: 'mudar de carreira' },
      course: { confidence: 'medium' },
      governance: {
        originByField: { 'intention.primaryGoal': 'declared_by_student' },
        lastUpdatedAt: new Date().toISOString(),
      },
    };
  }

  if (text.includes('crescer')) {
    return {
      intention: { primaryGoal: 'crescer na carreira atual' },
      governance: {
        originByField: { 'intention.primaryGoal': 'declared_by_student' },
        lastUpdatedAt: new Date().toISOString(),
      },
    };
  }

  if (text.includes('diploma')) {
    return {
      intention: { primaryGoal: 'conquistar o diploma' },
      governance: {
        originByField: { 'intention.primaryGoal': 'declared_by_student' },
        lastUpdatedAt: new Date().toISOString(),
      },
    };
  }

  return undefined;
}

export class MockAgentAdapter implements ProactiveAgentAdapter {
  readonly name = 'MockAgentAdapter';

  private readonly sessions = new Map<string, MockSession>();

  createSession(context: ConversationContext): Promise<string> {
    const id = nextId('session');
    this.sessions.set(id, { id, context, turnCount: 0 });
    return Promise.resolve(id);
  }

  openConversation(sessionId: string, trigger: string): Promise<AgentResponse> {
    const session = this.requireSession(sessionId);
    const message =
      session.context.role === 'student_onboarding'
        ? openOnboarding(session.context, trigger)
        : openEducationalSales(session.context);

    return Promise.resolve({ messages: [message] });
  }

  sendMessage(sessionId: string, message: string): Promise<AgentResponse> {
    const session = this.requireSession(sessionId);
    session.turnCount += 1;

    const contextUpdates = captureContext(message);
    const text = message.toLowerCase();

    // Intenção de compra: nunca esconder a conversão atrás de perguntas.
    if (text.includes('matricular') || text.includes('decidi')) {
      return Promise.resolve({
        messages: [
          agentMessage(
            'Perfeito, vou te levar direto para a matrícula. Se surgir dúvida no caminho, ' +
              'eu continuo aqui.',
            {
              cards: [
                {
                  id: nextId('card'),
                  title: 'Ir para a matrícula',
                  subtitle: 'Simulação de checkout',
                  ctaLabel: 'Continuar',
                  ctaHref: '#/site/matricula',
                },
              ],
            },
          ),
        ],
        contextUpdates,
      });
    }

    // Bloqueio operacional: escalar com contexto, sem improvisar solução.
    if (text.includes('problema') || text.includes('não consigo')) {
      return Promise.resolve({
        messages: [
          agentMessage(
            'Entendi. Isso eu não resolvo sozinho, então vou acionar quem pode — ' +
              'já enviando o seu contexto para não te fazer repetir a história. ' +
              'Te aviso aqui quando tiver retorno.',
          ),
        ],
        contextUpdates,
        escalation: {
          level: 'L3_pole',
          summary: 'Aluno relata impedimento de acesso à plataforma.',
          requestedAction: 'Verificar credencial de acesso e retornar ao aluno.',
          attemptsMade: ['Orientação de primeiro acesso enviada pelo agente.'],
        },
      });
    }

    // Pedido de informação institucional que o mock não tem.
    if (text.includes('preço') || text.includes('valor') || text.includes('bolsa')) {
      return Promise.resolve({
        messages: [
          agentMessage(
            'Essa informação eu não tenho aqui de forma confiável, e prefiro não te passar ' +
              'um dado errado. Vou te encaminhar para a fonte oficial.',
          ),
        ],
        contextUpdates,
      });
    }

    return Promise.resolve({
      messages: [
        agentMessage(
          contextUpdates
            ? 'Anotado. Isso me ajuda a te orientar melhor daqui pra frente. ' +
                'Quer que eu explique como o curso funciona no dia a dia?'
            : 'Entendi. Me conta um pouco mais para eu te orientar com precisão?',
        ),
      ],
      contextUpdates,
    });
  }

  endSession(sessionId: string): Promise<void> {
    this.sessions.delete(sessionId);
    return Promise.resolve();
  }

  private requireSession(sessionId: string): MockSession {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error(`Sessão desconhecida: ${sessionId}`);
    }
    return session;
  }
}
