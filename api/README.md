# Bot de pré-venda

Dois arquivos aqui:

- **`bot_pre.agent`** — export do Agentforce, template `SvcCopilotTmpl__AgentforceServiceAgent`,
  como está hoje na org. É o ponto de partida para o dev.
- **`prompt_agente_prevenda.md`** — as instruções de negócio do agente de pré-venda,
  escritas a partir da análise da base. É o conteúdo que precisa entrar no `.agent`.

## Leia antes de mexer: o template não serve para pré-venda como está

`bot_pre.agent` é o template padrão de atendimento pós-venda da Salesforce. Três coisas
travam o caso de uso de pré-venda.

**1. O portão de verificação bloqueia tudo.** O `agent_router` só libera os subagentes
quando `@variables.isVerified == True`, e a verificação exige um Contact existente com
e-mail cadastrado. **Um prospecto de pré-venda não é Contact, não tem cadastro e não tem
o que verificar.** Do jeito que está, a conversa morre no `ServiceCustomerVerification`.

Caminho: criar o subagente de pré-venda pendurado direto no router, sem a condição
`available when @variables.isVerified == True`, igual ao `GeneralFAQ` já faz hoje.

**2. Cinco subagentes são de e-commerce e não têm nada a ver.** `CaseManagement`,
`AccountManagement`, `ReservationManagement`, `DeliveryIssues` e `OrderInquiries` falam
de pedido, entrega e reserva. Se ficarem no router, o classificador vai mandar aluno
para eles. Remover ou desativar.

**3. O idioma está errado.** `default_locale: "en_US"` e `additional_locales: "en_GB"`.
Trocar para `pt_BR`, e traduzir as mensagens de `system.messages`.

## O que precisa ser construído

**Um subagente novo**, algo como `OrientacaoEscolha`, com as instruções do
`prompt_agente_prevenda.md` no bloco `reasoning.instructions`.

**Ações que o subagente precisa** e que não existem no template:

| Ação | O que faz |
|---|---|
| `GetCursoDetalhes` | grau, duração, o que o diploma habilita, o que exige registro |
| `GetPolosPorCEP` | polos próximos e o que acontece presencialmente em cada |
| `GetCursosPorObjetivo` | catálogo filtrado por objetivo, para o redirecionamento |
| `RegistrarOrientacao` | grava os campos da tabela abaixo no Lead ou Opportunity |

`AnswerQuestionsWithKnowledge` já existe no template e pode servir de base, apontando
para artigos de conhecimento com o catálogo de cursos.

**Campos a criar** no objeto de Lead, que são o que permite medir depois se a conversa
melhorou a permanência:

`objetivo_declarado`, `tipo_objetivo`, `profissao_citada`, `curso_inicial`,
`houve_descompasso`, `curso_final`, `ciente_habilitacao`, `ciente_grau`,
`ciente_duracao_valor`, `desfecho`

Os dois que mais importam são `houve_descompasso` e `curso_final`. São eles que mostram
se o agente está corrigindo escolha errada antes de virar evasão.

## Por que este agente existe

Da análise em `../ACHADOS.md`:

- **24,2% dos ingressantes nunca acessam o AVA.** São 57.763 pessoas
- **48,5% deles estão com a mensalidade em dia.** Não é dinheiro
- A taxa de renegociação é igual à de quem acessa, 9,2% contra 9,7%. Não é aperto
- A taxa varia de **12,0% a 36,7% entre cursos**, e o efeito de curso sobrevive a
  controlar idade, entrada tardia, modalidade, tempo de casa e 705 efeitos fixos de polo
  (LR = 1.587, p ≈ 0)

Ou seja, quem some não some por circunstância de vida. Some porque a compra não era o
que imaginava. É escolha, e escolha se corrige antes da matrícula.

## Métrica

**Não é conversão.** É a taxa de alunos que nunca acessam o AVA, comparando quem passou
pelo agente com quem não passou, com grupo de controle. Hoje está em 24,2%.

Secundária: quantas matrículas foram redirecionadas para outro curso. Redirecionamento é
sucesso, não é objeção contornada.
