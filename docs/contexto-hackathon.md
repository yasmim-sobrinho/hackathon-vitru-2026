# Contexto Completo - Hackathon Vitru 2026
## Motor de Intervenção Inteligente / Plataforma de Sucesso do Aluno

> Documento de contexto consolidado para compartilhar com Antigravity, Kiro, equipe de desenvolvimento, mentores e ferramentas de apoio.
>
> Objetivo: centralizar tudo que foi levantado até agora sobre o desafio, critérios, banca, ferramentas, premissas, hipóteses, dores de evasão, ideias de solução e direcionamento estratégico.

---

## 1. Arquivos e materiais analisados até agora

### 1.1 Abertura Hackathon.pptx
Principais pontos extraídos:

- Hackathon Vitru 2026.
- Tema central: inovação que transforma o futuro da educação.
- A Vitru possui mais de 1 milhão de alunos.
- Marcas citadas: Uniasselvi e Unicesumar.
- Desafio central: **o que faz um aluno ficar?**
- Provocação principal: **como fazer com que mais alunos consigam permanecer, avançar e concluir sua jornada?**
- Sucesso do aluno foi apresentado como: **engajar, aprender e formar**.
- A apresentação diferencia retenção de permanência.
- A banca avaliará 5 critérios, com 20 pontos cada.
- Pitch: 5 minutos.
- Perguntas da banca: 3 minutos.
- Domingo 15h: apresentação para banca.
- Domingo 13h20 a 15h: treino/refinamento do pitch.
- Até 13h20: entrega do link com solução, pitch, protótipo, PowerPoint, GitHub ou outro material.

### 1.2 Descrição Desafio.pdf
Principais pontos extraídos:

- O desafio não é apenas reduzir evasão.
- O foco é permanência, avanço, aprendizagem e conclusão.
- Retenção é olhar para impedir que o aluno saia.
- Permanência é criar condições para o aluno continuar e ter sucesso.
- O diagnóstico de risco já existe.
- A Vitru já possui modelo preditivo capaz de identificar sinais de risco de evasão.
- O modelo combina sinais acadêmicos, digitais, aprendizagem, financeiro e contexto do aluno.
- Os times **não precisam construir um novo modelo preditivo**.
- O desafio começa depois do diagnóstico.
- Perguntas fundamentais do desafio:
  - Qual ação tomar?
  - Quando agir?
  - Para quem direcionar?
  - Como personalizar?
  - Como medir se funcionou?
- O território principal do hackathon está nas ações preventivas e preditivas.
- Ações reativas não são o foco principal.
- A solução precisa gerar ações concretas, escaláveis, seguras, responsáveis e aderentes à LGPD.

### 1.3 Motivos de Evasão Vitru.pdf
Principais pontos extraídos:

- Material com variáveis dos modelos preditivos.
- Existem variáveis importantes para calouros e veteranos.
- Variáveis citadas para Uniasselvi e Unicesumar incluem:
  - Cadastro da última nota.
  - Engajamento financeiro.
  - Dias desde último acesso ao AVA.
  - Polo.
  - Política de Desplug/Recomeço.
  - Dias desde confirmação da matrícula.
  - Curso.
  - Dias desde acesso à trilha.
  - Dias desde acesso à sala virtual.
  - Dias desde acesso aos livros.
  - Dias desde acesso ao calendário.
  - Forma de ingresso.
  - Percentual de conclusão do curso.
  - Ambientação.
  - Questionário Conheça EAD.
  - Espaço Calouro.
  - Entrada tardia.
  - Renegociação de dívidas.
  - Participação em aulas ao vivo.
  - Idade no ingresso.
  - Pagamentos até o vencimento.
  - Participação em aulas conceituais.
  - Entrega de atividades.
  - Dias até o primeiro acesso.
  - Acesso ao AVA em período pedagógico.
  - Quantidade de acessos ao AVA.
- O material reforça que existem sinais objetivos e estatísticos de risco.
- O valor do hackathon está em transformar esses sinais em ações.

### 1.4 Apresentação Salesforce / Agentforce
Arquivo: `15_08_2026_Hackathon_Vitru_Salesforce__Apresentac_a_o_Institucional.pdf`

Principais pontos extraídos:

- Visão Salesforce: **Agentes e Humanos criando sucesso para os clientes**.
- Valores apresentados:
  - Confiança.
  - Sucesso do cliente.
  - Inovação.
  - Igualdade.
  - Sustentabilidade.
- A revolução agêntica foi apresentada como agentes de IA cuidando de tarefas rotineiras para que humanos foquem em criatividade, relacionamento e impacto.
- Agentforce aparece como plataforma empresarial de agentes de IA.
- Agentforce atua em fluxos de trabalho, gatilhos, contexto, controle e ações.
- Existem casos de uso por indústria, incluindo educação.
- Casos de educação citados incluem recursos do campus, casos de estudante, objetivos do estudante, cursos de aprendizagem e interesse acadêmico.
- Trailhead foi apresentado como plataforma gratuita de aprendizagem Salesforce.
- Trailhead trabalha com trilhas, badges, evolução e aprendizado contínuo.
- Cases apresentados reforçam padrão:
  - Dados.
  - Contexto.
  - Agente.
  - Próxima melhor ação.
  - Experiência melhor.
  - Resultado mensurável.
