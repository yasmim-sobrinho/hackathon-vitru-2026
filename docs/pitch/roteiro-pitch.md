# Roteiro do Pitch — Jornada de Ingresso UniCesumar

Fonte de verdade do **script**. O site (`apps/pitch/index.html`) implementa este
documento. Se os dois divergirem, este arquivo vence.

Estrutura seguindo o deck do Airbnb: **um rótulo de seção por slide, uma ideia por
slide, pouco texto**. Os slides são pano de fundo de uma fala presencial — quem
lê o slide não escuta o pitch.

---

## A tese em uma frase

> **A evasão começa antes da matrícula.**

Não é uma provocação retórica. É o que a base da própria Vitru mostra: existe um
grupo de calouros que pagou, nunca apareceu, e não é visto nem pelo indicador de
evasão nem pelo modelo preditivo.

---

## O arco narrativo (por que a ordem é essa)

O erro comum seria começar defendendo "a venda é mal feita". Ninguém aceita essa
premissa de cara — é acusatório e não está provado. Então o roteiro faz o
caminho inverso, que é o caminho que a evidência realmente permite:

| # | Movimento | O que o ouvinte pensa |
| :-- | :-- | :-- |
| 1 | Afirmo o incômodo: a evasão começa antes da matrícula. | "Como assim? Prova." |
| 2 | Mostro o **sintoma** com dado interno: 11.677 calouros pagaram e nunca abriram a plataforma. | "Isso é real e é grande." |
| 3 | Mostro que o **sistema não enxerga** esse grupo: 99,3% não são sinalizados pelo modelo. | "Ok, temos um ponto cego." |
| 4 | Mostro o que **separa** quem fica de quem some — e que é tudo comportamento de primeira semana. | "Então o jogo é no começo." |
| 5 | **A virada:** se não é dinheiro e não é o curso em si, o que sobra é expectativa. E expectativa se forma na venda. | "…faz sentido. Volta lá pro início." |
| 6 | Volto ao início e apresento o **Agente 1** (venda educacional). | "Ele resolve a causa." |
| 7 | Emendo o **Agente 2** (ingresso/ativação) — que agora é óbvio. | "Claro, senão largou o aluno de novo." |
| 8 | Escala, custo, prova e time. | "Dá pra rodar." |

O ponto 5 é a articulação do pitch inteiro. É o momento em que o problema de
pós-venda vira um problema de pré-venda. Ensaiar essa transição mais que todas
as outras.

---

## Regras de escrita dos slides

- Nada de sigla de mercado financeiro no slide. `2Q26` vira **"2º trimestre de
  2026"** ou some. Se o ouvinte precisa decodificar, o slide falhou.
- Número grande + rótulo curto. A explicação é falada, não escrita.
- Uma frase de contexto por slide, no máximo. Nunca parágrafo.
- Todo número tem fonte no rodapé, em corpo pequeno.
- Número não confirmado nunca aparece sem a marca **"a confirmar"**.
- Marca: azul `#00467a`, navy `#002c4d`, amarelo `#f2c500`, tipografia **Poppins**
  (extraídos do CSS de produção da UniCesumar).

---

# Slide a slide

---

## 01 · CAPA

**Rótulo:** — (sem rótulo, é a capa)

**Título:**
> A evasão começa antes da matrícula.

**Subtítulo (uma linha, simples):**
> Jornada de Ingresso UniCesumar.

**Botões:** `Ver a tese` · `Abrir demos`
*(posição e texto a validar depois — anotado como pendência)*

**Fala (~15s):**
> "A gente vai defender uma frase desconfortável: a evasão começa antes da
> matrícula. E não é opinião — está na base de vocês."

---

## 02 · PROBLEMA

**Rótulo:** PROBLEMA

**Título:**
> 11.677 calouros pagaram. E nunca abriram a plataforma.

**Três cards:**

| Número | Rótulo |
| :-- | :-- |
| **20,9%** | dos calouros nunca acessaram o ambiente virtual |
| **99,5%** | desses estavam em dia com o pagamento |
| **96%** | não entregaram nenhuma atividade |

**Frase de contexto:**
> Não saíram por dinheiro. Simplesmente nunca começaram.

**Rodapé:** Base do hackathon, 55.884 calouros da safra 2026-53. "Nunca acessou"
= zero dias até o primeiro acesso e zero dias de acesso ao AVA.

