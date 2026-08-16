# Legacy — trabalho anterior preservado

Nada aqui faz parte da arquitetura atual. Este diretório existe para preservar o
trabalho feito antes do kickoff da Jornada de Ingresso.

**Não importar nada daqui no novo código.**

## Conteúdo

| Item | O que era |
| --- | --- |
| `motor-intervencao-prototype/` | Protótipo FastAPI + GUI do "Motor de Intervenção": console de priorização de alunos em risco para consultores |
| `eda-scripts/` | Scripts Python de análise exploratória sobre a base de evasão |
| `CLAUDE-motor-intervencao.md` | Convenções de desenvolvimento da tese anterior |
| `README-motor-intervencao.md` | README da tese anterior |

## Por que foi arquivado

O protótipo implementava uma tese de produto diferente: console reativo, com
priorização por score de risco, e a instrução explícita de **não** construir
agente conversacional para o aluno.

A direção atual (alinhamento mestre de 15/08/2026) é o oposto em pontos-chave:
dois agentes conversacionais e fluxo `evento → estado → ação` em vez de score.

Conflito registrado em `docs/decisions/open-questions.md` (C-001).
Decisão em `docs/decisions/decision-log.md` (ADR-008).

## O que ainda tem valor

Os scripts de EDA e a análise de fricções produziram sinais sobre quais
comportamentos importam. Isso continua útil para escolher os **marcos de
ativação** do onboarding — mesmo que o mecanismo de seleção tenha mudado.

A análise correspondente está em `docs/research/`.

## Recuperação

O estado completo anterior ao kickoff está na tag:

```bash
git show backup/motor-intervencao-pre-kickoff
git switch -c recuperacao backup/motor-intervencao-pre-kickoff
```
