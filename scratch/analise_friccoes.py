import pandas as pd
import numpy as np

print("Carregando o dataset...")
df = pd.read_excel('data/dataset_aluno_predicted.xlsx')

print("Aplicando segmentação...")
# Grupo Ativos Sem Risco
df_ativos = df[(df['Y_PRED'] == 0) & (df['FL_EVADIU'] == 0) & (df['FL_INTENCIONOU_CANCELAMENTO'] == 0)]
# Grupo Evasão Silenciosa
df_silenciosos = df[(df['Y_PRED'] == 1) & (df['FL_EVADIU'] == 0) & (df['FL_INTENCIONOU_CANCELAMENTO'] == 0)]

print(f"Total Ativos Sem Risco: {len(df_ativos)}")
print(f"Total Evasão Silenciosa: {len(df_silenciosos)}")

metrics = {
    'Jornada de Entrada': [
        'QT_DIA_ATE_PRI_ACESSO',
        'FL_ENTRADA_TARDIA'
    ],
    'Ambientacao': [
        'FL_ALUNO_SEM_ESPACO_CALOURO',
        'FL_FEZ_QUEST_ESPACO_CALOURO',
        'FL_FEZ_QUEST_CONHECA_EAD',
        'FL_ACESSOU_CONHECA_EAD'
    ],
    'Uso do AVA': [
        'QT_DIA_ACESSO_TOTAL',
        'QT_ACESSO_AVA_SEMANA_ENTREGA_ATV'
    ],
    'Friccao Academica': [
        'PC_DISC_APROV',
        'PC_ATIVIDADE_ENTREGUE',
        'QT_ATV_ENTREGUE',
        'PC_CONCLUSAO_CURSO'
    ],
    'Friccao Financeira': [
        'PC_ENGAJAMENTO_FINANCEIRO',
        'PC_RENEGOCIACAO'
    ]
}

print("\n--- ANÁLISE COMPARATIVA ---")

for eixo, cols in metrics.items():
    print(f"\n[{eixo.upper()}]")
    for col in cols:
        if col in df.columns:
            mean_ativo = df_ativos[col].mean()
            mean_silencioso = df_silenciosos[col].mean()
            
            # Formatação baseada no tipo de variável
            if 'FL_' in col:
                val_ativo = f"{mean_ativo * 100:.2f}%"
                val_silencioso = f"{mean_silencioso * 100:.2f}%"
                diff = (mean_silencioso - mean_ativo) * 100
                diff_str = f"{diff:+.2f} pp"
            elif 'PC_' in col:
                val_ativo = f"{mean_ativo * 100:.2f}%"
                val_silencioso = f"{mean_silencioso * 100:.2f}%"
                diff = (mean_silencioso - mean_ativo) * 100
                diff_str = f"{diff:+.2f} pp"
            else:
                val_ativo = f"{mean_ativo:.2f}"
                val_silencioso = f"{mean_silencioso:.2f}"
                diff = mean_silencioso - mean_ativo
                diff_str = f"{diff:+.2f} abs"
                
            print(f" > {col}:")
            print(f"    Ativos     : {val_ativo}")
            print(f"    Silenciosos: {val_silencioso}")
            print(f"    Diferença  : {diff_str}")
        else:
            print(f" > {col}: LACUNA DE DADOS (Não encontrado no dataset)")
