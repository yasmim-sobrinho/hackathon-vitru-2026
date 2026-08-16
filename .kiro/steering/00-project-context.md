# Contexto do projeto

Hackathon Vitru 2026. Recorte: **UniCesumar**, graduação EAD.

## Problema

Como aumentar a permanência e o sucesso de alunos da graduação EAD, reduzindo a
evasão. A Vitru já possui modelos preditivos de evasão — o desafio não é
construir outro modelo, é transformar sinais em ações que aumentem permanência.

## O que estamos construindo

Uma **nova Jornada de Ingresso do aluno UniCesumar**. Não é "uma solução de IA".
A IA é infraestrutura para viabilizar personalização, escala e continuidade.

A jornada conecta: Captação → Venda Educacional → Matrícula → Ingresso →
Onboarding → Ativação Inicial.

## Hipótese central

Uma entrada mais consciente, contextualizada, orientada e acompanhada nos
primeiros momentos aumenta a probabilidade de o aluno efetivamente começar sua
jornada acadêmica e criar as condições iniciais para permanecer.

## Dois problemas distintos — não tratar como a mesma causa

**Problema A — escolha/alinhamento.** A pessoa começa e percebe que o curso ou a
profissão não corresponde ao que imaginava.

**Problema B — intenção sem ativação.** A pessoa faz uma boa escolha, se
matricula, e ainda assim não acessa, procrastina, não sabe o próximo passo ou
perde o propósito que gerou a matrícula.

## Dois agentes, uma jornada

| Agente | Quando atua | Responsabilidade |
| --- | --- | --- |
| `VitruEducationalSales` | Antes da matrícula | Venda educacional consultiva, alinhamento de expectativa, captura de contexto, conversão |
| `VitruStudentOnboarding` | Depois do RA/matrícula | Identificar cenário de ingresso, orientar, ativar, acompanhar primeiros passos, escalar quando necessário |

O ponto de handoff é a geração do RA. O `StudentEntryContext` é o que atravessa
esse handoff.

## Diferencial em uma frase

O contexto não morre na matrícula. O que o candidato disse que queria vira
insumo para orientar o aluno quando ele precisa agir.

## Fonte de verdade

`docs/source/time/alinhamento-mestre-jornada-ingresso.md`

Toda decisão de produto sai de lá ou de `docs/decisions/decision-log.md`.
