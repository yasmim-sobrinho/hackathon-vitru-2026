import pandas as pd
import json

df = pd.read_excel('data/dataset_aluno_predicted.xlsx')

total_alunos = len(df)

# Classificação das 4 faixas
mask_evasao_formal = (df['FL_EVADIU'] == 1)
mask_intencao_formal = (df['FL_INTENCIONOU_CANCELAMENTO'] == 1) & (df['FL_EVADIU'] == 0)
mask_silenciosa = (df['Y_PRED'] == 1) & (df['FL_EVADIU'] == 0) & (df['FL_INTENCIONOU_CANCELAMENTO'] == 0)
mask_ativo_sem_risco = (df['Y_PRED'] == 0) & (df['FL_EVADIU'] == 0) & (df['FL_INTENCIONOU_CANCELAMENTO'] == 0)

# Volume
vol_formal = mask_evasao_formal.sum()
vol_intencao = mask_intencao_formal.sum()
vol_silenciosa = mask_silenciosa.sum()
vol_ativo = mask_ativo_sem_risco.sum()

# Quebra por TP_ALUNO
tp_aluno_counts = df.groupby(
    ['TP_ALUNO', pd.Series(
        ['Evasao Formal']*vol_formal + ['Intencao Formal']*vol_intencao + ['Silenciosa']*vol_silenciosa + ['Ativo']*vol_ativo,
        index=df[mask_evasao_formal].index.tolist() + df[mask_intencao_formal].index.tolist() + df[mask_silenciosa].index.tolist() + df[mask_ativo_sem_risco].index.tolist()
    )]
).size().unstack(fill_value=0).to_dict()

# We need a safer grouping method
def categorize(row):
    if row['FL_EVADIU'] == 1:
        return 'Evasão Formal'
    elif row['FL_INTENCIONOU_CANCELAMENTO'] == 1 and row['FL_EVADIU'] == 0:
        return 'Intenção Formal'
    elif row['Y_PRED'] == 1 and row['FL_EVADIU'] == 0 and row['FL_INTENCIONOU_CANCELAMENTO'] == 0:
        return 'Evasão Silenciosa Potencial'
    elif row['Y_PRED'] == 0 and row['FL_EVADIU'] == 0 and row['FL_INTENCIONOU_CANCELAMENTO'] == 0:
        return 'Ativo Sem Risco'
    else:
        return 'Outros'

df['CATEGORIA'] = df.apply(categorize, axis=1)

# 1. Volume e percentual
vol = df['CATEGORIA'].value_counts()
pct = (df['CATEGORIA'].value_counts(normalize=True) * 100).round(2)
resumo_1 = {k: {"volume": int(v), "percentual": float(pct[k])} for k, v in vol.items()}

# 2. Quebra por TP_ALUNO
resumo_2 = df.groupby('CATEGORIA')['TP_ALUNO'].value_counts().unstack(fill_value=0).to_dict('index')

# 3. Quebra por NM_CLUSTER_PROBA
resumo_3 = df.groupby('CATEGORIA')['NM_CLUSTER_PROBA'].value_counts().unstack(fill_value=0).to_dict('index')

# Foco na Silenciosa
df_sil = df[df['CATEGORIA'] == 'Evasão Silenciosa Potencial']

# 4. Top 10 DS_MOTIVO_DETRATOR_1
top_10_detrator_1 = df_sil['DS_MOTIVO_DETRATOR_1'].value_counts().head(10).to_dict()

# 5. Top 10 combinações de 1, 2 e 3
df_sil_comb = df_sil.copy()
df_sil_comb['COMBINACAO'] = df_sil_comb['DS_MOTIVO_DETRATOR_1'].astype(str) + " + " + df_sil_comb['DS_MOTIVO_DETRATOR_2'].astype(str) + " + " + df_sil_comb['DS_MOTIVO_DETRATOR_3'].astype(str)
top_10_comb = df_sil_comb['COMBINACAO'].value_counts().head(10).to_dict()

# 6. Comparação Calouros vs Veteranos (Silenciosa)
top_calouro = df_sil[df_sil['TP_ALUNO'] == 'CALOURO']['DS_MOTIVO_DETRATOR_1'].value_counts().head(5).to_dict()
top_veterano = df_sil[df_sil['TP_ALUNO'] == 'VETERANO']['DS_MOTIVO_DETRATOR_1'].value_counts().head(5).to_dict()

out = {
    "1_Volume_Percentual": resumo_1,
    "2_Quebra_TP_ALUNO": {str(k): {str(k2): int(v2) for k2, v2 in v.items()} for k, v in resumo_2.items()},
    "3_Quebra_CLUSTER": {str(k): {str(k2): int(v2) for k2, v2 in v.items()} for k, v in resumo_3.items()},
    "4_Top10_Detrator1_Silenciosa": {k: int(v) for k,v in top_10_detrator_1.items()},
    "5_Top10_Combinacoes": {k: int(v) for k,v in top_10_comb.items()},
    "6_Comparacao_CV": {
        "CALOURO": {k: int(v) for k,v in top_calouro.items()},
        "VETERANO": {k: int(v) for k,v in top_veterano.items()}
    }
}

with open('scratch/eda_v2_results.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=4)
