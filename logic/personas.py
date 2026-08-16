# -*- coding: utf-8 -*-
"""
Segmentacao de alunos do Hackathon Vitru 2026.

Dois eixos independentes:
  ESTADO  - onde o aluno esta na jornada (mutuamente exclusivo)
  FLAGS   - sinalizadores que cortam todos os estados

ATENCAO sobre idade: QT_IDADE_ALUNO e a idade NO INGRESSO, nao a de hoje.
Verificado pela correlacao de +0.442 entre ano de ingresso e idade media; se
fosse idade atual seria fortemente negativa. A funcao classificar() cria
`idade_hoje` estimada somando os anos de casa, e limpa os valores impossiveis
(minimo 0 e maximo 207 na coluna crua).

Uso:
    from personas import carregar, classificar, resumo
    df = classificar(carregar())
    print(resumo(df))
"""
import os
import numpy as np
import pandas as pd

DATA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data")
CSV = os.path.join(DATA, "dataset_aluno_20260807.csv")
TICKET_MENSAL = 285.20          # ticket medio EAD divulgado pela Vitru em 2025
MODULO_ATUAL = (2026, 53)       # retrato de 07/08/2026


def carregar(caminho: str = CSV) -> pd.DataFrame:
    df = pd.read_csv(caminho, low_memory=False)
    m = df.CD_MODULO_INGRESSO.astype(str)
    df["ano_ingresso"] = pd.to_numeric(m.str.slice(0, 4), errors="coerce")
    df["seq_ingresso"] = pd.to_numeric(m.str.slice(5), errors="coerce").clip(51, 54)
    # trimestres decorridos entre o ingresso e o retrato
    df["trim_casa"] = ((MODULO_ATUAL[0] - df.ano_ingresso) * 4
                       + (MODULO_ATUAL[1] - df.seq_ingresso))
    df["modalidade"] = df.CD_CURSO.astype(str).str.split("_").str[0]

    # idade: a coluna crua e a idade NO INGRESSO e tem lixo (min 0, max 207)
    idade = df.QT_IDADE_ALUNO.where(df.QT_IDADE_ALUNO.between(15, 90))
    df["idade_ingresso"] = idade
    df["idade_hoje"] = idade + (df.trim_casa / 4).clip(lower=0)
    df["fx_idade_hoje"] = pd.cut(
        df.idade_hoje, [0, 21, 25, 30, 35, 40, 45, 50, 120],
        labels=["ate 21", "22-25", "26-30", "31-35", "36-40", "41-45", "46-50", "51+"])
    return df


