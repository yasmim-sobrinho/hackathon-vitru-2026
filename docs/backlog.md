# Backlog

`P0` fundação · `P1` necessário para demonstrar a tese · `P2` não necessário

---

## P0 — Kickoff

- [x] auditar repositório → `docs/repository-audit.md`
- [x] preservar histórico → tag `backup/motor-intervencao-pre-kickoff`
- [x] criar branch → `hackathon/jornada-ingresso`
- [x] reorganizar estrutura → `docs/source`, `docs/research`, `legacy/`
- [x] garantir aplicação executável → `npm run build` passa
- [x] README
- [x] docs base
- [x] Kiro steering (5 arquivos)
- [x] Salesforce DX → `sfdx-project.json`, `.forceignore`, `aiAuthoringBundles/`
- [x] Salesforce CLI instalado → 2.147.7
- [ ] **Salesforce MCP** → `.kiro/settings/mcp.json` bloqueado por permissão do
      workspace. Conteúdo no README, aplicar manualmente.
- [ ] **verificar conexão com org** → nenhuma org autorizada. Depende de login.
- [x] contratos básicos → `StudentEntryContext`, `ConversationContext`,
      `AgentResponse`, `EscalationRequest`, `EnrollmentScenario`
- [x] `MockAgentAdapter`
- [x] `AgentforceAdapter` como stub
- [x] specs iniciais dos dois agentes

---

## P1 — Site (Superfície 1)

- [x] identidade visual UniCesumar → tokens `--color-uni-*` em `src/index.css`,
      extraídos do CSS público do tema
- [x] reproduzir página de curso → `features/site/CoursePage.tsx`
- [x] reproduzir visualização de ementa
- [x] header e footer do site
- [x] catálogo de cursos mock → `data/courses.ts`
- [x] captura de UTMs → `lib/utm.ts`
- [x] mapear campanha → promessa do anúncio → `KNOWN_CAMPAIGNS`
- [ ] widget de agente (usar `ConversationPanel` + `useConversation`)
- [ ] captura de contexto da página → `ConversationContext.page`
- [ ] CTA de matrícula sempre acessível
- [ ] fluxo de matrícula simulada → gera RA e dispara handoff
- [ ] **decidir se preço aparece na tela** → hoje `data/courses.ts` traz valores
      inventados, rotulados como mock. Preço é item que a regra manda deixar
      `UNKNOWN`. Ver risco em `docs/decisions/open-questions.md` (C-002)

---

## P1 — WhatsApp Simulator (Superfície 2)

- [ ] shell visual
- [ ] lista de conversas
- [ ] tela de conversa
- [ ] bolhas de mensagem
- [ ] typing indicator
- [x] quick replies (no `ConversationPanel`)
- [x] cards (no `ConversationPanel`)
- [ ] timestamps
- [ ] status de entrega
- [ ] troca de cenários de ingresso
- [x] `MockAgentAdapter` conectado
- [ ] integração futura `AgentforceAdapter`
- [ ] mensagem proativa disparada por evento

---

## P1 — Salesforce / Agentforce (Superfície 3)

- [ ] **autenticar org** → `sf org login web --alias vitru-hackathon --set-default`
- [ ] validar MCP após auth
- [ ] inspecionar metadata disponível
- [ ] **mapear agentes existentes da Vitru** antes de qualquer deploy
- [ ] confirmar ausência de colisão de nomes
- [ ] gerar authoring bundle do Agent 1
- [ ] gerar authoring bundle do Agent 2
- [ ] escrever Agent Script dos dois
- [ ] configurar guardrails
- [ ] criar actions necessárias
- [ ] mapear objetos/campos para `StudentEntryContext`
- [ ] criar testes de conversa (positivo, ambíguo, guardrail)
- [ ] `sf agent preview` funcionando
- [ ] implementar `AgentforceAdapter`

---

## P1 — Demo

- [x] seletor de cenários
- [x] `StudentEntryContext` visível
- [x] escalonamento visível
- [ ] candidato vindo de anúncio (fluxo completo no site)
- [ ] conversa no site com widget real
- [ ] matrícula simulada
- [ ] transição candidato → aluno
- [ ] contato proativo no WhatsApp
- [ ] onboarding por cenário (`early`, `regular`, `late`)
- [ ] escalonamento com retorno fechando o ciclo
- [ ] painel simples de marcos de ativação
- [ ] final positivo
- [ ] ensaio cronometrado
- [ ] gravação de backup da demo

---

## P2 — Fora do necessário para a tese

- [ ] ESLint + Prettier no frontend
- [ ] testes automatizados do frontend
- [ ] console do polo com carteira de exceções
- [ ] orientação de carreira aprofundada pós-matrícula
- [ ] comparador de cursos por objetivo declarado
- [ ] plano de estudo por disponibilidade declarada
- [ ] "delta onboarding" para migração
- [ ] testes A/B de timing, conteúdo e canal
- [ ] expansão para Uniasselvi
- [ ] integração real com Studeo
- [ ] WhatsApp Business API
- [ ] Data Cloud
- [ ] deploy de produção

---

## Bloqueios ativos

| # | Bloqueio | Depende de | Impede |
| --- | --- | --- | --- |
| 1 | Nenhuma org Salesforce autorizada | Login interativo do time | Todo o P1 Salesforce, validação do MCP |
| 2 | `.kiro/settings/mcp.json` | Criação manual (permissão) | Uso do MCP no Kiro |
| 3 | Decisão sobre preço na tela | Time | Fechamento da página de curso |
| 4 | Cortes em dias dos cenários | BI da UniCesumar | Classificação automática de cenário |
| 5 | Definição de "migração" | Validação com a Vitru | Fluxo `migration` |
