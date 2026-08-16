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

## 1.1 Guardrail: não multiplicamos score por dinheiro

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
do agente de ingresso são quase todas da categoria **utility** (transacional:
confirmação de matrícula, próximo passo, prazo), que custa **R$ 0,04 a 0,08**.

**Marketing** é que custa R$ 0,31–0,39. Nosso agente não faz marketing — faz
serviço. E quando o aluno responde, abre uma janela de serviço **gratuita** de
24h.

→ O custo real de canal é **cerca de 10× menor** do que a premissa que estávamos
carregando. Vale confirmar com o time de Salesforce da Vitru, mas a tabela
pública é clara.

---

## 3. Custo por aluno na jornada de ingresso

### Agente 1 — Escolha (pré-venda, no site)

| Item | Qtd | Custo |
| :-- | --: | --: |
| Ações Agentforce | 6 | US$ 0,60 |
| Canal (widget no site) | — | R$ 0 |
| **Subtotal** | | **≈ R$ 3,30** |

### Agente 2 — Ingresso (pós-matrícula, janela de ~90 dias)

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

| Jornada | Agente 1 (Escolha) | Agente 2 (Ingresso) | Custo/aluno |
| :-- | :-- | :-- | --: |
| **100% digital** | sim, widget no site | sim, WhatsApp central | **R$ 11,00** |
| **Via polo** | não — quem vende é o humano do polo | sim, WhatsApp central | **R$ 7,44** |

### O ponto de equilíbrio não depende do tamanho da coorte

Essa é a propriedade que fecha a discussão:

```text
ponto de equilíbrio (%) = custo por aluno ÷ contribuição por aluno retido
```

Contribuição por aluno retido em 12 meses: R$ 287,4 × 70,3% × 12 = **R$ 2.424**.

| Jornada | Conta | Ponto de equilíbrio |
| :-- | :-- | --: |
| 100% digital | R$ 11,00 ÷ R$ 2.424 | **0,45%** |
| Via polo | R$ 7,44 ÷ R$ 2.424 | **0,31%** |

> **Custo e base escalam juntos.** Se a coorte for menor, o custo cai na mesma
> proporção. O percentual de equilíbrio é uma propriedade *por aluno*, não da
> coorte.
>
> **Qualquer jornada que a banca escolher, o equilíbrio fica entre 0,31% e
> 0,45%.**

O que muda com a coorte é só o **tamanho absoluto do prêmio**, não a viabilidade.

### Escala absoluta, para dimensionar

| Recorte | Alunos | Custo do programa |
| :-- | --: | --: |
| Safra inteira de calouros UniCesumar | 54.829 | R$ 603 mil |
| Só o recorte 100% digital *(estimativa — ver seção 7)* | ~23 mil | R$ 253 mil |
| Piloto dimensionado (ver `plano-pitch.md`) | ~22 mil | R$ 242 mil |

**Formulação segura para o palco:**

> "Cada aluno custa onze reais para acompanhar do começo ao fim. Um aluno que
> fica devolve isso em **menos de dois dias** de mensalidade. O programa se paga
> retendo menos de meio por cento da coorte — e isso vale para qualquer recorte,
> porque custo e base andam juntos."

*(R$ 202 de contribuição por mês = R$ 6,73 por dia. R$ 11 ÷ R$ 6,73 = 1,6 dias.)*

---

## 5. Cenários de impacto

Falamos na métrica que **eles próprios elegeram** no release: a taxa de
engajamento da captação. Saiu de 72,5% para 82,1% em um ano e virou manchete —
então ponto percentual nessa métrica é a linguagem da casa.

Base: 106,9 mil captações/trimestre. Cada **+1 p.p.** = **+1.069 alunos engajados**.

| Cenário | Ganho na taxa de engajamento | Alunos/trimestre | Contribuição bruta em 12 meses | Aquisição recuperada |
| :-- | --: | --: | --: | --: |
| **Conservador** | +1,0 p.p. | 1.069 | R$ 2,59 mi | R$ 837 mil |
| **Base** | +2,0 p.p. | 2.138 | R$ 5,18 mi | R$ 1,67 mi |
| **Georgia State** | +3,3 p.p. | 3.528 | R$ 8,55 mi | R$ 2,76 mi |

*"Aquisição recuperada" = despesa comercial que já foi gasta e que hoje se perde
com quem não consolida (R$ 783 × alunos).*

**Retorno no cenário conservador:**

```
Ganho:  R$ 2,59 mi (contribuição) + R$ 837 mil (aquisição) = R$ 3,43 mi
Custo:  R$ 603 mil
Retorno: 5,7× — no cenário mais pessimista
```

No cenário Georgia State, o retorno é **18,8×**.

### Contexto do que está em jogo hoje

```
19,1 mil não engajados × R$ 783 = R$ 15,0 milhões por trimestre
                                  de despesa comercial que não vira aluno
```

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
