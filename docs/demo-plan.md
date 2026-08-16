# Plano de demo

4 a 6 minutos de produto. A tecnologia entra depois da história do aluno.

## Roteiro

### 1. Origem — o contexto que hoje se perde

Abrir o site por uma URL de campanha:

```text
/site?utm_source=meta&utm_medium=paid_social&utm_campaign=administracao-empreender&curso=Administracao
```

Mostrar que a origem foi capturada. A promessa do anúncio virou contexto do
agente em vez de morrer na landing page.

### 2. Pré-venda — venda educacional, não interrogatório

O candidato pergunta sobre carreira ou está lendo a ementa. O agente:

- reconhece o contexto: "Vi que você está olhando a ementa de Administração";
- faz **uma** pergunta curta sobre objetivo;
- explica como o curso se conecta a isso, com fato, sem promessa de emprego.

Ponto a narrar: o agente não pergunta qual curso a pessoa quer, porque a página
já disse.

### 3. Conversão — a compra nunca fica escondida

O candidato diz que decidiu. O agente leva direto ao próximo passo comercial.
Nenhuma pergunta adicional, nenhuma objeção nova.

### 4. Handoff — o momento que vende a tese

A matrícula é simulada e o RA é gerado. Mostrar o `StudentEntryContext` sendo
carregado no novo estágio: "quero mudar de carreira", "consigo estudar à noite",
"tenho dúvida sobre X".

**Se só uma coisa funcionar na demo, é esta.**

### 5. Onboarding — o agente não pergunta tudo de novo

Selecionar um cenário de timing. O agente abre reancorando o propósito declarado
antes da matrícula e apresenta **só o próximo passo**.

Mostrar dois cenários diferentes com o mesmo motor:

- `early` — cadência baixa, preservar propósito, preparar;
- `late` — reconhecer que o ciclo começou, plano de recuperação priorizado.

Ponto a narrar: a régua não é D+1/D+3/D+7. É a relação entre matrícula e início
das aulas.

### 6. Evento — ação por estado, não por score

Simular "primeiro acesso não realizado". O agente age:

```text
RA criado → primeiro acesso não realizado → orientação de primeiro acesso
```

E não:

```text
score = 76% → abordar aluno
```

Ponto a narrar: a Vitru já tem modelo preditivo. O que faltava era a ação.

### 7. Escalonamento — o polo recebe contexto, não demanda crua

O aluno relata um impedimento que o agente não pode resolver. Mostrar o
`EscalationRequest`: nível, resumo do problema, ação solicitada e tentativas já
feitas. Depois, o retorno fechando o ciclo.

Ponto a narrar: "fale com o polo" não é resposta. Digital resolve o comum; polo e
humano recebem exceção já triada.

### 8. Fechamento — como o piloto mediria

Marcos de ativação concluídos. Explicar a métrica:

> Percentual de ingressantes que concluem os marcos essenciais de entrada dentro
> da janela adequada ao seu cenário de ingresso.

E ser honesto: medimos ativação primeiro, permanência depois. Sem prometer
percentual de redução de evasão.

---

## Antes e depois

| Hoje | Com a Jornada de Ingresso |
| --- | --- |
| A campanha sabe o que prometeu; o atendimento começa do zero | Origem de marketing vira contexto do agente |
| Venda otimiza conversão; alinhamento de expectativa varia | Conversão + entendimento + expectativa realista |
| Após a matrícula, a informação existe mas depende de busca | Onboarding proativo com o próximo passo no canal certo |
| O contexto comercial não acompanha o estudante | `StudentEntryContext` atravessa o RA |
| Todos os ingressantes recebem comunicação parecida | Fluxo muda por cenário de ingresso |
| Polo recebe demanda sem triagem | Polo recebe exceção com contexto e ação pedida |
| Mede-se envio e contato | Cada ação liga a um marco de ativação |

---

## Regras da apresentação

- Roda **offline**. `MockAgentAdapter` é o default (ADR-005).
- Dados de persona são fictícios e devem ser apresentados como tais.
- Nenhum número da Vitru sem validação. O recorte de piloto é hipótese.
- Nenhuma promessa de emprego, salário ou percentual de redução de evasão.
- Não dizer "chatbot de IA". Dizer "Jornada de Ingresso".

## Fallback

Se a integração com Salesforce não estiver pronta, a demo roda inteira no mock.
Gravar um vídeo de backup antes do dia.

## O que ainda falta construir

Ver `docs/backlog.md`. Os bloqueios ativos são: código-fonte da página
UniCesumar e org Salesforce autorizada.