**Fala (~35s):**
> "Um em cada cinco calouros nunca abriu a plataforma. Não é o aluno que brigou
> com o boleto — 99,5% deles estão em dia. Eles pagaram a matrícula e
> desapareceram. Do ponto de vista da operação, esse aluno está ativo. Do ponto
> de vista da realidade, ele nunca chegou."

---

## 03 · O PONTO CEGO

**Rótulo:** PROBLEMA

**Título:**
> E o modelo de risco não vê nenhum deles.

**Visual:** duas barras comparando o mesmo grupo.

| | Sinalizados pelo modelo |
| :-- | :-- |
| Calouros que acessaram | 56,2% |
| Calouros que **nunca** acessaram | **0,1%** |

**Frase de contexto:**
> O modelo é ótimo prevendo comportamento. Esse grupo não gerou comportamento
> nenhum para prever.

**Rodapé:** `Y_PRED` na base do hackathon. Não é falha do modelo — é limite de
qualquer modelo comportamental.

**Fala (~30s):**
> "E aqui está o ponto cego. O modelo preditivo de vocês é bom: entre os alunos
> que acessam, ele sinaliza mais da metade. Mas nesse grupo que nunca acessou,
> ele sinaliza 0,1%. E é lógico — ele prevê comportamento, e essas pessoas não
> produziram comportamento. Elas são invisíveis para o diagnóstico que já existe.
> É por isso que a gente não veio construir mais um modelo."

---

## 04 · O QUE SEPARA QUEM FICA

**Rótulo:** DIAGNÓSTICO

**Título:**
> Tudo se decide nas primeiras semanas.

**Três comparações (barras de multiplicador):**

| Sinal | Efeito |
| :-- | :-- |
| Fez o questionário do Espaço Calouro | **3,4× menos** saídas |
| Acessou cedo **e** entregou a 1ª atividade | **2,7× menos** saídas |
| Acessou tarde **e** não entregou nada | **2,0× mais** saídas |

**Frase de contexto:**
> A ambientação funciona. Só que apenas 9,7% dos calouros passam por ela.

**Rodapé:** Taxas de evasão/intenção sobre a base de calouros (2,51%). Associação
descritiva, não causal — snapshot de uma safra.

**Fala (~35s):**
> "Quando a gente olha o que separa quem fica de quem some, é tudo comportamento
> de primeira semana. Quem faz a ambientação sai 3,4 vezes menos. O problema:
> menos de 10% dos calouros passam por ela. A UniCesumar já tem o remédio. Ele
> está na prateleira, esperando o aluno descobrir sozinho."

---

## 05 · A VIRADA

**Rótulo:** A PERGUNTA

**Título:**
> Se não é dinheiro, e o conteúdo existe — o que falta?

**Visual:** linha do tempo com o ponto de decisão deslocado para trás.

```
   VENDA ─────── matrícula ─────── 1º acesso ─────── evasão
     ▲                                                  ▲
  onde a decisão                                 onde a gente
  realmente acontece                             costuma olhar
```

**Frase de contexto:**
> Falta alguém ter combinado, na venda, o que esse aluno ia encontrar aqui dentro.

**Fala (~30s):**
> "Então junta: não é dinheiro, porque eles pagaram. Não é falta de conteúdo,
> porque a ambientação existe e funciona. O que sobra é expectativa. A pessoa
> comprou uma coisa e encontrou outra — ou não fazia ideia do que ia encontrar.
> E expectativa não se forma no onboarding. Ela se forma na venda. É por isso que
> a gente diz que a evasão começa antes da matrícula."

---

## 06 · SOLUÇÃO

**Rótulo:** SOLUÇÃO

**Título:**
> Uma jornada de ingresso. Dois agentes. Um contexto.

**Visual:**

```
Agente 1                  Student Entry Context                 Agente 2
Venda Educacional  ──────────────►  (o que ele quer,  ──────────►  Ingresso
antes do RA                          o que pode,                    e Ativação
                                     o que teme)                    depois do RA
```

**Frase de contexto:**
> O que o candidato disse que queria não morre na matrícula. Vira o roteiro do
> onboarding dele.

**Fala (~25s):**
> "Nossa proposta é uma jornada de ingresso com dois agentes. Um antes da
> matrícula, que vende explicando. Um depois, que pega o aluno pela mão. E entre
> os dois, a peça que não existe hoje: o contexto de entrada atravessa o RA."

---

## 07 · PRODUTO — AGENTE 1

**Rótulo:** PRODUTO

**Título:**
> Vender explicando. Não perguntando.

**Ao lado:** demo do WhatsApp/widget rodando.

