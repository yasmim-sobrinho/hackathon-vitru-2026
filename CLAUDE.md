# Convenções do projeto

Este projeto usa `.kiro/steering/` como fonte de contexto permanente. Leia esses
arquivos antes de escrever código:

| Arquivo | Conteúdo |
| --- | --- |
| `.kiro/steering/00-project-context.md` | Problema, hipótese, os dois agentes |
| `.kiro/steering/01-product-scope.md` | O que fazemos e o que não fazemos |
| `.kiro/steering/02-architecture.md` | Arquitetura e contratos |
| `.kiro/steering/03-development-rules.md` | Regras de desenvolvimento |
| `.kiro/steering/04-demo-context.md` | O que precisa funcionar na demo |

Fonte de verdade de produto:
`docs/source/time/alinhamento-mestre-jornada-ingresso.md`

Decisões: `docs/decisions/decision-log.md`
Pendências e conflitos: `docs/decisions/open-questions.md`

## Comandos

```bash
npm install
npm run dev      # frontend em http://localhost:5173
npm run build    # inclui tsc -b
```

## Aviso sobre o histórico

O `CLAUDE.md` anterior descrevia um produto diferente (o "Motor de Intervenção",
com priorização por score de risco e a instrução de não construir agente
conversacional). Ele foi arquivado em `legacy/CLAUDE-motor-intervencao.md` e
**não representa a direção atual**. Ver conflito C-001 em
`docs/decisions/open-questions.md`.
