// Initialize Icons
lucide.createIcons();

const casesListEl = document.getElementById('cases-list');
const caseDetailEl = document.getElementById('case-detail');
let cases = [];

async function fetchCases() {
    try {
        const response = await fetch('/cases');
        cases = await response.json();
        renderCases();
    } catch (error) {
        casesListEl.innerHTML = `<div class="loading text-danger">Erro ao carregar casos da API. Certifique-se que o Uvicorn está rodando.</div>`;
    }
}

function renderCases() {
    casesListEl.innerHTML = '';
    cases.forEach(c => {
        const div = document.createElement('div');
        div.className = 'case-card';
        div.onclick = () => renderDetail(c, div);
        
        const isCalouro = c.tp_aluno === 'CALOURO';
        const badgeClass = isCalouro ? 'calouro' : 'veterano';

        div.innerHTML = `
            <div class="case-header">
                <span class="student-name">${c.nome}</span>
                <span class="badge ${badgeClass}">${c.tp_aluno}</span>
            </div>
            <div class="case-signature">
                <i data-lucide="alert-circle" style="width:14px; height:14px; display:inline-block; vertical-align:middle;"></i>
                ${c.assinatura_primaria}
            </div>
            <div class="case-risk">
                <i data-lucide="trending-down" style="width:16px; height:16px;"></i>
                Risco de Evasão Silenciosa: ${c.risco_percentual}%
            </div>
        `;
        casesListEl.appendChild(div);
    });
    // Re-init icons in new HTML
    lucide.createIcons();
}

function renderDetail(c, cardEl) {
    // Update active state
    document.querySelectorAll('.case-card').forEach(el => el.classList.remove('active'));
    cardEl.classList.add('active');

    const metricsHtml = Object.entries(c.detalhes).map(([key, val]) => `
        <div class="metric-item">
            <div class="metric-label">${key}</div>
            <div class="metric-val ${val.includes('Lacuna') ? 'text-warning' : ''}">${val}</div>
        </div>
    `).join('');

    caseDetailEl.innerHTML = `
        <div class="detail-content">
            <div class="detail-header">
                <h2>${c.nome}</h2>
                <div class="detail-tags">
                    <span class="badge ${c.tp_aluno === 'CALOURO' ? 'calouro' : 'veterano'}">${c.tp_aluno}</span>
                    <span class="badge">${c.curso}</span>
                    <span class="badge">${c.polo}</span>
                </div>
            </div>

            <div class="diag-box">
                <h4><i data-lucide="brain-circuit"></i> Diagnóstico Preditivo (Motor Vitru IA)</h4>
                <p>${c.diagnostico_ia}</p>
            </div>

            <div class="action-box">
                <h4><i data-lucide="sparkles"></i> Próxima Melhor Ação (Recomendação)</h4>
                <p>${c.intervencao_recomendada}</p>
                <button class="action-btn" onclick="alert('Ação disparada com sucesso para orquestrador/Salesforce!')">
                    <i data-lucide="send"></i> Disparar Intervenção
                </button>
            </div>

            <div style="margin-top: 16px;">
                <h3 style="font-size: 1rem; color: var(--text-muted); margin-bottom: 12px;">Sinais Interceptados</h3>
                <div class="metrics-grid">
                    ${metricsHtml}
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// Init
fetchCases();
