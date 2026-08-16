import pandas as pd
import json

df = pd.read_excel('data/dataset_aluno_predicted.xlsx')

# Lógica de Classificação
# Declarada: Já evadiu (FL_EVADIU=1) ou já demonstrou intenção formal (FL_INTENCIONOU_CANCELAMENTO=1)
df['TIPO_EVASAO'] = 'Ativo (Sem Risco)'
df.loc[(df['FL_EVADIU'] == 1) | (df['FL_INTENCIONOU_CANCELAMENTO'] == 1), 'TIPO_EVASAO'] = 'Declarada'

# Silenciosa: Modelo diz que vai evadir (Y_PRED=1), mas não tem intenção formal (FL_INTENCIONOU_CANCELAMENTO=0) e não evadiu ainda
df.loc[(df['Y_PRED'] == 1) & (df['FL_INTENCIONOU_CANCELAMENTO'] == 0) & (df['FL_EVADIU'] == 0), 'TIPO_EVASAO'] = 'Silenciosa'

# Resumo 1: Proporção e Volumes
resumo = df['TIPO_EVASAO'].value_counts().to_dict()

# Quebra por Calouro/Veterano na Silenciosa
silenciosa = df[df['TIPO_EVASAO'] == 'Silenciosa']
silenciosa_cv = silenciosa['TP_ALUNO'].value_counts().to_dict()

# Assinatura: Top motivos detratores na Silenciosa
calouros_sil = silenciosa[silenciosa['TP_ALUNO'] == 'CALOURO']
vet_sil = silenciosa[silenciosa['TP_ALUNO'] == 'VETERANO']

top_calouros = calouros_sil['DS_MOTIVO_DETRATOR_1'].value_counts().head(5).to_dict()
top_veteranos = vet_sil['DS_MOTIVO_DETRATOR_1'].value_counts().head(5).to_dict()

# Dimensionamento do Impacto
vol_silenciosa = len(silenciosa)
ticket_medio = 285.20 # Conforme CLAUDE.md
impacto_anual_receita = vol_silenciosa * ticket_medio * 12

out = {
    "Total_Base": len(df),
    "Evasao_Declarada": int(resumo.get('Declarada', 0)),
    "Evasao_Silenciosa": int(resumo.get('Silenciosa', 0)),
    "Silenciosa_Por_Perfil": {
        "Calouro": int(silenciosa_cv.get('CALOURO', 0)),
        "Veterano": int(silenciosa_cv.get('VETERANO', 0))
    },
    "Assinatura_Calouro": top_calouros,
    "Assinatura_Veterano": top_veteranos,
    "Impacto_Financeiro": {
        "Vidas_Em_Risco_Silencioso": int(vol_silenciosa),
        "Receita_Anual_Em_Risco": round(impacto_anual_receita, 2)
    }
}

with open('scratch/eda_results.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=4)

print("EDA concluída e salva em eda_results.json")
