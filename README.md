# Hackathon Vitru 2026 - Motor de Intervenção Inteligente

15 e 16 de agosto, presencial, sede da Vitru em São Paulo. 32 participantes, 8 times.
**Tema:** permanência do estudante na graduação.

> **Este arquivo é o cérebro compartilhado do time.** Leia ao chegar. É o painel principal de direcionamento estratégico de todo o nosso repositório.

## 📑 Índice
- [1. O que queremos (A Visão)](#-1-o-que-queremos-a-visão)
- [2. O que descobrimos até agora (Insights da Base)](#-2-o-que-descobrimos-até-agora-insights-da-base)
- [3. O que já construímos (O Protótipo Atual)](#️-3-o-que-já-construímos-o-protótipo-atual)
- [4. Estrutura do Repositório](#-4-estrutura-do-repositório-onde-cada-coisa-vive)
- [Pesquisa Anterior](#-pesquisa-anterior)

---

## 🎯 1. O que queremos (A Visão)

A Vitru já possui modelos preditivos capazes de identificar alunos com risco de evasão. O nosso desafio **não é criar um novo modelo**. 

Nosso objetivo é construir o **Motor de Intervenção Inteligente** (Transformando evasão silenciosa em ações de sucesso do aluno).
A tese do projeto é: *"A evasão não começa quando o aluno cancela. Ela começa antes, quando o aluno deixa de acessar, entregar atividades, perde o ritmo acadêmico ou a percepção de valor. A solução atua exatamente nessa janela de oportunidade."*

---

## 🔍 2. O que descobrimos até agora (Insights da Base)

Nós rodamos uma Análise Exploratória (EDA) profunda na base `dataset_aluno_predicted.xlsx` focando no conceito de **Evasão Silenciosa** (alunos com alto risco preditivo, mas que ainda não pediram para sair). O que os dados provaram:

* **O Tamanho do Problema:** Dos 457.427 alunos da base, existem **52.345 alunos** na Evasão Silenciosa Potencial (11,4% da base inteira).
* **O Buraco Financeiro:** Com um ticket médio de R$ 285,20, esse grupo de alunos representa **R$ 179 Milhões de receita anual em risco**.
* **A Assinatura do Calouro (A Falsa Largada):** A maioria esmagadora (~80%) dos calouros silenciosos evade porque trava na entrega das primeiras atividades. A dor é **metodológica e sistêmica**, não financeira.
* **A Assinatura do Veterano (Fadiga):** ~85% evade por causa do acúmulo de reprovações no módulo anterior.
* **A Lacuna de Ouro:** Constatamos que a base da Vitru não integra NPS, CSAT, chamados de atendimento ou tickets. Isso é um argumento forte para o Pitch: a IA hoje atua "cega" sobre a experiência de serviço do aluno. Nosso motor integraria com essas frentes.

---

## 🛠️ 3. O que já construímos (O Protótipo Atual)

Para tangibilizar a visão, já desenvolvemos um **Protótipo Funcional** do Motor focado na Interface do Consultor de Retenção:

1. **Backend (FastAPI):**
   - Rodando em Python, mockamos os casos exatos que extraímos da EDA.
   - O backend cruza a assinatura do aluno e cospe um **Diagnóstico de IA** com a **Próxima Melhor Ação** recomendada.
2. **Frontend Premium (Vanilla Web):**
   - Construído com estética imersiva (Glassmorphism e tipografia Outfit), está disponível diretamente pelo servidor FastAPI.
   - Apresenta uma fila de alunos priorizada por **Recuperabilidade** e uma tela 360 simulando disparo de intervenção.

### Como rodar o protótipo:
No terminal, dentro deste repositório, rode:
```bash
cd api
.\venv\Scripts\Activate.ps1
uvicorn main:app --reload --port 8000
```
Depois, abra o navegador em `http://localhost:8000`.

---

## 📁 4. Estrutura do Repositório (Onde cada coisa vive)

- `/api/`: Contém todo o código do Backend (FastAPI) e o ambiente virtual.
- `/api/static/`: Contém a interface visual (HTML, CSS e JS) do protótipo web.
- `/scratch/`: Scripts em Python utilizados para extrair estatísticas pesadas da base Excel (EDA).
- `/data/`: (Ignorada no git) Onde residem as bases pesadas da Vitru.
- `/docs/`: Documentações soltas e contextos anexos.
- `CLAUDE.md`: O arquivo mestre das convenções de colaboração do nosso time.

---

## 📚 Pesquisa Anterior
*Aviso do time original:* O documento `Hackathon Vitru 2026 - Pre-pesquisa.docx` (cerca de 18 págs, 137 citações, 35 fontes de 7 sistemas de ensino mundiais) é leitura obrigatória para entendimento aprofundado. Se o tempo for curto, foque na Tabela de Convergência no fim da seção 8.
