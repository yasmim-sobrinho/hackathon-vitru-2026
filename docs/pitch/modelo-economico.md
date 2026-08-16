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

## 4. O ponto de equilíbrio

Rodar em toda a safra de calouros UniCesumar:

```
54.800 calouros × R$ 11 = R$ 603 mil por safra
```

Um aluno retido gera R$ 287,4 × 70,3% = **R$ 202 de contribuição bruta por mês**.
Em 12 meses: **R$ 2.424**.

```
R$ 603.000 ÷ R$ 2.424 = 249 alunos
249 ÷ 54.800 = 0,45%
```

> **O programa se paga retendo 0,45% da safra de calouros.**
>
> Menos de 5 alunos em cada mil.

Este é o número mais forte do pitch inteiro. Não depende de nenhum dado que a
Vitru precise liberar.

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
