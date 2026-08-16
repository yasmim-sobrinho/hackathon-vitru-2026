# Q&A da banca — Marco Zero

**Formato:** 5 min de pitch + 3 min de perguntas. Ordem por sorteio.
**Avaliação:** 5 critérios × 20 pontos = 100.

Este documento é organizado pelos critérios de avaliação, porque é assim que a
banca vai pensar. Cada seção: onde estamos fortes, onde somos atacáveis, e a
resposta pronta.

---

## Regras de defesa

1. **Nunca inventar número.** Se não sabemos, dizer "não temos esse dado, e é por
   isso que não está no slide".
2. **Nunca prometer redução de evasão em %.** Prometemos ativação medida.
3. **Rotular proxy como proxy** antes que perguntem.
4. **A restrição vira desenho.** Toda limitação que eles levantarem já está
   incorporada — mostrar isso, não contornar.
5. Resposta de 20 a 30 segundos. Três minutos dão para 6 a 8 perguntas.

---

# Critério 1 · Aderência ao desafio (20 pts)

*"Clareza na definição do problema de evasão e aderência da solução ao desafio."*

### Onde estamos fortes

O desafio diz que o diagnóstico já existe e pede **ação preventiva, concreta,
escalável e segura**. Nosso recorte responde item a item, e o problema abre com
número **absoluto e publicado** por eles: 19,1 mil pessoas captadas no trimestre
que não engajaram, de 106,9 mil. Não é projeção de modelo, é contagem do release.

### ❓ "De onde vem esse 19,1 mil?" ⚠️

> Do release do segundo trimestre de vocês. Captação de 106,9 mil, 87,8 mil
> engajados, taxa de engajamento de 82,1%. A diferença é 19,1 mil.
>
> E aqui um cuidado que a gente faz questão de declarar: engajamento, na
> definição do release, é contato acadêmico **ou** financeiro. Então esses 19,1
> mil não são pessoas que evadiram no meio do curso — são pessoas que não
> registraram nem uma coisa nem outra. Operacionalmente, não começaram. É
> exatamente a população que a gente quer atacar.

### ❓ "Esse número é UniCesumar ou consolidado?"

> Consolidado. O release não segmenta por marca, e a gente não vai fingir que
> segmenta. O recorte UniCesumar aparece no dado do time de Ciência de Dados de
> vocês, onde a safra de calouros é de 54.829 e onde dá para separar calouro de
> veterano.

### ❓ "Vocês não estão resolvendo a evasão, só o começo dela."

> Correto, e é deliberado. A evasão do veterano e a do calouro são problemas
> diferentes — no modelo de vocês, o veterano pesa por andamento e pagamento, o
> calouro pesa por presença. A gente escolheu o recorte onde o risco é 5 vezes
> maior e onde ninguém está atuando. Resolver os dois no mesmo MVP seria resolver
> mal os dois.

### ❓ "O enunciado fala em permanência, não em ingresso."

> Permanência começa por começar. Um aluno que nunca acessa não tem o que
> permanecer. E a fase 4 do nosso roadmap é exatamente o veterano — mas com outro
> desenho, porque o fator lá é progresso, não presença.

### ❓ "Vocês usaram a base que a gente entregou?"

> Usamos para entender o terreno. Mas a fundamentação do palco vem do material
> de vocês: o deck do time de Ciência de Dados e o release do trimestre. A base
> anonimizada é um retrato único, sem congelamento temporal — dá para ordenar,
> não dá para afirmar taxa. Por isso nenhum número do pitch vem dela.

---

# Critério 2 · Inovação e criatividade (20 pts)

*"Originalidade, uso criativo de tecnologias e diferenciais competitivos."*

### Onde estamos fortes

O diferencial não é o agente — é **o contexto atravessar a matrícula**. Hoje a
venda sabe por que a pessoa comprou e o pós não sabe. Ninguém liga os dois.

### ❓ "Isso não é mais um chatbot?"

> A IA aqui é infraestrutura, como energia elétrica. Não é o produto. O produto é
> um sistema de ingresso — um processo com marcos, gatilhos e registro. A IA é o
> que faz esse processo rodar em escala e de forma personalizada.

### ❓ "O Agente Pré vai desestimular quem não tem perfil, tipo um teste vocacional?" ⚠️

> Não. Ele não diagnostica vocação nem decide por ninguém — conecta o objetivo
> declarado a caminhos possíveis e mostra a rotina real do EAD antes da compra, o
> que chamamos de espelho da realidade. **A compra nunca fica bloqueada nem
> condicionada** a essa conversa: se a pessoa quiser seguir direto, o agente
> facilita.
>
> Existe, sim, um efeito lateral financeiro: uma escolha mais consciente tende a
> durar mais, o que preserva tanto a mensalidade futura quanto o investimento de
> aquisição já feito. Mas isso é consequência do alinhamento, não um filtro ativo
> de acesso — não temos e não propomos nenhum mecanismo que barre matrícula.

