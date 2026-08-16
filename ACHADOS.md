# Achados da base

Análise do `dataset_aluno_predicted_20260807`, retrato de 07/08/2026.
Tudo aqui é reprodutível por `logic/personas.py` e pelos scripts de análise.

## 1. O que a base é, e o que ela não é

457.427 linhas, uma por aluno, `ID_ALUNO` sequencial e anonimizado, sem duplicados.

**É só Unicesumar.** Confere número por número com o slide 12 do deck: 54.829 calouros
e 397.554 veteranos, depois de excluir os já evadidos. A Uniasselvi, com 531 mil alunos,
não veio. Cobrimos 46% da base das duas marcas.

Consequência direta: não dizer "1 milhão de alunos" apoiado neste arquivo. São 452 mil
vivos mais 5 mil já evadidos.

Duas modalidades por prefixo de `CD_CURSO`: EGRAD com 347.185 e ESPRE com 110.242.

### Não existe rótulo de resultado futuro

`FL_EVADIU = 1` marca quem **já saiu**, não quem vai sair. São os mesmos 5.044 com
`Y_PRED = 2`, cluster "Já Evadiu" e motivos em branco. Estão pontuados na faixa 0-10,
por isso qualquer precision@k contra eles dá zero.

O único desfecho observado é `FL_INTENCIONOU_CANCELAMENTO`, com 41.564 casos.
**Não prometer acurácia preditiva na banca.** Não dá para medir com este arquivo.

### Três em cada quatro saem sem avisar

Dos 5.044 que já evadiram, só **24,5% tinham declarado intenção antes**, e 59% estavam
pagando em dia quando saíram. O único alarme antecipado que existe cobre um quarto do
fenômeno.

## 2. Os oito estados

| Estado | Alunos | % | Casa | Idade entrada | Idade hoje | Conclusão | Nota | Paga | Risco | Sinalizado | R$mi/mês |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1. Calouro do trimestre | 54.829 | 12,0 | 0 | 30 | 30,0 | 0% | 0 | 99,4% | 44,0 | 45,3% | 15,6 |
| 2. Nunca começou | 45.786 | 10,0 | 2 | 29 | 29,5 | 0% | 0 | 35,5% | 27,4 | 29,1% | 13,1 |
| 3. Paga e sumiu | 24.441 | 5,3 | 9 | 27 | 29,0 | 30% | 30 | 100% | 10,2 | **0,4%** | 7,0 |
| 4. Pendurado | 15.152 | 3,3 | 20 | 28 | **33,5** | 62% | 0 | 50,7% | 30,2 | 21,6% | 4,3 |
| 5. Aperto financeiro | 9.181 | 2,0 | 6 | 29 | 31,5 | 18% | 0 | 0% | 24,0 | 6,0% | 2,6 |
| 6. Silencioso total | 8.011 | 1,8 | 10 | 28 | 30,5 | 29% | 0 | 0% | 35,2 | 21,6% | 2,3 |
| 7. Em curso | 294.983 | 64,5 | 6 | 29 | 31,0 | 25% | 67 | 79,6% | 14,9 | 5,5% | 84,1 |
| 9. Já evadiu | 5.044 | 1,1 | 2 | 28 | 28,5 | 2% | 0 | 59,0% | — | — | 1,4 |

Casa em trimestres. Nota e conclusão em mediana. Risco é `Y_PROBA_EVADIU` médio.

## 2.1 Idade: cuidado com essa variável

`QT_IDADE_ALUNO` é a **idade no ingresso, não a de hoje**. Confirmado pela correlação
de **+0,442** entre ano de ingresso e idade média: se fosse idade atual, seria
fortemente negativa, porque quem entrou em 2013 estaria treze anos mais velho agora.
A média fica entre 29 e 31,5 em todas as coortes de 2013 a 2026.

A coluna `idade_hoje` em `logic/personas.py` soma os anos de casa e reconstrói a idade
atual estimada. Faz diferença no pendurado, que entra com 28 e hoje tem 33,5.

Distribuição, nas duas leituras:

| Faixa | No ingresso | Hoje (estimada) |
|---|---|---|
| Até 21 | 19,8% | 11,0% |
| 22 a 25 | 16,2% | 17,1% |
| 26 a 30 | 18,3% | 19,5% |
| 31 a 40 | 26,7% | 29,0% |
| 41 a 50 | 14,4% | 17,2% |
| 51+ | 4,5% | 6,1% |

**Isso contradiz o dossiê de pré-pesquisa.** A seção 6 cita o Censo EAD.BR dizendo que
cerca de 76% estão entre 26 e 40 anos. Aqui a faixa de 26 a 40 tem 45,0% na entrada e
48,5% hoje.

