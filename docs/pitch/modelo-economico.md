# Modelo econômico — G1

Fecha o buraco do slide "Tamanho da oportunidade". Tudo aqui é derivado de
número oficial ou preço de tabela público. Cada premissa está rotulada.

---

## 1. Premissas e fontes

| Premissa | Valor | Fonte |
| :-- | :-- | :-- |
| Receita líquida consolidada | R$ 661,4 mi/trimestre | 🟢 Release 2º tri/2026 |
| Margem bruta ajustada | 70,3% | 🟢 Release |
| Ticket médio híbrido/EAD | R$ 287,4/mês | 🟢 Release |
| Despesa comercial ajustada | R$ 83,7 mi/trimestre | 🟢 Release |
| Captação total (visão anterior) | 106,9 mil/trimestre | 🟢 Release |
| Alunos engajados | 87,8 mil | 🟢 Release |
| **Não engajados** | **19,1 mil** | 🟢 Release |
| Taxa de engajamento | 82,1% (era 72,5%) | 🟢 Release |
| Calouros UniCesumar na safra | ~54,8 mil | 🟢 PPTX, corte 07/08 |
| Ação padrão Agentforce | US$ 0,10 (20 Flex Credits) | 🟢 Salesforce, pacote US$500/100k |
| WhatsApp utility, Brasil | R$ 0,04–0,08 por mensagem | 🟢 Meta, cobrança por mensagem desde 2026 |
| WhatsApp service (resposta do aluno, 24h) | **grátis** | 🟢 Meta |
| Overhead de BSP + impostos | +40% sobre o valor Meta | 🟡 faixa de mercado 15-25% impostos + 10-30% BSP |
| Câmbio | **US$ 1 = R$ 5,50** | 🟡 **premissa — o time confirma** |

---

## 1.1 De onde vem a margem de 70,3% — e o que ela não é

Pergunta que vai vir no Q&A. A resposta precisa estar decorada.

**O que é.** 70,3% é a **margem bruta ajustada** que a Vitru reporta no release do
2º trimestre de 2026. É um indicador divulgado por ela, não uma conta nossa.
Margem bruta é receita líquida menos o custo do serviço prestado — professor,
tutoria, conteúdo, plataforma, tudo que é preciso para entregar a aula. O
"ajustada" é o padrão dos releases da companhia: expurga itens não recorrentes e
não caixa para mostrar a margem operacional recorrente.

**O que ela não é.** Não é lucro. Margem **bruta** fica acima da despesa
comercial, da administrativa, dos juros e dos impostos. Então quando dizemos que
um aluno retido vale R$ 202 por mês, estamos falando de **contribuição bruta** —
o dinheiro que sobra depois de entregar a aula e antes de pagar o resto da
empresa.

**Por que usamos ela e não o lucro líquido.** Porque a pergunta é marginal: *um
aluno adicional que fica, quanto traz?* O custo de captar esse aluno **já foi
gasto** — ele já está na base. A estrutura administrativa também já existe. O que
muda com ele ficando é receita menos custo de entregar a aula. Isso é exatamente
a margem bruta.

**Onde isso é generoso e onde é conservador.**

| | |
| :-- | :-- |
| Generoso | Margem bruta não desconta o custo humano de L3/L4 nem o desenvolvimento do programa. Os R$ 11 são custo **variável marginal** de operação, não custo cheio. |
| Conservador | Assume que o aluno retido rende **só 12 meses**. Uma graduação EAD tem 4 anos. Se ele fica 24 meses, a contribuição dobra e o ponto de equilíbrio cai pela metade. |

### A cadeia completa, número por número

```text
R$ 287,40   ticket médio híbrido/EAD por mês          🟢 release
  × 70,3%   margem bruta ajustada                     🟢 release
= R$ 202,04 contribuição bruta por aluno por mês      🟡 nossa multiplicação
  × 12      meses de permanência assumidos            🟡 premissa nossa
= R$ 2.424  contribuição por aluno retido em 12 meses
```

```text
R$ 11,00    custo de rodar a jornada por aluno        🟡 nossa conta, seção 3
÷ R$ 2.424  contribuição por aluno retido
= 0,45%     ponto de equilíbrio
```

Nenhum passo usa score de risco, projeção de evasão ou dado que a Vitru não
tenha publicado. É ticket × margem × tempo, dividido por custo de tabela.

---

## 1.2 Guardrail: não multiplicamos score por dinheiro