- Case YDUQS/Wyden: agente de cobrança digital para negociação de débitos de alunos via WhatsApp.
- Esse case é relevante para entender possibilidades técnicas, mas precisa ser adaptado para uma abordagem não intrusiva e focada em sucesso do aluno, e não simplesmente cobrança.

### 1.5 Palestra AWS / Kiro
Pontos anotados da fala:

- Kiro foi apresentado como ambiente de desenvolvimento para acelerar construção.
- Ideia central percebida: ir do protótipo à produção.
- Vibe coding é bom para protótipo e validação rápida.
- Porém, há diferença entre protótipo e ambiente de produção.
- Kiro deve ser tratado como habilitador, não como solução.
- O foco continua sendo sucesso do aluno.
- Kiro pode ajudar a traduzir a hipótese em protótipo navegável ou demonstrável.

---

## 2. Interpretação central do desafio

A grande mudança de perspectiva é:

```text
Não é: como reduzimos evasão?

É: o que faz o aluno permanecer, avançar, aprender, concluir e ter sucesso?
```

A evasão deve ser tratada como **sintoma**, não como problema raiz.

Possíveis causas ou dores associadas à evasão:

- Dificuldade financeira.
- Baixo engajamento digital.
- Dificuldade acadêmica.
- Entrada difícil no EAD.
- Falta de ambientação.
- Falta de pertencimento.
- Falta de perspectiva profissional.
- Baixa organização pessoal.
- Baixo avanço na jornada.
- Baixa confiança do aluno na própria capacidade.

O desafio não é apenas identificar quem está em risco. A Vitru já tem diagnóstico preditivo.

O desafio é:

```text
Diagnóstico existente
↓
Entendimento da necessidade
↓
Intervenção adequada
↓
Apoio ao aluno
↓
Permanência
↓
Avanço
↓
Conclusão
↓
Impacto social
```

---

## 3. Tese atual da solução

### Nome de trabalho

**Motor de Intervenção Inteligente**

Possíveis evoluções de nome:

- Plataforma de Sucesso do Aluno.
- Jornada Viva.
- Projeto Farol.
- Motor de Sucesso Acadêmico.
- Orquestrador de Permanência.

### Tese principal

> A Vitru já sabe identificar risco. O Motor de Intervenção Inteligente transforma sinais de risco em ações concretas, personalizadas, escaláveis e responsáveis para aumentar as chances de sucesso do aluno.

### Tese expandida

> O Motor de Intervenção Inteligente usa dados, tecnologia, IA e apoio humano para transformar sinais de risco da jornada acadêmica em recomendações de intervenção preventiva e preditiva, respeitando LGPD, evitando abordagens intrusivas e priorizando sucesso do aluno, permanência, avanço, conclusão e impacto social.

### Frases de pitch já validadas como fortes

> O Motor de Intervenção Inteligente não prevê evasão. Ele orquestra permanência.

> A Vitru já sabe identificar quem está em risco. Nossa proposta responde a próxima pergunta: qual é a melhor ação, no melhor momento, para transformar risco em sucesso acadêmico?

> Combater evasão é olhar para o problema pelo retrovisor. Nossa proposta é aumentar o sucesso do aluno. Quando o aluno tem apoio, perspectiva e evolução, a permanência acontece como consequência.

> Tecnologia identifica o sinal. Dados explicam o contexto. IA recomenda o melhor caminho. Humanos entram onde empatia, relacionamento e julgamento são necessários.

---

## 4. O que a solução NÃO deve ser

Evitar soluções que sejam apenas:

- Novo modelo preditivo.
- Novo score de churn/evasão.
- Dashboard de evasão.
- Chatbot genérico.
- Régua de cobrança.
- Disparo automático de mensagens assustadoras.
- Solução focada em tecnologia sem foco no aluno.
- Solução que gere sensação de vigilância.
- Solução financeiramente inviável para a instituição.
- Solução operacionalmente impossível de escalar.
- Solução que exponha dados sensíveis do aluno.

---

## 5. Princípios estruturantes da solução

### Princípio 01 - Intervenção não intrusiva

A intervenção deve ajudar sem constranger, expor ou rotular o aluno.

Não comunicar:

```text
Detectamos que você está em risco.
Detectamos que você tem problema financeiro.
Você foi classificado como risco de evasão.
```

Comunicar de forma positiva:

```text
Preparamos opções que podem apoiar sua jornada.
Encontramos oportunidades alinhadas ao seu momento acadêmico.
Temos recursos que podem ajudar você a continuar avançando.
```

### Princípio 02 - Sucesso acima da retenção

A solução não existe para prender o aluno.

Ela existe para aumentar as condições reais de sucesso.

