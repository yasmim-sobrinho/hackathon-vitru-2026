# Índice de contexto

Todo documento que entra no repositório é registrado aqui, classificado por tipo
e por nível de confiança.

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

Uma hipótese não vira fato no código ou na documentação.

## Como registrar um documento novo

1. Ler o documento.
2. Classificar o tipo: fonte oficial, transcrição, pesquisa, hipótese,
   especificação ou decisão.
3. Adicionar linha na tabela abaixo.
4. Extrair decisões relevantes → `docs/decisions/decision-log.md`.
5. Atualizar steering em `.kiro/steering/` se afetar regra de trabalho.
6. Verificar conflito com decisão anterior. **Se houver, não escolher
   silenciosamente** — registrar em `docs/decisions/open-questions.md`.
7. Preservar a fonte original em `docs/source/`, sem alterá-la.

---

## Fontes oficiais Vitru — nível 3

| Documento | Local | Tipo |
| --- | --- | --- |
| Abertura do Hackathon | `docs/source/vitru-oficial/abertura-hackathon.pdf` | Fonte oficial |
| Descrição do Desafio | `docs/source/vitru-oficial/descricao-desafio.pdf` | Fonte oficial |
| Motivos de Evasão Vitru | `docs/source/vitru-oficial/motivos-de-evasao-vitru.pdf` | Dados internos |
| Contexto do Hackathon (consolidado) | `docs/source/vitru-oficial/contexto-hackathon.md` | Consolidação de fonte oficial |

## Fontes do time — níveis 1 e 2

| Documento | Local | Tipo | Observação |
| --- | --- | --- | --- |
| **Alinhamento Mestre — Jornada de Ingresso** | `docs/source/time/alinhamento-mestre-jornada-ingresso.md` | Decisão da equipe | **Fonte de verdade de produto.** 15/08/2026 |
| Transcrição da mentoria com a diretoria | `docs/source/time/transcricao-mentoria-2026-08-15.md` | Transcrição | Fala direta de mentores. Números citados são exemplo, não dado |
| Visão e Arquitetura | `docs/source/time/visao-e-arquitetura.docx` | Decisão da equipe | Anterior ao alinhamento mestre |
| Regras e prompts — Kiro | `docs/source/time/regras-e-prompts-kiro.pdf` | Especificação | Diretrizes de trabalho com o Kiro |

## Pesquisa — níveis 6 a 8

| Documento | Local | Tipo |
| --- | --- | --- |
| Análise de fricções da jornada | `docs/research/analise-friccoes-jornada.md` | Pesquisa interna |
| Memória de cálculo da evasão silenciosa | `docs/research/memoria-calculo-evasao.md` | Pesquisa interna / hipótese |
| Estratégia de pitch 5min | `docs/research/pitch-5min-estrategia.md` | Hipótese da equipe |
| Síntese estratégica | `docs/research/sintese-estrategica-antigravity.md` | Hipótese da equipe |
| Pré-pesquisa Hackathon Vitru 2026 | `docs/research/pre-pesquisa-hackathon-vitru-2026.docx` | Pesquisa interna |

### Literatura externa citada no alinhamento mestre

- Rahmani, Groot & Rahmani (2024). *Dropout in online higher education: a
  systematic literature review.* IJETHE 21, 19.
- *What Factors Contribute to Effective Online Higher Education? A Meta-Review*
  (2024). Technology, Knowledge and Learning.
- Fouarge & Heß (2023). *Preference-choice mismatch and university dropout.*
  Labour Economics 83, 102405.

Esses estudos justificam **mecanismos**, não estimativas de impacto. Nenhum deles
prova que a solução reduz evasão em X%.

## Documentação técnica de referência — nível 5

| Assunto | Fonte |
| --- | --- |
| Agentforce DX | developer.salesforce.com/docs/ai/agentforce/guide/agent-dx.html |
| Agent Script / authoring | developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-nga-author-agent.html |
| CLI `sf agent` | developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_agent.html |
| Salesforce DX MCP Server | github.com/salesforcecli/mcp |
| Salesforce CLI (instalador) | developer.salesforce.com/tools/salesforcecli/ |
| Kiro — configuração de MCP | kiro.dev/docs/mcp/configuration/ |
| Kiro — segurança de MCP | kiro.dev/docs/mcp/security/ |

## Documentos gerados neste repositório

| Documento | Local | Tipo |
| --- | --- | --- |
| Auditoria do repositório | `docs/repository-audit.md` | Especificação |
| Arquitetura | `docs/architecture.md` | Decisão |
| Log de decisões | `docs/decisions/decision-log.md` | Decisão |
| Perguntas abertas e conflitos | `docs/decisions/open-questions.md` | Hipótese / pendência |
| Backlog | `docs/backlog.md` | Especificação |
| Plano de demo | `docs/demo-plan.md` | Especificação |
| Spec Agent 1 — Venda Educacional | `docs/specs/agent-educational-sales.md` | Especificação |
| Spec Agent 2 — Onboarding | `docs/specs/agent-student-onboarding.md` | Especificação |

## Arquivado

| Documento | Local | Por quê |
| --- | --- | --- |
| CLAUDE.md (Motor de Intervenção) | `legacy/CLAUDE-motor-intervencao.md` | Tese de produto anterior. Conflito C-001 |
| README (Motor de Intervenção) | `legacy/README-motor-intervencao.md` | Idem |
| Protótipo FastAPI | `legacy/motor-intervencao-prototype/` | Implementação da tese anterior |
| Scripts de EDA | `legacy/eda-scripts/` | Análise ainda útil como pesquisa |

## Dados

A base de dados da Vitru **não entra no repositório**. Fica em `/data`, que está
no `.gitignore`.
