**VITRU 2026**

**Sistema de Ingresso do Aluno**

Jornada integrada de venda educacional \+ onboarding proativo para a UniCesumar

**ALINHAMENTO MESTRE DO TIME**

| PRINCÍPIO NORTEADOR Não estamos vendendo IA. Estamos desenhando um sistema de ingresso que aumenta a chance de o aluno começar a graduação com clareza, propósito, autonomia e uma rede de apoio acionável. |
| :---: |

15 de agosto de 2026 · uso interno do time

# **0\. Alinhamento executivo — o que ficou decidido**

| DECISÃO DE PRODUTO A solução será tratada como uma única Jornada de Ingresso, composta por dois agentes especializados e conectados por contexto: (1) agente de venda educacional/consultiva antes da matrícula; (2) agente de onboarding proativo depois da matrícula. O MVP deve demonstrar continuidade entre os dois, sem tentar resolver toda a evasão da graduação. |
| :---- |

| Dimensão | Definição fechada |
| :---- | :---- |
| Marca | UniCesumar. Não tentar generalizar para Uniasselvi neste hackathon. |
| Problema atacado | Fricções e desalinhamentos na entrada do aluno: escolha/expectativa antes da matrícula e falta de ativação/orientação nos primeiros passos depois da matrícula. |
| Público | Candidato no fim do funil \+ aluno recém-matriculado/ingressante EAD UniCesumar. |
| Produto | Sistema de ingresso do aluno. IA é a tecnologia de execução, não a proposta de valor. |
| Pré-venda | Venda educacional consultiva: ajuda a escolher, explica metodologia e conecta objetivo pessoal ao curso, sem gerar dúvida desnecessária e sem bloquear a compra. |
| Pós-venda | Onboarding proativo e contextual: pega o aluno pela mão após o RA/matrícula e o conduz aos marcos de ativação adequados ao seu cenário de ingresso. |
| Predição | Não construir nem usar modelo preditivo como núcleo da solução. Dados/modelos existentes servem como insumo para desenhar fluxos, entender sinais e validar métricas. |
| Escala | Automação digital primeiro; polo e humano entram por regra de exceção/necessidade. WhatsApp deve ser centralizado, não depender de cada polo. |
| Recorte operacional | Piloto em polos com maior estrutura/capacidade. Hipótese de seleção precisa ser validada: “top 30% / 30 principais polos” é a proposta atual do time; a reunião citou 40% de polos estruturados como exemplo, não como dado fechado. |
| Resultado | Aumentar ativação e preparação do ingressante; redução de evasão precoce é efeito de negócio a ser validado, não promessa do MVP. |

## **O que a solução NÃO é**

* Não é um novo modelo preditivo de evasão.  
* Não é um chatbot genérico para responder FAQ.  
* Não é um teste vocacional clínico ou psicométrico que “decide” o curso pelo aluno.  
* Não é uma venda socrática que aumenta dúvida e atrito. O agente faz perguntas apenas quando elas destravam uma recomendação ou tornam a compra mais consciente.  
* Não é substituição do Studeo, CRM, Data Cloud/Data Lake, financeiro ou sistemas acadêmicos.  
* Não é uma central humana de CS acompanhando todos os alunos.  
* Não é uma implantação para todas as marcas, todos os polos e toda a jornada acadêmica no MVP.  
* Não é dependente de todos os polos executarem um processo padronizado.

## **Por que essa direção é coerente com a reunião**

A mentoria convergiu a discussão para uma “jornada de ingresso” e reforçou três pontos: a etapa pré-matrícula não pode criar fricção comercial; o pós deve ser proativo e escalável; e a solução precisa definir exatamente onde começa, onde termina e quais indicadores demonstram sucesso. A escolha por UniCesumar foi explicitamente sugerida porque os modelos acadêmicos das duas marcas são diferentes e ampliar o escopo reduziria a qualidade da entrega. \[M1\]

O depoimento de um aluno UniCesumar na reunião foi um sinal qualitativo forte: as informações existem no St udeo, mas a descoberta é passiva e fragmentada; o aluno relatou não ter recebido um onboarding externo proativo, descobriu benefícios tarde e percebeu dificuldade de navegação. Isso sustenta a oportunidade de um guia proativo sem afirmar que o relato representa toda a base. \[M2\]

# **1\. Storytelling do problema**

## **A história em uma frase**

| STORYLINE Hoje a Vitru consegue identificar muitos sinais quando o risco já está se formando. Nossa proposta começa antes: melhora a qualidade do ingresso e conduz o aluno pelos primeiros passos para reduzir a chance de o “possível evasor” se formar. |
| :---- |

## **Narrativa para o pitch**

**1\.** O candidato chega movido por um objetivo: melhorar de vida, mudar de carreira, obter um diploma, crescer profissionalmente ou realizar um projeto pessoal.

**2\.** Na conversão, ele pode escolher com pouca clareza sobre profissão, curso, metodologia ou rotina real do EAD. A matrícula acontece, mas parte do contexto que motivou a compra não acompanha o aluno.

**3\.** Depois do pagamento e geração do RA, existe conteúdo, espaço do calouro e informação no Studeo — porém informação disponível não é o mesmo que onboarding efetivo e proativo.

**4\.** Alguns ingressantes começam sem saber qual é o próximo passo, perdem o propósito que os levou à compra, não acessam, não completam a ambientação ou chegam atrasados ao primeiro ciclo acadêmico.

**5\.** A Vitru já possui diagnóstico e modelos de risco. O espaço de inovação do time está antes e no começo da jornada: alinhar expectativa, preservar contexto e transformar ingresso em ativação.

**6\.** O produto une dois momentos normalmente separados: a venda sabe por que o aluno entrou; o onboarding sabe o que ele precisa fazer agora. A nossa camada conecta as duas coisas.

## **Dois comportamentos que precisamos contemplar**

| Comportamento | Leitura | Resposta da solução |
| :---- | :---- | :---- |
| Escolha desalinhada | A pessoa começa e percebe que o curso/profissão não corresponde ao que imaginava. | Pré: esclarecer objetivo, curso e metodologia. Pós: permitir revalidação da escolha enquanto a mudança ainda é simples. |
| Intenção sem ativação | A pessoa sabe que estudar é importante, faz a matrícula, mas não transforma intenção em ação. | Pós: reancorar propósito, reduzir a primeira ação ao próximo passo concreto, reforçar rotina e suporte. |

A própria reunião diferenciou esses dois casos: “não era bem aquilo” versus “comprei e nem fui”. Isso é útil porque evita uma solução simplista que atribui toda a evasão precoce ao “curso errado”. \[M3\]

# **2\. Hipóteses que o MVP precisa representar**

| ID | Hipótese | Mecanismo esperado | Como testar |
| :---- | :---- | :---- | :---- |
| H1 | Venda educacional consultiva melhora aderência de entrada. | Melhor alinhamento entre objetivo, expectativa de carreira, metodologia e disponibilidade reduz surpresa/frustração inicial. | Comparar qualidade/clareza da escolha, troca precoce de curso, ativação e permanência entre grupos com/sem orientação. |
| H2 | Onboarding proativo melhora ativação do ingressante. | A pessoa não precisa descobrir sozinha plataforma, passos, prazos e rede de apoio; recebe orientação no momento certo. | Primeiro acesso, ambientação, primeira atividade, tempo até próximo marco, resolução de bloqueios. |
| H3 | Continuidade de contexto aumenta relevância. | O pós utiliza objetivo, restrições e dúvidas coletados no pré para evitar mensagens genéricas e reforçar propósito. | Engajamento/resposta, percepção de personalização, menor repetição de informações e maior conclusão dos marcos. |
| H4 | O timing de ingresso exige jornadas diferentes. | Quem compra quatro meses antes, no início, atrasado ou por migração não precisa das mesmas mensagens, intensidade e urgência. | Comparar desempenho dos fluxos por cenário e medir conclusão dos marcos ajustados ao tempo disponível. |
| H5 | Escalonamento seletivo preserva escala e qualidade. | Automação resolve o comum; polo/humano trata casos em que contexto, exceção ou decisão sensível exigem intervenção. | Taxa de resolução digital, % escalonado, SLA, resolução no primeiro handoff, custo por ativação. |