Permanência deve ser consequência de:

- Apoio.
- Progresso.
- Pertencimento.
- Aprendizagem.
- Empregabilidade.
- Confiança.
- Conclusão.

### Princípio 03 - Tecnologia, dados, criatividade e IA

A solução deve combinar:

- Tecnologia para escalar.
- Dados para entender padrões.
- IA para recomendar próxima melhor ação.
- Criatividade para gerar intervenções não óbvias.
- Humanos para apoio, empatia e relacionamento.

### Princípio 04 - Sustentabilidade institucional

Toda intervenção precisa caber na realidade financeira e operacional da Vitru.

Perguntas obrigatórias:

- Quem paga essa conta?
- Dá para operar para milhares ou milhões de alunos?
- Isso exige muita operação manual?
- Isso gera valor para o aluno e para a Vitru?
- Isso pode ser implementado em fases?

### Princípio 05 - Impacto social

A solução deve impactar:

- Vida do aluno.
- Permanência.
- Empregabilidade.
- Formação.
- Sociedade.
- Eficiência institucional.

### Princípio 06 - IA invisível

A melhor tecnologia é aquela que o aluno quase não percebe.

O aluno não deve sentir que está sendo analisado, pontuado ou monitorado.

O aluno deve sentir:

- Apoio.
- Orientação.
- Oportunidade.
- Progresso.
- Desenvolvimento.

### Princípio 07 - Tecnologia como infraestrutura

Agentforce, AWS, Kiro, dados e IA são infraestrutura.

O foco da solução é:

```text
Aluno
↓
Sucesso
↓
Permanência
↓
Avanço
↓
Conclusão
```

### Princípio 08 - Estatístico e humano

A solução deve ser estatística e humana ao mesmo tempo.

- Estatística para identificar padrões.
- Dados para entender contexto.
- IA para sugerir intervenções.
- Humanos para apoiar em situações sensíveis.

### Princípio 09 - Progresso gera permanência

O aluno não permanece porque recebeu uma mensagem.

O aluno permanece quando percebe evolução.

Toda intervenção deve buscar gerar:

- Progresso.
- Pertencimento.
- Confiança.
- Clareza de próximos passos.
- Perspectiva de futuro.

### Princípio 10 - Prototipar para validar

O protótipo deve demonstrar a experiência e o fluxo da solução.

Não precisa ser produto final.

Precisa provar:

- Problema.
- Jornada.
- Intervenção.
- Valor.
- Viabilidade.
- Escalabilidade.

---

## 6. Funcionamento conceitual do Motor de Intervenção Inteligente

```text
1. Modelo preditivo existente identifica sinais de risco
   ↓
2. Motor interpreta a causa provável ou perfil de necessidade
   ↓
3. Motor recomenda a melhor próxima ação
   ↓
4. A intervenção é ofertada de forma positiva e não intrusiva
   ↓
5. A ação pode ser automática, assistida ou humana
   ↓
6. O resultado é monitorado
   ↓
7. O motor aprende quais intervenções funcionam melhor
```

---

## 7. Camadas da solução

### 7.1 Camada de dados

Entradas possíveis:

- Sinais acadêmicos.
- Sinais financeiros.
- Sinais de engajamento digital.
- Sinais de aprendizagem.
- Sinais contextuais.
- Dados de ambientação.
- Dados de progresso.

### 7.2 Camada de entendimento

Classifica o tipo de necessidade do aluno:

- Financeira.
- Acadêmica.
- Digital.
- Ambientação.
- Progressão.
- Pertencimento.
- Empregabilidade.

### 7.3 Camada de recomendação

Define a próxima melhor ação:

- Trilha de ambientação.
- Retomada do AVA.
- Monitoria.
- Plano de estudos.
- Orientação financeira.
- Trilha de empregabilidade.
- Contato humanizado.
- Encaminhamento para apoio.

### 7.4 Camada de orquestração

Pode usar:

- Agentforce.
- Automações.
- Fluxos de CRM.
- WhatsApp, e-mail, app ou portal.
- Transbordo para humano.
- Integração com dados internos.

### 7.5 Camada de experiência do aluno

O aluno não vê o risco.

O aluno vê:

- Recurso útil.
- Orientação.
- Oportunidade.
- Caminho de progresso.
- Apoio no momento certo.

### 7.6 Camada de aprendizado contínuo

Mede:

- Aceite da intervenção.
- Engajamento após ação.
- Evolução acadêmica.
- Retorno ao AVA.
- Entrega de atividades.
- Redução de risco.
- Permanência.
- Conclusão.

---

## 8. Dores de evasão e hipóteses de intervenção

## 8.1 Dor financeira

### Diagnóstico

A dor financeira não deve ser tratada apenas como cobrança, parcelamento ou desconto.

A ideia inicial trazida foi:

- Já existe bolsa.
- Poderia haver algo como crédito acadêmico.
- Algo inspirado em ProUni/FIES privado.
- O aluno com problema financeiro poderia fazer estágio interno, atividade formativa ou projeto para apoiar pagamento.

