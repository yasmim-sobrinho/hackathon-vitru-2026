# Arquitetura

## Três superfícies, um frontend

```text
apps/web
├── /site      → simulação do ambiente UniCesumar (pré-venda)
├── /whatsapp  → simulação de WhatsApp (onboarding proativo)
└── /demo      → seletor de cenários da apresentação
```

## Camada de agente — a regra mais importante

Nenhum componente de UI fala com o Agentforce. Todos falam com `AgentAdapter`.

```text
Site widget  ─┐
              ├─→ useConversation ─→ AgentAdapter ─→ MockAgentAdapter
WhatsApp sim ─┘                                   └─→ AgentforceAdapter
```

- `src/services/agent/AgentAdapter.ts` — o contrato.
- `src/services/agent/MockAgentAdapter.ts` — funciona sem Salesforce.
- `src/services/agent/AgentforceAdapter.ts` — stub, não implementado.
- `src/services/agent/index.ts` — `resolveAgentAdapter()`, ponto único de escolha.

A escolha vem de `VITE_AGENT_MODE` e o default é `mock`. Se a config do
Agentforce estiver incompleta, o app **cai no mock** em vez de quebrar a demo.

Trocar o mock pela implementação real não deve exigir mudança em nenhum
componente. Se exigir, o contrato está vazando.

## Contratos de contexto

| Tipo | Arquivo | Papel |
| --- | --- | --- |
| `StudentEntryContext` | `types/student-entry-context.ts` | O que atravessa a matrícula |
| `ConversationContext` | `types/conversation.ts` | O que o agente sabe antes de perguntar |
| `AgentResponse` | `types/conversation.ts` | Mensagens + updates de contexto + escalonamento |
| `EscalationRequest` | `types/conversation.ts` | Handoff com resumo e ação pedida |
| `EnrollmentScenario` | `types/student-entry-context.ts` | Cenário temporal de ingresso |
| `PoleCapabilities` | `types/pole.ts` | Abstração de polo — não implementada |
| `DemoScenario` | `types/demo.ts` | Cenário de apresentação |

Nenhum desses schemas está congelado.

## Estrutura do frontend

```text
src/
├── app/           App + rotas
├── components/    UI compartilhada (layout/)
├── features/
│   ├── site/          Superfície 1: CoursePage, SiteHeader, SiteFooter
│   ├── whatsapp/      Superfície 2 (placeholder)
│   ├── conversation/  Plumbing compartilhado: useConversation + ConversationPanel
│   └── demo/          Seletor de cenários
├── data/          Catálogo de cursos (mock declarado)
├── lib/           env.ts, utm.ts (captura de UTM + promessa da campanha)
├── mocks/         Dados fictícios, separados da UI
├── services/      agent/ (adapters)
└── types/         Contratos
```

Uma única folha de estilo: `src/index.css`. Tokens `--color-uni-*` são a
identidade UniCesumar (extraídos do tema público), `--color-wa-*` são do
WhatsApp e `--color-brand-*` / `--color-ink-*` são da casca de desenvolvimento.

## Salesforce

```text
force-app/main/default/aiAuthoringBundles/
├── VitruEducationalSales/     (a gerar)
└── VitruStudentOnboarding/    (a gerar)
```

`sfdx-project.json` na raiz, `sourceApiVersion` 67.0.

Os bundles devem ser gerados pelo CLI (`sf agent generate authoring-bundle`),
nunca escritos à mão.

## Distinção que não deve ser confundida

| Componente | O que é |
| --- | --- |
| **Salesforce DX MCP Server** | Servidor MCP local (`@salesforce/mcp`) que deixa o Kiro operar a org: metadata, dados, testes |
| **Agentforce DX** | Workflow de desenvolvimento dos agentes: agent spec, Agent Script, preview, publish, testes |
| **`sf agent mcp`** | Registro de MCP no API Catalog. Developer Preview. Não é requisito do MVP |

## Escalonamento

```text
L0 self-service/widget → L1 push/e-mail/SMS → L2 WhatsApp central
   → L3 polo → L4 humano especializado
```

Escalar por assunto, criticidade e necessidade — **nunca por score de evasão**.
Nunca mandar o aluno ao polo sem contexto e sem dizer qual ação foi pedida.

## Sem backend

O MVP não tem backend. Se aparecer necessidade, discutir antes de adicionar.
