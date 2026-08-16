# Arquitetura

## Princípio

Limpa o suficiente para integrar Salesforce e Agentforce. Simples o suficiente
para ser construída e demonstrada rápido.

## Visão em uma linha

```text
Origem de marketing → Agente Pré → StudentEntryContext → Matrícula/RA
  → Cenário de ingresso → Agente Pós → Ação/canal → Marco ou handoff → Métricas
```

## Estrutura do repositório

```text
/
├── apps/web/                  Frontend (Vite + React + TS)
│   └── src/
│       ├── app/               Rotas
│       ├── components/layout/ AppShell (casca de desenvolvimento)
│       ├── features/          site, whatsapp, conversation, demo
│       ├── data/              Catálogo de cursos (mock declarado)
│       ├── lib/               env.ts, utm.ts
│       ├── mocks/             Cenários de demo
│       ├── services/agent/    AgentAdapter e implementações
│       └── types/             Contratos de domínio
├── force-app/main/default/
│   └── aiAuthoringBundles/    Agentes Agentforce (a gerar)
├── mock-data/                 Cenários fora do bundle do frontend
├── docs/
│   ├── source/                Fontes originais — não alterar
│   ├── decisions/             ADRs e perguntas abertas
│   ├── specs/                 Specs dos agentes
│   └── research/              Pesquisa e análises
├── legacy/                    Protótipo anterior, arquivado
├── .kiro/
│   ├── settings/mcp.json      Salesforce DX MCP
│   └── steering/              Contexto permanente do projeto
├── scripts/
├── sfdx-project.json
└── package.json               Workspace raiz
```

## As três superfícies

| Rota | Superfície | Estado |
| --- | --- | --- |
| `/site/curso/:slug` | Simulação do ambiente UniCesumar, pré-venda | Em construção. Página de curso, ementa e captura de UTM funcionais. Widget de agente pendente |
| `/whatsapp` | Simulação de WhatsApp, onboarding proativo | Placeholder |
| `/demo` | Seletor de cenários da apresentação | Funcional |

`/site` renderiza fora do `AppShell`, para não colocar a navegação do protótipo
por cima de uma página que precisa parecer o site real.

## Camada de agente

A decisão de arquitetura mais importante (ADR-006): **nenhum componente de UI
fala com o Agentforce.**

```text
     /site widget ─┐
                   ├─→ useConversation ─→ AgentAdapter
  /whatsapp sim ───┘                          │
                                              ├─→ MockAgentAdapter    (default)
                                              └─→ AgentforceAdapter   (stub)
```

### Arquivos

| Arquivo | Papel |
| --- | --- |
| `services/agent/AgentAdapter.ts` | Contrato. `createSession`, `sendMessage`, `endSession` |
| `services/agent/MockAgentAdapter.ts` | Implementação offline, com abertura proativa |
| `services/agent/AgentforceAdapter.ts` | Stub. Rejeita com mensagem clara |
| `services/agent/index.ts` | `resolveAgentAdapter()` — ponto único de escolha |
| `features/conversation/useConversation.ts` | Estado da conversa, merge de contexto, escalonamentos |
| `features/conversation/ConversationPanel.tsx` | UI neutra de conversa, sem identidade de canal |

### Proatividade

`ProactiveAgentAdapter` estende o contrato com `openConversation(sessionId,
trigger)`. O `trigger` é sempre um evento determinístico (`ra_created`,
`first_access_missing`), nunca um score.

Está separado porque não toda implementação suporta iniciar conversa.

### Seleção de implementação

```text
VITE_AGENT_MODE=mock         → MockAgentAdapter (default)
VITE_AGENT_MODE=agentforce   → AgentforceAdapter, se a config estiver completa
                               senão cai no mock com aviso
```

## Contratos de contexto

### `StudentEntryContext`

O que atravessa a matrícula. É o mecanismo central da tese.

