# Plano do pitch — rodada de planejamento

Guia de produto: `Vitru_Jornada_Ingresso_Alinhamento_Mestre.md`.
Estrutura seguindo o deck do Airbnb, slide a slide.

Status de evidência em tudo:

- 🟢 **Confirmado** — report oficial da Vitru, PPTX do time de dados deles, ou paper revisado
- 🟡 **Nosso cálculo** — derivado de número oficial, rotular como proxy
- 🔵 **Inferência sustentada** — hipótese com mecanismo e evidência convergente (ver seção "anamnese")
- 🔴 **Buraco** — não temos

---

## 1. A anamnese — como ligar pós-venda a pré-venda sem ser espúrio

O problema metodológico é real: **todo dado interno que temos é de pós-venda**.
É de quem já é aluno, não de quem era candidato. Então a ligação com a pré-venda
é necessariamente reconstruída — como anamnese médica: parte-se do sintoma
medido e reconstrói-se a história.

O que separa isso de correlação espúria é ter **mecanismo** e **evidência
convergente de fontes independentes**. Temos as duas coisas.

### As quatro evidências

| | Evidência | Fonte | O que prova |
| :-- | :-- | :-- | :-- |
| **A** | A 2ª página mais acessada do site são as **ementas dos cursos** | 🟢 diretoria Vitru | A demanda por entender o curso é enorme e explícita |
| **B** | O 2º processo mais comum no CSC é **alteração de matrícula/curso** — até 3 trocas, para áreas não correlatas | 🟢 diretoria Vitru | Essa demanda **não é atendida na venda**. A pessoa compra e descobre depois |
| **C** | Descompasso entre preferência ocupacional e curso escolhido → **+9 pontos percentuais** de evasão | 🟢 Fouarge & Heß, *Labour Economics* 2023 | O mecanismo tem magnitude medida, com painel longitudinal e controles |
| **D** | Os 5 principais fatores de risco do calouro são todos de **presença**; o 4º é literalmente "dias até o primeiro acesso" | 🟢 PPTX do time de dados Vitru | O sintoma é ausência, não reprovação nem inadimplência |

### A inferência

> A + B mostram, em dois pontos independentes do funil, que existe uma demanda
> massiva por entender o curso **que não é atendida no momento da compra**.
> C dá a magnitude do mecanismo: escolher errado custa 9 pontos percentuais de
> evasão. D mostra que, na UniCesumar, o sintoma se manifesta como ausência.
>
> Logo: **parte da ausência medida em D é gente que comprou sem entender.**

Isso não é "sorvete causa ataque de tubarão". A e B são medições independentes do
**mesmo mecanismo** em momentos diferentes da jornada. C é um estudo com
identificação causal. D é o desfecho.

**O achado B é o mais forte que temos.** Troca de curso é preferência revelada:
alguém que troca para uma área não correlata está provando que a venda original
estava desalinhada. É a coisa mais próxima de uma medição direta de "venda mal
feita" que existe na operação deles — e ainda gera custo de CSC.

### Engenharia reversa — o que o Agente Pré ataca

Você pediu para eu construir isso de trás para frente. Cada linha: uma lacuna na
venda → o que a pessoa sente → como isso aparece no modelo de risco **deles**.

| Lacuna na pré-venda | O que o aluno sente | Como aparece no dado da Vitru |
| :-- | :-- | :-- |
| Não entendeu o curso nem a carreira | "Não era isso que eu queria" | Troca de curso no CSC — ou some sem avisar |
| Não entendeu a metodologia EAD | "Achei que era mais fácil; não sei como estudar" | % entrega de atividades *(fator 5)* |
| Ninguém disse o que fazer depois de pagar | "Paguei. E agora?" | **Dias até o primeiro acesso** *(fator 4)* |
| Ficou semanas sem contato até a aula começar | Esfriou, perdeu o propósito da compra | Qtde total de dias de acesso ao AVA *(fator 1)* |
| Não conhece ninguém, não tem rede | Isolamento, não pertence | Acesso no período pedagógico *(fator 3)* |

### O cenário perfeito, para contraste

