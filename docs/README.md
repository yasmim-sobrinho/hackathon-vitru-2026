# Documentação

## Comece por aqui

| Documento | Para quê |
| --- | --- |
| [`source/time/alinhamento-mestre-jornada-ingresso.md`](source/time/alinhamento-mestre-jornada-ingresso.md) | **Fonte de verdade de produto.** Toda decisão sai daqui |
| [`architecture.md`](architecture.md) | Arquitetura, contratos, stack |
| [`backlog.md`](backlog.md) | O que falta e quais bloqueios estão ativos |
| [`decisions/decision-log.md`](decisions/decision-log.md) | ADR-001 a ADR-008 |
| [`decisions/open-questions.md`](decisions/open-questions.md) | Conflitos e o que falta validar com a Vitru |
| [`demo-plan.md`](demo-plan.md) | Roteiro da apresentação |
| [`repository-audit.md`](repository-audit.md) | Estado do repositório no kickoff |
| [`context-index.md`](context-index.md) | Índice e classificação de todo documento |

## Specs dos agentes

- [`specs/agent-educational-sales.md`](specs/agent-educational-sales.md) — Agent 1, pré-venda
- [`specs/agent-student-onboarding.md`](specs/agent-student-onboarding.md) — Agent 2, onboarding

## Organização

```text
docs/
├── source/          Fontes originais — NÃO ALTERAR
│   ├── vitru-oficial/   PDFs e materiais oficiais do desafio
│   └── time/            Decisões e transcrições da equipe
├── decisions/       ADRs e perguntas abertas
├── specs/           Especificações dos agentes
├── research/        Pesquisa, análises e hipóteses
└── assets/          Imagens de pitch
```

## Ao adicionar um documento novo

O processo está em [`context-index.md`](context-index.md). Resumo:

1. Classificar o tipo e o nível de confiança.
2. Registrar no `context-index.md`.
3. Extrair decisões para `decisions/decision-log.md`.
4. Atualizar `.kiro/steering/` se afetar regra de trabalho.
5. Se conflitar com decisão anterior, **não escolher silenciosamente** — registrar
   em `decisions/open-questions.md`.
6. Preservar a fonte original em `source/`, sem editá-la.

## Hierarquia de confiança

```text
1. decisão explícita mais recente da equipe
2. fala direta de diretor/mentor Vitru
3. documentação oficial Vitru
4. dados internos Vitru
5. documentação oficial Salesforce
6. pesquisa acadêmica
7. pesquisa de mercado
8. hipótese interna da equipe
9. inferência do agente
```

Hipótese não vira fato no código nem no pitch.