### Refinamento de viabilidade

A ideia precisa ser sustentável financeiramente e operacionalmente para a instituição.

Riscos da versão bruta:

- Custo alto.
- Complexidade jurídica/trabalhista.
- Difícil escala.
- Operação pesada.
- Pode não caber na realidade da instituição.

### Versão mais forte

**Programa de Permanência Inteligente com Empregabilidade**

Em vez de a Vitru simplesmente financiar o aluno, a Vitru conecta o aluno a oportunidades.

```text
Risco financeiro
↓
Identificação de perfil e curso
↓
Oferta positiva de oportunidade
↓
Trilha de empregabilidade, estágio, projeto ou parceiro
↓
Geração de renda ou perspectiva profissional
↓
Permanência e sucesso acadêmico
```

### Intervenções possíveis

- Trilha de empregabilidade direcionada.
- Marketplace de oportunidades parceiras.
- Estágios parceiros.
- Projetos supervisionados.
- Monitorias.
- Microprojetos acadêmicos.
- Orientação financeira não intrusiva.
- Renegociação preventiva quando fizer sentido.
- Benefício progressivo condicionado a engajamento acadêmico.
- Crédito de permanência com contrapartida educacional ou formativa, se juridicamente viável.

### Cuidados LGPD e experiência

Não comunicar:

```text
Detectamos sua dificuldade financeira.
Você foi classificado como risco financeiro.
```

Comunicar:

```text
Encontramos oportunidades que combinam com seu momento acadêmico e podem apoiar seu desenvolvimento profissional.

Conheça opções de apoio e flexibilidade para continuar sua jornada.
```

### Valor para o aluno

- Geração de renda.
- Empregabilidade.
- Continuidade dos estudos.
- Desenvolvimento profissional.
- Redução da pressão financeira.

### Valor para a Vitru

- Menor evasão.
- Maior permanência.
- Melhor experiência.
- Fortalecimento da marca.
- Conexão com empregabilidade.
- Impacto social mensurável.

---

## 8.2 Dor de ambientação / calouro em risco

### Diagnóstico

Os materiais indicam variáveis importantes relacionadas à ambientação, especialmente para calouros:

- Questionário Conheça EAD.
- Completar ambientação.
- Acessar Espaço Calouro.
- Primeiro acesso ao AVA.
- Entrada tardia.
- Dias até primeiro acesso.

### Hipótese

Muitos alunos podem evadir não por falta de capacidade, mas por dificuldade de entrada na jornada EAD.

### Intervenções possíveis

- Onboarding guiado.
- Trilha de primeiros passos.
- Tutor virtual de ambientação.
- Checkpoints de primeira semana.
- Ajuda contextual no AVA.
- Microconquistas e badges.
- Conteúdos de organização para EAD.
- Apoio humano se o aluno não avançar nos primeiros marcos.

### Ideia conectada ao Trailhead

O Trailhead mostra que trilhas, badges e progresso podem motivar aprendizado.

Aplicação adaptada:

```text
Trilha de Sucesso do Calouro
↓
Primeiro acesso
↓
Conheça seu AVA
↓
Organize sua rotina
↓
Faça sua primeira atividade
↓
Participe de uma aula
↓
Conquiste seu primeiro marco
```

---

## 8.3 Dor de desengajamento digital

### Diagnóstico

Indicadores possíveis:

- Dias sem acesso ao AVA.
- Baixo acesso à trilha.
- Baixo acesso à sala virtual.
- Baixo acesso a livros.
- Baixo acesso ao calendário.

### Hipótese

O aluno pode não estar progredindo porque perdeu ritmo, rotina ou clareza do próximo passo.

### Intervenções possíveis

- Lembrete contextual.
- Retomada guiada.
- Plano de próximos passos.
- Desafio de retomada.
- Recomendação de conteúdo essencial.
- Check-in leve.
- Apoio humano quando houver persistência de inatividade.

### Linguagem não intrusiva

Não comunicar:

```text
Você está há X dias sem acessar.
```

Comunicar:

```text
Preparamos um caminho rápido para você retomar sua jornada de onde parou.
```

---

## 8.4 Dor acadêmica

### Diagnóstico

Indicadores possíveis:

- Última nota baixa.
- Baixa entrega de atividades.
- Baixa participação em aulas ao vivo.
- Baixa participação em aulas conceituais.
- Baixa aprovação em disciplinas.

### Hipótese

O aluno pode estar em risco por dificuldade de aprendizagem ou falta de método.

### Intervenções possíveis

- Monitoria.
- Reforço acadêmico.
- Plano de estudos personalizado.
- Recomendação de aulas ou materiais.
- Grupo de apoio.
- Mentoria acadêmica.
- Acompanhamento por tutor.

### Linguagem não intrusiva

```text
Selecionamos alguns recursos que podem ajudar você a avançar com mais segurança neste módulo.
```

---

## 8.5 Dor de baixa progressão

### Diagnóstico

Indicadores possíveis:

- Baixo percentual de conclusão.
- Baixo andamento do curso.
- Intenção de cancelamento relacionada ao andamento.
- Atraso em marcos importantes.

### Hipótese

O aluno pode precisar enxergar progresso e metas menores.

### Intervenções possíveis

- Plano de avanço por etapas.
- Metas quinzenais.
- Visualização de progresso.
- Marco de conquista.
- Recomendação da próxima ação mínima.
- Apoio motivacional orientado a objetivo.

---

## 8.6 Dor de pertencimento e perspectiva

### Diagnóstico

Nem toda evasão é financeira ou acadêmica. Parte pode estar relacionada à falta de conexão, propósito, confiança ou visão de futuro.

### Hipótese

O aluno permanece quando percebe que o curso está conectado a um caminho de vida e trabalho.

### Intervenções possíveis

- Trilhas de carreira.
- Histórias de alunos.
- Comunidades de interesse.
- Mentoria com profissionais.
- Conexão com empregabilidade.
- Recomendação de habilidades do futuro.
- Atividades que mostrem aplicação prática do curso.

---

## 9. Salesforce / Agentforce dentro da solução

### Papel adequado

Agentforce deve ser tratado como camada de orquestração e interação inteligente.

Não como chatbot genérico.

Possíveis papéis:

- Recomendar próxima melhor ação.
- Acionar fluxos.
- Responder dúvidas com base em conhecimento confiável.
- Criar comunicação personalizada e não intrusiva.
- Encaminhar para humano quando necessário.
- Manter contexto da jornada.
- Operar em canais como WhatsApp, app, portal ou atendimento.

### Aplicação coerente

```text
Dados do aluno
↓
Contexto do aluno
↓
Motor recomenda intervenção
↓
Agentforce executa ou orienta fluxo
↓
Humano atua quando necessário
```

### Cuidado importante

Não transformar a solução em um agente de cobrança.

A lógica deve ser:

```text
Agente de sucesso do aluno
```

Não:

```text
Agente de cobrança de aluno em risco
```

---

## 10. AWS / Kiro dentro da solução

### Papel adequado

Kiro pode ser usado para construir rapidamente:

- Protótipo navegável.
- Interface do aluno.
- Interface de mentor/atendimento.
- Simulação de recomendação.
- Fluxo de classificação de dor.
- Demonstração de orquestração.
- Repositório GitHub com documentação e código.

### Princípio

Kiro é ferramenta de construção.

Não é a solução.

A solução é o sucesso do aluno.

### Protótipo vs produção

Para o Hackathon:

- Demonstrar fluxo.
- Demonstrar valor.
- Demonstrar viabilidade.
- Demonstrar experiência.

Para produção:

- Integrações reais.
- Segurança.
- Governança.
- Observabilidade.
- Auditoria.
- LGPD.
- Escalabilidade.

---

## 11. Critérios oficiais de avaliação

5 critérios, 20 pontos cada.

### 1. Aderência ao desafio - 20 pontos

Pergunta:

> A solução realmente responde a um problema real de retenção/permanência no EAD?

Como pontuar:

- Mostrar causa real de evasão.
- Mostrar relação com permanência, avanço e conclusão.
- Evitar solução genérica.
- Mostrar que a solução atua depois do diagnóstico.

### 2. Inovação e criatividade - 20 pontos

Pergunta:

> A proposta traz uma abordagem nova ou uma forma diferente de resolver o problema?

Como pontuar:

- Não ser apenas dashboard.
- Não ser apenas chatbot.
- Não ser novo score.
- Mostrar uma nova forma de intervir.
- Mostrar tecnologia como infraestrutura e criatividade na solução.

### 3. Potencial de impacto - 20 pontos

Pergunta:

> A solução pode gerar valor para o aluno e para a Vitru?

Impacto para o aluno:

- Apoio.
- Permanência.
- Conclusão.
- Aprendizagem.
- Empregabilidade.
- Desenvolvimento.

Impacto para a Vitru:

- Menor evasão.
- Maior permanência.
- Eficiência operacional.
- Melhoria da experiência.
- Diferencial estratégico.
- Impacto social.

### 4. Viabilidade - 20 pontos

Pergunta:

> A solução pode realmente ser implementada?

Como pontuar:

- Usar dados já existentes.
- Usar modelo preditivo já existente.
- Implementação faseada.
- Uso coerente de Agentforce/AWS/Kiro.
- Sustentabilidade financeira.
- Escalabilidade operacional.
- LGPD desde o desenho.

### 5. Pitch e defesa - 20 pontos

Pergunta:

> A equipe consegue comunicar a proposta de forma clara, objetiva e fundamentada?

Como pontuar:

- 5 minutos bem organizados.
- Problema claro.
- Solução clara.
- Impacto demonstrado.
- Viabilidade explicada.
- Diferencial memorável.
- Respostas preparadas para banca.

---

## 12. Banca de avaliação

### Chrys

Foco provável:

- Experiência do aluno.
- Impacto para o aluno.
- Permanência real.
- Jornada humana.