### ❓ "Qual o diferencial real?"

> Três. Primeiro: o contexto de entrada atravessa o RA — o que a pessoa disse na
> venda vira o roteiro do onboarding. Segundo: os marcos vieram do material de
> vocês, não de achismo — o ponto de virada de 40 dias e o peso do M.A.P.A. e da
> presencial. Terceiro: o agente não consulta score de risco. Ele age por data e
> evento, então funciona inclusive em quem o modelo ainda não consegue pontuar.

### ❓ "Vocês estão substituindo o modelo preditivo?"

> Não, e a distinção importa. O modelo preditivo **fundamentou** o desenho dos
> marcos — foi ele que nos disse que sinais de acesso somam 49,5% no calouro. Mas
> importância preditiva não é motivo de evasão, e o agente não consulta score em
> tempo de execução. Ele dispara por data, evento e status.

### ❓ "Então esses sinais do slide 03 não são as causas?"

> Não. São sintomas associados ao risco. O slide 03 localiza a ruptura antes da
> ativação; o slide 04 apresenta uma hipótese sobre o que pode estar a montante.
> Ementa, troca de curso e literatura tornam a hipótese testável, não comprovada.
> O piloto é que mede se agir sobre escolha, expectativa e continuidade melhora a
> ativação na UniCesumar.

### ❓ "De onde vêm os 9,3 pontos percentuais?" ⚠️

> De Fouarge e Heß, em *Labour Economics* de 2023. Eles acompanharam 2.476 jovens
> no painel educacional alemão e compararam a preferência ocupacional declarada
> antes da universidade com as ocupações ligadas ao curso escolhido. O
> descompasso esteve associado a 9,1–9,3 pontos percentuais a mais de interrupção
> do curso inicial, sobre uma taxa-base de 29%.
>
> Duas ressalvas: interrupção inclui abandonar, trocar de curso ou de instituição;
> e os próprios autores dizem que o desenho **não identifica causalidade**. É
> evidência de mecanismo, não previsão de impacto do Marco Zero.

### ❓ "Simpson prova falta de orientação prévia ou impacto de IA?"

> Não. O paper de Simpson de 2023 não fala em *course choice mismatch*,
> pré-requisito nem desestimular candidato. Ele sustenta contato proativo antes do
> início e mostra como calcular custo, retenção incremental e retorno. A IA aparece
> em uma frase como potencial para suporte, sem teste ou tamanho de efeito. No
> pitch, Simpson fundamenta o suporte e a economia — não a tese de mismatch nem
> um impacto já comprovado de IA.

---

# Critério 3 · Potencial de impacto (20 pts)

*"Potencial de gerar resultados positivos na experiência do aluno e na estratégia."*

### Onde estamos fortes

O ponto de equilíbrio de 0,45% é o número mais forte do pitch, e não depende de
nenhum dado que a Vitru precise liberar.

### ❓ "De onde vem esse 0,45%?" ⚠️

> No slide, R$ 11 é chamado de **investimento operacional**. Na fórmula, ele é o
> custo variável por aluno: onze reais divididos pela contribuição de um aluno
> retido. O ticket de 287,40 vezes a margem bruta de 70,3%, ambos do release, dá
> 202 reais por mês; em doze meses, 2.424 reais. Onze sobre 2.424 dá 0,45%.
>
> E é **retenção incremental**: meio por cento **a mais** do que vocês reteriam
> sem o programa. Não é meio por cento da coorte ficar. Também não é orçamento
> completo de implantação: desenvolvimento e exceções humanas ficam fora.

### ❓ "Essa fórmula veio de onde?"

> A estrutura é a mesma formalizada por Ormond Simpson para instituições
> financiadas por mensalidade: se `P` é o custo da atividade por aluno, `F` é a
> receita ou contribuição do retido e `n` é o ganho de retenção em percentual, o
> equilíbrio exige `n ≥ 100 × P ÷ F`.
>
> Adaptando às nossas premissas: 100 × R$ 11 ÷ R$ 2.424 = 0,45%. Simpson sustenta
> a estrutura; os valores da Vitru e os R$ 11 são premissas deste modelo e precisam
> ser validados no piloto.

### ❓ "E essa margem de 70,3%, de onde saiu?" ⚠️ *(a pergunta de quem entende de finanças)*

