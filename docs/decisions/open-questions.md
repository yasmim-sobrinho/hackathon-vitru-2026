# Perguntas abertas e conflitos

Nada aqui bloqueia a construção do MVP. Mas nenhum item daqui pode virar
"verdade" no código ou no pitch antes de confirmação.

Regra: quando um documento novo entra no repositório e contradiz uma decisão
anterior, o conflito é registrado aqui. Não escolher silenciosamente uma versão.

---

## Conflitos registrados

### C-001 — Tese do produto: Motor de Intervenção vs Jornada de Ingresso

**Status:** Resolvido em favor da Jornada de Ingresso (ADR-002, ADR-004).

O `CLAUDE.md` e o `README.md` anteriores (agora em `legacy/`) descreviam um
produto diferente:

- console de priorização para consultores, com score de risco;
- instrução explícita de **não** construir agente conversacional para o aluno;
- foco em intervenção reativa sobre alunos já matriculados e em risco.

Isso contradiz diretamente o alinhamento mestre de 15/08/2026, que define dois
agentes conversacionais e fluxo por evento em vez de score.

**Resolução:** pela hierarquia de confiança, a decisão explícita mais recente da
equipe vence. Os documentos antigos foram arquivados em `legacy/` justamente para
não serem lidos como direção atual.

**Aberto:** parte da análise de dados que sustentava o Motor de Intervenção
(fricções, memória de cálculo) continua válida como pesquisa e está em
`docs/research/`. Vale revisitar quais sinais identificados lá são úteis para
escolher os marcos de ativação.

### C-002 — Preço inventado na página de curso

**Status:** aberto. Precisa de decisão do time.

`apps/web/src/data/courses.ts` traz `monthlyPrice` e `fullPrice` com valores
inventados (ex.: R$ 249,90). O arquivo os rotula honestamente como mock e cita a
regra, mas a regra em `.kiro/steering/03-development-rules.md` é explícita:
preço, bolsa e condição comercial não são inventados — vale para código, mock
data e **copy de UI**.

**Risco concreto:** a página aparece em tela na apresentação. Um print pode ser
lido como oferta da UniCesumar. O agente tem guardrail de nunca afirmar preço,
mas a página estaria contradizendo o agente.

**Opções:**

1. Substituir por "consulte condições" / `UNKNOWN`, sem número.
2. Manter o número com marca d'água visível de dado fictício.
3. Obter a tabela oficial e usar valor real.

Não resolver silenciosamente. Enquanto estiver aberto, evitar dar close no preço
durante a demo.

---

## Definições que faltam

### Q-001 — O que é "migração/transferência" na UniCesumar?

Transferência entre curso, marca, modalidade, polo, currículo, ou outra
situação? Muda completamente o fluxo `migration`.

**Impacto:** o cenário `migration` está no código como placeholder declarado.
Não implementar regra baseada em suposição.

### Q-002 — Quais são os cortes em dias de cada cenário de ingresso?

O que separa `early`, `regular`, `last_minute` e `late`? Precisa vir da
distribuição real matrícula → início das aulas no BI da UniCesumar.

**Impacto:** a classificação de cenário está sem lógica de datas justamente por
isso. Hoje o cenário é atribuído manualmente nas personas de demo.

### Q-003 — Qual é o marco final do onboarding?

Primeiro acesso, primeira atividade, primeira prova, fim do primeiro módulo, ou
combinação? Define quando o aluno sai da jornada intensiva.

### Q-004 — Em quais etapas do funil o agente de pré-venda entra?

E com quais ofertas e regras comerciais já ativas? O agente não pode gerar
contato conflitante com a régua comercial existente.

**Impacto:** risco de atrito adicional na jornada comercial. Precisa de mapa das
réguas atuais antes de definir gatilhos.

### Q-005 — Quais canais o org do hackathon realmente permite disparar?

Push, e-mail, SMS, WhatsApp — o que é demonstrável de verdade e o que precisa ser
simulado?

### Q-006 — Quais campos e eventos do Studeo/acadêmico estão acessíveis?

Primeiro acesso, conclusão de ambientação, primeira atividade, prazos. Sem isso o
fluxo por evento não sai do mock.

### Q-007 — O recorte de piloto é "30 principais polos", "top 30%" ou outro?

**Hoje é hipótese do time.** A reunião citou 40% de polos estruturados como
exemplo, não como dado fechado. Não usar número no pitch sem validação.

### Q-008 — Quais ações o polo pode executar dentro do Salesforce?

E quais exigem sede? Define o que `L3_pole` pode receber como `requestedAction`.

### Q-009 — Onde o StudentEntryContext persiste e com qual retenção?

CRM, Data Cloud, objeto customizado? Qual base legal e qual política de retenção
(LGPD)?

**Impacto:** `ContextGovernance` existe no contrato mas não é preenchido de
verdade. É requisito antes de qualquer piloto real.

### Q-010 — Qual baseline interno define "aluno ativado"?

Necessário para a North Star (Activation Rate) ter denominador honesto.

---

## Pendências técnicas

### T-001 — Nenhuma org Salesforce autorizada

`sf org list` retorna "No Orgs found". Bloqueia MCP, geração de authoring
bundle, inspeção de metadata e mapeamento dos agentes existentes.

**Depende de:** login interativo pelo time.

### T-002 — Quais agentes já existem no org da Vitru?

Antes de qualquer deploy, listar o que existe e confirmar que
`VitruEducationalSales` e `VitruStudentOnboarding` não colidem com ativos da
Vitru. **Não sobrescrever agentes existentes.**

### T-003 — Qual superfície de integração o Agentforce expõe para o frontend?

Agent API, connected app, proxy próprio? Define a implementação do
`AgentforceAdapter` e onde ficará o segredo.

### T-004 — Código-fonte da página UniCesumar

Necessário para construir a Superfície 1. Sem ele, `/site` fica placeholder.

### T-005 — `.kiro/settings/mcp.json` não pôde ser criado pelo agente

Bloqueado por regra de permissão do workspace. Conteúdo está no README, seção
"Salesforce MCP", para aplicação manual.