Pergunta provável:

> Como isso melhora a vida do aluno?

### Daniel

Foco provável:

- Viabilidade tecnológica.
- Caminho da solução.
- Arquitetura.
- Implementação.

Pergunta provável:

> Dá para construir e escalar?

### Aroldo

Foco provável:

- Visão estratégica.
- Direcionamento do projeto.
- Alinhamento com futuro da Vitru.

Pergunta provável:

> Isso é estratégico para a instituição?

### Waleska

Foco provável:

- Pessoas.
- Competências.
- Desenvolvimento humano.
- Empregabilidade.
- Cultura.

Pergunta provável:

> Como isso desenvolve o aluno e fortalece pessoas?

### Rafaela Oliveira - Salesforce

Papel citado:

- Diretora de serviço de portfólio Salesforce.

Foco provável:

- Uso inteligente de Salesforce/Agentforce.
- Agentes com contexto.
- Próxima melhor ação.
- Integração entre agente e humano.

Pergunta provável:

> Onde o Agentforce realmente agrega valor?

### Maurício Holanda - AWS

Papel citado:

- Executivo de arquitetura de soluções da AWS.

Foco provável:

- Arquitetura.
- Escala.
- Evolução do protótipo para produção.
- Viabilidade técnica.

Pergunta provável:

> Como essa solução sairia do protótipo e iria para produção?

---

## 13. Cronograma e entregas

### Domingo

```text
Até 13h20
Entregar link com a solução desenvolvida ou material apresentado no pitch.

13h20 às 15h00
Treinar pitch e defesa.

15h00
Apresentação oficial do pitch.

Pitch: 5 minutos.
Perguntas da banca: 3 minutos.
```

### Formatos aceitos

- PowerPoint.
- Protótipo.
- Outro formato de apresentação.
- Link de repositório GitHub.
- Material desenvolvido.

---

## 14. Formulário dos padrinhos

Os padrinhos terão que preencher 4 informações básicas.

### 1. Qual a solução?

Resposta base:

> Motor de Intervenção Inteligente: uma solução que transforma sinais de risco já identificados pelos modelos preditivos da Vitru em recomendações de ações preventivas e personalizadas, ajudando o aluno a permanecer, avançar e concluir sua jornada acadêmica.

### 2. Qual dor resolve?

Resposta base:

> Resolve a dificuldade de transformar diagnóstico de risco em ações concretas. Atua sobre dores reais de evasão no EAD, como dificuldade financeira, baixa ambientação, desengajamento digital, dificuldade acadêmica, baixa progressão e falta de perspectiva de futuro.

### 3. Qual tecnologia usada?

Resposta base:

> Dados dos modelos preditivos existentes, IA generativa, motor de recomendação de próxima melhor ação, Agentforce/Salesforce para orquestração de fluxos e interações, AWS/Kiro para prototipação e caminho de evolução técnica.

### 4. Diferenciais da proposta

Resposta base:

> A solução não tenta criar um novo modelo de evasão. Ela atua depois do diagnóstico, recomendando intervenções não intrusivas, sustentáveis e escaláveis. O foco não é tecnologia, mas sucesso do aluno. Combina dados, IA, criatividade e atuação humana para gerar valor para o estudante, para a Vitru e para a sociedade.

---

## 15. Ilhas de conhecimento

As ilhas devem ser usadas para validar hipóteses, não apenas para pedir ideias.

### Sala Propósito

Objetivo:

- Entender melhor o aluno, sua jornada, dores, comportamento e contexto acadêmico.

Perguntas sugeridas:

- O que mais causa desistência nos primeiros meses?
- O aluno que permanece faz o quê de diferente?
- Qual é o momento mais crítico da jornada?
- Onde a instituição mais perde oportunidade de apoiar o aluno?

### Sala Conexão

Objetivo:

- Discutir hipóteses, inovação, modelo de solução e possibilidades de negócio.

Perguntas sugeridas:

- Nossa ideia ataca causa ou sintoma?
- Essa abordagem parece nova?
- Vocês já tentaram algo parecido?
- Qual ponto poderia inviabilizar a solução?

### Sala Experiência do Aluno

Objetivo:

- Validar se a intervenção melhora a experiência do aluno.

Perguntas sugeridas:

- O aluno se sentiria apoiado ou monitorado?
- Essa linguagem gera conforto ou incômodo?
- Essa intervenção ajuda de fato no momento certo?
- Como tornar a experiência mais humana?

### Sala Salesforce

Objetivo:

- Validar possibilidades com Agentforce.

Perguntas sugeridas:

- Onde um agente agrega valor na jornada de sucesso do aluno?
- Como usar Agentforce para orquestrar próxima melhor ação?
- Como evitar que o agente pareça cobrança ou vigilância?
- Como conectar dados, contexto e intervenção?

### Sala AWS / Kiro

Objetivo:

- Validar protótipo, arquitetura e caminho técnico.

Perguntas sugeridas:

