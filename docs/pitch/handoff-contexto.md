# Handoff — prompt para continuar em outra sessão

Cole o bloco abaixo como primeira mensagem de um chat novo.

---

```text
Contexto: sou do time do Hackathon Vitru 2026. Repositório público em
github.com/yasmim-sobrinho/hackathon-vitru-2026, branch main. Trabalhe em
português do Brasil.

## O produto

Nome: MARCO ZERO — sistema de ingresso do aluno da UniCesumar.

Frase de definição (decorada, é a resposta para "não entendi a solução"):
"Marco Zero é um sistema de ingresso: leva a pessoa da dúvida sobre qual curso
fazer até a primeira atividade entregue."

Regra inegociável: IA é INFRAESTRUTURA, como energia elétrica. Nunca apresentar
como "uma IA" ou "um agente". O produto é o PROCESSO. Dois agentes dentro,
nomeados pela ETAPA e não por metáfora: AGENTE PRÉ (pré-venda, antes do RA) e
AGENTE PÓS (ingresso, depois do RA), ligados por um Contexto de Entrada que
atravessa a matrícula. Os nomes antigos "Escolha" e "Ingresso" estão fora de uso.

Tese: A EVASÃO COMEÇA ANTES DA MATRÍCULA.

## Leia primeiro, nesta ordem

1. docs/pitch/plano-pitch.md          estrutura, status de evidência, buracos
2. docs/pitch/script-falado.md        só as falas, por slide
3. docs/pitch/modelo-economico.md     números e premissas
4. docs/pitch/perfil-sucesso-e-personas.md   marcos do agente e personas
5. docs/pitch/qa-banca.md             defesa por critério de avaliação
6. ACHADOS.md                         análise da base feita pelo time
7. Vitru_Jornada_Ingresso_Alinhamento_Mestre.md   guia de produto

Deck: apps/pitch/index.html (12 slides, autocontido, deploy na Vercel).

## Fontes de verdade, em ordem de confiança

1. PPTX "Motivos de Evasão Vitru" — deck do time de Ciência de Dados deles
2. Release do 2º trimestre de 2026 da Vitru (dados públicos)
3. Literatura acadêmica revisada por pares
4. A planilha anonimizada do hackathon — USO RESTRITO, ver abaixo

## Números que sustentam o pitch (todos verificados)

O NÚMERO QUE ABRE A PROBLEMÁTICA (mudado em 16/08):
- 19,1 mil pessoas captadas no trimestre NÃO ENGAJARAM, de 106,9 mil. É absoluto,
  publicado e não depende de modelo. Antes o slide 02 abria pelas faixas de risco
  do modelo preditivo deles — isso saiu, porque entregava a definição do problema
  para o modelo e não respondia "quantos saem?".
- Ressalva que a gente declara antes de perguntarem: engajamento no release é
  contato acadêmico E/OU financeiro, então esses 19,1 mil não evadiram no meio do
  curso, eles NÃO COMEÇARAM. E o release não segmenta por marca — é consolidado.
- As faixas de risco (45,3% × 8,9%) viraram a frase mastigada de fechamento do
  slide 02: "o calouro carrega cinco vezes mais risco". Nunca a construção
  aninhada "X% numa faixa de Y% que dá Z% de chance".

Do PPTX da Vitru:
- Calouros em risco >=50%: 45,3% (24.861 de 54.829)
- Veteranos em risco >=50%: 8,9% (35.347 de 397.554) -> calouro tem 5,1x mais risco
- Importância de variáveis, CALOURO: acesso ao AVA (2.342), acesso na semana de
  entrega (1.893), acesso no período pedagógico (1.694), dias até o primeiro
  acesso (1.380), entrega de atividades (1.311). Total do modelo 14.753.
  -> acesso = 49,5% do peso; financeiro = 17,6%
- Importância, VETERANO: andamento do curso, pagamentos, engajamento financeiro,
  notas. -> veterano evade por NÃO AVANÇAR, calouro por NÃO COMEÇAR
- Ponto de virada: 40 dias de acesso ao AVA
- Faixas de sucesso deles: Detrator <25% de conclusão, Neutro 25-50%, Promotor >50%
- Trimestre: 10 semanas, 2 disciplinas. M.A.P.A. vale 3,5 e avaliação presencial
  4,0 dos 10 pontos. Média mínima 6,0. -> 7,5 dos 10 pontos em dois eventos

Do release trimestral:
- Captação 106,9 mil / engajados 87,8 mil / NÃO ENGAJADOS 19,1 mil
- Taxa de engajamento 82,1% (era 72,5%) — definida como engajamento acadêmico
  E/OU financeiro (é definição contábil, não de sucesso)
- Ticket médio híbrido/EAD R$ 287,4/mês · margem bruta ajustada 70,3%
- Despesa comercial ajustada R$ 83,7 mi no trimestre
- Base total 1,031 milhão

Nossas contas (sempre rotular como proxy):
- Proxy de aquisição: 83,7 mi / 106,9 mil = R$ 783
- Contribuição: 287,4 x 70,3% = R$ 202/mês = R$ 2.424 em 12 meses
- Custo da jornada: R$ 11,00 (digital, dois agentes) ou R$ 7,44 (via polo)
- PONTO DE EQUILÍBRIO: 0,45% (digital) e 0,31% (polo). É invariante ao recorte,
  porque custo e base escalam juntos. Este é o número mais forte do pitch.
- RETORNO: 2,9x no cenário conservador (+1 p.p.), 5,8x (+2 p.p.), 9,6x (+3,3 p.p.).
  Corrigido em 16/08: a versão anterior dizia 5,7x / 18,8x porque calculava o ganho
  sobre a captação consolidada (106,9 mil) e o custo sobre a safra UniCesumar
  (54.829). Bases diferentes, fator 1,95 de inflação. O 0,45% nunca foi afetado.
  Versão só com contribuição, sem aquisição recuperada: 2,2x.

De onde vem o 70,3% (pergunta esperada no Q&A):
- É a MARGEM BRUTA AJUSTADA reportada pela Vitru no release. Indicador deles, não
  conta nossa. Receita líquida menos custo de entregar o serviço.
- NÃO É LUCRO. Margem bruta fica acima de despesa comercial e administrativa. Os
  R$ 202/mês são CONTRIBUIÇÃO BRUTA.
- Por que usar bruta: a pergunta é marginal. A captação daquele aluno já foi paga
  e a estrutura já existe; o que muda com ele ficando é receita menos custo de
  entregar a aula.
- Onde somos generosos: os R$ 11 são custo variável, sem desenvolvimento nem tempo
  humano de L3/L4. Onde somos conservadores: assumimos só 12 meses de permanência,
  quando a graduação tem 4 anos.

Preços de tabela verificados:
- Agentforce: US$ 0,10 por ação (20 Flex Credits, pacote US$ 500 / 100 mil)
- WhatsApp utility Brasil 2026: R$ 0,04-0,08 POR MENSAGEM (não R$ 0,80 — esse é
  preço de marketing). Janela de serviço de 24h após resposta do aluno é gratuita

Dados internos da diretoria (qualitativos, sem volume):
- A 2ª página mais acessada do site são as EMENTAS DOS CURSOS
- O 2º processo mais comum do CSC é TROCA DE CURSO, até 3 por aluno, para áreas
  não correlatas
- Salesforce É replicável ao polo sem custo; MENSAGERIA NÃO É

Literatura:
- Page & Gehlbach (2017), AERA Open 3(4): assistente conversacional na janela de
  ingresso, ensaio randomizado na Georgia State, +3,3 p.p. de matrícula efetivada
- Bailey et al. (2021), Research in Higher Education: replicação, efeito NÃO é
  uniforme — depende de recorte. Citamos por honestidade, e justifica o recorte
- Castleman & Page (2015), J. Economic Behavior & Organization 115: nudges
- Fouarge & Heß (2023), Labour Economics 83, painel alemão NEPS: quem escolhe curso
  que não corresponde à preferência ocupacional declarada ANTES de entrar evade
  mais. DIREÇÃO CONFIRMADA. A magnitude de "+9 p.p." que circulava no material
  NÃO ESTÁ VERIFICADA e foi rebaixada em 16/08 — não falar percentual. Ver seção
  1.1 do plano-pitch.md
- FÓRMULA DE SIMPSON (está na secão 8.5 da pre-pesquisa-hackathon-vitru-2026.docx,
  e é o melhor ativo de validação que temos):
    sucesso = escolha adequada de curso
            + identificação precoce de quem tende a evadir
            + (contato precoce e contínuo x apoio motivacional proativo)
  A leitura que importa: identificar entra como PARCELA SOMADA, logo é limitada.
  O que MULTIPLICA é contato contínuo x apoio proativo. Se um dos dois é zero, o
  produto é zero. Identificar sozinho não salva ninguém. É a nossa tese inteira
  como equação, escrita por quem dirigia a retenção da Open University.
  Simpson também diz que desistir de casos caros de recuperar é aceitável — o que
  legitima triagem por capacidade.
- Semesp: usar 26,6% de evasão na rede privada em 2024 (16º Mapa, 2026), que é a
  referência [29] da nossa pré-pesquisa. O "64,1% no EAD privado" que circulava
  vinha de outra edição e não foi reconciliado — saiu do deck.

## Regras que NÃO podem ser quebradas

1. Nunca dizer "não saíram por dinheiro" com base no engajamento financeiro dos
   calouros. A 1ª mensalidade é R$ 19,90 promocional, então estar em dia não
   significa saúde financeira. Correlação espúria.
2. Nunca dizer que o modelo preditivo da Vitru "não enxerga" alunos. Eles têm
   todos os dados. Dizer, quando couber: "o agente age por evento, não por score".
3. A planilha anonimizada (dataset_aluno_predicted, 457k linhas) é RETRATO ÚNICO,
   sem congelamento temporal, com campos que seguem contando. Serve para ordenar
   e para volumetria de contexto. NÃO serve para afirmar taxa absoluta.
4. Y_PROBA_EVADIU é ORDENAÇÃO, não probabilidade (calibração de Platt, inclinação
   0,438). Nunca multiplicar score por dinheiro — infla ~70%.
5. Y_PRED tem três valores: 0 sem risco, 1 risco previsto, 2 JÁ EVADIU (bate com
   os 5.044 de FL_EVADIU=1).
6. Nunca prometer redução de evasão em %. Prometemos ativação medida.
7. Rotular todo proxy como proxy antes que perguntem.
8. Nunca dizer que o polo vai mandar mensagem ou ter agente próprio.
9. O ponto de equilíbrio é RETENÇÃO INCREMENTAL. Dizer "0,45% A MAIS", nunca
   "0,45% da coorte", que soa absurdamente baixo diante da realidade deles.
10. Nunca chamar os R$ 202/mês de lucro. É contribuição bruta.
11. Não abrir a problemática pelo modelo preditivo deles. Abrir pelos 19,1 mil.

## O que ainda não temos (com plano B ativo — nada é bloqueante)

- G5: quantos calouros cancelam no 1º trimestre. Plano B: as faixas de risco.
- G6: split de captação digital x via polo. Plano B: modelo por aluno, que é
  invariante ao recorte.

## Formato da entrega

Link até 13h10 de domingo. Pitch às 15h00, ordem por sorteio.
5 minutos de apresentação + 3 minutos de perguntas.
Formatos aceitos: GitHub, HTML ou PPTX. Vamos de HTML na Vercel.
Avaliação: aderência, inovação, impacto, viabilidade e pitch — 20 pontos cada.

## Time

Yasmim Sobrinho (dados e validação) · Cristiano Silva (frontend e Agentforce) ·
Eduardo Mattos (produto e oferta) · Victoria Suares (Kiro e backend) ·
Yasmin (madrinha).

## Como trabalhar comigo

Seja direto e não puxe conversa. Traga contraponto quando discordar, com o
motivo técnico. Se um número não tiver fonte, diga que não tem em vez de
estimar. Marque explicitamente o que é confirmado, o que é nosso cálculo e o
que é buraco. Commits sem co-autor, direto na main.

Minha pergunta agora é:
```

---

## Anexos que valem mandar junto

Se o chat novo aceitar arquivos, anexe nesta ordem:

1. `Motivos de Evasão Vitru.pptx` — a fonte mais importante
2. `docs/pitch/plano-pitch.md`
3. `docs/pitch/modelo-economico.md`
4. `ACHADOS.md`

O release trimestral está público em `api.mziq.com` (link no histórico) e pode
ser rebuscado.