O `ACHADOS.md` mostrou, via calibração de Platt, que `Y_PROBA_EVADIU` é
**ordenação, não probabilidade** (inclinação 0,438; erro de calibração cai de
8,53 p.p. para 1,34 depois de recalibrar). Conta de valor esperado usando o score
bruto sai **inflada em ~70%**.

Todo o modelo abaixo é construído sobre **contagem de alunos do release**
(captação, engajados, não engajados) e ticket médio. Nenhuma linha multiplica
score de risco por receita. Se a banca perguntar, essa é a resposta.

---

## 2. Correção importante sobre o custo de WhatsApp

O especialista da Salesforce falou em **R$ 0,80 por disparo**. Isso não bate com
a tabela pública da Meta.

Desde 2026 a cobrança é **por mensagem**, não por janela de 24h. E as mensagens
do Agente Pós são quase todas da categoria **utility** (transacional:
confirmação de matrícula, próximo passo, prazo), que custa **R$ 0,04 a 0,08**.

**Marketing** é que custa R$ 0,31–0,39. Nosso agente não faz marketing — faz
serviço. E quando o aluno responde, abre uma janela de serviço **gratuita** de
24h.

→ O custo real de canal é **cerca de 10× menor** do que a premissa que estávamos
carregando. Vale confirmar com o time de Salesforce da Vitru, mas a tabela
pública é clara.

---

## 3. Investimento operacional por aluno na jornada de ingresso

No slide, usamos **investimento operacional** porque o valor financia a jornada e
busca gerar ativação e retorno. Na memória de cálculo, cada parcela continua
sendo tratada como **custo variável marginal**. Os R$ 11 não são o investimento
total de implantação: não incluem desenvolvimento nem tempo humano das exceções.

### Agente Pré — antes do RA (pré-venda, no site)

| Item | Qtd | Custo |
| :-- | --: | --: |
| Ações Agentforce | 6 | US$ 0,60 |
| Canal (widget no site) | — | R$ 0 |
| **Subtotal** | | **≈ R$ 3,30** |

### Agente Pós — depois do RA (ingresso, janela de ~90 dias)

| Item | Qtd | Custo |
| :-- | --: | --: |
| Ações Agentforce | 12 | US$ 1,20 |
| Mensagens WhatsApp utility | 10 | R$ 0,60 |
| Overhead BSP + impostos | +40% | R$ 0,24 |
| Respostas do aluno (janela de serviço) | — | R$ 0 |
| **Subtotal** | | **≈ R$ 7,44** |

### Total

> **≈ R$ 11 por aluno** para rodar a jornada de ingresso inteira.

Comparações que fazem esse número falar:

- **1,4%** do proxy de aquisição (R$ 783)
- **5,4%** de **uma** mensalidade de contribuição bruta (R$ 202)
- Menos que o custo de **uma** ligação humana de retenção

---

## 3.1 Restrição de arquitetura: mensageria não é replicável para o polo

A diretoria foi clara na reunião:

- **Salesforce para o polo é replicável e não aumenta custo.** Já existe hoje uma
  página integrada ao Data Lake e ao CRM que o polo acessa — às vezes usa, às
  vezes não.
- **Mensageria não é replicável para o polo.**

Ficou em aberto o que exatamente conta como mensageria. Não vamos disputar o
ponto. Vamos desenhar dentro dele.

**Como o desenho responde a isso:**

| Camada | Quem opera | Replicável ao polo? |
| :-- | :-- | :-- |
| Mensagem ao aluno (WhatsApp, e-mail, push) | **Sede, canal único centralizado** | não precisa ser |
| Tarefa com contexto e SLA | Salesforce, o polo acessa | **sim, e já existe** |
| Ação local (matrícula, documento, atendimento) | Polo | sim |

O polo **nunca envia mensagem** neste desenho. Ele recebe caso triado dentro do
Salesforce que já tem. A mensageria fica na sede, num número só.

Isso é exatamente o que a mentoria recomendou (canal centralizado, não depender
de cada polo) e está registrado no alinhamento mestre. **A restrição não é
obstáculo — é a arquitetura que a gente já tinha escolhido.**

⚠️ **Cuidado de fala:** nunca dizer "cada polo vai ter um agente" nem "o polo vai
mandar mensagem". Dizer: *"a mensageria é centralizada; o polo recebe tarefa no
Salesforce que ele já acessa."*

---

## 4. O ponto de equilíbrio

### A pergunta que a banca vai fazer

*"Essa conta é de qual jornada? Do aluno que entra pelo polo ou do 100% digital?"*