## **Fundamentos externos — o que a pesquisa permite defender**

* Uma revisão sistemática de 110 estudos sobre evasão no ensino superior online (2024) agrupa fatores de evasão em dimensões demográficas, de curso, tecnologia, motivação e suporte. Entre os fatores recorrentes estão qualidade do curso, preparação acadêmica, satisfação, motivação, atributos do sistema e serviços de suporte. \[E1\]  
* A mesma revisão inclui orientação para o ensino online antes do início das atividades entre os fatores ligados à preparação/curso e aponta que suporte acadêmico insuficiente — incluindo orientação, interação e senso de comunidade — pode prejudicar persistência. \[E1\]  
* Uma meta-revisão de educação superior online (2024) destaca, no nível do aluno, autorregulação, literacia digital e atitude positiva; no nível institucional, infraestrutura e suporte robusto. Ela também relaciona suporte institucional a satisfação/retenção e reforça o papel de comunidade e pares. \[E2\]  
* Um estudo longitudinal publicado em Labour Economics (2023), com dados alemães, encontrou maior evasão entre estudantes cuja preferência ocupacional anterior não combinava com a graduação escolhida. É evidência de mecanismo, não estimativa transportável para a UniCesumar. \[E3\]

| CUIDADO DE EVIDÊNCIA Nenhum desses estudos prova que “nosso agente reduz evasão em X%”. Eles justificam os mecanismos que o agente trabalha. O impacto causal precisa ser medido em piloto UniCesumar. |
| :---- |

# **3\. Recorte da solução**

## **População-alvo do MVP**

* Candidatos UniCesumar EAD em momentos de alta intenção (ex.: página de curso/ementa, landing page específica, etapa final do funil ou campanha de curso).  
* Alunos que já pagaram o primeiro boleto e receberam RA, do momento de confirmação da matrícula até o marco de estabilização definido para o piloto.  
* Polos selecionados por capacidade operacional e representatividade, sem pressupor adesão total da rede.

## **Onde começa e onde termina**

| INÍCIO Pré-venda: quando o candidato demonstra intenção suficiente para aceitar ajuda contextual — por exemplo, chat na página de curso/ementa ou entrada por campanha/landing page. O agente nunca bloqueia o caminho de compra. |
| :---- |

| TRANSIÇÃO A matrícula/RA é o ponto de handoff entre os agentes. O Student Entry Context é persistido e o agente de onboarding assume a jornada. |
| :---- |

| FIM DO ONBOARDING O aluno sai da jornada intensiva quando cumpre os marcos mínimos de ativação definidos para seu cenário (ex.: acesso, ambientação/metodologia compreendida, primeiro compromisso acadêmico concluído, próximo passo claro e rede de suporte conhecida). A janela exata deve ser validada no BI e com a staff. |
| :---- |

## **Recorte de polos — hipótese operacional**

A rede é heterogênea. Na reunião, foi colocado que alguns polos são “minissedes” e outros operam com estrutura mínima; também foi lembrado que processos no polo são menos controláveis do que processos internos. A mentoria sugeriu que transformar apenas uma fatia de polos estruturados já seria representativo. \[M4\]

Para o piloto, a proposta atual do time é trabalhar com os polos de maior infraestrutura — hipótese a fechar como “30 principais polos” ou “top 30%”. Não usar esse número no pitch como dado da Vitru até validação.

| Critério de seleção do piloto | Por quê |
| :---- | :---- |
| Volume de ingressantes | Aumenta poder de medição e impacto demonstrável. |
| Equipe/capacidade mínima | Garante que handoffs humanos não virem gargalo. |
| Acesso/adoção Salesforce | Permite receber tarefas e registrar desfechos sem criar ferramenta paralela. |
| SLA e disponibilidade operacional | Diferencia polo apto a receber exceções de polo sem capacidade. |
| Diversidade regional | Evita piloto restrito a um único perfil cultural/regional. |
| Baseline de ativação/evasão inicial | Permite comparar antes/depois e selecionar amostra mensurável; não serve como score individual de risco. |

# **4\. Personas e contexto persistente do aluno**

## **Personas funcionais**

| Persona | Situação | O que precisa da solução |
| :---- | :---- | :---- |
| Candidato decidido | Já escolheu o curso e quer comprar rápido. | Zero atrito; respostas objetivas; checkout sempre disponível; orientação opcional. |
| Candidato explorador | Está entre cursos ou não entende bem carreira/metodologia. | Comparação guiada, expectativas realistas, conexão com objetivo e próximos passos claros. |
| Ingressante antecipado | Matriculou-se meses antes do início. | Manter propósito, preparar metodologia, aproveitar período pré-aula, evitar “esfriamento”. |
| Ingressante no tempo certo | Matriculou-se próximo ao início. | Onboarding direto, checklist, acesso, rotina e primeira atividade. |
| Ingressante tardio | Entrou após o ciclo começar ou com pouco tempo para recuperar. | Plano de recuperação priorizado; cortar o que é secundário; urgência sem ansiedade desnecessária. |
| Migrante/transferido | Chega com experiência prévia, mas o contexto acadêmico muda. | Onboarding diferencial: explicar somente o que mudou e validar pendências. Definição exata de “migração” precisa ser confirmada. |

## **Student Entry Context — o “memory.md” do aluno**

O conceito de “memory.md” é útil como metáfora, mas em produção deve virar um perfil estruturado, versionado e minimizado: fatos úteis para personalização, não um diário livre ou inferências psicológicas. O resumo textual pode existir, mas sempre derivado de campos autorizados.

student\_entry\_context:

  identity:

    student\_or\_lead\_id: \<id\>

    course\_interest: \<curso\>

    modality: EAD

    pole: \<polo\>

  acquisition\_context:

    source: \<utm\_source/campanha\>

    campaign: \<campanha\>

    landing\_page: \<url/página\>

    content\_context: \<ex.: ementa do curso\>

  declared\_context:

    main\_goal: \<objetivo do aluno\>

    career\_interest: \<interesse profissional\>

    availability: \<janela de estudo declarada\>

    main\_concerns: \[\<dúvidas\>\]

    methodology\_expectations: \<expectativa\>

    course\_confidence: \<alto|médio|baixo|não coletado\>

  onboarding\_context:

    enrollment\_date: \<data\>

    course\_start\_date: \<data\>

    ingress\_scenario: \<early|just\_in\_time|late|migration\>

    first\_access\_status: \<status\>

    onboarding\_status: \<status\>

    first\_activity\_status: \<status\>

  interaction\_memory:

    last\_summary: \<resumo factual e curto\>

    commitments: \[\<próximos passos combinados\>\]

    handoffs: \[\<polo/humano/área\>\]

  governance:

    source\_of\_each\_field: \<origem\>

    last\_updated\_at: \<timestamp\>

    consent\_or\_legal\_basis: \<referência de governança\>

    retention\_policy: \<regra\>

## **Guardrail de memória**

* Não inferir saúde mental, condição médica, religião, orientação política, perfil psicológico ou qualquer dado sensível não necessário.  
* Não guardar “opiniões” do agente como fatos. Separar claramente declaração do aluno, dado sistêmico e inferência operacional.  
* Permitir atualização/correção: contexto muda. “Trabalho à noite” ou “quero carreira X” não pode ser tratado como verdade eterna.  
* Minimizar retenção e acesso: polo recebe apenas os campos necessários para executar sua tarefa.  
* Não usar contexto de marketing para manipulação; usar para relevância, continuidade e redução de repetição.

* Nunca prometer empregabilidade, salário, tempo até conseguir emprego, ou aprovação em concurso

* Nunca dizer que ela não tem perfil, ou que não deveria se matricular

# **5\. Fluxo A — Agente de Pré-venda / Venda Educacional**

## **Missão**

| MISSÃO DO AGENTE Ajudar o candidato a avançar para uma matrícula consciente e aderente, combinando conversão, educação sobre curso/metodologia e alinhamento de expectativa — sem aumentar atrito, sem “interrogar” e sem bloquear a compra. |
| :---- |

## **Princípios de experiência**

