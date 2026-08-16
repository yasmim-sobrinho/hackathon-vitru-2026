# Validação do paper do Simpson

**Simpson, O. (2023).** *Student Support in Online Learning — We Need to Talk
About Money.* International Review of Research in Open and Distributed Learning,
24(4). 17 páginas. Lido integralmente e verificado termo a termo.

---

## Veredito rápido

| Alegação | Está no paper? |
| :-- | :-- |
| Contato proativo antes do início aumenta retenção, com número medido | ✅ **Sim, e com RoI calculado** |
| Fórmula econômica de custo-benefício de retenção | ✅ **Sim, cinco equações** |
| "Falta de orientação prévia" / *course choice mismatch* | ❌ **Não aparece** |
| Pré-requisitos, carga de trabalho mal compreendida | ❌ **Não aparece** |
| Desestimular candidato que não vai avançar | ❌ **Não aparece** |
| IA já traria impacto nesse atendimento | ❌ **Não aparece** |

**Busca literal no texto completo:** `AI` = 0 ocorrências · `artificial` = 0 ·
`chatbot` = 0 · `automat` = 0 · `machine` = 0 · `computer` = 0 · `mismatch` = 0 ·
`advice` = 0 · `pre-enrol` = 0.

As três ocorrências de "technology" e as três de "digital" estão em **nomes de
periódicos na bibliografia** e numa citação da OCDE sobre custo de digitalização.

### O que isso significa para o pitch

A tese de *course choice mismatch* **não pode ser atribuída a este paper**. Ela
pode existir em outro trabalho do Simpson — ele tem dois livros pela Routledge —
mas não neste PDF. **Quem sustenta mismatch é Fouarge & Heß.** Não misturar.

E não dizer em hipótese alguma que "Simpson mostra que IA traria impacto". Se a
banca conferir, cai o pitch inteiro. O paper é de economia de suporte estudantil,
não de tecnologia.

---

## O que o paper realmente entrega — e é melhor

### 1. Tabela 1 — efeitos medidos de contato proativo

Transcrição literal:

| Estudo | Método | Efeito na retenção | Nota |
| :-- | :-- | :-- | :-- |
| Case & Elliot (1997), EUA | Ligações | **+15% a 20%** | 2 a 5 ligações são eficazes |
| Visser (1990), Reino Unido | Cartões-postais | **+27%** | Estudo pequeno |
| Chyung (2001), EUA | Ligações | **Evasão cai de 44% para 22%** | |
| **Simpson (2006), Reino Unido** | **Ligação antes do início** | **+5,1%** | **RoI de 640%** |
| Twyford (2007), Austrália | E-mails motivacionais | **+11,7%** | Significativo a 0,5% |
| Huett (2008), EUA | E-mails motivacionais | **+23,4%** | |

Todas são intervenções de **contato proativo**, comparadas com grupo de
controle. Nenhuma usa IA. Nenhuma é cara.

### 2. As equações — e a descoberta de que já estávamos usando a dele

Notação do paper: `N` alunos no módulo, atividade custando `£P` por aluno, que
aumenta a retenção em `n%`.

```text
(1)  custo total da atividade ................. NP
(2)  alunos extras retidos .................... Nn/100
(3)  custo por aluno extra retido ............. 100P/n
(4)  receita extra por aluno retido ........... G + M
(5)  lucro institucional por aluno ............ G + cM − 100P/n
```

Onde `G` é a receita por aluno que conclui, `M` o custo de recrutar um novo, e
`c` a fração do marketing que se economiza por não precisar repor quem saiu.

> **O nosso ponto de equilíbrio de 0,45% é a equação (3) do Simpson.**
>
> Equilíbrio acontece quando `100P/n ≤ F`, ou seja `n ≥ 100P/F`.
> Com `P = R$ 11` e `F = R$ 2.424`: **n ≥ 0,45%**.
>
> Não é conta inventada por nós. É a fórmula padrão da literatura de retenção,
> aplicada aos números publicados pela Vitru.

### 3. O caso da Open University — o análogo direto do Agente Pós

Projeto de cinco anos na UKOU (Simpson, 2004), transcrito:

- Ligação de **~£10** por aluno, feita **antes do início do módulo**
- Grupo contatado teve **+5,1% de retenção** sobre o grupo de controle
- Custo por aluno retido: `100 × 10 / 5,1 =` **£196**
- Repasse do governo por aluno retido (`G`) ≈ **£1.400**
- Custo de recrutamento (`M`) ≈ **£500**, com `c ≈ 0,5`
- Superávit por aluno: `1.400 + 250 − 196 =` **£1.454**

**É exatamente a nossa intervenção.** Contato proativo, antes do início, de baixo
custo. Ele fez por £10 no telefone; nós fazemos por R$ 11 em canal digital — com
a diferença de que o nosso escala para 55 mil pessoas sem contratar ninguém.

---

## Aplicando a fórmula do Simpson aos números da Vitru

Premissas nossas, já documentadas em `modelo-economico.md`:

```text
P = R$ 11         custo da jornada por aluno
F = R$ 2.424      contribuição de um aluno retido em 12 meses
M = R$ 783        proxy de aquisição
c = 0,5           metade do marketing se economiza (mesmo fator do Simpson)
```

**Cenário com o efeito medido pelo Simpson (n = 5,1%):**

```text
custo por aluno extra retido ...... 100 × 11 / 5,1 = R$ 216
superávit por aluno retido ........ 2.424 + 0,5 × 783 − 216 = R$ 2.600
alunos extras retidos na safra .... 54.829 × 5,1% = 2.796
superávit total .................... 2.796 × 2.600 = R$ 7,3 milhões por safra
```

**Cenário de equilíbrio:** `n = 0,45%`. Qualquer ganho acima disso é superávit.

> Simpson mediu **5,1%** com um telefonema.
> A gente precisa de **0,45%** para empatar.
> **Margem de 11×** entre o que a literatura já entregou e o que precisamos.

### Uma ressalva de honestidade

Na equação (8), o paper multiplica o superávit por aluno (£1.454) pelos **30 mil
alunos novos** do ano, chegando a £4,36 milhões. Mas £1.454 é superávit por
aluno **extra retido**, não por aluno matriculado — multiplicar pela coorte
inteira superestima.

**Nós usamos a versão conservadora:** multiplicamos pelos alunos extras retidos
(2.796), não pela safra inteira. Se replicássemos a conta do paper, daríamos
R$ 142 milhões — número que não vamos usar.

---

## Limitação que o próprio paper declara

Transcrito:

> "as fórmulas se aplicam apenas em circunstâncias específicas, em que atividades
> de suporte bem custeadas levam a resultados de retenção estatisticamente claros
> em ensaios controlados randomizados. Tais ensaios ainda são raros na literatura."

Isso reforça, e não enfraquece, a nossa posição: é exatamente por isso que o
nosso piloto é **randomizado por turma, dimensionado para detectar 3 p.p.**

---

## Como citar no palco

✅ *"Simpson, na Open University, ligava para o aluno antes de o curso começar.
Custava dez libras e aumentava a retenção em cinco vírgula um por cento, com
retorno de seiscentos e quarenta por cento. A gente faz a mesma coisa por onze
reais — e escala para cinquenta e cinco mil pessoas."*

✅ *"Aliás, a fórmula do nosso ponto de equilíbrio é a dele. Custo da atividade
sobre valor do aluno retido. A gente só substituiu os números da Vitru."*

❌ *"Simpson prova que falta orientação prévia."* — não está no paper.

❌ *"Simpson mostra que IA já impacta esse atendimento."* — o paper não menciona
IA uma única vez.

---

## Onde procurar a tese de mismatch, se o time quiser

O que sustenta *course choice mismatch* hoje é **Fouarge & Heß (2023)**, em
*Labour Economics* — associação de 9,1 a 9,3 pontos percentuais, painel alemão
de 2.476 jovens, sem identificação causal.

Se alguém quiser a versão do Simpson, precisa buscar nos livros
*Supporting Students for Success in Online and Distance Education* (2012) ou
*Student Retention in Online, Open and Distance Learning*. **Não temos esses
textos**, então não citar até alguém ler.