É a pergunta certa, e a resposta é o que torna o número robusto.

### Custo por jornada

| Jornada | Agente Pré | Agente Pós | Custo/aluno |
| :-- | :-- | :-- | --: |
| **100% digital** | sim, widget no site | sim, WhatsApp central | **R$ 11,00** |
| **Via polo** | não — quem vende é o humano do polo | sim, WhatsApp central | **R$ 7,44** |

### O ponto de equilíbrio não depende do tamanho da coorte

Essa é a propriedade que fecha a discussão:

```text
ponto de equilíbrio (p.p.) = 100 × custo por aluno ÷ contribuição por aluno retido
```

Contribuição por aluno retido em 12 meses: R$ 287,4 × 70,3% × 12 = **R$ 2.424**.

| Jornada | Conta | Ponto de equilíbrio |
| :-- | :-- | --: |
| 100% digital | R$ 11,00 ÷ R$ 2.424 | **0,45%** |
| Via polo | R$ 7,44 ÷ R$ 2.424 | **0,31%** |

### A fórmula de Simpson — e como ela se conecta à nossa conta

No cenário de uma instituição financiada por mensalidades, Simpson (2023)
define:

```text
superávit = N × [(n/100) × F − P]
```

onde `N` é a quantidade de alunos alcançados, `n` é a retenção incremental em
pontos percentuais, `F` é a receita líquida gerada pelo aluno retido e `P` é o
custo da atividade por aluno. Para que a atividade se pague:

```text
n ≥ 100 × P ÷ F
```

A adaptação do Marco Zero mantém exatamente essa estrutura:

```text
n ≥ 100 × R$ 11 ÷ R$ 2.424 = 0,454% ≈ 0,45 p.p.
```

Simpson fundamenta a **estrutura econômica**, não as nossas premissas. O paper
não valida o custo de R$ 11, a contribuição de R$ 2.424 nem prevê o impacto do
Marco Zero. Esses valores vêm das fontes e hipóteses declaradas neste documento
e precisam ser confirmados no piloto.

Fonte: Ormond Simpson (2023), *Student Support in Online Learning—We Need to
Talk About Money*, IRRODL 24(4), DOI `10.19173/irrodl.v24i4.7241`, equações
16–18.

> **Custo e base escalam juntos.** Se a coorte for menor, o custo cai na mesma
> proporção. O percentual de equilíbrio é uma propriedade *por aluno*, não da
> coorte.
>
> **Qualquer jornada que a banca escolher, o equilíbrio fica entre 0,31% e
> 0,45%.**

O que muda com a coorte é só o **tamanho absoluto do prêmio**, não a viabilidade.

### Escala absoluta, para dimensionar

| Recorte | Alunos | Investimento operacional da jornada |
| :-- | --: | --: |
| Safra inteira de calouros UniCesumar | 54.829 | R$ 603 mil |
| Só o recorte 100% digital *(estimativa — ver seção 7)* | ~23 mil | R$ 253 mil |
| Piloto dimensionado (ver `plano-pitch.md`) | ~22 mil | R$ 242 mil |

**Formulação segura para o palco:**

> "O investimento operacional é de onze reais por aluno acompanhado do começo ao
> fim. Um aluno que fica devolve isso em **menos de dois dias** de mensalidade. O
> programa se paga com **meio ponto percentual de retenção a mais** — e isso vale
> para qualquer recorte, porque custo e base andam juntos."

⚠️ **Precisão de fala.** Dizer "se paga retendo 0,45% da coorte" soa como se
bastasse 0,45% da coorte ficar, o que é absurdamente baixo diante da realidade
deles. É **retenção incremental**: 0,45 ponto percentual **a mais** do que se
reteria sem o programa. Sempre dizer "a mais".

*(R$ 202 de contribuição por mês = R$ 6,73 por dia. R$ 11 ÷ R$ 6,73 = 1,6 dias.)*

---

## 5. Cenários de impacto

Falamos na métrica que **eles próprios elegeram** no release: a taxa de
engajamento da captação. Saiu de 72,5% para 82,1% em um ano e virou manchete —
então ponto percentual nessa métrica é a linguagem da casa.

> ⚠️ **Correção aplicada em 16/08.** A versão anterior desta seção calculava o
> ganho sobre a captação consolidada da Vitru (106,9 mil por trimestre) e o custo
> sobre a safra de calouros UniCesumar (54.829). São bases diferentes, e a razão
> entre elas — 1,95 — inflava o retorno em quase o dobro. Os números abaixo estão
> na **mesma base**. O ponto de equilíbrio de 0,45% nunca dependeu disso, porque
> é uma razão por aluno.