- O que precisa existir no protótipo para demonstrar valor?
- Como representar a jornada do aluno?
- Como organizar o repositório GitHub?
- Como demonstrar evolução para produção?

### Sala Tecnologia e Dados

Objetivo:

- Validar dados, variáveis e factibilidade.

Perguntas sugeridas:

- Quais variáveis são mais acionáveis?
- Quais sinais são mais úteis para intervenção?
- Quais dados já existem?
- Quais dados não devem ser usados por risco de LGPD ou baixa explicabilidade?

---

## 16. Estratégia de pitch de 5 minutos

### Estrutura recomendada

```text
0:00 - 0:30
Abertura forte: evasão é sintoma; foco é sucesso do aluno.

0:30 - 1:15
Dor: alunos evadem por causas diferentes, e o diagnóstico já existe.

1:15 - 2:20
Solução: Motor de Intervenção Inteligente.

2:20 - 3:20
Como funciona: dados + IA + tecnologia + humano.

3:20 - 4:10
Impacto: aluno, Vitru e sociedade.

4:10 - 4:40
Viabilidade: usa dados existentes, Agentforce, AWS/Kiro e implantação faseada.

4:40 - 5:00
Fechamento memorável.
```

### Abertura possível

> A evasão não começa quando o aluno cancela. Ela começa quando o aluno perde ritmo, perspectiva, apoio ou condições de seguir. A Vitru já consegue enxergar sinais de risco. Nossa proposta é transformar esses sinais em ações concretas para gerar sucesso do aluno.

### Fechamento possível

> O Motor de Intervenção Inteligente não é uma IA para vigiar alunos. É uma plataforma para ampliar cuidado, oportunidade e sucesso em escala. Porque quando o aluno progride, a permanência acontece.

---

## 17. Respostas prováveis para perguntas da banca

### Pergunta: por que não criar um novo modelo preditivo?

Resposta:

> Porque o desafio deixa claro que a Vitru já possui diagnóstico. Criar outro modelo seria gastar energia onde a instituição já avançou. Nossa proposta atua no próximo passo: transformar diagnóstico em ação.

### Pergunta: como garantir LGPD?

Resposta:

> A solução usa minimização de dados, finalidade clara e controle de acesso. O aluno não é exposto como risco. A comunicação é positiva e orientada a apoio. Dados sensíveis não são usados para constranger, rotular ou gerar vigilância.

### Pergunta: como isso escala?

Resposta:

> A solução classifica perfis de necessidade e recomenda intervenções padronizadas por contexto. A automação cuida do volume, e humanos entram nos casos que exigem empatia, julgamento ou suporte especializado.

### Pergunta: onde entra o Agentforce?

Resposta:

> Entra como camada de orquestração e interação. Ele pode contextualizar a jornada, acionar fluxos, sugerir comunicações, encaminhar para humanos e apoiar execução da próxima melhor ação.

### Pergunta: onde entra AWS/Kiro?

Resposta:

> Kiro pode acelerar o protótipo e demonstrar a jornada. AWS entra como caminho de arquitetura e escala. Mas ambos são infraestrutura. O foco segue sendo sucesso do aluno.

### Pergunta: qual o impacto para a Vitru?

Resposta:

> Aumentar permanência, melhorar experiência, priorizar esforços de apoio, reduzir ações genéricas, fortalecer empregabilidade e gerar diferencial estratégico baseado em sucesso do aluno.

### Pergunta: qual o impacto para a sociedade?

Resposta:

> Quando mais alunos permanecem e concluem, há impacto em formação, renda, empregabilidade e mobilidade social. A solução não combate apenas evasão, ela ajuda pessoas a concluir uma jornada de educação.

---

## 18. Ideia de arquitetura conceitual

```text
Modelos preditivos existentes Vitru
          ↓
Camada de sinais e contexto
          ↓
Motor de classificação de necessidade
          ↓
Motor de recomendação de próxima melhor ação
          ↓
Orquestração via Agentforce / fluxos / CRM
          ↓
Canal de experiência do aluno
          ↓
Intervenção automática, assistida ou humana
          ↓
Medição de resultado
          ↓
Aprendizado contínuo
```

---

## 19. Ideia de protótipo mínimo

### Tela 1 - Visão do aluno

Mostrar experiência positiva:

- Saudação.
- Progresso da jornada.
- Próximo passo recomendado.
- Recurso de apoio.
- Oportunidade ou trilha sugerida.

Sem mostrar:

- Score de risco.
- Classificação negativa.
- Termos como evasão, risco, inadimplência.

### Tela 2 - Visão do mentor/atendimento

Mostrar:

- Perfil de necessidade.
- Sinais agregados.
- Próxima ação sugerida.
- Canal recomendado.
- Nível de prioridade.
- Necessidade de transbordo humano.

### Tela 3 - Motor de recomendação

Simular:

```json
{
  "perfil_necessidade": "desengajamento digital",
  "acao_recomendada": "trilha de retomada guiada",
  "canal": "app/WhatsApp",
  "linguagem": "apoio positivo",
  "transbordo_humano": false
}
```

