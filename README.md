# Hackathon Vitru 2026

15 e 16 de agosto, presencial, sede da Vitru em São Paulo. 32 participantes, 8 times.
Tema: permanência do estudante na graduação.

Este arquivo é o cérebro compartilhado do time. Leia ao chegar. É o único arquivo que todos
editam, então avise no grupo antes de mexer.

## O time

| Pessoa | Papel | Entrega |
|---|---|---|
| Yasmim | Dados e, a partir do dia 2, pitch e relógio | Lógica de score, causa e fila; o cálculo em reais; a apresentação |
| _(a preencher)_ | Backend: API e Salesforce | A API que serve a fila; o caso caindo no CRM; quem congela escopo |
| _(a preencher)_ | Backend: Bedrock e experimento | Classificação de causa, geração de roteiro, desenho do grupo de controle |

Ninguém do time é de front. É para isso que existe o Lovable. Mas **alguém precisa ser
responsável por ter demo rodando**, e não pode ser quem vai apresentar.

## O que vamos construir

Uma ferramenta de retenção que transforma alerta em ação executada com resultado medido.
O detalhe está no `CLAUDE.md`, incluindo o contrato do objeto `caso`.

Três telas bastam:

1. **Fila de hoje** — com indicador de capacidade no topo
2. **Detalhe do caso** — linha do tempo dos sinais, causa inferida com evidência, ação proposta
3. **Painel de impacto** — tratado contra controle, e o contador em reais

O momento que ganha a banca: um controle de capacidade que o jurado mexe. Ele desliza de 5 para
50 atendentes e vê a fila se reordenar na frente dele. Comunica a tese inteira sem falar.

## Decisões fechadas

- O produto é a fila de casos, não o painel de risco
- Ação diferente por causa, nunca ação genérica
- Grupo de controle visível dentro do produto
- Sem chatbot para o aluno (ver `CLAUDE.md`, seção "O que NÃO construir")
- Push direto na `main`, `git pull` antes de todo `push`
- Repositório privado, `/data` no `.gitignore`

## Decisões em aberto

Fechar na chamada antes de sábado:

- [ ] Os campos do objeto `caso` (proposta no `CLAUDE.md`, falta validar)
- [ ] Quais das cinco causas o protótipo vai cobrir de verdade. Resposta boa: duas ou três, não cinco
- [ ] Quem é dono de qual camada (tabela acima)
- [ ] Confirmar que quem apresenta codifica menos no dia 2

## Antes de sábado

- [ ] Pedir liberação de modelo no AWS Bedrock. Passa por aprovação, não é instantâneo
- [ ] Criar e testar conta no Lovable
- [ ] Criar e testar org de desenvolvedor no Salesforce
- [ ] Todos com acesso a este repositório
- [ ] Ler pelo menos a seção 8 do dossiê

## O esqueleto do pitch

Cinco blocos, cinco slides, um dono por bloco. Funciona para qualquer enunciado que caia.

1. **Sinal** — qual dado detecta, e com quanta antecedência
2. **Priorização** — quem tocar, dado que a capacidade é finita
3. **Intervenção** — o que fazer, e por que isso e não outra coisa
4. **Prova** — como sabemos que fomos nós que causamos
5. **Reais** — quanto vale para a companhia

## Roteiro dos dois dias

**Dia 1** — fechar o recorte e ter uma versão feia de ponta a ponta, mesmo tosca. Time que passa
o dia 1 refinando modelo chega no dia 2 sem tela e sem história. O front começa na primeira hora,
com dado falso, sem esperar o modelo.

**Dia 2** — congelar escopo cedo. Reservar as últimas duas horas só para ensaiar, em voz alta,
pelo menos três vezes, cronometrando.

## Pesquisa

`Hackathon Vitru 2026 - Pre-pesquisa.docx` — cerca de 18 páginas, 137 citações, 35 fontes de
sete sistemas de ensino (Brasil, EUA, China, Índia, Coreia, Malásia, Sri Lanka).

Se o tempo for curto, leia a tabela de convergência no fim da seção 8. Resume o que foi
confirmado por fontes independentes.

## Como rodar

_(a preencher quando existir código)_