* Começar pelo contexto que já existe. Se o usuário veio de anúncio “Administração para empreendedores” e está na ementa de Administração, não perguntar “qual curso você quer?”.  
* Fazer no máximo uma ou duas perguntas por vez, somente se a resposta mudar a orientação.  
* Não transformar toda conversa em orientação vocacional. Candidato decidido deve conseguir comprar rápido.  
* Explicar o EAD e a metodologia de forma concreta: esforço esperado, organização, atividades, suporte e próximos passos.  
* Vender valor emocional sem prometer carreira, salário ou resultado garantido.  
* Quando houver dúvida real entre cursos, comparar de forma factual usando base oficial da UniCesumar.  
* Se o candidato quiser encerrar a conversa e comprar, o agente facilita imediatamente.  
* Capturar contexto útil para o pós sem fazer coleta excessiva.

## **Entradas contextuais possíveis**

| Entrada | Contexto já conhecido | Comportamento do agente |
| :---- | :---- | :---- |
| Campanha de curso | UTM, criativo/copy, curso anunciado, promessa da campanha. | Reconhece intenção; valida objetivo com pergunta curta; complementa a promessa com realidade do curso. |
| Landing page | Curso/segmento/benefício apresentado. | Responde com base na página e oferece ajuda para “entender se faz sentido para seu objetivo”. |
| Página de ementa | Curso e disciplina/ementa visualizada. | Age como guia contextual: carreira, disciplinas, metodologia, dúvidas sobre o que será estudado. |
| Busca genérica/site | Pouco contexto. | Descobre objetivo primeiro; só então recomenda caminhos. |
| Retorno de lead/CRM | Histórico de contato/oferta, quando disponível. | Evita repetir perguntas e mantém coerência com a régua comercial. |

## **Fluxo conversacional mínimo**

**1\.** Contextualizar: “Vi que você está olhando X / veio conhecer Y”.

**2\.** Entender o objetivo em uma pergunta: “O que você quer mudar profissionalmente com essa graduação?”.

**3\.** Quando necessário, entender restrição relevante: tempo, rotina, modalidade, incerteza entre cursos.

**4\.** Orientar: conectar objetivo, curso e realidade da metodologia; corrigir expectativa sem dramatizar.

**5\.** Converter: oferecer próximo passo comercial/checkout quando houver intenção.

**6\.** Persistir: salvar somente o contexto que terá valor no onboarding.

**7\.** Handoff: após RA, transferir para o agente de onboarding com resumo e compromissos.

## **Quando a orientação de carreira pode ir para o pós**

A reunião trouxe uma alternativa importante: como a orientação pré-venda é opcional para não criar fricção, quem não passar por ela pode ser convidado a realizá-la logo após a matrícula. Isso preserva conversão e ainda permite corrigir curso/expectativa cedo — especialmente quando existe uma longa janela entre captação e início das aulas. \[M5\]

# **6\. Fluxo B — Agente de Pós-venda / Onboarding Proativo**

## **Missão**

| MISSÃO DO AGENTE Transformar matrícula em ativação. O agente deve saber o próximo passo relevante para aquele aluno, naquele momento, e conduzi-lo até os marcos de ingresso com o mínimo de carga cognitiva possível. |
| :---- |

## **O motor não é preditivo: é temporal \+ orientado a eventos**

O MVP deve trabalhar com regras determinísticas por data, cenário e evento. Exemplos: matrícula confirmada, RA gerado, distância até início das aulas, primeiro acesso ao Studeo, conclusão do Espaço Calouro/ambientação, primeira atividade, ausência de resposta e solicitação explícita de ajuda. Modelos preditivos podem ser consultados na pesquisa para identificar quais comportamentos importam, mas não decidem quem “merece” onboarding.

## **Quatro fluxos de ingresso**

| Fluxo | Condição | Objetivo | Cadência/conteúdo proposto |
| :---- | :---- | :---- | :---- |
| B1. Antecipado | Matrícula com grande antecedência do início. | Evitar esfriamento e preparar o aluno sem saturar. | Boas-vindas \+ reancoragem de propósito; orientação opcional de carreira; metodologia; benefícios/serviços; preparação de acesso; T-30/T-7; comunidade/rede de apoio; início das aulas. |
| B2. Em cima da hora / regular | Matrícula próxima ao início. | Acelerar ativação sem overload. | Checklist compacto: acesso → Espaço Calouro → metodologia → agenda → primeira atividade; mensagens apenas sobre o próximo marco. |
| B3. Tardio | Matrícula após início ou com pouco tempo até entregas. | Recuperar rapidamente o essencial. | Diagnóstico factual do que já começou; plano de recuperação; destacar prazos críticos; atalhos para Studeo; escalação se houver impedimento acadêmico/administrativo. |
| B4. Migração/transferência | Aluno chega de outro contexto acadêmico/modalidade/curso. | Evitar onboarding genérico e focar diferenças. | Validar o que ele já sabe; explicar apenas diferenças, equivalências e pendências; construir “delta onboarding”. A definição operacional exata precisa ser validada com a UniCesumar. |

## **Exemplo de jornada B1 — matrícula muito antecipada**

**1\.** D0: confirmação de matrícula/RA \+ boas-vindas \+ “por que você escolheu esse curso?” (recuperado do pré quando disponível).

**2\.** D1–D7: validação curta de escolha/metodologia; se o pré foi pulado, oferecer orientação sem obrigatoriedade.

**3\.** Período pré-aula: cadência baixa de valor — conhecer Studeo, Espaço Calouro, benefícios, rede de apoio, rotina e expectativas.

**4\.** T-30: preparação prática; confirmar acesso e canais.

**5\.** T-7: checklist de início e agenda da primeira semana.

**6\.** T0/D+1: primeiro acesso e próximo passo concreto.

**7\.** D+7 ou marco equivalente: primeira ação acadêmica relevante e confirmação de rede de suporte.

**8\.** Saída: aluno cumpre critérios de ativação e passa para jornada acadêmica normal.

## **Exemplo de jornada B3 — ingresso tardio**

**1\.** D0: reconhecer que o aluno entrou com o ciclo em andamento; evitar boas-vindas genéricas.

**2\.** Buscar calendário/estado acadêmico permitido e identificar 1–3 prioridades reais.

**3\.** Apresentar plano de recuperação em ordem: obrigatório/urgente → importante → complementar.

**4\.** Confirmar acesso e execução da primeira prioridade.

**5\.** Se existir bloqueio que o agente não pode resolver, abrir tarefa para polo/área responsável com contexto pronto.

**6\.** Voltar ao aluno após o handoff e fechar o ciclo: resolvido / pendente / próximo passo.

# **7\. Canais e escalonamento**

## **Princípio de escala**

A reunião foi explícita em dois aspectos: Salesforce/licenciamento foi considerado viável para apoiar a operação; já a mensageria WhatsApp distribuída por polo foi considerada inviável, sugerindo canal centralizado. Também foi recomendado segmentar canais do menos oneroso para o mais nobre e reservar o humano para situações que realmente exijam interação. \[M6\]

| Nível | Canal/ator | Quando usar | Saída |
| :---- | :---- | :---- | :---- |
| L0 | Widget/site/Studeo | Usuário ativo no contexto; resposta imediata. | Orientação e próximo passo. |
| L1 | Push / e-mail / SMS | Lembretes e conteúdo transacional de baixa complexidade. | Clique, confirmação ou conclusão de marco. |
| L2 | WhatsApp central \+ agente | Ação proativa de maior valor, urgência ou quando canais anteriores não funcionaram. | Conversa contextual e resolução digital. |
| L3 | Polo selecionado | Questões locais, vínculo, suporte presencial/operacional ou caso em que relação humana local agrega valor. | Tarefa com contexto, SLA e retorno obrigatório. |
| L4 | Humano interno/externo especializado | Exceções sensíveis/complexas, conflito acadêmico, decisão que exige autoridade, risco reputacional ou falha reiterada. | Caso resolvido ou encaminhado formalmente. |

## **Regras de escalonamento do agente**

* Escalar por necessidade e tipo de problema, não por um score de evasão.  
* Nunca mandar o aluno ao polo sem criar uma tarefa/contexto para o polo quando a integração permitir.  
* Evitar “vai falar com o polo” como resposta final; o agente deve explicar por quê, o que será tratado e como acompanhar.  
* Se o polo não estiver no piloto ou não tiver capacidade, rotear para alternativa centralizada.  
* Para mudança de curso, regras acadêmicas, financeiro sensível ou exceções administrativas: orientar somente com política oficial e escalar quando houver decisão/execução não autorizada.  
* Registrar fechamento do ciclo para que o aluno não repita toda a história.