Venda alinhada → a pessoa entendeu o curso e a rotina → no intervalo até a aula
já acessou a plataforma, já sabe onde ficam as coisas, já entrou numa comunidade
→ chega no primeiro dia sabendo o que fazer.

**O pitch mostra esse trajeto e depois pergunta: e quando não tem nada disso?**

### O que isso permite dizer no palco

✅ *"Dos cinco fatores, os quatro primeiros são de presença. E presença no
primeiro mês é consequência de uma coisa que já estava decidida antes: se essa
pessoa entendeu o que estava comprando."*

✅ *"A gente sabe que existe demanda por entender: ementa é a segunda página mais
acessada. E sabe que ela não está sendo atendida: troca de curso é o segundo
processo mais comum do CSC, com gente trocando até três vezes para áreas que não
têm nada a ver."*

❌ *"Três dos cinco fatores são causados por venda mal feita."* — afirma
atribuição direta que nenhum dado sustenta. Use a formulação acima.

---

## 2. Nome da solução

Nomes já ocupados pela Vitru, não usar: Studeo, Trilha, Espaço Calouro,
Conheça EAD, Sala Virtual.

| Nome | Por quê | Contra |
| :-- | :-- | :-- |
| **Marco Zero** ⭐ | É o ponto onde a medição começa. Casa com "marcos de ativação", que é o vocabulário do produto. Brasileiro, curto, memorável | — |
| **Origem** | Duplo sentido: origem do aluno e origem de marketing (o contexto de aquisição que atravessa o RA) | Um pouco abstrato |
| **Ponte** | Conceitualmente exato: liga venda e vida acadêmica | Genérico como marca |

**Recomendo Marco Zero.** Fica: *Marco Zero — a jornada de ingresso da
UniCesumar*, com dois agentes dentro: **Agente Pré**, antes do RA, e **Agente
Pós**, depois do RA.

> **Nomenclatura fechada em 16/08.** Os agentes são nomeados pela **etapa**, não
> por metáfora: Pré é pré-venda e atua antes do RA; Pós atua depois. Os nomes
> "Escolha" e "Ingresso" saíram de circulação — obrigavam a explicar a metáfora
> antes de explicar o produto.

---

## 3. Fontes internas da Vitru (PPTX do time de dados)

### Importância das variáveis — CALOUROS 🟢

| # | Variável | Peso |
| --: | :-- | --: |
| 1 | Qtde total de dias de acesso ao AVA | 2.342 |
| 2 | Qtde de acesso ao AVA na semana de entrega | 1.893 |
| 3 | % Acesso ao AVA em período pedagógico | 1.694 |
| 4 | **Qtde de dias até o primeiro acesso** | 1.380 |
| 5 | % Entrega de atividades | 1.311 |
| 6 | % Engajamento financeiro | 1.115 |
| 7 | % Participação em aulas conceituais | 967 |
| 8 | % Pagamentos até o vencimento | 939 |
| 9 | Idade do aluno no ingresso | 770 |
| 10 | % Participação em aulas ao vivo | 766 |
| 11 | % Renegociação de dívidas | 544 |
| 12 | Entrada tardia | 392 |
| 13-17 | Ambientação (5 variáveis) | 263 · 150 · 148 · 42 · 37 |

Peso total 14.753. **Acesso (1-4) = 49,5%. Financeiro (6, 8, 11) = 17,6%.**
→ *No modelo da própria Vitru, presença pesa quase 3× mais que dinheiro para o calouro.*

### Importância das variáveis — VETERANOS 🟢

Andamento do curso (423) · Pagamentos em dia (385) · Engajamento financeiro (381)
· Notas e aprovação do módulo anterior (209).

**O contraste é o argumento do recorte:** veterano evade por **não avançar**.
Calouro evade por **não começar**. Só um dos dois tem a ver com a venda.

### Outros achados 🟢

- **"Ponto de virada: 40 dias"** — corte deles entre evadiu e não evadiu, em dias
  de acesso ao AVA de calouros.
- **Risco ≥ 50%: 45,3% dos calouros (24.861) vs 8,9% dos veteranos (35.347).**
  → **5,1× mais risco no calouro.** Entra no slide 02 como **frase mastigada de
  fechamento** ("o calouro carrega cinco vezes mais risco"), não como abertura —
  ver seção 4.1.
