# Hackathon Vitru 2026 - Motor de Intervenção Inteligente

15 e 16 de agosto, presencial, sede da Vitru em São Paulo. 32 participantes, 8 times.  
**Tema:** permanência do estudante na graduação.

> **Este arquivo é o cérebro compartilhado do time.** Leia ao chegar. É o painel principal de direcionamento estratégico de todo o nosso repositório.

## 📑 Índice
- [1. O que queremos (A Visão)](#-1-o-que-queremos-a-visão)
- [2. O que descobrimos até agora (Insights da Base)](#-2-o-que-descobrimos-até-agora-insights-da-base)
- [3. O que já construímos (O Protótipo Atual)](#️-3-o-que-já-construímos-o-protótipo-atual)
- [4. Estrutura do Repositório](#-4-estrutura-do-repositório-onde-cada-coisa-vive)
- [5. Registro de Versões e CHANGELOG](#-5-registro-de-versões-e-changelog)
- [Pesquisa Anterior](#-pesquisa-anterior)

---

## 🎯 1. O que queremos (A Visão)

A Vitru já possui modelos preditivos capazes de identificar alunos com risco de evasão. O nosso desafio **não é criar um novo modelo**. 

Nosso objetivo é construir o **Motor de Intervenção Inteligente** (Transformando evasão silenciosa em ações de sucesso do aluno).  
A tese do projeto é:  
> *"A evasão não começa quando o aluno cancela. Ela começa antes, quando o aluno deixa de acessar, de entregar atividades, perde o ritmo acadêmico ou a percepção de valor. A solução atua exatamente nessa janela de oportunidade."*

---

## 🔍 2. O que descobrimos até agora (Insights da Base)

Rodamos uma Análise Exploratória (EDA) profunda na base `dataset_aluno_predicted.xlsx` focando no conceito de **Evasão Silenciosa** (alunos com alto risco preditivo, mas que ainda não pediram cancelamento formal). O que os dados comprovam:

* **O Tamanho do Problema:** Dos 457.427 alunos da base, existem **52.345 alunos** na Evasão Silenciosa Potencial (11,4% da base total).
* **O Impacto Financeiro (Receita em Risco):**  
  $$\text{Receita em Risco} = 52.345 \text{ alunos silenciosos} \times \text{R\$ } 285,20 \text{ (ticket médio)} \times 12 \text{ meses} = \mathbf{\text{R\$ } 179,1 \text{ Milhões}}$$  
  *(Cálculo 100% fundamentado nos dados da base e no ticket médio oficial do Dossiê de Pré-pesquisa da Vitru).*
* **A Assinatura do Calouro (A Falsa Largada):** A maioria esmagadora (~80%) dos calouros silenciosos evade porque trava na entrega das primeiras atividades. A dor é **metodológica e de adaptação ao EAD**, não financeira.
* **A Assinatura do Veterano (Fadiga Acadêmica):** ~85% evade por acúmulo de reprovações no módulo anterior e sobrecarga de dependências.
* **A Lacuna de Experiência (Oceano Azul):** Constatamos que a base preditiva da Vitru **não possui dados integrados de NPS, CSAT, chamados de atendimento ou tickets**. A IA atual opera "cega" em relação à percepção de serviço do aluno, criando a oportunidade para o nosso motor conectar a intervenção humana com esses contextos.

### Análise Complementar: Fricções Digitais e Operacionais
A análise detalhada em `docs/analise_friccoes_jornada.md` compara alunos em Evasão Silenciosa Potencial com Ativos Sem Risco e identifica os principais pontos de ruptura da jornada.

**Principais achados:**
- A maior quebra aparece na **Ambientação**.
- Alunos silenciosos têm menor realização do Questionário Espaço Calouro.
- Alunos silenciosos acessam menos o Conheça EAD.
- A queda financeira aparece com força, mas como sintoma avançado.
- Há lacuna de telemetria granular do AVA e dados de experiência/atendimento.

👉 **[Ver Análise de Fricções e Mapa da Jornada (docs/analise_friccoes_jornada.md)](./docs/analise_friccoes_jornada.md)**  
👉 **[Ver Memória de Cálculo Detalhada e Defesa para a Banca (docs/memoria_calculo_evasao.md)](./docs/memoria_calculo_evasao.md)**  
👉 **[Ver Estrutura e Roteiro do Pitch de 5 Minutos (docs/pitch_5min_estrategia_final.md)](./docs/pitch_5min_estrategia_final.md)**

---

## 🛠️ 3. O que já construímos (O Protótipo Atual)

Para tangibilizar a visão, desenvolvemos um **Protótipo Funcional** do Motor focado na Interface do Consultor de Retenção e no fluxo de decisão rápida:

1. **Backend (FastAPI):**
   - Serve a fila de casos priorizada por **Recuperabilidade** e risco de evasão silenciosa.
   - Contém 4 personas modeladas para o pitch:
     - **Calouro (Adaptação/Falsa Largada):** João Silva
     - **Veterano (Sobrecarga/Fadiga):** Maria Souza
     - **Caso Financeiro (Risco Econômico):** Lucas Fernandes
     - **Caso Acadêmico (Dificuldade Técnica/AVA):** Camila Santos
   - Cada caso mapeia **Necessidade Identificada**, **Próxima Melhor Ação Orientada ao Sucesso** e **Impacto Esperado**.
2. **Frontend Premium (Vanilla Web):**
   - Construído com estética imersiva (Glassmorphism e tipografia Outfit), servido diretamente pelo FastAPI.
   - **Modo Demonstração (Pitch Ready):** Botão *"Exibir Próximo Caso"* para transição imediata entre personas durante a apresentação para a banca.
   - Destaque claro da tese da evasão silenciosa, lacuna de atendimento e indicadores de impacto.

### Como rodar o protótipo:
No terminal, dentro deste repositório:
```bash
cd api
uvicorn main:app --reload --port 8000
```
Depois, abra o navegador em `http://localhost:8000`.

---

## 📁 4. Estrutura do Repositório (Onde cada coisa vive)

- `/api/`: Contém o código do Backend (FastAPI, rotas `/cases` e dados de demonstração).
- `/api/static/`: Interface visual (HTML, CSS e JavaScript) do protótipo web.
- `/scratch/`: Scripts em Python utilizados para extrair estatísticas da base Excel (EDA).
- `/data/`: (Ignorada no git) Onde residem as bases da Vitru.
- `/docs/`: Documentações complementares e materiais de apoio.
- `CLAUDE.md`: O arquivo mestre de convenções e governança do time.

---

## 🚀 5. Registro de Versões e CHANGELOG

### Alterações v1.2
- **Substituição do termo Risco:** O indicador de "Risco" foi substituído por "Prioridade de Intervenção", adotando uma postura mais ativa.
- **Tamanho do Problema em Destaque:** O volume de evasão silenciosa potencial (52.345 alunos / 11,44%) foi adicionado com destaque logo no subtítulo da aplicação.
- **Maior Grupo Acionável Identificado:** Inclusão de um card informativo apontando que a "Evasão Silenciosa Potencial supera a intenção formal de cancelamento", reforçando o insight número um.
- **Lacuna Estratégica Reforçada:** O texto sobre a falta de dados (NPS/Experiência) foi reescrito para demonstrar que essa é uma oportunidade estratégica e não um simples erro no dataset.
- **Impacto Esperado em Evidência:** A seção de impacto da intervenção virou um mini-card de alto contraste, garantindo leitura instantânea pela banca.

### Alterações v1.1
- **Reforço da tese de evasão silenciosa:** Destacado no cabeçalho e nos KPIs o conceito de alunos que ainda não solicitaram cancelamento formal, mas já apresentam sinais comportamentais de abandono.
- **Substituição do conceito de diagnóstico preditivo por necessidade identificada:** Transição do tom técnico de predição para identificação de causa-raiz e necessidade humana do aluno.
- **Explicitação da lacuna de experiência e atendimento:** Evidenciada a ausência de dados de NPS/Tickets no modelo atual como oportunidade de integração do motor.
- **Ajuste da narrativa da próxima melhor ação:** Prescrições orientadas ao sucesso do estudante e retenção humanizada.
- **Inclusão do impacto esperado por intervenção:** Mapeamento explícito de marcos de recuperação (ex: retorno ao AVA, entrega de atividade, regularização acadêmica/financeira).
- **Validação do indicador financeiro (R$ 179M):** Memória de cálculo consolidada e documentada (52.345 vidas × R$ 285,20 × 12m).
- **Modo Demonstração:** Navegação com atalho rápido ("Exibir Próximo Caso") cobrindo Calouro, Veterano, Caso Financeiro e Caso Acadêmico.

---

## 📚 Pesquisa Anterior
*Aviso do time original:* O documento `Hackathon Vitru 2026 - Pre-pesquisa.docx` (cerca de 18 págs, 137 citações, 35 fontes de 7 sistemas de ensino mundiais) é leitura de aprofundamento. Se o tempo for curto, foque na Tabela de Convergência no fim da seção 8.