# **8\. Métricas de sucesso**

## **North Star proposta: Ativação de Ingresso**

| MÉTRICA PRINCIPAL Percentual de ingressantes que concluem os marcos essenciais de entrada dentro da janela adequada ao seu cenário de ingresso. A janela e os pesos devem ser calibrados com dados reais da UniCesumar. |
| :---- |

## **Marcos candidatos**

| Marco | Métrica objetiva | Por que importa |
| :---- | :---- | :---- |
| Acesso | Tempo até primeiro acesso; % que acessa até D+X / T-X. | Acesso é pré-condição para a experiência acadêmica. |
| Ambientação | % que conclui Espaço Calouro/orientação equivalente. | Reduz incerteza sobre metodologia, ferramentas e suporte. |
| Clareza de curso | Confirmação de escolha / troca precoce quando aplicável. | Trata desalinhamento antes de virar frustração tardia. |
| Primeiro compromisso | % que conclui a primeira atividade/marco acadêmico previsto. | Mede passagem de intenção para comportamento. |
| Autonomia | Aluno consegue identificar próximo passo, prazo e canal de suporte. | Proxy de autorregulação e redução de dependência. |
| Suporte | Tempo de resolução e taxa de resolução do primeiro handoff. | Mede qualidade da rede, não só volume de contatos. |

## **KPIs do piloto**

* Activation Rate por cenário de ingresso e por polo.  
* Time-to-First-Access.  
* % de ambientação concluída.  
* % de primeira atividade/marco concluído no prazo.  
* % de candidatos/alunos que completam orientação de escolha quando oferecida.  
* % de troca de curso realizada antes do início efetivo das aulas versus troca/cancelamento posterior.  
* Taxa de resposta às intervenções e taxa de conclusão após intervenção.  
* Resolução digital sem handoff; % escalonado ao polo; % escalonado ao humano central.  
* SLA e taxa de fechamento de handoffs.  
* CSAT da jornada de ingresso / “eu sei o que fazer agora”.  
* Métrica lagging: cancelamento/intenção de cancelamento/permanência em 30/60/90 dias, quando o desenho de dados permitir.

## **Como validar impacto sem prometer causalidade cedo demais**

**1\.** Fase 1 — baseline histórico: medir coortes anteriores por cenário e polo.

**2\.** Fase 2 — piloto controlado: polos/coortes comparáveis com tratamento e controle, quando viável.

**3\.** Fase 3 — medir indicadores de ativação primeiro; evasão precoce depois, porque possui defasagem temporal.

**4\.** Fase 4 — instrumentar cada ação: trigger → mensagem/ação → resposta → marco concluído → resultado posterior.

**5\.** Fase 5 — escalar apenas fluxos que apresentarem efeito e custo operacional aceitáveis.

# **9\. Dados necessários para a demo e para validação**

## **Mínimo para o MVP**

| Grupo | Campos/eventos mínimos |
| :---- | :---- |
| Aquisição | utm\_source, utm\_campaign, anúncio/criativo, landing page, página atual/curso visualizado. |
| Lead/Candidato | lead\_id, curso de interesse, status do funil, histórico resumido de interação. |
| Contexto declarado | objetivo, disponibilidade, dúvidas, interesse profissional, expectativa de metodologia — somente quando coletados. |
| Matrícula | student\_id/RA, data de matrícula, data prevista de início, curso, polo, modalidade, forma/tipo de ingresso. |
| Onboarding | primeiro acesso, Espaço Calouro/ambientação, status de checklist, primeira atividade/marco, próximos prazos. |
| Intervenção | canal, template/ação, timestamp, resposta, status, handoff, resolução. |

## **Perguntas que a pesquisa interna/BI precisa responder**

**\[ \]** Quantos ingressantes UniCesumar existem por safra e por cenário de timing?

**\[ \]** Qual a distribuição matrícula → início das aulas? Quais cortes formam “antecipado”, “regular” e “tardio”?

**\[ \]** Qual % recebe RA e não realiza primeiro acesso em X dias?

**\[ \]** Qual % conclui o Espaço Calouro / ambientação e em quanto tempo?

**\[ \]** Qual % realiza a primeira atividade/marco no prazo?

**\[ \]** Quais motivos de cancelamento/troca aparecem nos primeiros 30/60/90 dias?

**\[ \]** Qual volume troca de curso antes do início e após o início?

**\[ \]** Como “migração” é definida nos sistemas da UniCesumar?

**\[ \]** Quais polos têm estrutura, SLA e licença/acesso Salesforce suficientes para o piloto?

**\[ \]** Quais eventos e campos estão disponíveis por API/CRM/Data Cloud/Studeo no org fornecido?

**\[ \]** Quais réguas de mercado já existem para não duplicar ou conflitar com a pré-venda?

**\[ \]** Qual custo real por canal (push/e-mail/SMS/WhatsApp) e quais políticas de contato precisam ser respeitadas?

## **Uso da base preditiva existente**

A base e os modelos fornecidos podem responder “quais comportamentos se associam a sucesso/risco” e ajudar a escolher marcos para o onboarding. Eles não serão o mecanismo de seleção do MVP. Essa separação é importante: o desafio da Vitru já parte do pressuposto de que o diagnóstico existe e pede ações concretas, preventivas/preditivas e escaláveis. \[D1\]

# **10\. Arquitetura conceitual**

## **Desenho lógico**

| Camada | Componentes | Responsabilidade |
| :---- | :---- | :---- |
| 1\. Aquisição | Ads / UTM / landing pages / site / página de curso / ementa | Entregar contexto de origem e intenção ao agente de pré-venda. |
| 2\. Pré-venda | Agentforce — agente de venda educacional | Conversar, orientar, converter e gerar Student Entry Context. |
| 3\. CRM / Contexto | Salesforce CRM \+ objeto/contexto do ingresso \+ Data Cloud/Data Lake conforme disponibilidade | Persistir lead/aluno, origem, memória estruturada, consentimento, estado da jornada. |
| 4\. Evento de matrícula | Pagamento/RA/integração acadêmica | Disparar handoff para onboarding e definir cenário temporal. |
| 5\. Pós-venda | Agentforce — agente de onboarding | Executar jornada por regras temporais/eventos, consultar base oficial e acionar ações. |
| 6\. Sistemas | Studeo / dados acadêmicos / calendário / serviços / financeiro / APIs disponíveis | Fonte de verdade para status, prazos, serviços e ações permitidas. |
| 7\. Orquestração | Flow / ações / APIs / regras de jornada | Enviar canais, registrar resultado, criar tarefa e escalonar. |
| 8\. Canais | Widget / push / e-mail / SMS / WhatsApp central | Entregar a intervenção no canal apropriado. |
| 9\. Rede humana | Polo selecionado / humano central / área especializada | Tratar exceções com contexto e devolver desfecho ao sistema. |
| 10\. Medição | Eventos \+ dashboard | Medir ativação, custos, SLAs, handoffs e resultados de permanência. |

## **Fluxo de dados em uma linha**

| FLUXO Origem de marketing → Agente Pré → Student Entry Context → Matrícula/RA → Classificação do cenário de ingresso → Agente Pós → Ação/canal → Evento de sucesso ou handoff → Registro de resultado → Métricas. |
| :---- |

## **Por que Agentforce faz sentido sem “vender IA”**

Agentforce funciona aqui como camada operacional: combina instruções, contexto do CRM, base de conhecimento e ações. O valor demonstrado deve ser a jornada e o resultado. Na apresentação, a tecnologia entra depois da história do aluno e do processo.

# **11\. Arquitetura dos agentes**

## **Agente 1 — Venda Educacional**

