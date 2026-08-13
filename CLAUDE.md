# Hackathon Vitru 2026 — instruções do projeto

Contexto para qualquer sessão de agente aberta nesta pasta. Leia antes de escrever código.

## O que estamos construindo

Uma ferramenta de retenção de alunos para a Vitru Educação (UNIASSELVI e UniCesumar, EAD).
Não é um painel de risco. É a coisa que transforma alerta em **ação executada com resultado
medido**.

O objeto central do produto não é o aluno, é o **caso**: alguém com causa, ação proposta, dono
e prazo.

Tese, sustentada pela pesquisa no dossiê desta pasta: detecção não é o gargalo. A Vitru já tem
modelo preditivo e agentes de IA em produção. O gargalo é o que acontece depois do alerta.

## As quatro camadas

1. **Sinal** — disparo por evento (prova, entrega, fechamento de módulo, vencimento,
   rematrícula), não recálculo em lote.
2. **Triagem** — fila ordenada por valor recuperável, não por risco. A fila tem exatamente o
   tamanho da capacidade de atendimento.
3. **Ação** — diferente por causa. Nunca uma ação genérica para todos.
4. **Prova** — grupo de controle desde o primeiro dia, visível dentro do produto.

## Contrato do objeto `caso`

**Proposta, a validar na chamada do time.** Nada de código antes disso estar fechado.
Enquanto estiver aberto, trate como verdade e avise se precisar mudar.

```json
{
  "aluno_id": "string",
  "nome": "string",
  "polo": "string",
  "curso": "string",
  "semestre": 1,
  "risco": 0.78,
  "recuperabilidade": 0.42,
  "valor_recuperavel": 3420.00,
  "prioridade": 1,
  "causa": "financeiro | tempo | academico | vinculo | evento_de_vida",
  "evidencias": ["mensalidade 18 dias em atraso", "sem acesso ao AVA ha 11 dias"],
  "proximo_evento": { "tipo": "prova", "em_dias": 3 },
  "distancia_polo_km": 42.5,
  "acao_sugerida": "renegociacao",
  "grupo": "tratamento | controle",
  "dono": "string",
  "prazo": "2026-08-17"
}
```

As cinco causas e as ações que casam com cada uma:

| Causa | Ação |
|---|---|
| `financeiro` | renegociação, parcelamento, microcrédito de dívida pequena |
| `tempo` | remanejar disciplina, reduzir carga do semestre, mudar turno |
| `academico` | tutoria, nivelamento, refazer disciplina |
| `vinculo` | contato humano, reconexão com turma e polo |
| `evento_de_vida` | pausa estruturada sem perder o vínculo |

## Stack

| Camada | Ferramenta | Dono |
|---|---|---|
| Front | Lovable | quem estiver livre; alguém tem que ser responsável pela demo |
| API | Python (FastAPI) | backend |
| Lógica de score, causa e fila | Python + SQL | Yasmim |
| Classificar causa e redigir roteiro | AWS Bedrock | backend |
| Destino da ação | Salesforce (objeto Case, com fila e dono) | backend |

## Estrutura de pastas

```
/logic    lógica de score, causa e ordenação da fila (Yasmim)
/api      API que serve a fila (backend)
/web      o que o Lovable gerar
/data     base sintética e qualquer dado. NUNCA commitar dado real.
```

Cada um mexe na sua pasta. Isso evita conflito de merge. O `README.md` é o único arquivo que
todos editam, então avise antes de mexer nele.

## Convenções de git

- Push direto na `main`. Sem branch, sem PR, sem revisão. Estamos na mesma sala.
- `git pull` antes de todo `git push`. Sempre. Resolve 95% das colisões.
- Repositório **privado**. Se a Vitru entregar base de dados no evento, ela pode ser
  confidencial. A pasta `/data` está no `.gitignore`.

## O que NÃO construir

- **Chatbot para o aluno.** A Vitru já tem dois agentes em produção (Edu e SofIA), metade dos
  times vai fazer isso, e contradiz nossa tese: mensagem automática em massa não funcionou num
  experimento com 800 mil alunos. Se usar IA conversacional, é para preparar o **atendente**,
  não para substituir ele.
- Integração completa com Salesforce. Mock honesto é aceito, mock disfarçado não.
- Modelo complexo. Regressão logística ou árvore resolvem, e são defensáveis na banca.
- Mais de uma plataforma de front.

## Métricas, se houver base de dados

- Nunca acurácia. Base desbalanceada. Use precision e recall no topo da lista, na faixa que a
  operação atenderia de verdade.
- Separação temporal, nunca aleatória. Treina em coortes passadas, testa na seguinte.
- Vazamento: descarte qualquer coluna que só existe depois que o aluno já saiu (situação de
  matrícula, data de cancelamento, motivo registrado).

## Números para o pitch

- Base Vitru: 915,4 mil alunos, mais de 2.500 polos, ticket médio mensal de R$ 285,2,
  margem EBITDA de 38,7%.
- 1 ponto percentual de evasão = 9.154 alunos = R$ 31,3 milhões de receita em 12 meses,
  cerca de R$ 12 milhões de EBITDA.
- Evasão no ensino superior brasileiro: 24,8% em 2024, 26,6% na rede privada.
- Mensagem em massa para 800 mil alunos: efeito zero.
- Georgia State: 800 indicadores, 200 mil intervenções de orientador, 67% mais diplomas.

Fonte de tudo isso, com citação numerada: `Hackathon Vitru 2026 - Pre-pesquisa.docx`.

## Estilo

Português nos comentários e na documentação. Código e nomes de variável em inglês ou
português, tanto faz, mas seja consistente com o arquivo em que está mexendo.