- **Faixas de sucesso deles:** Detrator < 25% de conclusão · Neutro 25-50% ·
  **Promotor > 50%**.
- **Estrutura do trimestre:** 10 semanas, 2 disciplinas, 4 aulas ao vivo cada,
  avaliação presencial na S10. Notas: A.E. 0,5 ×3 · S.C.G. 1,0 · **M.A.P.A. 3,5**
  · **Presencial 4,0**. Média mínima 6,0.
  → **7,5 dos 10 pontos estão em dois itens.** Define a régua do agente de pós.
- **Aulas assistidas, veteranos:** quem evadiu concentra-se em 0%. Pertencimento
  aparece como sinal.
- Engajamento financeiro só é apresentado por eles para **veteranos**. Não usar
  para calouro.

### Sobre a planilha do hackathon

Eu tinha descartado. **O `ACHADOS.md` mostrou que dá para usar — desde que seja
comparação relativa, não taxa absoluta.** O viés do retrato afeta todos os cursos
igualmente, então a razão entre cursos sobrevive. Foi assim que apareceu o achado
mais forte do projeto (ver abaixo).

Continua valendo: **não citar taxa absoluta de evasão** a partir dela, e **não
multiplicar `Y_PROBA_EVADIU` por dinheiro** (score é ordenação, não
probabilidade — infla valor esperado em ~70%).

---

## 3.1 O achado que fecha a ponte com a pré-venda 🟢

Do `ACHADOS.md` e do `api/prompt_agente_prevenda.md`:

> A taxa de matriculados que **nunca acessam o AVA varia de 11,3% a 37,9%
> conforme o curso** — dispersão de 20,7 contra 1 esperado ao acaso, com 54% dos
> cursos além de três desvios.
>
> Menores taxas: Geografia 11,3% · História 12,9% · Serviço Social 13,7% ·
> Pedagogia 14,5%. São cursos em que a pessoa **sabe qual profissão está
> comprando**. As maiores são cursos cujo nome sugere uma profissão que o diploma
> não entrega sozinho.

### ⚠️ Rebaixado — não usar como espinha do slide 04

Eu tinha promovido esse achado a argumento principal. **Recuado**, por um
confundidor que não consigo descartar com a planilha que temos.

"Nunca acessou" é medido num retrato único, sem congelamento temporal. Se os
cursos tiverem **calendários diferentes** — datas de início distintas, ou pontos
diferentes do ciclo no dia do corte — então um curso que começou depois mostra
mais "nunca acessou" só porque passou menos tempo. A dispersão de 20,7 seria, em
parte, dispersão de calendário.

O módulo de ingresso único (2026-53) atenua, mas não elimina: EGRAD e ESPRE têm
calendários diferentes, e cursos dentro da mesma modalidade podem ter também.

**O que tornaria o achado utilizável:** refazer controlando por dias decorridos
desde o início de cada curso. Se a dispersão sobreviver, é ouro. Vale pedir isso
à Yasmim se sobrar tempo — mas **não colocar no pitch antes disso**.

Enquanto isso, a espinha do slide 04 volta a ser a anamnese (ementa + troca de
curso + os 9 p.p. de Fouarge & Heß), que não depende da planilha.

### Correções que o ACHADOS.md impõe ao que eu tinha escrito

| O que eu disse | O que é correto |
| :-- | :-- |
| Ambientação: 3,4× menos saídas | Risco 38,5 vs 43,7 para quem faz — efeito real mas **modesto** |
| 11.677 calouros nunca acessaram (20,9%) | Usar a taxonomia do ACHADOS: "nunca começou" 45.786 e "paga e sumiu" 24.441 |
| Base tem 55.884 calouros | 54.829 depois de excluir os já evadidos — **bate com o slide 12 do PPTX** |
| "O modelo não vê" | O modelo tem AUC 0,583 em calouros. Não usar isso no palco; serve só como resposta se perguntarem |

---

## 4. Estrutura do deck — 12 slides

Esta tabela é o **espelho do `apps/pitch/index.html`**. Se divergir do arquivo, o
arquivo manda. Conferida em 16/08.