| Elemento | Definição |
| :---- | :---- |
| Objetivo | Converter com qualidade de escolha e expectativa, sem aumentar fricção. |
| Base de conhecimento | Cursos, ementas, carreiras possíveis (sem promessa), metodologia EAD, calendário/comercial permitido, FAQ oficial, políticas de matrícula/troca, marca UniCesumar. |
| Contexto dinâmico | UTMs/campanha, página atual, curso visualizado, CRM do lead, conversas anteriores. |
| Ações | Consultar curso/ementa; comparar cursos; registrar contexto; atualizar lead; encaminhar checkout/atendimento comercial; gerar resumo de handoff. |
| Não pode | Inventar preço/bolsa, prometer salário/emprego, diagnosticar vocação, pressionar, criar objeções desnecessárias, contradizer régua comercial, bloquear compra. |

## **Agente 2 — Onboarding / Ativação**

| Elemento | Definição |
| :---- | :---- |
| Objetivo | Conduzir o aluno do RA/matrícula até os marcos de ativação do seu cenário. |
| Base de conhecimento | Studeo, Espaço Calouro, metodologia, calendário, serviços/benefícios, canais de apoio, políticas acadêmicas e operacionais. |
| Contexto dinâmico | Student Entry Context, matrícula/início, polo, status de acesso/ambientação/atividade, interações, handoffs. |
| Ações | Gerar próximo passo; enviar/acionar canal; linkar recurso certo; criar tarefa para polo/humano; registrar resolução; reprogramar próxima ação. |
| Não pode | Inventar regra acadêmica, decidir exceção não autorizada, usar score preditivo como gate do onboarding, insistir excessivamente, expor dados desnecessários ao polo. |

## **Guardrails comuns**

* Fonte oficial vence memória do modelo. Se a informação não estiver disponível, assumir incerteza e encaminhar.  
* Sem “alucinação operacional”: nunca afirmar que uma tarefa foi concluída sem retorno da ação/API.  
* Sem promessas de resultado acadêmico, carreira, salário ou empregabilidade.  
* Privacidade por padrão: usar somente o contexto necessário para a ação atual.  
* Explicar quando um humano/polo entrou no fluxo e qual dado será compartilhado.  
* Evitar tom culpabilizante (“você não fez”). Preferir orientação acionável (“seu próximo passo é…”).  
* Não converter orientação em terapia, diagnóstico de personalidade ou aconselhamento psicológico.  
* Respeitar opt-out, preferências de canal e regras de contato.  
* Em dúvida sobre regra acadêmica/financeira, escalar; não improvisar.

# **12\. Prompts-base para implementação**

## **Prompt 1 — Agente de Pré-venda / Venda Educacional**

PAPEL

Você é o Agente de Venda Educacional da UniCesumar para candidatos de graduação EAD.

Seu trabalho é ajudar o candidato a tomar uma decisão clara e avançar para a matrícula com confiança.

Você NÃO é um teste vocacional, terapeuta, professor nem um chatbot genérico de FAQ.

Você participa de uma jornada comercial: precisa orientar e também facilitar a conversão.

PRINCÍPIO CENTRAL

Venda com educação, não com fricção.

Não use uma abordagem socrática que gere novas dúvidas desnecessárias.

Faça perguntas somente quando a resposta puder mudar a orientação, comparação de curso ou próximo passo.

Se o candidato já estiver decidido, não o force a passar por diagnóstico ou entrevista.

CONTEXTO QUE VOCÊ DEVE USAR ANTES DE PERGUNTAR

\- campanha, UTM e anúncio de origem;

\- landing page/página atual e curso/ementa visualizados;

\- informações já registradas no CRM;

\- histórico recente da conversa;

\- base oficial de cursos, metodologia, regras e ofertas disponibilizadas pelas ferramentas.

Nunca pergunte novamente algo que o contexto já informa com confiança.

OBJETIVOS

1\. Entender o objetivo principal do candidato em linguagem simples.

2\. Explicar como o curso e a metodologia se conectam — ou não — a esse objetivo.

3\. Corrigir expectativas factuais sem desmotivar ou criar medo.

4\. Ajudar na comparação entre cursos quando houver dúvida real.

5\. Facilitar o próximo passo comercial quando houver intenção.

6\. Capturar um Student Entry Context mínimo e útil para o onboarding.

ESTILO

\- humano, caloroso, direto e respeitoso;

\- uma ou duas perguntas por vez;

\- respostas curtas por padrão; detalhe quando solicitado;

\- linguagem acessível, sem jargão acadêmico ou de CRM;

\- personalize usando o contexto, sem parecer invasivo.

FLUXO PREFERENCIAL

A. Reconheça o contexto: curso/página/campanha.

B. Se necessário, pergunte o objetivo profissional/pessoal principal.

C. Se necessário, pergunte uma restrição que realmente afeta a escolha (tempo, rotina, modalidade ou dúvida entre cursos).

D. Oriente com fatos da base oficial.

E. Pergunte se deseja avançar, comparar ou esclarecer algo específico.

F. Quando houver intenção, facilite a matrícula/ação comercial autorizada.

G. Registre resumo factual e os campos úteis para o pós.

ORIENTAÇÃO DE CARREIRA

\- Use interesses e objetivos para orientar, nunca para decretar “vocação”.

\- Não prometa emprego, salário, cargo ou sucesso.

\- Não faça diagnóstico psicológico.

\- Se houver forte desalinhamento entre objetivo declarado e curso, explique de forma simples e ofereça comparação; a decisão final é do candidato.

\- Se o candidato quiser prosseguir mesmo após o alerta, respeite e facilite a compra.

CONVERSÃO

\- A compra nunca deve ficar escondida atrás de perguntas.

\- Não crie objeções novas quando não há sinal de dúvida.

\- Não contradiga oferta, preço ou condição comercial sem consultar fonte oficial.

\- Se preço/bolsa/condição não estiver disponível em ferramenta confiável, encaminhe para a fonte correta.

MEMÓRIA / SAÍDA ESTRUTURADA

Ao finalizar uma interação relevante, atualize apenas campos suportados por fatos:

main\_goal, career\_interest, availability, main\_concerns, methodology\_expectations,

course\_confidence, source/campaign/page, commitments, short\_factual\_summary.

Marque como “não coletado” o que não foi perguntado.

ESCALONAMENTO

Escalone quando: houver regra comercial fora da sua permissão; exceção de matrícula; conflito de informação; solicitação explícita de humano; tema sensível que não deve ser resolvido pelo agente.

Entregue ao humano resumo \+ contexto \+ pergunta pendente, evitando repetição para o candidato.

## **Prompt 2 — Agente de Pós-venda / Onboarding**

PAPEL

Você é o Agente de Onboarding e Ativação de Ingressantes EAD da UniCesumar.

Você começa a atuar após a confirmação da matrícula/RA e acompanha o aluno somente durante a janela de ingresso definida pela jornada.

Seu objetivo não é prever evasão. Seu objetivo é transformar matrícula em ativação.

PRINCÍPIO CENTRAL

Em cada interação, identifique o menor próximo passo que aumenta a autonomia do aluno.

Não despeje um catálogo inteiro. Oriente na ordem certa e no momento certo.

FONTES DE CONTEXTO

\- Student Entry Context vindo do pré-venda, quando existir;

\- curso, polo, modalidade, data da matrícula e data de início;

\- cenário de ingresso: ANTECIPADO, REGULAR/JUST-IN-TIME, TARDIO, MIGRAÇÃO/TRANSFERÊNCIA;

\- status de primeiro acesso, Espaço Calouro/ambientação, primeira atividade e prazos;

\- histórico de mensagens e handoffs;

\- base oficial UniCesumar e ações/APIs autorizadas.

REGRAS DE SEGMENTAÇÃO

Não use um score preditivo de evasão como gate.

Escolha o fluxo por fatos determinísticos: datas, status, eventos, respostas e tipo de ingresso.

OBJETIVOS

1\. Reancorar o propósito declarado quando isso ajudar a ação atual.

2\. Garantir que o aluno sabe acessar e navegar até o recurso correto.

3\. Tornar a metodologia e o próximo compromisso compreensíveis.

4\. Ajudar o aluno a organizar seu início sem gerar sobrecarga.

5\. Apresentar rede de apoio e acionar polo/humano quando necessário.

6\. Fechar o ciclo de cada intervenção e registrar o resultado.

LÓGICA POR CENÁRIO

ANTECIPADO: cadência baixa; preservar motivação; preparar metodologia e ferramentas; antecipar dúvidas; intensificar perto do início.

REGULAR/JUST-IN-TIME: checklist compacto; acesso → ambientação → agenda → primeira atividade.

