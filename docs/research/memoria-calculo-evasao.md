# Memória de Cálculo: Como chegamos aos 52.345 alunos?

A base analisada possui **457.427 registros de alunos** e contém três campos fundamentais para o nosso modelo:

1. `FL_EVADIU` (1 = aluno evadiu formalmente, 0 = não evadiu formalmente)
2. `FL_INTENCIONOU_CANCELAMENTO` (1 = manifestou intenção formal, 0 = não manifestou)
3. `Y_PRED` (1 = modelo preditivo da Vitru classifica como risco, 0 = sem risco)

---

## 1. Regras de Classificação

Segmentamos a base aplicando as seguintes lógicas:

### Ativo sem risco
- `FL_EVADIU` = 0
- `FL_INTENCIONOU_CANCELAMENTO` = 0
- `Y_PRED` = 0
- **Resultado:** 359.710 alunos (78,64%)

### Intenção formal de cancelamento
- `FL_INTENCIONOU_CANCELAMENTO` = 1
- `FL_EVADIU` = 0
- **Resultado:** 40.328 alunos (8,82%)

### Evasão formal
- `FL_EVADIU` = 1
- **Resultado:** 5.044 alunos (1,10%)

---

## 2. A Descoberta: Evasão Silenciosa Potencial

Aqui está o ponto principal da nossa tese e origem do público-alvo do nosso Motor de Intervenção.

**Regra:**
- `Y_PRED` = 1
- `FL_EVADIU` = 0
- `FL_INTENCIONOU_CANCELAMENTO` = 0

**Tradução Prática:**
1. O modelo da Vitru já aponta risco (`Y_PRED = 1`).
2. Mas o aluno ainda não evadiu.
3. E ainda não pediu cancelamento.

**Conclusão:** Temos um aluno aparentemente ativo, mas que já apresenta os mesmos padrões que antecedem o abandono, sem ter formalizado a saída.

**Resultado:** **52.345 alunos (11,44% da base)**

---

## 3. Quais métricas sustentam essa classificação?

O grupo não foi criado apenas porque o campo `Y_PRED` retornou 1. O próprio modelo da Vitru considera dezenas de sinais comportamentais. Entre os principais detratores encontrados para o grupo silencioso estão:

- **Acadêmicos:** % aprovação em disciplinas, % andamento do curso, reprovações
- **Engajamento:** acesso ao AVA, acesso ao AVA em período pedagógico, total de dias de acesso
- **Aprendizagem:** % entrega de atividades, participação em aulas
- **Financeiro:** % engajamento financeiro

### Os Maiores Detratores Isolados
1. **% Aprovação em disciplinas:** 23.673 casos
2. **% Entrega de atividades:** 19.833 casos
3. **% Andamento do curso:** 3.957 casos

---

## 4. Padrões Recorrentes Encontrados (Personas)

A análise cruzada encontrou padrões que deram origem aos nossos testes de intervenção:

* **A Dor do EAD Puro (9.860 alunos)**  
  Aprovação baixa + Entrega baixa + Acesso ao AVA baixo
* **Efeito Bola de Neve (8.472 alunos)**  
  Entrega baixa + Engajamento financeiro baixo + Baixo acesso ao portal
* **Atraso Sistêmico (7.184 alunos)**  
  Reprovação + Baixo andamento + Baixa entrega

---

## 5. Como explicar isso para a banca? (Argumento de Pitch)

Esta é uma resposta tecnicamente sólida que evita exagerar ou afirmar algo que os dados não provaram. Se questionado pela banca:

> *"Não estamos afirmando que esses 52.345 alunos vão cancelar. O que estamos demonstrando é que eles já apresentam sinais reconhecidos pelo modelo preditivo da Vitru, mas ainda não formalizaram a saída. É justamente esse grupo que representa a maior oportunidade de intervenção preventiva."*

**Frase curta de impacto para os slides ou fechamento:**
> **"52.345 alunos (11,44% da base) apresentam sinais de evasão previstos pelo modelo, mas ainda não formalizaram cancelamento.** Chamamos esse grupo de *Evasão Silenciosa Potencial*. É a maior oportunidade de intervenção preventiva identificada na análise."
