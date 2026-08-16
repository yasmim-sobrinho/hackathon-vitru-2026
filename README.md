# Vitru — Jornada de Ingresso

MVP do Hackathon Vitru 2026. Recorte: **UniCesumar**, graduação EAD.

## Contexto

Como aumentar a permanência e o sucesso de alunos da graduação EAD, reduzindo a
evasão. A Vitru já possui modelos preditivos de evasão — o desafio não é
construir outro modelo, é transformar sinais em ações que aumentem permanência.

Não estamos apresentando "uma solução de IA". Estamos apresentando uma **nova
Jornada de Ingresso do aluno UniCesumar**. A IA é a infraestrutura que viabiliza
personalização, escala e continuidade.

A jornada conecta: Captação → Venda Educacional → Matrícula → Ingresso →
Onboarding → Ativação Inicial.

## Hipótese

Uma entrada mais consciente, contextualizada, orientada e acompanhada nos
primeiros momentos aumenta a probabilidade de o aluno efetivamente começar sua
jornada acadêmica e criar as condições iniciais para permanecer.

Dois problemas distintos, que não têm a mesma causa:

- **A — escolha/alinhamento.** A pessoa começa e percebe que o curso não
  corresponde ao que imaginava.
- **B — intenção sem ativação.** A pessoa escolhe bem, se matricula, e ainda
  assim não acessa, procrastina ou perde o propósito.

**Diferencial em uma frase:** o contexto não morre na matrícula.

## Escopo

Dois agentes, uma jornada:

| Agente | Quando | Responsabilidade |
| --- | --- | --- |
| `VitruEducationalSales` | Antes da matrícula | Venda educacional consultiva, alinhamento de expectativa, captura de contexto, conversão |
| `VitruStudentOnboarding` | Depois do RA | Identificar cenário de ingresso, orientar, ativar, acompanhar, escalar |

O handoff é a geração do RA. O `StudentEntryContext` atravessa esse ponto.

**O que não fazemos:** novo modelo preditivo, chatbot de FAQ, teste vocacional
clínico, venda socrática, substituição de Studeo/CRM/financeiro, central humana
acompanhando todos os alunos.

Detalhes em `.kiro/steering/01-product-scope.md`.

## Arquitetura

Três superfícies, um frontend:

```text
apps/web
├── /site      → simulação do ambiente UniCesumar (pré-venda)
├── /whatsapp  → simulação de WhatsApp (onboarding proativo)
└── /demo      → seletor de cenários da apresentação
```

A regra mais importante: **nenhum componente de UI fala com o Agentforce.**

```text
Site widget  ─┐
              ├─→ useConversation ─→ AgentAdapter ─→ MockAgentAdapter (default)
WhatsApp sim ─┘                                   └─→ AgentforceAdapter (stub)
```

Trocar o mock pela implementação real não deve exigir mudança em nenhum
componente. Se exigir, o contrato está vazando.

Detalhes em `docs/architecture.md`.

## Estrutura de pastas

```text
/
├── apps/web/                  Frontend: Vite + React 19 + TS strict + Tailwind
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
├── mock-data/                 Fixtures fora do bundle
├── docs/
│   ├── source/                Fontes originais — NÃO alterar
│   ├── decisions/             ADRs e perguntas abertas
│   ├── specs/                 Specs dos agentes
│   └── research/              Pesquisa e análises
├── legacy/                    Protótipo anterior, arquivado
├── .kiro/
│   ├── settings/mcp.json      Salesforce DX MCP
│   └── steering/              Contexto permanente do projeto
├── sfdx-project.json
└── package.json               Workspace raiz
```

