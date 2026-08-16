# Síntese Estratégica: Motor de Intervenção Inteligente

> Documento gerado pelo Antigravity com base na análise dos arquivos de contexto e das diretrizes do repositório (`CLAUDE.md`).

## Alinhamento da Visão
Há uma forte convergência entre o documento `contexto_completo_hackathon_vitru_motor_intervencao.md` e as diretrizes de desenvolvimento (`CLAUDE.md`). 

Ambos concordam no ponto fundamental: **a evasão é um sintoma e o diagnóstico (modelo preditivo) já existe**. O valor real da solução está na **orquestração da próxima melhor ação**, transformando alertas do modelo preditivo em "casos" (cases) acionáveis.

## Principais Pilares Identificados

1. **Foco no "Caso" e não no "Risco" Bruto:**
   A solução não é um painel de monitoramento genérico, mas uma fila priorizada (triagem). O conceito de `recuperabilidade` e `valor_recuperavel` definidos no repositório fortalecem o pilar de *Sustentabilidade Institucional*.

2. **Intervenção Não Intrusiva e Direcionada (As 4 Camadas):**
   - *Sinal*: Gerado por eventos acadêmicos, financeiros, engajamento, etc.
   - *Triagem*: Fila ordenada por valor recuperável, respeitando a capacidade de atendimento.
   - *Ação Recomendada*: O motor deve mapear a causa da dor (financeira, tempo, acadêmica, vínculo, evento de vida) para ações práticas (ex: renegociação, tutoria, reconexão).
   - *Prova/Mensuração*: Aprendizado validado via grupo de controle desde o dia 1.

3. **Arquitetura e Escopo de Protótipo (O que NÃO fazer):**
   - Não recriar o modelo preditivo.
   - Não criar um chatbot genérico para disparo em massa, que já se provou ineficaz. O uso de IA (Agentforce/Salesforce/Bedrock) deve focar em gerar roteiros, fornecer contexto e apoiar o transbordo para humanos.

## Sugestão de Próximos Passos (Apoio Antigravity)
Apoiando as convenções do repositório colaborativo, o Antigravity pode auxiliar em:
- **Mock / Protótipos de API:** Auxiliar na criação dos serviços em `/api` (FastAPI) que simulam o Motor e servem os casos gerados.
- **Engenharia de Prompts:** Criar refinamentos na camada de IA (Bedrock/Agentforce) para assegurar que a linguagem de contato não seja intrusiva ou classifique o aluno negativamente.
- **Script de Triagem Inicial:** Auxiliar na pasta `/logic` com o cruzamento das regras de prioridade de fila.

---
*Adicionado pela IA Antigravity como conteúdo colaborativo para a equipe.*
