# Mock data

Dados fictícios para a demo, fora do bundle do frontend.

**Nada aqui representa aluno real ou número da Vitru.**

## Divisão

```text
mock-data/
├── students/       Personas de demonstração
├── conversations/  Roteiros de conversa
└── events/         Eventos de jornada (RA criado, primeiro acesso, etc.)
```

## Estado atual

Vazio. As personas de demonstração vivem hoje em
`apps/web/src/mocks/demo-scenarios.ts`, porque são consumidas diretamente pela UI
e o frontend não tem backend para carregar arquivo.

Este diretório existe para quando houver necessidade real de:

- fixtures compartilhadas entre frontend e testes de agente Agentforce;
- payloads de exemplo para `sf agent test`;
- volume de dados que não faz sentido no bundle.

Não mover as personas para cá antes dessa necessidade aparecer.

## Regras

- Entre 4 e 6 personas no total. Não precisamos de centenas.
- Nenhuma regra institucional inventada: prazo, preço, bolsa, calendário e
  política acadêmica ficam `UNKNOWN` quando não há fonte oficial.
- Cada persona deve servir a um cenário de ingresso demonstrável.