TARDIO: reconhecer urgência; buscar prazos; criar plano de recuperação; priorizar obrigatório/urgente; escalar impedimentos.

MIGRAÇÃO/TRANSFERÊNCIA: descobrir somente diferenças relevantes; não repetir onboarding básico desnecessariamente; validar equivalências e pendências por fonte oficial.

CANAIS E ESCALONAMENTO

Use, conforme regra de orquestração, a alternativa menos onerosa que resolva bem:

L0 contexto digital/in-app → L1 push/e-mail/SMS → L2 WhatsApp central com agente → L3 polo selecionado → L4 humano central/especializado.

A escolha deve considerar urgência, complexidade, resposta anterior e tipo de problema, não “valor do aluno”.

HANDOFF PARA POLO/HUMANO

Antes de escalar:

\- resuma o problema em no máximo 5 linhas;

\- liste dados relevantes e tentativas já realizadas;

\- diga exatamente qual ação está sendo solicitada;

\- defina SLA quando a regra existir;

\- informe ao aluno o que acontecerá a seguir.

Depois do handoff, acompanhe o retorno e registre desfecho.

GUARDRAILS

\- Nunca invente regra acadêmica, prazo, nota, equivalência ou política financeira.

\- Nunca declare uma ação concluída sem confirmação da ferramenta/sistema.

\- Não culpabilize o aluno por atraso ou falta de acesso.

\- Não use dados sensíveis que não sejam necessários.

\- Não transforme apoio educacional em terapia ou diagnóstico psicológico.

\- Respeite preferências/opt-out de canal.

\- Não continue a jornada intensiva depois do critério de estabilização.

CRITÉRIO DE SUCESSO DA INTERAÇÃO

O aluno termina sabendo: (1) o que fazer agora; (2) onde fazer; (3) até quando; (4) quem pode ajudar se travar.

Sempre que possível, registre a conclusão do marco e programe somente o próximo passo relevante.

# **13\. Agentforce DX, Salesforce MCP e Kiro — como trabalhar no projeto**

## **Correção de nomenclatura**

| NOME CORRETO O nome é Agentforce DX, não “Agentforce DK”. Agentforce DX é a extensão do Salesforce DX para criar, versionar, visualizar, testar e publicar agentes com ferramentas pro-code (Salesforce CLI/VS Code) e low-code (Agentforce Builder/Flow Builder). \[SF1\] |
| :---- |

## **Três coisas diferentes que não devemos misturar**