| # | Slide | Ideia única | Status |
| --: | :-- | :-- | :-- |
| 01 | **Capa** | "A evasão começa antes da matrícula" | 🟢 |
| 02 | **Problema** | 19,1 mil captados não engajaram num trimestre | 🟢 |
| 03 | **Diagnóstico** | Calouro × veterano: presença vs. progresso | 🟢 |
| 04 | **A pergunta** | Ementa é a 2ª página mais vista; troca de curso é o 2º processo do CSC | 🟢🔵 |
| 05 | **Solução** | Marco Zero, um sistema de ingresso com Agente Pré e Agente Pós | 🔵 |
| 06 | **Produto · Agente Pré** | Conversa rodando: vender explicando, não perguntando | 🟢 |
| 07 | **Produto · Agente Pós** | Simulador dos 6 marcos: gatilho, ação, registro | 🟢 |
| 08 | **Validação** | Georgia State, Castleman & Page, Fouarge & Heß, ressalva do Bailey | 🟢 |
| 09 | **Oportunidade** | R$ 11, ponto de equilíbrio de 0,45%, retorno de 2,9× | 🟢 |
| 10 | **Escala** | Mensageria centralizada; polo recebe tarefa, não fila | 🟢 |
| 11 | **Implementação** | Piloto dimensionado, randomização por turma, roadmap em 4 fases | 🟢 |
| 12 | **Time e fechamento** | — | 🟢 |

**Cortados por repetição:** Diferenciais (está em 05), Evidências separado (é o
08), Piloto duplicado (é o 11), Modelo de Valor separado (funde com o 09), "O que
existe hoje" separado (vira contraste dentro do 06).

**Nota importante para o slide 07:** o agente **não consulta** o modelo preditivo
em runtime. O modelo **fundamentou** o desenho dos marcos e da régua. A distinção
precisa aparecer na fala.

---

## 4.1 Realinhamento do slide 02 — decidido em 16/08

**O problema com a versão anterior.** O slide abria com "45,3% dos calouros em
faixa de risco ≥ 50% contra 8,9% dos veteranos". Três defeitos:

1. A fonte da problemática passava a ser **o modelo preditivo deles**. Abrir o
   pitch dizendo "segundo o modelo de vocês" entrega a definição do problema para
   a ferramenta que a gente diz que não é o ponto.
2. Não é número absoluto. É **probabilidade de**, não **quantidade que**. A banca
   pergunta "e quantos saem?" e a resposta era outra pergunta.
3. Exigia uma construção aninhada — "X% está numa faixa de Y% que corresponde a
   Z% de chance" — que ninguém acompanha em cinco minutos.

**O que entrou no lugar.** Número absoluto, publicado, sem modelo nenhum:

| Métrica | Valor | Fonte |
| :-- | :-- | :-- |
| Captação do trimestre | 106,9 mil | 🟢 release 2T26 |
| Engajados | 87,8 mil | 🟢 release |
| **Não engajados** | **19,1 mil** | 🟢 release |
| Taxa de engajamento | 82,1% | 🟢 release |
| Evasão no EAD privado brasileiro | 64,1% | 🟢 Semesp, 15º Mapa (2025) |

**A ressalva que a gente declara antes de perguntarem.** Engajamento, na definição
do release, é contato acadêmico **ou** financeiro. Então 19,1 mil não é gente que
evadiu no meio do curso — é gente que não registrou nem uma coisa nem outra.
Operacionalmente: **não começou**. Isso não enfraquece a tese, fortalece: é
exatamente a população do Marco Zero.

Segunda ressalva: o release **não segmenta por marca**. O 19,1 mil é consolidado
Vitru. O recorte UniCesumar entra no slide 03, com o dado do time de Ciência de
Dados.

**Onde foi parar o 45,3%.** Virou a **frase mastigada de fechamento** do slide 02:
*"e o calouro carrega cinco vezes mais risco que o veterano — o problema está
concentrado na entrada."* Uma frase, sem percentual aninhado, depois do número
absoluto. O detalhamento fica no slide 03, onde o modelo é usado para explicar
**mecanismo**, que é o uso legítimo dele.

---

## 5. Princípio anti-"fodeu": todo slide tem plano B