> É a margem bruta ajustada que vocês reportam no release do trimestre. Não é
> conta nossa — é indicador de vocês. Receita líquida menos o custo de entregar o
> serviço: professor, tutoria, conteúdo, plataforma. O "ajustada" é o padrão do
> release, que expurga item não recorrente.
>
> E eu quero ser explícito no que ela **não** é: não é lucro. Margem bruta fica
> acima de despesa comercial e administrativa. Então quando eu digo que um aluno
> retido vale 202 reais por mês, é **contribuição bruta**, não resultado final.
>
> Usei margem bruta de propósito, porque a pergunta é marginal: um aluno que já
> está na base e decide ficar, o que ele traz? A captação dele já foi paga, a
> estrutura administrativa já existe. O que muda é receita menos custo de entregar
> a aula. Isso é a margem bruta.

### ❓ "Vocês estão sendo generosos com vocês mesmos nessa conta?"

> Em um ponto sim e em outro não, e vale dizer os dois.
>
> Generoso: os onze reais são custo variável de operação. Não incluem o
> desenvolvimento do programa nem o tempo humano do polo e do especialista nas
> exceções.
>
> Conservador: eu assumi que o aluno retido rende **só doze meses**. Uma graduação
> EAD tem quatro anos. Se ele fica vinte e quatro meses, a contribuição dobra e o
> ponto de equilíbrio cai para 0,22%. Os dois erros andam em direções opostas, e a
> conclusão sobrevive aos dois.

### ❓ "E esse retorno de 2,9×, como se calcula?"

> Ganho por aluno da coorte dividido por custo por aluno. No cenário mais
> conservador, um ponto percentual de engajamento a mais: um por cento de 3.207
> reais — que é a contribuição de 2.424 mais os 783 de aquisição que hoje se
> perde — dá 32 reais por aluno. Sobre onze reais de custo, 2,9 vezes.
>
> Se vocês tirarem a aquisição recuperada e ficarem só na contribuição, cai para
> 2,2 vezes. No cenário da Georgia State, sobe para 9,6.
>
> A conta está toda na mesma base de alunos — numerador e denominador falam do
> mesmo aluno. Isso importa: uma versão anterior do nosso material misturava a
> captação consolidada com a safra UniCesumar e inflava o retorno em quase o
> dobro. A gente achou e corrigiu.

### ❓ "Essa conta é da jornada do polo ou da 100% digital?" ⚠️ *(a mais afiada)*

> Das duas, e é por isso que a gente gosta desse número. Custo e base escalam
> juntos: se a coorte for menor, o custo cai na mesma proporção. Na jornada
> digital, com os dois agentes, dá R$ 11 e 0,45%. Na jornada via polo, onde quem
> vende é o humano e a gente só faz o ingresso, dá R$ 7,44 e 0,31%. Qualquer
> recorte que vocês escolherem fica abaixo de meio por cento. O que muda com o
> recorte é o tamanho do prêmio, não a viabilidade.

### ❓ "Vocês estão prometendo quanto de redução de evasão?"

> Nada. E isso é escolha, não falta de coragem. A gente promete ativação medida:
> primeiro acesso, primeira atividade, marcos concluídos. Evasão é resultado
> posterior, com defasagem, e prometer percentual agora seria chute. O que a
> gente traz de referência é o ensaio da Georgia State: +3,3 pontos percentuais
> de matrícula efetivada, com grupo de controle.

### ❓ "O R$ 783 é o CAC de vocês?"

> Não, e a gente faz questão de dizer. É um proxy: despesa comercial ajustada do
> trimestre dividida pela captação. O CAC real é de vocês. Se passarem, a gente
> ajusta — mas o ponto de equilíbrio não depende dele.

---

# Critério 4 · Viabilidade (20 pts)

*"Factibilidade técnica, recursos necessários e clareza do plano de implementação."*

### Onde estamos fortes

Tudo roda em ferramenta que a Vitru já tem. Custo de canal com preço de tabela
público. Piloto dimensionado estatisticamente.

### ❓ "Mensageria não é replicável para os polos." ⚠️ *(eles já disseram isso)*

> Concordamos, e o desenho já assume. **Nenhum polo manda mensagem.** A mensageria
> é centralizada, num canal só, operado pela sede. O que chega no polo é tarefa
> dentro do Salesforce que ele já acessa hoje — aquela página integrada ao Data
> Lake e ao CRM. Isso é replicável e não adiciona licença.
>
> Aliás, vocês mencionaram que essa página às vezes é usada e às vezes não. A
> nossa proposta dá motivo para ela ser usada: o que chega lá passa a ser caso
> triado com contexto, não fila.

### ❓ "Como vocês garantem que o polo vai seguir o processo?"

> A gente não garante, e o desenho não precisa disso. As diretrizes são
> recomendação. O digital roda de ponta a ponta sem o polo. Onde o polo adere, o
> resultado é melhor; onde não adere, continua funcionando.

### ❓ "Quanto custa operar isso de verdade?"

