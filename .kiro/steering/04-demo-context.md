# Contexto da demo

O que precisa funcionar na apresentação. Tudo aqui é prioridade sobre qualquer
refinamento.

## Fluxo narrativo

1. **Origem** — candidato chega por anúncio de um curso. Mostrar que a UTM e a
   página já foram capturadas.
2. **Pré-venda** — ele pergunta sobre carreira ou ementa. O agente usa o
   contexto da página, faz **uma** pergunta curta sobre objetivo e explica como
   o curso se conecta a isso. Sem interrogatório.
3. **Conversão** — ele decide avançar. A matrícula é simulada.
4. **Handoff** — mostrar o `StudentEntryContext` sendo carregado no novo estágio:
   "quero X", "consigo estudar Y", "tenho dúvida Z".
5. **Onboarding** — selecionar um cenário de timing. O agente **não pergunta
   tudo de novo**: usa a memória e apresenta só o próximo passo.
6. **Evento** — simular "não realizou primeiro acesso" ou "entrou atrasado". O
   agente age por evento, não por score de risco.
7. **Escalonamento** — criar um caso que exige polo. Mostrar a tarefa com resumo
   e ação pedida, e o retorno fechando o ciclo.
8. **Fechamento** — marcos concluídos e como o piloto mediria ativação.

## O momento que vende a tese

Passo 5. É onde o público vê que o contexto atravessou a matrícula. Se só uma
coisa funcionar na demo, é essa.

## Cenários mínimos

Pelo menos três demonstráveis: `early`, `regular` e `late`. `migration` pode ser
mock declarado, já que a definição não está fechada.

## Regras de demonstração

- Roda **offline**. `MockAgentAdapter` é o default.
- Nenhum número da Vitru aparece sem validação. Dados de persona são fictícios e
  devem ser apresentados como tais.
- Nenhuma promessa de emprego, salário ou percentual de redução de evasão.
- A tecnologia entra **depois** da história do aluno. Agentforce é mencionado
  como motor, não como proposta de valor.

## Estado atual

| Item | Status |
| --- | --- |
| Rotas `/site`, `/whatsapp`, `/demo` | Navegáveis |
| Página de curso UniCesumar | Em construção — identidade visual e ementa já no lugar |
| Captura de UTM + promessa da campanha | Funcional em `/site/curso/:slug` |
| Seletor de cenários | Funcional em `/demo` |
| Conversa com mock adapter | Funcional |
| `StudentEntryContext` visível | Funcional em `/demo` |
| Escalonamento visível | Funcional em `/demo` |
| Widget de agente na página de curso | Não construído |
| Casca do WhatsApp | Não construída |
| Agentes Agentforce | Não construídos — depende de org |
| Painel de métricas | Não construído |

`/site` fica fora do `AppShell` de propósito: a simulação precisa parecer o site
real, e a barra de navegação do protótipo por cima destruiria isso.

## Fallback

Se a integração com Salesforce não estiver pronta no dia, a demo roda inteira no
mock. Isso é decisão de arquitetura (ADR-005), não improviso.