## Como rodar o frontend

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # inclui tsc -b: erro de tipo derruba o build
```

Rotas:

| Rota | Estado |
| --- | --- |
| `/demo` | Funcional — seletor de cenários, conversa mock, contexto e escalonamento |
| `/site/curso/:slug` | Em construção — página de curso, ementa e captura de UTM funcionais |
| `/whatsapp` | Placeholder |

Para ver a mesma página produzir contextos de aquisição diferentes:

```text
http://localhost:5173/site/curso/administracao?utm_campaign=adm-empreendedores
http://localhost:5173/site/curso/administracao?utm_campaign=adm-carreira
```

`/site` renderiza fora do `AppShell` de propósito: a simulação precisa parecer o
site real.

## Salesforce

Salesforce CLI instalado: **2.147.7**. Verificar com `sf --version`.

Se o `sf` não for reconhecido:

```bash
npm install -g @salesforce/cli
```

### Autenticar a org — pendente

**Nenhuma org está autorizada.** `sf org list` retorna "No Orgs found". Este passo
precisa ser executado interativamente:

```bash
sf org login web --alias vitru-hackathon --set-default
sf org list
```

Sem isso, ficam bloqueados: MCP, geração de authoring bundle, inspeção de
metadata e mapeamento dos agentes existentes da Vitru.

## Salesforce MCP

O arquivo `.kiro/settings/mcp.json` **precisa ser criado manualmente** (a escrita
foi bloqueada por regra de permissão do workspace). Conteúdo:

```json
{
  "mcpServers": {
    "salesforce-dx": {
      "command": "npx",
      "args": [
        "-y",
        "@salesforce/mcp@latest",
        "--orgs",
        "DEFAULT_TARGET_ORG",
        "--toolsets",
        "orgs,metadata,data,testing"
      ],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Princípios aplicados:

- toolsets mínimos necessários — **não** usar `--toolsets all`;
- prender à org específica, **não** usar `ALLOW_ALL_ORGS`;
- **não** adicionar `--allow-non-ga-tools` sem necessidade concreta;
- `autoApprove` vazio: nenhuma ferramenta destrutiva ou de deploy aprovada
  automaticamente;
- nenhum segredo no arquivo. O MCP usa a org já autorizada pelo CLI.

Depois de autenticar a org, trocar `DEFAULT_TARGET_ORG` por `vitru-hackathon` se
quiser fixar o alias.

## Agentforce DX

Três coisas diferentes que não devem ser confundidas:

| Componente | O que é |
| --- | --- |
| **Salesforce DX MCP Server** | `@salesforce/mcp`, deixa o Kiro operar a org: metadata, dados, testes |
| **Agentforce DX** | Workflow de authoring dos agentes: agent spec, Agent Script, preview, publish |
| **`sf agent mcp`** | Registro de MCP no API Catalog. Developer Preview. Não é requisito do MVP |

Os comandos `sf agent` estão disponíveis (`generate`, `validate`, `preview`,
`publish`, `test`, `adl`, `trace`).

Os bundles devem ser **gerados pelo CLI**, nunca escritos à mão:

```bash
sf agent generate agent-spec
sf agent generate authoring-bundle
sf agent validate
sf agent preview
sf agent publish authoring-bundle
```

**Regra crítica:** antes de qualquer deploy, listar os agentes existentes no org e
confirmar que não há colisão. **Não sobrescrever agentes da Vitru.**

Ver `force-app/main/default/aiAuthoringBundles/README.md`.

## Mock Mode

`MockAgentAdapter` é o default. A demo roda offline, sem rede e sem org
Salesforce. Isso é decisão de arquitetura (ADR-005), não improviso.

```text
VITE_AGENT_MODE=mock         → MockAgentAdapter
VITE_AGENT_MODE=agentforce   → AgentforceAdapter, se a config estiver completa
                               senão cai no mock com aviso em console
```

O mock **não inventa informação institucional**. Onde falta fonte oficial, ele
declara que não sabe e encaminha.

O adapter ativo aparece no cabeçalho do app, para não haver dúvida na
apresentação.

## Documentação

| Documento | Para quê |
| --- | --- |
| `docs/source/time/alinhamento-mestre-jornada-ingresso.md` | **Fonte de verdade de produto** |
| `docs/repository-audit.md` | Estado encontrado no kickoff e decisão de rebuild |
| `docs/architecture.md` | Arquitetura, contratos, stack |
| `docs/decisions/decision-log.md` | ADR-001 a ADR-008 |
| `docs/decisions/open-questions.md` | Conflitos e o que falta validar com a Vitru |
| `docs/backlog.md` | P0/P1/P2 e bloqueios ativos |
| `docs/demo-plan.md` | Roteiro da apresentação |
| `docs/context-index.md` | Índice e classificação de todo documento |
| `docs/specs/` | Specs dos dois agentes |
| `.kiro/steering/` | Contexto que o Kiro carrega em toda sessão |

### Regras que não se negociam

- **Não hardcodear regra institucional.** Prazo, preço, bolsa, calendário e
  política acadêmica não são inventados. Sem fonte oficial, o valor é `UNKNOWN` e
  vira pergunta em `docs/decisions/open-questions.md`.
- **Hipótese não vira fato.** Números falados em reunião ficam rotulados como
  hipótese. O recorte de piloto ("30 polos", "top 30%") é hipótese do time.
- **Nenhuma promessa** de emprego, salário ou percentual de redução de evasão.
- **Fontes em `docs/source/` não são alteradas.**
- **Segredos nunca no repositório.** Só `.env.local`, que é gitignored.

## Próximas tarefas

Bloqueios ativos, em ordem de impacto:

1. **Autenticar a org Salesforce** — destrava MCP, authoring bundles e o
   mapeamento dos agentes existentes.
2. **Criar `.kiro/settings/mcp.json`** com o conteúdo acima.
3. **Plugar o widget de agente na página de curso** — `ConversationPanel` +
   `useConversation` já existem; falta montar na `CoursePage`.
4. **Decidir se preço aparece na tela** — ver C-002 em
   `docs/decisions/open-questions.md`.
5. Construir a casca do simulador de WhatsApp.

Backlog completo em `docs/backlog.md`.

## Git

- Branch de trabalho: `hackathon/jornada-ingresso`
- Tag de backup do estado anterior: `backup/motor-intervencao-pre-kickoff`
- `main` intocada