### Tela 4 - Resultado esperado

Mostrar indicadores:

- Aceitou intervenção.
- Retornou ao AVA.
- Entregou atividade.
- Avançou módulo.
- Reduziu risco.

---

## 20. Ideia de repositório GitHub

Estrutura sugerida:

```text
motor-intervencao-inteligente/
├── README.md
├── docs/
│   ├── contexto-hackathon.md
│   ├── arquitetura.md
│   ├── lgpd-experiencia.md
│   └── pitch.md
├── prototype/
│   ├── frontend/
│   └── mock-data/
├── api/
│   └── recommendation-engine-mock.json
├── prompts/
│   ├── agentforce-agent.md
│   └── kiro-build-context.md
└── assets/
    └── fluxos-e-jornadas/
```

### README.md deve explicar

- Qual a solução.
- Qual dor resolve.
- Tecnologias usadas.
- Diferenciais.
- Como rodar ou visualizar protótipo.
- Como evoluir para produção.

---

## 21. Prompt para Antigravity / Kiro

Use o prompt abaixo para compartilhar contexto com Antigravity, Kiro ou outra ferramenta de construção:

```markdown
Você está apoiando um time no Hackathon Vitru 2026.

Objetivo do desafio:
Criar uma solução para aumentar permanência, avanço, aprendizagem e conclusão da jornada do aluno no EAD.

Contexto central:
A Vitru já possui modelos preditivos que identificam sinais de risco de evasão. O desafio não é criar um novo modelo preditivo. O desafio é transformar o diagnóstico em ações concretas, personalizadas, escaláveis, sustentáveis e aderentes à LGPD.

Tese da solução:
Construir o Motor de Intervenção Inteligente, uma camada de decisão e orquestração que recebe sinais do aluno, identifica o perfil de necessidade e recomenda a próxima melhor ação para aumentar sucesso do aluno.

Premissas:
- Tecnologia é infraestrutura, não protagonista.
- O foco é sucesso do aluno.
- Permanência é consequência do sucesso.
- A solução deve ser estatística e humana.
- IA deve apoiar a decisão, não substituir o relacionamento humano.
- Agentforce pode atuar como camada de orquestração e interação.
- AWS/Kiro pode acelerar o protótipo e indicar caminho para produção.
- LGPD e experiência do aluno são requisitos desde o desenho.
- A intervenção não pode gerar sensação de vigilância, cobrança ou incômodo.

Dores consideradas:
- Financeira.
- Ambientação.
- Desengajamento digital.
- Dificuldade acadêmica.
- Baixa progressão.
- Falta de pertencimento e perspectiva.

Entregável desejado:
Criar um protótipo simples e apresentável que demonstre:
1. Uma entrada de sinais simulados do aluno.
2. Classificação do perfil de necessidade.
3. Recomendação de próxima melhor ação.
4. Comunicação não intrusiva para o aluno.
5. Visão operacional para equipe/mentor.
6. Indicação de impacto esperado.

Evitar:
- Criar novo modelo de evasão.
- Mostrar score de risco ao aluno.
- Criar chatbot genérico.
- Criar régua de cobrança.
- Expor dados sensíveis.
- Colocar tecnologia acima do sucesso do aluno.

Mensagem principal do pitch:
A Vitru já sabe identificar risco. Nossa proposta responde o próximo passo: qual ação, no melhor momento, ajuda esse aluno a permanecer, avançar e concluir?
```

---

## 22. Versão curta para WhatsApp da equipe

```text
Pessoal, consolidei o contexto que levantamos até agora sobre o Hackathon Vitru para facilitar o trabalho com Antigravity, Kiro e demais ferramentas.

A ideia central é que a Vitru já possui diagnóstico de risco. Então nossa solução não deve tentar criar mais um modelo preditivo. O foco é transformar sinais de risco em ações concretas, personalizadas e escaláveis para aumentar permanência, avanço e conclusão do aluno.

O documento reúne critérios de avaliação, banca, cronograma, ferramentas disponíveis, premissas de LGPD, hipóteses por dor de evasão, papel do Agentforce, papel do Kiro/AWS e uma proposta inicial do Motor de Intervenção Inteligente.

A tecnologia deve ser infraestrutura. O foco é sucesso do aluno.
```

---

## 23. Resumo final da estratégia

A solução deve ser defendida como:

```text
Uma plataforma de sucesso do aluno,
não uma ferramenta de evasão.
```

O Motor de Intervenção Inteligente deve:

- Usar dados existentes.
- Não recriar predição.
- Identificar necessidades.
- Recomendar intervenções.
- Operar de forma não intrusiva.
- Combinar IA e humano.
- Ser sustentável.
- Ser escalável.
- Respeitar LGPD.
- Gerar valor para aluno, Vitru e sociedade.

Mensagem final:

> A evasão é o sintoma. O sucesso do aluno é o caminho. A tecnologia é a infraestrutura para escalar cuidado, progresso e oportunidade.