**Frase de contexto:**
> Ele começa pela intenção, e só pede o dado que muda a recomendação.

**Fala (~50s, com demo):**
> "Cenário real: uma mãe procurando curso para a filha que gosta de animais. O
> atendimento de hoje pede CEP com número antes de dizer qualquer coisa útil. O
> nosso começa pelo interesse, compara os caminhos possíveis, explica a rotina
> real do EAD — e só então pede o CEP, sem número, porque é só para achar polo.
> No fim, ele não registra só uma matrícula. Registra por que essa pessoa
> comprou."

---

## 08 · PRODUTO — AGENTE 2

**Rótulo:** PRODUTO

**Título:**
> O agente não prevê. Ele ativa.

**Ao lado:** demo dos eventos.

**Frase de contexto:**
> Data, evento e status disparam o próximo passo — sem score de risco no meio.

**Fala (~50s, com demo):**
> "Do outro lado, o agente de ingresso. Ele não espera o aluno virar estatística.
> Ele reage a fato: matriculou com 60 dias de antecedência, não fez o primeiro
> acesso, não entregou a primeira atividade. E olha a diferença — ele já sabe por
> que essa pessoa entrou, então não manda mensagem genérica. E quando trava de
> verdade, ele não fala 'procure seu polo'. Ele abre a tarefa com o contexto
> pronto."

---

## 09 · POR QUE ISSO FUNCIONA

**Rótulo:** VALIDAÇÃO

**Título:**
> Já foi testado. Com grupo de controle.

**Três referências:**

| Fonte | Resultado |
| :-- | :-- |
| Georgia State University — assistente conversacional, ensaio randomizado | **+3,3 p.p.** de matrícula no prazo; ~21% menos evasão pré-início |
| Castleman & Page — mensagens personalizadas antes do início | aumento de matrícula a custo de poucos dólares por aluno |
| Open University (Reino Unido) — contato proativo, Ormond Simpson | reter custa menos que recrutar |

**Frase de contexto:**
> Uma replicação posterior mostrou que o efeito não é uniforme: depende de para
> quem e quando. Por isso o nosso recorte é o calouro, na janela de ingresso.

**Fala (~30s):**
> "E isso não é aposta. Georgia State rodou um teste randomizado com um
> assistente conversacional exatamente nessa janela e tirou 3,3 pontos
> percentuais a mais de matrícula efetivada. A honestidade aqui importa: a
> replicação mostrou que o efeito não é uniforme. Ele funciona quando é
> direcionado. É exatamente por isso que a gente escolheu um recorte estreito."

---

## 10 · O QUE ISSO VALE

**Rótulo:** OPORTUNIDADE

**Título:**
> Uma venda que não ativa não se paga.

**Três cards:**

| Número | Rótulo |
| :-- | :-- |
| **19,1 mil** | captações que não viraram aluno engajado no trimestre |
| **~R$ 783** | marketing e vendas alocado por captação (proxy) |
| **~4** | mensalidades cheias só para devolver esse valor |

**Frase de contexto:**
> Quem sai no primeiro trimestre não devolve o custo de aquisição. Nunca.

**Rodapé:** Cálculo próprio sobre o release do 2º trimestre de 2026: R$ 83,7 mi
de despesa comercial ÷ 106,9 mil captações; ticket médio R$ 287,4/mês; margem
bruta ajustada 70,3%. **Proxy, não o CAC oficial** — precisa de validação com
Finanças.

**Fala (~30s):**
> "No trimestre, 19,1 mil captações não viraram aluno engajado. Pelo nosso proxy
> — e é proxy, não é o CAC de vocês — cada captação carrega R$ 783 de despesa
> comercial, e são quase 4 mensalidades cheias só para devolver isso. A conta
> fecha de um jeito só: quem sai no primeiro trimestre nunca se pagou."

---

## 11 · ESCALA

**Rótulo:** MODELO

**Título:**
> Digital no comum. Humano na exceção.

**Visual:** escada de canais.

```
site/app → push/e-mail/SMS → WhatsApp + agente → polo → especialista
```

**Três cards:**

| Número | Rótulo |
| :-- | :-- |
| **US$ 0,10** | preço de lista por ação do agente |
| **5 ações** | ≈ US$ 0,50 por conversa de ingresso |
| **1.137** | polos na base — sem precisar padronizar todos |

**Frase de contexto:**
> O polo recebe exceção com contexto pronto, não fila.

---

## 12 · COMO PROVAMOS

**Rótulo:** PROVA

