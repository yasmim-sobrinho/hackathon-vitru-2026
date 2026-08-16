from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from typing import List, Optional
from pydantic import BaseModel

app = FastAPI(title="Motor de Intervenção Inteligente - Vitru 2026")

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files for the frontend
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def serve_frontend():
    return FileResponse("static/index.html")

class Case(BaseModel):
    id: str
    nome: str
    tp_aluno: str
    curso: str
    polo: str
    cluster_proba: str
    risco_percentual: float
    assinatura_primaria: str
    diagnostico_ia: str
    intervencao_recomendada: str
    impacto_esperado: List[str]
    detalhes: dict

MOCK_CASES = [
    {
        "id": "1",
        "nome": "João Silva (Calouro)",
        "tp_aluno": "CALOURO",
        "curso": "EGRAD_PED",
        "polo": "Polo São Paulo - Centro",
        "cluster_proba": "( 80-90 )",
        "risco_percentual": 87.5,
        "assinatura_primaria": "Queda abrupta na % Entrega de Atividades",
        "diagnostico_ia": "Falta de organização e adaptação ao método EAD. O aluno não entregou atividades iniciais e reduziu o acesso ao ambiente de aprendizagem.",
        "intervencao_recomendada": "Apoiar a retomada da jornada acadêmica através de uma trilha de orientação rápida e acompanhamento inicial.",
        "impacto_esperado": [
            "Retorno ao AVA",
            "Entrega da primeira atividade",
            "Recuperação do vínculo acadêmico"
        ],
        "detalhes": {
            "% Entrega de atividades": "0%",
            "Qtde de acesso AVA semana entrega": "1",
            "NPS / Experiência": "Lacuna identificada: o modelo atual não possui dados de atendimento, satisfação ou experiência do aluno."
        }
    },
    {
        "id": "2",
        "nome": "Maria Souza (Veterano)",
        "tp_aluno": "VETERANO",
        "curso": "EGRAD_ADM",
        "polo": "Polo Rio de Janeiro - Botafogo",
        "cluster_proba": "( 70-80 )",
        "risco_percentual": 74.2,
        "assinatura_primaria": "Reprovações severas no Mód. Anterior",
        "diagnostico_ia": "Sobrecarga e fadiga acadêmica. A aluna acumulou disciplinas pendentes e apresenta risco de desistência por desmotivação.",
        "intervencao_recomendada": "Propor readequação da grade curricular para aliviar a carga do semestre, focando na aprovação de disciplinas estruturantes.",
        "impacto_esperado": [
            "Aceitação do plano de readequação de grade",
            "Aprovação nas disciplinas matriculadas",
            "Prevenção do trancamento do curso"
        ],
        "detalhes": {
            "% Aprovação em disciplinas": "25%",
            "% Andamento do curso": "Lento",
            "NPS / Experiência": "Lacuna identificada: o modelo atual não possui dados de atendimento, satisfação ou experiência do aluno."
        }
    },
    {
        "id": "3",
        "nome": "Lucas Fernandes (Financeiro)",
        "tp_aluno": "VETERANO",
        "curso": "EGRAD_ENG",
        "polo": "Polo Belo Horizonte",
        "cluster_proba": "( 80-90 )",
        "risco_percentual": 82.0,
        "assinatura_primaria": "Atraso em 2 mensalidades consecutivas",
        "diagnostico_ia": "Vulnerabilidade financeira pontual. O aluno mantém acessos e bom rendimento acadêmico, mas corre risco de cancelamento por bloqueio financeiro.",
        "intervencao_recomendada": "Apresentar plano de parcelamento flexível e renegociação consultiva de débitos antes do fechamento do ciclo de rematrícula.",
        "impacto_esperado": [
            "Adesão ao acordo financeiro",
            "Continuidade de acesso sem restrições",
            "Confirmação de rematrícula no próximo ciclo"
        ],
        "detalhes": {
            "Dias de atraso financeiro": "34 dias",
            "Média notas AVA": "8.4 (Alto desempenho)",
            "NPS / Experiência": "Lacuna identificada: o modelo atual não possui dados de atendimento, satisfação ou experiência do aluno."
        }
    },
    {
        "id": "4",
        "nome": "Camila Santos (Acadêmico)",
        "tp_aluno": "CALOURO",
        "curso": "EGRAD_TI",
        "polo": "Polo Curitiba",
        "cluster_proba": "( 60-70 )",
        "risco_percentual": 68.5,
        "assinatura_primaria": "Desengajamento e Dificuldade Técnica",
        "diagnostico_ia": "Fricção no ambiente digital e barreira de conteúdo. A aluna acessou o portal poucas vezes e não concluiu as videoaulas das disciplinas base.",
        "intervencao_recomendada": "Conectar com monitor acadêmico para tutoria de nivelamento e verificação de suporte técnico na plataforma.",
        "impacto_esperado": [
            "Conclusão do módulo de introdução",
            "Aumento na frequência semanal de login",
            "Participação na primeira monitoria online"
        ],
        "detalhes": {
            "Qtde dias até primeiro acesso": "28 dias",
            "Visualização de videoaulas": "15%",
            "NPS / Experiência": "Lacuna identificada: o modelo atual não possui dados de atendimento, satisfação ou experiência do aluno."
        }
    }
]

@app.get("/cases", response_model=List[Case])
def get_cases():
    """Retorna os casos ordenados por prioridade/risco de Evasão Silenciosa."""
    return sorted(MOCK_CASES, key=lambda x: x['risco_percentual'], reverse=True)

@app.get("/cases/{case_id}", response_model=Case)
def get_case(case_id: str):
    """Retorna o detalhe de um caso específico."""
    for c in MOCK_CASES:
        if c["id"] == case_id:
            return c
    return None