> Ação de agente na Salesforce é dez centavos de dólar, preço de tabela. Mensagem
> de utilidade no WhatsApp no Brasil é seis centavos de real — e vale corrigir uma
> premissa que circulou: oitenta centavos é preço de mensagem de **marketing**.
> A nossa é serviço transacional. Quando o aluno responde, a janela de 24 horas é
> gratuita.

### ❓ "Vai precisar contratar gente?"

> Não linearmente. O digital resolve o comum. Polo e especialista só recebem
> exceção, já triada e com contexto — que é menos trabalho do que recebem hoje,
> quando o aluno chega perdido e sem histórico.

### ❓ "Quanto tempo para colocar em pé?"

> A fase 1 usa Agentforce, Salesforce e WhatsApp, que já estão no ecossistema. O
> que precisa ser construído é a régua de marcos e a persistência do contexto de
> entrada. O piloto precisa de uma safra para medir.

---

# Critério 5 · Pitch e defesa (20 pts)

*"Clareza, objetividade, storytelling, design dos slides e domínio do tempo."*

### Checklist antes de subir

- [ ] Cronometrar. **5 minutos**, e sobrar 10 segundos
- [ ] Link entregue **até 13h10 de domingo**
- [ ] Deck aberto e testado na máquina da apresentação
- [ ] Demo rodada uma vez antes, para o navegador já ter carregado a fonte
- [ ] Alguém do time com o deck aberto num segundo dispositivo, como backup
- [ ] Saber quem responde o quê nos 3 minutos de perguntas

### Divisão sugerida das perguntas

| Tema | Quem responde |
| :-- | :-- |
| Dados, modelo, estatística, piloto | Yasmim |
| Economia, recorte, produto, oferta | Eduardo |
| Agentforce, arquitetura técnica | Cristiano |
| Backend, integração, Kiro | Victoria |

---

# Perguntas que a gente não sabe responder

Honestidade aqui vale ponto. Se vier alguma destas, a resposta é assumir.

### ❓ "Quantos calouros cancelam no primeiro trimestre?"

> Não temos. Pedimos e não chegou a tempo. É o número que a gente mais queria, e
> é justamente por isso que a gente ancorou o problema no que vocês já publicam:
> as faixas de risco do deck de vocês.

### ❓ "Qual o split entre captação digital e via polo?"

> Também não temos. Mas modelamos os dois cenários separadamente, exatamente para
> não depender dessa resposta.

### ❓ "Vocês validaram isso com aluno real?"

> Não. Testamos o atendimento atual de vocês como cliente oculto — e é a base do
> nosso slide de contraste. Validação com aluno é a primeira coisa da fase 1.

---

# Armadilhas — o que NÃO dizer

| ❌ Não dizer | ✅ Dizer |
| :-- | :-- |
| "Se paga retendo 0,45% da coorte" | "Se paga com 0,45% de retenção **a mais**" |
| "R$ 11 é o investimento total" | "R$ 11 é o **investimento operacional marginal**; implantação e exceções humanas ficam fora" |
| "R$ 202 de lucro por aluno" | "R$ 202 de **contribuição bruta** por aluno" |
| "Agente de Escolha / de Ingresso" | "Agente **Pré**, antes do RA; Agente **Pós**, depois do RA" |
| "A IA filtra ou desestimula quem não vai dar certo" | "A IA alinha expectativa; a compra nunca fica bloqueada nem condicionada" |
| "É um teste vocacional" | "É orientação: conecta interesse a curso e carreira, sem diagnosticar nem decidir por ninguém" |
| "Cada polo vai ter um agente" | "A mensageria é centralizada; o polo recebe tarefa" |
| "O modelo de vocês não enxerga esses alunos" | "O agente age por evento, então não depende de score" |
| "Os fatores do modelo são os motivos da evasão" | "São sinais preditivos; localizam o sintoma, não provam a causa" |
| "Fouarge prova que mismatch causa +9,3 p.p." | "Fouarge encontra associação externa de 9,1–9,3 p.p.; o estudo não identifica causalidade" |
| "Simpson recomenda desestimular candidatos" | "Simpson sustenta suporte proativo e sua lógica econômica; não faz essa recomendação no paper de 2023" |
| "Simpson provou o impacto da IA" | "Simpson cita IA como potencial, sem testar efeito" |
| "Vamos reduzir a evasão em X%" | "Vamos medir ativação; evasão é resultado posterior" |
| "O CAC de vocês é R$ 783" | "Nosso proxy dá R$ 783; o CAC real é de vocês" |
| "A base mostra que…" | "O deck do time de dados de vocês mostra que…" |
| "Não saíram por dinheiro" | "No modelo de vocês, sinais de acesso pesam quase 3× mais que os financeiros" |
| "É uma IA / um agente" | "É um sistema de ingresso. A IA é a infraestrutura" |
