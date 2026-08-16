# Resposta direta à banca

Texto autoexplicativo, para enviar sem a apresentação. Copiar do bloco abaixo.

---

## MARCO ZERO — Sistema de Ingresso do Aluno · UniCesumar

### 1. Qual a solução?

**Marco Zero é um sistema de ingresso: leva a pessoa da dúvida sobre qual curso
fazer até a primeira atividade entregue.**

Ele cobre a faixa da jornada que hoje está partida ao meio pela matrícula, e
funciona em três camadas:

| | | |
| :-- | :-- | :-- |
| **Camada 1** | O sistema inteiro | Dúvida → Escolha → RA → Ativação → 1ª entrega |
| **Camada 2** | **Agente Pré**, antes do RA | Escuta o objetivo em poucas perguntas, conecta interesse a curso e carreira sem diagnosticar vocação, projeta a rotina real do EAD e converte — registrando intenção, disponibilidade e dúvida |
| **Camada 3** | **Agente Pós**, depois do RA | Recebe esse contexto e conduz o aluno até os marcos que decidem o trimestre, sem perguntar tudo de novo |

O Agente Pré funciona como um **espelho da realidade**, não como uma venda que
empurra matrícula: faz as perguntas que a captação tradicional costuma pular —
como é a rotina de estudo da pessoa, quantas horas livres ela tem na semana — e
usa isso para mostrar, antes da compra, como a jornada EAD vai ser na prática.
Isso cria um contrato de transparência sobre a autonomia que a metodologia exige,
e é exatamente o ponto que a literatura liga à evasão precoce (ver seção 2).
**A compra nunca fica condicionada a essa conversa:** se a pessoa quiser seguir
direto, o agente facilita.

Entre as duas camadas está a peça que não existe hoje: o **Contexto de Entrada**,
que atravessa a matrícula. O que a pessoa disse na venda — inclusive o vínculo
criado nessa conversa — vira o roteiro do onboarding dela, e é o que o Agente Pós
usa para reancorar o propósito quando o aluno enfrenta dificuldade.

O Agente Pós não age por score de risco. Age por **data, evento e status** — RA
gerado sem primeiro acesso, atividade pendente com prazo próximo, M.A.P.A. a 21
dias. Cada marco tem gatilho, canal e registro definidos.

---

### 2. Qual dor resolve?

**A perda de aluno que acontece antes de ele começar.**

| Número | O que é |
| :-- | :-- |
| **18%** | dos alunos evadem dentro do próprio módulo de ingresso |
| **+80 mil** | pessoas por ano, somando os quatro trimestres |
| **19,1 mil** | captados de um trimestre que não registraram engajamento acadêmico nem financeiro — 17,9% de 106,9 mil |
| **5×** | mais risco no calouro do que no veterano, pelo modelo de risco da própria Vitru |

Os dois primeiros vêm de dado interno da Vitru; o terceiro, do release do 2º
trimestre de 2026. **São recortes independentes que chegam ao mesmo tamanho.**

Isso não é evasão ao longo do curso. É gente que **não chega a começar** — e por
isso não se resolve com cobrança nem com retenção reativa.

**Por que a dor nasce antes da matrícula.** No modelo de risco da Vitru, quatro
dos cinco sinais mais relevantes do calouro são de acesso; o quinto é entrega.
Sinais de acesso somam 49,5% do modelo, financeiros somam 17,6%. Isso localiza a
ruptura antes da ativação, mas não explica a causa. Três indícios apontam para o
que está a montante:

- as **ementas dos cursos** são a 2ª página mais acessada do site — existe uma
  busca enorme por clareza sobre o curso;
- **troca de curso** é o 2º processo mais comum do CSC, com casos de até três
  trocas por aluno, para áreas não correlatas — parte da decisão está sendo
  corrigida só depois da compra;
- na literatura, o descompasso entre preferência e curso escolhido esteve
  associado a **+9,3 pontos percentuais** de interrupção do curso inicial
  *(Fouarge & Heß, Labour Economics, 2023 — associação, sem identificação causal)*.

**A hipótese que o piloto testa:** parte do não começo nasce de uma escolha pouco
esclarecida e de uma expectativa corrigida tarde demais.

**A dor tem um lado financeiro que se soma ao acadêmico.** Cada captação carrega
um custo de aquisição já gasto — em um proxy nosso sobre o release, cerca de
**R$ 783** por captação (despesa comercial ajustada ÷ captação do trimestre; não
é o CAC oficial da Vitru, e pedimos a confirmação do número real). Quando o aluno
não engaja, esse investimento se perde junto com a mensalidade futura. Por isso a
dor não é só receita recorrente que deixa de entrar — é receita **e** aquisição.