| Componente | O que é | Uso no hackathon |
| :---- | :---- | :---- |
| Agentforce DX | Workflow de desenvolvimento/versionamento de agentes; Agent Script/authoring bundle, preview, publish e testes. | Construir e versionar os dois agentes. |
| Salesforce DX MCP Server | Servidor MCP local (\`@salesforce/mcp\`) que permite a um IDE/agente de código operar orgs Salesforce autenticadas via CLI: dados, metadata, testes etc. | Conectar Kiro ao projeto/org Salesforce e acelerar retrieve/deploy/query/test. |
| Agentforce \`agent mcp ...\` | Comandos CLI para registrar/gerenciar servidores MCP no API Catalog; atualmente aparecem como Developer Preview na referência oficial. | Não é requisito para o MVP. Só usar se houver uma integração MCP externa realmente necessária ao agente em runtime. |

## **Workflow recomendado de desenvolvimento**

**1\.** Manter um projeto Salesforce DX no repositório Git como fonte de verdade.

**2\.** Criar/recuperar o agent spec e o authoring bundle de cada agente.

**3\.** Editar Agent Script e metadados no projeto; usar Agentforce Builder quando for mais rápido para configuração visual.

**4\.** Previewar o agente em modo simulado/live; testar casos de conversa.

**5\.** Publicar/deployar para o org.

**6\.** Recuperar alterações feitas no Builder de volta ao projeto.

**7\.** Rodar testes e commitar no Git.

A documentação atual do Agentforce DX recomenda exatamente a alternância entre low-code e pro-code, mantendo o projeto DX e o VCS sincronizados. O fluxo Agent Script inclui geração de agent spec, authoring bundle, edição, preview e publish. \[SF1\]\[SF2\]

## **Passo a passo — Salesforce CLI \+ Kiro MCP**

Se \`sf\` ainda não for reconhecido no PowerShell, instale o Salesforce CLI oficial para Windows e reabra o terminal. Depois valide \`sf \--version\`. \[SF5\]

\# 1\) validar ferramentas

sf \--version

node \--version

npx \--version

\# 2\) autenticar o org e fixar um alias

sf org login web \--alias vitru-hackathon \--set-default

\# 3\) validar conexão

sf org list

\# 4\) no projeto, criar .kiro/settings/mcp.json

\# (configuração abaixo)

{

  "mcpServers": {

    "Salesforce DX": {

      "command": "npx",

      "args": \[

        "-y",

        "@salesforce/mcp@latest",

        "--orgs",

        "vitru-hackathon",

        "--toolsets",

        "orgs,metadata,data,testing"

      \],

      "disabled": false

    }

  }

}

O Kiro usa \`.kiro/settings/mcp.json\` para configuração MCP por workspace. O Salesforce DX MCP exige ao menos uma org previamente autorizada e permite restringir toolsets; a documentação recomenda não habilitar todos os tools quando não forem necessários. \[K1\]\[SF4\]

## **O que pedir ao Kiro depois de conectado**

* “Liste as orgs Salesforce autorizadas e confirme qual alias está ativo.”  
* “Mostre os authoring bundles/agentes existentes no projeto e no org.”  
* “Recupere a metadata necessária para o agente de pré-venda.”  
* “Identifique objetos/campos disponíveis para Lead, estudante, matrícula e contexto de ingresso sem alterar dados.”  
* “Gere o agent spec e o authoring bundle do agente X seguindo estas regras.”  
* “Faça preview/testes com estes casos e reporte falhas de guardrail.”  
* “Rode os testes do agente no org.”

## **Segurança da conexão Kiro ↔ Salesforce**

* Prender o MCP ao alias específico \`vitru-hackathon\`; não usar \`ALLOW\_ALL\_ORGS\`.  
* Habilitar somente toolsets necessários. Para exploração inicial, começar read-heavy; liberar escrita/deploy conscientemente.  
* Não colocar senhas, refresh tokens ou secrets no \`mcp.json\`.  
* Não autoaprovar ferramentas de escrita/destrutivas por conveniência.  
* Manter config MCP no workspace do projeto; revisar antes de commitar qualquer conteúdo sensível.  
* No Kiro, preferir variáveis de ambiente aprovadas quando houver segredo e seguir least privilege.

O Kiro recomenda revisão explícita de chamadas, princípio de menor privilégio, evitar secrets hardcoded e usar configurações MCP específicas por workspace. \[K2\]

## **Agentforce CLI — comandos que podem ser úteis**

\# explorar ajuda

sf agent \--help

\# gerar especificação e authoring bundle (ver opções no CLI instalado)

sf agent generate agent-spec \--help

sf agent generate authoring-bundle \--help

\# preview / publish / testes

sf agent preview \--help

sf agent publish authoring-bundle \--help

sf agent test \--help

\# Agentforce Data Library, se o org disponibilizar e fizer sentido

sf agent adl \--help

\# MCP no API Catalog (Developer Preview; não necessário para o MVP)

sf agent mcp \--help

A referência oficial lista comandos para agent spec, authoring bundle, preview, publish, testes e Agentforce Data Library. Também lista \`agent mcp\` como Developer Preview. \[SF3\]

# **14\. MVP e demo**

## **O que precisa estar funcionando de verdade**

| Prioridade | Entrega | Como demonstrar |
| :---- | :---- | :---- |
| MUST | Landing/page de curso com contexto de campanha \+ widget de pré-venda. | Abrir por URL/UTM diferente e mostrar que o agente já conhece curso/campanha/página. |
| MUST | Agente Pré no Agentforce. | Conversa curta: objetivo → orientação → próximo passo; sem interrogatório. |
| MUST | Student Entry Context persistido/simulado. | Mostrar os campos capturados e o resumo que passa ao pós. |
| MUST | Evento de matrícula/RA e handoff. | Clique/ação que muda o lead para aluno e inicia onboarding. |
| MUST | Agente Pós com pelo menos 3 cenários demonstráveis. | Antecipado, regular/just-in-time e tardio; migração pode ser mock se definição não estiver fechada. |
| MUST | WhatsApp proativo simulado ou canal equivalente. | Mostrar mensagem contextual e continuidade com o pré. |
| MUST | Escalonamento para polo/humano. | Criar tarefa/caso com resumo e ação solicitada; mostrar retorno fechando ciclo. |
| MUST | Métricas da jornada. | Painel simples: marcos, status, intervenção, handoff e conclusão. |
| SHOULD | Tela/console do polo. | Lista somente das exceções atribuídas ao polo, com contexto mínimo. |
| SHOULD | Agentforce DX \+ Git/Kiro no bastidor. | Se perguntarem implementação, mostrar projeto versionado e agentes testáveis. |
| LATER | Integração real completa com Studeo/WhatsApp em escala. | Arquitetura e mock; não comprometer demo com dependências externas. |

## **Roteiro de demo — 4 a 6 minutos de produto**

**1\.** CENÁRIO: candidato chega por anúncio/landing de um curso. Mostrar UTM/contexto já capturado.

**2\.** PRÉ: ele pergunta sobre carreira/ementa. O agente usa a página atual, faz uma pergunta curta sobre objetivo e explica fit/metodologia. O aluno decide avançar.

**3\.** HANDOFF: matrícula/RA é simulada. Mostrar o Student Entry Context (“quero X”, “consigo estudar Y”, “dúvida Z”) sendo carregado no novo estágio.

**4\.** PÓS: selecionar um cenário de timing. O agente não pergunta tudo de novo; usa a memória e apresenta somente o próximo passo.

**5\.** EVENTO: simular “não realizou primeiro acesso” ou “entrou atrasado”. O agente executa orientação contextual, não um score de risco.

**6\.** ESCALONAMENTO: criar um caso que exige polo/humano. Mostrar tarefa com resumo, SLA/ação e retorno.

**7\.** FECHAMENTO: dashboard mostra marcos concluídos e explicar como o piloto mediria ativação e, depois, evasão precoce.

## **O “antes e depois” visual do pitch**

| Hoje — jornada fragmentada | Com a solução — jornada de ingresso |
| :---- | :---- |
| Campanha sabe o que prometeu, mas o atendimento pode começar do zero. | Origem de marketing vira contexto do agente. |
| Venda otimiza conversão; alinhamento de expectativa pode variar. | Venda educacional combina conversão \+ entendimento \+ expectativa realista. |
| Após matrícula, informação está disponível em diferentes lugares e depende de busca do aluno. | Onboarding é proativo e orienta o próximo passo no canal certo. |
| Contexto comercial pode não acompanhar o estudante. | Student Entry Context atravessa o RA e personaliza o pós. |
| Todos os ingressantes podem receber comunicação parecida. | Fluxo muda conforme matrícula antecipada, regular, tardia ou migração. |
| Polo/humano pode receber demanda sem triagem/contexto. | Digital resolve o comum; polo/humano recebe exceção já mastigada. |
| Mede-se envio/contato; impacto pode ficar difuso. | Cada ação é ligada a um marco de ativação e resultado. |

# **15\. Encaixe nos critérios do Hackathon**

| Critério | Como a solução responde |
| :---- | :---- |
| Permanência, não só retenção | Atua antes e durante a entrada, buscando condições de sucesso, não apenas impedir cancelamento. |
| Ação preventiva | Venda educacional e onboarding são aplicáveis antes de qualquer sinal consolidado de evasão. |
| Ação concreta | A solução executa mensagens, guia próximos passos, cria tarefas e mede conclusão. |
| Escalabilidade | Automação digital para massa; polo/humano apenas quando o problema exige. |
| Personalização | Contexto de aquisição \+ declaração do aluno \+ cenário de ingresso \+ eventos reais. |
| Mensuração | Activation Rate, tempo até marcos, handoffs e, posteriormente, permanência 30/60/90. |
| Segurança/LGPD | Minimização de dados, guardrails, menor privilégio, separação entre fato/inferência, governança de memória. |
| Viabilidade | UniCesumar \+ polos selecionados \+ canais centralizados \+ Agentforce/Salesforce já no ecossistema do desafio. |

O desafio oficial enfatiza que diagnóstico já existe, que o foco deve ser preventivo/preditivo em vez de reativo, e que a solução precisa ser concreta, escalável para uma operação de mais de 1 milhão de alunos e segura/LGPD. \[D1\]

# **16\. Plano de execução do time**

Como os nomes/quantidade exata de responsáveis não foram informados neste documento, a divisão abaixo é por frente. Preencher “Owner” imediatamente e evitar duas pessoas trabalhando no mesmo entregável sem necessidade.

| Frente | Owner | Entrega objetiva | Seções Correspondentes |  |
| :---- | :---- | :---- | :---- | :---- |
| 1\. Produto / escopo | **MADRINHA YAS** | Manter este documento como fonte de verdade; resolver dúvidas; controlar backlog e consistência entre demo/pitch. |  |  |
| 2\. Pesquisa \+ métricas | Sobrinho | Evidências externas; números internos do BI; definição de marcos/Activation Rate; dados para storytelling e impacto. | **17, 18** |  |
| 3\. Pré-venda / web | Mattos | Página/landing de demo \+ UTM/campanha \+ widget \+ fluxo visual de conversão. |  |  |
| 4\. Pós-venda / WhatsApp | Mattos | Simulação de mensagem proativa \+ 3/4 cenários \+ lógica de canal/handoff. |  |  |
| 5\. Agentforce — Pré | Cris | Agent spec/Agent Script, KB, ações, guardrails, testes e integração com web. | **10, 11, 12, 13, 14** |  |
| 6\. Agentforce — Pós | Vic | Agent spec/Agent Script, contexto de ingresso, regras de jornada, ações e testes. |  |  |
| 7\. Salesforce / dados / MCP | Geral | Org, objetos/campos, Student Entry Context, Flow/ações, Kiro+MCP, Git/retrieve/deploy/test. |  |  |
| 8\. Apresentação | Quem conseguir |  |  |  |
| 9\. Pitch / demo | Sobrinho | Storyline, slides, roteiro, tempos, vídeo/backup, ensaio e Q\&A. |  |  |

## **Checklist de convergência — antes de cada frente começar**

**\[ \]** Todos usam “Sistema/Jornada de Ingresso”, não “chatbot de IA”, como nome da solução.

**\[ \]** Pré-venda \= conversão \+ educação \+ expectativa; não é entrevista longa.

**\[ \]** Pós-venda \= ativação; não é modelo preditivo.

**\[ \]** UniCesumar é o recorte; não construir base dupla para Uniasselvi.

**\[ \]** Matrícula/RA é o handoff lógico entre agentes.

**\[ \]** Fluxos usam tempo/eventos reais e Student Entry Context.

**\[ \]** WhatsApp em escala é canal centralizado; não depender do polo enviar mensagens.

**\[ \]** Polo/humano entram por exceção e precisam receber contexto \+ ação solicitada.

**\[ \]** Métrica principal mede marcos de ativação; evasão é resultado posterior.

**\[ \]** Qualquer número não confirmado fica rotulado como hipótese/exemplo.

## **Checklist técnico — Agentforce/Kiro**

**\[ \]** \`sf \--version\` funcionando em todas as máquinas que vão operar Salesforce.

**\[ \]** Org autenticada com alias específico.

**\[ \]** Repositório DX sincronizado e branch strategy mínima definida.

**\[ \]** \`.kiro/settings/mcp.json\` configurado com org específica e toolsets mínimos.

**\[ \]** Dois agent specs separados.

**\[ \]** Duas bases/instruções claramente separadas, com contexto compartilhado somente via campos definidos.

**\[ \]** Casos de teste positivos, ambíguos e de guardrail criados.

**\[ \]** Preview dos agentes funcionando.

**\[ \]** Fallback de demo preparado caso integração externa caia.

# **17\. Pesquisa que ainda vale fazer — sem deixar o time viajar**

| Pergunta | Fonte/ação | Entrega |
| :---- | :---- | :---- |
| O que define “aluno de sucesso” no EAD? | Revisões sistemáticas \+ indicadores internos UniCesumar. | 5–7 fatores traduzidos em marcos de onboarding, não lista acadêmica infinita. |
| Quais marcos iniciais realmente se correlacionam com permanência na UniCesumar? | BI/coorte de ingressantes \+ base do hackathon. | Tabela por timing: acesso, ambientação, primeira atividade, financeiro e outros sinais disponíveis. |
| Quanto pesa escolha/expectativa? | Motivos de troca/cancelamento \+ estudo de mismatch \+ entrevistas/qualitativo interno. | Tese defendível com limite de evidência explícito. |
| Como instituições online fazem onboarding proativo? | Benchmark internacional de universidades online / student success. | 5 padrões replicáveis, canal, timing e métrica. |
| Quais réguas comerciais já existem? | Perguntas ao time de mercado / material disponível. | Mapa para o agente complementar e não competir. |
| Quais polos podem pilotar? | Dados de volume \+ estrutura \+ Salesforce/SLA. | Shortlist com critério, não número arbitrário. |

# **18\. Pontos abertos que precisam de confirmação**

| NÃO BLOQUEIAM A CONSTRUÇÃO Podemos desenvolver o MVP com hipóteses explícitas, mas estes itens não devem virar “verdades” no pitch até confirmação. |
| :---- |

**\[ \]** “Migração”: significa transferência entre curso, marca, modalidade, polo, currículo ou outra situação? Isso altera totalmente o fluxo B4.

**\[ \]** Qual o critério exato para “antecipado”, “regular” e “tardio”? Definir por dias entre matrícula e início.

**\[ \]** Qual é o marco final do onboarding: primeiro acesso, primeira atividade, primeira prova, fim do primeiro módulo ou combinação?

**\[ \]** O agente de pré-venda entra em quais etapas do funil e com quais ofertas/regras comerciais já ativas?

**\[ \]** Quais canais o org de hackathon realmente permite disparar/representar?

**\[ \]** Quais campos/eventos de Studeo/academic estão acessíveis no Salesforce entregue?

**\[ \]** O piloto será “30 principais polos”, “top 30%” ou outro corte por capacidade/volume?

**\[ \]** Quais ações o polo pode executar dentro de Salesforce e quais exigem sede?

**\[ \]** O Student Entry Context pode persistir no CRM/Data Cloud disponível e qual política de retenção será adotada?

**\[ \]** Qual baseline interno usaremos para dizer que um aluno está “ativado”?

# **19\. Backlog de oportunidades — registrar sem colocar no MVP**

* Orientação vocacional/carreira mais profunda após matrícula para quem pulou o pré.  
* Comparador inteligente de cursos baseado em objetivos declarados.  
* Comunidade/peer mentoring institucional ou conexão com veteranos.  
* Catálogo conversacional de serviços e benefícios do Studeo.  
* “Delta onboarding” para transferência/migração.  
* Plano de estudo inicial personalizado por disponibilidade declarada.  
* Aprendizado de próxima melhor ação a partir de resultados reais do piloto.  
* Testes A/B de timing, conteúdo e canal.  
* Expansão para Uniasselvi com base de conhecimento e regras próprias.  
* Hosted MCP/integrações externas adicionais quando houver caso real de runtime.  
* Escalonamento inteligente para humano por complexidade/urgência após instrumentação suficiente.  
* Painel para polo com carteira apenas de exceções e métricas de conclusão.  
* Feedback loop para melhorar réguas comerciais com os motivos observados no onboarding.

# **20\. Formulações prontas para o pitch**

## **Problema**

|  A Vitru já sabe identificar muitos sinais de evasão. Nós escolhemos agir antes de esses sinais se consolidarem: na qualidade da entrada e nos primeiros passos do aluno. |
| :---- |

## **Solução**

|  Criamos uma Jornada de Ingresso UniCesumar: uma venda educacional que entende o motivo da escolha e um onboarding proativo que transforma esse contexto em próximos passos até o aluno estar ativado. |
| :---- |

## **Diferencial**

|  O contexto não morre na matrícula. O que o candidato disse que queria vira insumo para orientar o aluno quando ele precisa agir. |
| :---- |

## **Escala**

|  A automação resolve o comum. O polo e o humano entram apenas quando a situação exige contexto local, autoridade ou cuidado humano. |
| :---- |

## **Tecnologia**

|  Agentforce é o motor. Salesforce é a camada de contexto e ação. O produto é o sistema de ingresso. |
| :---- |

## **Validação**

|  Não prometemos um percentual mágico de redução de evasão. Medimos primeiro se mais ingressantes acessam, se ambientam, realizam o primeiro compromisso e sabem como avançar; depois medimos o efeito em permanência. |
| :---- |

# **Referências e rastreabilidade**

As referências abaixo separam o que veio da reunião/material oficial, o que veio de literatura externa e o que veio de documentação técnica atual. Números exemplificativos falados em reunião não devem ser tratados como métricas oficiais sem validação.

## **Materiais Vitru / reunião**

**\[M1\]** Reunião com diretores/mentores — discussão sobre jornada de ingresso, escopo UniCesumar, definição de início/fim e indicadores de sucesso. Transcrição fornecida pelo time, 15/08/2026.

**\[M2\]** Reunião — relato de aluno UniCesumar sobre onboarding passivo dentro do Studeo e falta de proatividade externa; usar como evidência qualitativa, não estatística.

**\[M3\]** Reunião — diferenciação entre desalinhamento com o curso e matrícula/intenção que não se transforma em ação.

**\[M4\]** Reunião — heterogeneidade dos polos e exemplo de adoção por parcela de polos estruturados.

**\[M5\]** Reunião — alternativa de orientação de carreira pós-matrícula, D+1/primeira semana e longa janela da safra outubro→fevereiro.

**\[M6\]** Reunião — Salesforce/licenciamento considerado viável; WhatsApp deveria ser centralizado; segmentação de canais e handoff para polo/humano.

**\[D1\]** Abertura/descrição do desafio Vitru: permanência \> retenção; diagnóstico preditivo já existe; foco em ações preventivas/preditivas, escala e LGPD.

## **Literatura externa**

**\[E1\]** Rahmani, A. M.; Groot, W.; Rahmani, H. (2024). Dropout in online higher education: a systematic literature review. International Journal of Educational Technology in Higher Education, 21, 19\. [https://link.springer.com/article/10.1186/s41239-024-00450-9](https://link.springer.com/article/10.1186/s41239-024-00450-9)

**\[E2\]** What Factors Contribute to Effective Online Higher Education? A Meta-Review (2024). Technology, Knowledge and Learning. [https://link.springer.com/article/10.1007/s10758-024-09750-5](https://link.springer.com/article/10.1007/s10758-024-09750-5)

**\[E3\]** Fouarge, D.; Heß, P. (2023). Preference-choice mismatch and university dropout. Labour Economics, 83, 102405\. [https://doi.org/10.1016/j.labeco.2023.102405](https://doi.org/10.1016/j.labeco.2023.102405)

## **Documentação técnica atual**

**\[SF1\]** Salesforce — Agentforce DX Developer Guide [https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx.html](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx.html)

**\[SF2\]** Salesforce — Author an Agent with Agentforce DX / Agent Script workflow [https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-nga-author-agent.html](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-nga-author-agent.html)

**\[SF3\]** Salesforce CLI — agent commands reference [https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli\_reference\_agent.html](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_agent.html)

**\[SF4\]** Salesforce DX MCP Server — official salesforcecli/mcp project and DX MCP documentation [https://github.com/salesforcecli/mcp](https://github.com/salesforcecli/mcp)

**\[SF5\]** Salesforce CLI — official installer/download page [https://developer.salesforce.com/tools/salesforcecli/](https://developer.salesforce.com/tools/salesforcecli/)

**\[K1\]** Kiro — MCP configuration; workspace file \`.kiro/settings/mcp.json\` [https://kiro.dev/docs/mcp/configuration/](https://kiro.dev/docs/mcp/configuration/)

**\[K2\]** Kiro — MCP security best practices [https://kiro.dev/docs/mcp/security/](https://kiro.dev/docs/mcp/security/)

**FIM · manter este arquivo como fonte de verdade de produto até a definição final do MVP**