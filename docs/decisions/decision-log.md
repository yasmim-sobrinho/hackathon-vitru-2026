# Log de decisões

Registro de decisões de arquitetura e produto. Uma decisão só entra aqui quando
foi tomada de fato — hipótese vai para `open-questions.md`.

---

## ADR-001 — Recorte inicial UniCesumar

Status: Accepted · 15/08/2026

**Context**

A Vitru opera UniCesumar e Uniasselvi com modelos acadêmicos, processos e bases
de conhecimento diferentes. A mentoria sugeriu explicitamente escolher uma marca,
porque ampliar o escopo reduziria a qualidade da entrega.

**Decision**

O MVP é UniCesumar. Não construir base dupla nem solução genérica para as duas
marcas.

**Why**

Profundidade de demonstração vale mais que abrangência num hackathon. Cada marca
exigiria base de conhecimento, calendário e regras próprias.

**Consequences**

- Base de conhecimento, personas e fluxos assumem contexto UniCesumar.
- Expansão para Uniasselvi vira item de backlog de oportunidade, não de MVP.
- O pitch precisa dizer que o recorte é deliberado, não limitação.

---

## ADR-002 — O produto é uma Jornada de Ingresso, não uma solução de IA

Status: Accepted · 15/08/2026

**Context**

O desafio pede ações que aumentem permanência. A Vitru já tem modelos
preditivos. Apresentar "mais uma IA" não diferencia e desloca a atenção da
mudança de processo.

**Decision**

A solução é apresentada como uma nova Jornada de Ingresso do aluno UniCesumar. A
IA é infraestrutura de execução, não a proposta de valor.

**Why**

O valor está na continuidade entre venda e vida acadêmica. Agentforce é o motor
que viabiliza personalização em escala, e entra na narrativa depois da história
do aluno.

**Consequences**

- Vocabulário do time: "Sistema/Jornada de Ingresso", nunca "chatbot de IA".
- A demo abre pelo aluno e pelo processo, não pela tecnologia.
- Métricas medem ativação de ingresso, não uso de IA.

---

## ADR-003 — Pré-venda e pós-venda são uma jornada com dois agentes

Status: Accepted · 15/08/2026

**Context**

Tratar como duas experiências desconectadas recria o problema que queremos
resolver. Tratar como um agente único mistura responsabilidades, bases de
conhecimento e guardrails que precisam ser diferentes.

**Decision**

Dois agentes especializados, conectados por contexto:

- `VitruEducationalSales` — antes da matrícula
- `VitruStudentOnboarding` — depois do RA

O handoff é a geração do RA. O `StudentEntryContext` atravessa esse ponto.

**Why**

Objetivos, tom, base de conhecimento, ações permitidas e riscos são distintos.
Um agente de venda não deve executar regra acadêmica; um agente de onboarding não
deve conduzir conversão.

**Consequences**

- Dois authoring bundles separados, testados independentemente.
- Compartilhamento de contexto acontece por campos definidos, não por memória
  compartilhada livre.
- Estrutura técnica modular desde o início.

---

## ADR-004 — Modelo preditivo não é o núcleo do MVP

Status: Accepted · 15/08/2026

**Context**

O desafio da Vitru já parte do pressuposto de que o diagnóstico existe. Construir
outro modelo não responde à pergunta feita.

**Decision**

O fluxo principal é **evento → estado → ação**. Nenhum score de evasão funciona
como gate do onboarding. Dados e estudos existentes servem para escolher
comportamentos relevantes e fundamentar o pitch.

**Why**

Segmentação determinística por datas, status e eventos é auditável, explicável e
não depende de infraestrutura de ML na demo. Também evita a armadilha de
"abordar o aluno porque o score deu 76%".

**Consequences**

- Cenários de ingresso são definidos por datas, não por risco.
- O onboarding atende todo ingressante do recorte, não apenas os "de risco".
- Métricas de ativação vêm primeiro; efeito em evasão é resultado posterior.

---

## ADR-005 — O frontend precisa funcionar em mock mode

Status: Accepted · 15/08/2026

**Context**

A demo do hackathon não pode depender de rede, de org Salesforce autorizada ou de
serviço externo disponível no momento da apresentação.

**Decision**

`MockAgentAdapter` é o default (`VITE_AGENT_MODE=mock`). Se a configuração do
Agentforce estiver incompleta, o app cai no mock com aviso em console, em vez de
quebrar.

**Why**

Fallback de demo é requisito, não conveniência. Também destrava o
desenvolvimento do frontend em paralelo, sem esperar a org.

**Consequences**

- Todo comportamento de agente precisa ter um caminho mock.
- O mock não inventa informação institucional: onde falta fonte oficial, ele
  declara que não sabe.
- A UI mostra qual adapter está ativo, para não haver dúvida na apresentação.

---

## ADR-006 — Salesforce/Agentforce entra por adapter e não contamina a UI

Status: Accepted · 15/08/2026

**Context**

Se componentes chamarem o Agentforce diretamente, trocar de implementação ou
rodar offline exige reescrever a interface.

**Decision**

Toda conversa passa pela interface `AgentAdapter`. Nenhum componente instancia
adapter concreto — a resolução acontece em `resolveAgentAdapter()`.

**Why**

Permite trocar mock por Agentforce sem tocar em UI, e testar as duas superfícies
(site e WhatsApp) com o mesmo contrato.

**Consequences**

- `AgentforceAdapter` é o único ponto de integração a implementar.
- Se um componente precisar de algo que o contrato não oferece, o contrato é
  estendido — não contornado.
- Vazamento do contrato é considerado bug de arquitetura.

---

## ADR-007 — Humano e polo são níveis de escalonamento, não o ponto inicial

Status: Accepted · 15/08/2026

**Context**

A rede de polos é heterogênea e processos no polo são menos controláveis que
processos internos. Colocar humano no início não escala para a operação da Vitru.

**Decision**

Escalonamento em camadas: `L0 self-service → L1 transacional → L2 WhatsApp
central → L3 polo → L4 humano especializado`. A escolha depende de assunto,
criticidade, capacidade do canal e tentativa anterior — nunca de score de evasão
ou "valor do aluno".

**Why**

Automação resolve o comum; polo e humano tratam o que exige contexto local,
autoridade ou cuidado humano. WhatsApp precisa ser centralizado, não dependente
de cada polo enviar mensagem.

**Consequences**

- Nenhum handoff sai sem resumo, dados relevantes e ação solicitada.
- "Fale com o polo" não é resposta final aceitável.
- `PoleCapabilities` existe como abstração para que o roteamento não nasça
  hardcoded.

---

## ADR-008 — Rebuild da arquitetura, preservação do histórico

Status: Accepted · 15/08/2026

**Context**

O repositório continha um protótipo ("Motor de Intervenção") que implementava
uma tese diferente: console reativo para consultores, priorização por score.
Adaptá-lo custaria mais que recomeçar.

**Decision**

Recomeçar arquitetura e implementação. Preservar histórico Git, documentação e
pesquisa. Protótipo anterior arquivado em `legacy/`.

**Why**

A nova arquitetura precisa nascer com a camada de adapter e os contratos de
contexto. Ao mesmo tempo, a pesquisa acumulada é ativo real do time e o histórico
não deve ser destruído.

**Consequences**

- Tag `backup/motor-intervencao-pre-kickoff` marca o estado anterior.
- Branch `hackathon/jornada-ingresso` recebe o rebuild; `main` fica intocada.
- Movimentos feitos com `git mv`, preservando histórico de rename.
- `legacy/` não recebe manutenção e não deve ser importado pelo novo código.
