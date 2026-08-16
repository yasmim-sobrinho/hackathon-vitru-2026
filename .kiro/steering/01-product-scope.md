# Escopo do produto

## O que fazemos

- Recorte único: **UniCesumar**. Não generalizar para Uniasselvi.
- Venda educacional consultiva antes da matrícula.
- Onboarding proativo e contextual depois do RA.
- Continuidade de contexto entre os dois momentos via `StudentEntryContext`.
- Fluxos que mudam conforme o **cenário temporal de ingresso**.
- Escalonamento em camadas: digital resolve o comum, polo e humano por exceção.

## O que NÃO fazemos

- Não é um novo modelo preditivo de evasão.
- Não é chatbot genérico de FAQ.
- Não é teste vocacional clínico ou psicométrico.
- Não é venda socrática que aumenta dúvida e atrito.
- Não substitui Studeo, CRM, Data Cloud, financeiro ou sistemas acadêmicos.
- Não é central humana de CS acompanhando todos os alunos.

## O agente de pré-venda especificamente NÃO é

Teste vocacional obrigatório, psicólogo, interrogatório, barreira antes da
matrícula, ou agente que tenta impedir a compra. A orientação de carreira é
**sugestiva e opcional** — se não foi feita antes, pode ser oferecida depois da
matrícula.

A compra nunca fica escondida atrás de perguntas.

## Papel do modelo preditivo

O fluxo principal é **evento → estado → ação**:

```text
RA criado → primeiro acesso não realizado → orientação de primeiro acesso
```

E não:

```text
score = 76% → abordar aluno
```

Dados e estudos de evasão existentes servem para escolher comportamentos
relevantes, desenhar os agentes, priorizar intervenções e fundamentar o pitch.
Nunca como gate do onboarding.

## Cenários de ingresso

A régua não é `D+1 / D+3 / D+7`. É a relação entre data da matrícula, data de
início das aulas e estágio acadêmico.

| Cenário | Condição | Foco |
| --- | --- | --- |
| `early` | Matrícula meses antes | Manter propósito, preparar, evitar esfriamento |
| `regular` | Próxima ao início | Ativação padrão |
| `last_minute` | Pouco tempo até as aulas | Só o essencial |
| `late` | Ciclo já começou | Plano de recuperação priorizado |
| `migration` | UNKNOWN | Placeholder — definição não validada |

## Não implementar no MVP

Autenticação real de aluno, WhatsApp Business API, Data Cloud completo, backend
de produção, modelo preditivo, BI, analytics real, integração LMS/financeira
real, sistema completo de polo, matrícula real, todas as páginas UniCesumar,
todos os cursos, deploy de produção.

Usar stub, mock ou adapter quando necessário.

## Hipóteses que NÃO são fatos

- O recorte de piloto ("30 polos", "top 30%", "40% dos polos") é hipótese do
  time, não regra definida da Vitru.
- Os cortes em dias que separam `early` / `regular` / `late` não estão definidos.
- A definição operacional de "migração" na UniCesumar não foi validada.

Ver `docs/decisions/open-questions.md`.