### A forma robusta: retorno por aluno da coorte

Esta é a conta que sobrevive a qualquer recorte, porque numerador e denominador
falam do mesmo aluno.

```text
ganho por aluno da coorte = efeito (p.p.) × (contribuição + aquisição recuperada)
                          = efeito × (R$ 2.424 + R$ 783)
                          = efeito × R$ 3.207

retorno = ganho por aluno ÷ R$ 11 de custo por aluno
```

| Cenário | Efeito | Ganho por aluno da coorte | Retorno |
| :-- | --: | --: | --: |
| **Conservador** | +1,0 p.p. | R$ 32,07 | **2,9×** |
| **Base** | +2,0 p.p. | R$ 64,14 | **5,8×** |
| **Georgia State** | +3,3 p.p. | R$ 105,83 | **9,6×** |

*"Aquisição recuperada" = despesa comercial que já foi gasta e que hoje se perde
com quem não consolida (R$ 783 × alunos). Não é caixa novo entrando — é caixa que
para de ser desperdiçado.*

**Versão ainda mais apertada, se a banca questionar a aquisição recuperada:** tire
os R$ 783 do numerador e fique só na contribuição. A +1 p.p. o retorno cai para
**2,2×**, e a +3,3 p.p. para **7,3×**. Continua confortável. Vale ter esse número
no bolso.

### Os mesmos cenários em valor absoluto

Base única: safra de calouros UniCesumar, 54.829 alunos, custo de R$ 603 mil.

| Cenário | Alunos a mais retidos | Contribuição em 12 meses | Aquisição recuperada | Ganho total | Retorno |
| :-- | --: | --: | --: | --: | --: |
| **Conservador** | 548 | R$ 1,33 mi | R$ 429 mil | R$ 1,76 mi | 2,9× |
| **Base** | 1.097 | R$ 2,66 mi | R$ 859 mil | R$ 3,52 mi | 5,8× |
| **Georgia State** | 1.809 | R$ 4,39 mi | R$ 1,42 mi | R$ 5,80 mi | 9,6× |

Se a banca preferir dimensionar sobre a captação consolidada (106,9 mil), o
retorno é **o mesmo** — o custo sobe para R$ 1,18 mi na mesma proporção do ganho.
É a propriedade de invariância outra vez.

### Contexto do que está em jogo hoje

```
19,1 mil não engajados × R$ 783 = R$ 15,0 milhões por trimestre
                                  de despesa comercial que não vira aluno
```

Este número é sobre a **captação consolidada** da Vitru, não só UniCesumar. Serve
para dimensionar o problema, não para compor o retorno acima.

---

## 6. Escalabilidade — precisa contratar gente?

Não linearmente, e esse é o argumento.

| Nível | Quem atende | Custo marginal | Volume esperado |
| :-- | :-- | :-- | :-- |
| L0-L2 | Agente (site, WhatsApp) | ~R$ 11/aluno | o comum |
| L3 | Polo | tempo do polo | exceção |
| L4 | Especialista da sede | tempo interno | exceção rara |

O headcount só cresce em L3/L4, que recebem **exceção triada e com contexto
pronto** — não fila bruta. Hoje o polo recebe o aluno perdido sem triagem nenhuma.

**Sobre a adesão dos polos:** o sistema funciona sem que o polo faça nada. As
diretrizes são recomendação, não obrigação. Onde o polo adere, o resultado é
melhor; onde não adere, o digital continua rodando. Isso resolve a objeção de
que não dá para padronizar 1.137 polos.

---

## 7. O que ainda precisa de confirmação

| Item | Impacto se mudar |
| :-- | :-- |
| Câmbio US$/R$ | Baixo — o custo é ~R$ 11, mesmo a R$ 7,00/USD daria ~R$ 14 |
| Número de ações por conversa | Médio — se dobrar, custo vai a ~R$ 22 e o ponto de equilíbrio a 0,9% |
| Contrato Agentforce da Vitru | Baixo — preço de tabela é o teto; contrato enterprise tende a ser menor |
| CAC real | Médio — muda "aquisição recuperada", não o ponto de equilíbrio |
| Permanência média do retido | Médio — usamos 12 meses; se for menos, o retorno cai proporcionalmente |

**Nenhum deles derruba a conclusão.** Mesmo dobrando o custo e cortando a
permanência pela metade, o ponto de equilíbrio fica abaixo de 2% da safra.