---

### 3. Qual tecnologia é utilizada?

**Tudo o que a Vitru já tem. A IA é infraestrutura, como energia elétrica — não é
a proposta de valor. O produto é o processo.**

| Camada | Tecnologia |
| :-- | :-- |
| Agentes conversacionais | **Salesforce Agentforce** — dois agentes com bases e guardrails separados |
| Contexto e persistência | **Salesforce CRM + Data Lake**, já integrados |
| Canal com o aluno | **WhatsApp centralizado**, e-mail, push e widget no site |
| Rede humana | Console que o polo **já acessa** hoje, recebendo tarefa com contexto |
| Versionamento | Agentforce DX, projeto Salesforce DX em Git |

**Custos, a preço de tabela público:**

- ação de agente Agentforce: **US$ 0,10**
- mensagem *utility* no WhatsApp Brasil: **R$ 0,04 a 0,08** — não R$ 0,80, que é
  preço de mensagem de marketing. A nossa é serviço transacional, e a janela de
  resposta do aluno é gratuita
- **jornada completa: cerca de R$ 11 por aluno**

**Sobre a rede de polos:** nenhum polo envia mensagem. A mensageria é
centralizada na sede, num canal único. O que chega ao polo é tarefa triada dentro
do Salesforce que ele já usa — replicável e sem licença nova. O sistema roda de
ponta a ponta sem depender da adesão do polo; onde há adesão, o resultado é
melhor.

---

### 4. Qual o diferencial?

**1. O contexto atravessa a matrícula.**
Hoje a venda sabe por que a pessoa comprou e o onboarding não sabe. Ninguém liga
os dois. Essa continuidade é o produto.

**2. Age antes de existir sinal para prever.**
O modelo preditivo da Vitru é bom, e foi ele que nos mostrou onde estão os
marcos. Mas o agente não consulta score em tempo de execução — dispara por data e
evento. Funciona inclusive em quem ainda não gerou comportamento suficiente para
ser pontuado.

**3. Os marcos vieram do dado da Vitru, não de achismo.**
O ponto de virada de 40 dias de acesso ao AVA é o corte do próprio time de
Ciência de Dados. E o M.A.P.A. mais a avaliação presencial somam **7,5 dos 10
pontos** do trimestre — o que define onde o acompanhamento vale mais.

**4. A conta fecha com folga, e a fórmula não é nossa.**
Um aluno retido gera R$ 202 por mês de contribuição bruta (ticket de R$ 287,40 ×
margem bruta ajustada de 70,3%, ambos do release). Em 12 meses, R$ 2.424. Contra
R$ 11 de custo:

> **O programa se paga com um ganho de retenção de 0,45%.**

Essa é a equação de Ormond Simpson para custo-benefício de suporte estudantil
(*IRRODL*, 2023): equilíbrio quando `n ≥ 100P/F`. Substituímos os números
públicos da Vitru. E o mesmo autor mediu, na Open University, **+5,1% de retenção
com uma ligação de £10 feita antes do início do módulo**, com retorno de 640%.

Ele conseguiu 5,1% no telefone. **Precisamos de 0,45%, e fazemos digital.**

**Isso é só o piso — o ganho real é maior.** O cálculo acima usa só a
contribuição recorrente. Somando a aquisição recuperada (o proxy de R$ 783 por
captação, seção 2), o valor de um aluno que passa a engajar chega a **R$ 3.207**.
Num cenário conservador de apenas 1 ponto percentual a mais de engajamento na
safra, o retorno projetado sobre o investimento operacional é de **2,9×** — o
detalhamento por cenário está no modelo econômico completo.

**5. Escala sem headcount linear.**
O digital resolve o comum; polo e especialista recebem apenas exceção já triada.
E não exige padronizar mais de mil polos — as diretrizes são recomendação, não
obrigação.

---

### O que não prometemos

Não prometemos um percentual de redução de evasão. Prometemos **ativação medida**:
primeiro acesso, ambientação, primeira entrega e marcos concluídos. Evasão é
resultado posterior, com defasagem — e prometer número agora seria chute.

O piloto está dimensionado: **randomização por turma** (encontramos efeito de
pares na base, com +29% de chance de intenção de cancelamento a cada 10 pontos
percentuais de colegas com intenção), **cerca de 22 mil alunos** para detectar 3
pontos percentuais com 80% de poder.

---

*Números da Vitru: release do 2º trimestre de 2026 e deck "Motivos de Evasão" do
time de Ciência de Dados. O proxy de aquisição de R$ 783 é cálculo nosso sobre o
release, não o CAC oficial da companhia.*