Provavelmente as duas fontes estão certas medindo coisas diferentes, já que o Censo
cobre o setor inteiro e mede o aluno matriculado hoje, enquanto esta base é só
Unicesumar e registra a idade de entrada. Mas **o número do dossiê não descreve esta
base**, então não usar os dois juntos no mesmo slide.

E o ponto que muda o desenho da solução: **um quinto do público entra com 21 anos ou
menos**. O retrato de "adulto que trabalha e estuda à noite", que veio da pesquisa
internacional, vale para a maioria mas não para todos.

A coluna crua tem lixo, com mínimo 0 e máximo 207. São 54 alunos descartados ao filtrar
para a faixa de 15 a 90 anos.

### O pendurado, que a base esconde

15.152 alunos com mediana de **cinco anos de casa**, 62% do curso concluído e nota
mediana zero, ou seja, não cursam nada agora. Metade ainda paga.

**5.779 deles já passaram de 75% do curso.** Estão a poucas disciplinas do diploma e
pararam. O máximo de tempo de casa nessa faixa passa de vinte anos.

É a persona mais alinhada ao enunciado, que fala em permanecer, avançar e **concluir**.

### O paga e sumiu, ponto cego do modelo

24.441 alunos pagando 100% em dia, sem acessar o AVA, com nota mediana 30 e 65,6% sem
nenhuma disciplina aprovada. O modelo sinaliza **0,4%** deles, porque o indicador
financeiro está verde.

Não é lucro seguro, é dívida diferida. Mas atenção, o contraste é de grau: 46,1% do
grupo "em curso" também tem zero disciplina aprovada. A diferença entre os dois é de
cerca de 20 pontos, não de natureza.

## 3. Os pontos cegos, somados

**60.740 alunos (13,3% da base, R$ 17,3 milhões por mês)** têm nota abaixo de 60, não
acessam o AVA e não são sinalizados pelo modelo.

Concentração por estado: 65,9% do silencioso total, 62,4% do paga e sumiu, 50,3% do
nunca começou.

Esse é o território da proposta. Não competir com o modelo onde ele funciona, cobrir
onde ele é cego por construção.

## 4. Achados estatísticos

### O score não é probabilidade, é ordenação

Calibração de Platt contra intenção de cancelamento: **a = −1,436 e b = 0,438**.
Inclinação bem abaixo de 1 indica score sobredisperso, espalhado demais nos extremos.
O erro de calibração cai de 8,53 pontos percentuais para 1,34 depois de recalibrar.

**Usar `Y_PROBA_EVADIU` para ordenar a fila, nunca para multiplicar por dinheiro.**
Conta de valor esperado com o score bruto sai inflada em cerca de 70%.

Discriminação contra intenção: AUC de 0,658 em veteranos e 0,583 em calouros.

### Efeito de polo, real e transversal à modalidade

Sobredispersão binomial por polo, já recalibrado, em polos com 100 ou mais alunos:
**dispersão de 4,49 contra 1 esperado sob H0**, p essencialmente zero, com 9,2% dos
polos além de 3 desvios quando o acaso daria 0,27%.

O mesmo polo é ruim nas duas modalidades: correlação de 0,523 entre a taxa de EGRAD e
a de ESPRE do mesmo polo, e 16 polos no decil pior de ambas quando o acaso daria 5.
Tamanho do polo não explica, correlação de posto de apenas 0,077.

Ou seja, é propriedade do polo, não da modalidade. Mas o ganho é modesto: arrumar os
16 piores vale 908 intenções, ou 2,3% do total. O valor está em **usar polo como
variável**, que o modelo hoje não faz bem, mais do que em campanha polo a polo.

### Efeito de pares, com o próprio aluno excluído

Turma definida como polo × curso. Regressão logística de intenção contra o score
individual mais a taxa de intenção dos colegas, sem contar ele mesmo:

**coeficiente +2,537, erro padrão 0,092, z = 27,7.** Razão de chances de **1,29 para
cada 10 pontos percentuais a mais de colegas com intenção**, controlando pelo risco
individual.

ICC no nível da turma: 0,0146 em polo × curso e 0,0194 em curso × módulo. Curso sozinho
e módulo sozinho quase não agrupam, é o cruzamento que agrupa.

**O modelo é cego a isso.** Conforme a exposição a pares sobe, a intenção observada vai
de 7,7% para 12,7%, e o risco predito fica parado entre 15,8 e 16,6.

### Consequência para o piloto

O ICC obriga a randomizar **por turma, não por aluno**. Randomizar por aluno dentro da
mesma turma contamina tratamento e controle, e subestima o efeito.

