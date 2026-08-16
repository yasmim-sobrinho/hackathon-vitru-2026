# Auditoria do repositório

Executada em 15/08/2026, antes de qualquer alteração, no kickoff da Jornada de
Ingresso.

## Estado encontrado

| Item | Valor |
| --- | --- |
| Branch | `main`, sincronizada com `origin/main` |
| Remote | `https://github.com/yasmim-sobrinho/hackathon-vitru-2026` |
| Último commit | `edd950e` — docs: adiciona transcricao da mentoria com a diretoria |
| Commits no histórico | 10 |
| Working tree | Limpo, exceto `Vitru_Jornada_Ingresso_Alinhamento_Mestre.md` não rastreado |
| Arquivos rastreados | 33 |

O repositório era, na prática, **um repositório de pesquisa e documentação** com
um protótipo Python anexo. Não existia projeto de aplicação estruturado.

### Ausências relevantes

- Nenhum `package.json`. Nenhum projeto frontend.
- Nenhum `sfdx-project.json`. Nenhum código ou metadata Salesforce.
- Nenhum diretório `.kiro/`. Sem steering, sem configuração de MCP.
- Diretórios `web/` e `logic/` existiam vazios, apenas com `.gitkeep`.

## Tecnologias identificadas

| Tecnologia | Onde | Situação |
| --- | --- | --- |
| Python 3.13 + FastAPI | `api/main.py` | Protótipo "Motor de Intervenção" funcional |
| HTML/CSS/JS vanilla | `api/static/` | GUI do protótipo, sem build step |
| Python (pandas/EDA) | `scratch/*.py` | Scripts de análise da base de evasão |
| Markdown | `docs/` | Pesquisa, análises e materiais oficiais |

### Ambiente da máquina

| Ferramenta | Antes | Depois |
| --- | --- | --- |
| Node | v22.19.0 | v22.19.0 |
| npm | 10.9.3 | 10.9.3 |
| Python | 3.13.7 | 3.13.7 |
| Git | 2.51.0 | 2.51.0 |
| Salesforce CLI | **Ausente** | **2.147.7** (instalado no kickoff) |

O `sf` não era reconhecido no PowerShell. Foi instalado via
`npm install -g @salesforce/cli`. Os comandos `sf agent` (Agentforce DX) estão
disponíveis: `generate`, `validate`, `preview`, `publish`, `test`, `adl`, `trace`.

`sf org list` retornou **No Orgs found** — nenhuma org autorizada.

## Dívida técnica encontrada

1. **Tese do produto divergente.** `CLAUDE.md` e o `README.md` antigos descreviam
   um produto diferente: um "Motor de Intervenção" com console para consultores,
   priorização por score de risco e a instrução explícita de *não* construir
   chatbot para o aluno. Isso conflita frontalmente com a direção atual
   (dois agentes conversacionais, fluxo por evento em vez de score).
   Conflito registrado em `docs/decisions/open-questions.md`.
2. **Nomenclatura inconsistente.** Nomes de arquivo misturavam `snake_case`,
   espaços e acentuação, o que atrapalha CLI e scripts no Windows.
3. **Organização de docs plana.** Fonte oficial, transcrição, pesquisa e
   hipótese ficavam no mesmo nível, sem hierarquia de confiança.
4. **Protótipo sem testes e sem contratos.** O FastAPI servia HTML e lógica no
   mesmo módulo, sem camada de integração.
5. **Diretórios vazios** (`web/`, `logic/`) sinalizando intenção sem estrutura.

## Partes reutilizáveis — preservadas

| Item | Destino | Por quê |
| --- | --- | --- |
| Alinhamento mestre da Jornada de Ingresso | `docs/source/time/` | Fonte de verdade do produto atual |
| Transcrição da mentoria | `docs/source/time/` | Fala direta de diretores/mentores |
| PDFs oficiais do desafio Vitru | `docs/source/vitru-oficial/` | Documentação oficial |
| Contexto do hackathon | `docs/source/vitru-oficial/` | Consolidação das dores e critérios |
| Análise de fricções da jornada | `docs/research/` | Insumo para desenhar os fluxos |
| Memória de cálculo da evasão | `docs/research/` | Fundamento do pitch |
| Estratégia de pitch 5min | `docs/research/` | Reaproveitável na apresentação |
| Síntese estratégica | `docs/research/` | Análise de posicionamento |
| Pré-pesquisa (docx) | `docs/research/` | Pesquisa do time |
| Visão e arquitetura (docx) | `docs/source/time/` | Decisão do time |
| Assets de pitch | `docs/assets/` | Mantidos no lugar |

## Partes descartáveis — arquivadas, não apagadas

Movidas para `legacy/`, fora do caminho da nova arquitetura:

| Item | Destino |
| --- | --- |
| Protótipo FastAPI + GUI | `legacy/motor-intervencao-prototype/` |
| Scripts de EDA | `legacy/eda-scripts/` |
| `CLAUDE.md` antigo | `legacy/CLAUDE-motor-intervencao.md` |
| `README.md` antigo | `legacy/README-motor-intervencao.md` |

Diretórios vazios `web/`, `logic/`, `antigravity_insights/` e `docs/referencias/`
foram removidos após os arquivos serem movidos.

## Decisão de rebuild

**Rebuild da arquitetura e da implementação. Preservação integral do histórico e
da documentação.**

Justificativa: o protótipo anterior implementava uma tese de produto diferente
(console reativo de intervenção baseado em score) da tese atual (jornada de
ingresso com dois agentes, orientada a evento). Adaptá-lo custaria mais que
recomeçar, e a nova arquitetura precisa nascer com a camada de adapter para
Agentforce desde o início.

Nada foi destruído:

- Tag de backup: `backup/motor-intervencao-pre-kickoff`
- Branch de trabalho: `hackathon/jornada-ingresso`
- Todos os movimentos feitos com `git mv`, preservando histórico de rename
- `main` intocada

## Riscos e observações

- **Nenhuma org Salesforce autorizada.** Bloqueia MCP, geração de authoring
  bundle, inspeção de metadata e mapeamento dos agentes existentes da Vitru.
- **`.kiro/settings/mcp.json` não pôde ser escrito** por regra de permissão do
  workspace. Conteúdo documentado no README para aplicação manual.
- **Não sabemos quais agentes já existem no org da Vitru.** Antes de qualquer
  deploy, listar e confirmar ausência de colisão de nomes.
- A base de dados da Vitru continua fora do repositório (`/data` no
  `.gitignore`). Correto — manter assim.