**Título:**
> Medimos ativação antes de prometer evasão.

**Três colunas:**

| Antes | Ingresso | Depois |
| :-- | :-- | :-- |
| conversão e clareza de escolha | 1º acesso, ambientação, 1ª atividade | permanência 30/60/90 |

**Frase de contexto:**
> Não prometemos "-X% de evasão". Prometemos uma tese testável, com grupo de
> controle.

---

## 13 · TIME

**Rótulo:** TIME

| Pessoa | Frente |
| :-- | :-- |
| Yasmim Sobrinho | Dados e Validação |
| Cristiano Silva | Frontend e Agentforce |
| Eduardo Mattos | Produto e Oferta |
| Victoria Suares | Kiro e Backend |
| Yasmin | Madrinha |

---

## 14 · FECHAMENTO

**Título:**
> Do interesse à permanência.

**Frase:**
> A Vitru já sabe ver o risco. Nós começamos antes de o aluno virar risco.

---

# Anexo A — Números confirmados

## Base do hackathon (`dataset_aluno_predicted_20260807`)

| Item | Valor |
| :-- | :-- |
| Registros | 457.427 |
| Calouros | 55.884 · Veteranos 401.543 |
| Módulo de ingresso | **um só: 2026-53** (snapshot de uma safra) |
| Polos | 1.137 |
| Modalidade dos calouros | EAD (`EGRAD`) 25.395 · semipresencial (`ESPRE`) 30.489 |
| Taxa base de evasão/intenção (calouros) | 2,51% |

**O grupo que nunca acessou** — 11.677 calouros (20,9%):

| Métrica | Valor |
| :-- | :-- |
| Engajamento financeiro 100% | 99,5% |
| Zero atividades entregues | 96,0% |
| `Y_PRED = 0` (não sinalizado) | 99,3% |
| Fez questionário Espaço Calouro | 0,7% |
| Acessou Conheça EAD | 2,7% |
| Evasão/intenção **formalizada** | 1,65% *(abaixo da base — eles não formalizam nada)* |

**Sinais de primeira semana** (taxa vs. base de 2,51%):

| Segmento | n | Taxa | Multiplicador |
| :-- | --: | --: | --: |
| Fez questionário Espaço Calouro | 5.412 | 0,74% | **0,29× (protetor)** |
| Acesso rápido + atividade entregue | 8.885 | 0,93% | 0,37× |
| Entrega 100% das atividades | 3.226 | 0,59% | 0,23× |
| Acesso tardio + zero atividade | 12.054 | 5,00% | **1,99×** |
| Nunca assistiu aula ao vivo | 29.151 | 3,47% | 1,38× |
| Sem Espaço Calouro disponível | 4.712 | 3,35% | 1,34× |
| Primeiro acesso após 60 dias | 1.990 | 4,27% | 1,70× |

**Financeiro não explica o calouro:** 99,3% estão com engajamento financeiro
100%. Os 111 calouros entre 50-99% têm taxa de 69,4% — raríssimo, mas quase
determinístico quando acontece.

## Vitru — release do 2º trimestre de 2026 (oficial)

| Item | Valor |
| :-- | :-- |
| Base total | 1,031 milhão (critério de aluno engajado) |
| Captação total (visão anterior) | 106,9 mil |
| Alunos engajados | 87,8 mil |
| **Não engajados** | **19,1 mil** |
| Taxa de engajamento | 82,1% (era 72,5%) |
| Evasão no trimestre | 62,4 mil · não renovação 38,3 mil |
| Ticket médio híbrido/EAD | R$ 287,4/mês (1º semestre de 2026) |
| Despesa comercial ajustada | R$ 83,7 milhões no trimestre (12,7% da receita) |
| Margem bruta ajustada | 70,3% |
| Híbrido | 58% da captação, +35,3% |

## Contas próprias (rotular como proxy no pitch)

| Conta | Resultado |
| :-- | :-- |
| Aquisição por captação | 83,7 mi ÷ 106,9 mil = **R$ 783** |
| Contribuição bruta por aluno/mês | 287,4 × 70,3% = **R$ 202** |
| Break-even em mensalidades cheias | 783 ÷ 202 = **3,9** |
| Despesa comercial ligada a captação não engajada | 19,1 mil × 783 = **~R$ 15 mi/trimestre** |

**Resposta à pergunta "quem sai no primeiro trimestre se paga?":** não. São
necessárias ~4 mensalidades cheias só para devolver o proxy de aquisição — e
isso *antes* de considerar mensalidade promocional de entrada. A afirmação se
sustenta com os números públicos.