Efeito de desenho: 1,4 se a unidade for polo × curso, e 4,9 se for curso × módulo.

Dimensionamento com alfa 0,05 bilateral e poder 80%, sobre base de 21,7% de intenção
nos sinalizados: detectar 3 pontos percentuais exige 15.626 alunos em alocação 90/10,
que com o efeito de desenho vira **cerca de 22 mil**. Menos que 3 pontos não é
detectável neste ciclo.

## 5. O que testamos e NÃO se sustentou

**A hipótese de que presencialidade agrava a evasão.** Vinha da literatura indiana, onde
distância até o centro de estudo era o motivo número 1. Aqui deu o inverso: dispersão de
polo de 3,59 em EGRAD contra 2,47 em ESPRE. No teste pareado nos 465 polos que atendem
as duas modalidades, ESPRE é pior em só 46% deles, com p de 0,063 na direção oposta.

**Idade não move a intenção.** A taxa fica entre 9,0% e 10,7% em todas as doze células
de faixa etária cruzada com modalidade. Curiosamente o modelo acredita que importa, dando
risco crescente com idade no ESPRE, de 17,6 a 22,1. A observação não confirma.

Ressalva: esse teste usou a idade de ingresso, antes de descobrirmos que ela não é a
idade atual. Como o efeito deu exatamente zero e a correção desloca as faixas em poucos
anos, é improvável que mude a conclusão, mas vale refazer com `idade_hoje` se sobrar
tempo.

**Os motivos promotores são inúteis.** `PC_INTENCAO_CANCEL_X_CONCLUSAO` aparece como
promotor número 1 em 88% a 98% de todos os estados. O campo é degenerado. Os detratores
sim discriminam.

## 6. Detratores, e a diferença entre comum e perigoso

| Detrator principal | Alunos | Risco médio |
|---|---|---|
| % aprovação em disciplinas | 194.548 | 22,6 |
| % conclusão do curso | 191.476 | 10,5 |
| **% entrega de atividades** | **38.919** | **46,8** |
| Intenção cancel. x conclusão | 9.638 | 45,5 |
| Dias de acesso ao AVA | 4.043 | 41,1 |
| % engajamento financeiro | 6.073 | 31,3 |

Os dois primeiros cobrem 85% dos alunos e têm risco baixo, funcionam quase como motivo
padrão. **Entrega de atividades é o único que junta volume e risco alto.**

## 7. A ambientação quase não acontece

Adesão entre calouros: 9,7% fazem o questionário do Espaço Calouro e 3,2% o do
Conheça EAD. Só 20,2% acessam o Conheça EAD.

Por isso as variáveis de ambientação têm a menor importância preditiva do modelo, entre
37 e 263 contra 2.342 do acesso ao AVA. Não é que não funcione, é que não acontece.

Quem faz tem risco 38,5 contra 43,7 de quem não faz.

É a ação preventiva universal que o enunciado pede, e está disponível.

## 8. Limites metodológicos a declarar na banca

**Reconstrução por coorte não separa três coisas.** Efeito de maturidade, efeito de época
e sobrevivência seletiva são colineares num retrato único. As personas descrevem estados
de hoje, não trajetórias.

**Quem se formou não está na base.** Por isso a conclusão mediana sobe até a coorte de
2022 e depois cai: as coortes antigas são compostas por quem empacou.

**Problema do reflexo (Manski, 1993).** O agrupamento de pares é teto para contágio, não
estimativa dele. Contágio real, contexto compartilhado e seleção correlacionada são
indistinguíveis sem variação exógena.

**Intenção não é evasão.** Todo o trabalho de calibração e polo usa intenção como
desfecho, porque é o único observado.

## 9. Perguntas em aberto para os mentores

1. Seis variáveis citadas nos motivos não vieram na base: `FL_COMPLETOU_AMBIENTACAO`,
   `FL_ACESSOU_ESPACO_CALOURO`, `PC_ACESSO_AVA_PERIODO_PEGAGOGICO`, `PC_COB_LIQ_ATE_VCTO`,
   `PC_ENTREGA_ATIV` e `PC_INTENCAO_CANCEL_X_CONCLUSAO`
2. Qual o horizonte da predição, e como o evento de evasão foi definido
3. Data de corte das features contra a data do evento, para checar vazamento
4. Os motivos detratores são SHAP ou regra fixa
5. ESPRE é semipresencial
6. `CD_MODULO_INGRESSO` guarda o ingresso original ou o reingresso
7. Reconecta e Recomeço: quem é elegível, qual a adesão, e existe grupo de controle
8. `PC_DESEMP_ATIV` chega a 250 e `QT_DIA_ATE_PRI_ACESSO` a 6.217 dias
