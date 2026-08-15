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
    detalhes: dict

MOCK_CASES = [
    {
        "id": "1",
        "nome": "João Silva",
        "tp_aluno": "CALOURO",
        "curso": "EGRAD_PED",
        "polo": "Polo São Paulo",
        "cluster_proba": "( 80-90 )",
        "risco_percentual": 87.5,
        "assinatura_primaria": "Queda abrupta na % Entrega de Atividades",
        "diagnostico_ia": "Falsa largada / Falta de organização e método EAD. Aluno não entregou as primeiras atividades e reduziu acesso ao AVA. Dor primária: Acadêmica.",
        "intervencao_recomendada": "Disparar 'Trilha de Retomada Guiada' via WhatsApp (Guia de sobrevivência EAD de 5 min).",
        "detalhes": {
            "% Entrega de atividades": "0%",
            "Qtde de acesso AVA semana entrega": "1",
            "NPS / Tickets": "Lacuna - Sem histórico"
        }
    },
    {
        "id": "2",
        "nome": "Maria Souza",
        "tp_aluno": "VETERANO",
        "curso": "EGRAD_ADM",
        "polo": "Polo Rio de Janeiro",
        "cluster_proba": "( 70-80 )",
        "risco_percentual": 74.2,
        "assinatura_primaria": "Reprovações severas no Mód. Anterior",
        "diagnostico_ia": "Fadiga Acadêmica. Aluno veterano não conseguiu acompanhar a carga devido a reprovações passadas. Risco de abandono por dívida acadêmica.",
        "intervencao_recomendada": "Sugerir 'Plano de Redução de Carga' (Remontagem de grade para salvar o semestre e manter vínculo).",
        "detalhes": {
            "% Aprovação em disciplinas": "25%",
            "% Andamento do curso": "Lento",
            "NPS / Tickets": "Lacuna - Sem histórico"
        }
    },
    {
        "id": "3",
        "nome": "Carlos Mendes",
        "tp_aluno": "CALOURO",
        "curso": "EGRAD_EDU",
        "polo": "Polo Curitiba",
        "cluster_proba": "( 50-60 )",
        "risco_percentual": 58.0,
        "assinatura_primaria": "Despenca Dias de Acesso ao AVA",
        "diagnostico_ia": "Desengajamento Digital. Aluno mal consegue acessar o portal. Possível fricção técnica ou desconhecimento da interface.",
        "intervencao_recomendada": "Transbordo para Monitoria de Polo. Ligar oferecendo onboarding guiado de 10 minutos.",
        "detalhes": {
            "Qtde dias até primeiro acesso": "40",
            "Qtde total de dias acesso AVA": "2",
            "NPS / Tickets": "Lacuna - Sem histórico"
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