def classificar(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    acessa = df.QT_DIA_ACESSO_TOTAL > 0
    paga_dia = df.PC_ENGAJAMENTO_FINANCEIRO >= 100
    paga_parcial = df.PC_ENGAJAMENTO_FINANCEIRO.between(1, 50)
    cursando = df.PC_DESEMP_MF > 0
    novo = df.trim_casa <= 0
    recente = df.trim_casa <= 4

    # ESTADO: primeira condicao verdadeira vence
    estado = np.select(
        [
            df.FL_EVADIU == 1,
            novo,
            recente & ~acessa,
            paga_parcial,
            (df.trim_casa >= 16) & ~cursando,
            paga_dia & ~acessa,
            ~paga_dia & ~acessa,
        ],
        [
            "9. Ja evadiu",
            "1. Calouro do trimestre",
            "2. Nunca comecou",
            "5. Aperto financeiro",
            "4. Pendurado",
            "3. Paga e sumiu",
            "6. Silencioso total",
        ],
        default="7. Em curso",
    )
    df["estado"] = estado

    # FLAGS: cortam qualquer estado
    df["fl_declarou"] = df.FL_INTENCIONOU_CANCELAMENTO == 1
    df["fl_sinalizado"] = df.Y_PRED == 1
    # ponto cego: risco academico real sem o modelo sinalizar
    df["fl_ponto_cego"] = (
        ~df.fl_sinalizado
        & (df.FL_EVADIU == 0)
        & (df.PC_DESEMP_MF < 60)
        & ~acessa
    )
    return df


def resumo(df: pd.DataFrame) -> pd.DataFrame:
    t = df.groupby("estado").agg(
        alunos=("ID_ALUNO", "size"),
        trim_casa=("trim_casa", "median"),
        idade_ingresso=("idade_ingresso", "median"),
        idade_hoje=("idade_hoje", "median"),
        conclusao=("PC_CONCLUSAO_CURSO", "median"),
        nota=("PC_DESEMP_MF", "median"),
        paga_100=("PC_ENGAJAMENTO_FINANCEIRO", lambda x: (x >= 100).mean() * 100),
        risco=("Y_PROBA_EVADIU", "mean"),
        sinalizado=("fl_sinalizado", lambda x: x.mean() * 100),
        declarou=("fl_declarou", lambda x: x.mean() * 100),
        ponto_cego=("fl_ponto_cego", lambda x: x.mean() * 100),
    )
    t["pc_base"] = (t.alunos / len(df) * 100)
    t["receita_mes_mi"] = t.alunos * TICKET_MENSAL / 1e6
    cols = ["alunos", "pc_base", "trim_casa", "idade_ingresso", "idade_hoje",
            "conclusao", "nota", "paga_100", "risco", "sinalizado", "declarou",
            "ponto_cego", "receita_mes_mi"]
    return t[cols].round(1).sort_index()


def fila_priorizada(df: pd.DataFrame, capacidade: int) -> pd.DataFrame:
    """Ordena por valor recuperavel, nao por risco bruto.

    O score nao e calibrado (Platt b = 0.44), entao ele serve para ordenar,
    nao para multiplicar por dinheiro. Usamos o posto dentro do estado.
    """
    d = df[df.FL_EVADIU == 0].copy()
    peso_estado = {
        "3. Paga e sumiu": 1.0,      # ponto cego do modelo, risco academico alto
        "2. Nunca comecou": 1.0,     # janela mais curta que existe
        "5. Aperto financeiro": 0.9,  # causa clara e acao pronta
        "4. Pendurado": 0.8,          # perto do diploma, alto valor simbolico
        "6. Silencioso total": 0.6,
        "1. Calouro do trimestre": 0.5,
        "7. Em curso": 0.2,
    }
    d["peso"] = d.estado.map(peso_estado).fillna(0.2)
    d["posto_risco"] = d.groupby("estado").Y_PROBA_EVADIU.rank(pct=True)
    d["prioridade"] = d.peso * d.posto_risco
    return d.nlargest(capacidade, "prioridade")


if __name__ == "__main__":
    df = classificar(carregar())
    print(resumo(df).to_string())
    print(f"\nTOTAL {len(df):,} alunos | "
          f"R$ {len(df) * TICKET_MENSAL / 1e6:.1f} mi/mes")
    print(f"\npontos cegos do modelo: {df.fl_ponto_cego.sum():,} alunos "
          f"({df.fl_ponto_cego.mean()*100:.1f}%) | "
          f"R$ {df.fl_ponto_cego.sum() * TICKET_MENSAL / 1e6:.1f} mi/mes")

    print("\n--- idade: no ingresso x estimada hoje ---")
    comp = pd.DataFrame({
        "no ingresso": df.idade_ingresso.value_counts(bins=[0,21,25,30,40,50,120],
                                                      normalize=True).sort_index(),
        "hoje (estimada)": df.idade_hoje.value_counts(bins=[0,21,25,30,40,50,120],
                                                      normalize=True).sort_index()})
    print((comp * 100).round(1).to_string())
    print(f"descartados por idade impossivel: "
          f"{int(df.idade_ingresso.isna().sum()):,} alunos")

    saida = os.path.join(DATA, "alunos_com_persona.csv")
    df[["ID_ALUNO", "estado", "fl_declarou", "fl_sinalizado", "fl_ponto_cego",
        "modalidade", "trim_casa", "idade_ingresso", "idade_hoje",
        "CD_POLO", "CD_CURSO", "Y_PROBA_EVADIU"]].to_csv(saida, index=False)
    print(f"\nexportado: {saida}")