```text
candidateId / studentId / ra
acquisition   → source, medium, campaign, content, adId, landingPage, courseContext
intention     → primaryGoal, careerGoal, motivations
course        → consideredCourses, selectedCourse, doubts, expectations, confidence
constraints   → work, studyAvailability, financialConcerns, locationConstraints
preferences   → preferredChannel, communicationStyle, optOutChannels
onboarding    → scenario, enrollmentDate, courseStartDate, marcos de ativação
conversationSummary
governance    → originByField, lastUpdatedAt, consentOrLegalBasis, retentionPolicy
```

`FieldOrigin` separa fato de inferência: `declared_by_student`,
`system_of_record`, `marketing_context`, `agent_inference`, `not_collected`.

Guardrails de memória: nunca inferir saúde, religião, política ou perfil
psicológico. Todo campo é corrigível. Polo recebe só o necessário.

**Schema não congelado.**

### `ConversationContext`

O que o agente sabe **antes** de perguntar: papel, canal, contexto de página,
UTMs e o `StudentEntryContext` existente.

Existe para sustentar a regra "nunca perguntar o que o contexto já informa".

### `AgentResponse`

```text
messages       → ConversationMessage[] (com quickReplies e cards)
contextUpdates → Partial<StudentEntryContext>
escalation     → EscalationRequest | undefined
```

O agente declara o que capturou e o que escalou. A UI não infere.

### `EscalationRequest`

`level`, `summary`, `requestedAction`, `attemptsMade`, `poleId`.

Nenhum handoff sai sem resumo e ação pedida (ADR-007).

## Cenários de ingresso

Classificação por datas e eventos, nunca por score (ADR-004).

| Cenário | Condição | Foco do fluxo |
| --- | --- | --- |
| `early` | Matrícula meses antes | Manter propósito, preparar, evitar esfriamento |
| `regular` | Próxima ao início | Acesso → ambientação → agenda → primeira atividade |
| `last_minute` | Pouco tempo | Só o essencial |
| `late` | Ciclo já começou | Plano de recuperação priorizado |
| `migration` | UNKNOWN | Placeholder declarado |

Os cortes em dias **não estão definidos**. Ver Q-002 em
`docs/decisions/open-questions.md`.

## Escalonamento

```text
L0_self_service      widget, site, Studeo
L1_transactional     push, e-mail, SMS
L2_whatsapp_central  WhatsApp centralizado com agente
L3_pole              polo selecionado
L4_specialized_human humano interno/externo especializado
```

WhatsApp é centralizado, não distribuído por polo. `PoleCapabilities` existe como
abstração para que o roteamento não nasça hardcoded — não implementado.

## Salesforce

```text
sfdx-project.json     sourceApiVersion 67.0, packageDirectory force-app
.forceignore          ignora apps/ e dist/
force-app/main/default/aiAuthoringBundles/
```

Bundles gerados pelo CLI (`sf agent generate authoring-bundle`), nunca à mão.

### Três coisas distintas

| Componente | O que é | Uso no MVP |
| --- | --- | --- |
| Salesforce DX MCP Server | `@salesforce/mcp`, deixa o Kiro operar a org | Retrieve, query, deploy, testes |
| Agentforce DX | Workflow de authoring dos agentes | Construir e versionar os dois agentes |
| `sf agent mcp` | Registro de MCP no API Catalog, Developer Preview | Não é requisito |

## Sem backend

O MVP não tem backend. Persistência de contexto na demo é estado em memória do
frontend. Persistência real depende de decisão sobre CRM/Data Cloud (Q-009).

## Stack

| Camada | Escolha | Versão |
| --- | --- | --- |
| Build | Vite | 7.3.6 |
| UI | React | 19.2.8 |
| Roteamento | react-router-dom | 7.18.2 |
| Tipos | TypeScript strict | 5.9.3 |
| Estilo | Tailwind CSS | 4.3.3 |
| Salesforce | Salesforce CLI | 2.147.7 |

Versões fixadas (sem `^`) para evitar divergência entre as máquinas do time.
