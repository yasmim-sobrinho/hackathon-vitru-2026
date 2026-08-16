# Regras de desenvolvimento

## Velocidade de hackathon

Não estamos construindo uma universidade, um CRM, um WhatsApp nem outro modelo
de evasão. Estamos construindo uma **demonstração convincente**.

Arquitetura limpa o suficiente para integrar Salesforce, simples o suficiente
para ser construída e demonstrada rápido.

## Evitar overengineering

- Não criar abstração antes do segundo caso de uso real.
- Não adicionar biblioteca sem necessidade concreta.
- Não criar backend sem necessidade.
- Não implementar integração real quando um adapter resolve.
- Não "embelezar" antes de a arquitetura estar no lugar.
- Resolver o problema pedido, sem features extras.

## TypeScript

- `strict: true`. Já está configurado, não relaxar.
- Sem `any`. Se precisar de escape, usar `unknown` e estreitar.
- Tipos de domínio ficam em `src/types/`, não espalhados por componentes.
- Comentar o **porquê** de decisões de domínio, não o que o código faz.

## Componentes

- Pequenos e com uma responsabilidade.
- Dados mock **separados da UI** — sempre em `src/mocks/`.
- Nada de fetch ou lógica de agente dentro de componente: usar `services/`.

## Contratos para integrações

Toda integração externa entra por uma interface em `src/services/`. Sem exceção.

## Não hardcodear regras institucionais

Prazo, preço, bolsa, regra acadêmica, política de troca, calendário e nome de
benefício **não são inventados**. Se um dado não vem de documento ou fonte
oficial, o valor é `UNKNOWN` e vira TODO com pergunta registrada em
`docs/decisions/open-questions.md`.

Isso vale para código, mock data, copy de UI e texto de agente.

## Hipótese não vira fato

Números falados em reunião e estimativas do time ficam rotulados como hipótese.
Não entram em código nem em pitch como dado da Vitru.

## Hierarquia de confiança das fontes

1. Decisão explícita mais recente da equipe
2. Fala direta de diretor/mentor Vitru
3. Documentação oficial Vitru
4. Dados internos Vitru
5. Documentação oficial Salesforce
6. Pesquisa acadêmica
7. Pesquisa de mercado
8. Hipótese interna da equipe
9. Inferência do agente

## Demo funciona offline

A apresentação não pode depender de rede, org Salesforce ou serviço externo.
`MockAgentAdapter` é o default e precisa continuar funcionando.

## Acessibilidade básica

- HTML semântico, `label` em todo input.
- Foco visível (já no CSS base).
- `aria-live` em regiões que atualizam sozinhas, como a lista de mensagens.
- Contraste suficiente.

Mobile-first onde fizer sentido — o simulador de WhatsApp especialmente.

## Segredos

Nunca no repositório. Nem em `mcp.json`, README, `.md`, `.ts` ou `.json`.

Segredos vão em `.env.local` (gitignored). `.env.example` leva apenas os nomes
das variáveis.

Não habilitar auto-approve para ferramentas MCP destrutivas ou de deploy.

## Git

- Branch de trabalho: `hackathon/jornada-ingresso`.
- Fontes originais em `docs/source/` **não são alteradas**.
- Trabalho anterior fica em `legacy/`, preservado.
- Tag de backup: `backup/motor-intervencao-pre-kickoff`.

## Antes de dizer que terminou

Rodar `npm run build`. Ele inclui `tsc -b`, então erro de tipo derruba o build.