Nenhum slide pode depender de um número que talvez não chegue. Para cada número
crítico, existe um substituto já definido:

| Slide | Número ideal | Plano B se não vier |
| :-- | :-- | :-- |
| 02 | % de calouros que cancelam no 1º trimestre | 19,1 mil não engajados do release *(já temos, e é absoluto)* |
| 04 | Volume real de trocas de curso no CSC | "2º processo mais comum" qualitativo + os 9 p.p. de Fouarge & Heß |
| 09 | CAC oficial | Proxy R$ 783, rotulado como proxy *(já temos)* |
| 09 | Impacto em p.p. de receita | Cenário modelado sobre o release, rotulado como cenário |
| 11 | Critério de polo da Vitru | Critério nosso, justificado por volume + capacidade |

Consequência: **a fala não muda quando o número muda.** Ver seção 7.

---

## 6. Buracos

| ID | Buraco | Slide | Situação |
| :-- | :-- | :-- | :-- |
| **G1** | Oportunidade em p.p. e custo de operação | 09 | ✅ **Fechado** — `modelo-economico.md`. Ponto de equilíbrio entre 0,31% e 0,45%, invariante ao recorte |
| **G2** | Perfil do aluno de sucesso | 07 | ✅ **Fechado** — `perfil-sucesso-e-personas.md`, parte 1. Régua de 6 marcos ancorada no PPTX |
| **G3** | Piloto e recorte de polos | 11 | ✅ **Fechado** — randomizar por turma, ~22 mil alunos, 3 p.p. detectáveis |
| **G4** | Personas e storytelling do pré | 06 | ✅ **Fechado** — `perfil-sucesso-e-personas.md`, parte 2. Quatro personas |
| **G5** | Calouros que cancelam no 1º trimestre | 02 | ⏳ **Só a Vitru tem** — plano B ativo e **melhor que o original**: os 19,1 mil não engajados do release são absolutos e publicados |
| **G6** | Split captação digital × via polo | 09 | ⏳ **Só a Vitru tem** — dimensiona o prêmio, não a viabilidade |
| **G7** | Base do retorno estava misturada | 09 | ✅ **Corrigido em 16/08** — ganho vinha de 106,9 mil e custo de 54.829. Retorno cai de 5,7× para **2,9×**. O 0,45% não era afetado |

## 6.1 Restrição de mensageria — incorporada ao desenho

A diretoria disse: **Salesforce é replicável ao polo e não aumenta custo;
mensageria não é.** Não vamos disputar o ponto — o desenho já cabe dentro dele.

| Camada | Quem opera | Replicável ao polo? |
| :-- | :-- | :-- |
| Mensagem ao aluno | **Sede, canal centralizado** | não precisa ser |
| Tarefa com contexto e SLA | Salesforce que o polo já acessa | **sim, já existe** |
| Ação local | Polo | sim |

⚠️ **Nunca dizer** "cada polo terá um agente" ou "o polo vai mandar mensagem".
**Dizer:** *"a mensageria é centralizada; o polo recebe tarefa no Salesforce que
ele já acessa."*

Detalhe a favor: eles mesmos disseram que a página do polo integrada ao Data Lake
e ao CRM **já existe e às vezes não é usada**. Nossa proposta dá motivo para ela
ser usada — sem custo novo de licença.

---

## 7. O pitch falado vai ficar mudando?

**Não, se travarmos agora a estrutura e tratarmos número como slot.**

O que trava agora e não muda mais:

1. A tese: a evasão começa antes da matrícula.
2. O arco: número absoluto do problema → os fatores → a pergunta (ementa + troca
   de curso) → a solução → Agente Pré rodando → Agente Pós rodando → validação →
   oportunidade → escala → piloto.
3. A frase de transição de cada slide.

O que pode mudar até a véspera sem alterar uma linha da fala: os números dentro
dos slots, porque cada um tem plano B na seção 5.

**Risco real de mudança de fala:** só se a Vitru mandar um dado que **contradiga**
a tese — por exemplo, se a evasão de calouro for majoritariamente financeira. Aí
muda tudo. É por isso que a pergunta 1 do bloco abaixo é a mais urgente: ela
confirma ou derruba a espinha, e é melhor descobrir agora do que na véspera.