## Fontes externas

| Ref | Fonte |
| :-- | :-- |
| E1 | Rahmani, Groot & Rahmani (2024). *Dropout in online higher education: a systematic literature review.* IJETHE 21:19 |
| E3 | Fouarge & Heß (2023). *Preference-choice mismatch and university dropout.* Labour Economics 83 |
| E4 | Page & Gehlbach (2017). *How an Artificially Intelligent Virtual Assistant Helps Students Navigate the Road to College.* AERA Open 3(4) — RCT, Georgia State, **+3,3 p.p.** |
| E5 | Bailey et al. (2021). *Are AI Conversational Chatbots Uniformly Effective in Reducing Summer Melt?* Research in Higher Education — replicação: efeito **não uniforme** |
| E6 | Castleman & Page (2015). *Summer nudging.* J. of Economic Behavior & Organization 115 |
| E7 | Simpson, O. *Student Retention in Online, Open and Distance Learning* (Routledge) — contato proativo, custo-benefício retenção × recrutamento |
| E8 | Instituto Semesp (2025). *15º Mapa do Ensino Superior*, evasão EAD privado **64,1%** (coorte 2019-2023) |

---

# Anexo B — Pendências para as madrinhas e padrinhos

Nada aqui entra no slide sem confirmação.

## Sobre a base

1. **`QT_DIA_ATE_PRI_ACESSO = 0` combinado com `QT_DIA_ACESSO_TOTAL = 0`
   significa mesmo "nunca acessou"?** É a leitura que sustenta o slide 02. Se
   `0` for placeholder de nulo com outro significado, o número muda.
2. **`Y_PRED` tem três valores (0, 1, 2), não dois.** `Y_PRED = 2` bate
   exatamente com os 5.044 de `FL_EVADIU = 1`. Confirmar que `2` = já evadiu e
   `1` = risco previsto. *(A `memoria-calculo-evasao.md` antiga tratou o campo
   como binário — revisar aquele número de 52.345.)*
3. **A base tem um único módulo de ingresso (2026-53).** Confirmar que é um
   snapshot precoce de uma safra. Se for, não dá para citar taxa de evasão de
   ciclo completo a partir dela — só sinais precoces.
4. **`% Engajamento financeiro` aparece como o maior detrator (50.029
   ocorrências) mesmo com 99,3% dos calouros em 100%.** A atribuição de detrator
   é marginal/relativa e não absoluta? Isso muda como lemos a lista de detratores.
5. **`EGRAD` = EAD e `ESPRE` = semipresencial?** É a leitura pelos códigos de
   curso. A diferença entre modalidades no grupo "nunca acessou" é pequena
   (20,5% vs 21,2%) — confirmar antes de afirmar que a modalidade não separa.
6. **Existe snapshot do aluno no momento em que ele era calouro?** Hoje só temos
   o estado atual. Sem isso, quem entrou tarde e virou veterano some da análise —
   é o viés que o time levantou.
7. **Máximo de `QT_DIA_ATE_PRI_ACESSO` é 6.217 dias.** Outlier ou reingresso?

## Sobre o negócio

8. **As duas primeiras mensalidades são R$ 19,90?** Muda o break-even de ~4 para
   ~6 meses. Hoje está fora do slide por não estar confirmado.
9. **Os 7 pontos percentuais a mais de evasão em venda 100% digital** (sem
   contato de polo/humano) — vindo da madrinha. É o número mais forte que temos
   para ligar venda e evasão. **Se for confirmado, ele vira o slide 05.**
10. **R$ 783 como proxy de aquisição:** qual o CAC real e qual o denominador
    certo (captação bruta, líquida, ou matrícula efetivada)?
11. **"O aluno se paga em duas mensalidades e custa 7× menos manter":** confirmar
    a origem. Conflita com nosso proxy de ~4 mensalidades.
12. **Custo por ação do Agentforce:** US$ 0,10 é preço de lista. Qual o
    contratado, e uma "interação" equivale a quantas ações?

---

# Anexo C — Decisões pendentes do time

- **Botões da capa:** texto e destino a definir.
- **Duração:** o roteiro acima roda em ~6 min com as duas demos. Para 5 min,
  cortar o slide 11 (escala) e encurtar a demo do Agente 2.
- **Nome do produto:** "Jornada de Ingresso". O nome "Sentry" não existe em
  nenhum arquivo do repositório — não foi usado e não será.
