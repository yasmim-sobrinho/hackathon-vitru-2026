import pandas as pd

# Carregar dados
df = pd.read_excel('data/dataset_aluno_predicted.xlsx')

print("=== TOTAL DE ALUNOS:", len(df))
print("=== ALUNOS QUE EVADIRAM:", df['FL_EVADIU'].sum())
print("=== ALUNOS DE ALTO RISCO (Y_PRED=1):", df['Y_PRED'].sum())

# Analisar principais motivos detratores (causas de risco/evasão)
print("\n=== TOP 10 MOTIVOS DETRATORES 1 (Geral):")
print(df['DS_MOTIVO_DETRATOR_1'].value_counts().head(10))

print("\n=== TOP 10 MOTIVOS DETRATORES 1 (Apenas para quem Evadiu):")
evadidos = df[df['FL_EVADIU'] == 1]
print(evadidos['DS_MOTIVO_DETRATOR_1'].value_counts().head(10))

print("\n=== TOP 10 MOTIVOS DETRATORES 1 (Alto Risco Y_PRED=1):")
alto_risco = df[df['Y_PRED'] == 1]
print(alto_risco['DS_MOTIVO_DETRATOR_1'].value_counts().head(10))
