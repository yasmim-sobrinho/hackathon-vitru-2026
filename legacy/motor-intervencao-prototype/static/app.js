// Initialize Icons
lucide.createIcons();

const casesListEl = document.getElementById('cases-list');
const caseDetailEl = document.getElementById('case-detail');
let cases = [];
let currentCaseIndex = -1;

async function fetchCases() {
    try {
        const response = await fetch('/cases');
        cases = await response.json();
        renderCases();
        // Auto-select first case on load
        if (cases.length > 0) {
            currentCaseIndex = 0;
            const firstCard = document.querySelector('.case-card');
            if (firstCard) {
                renderDetail(cases[0], firstCard);
            }
        }
    } catch (error) {
        casesListEl.innerHTML = `<div class="loading text-danger">Erro ao carregar casos da API. Certifique-se que o backend FastAPI está rodando.</div>`;
    }
}

window.nextCase = function() {
    if (cases.length === 0) return;
    currentCaseIndex = (currentCaseIndex + 1) % cases.length;
    const c = cases[currentCaseIndex];
    const cards = document.querySelectorAll('.case-card');
    if (cards[currentCaseIndex]) {
        renderDetail(c, cards[currentCaseIndex]);
        cards[currentCaseIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};

function renderCases() {
    casesListEl.innerHTML = '';
    cases.forEach((c, index) => {
        const div = document.createElement('div');
        div.className = `case-card ${index === currentCaseIndex ? 'active' : ''}`;
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
                <i data-lucide="activity" style="width:16px; height:16px;"></i>
                Prioridade de Intervenção: Alta
            </div>
        `;
        casesListEl.appendChild(div);
    });
    // Re-init icons in new HTML
    lucide.createIcons();
}

function renderDetail(c, cardEl) {
    // Update active state
    currentCaseIndex = cases.findIndex(x => x.id === c.id);
    document.querySelectorAll('.case-card').forEach(el => el.classList.remove('active'));
    if (cardEl) {
        cardEl.classList.add('active');
    }

    const metricsHtml = Object.entries(c.detalhes).map(([key, val]) => {
        const isGap = typeof val === 'string' && val.includes('Lacuna identificada');
        const displayVal = isGap ? "Lacuna Estratégica: o modelo atual identifica comportamento de risco, mas não possui dados de experiência, satisfação ou atendimento." : val;
        return `
            <div class="metric-item ${isGap ? 'metric-gap' : ''}">
                <div class="metric-label">${key}</div>
                <div class="metric-val ${isGap ? 'text-warning' : ''}">${displayVal}</div>
            </div>
        `;
    }).join('');

    const impactListHtml = Array.isArray(c.impacto_esperado) 
        ? c.impacto_esperado.map(i => `<li><i data-lucide="check" style="width:14px; height:14px; color: var(--success); margin-right: 6px; vertical-align: middle;"></i>${i}</li>`).join('')
        : '';

    caseDetailEl.innerHTML = `
        <div class="detail-content">
            <div class="detail-header">
                <div>
                    <h2>${c.nome}</h2>
                    <div class="detail-tags">
                        <span class="badge ${c.tp_aluno === 'CALOURO' ? 'calouro' : 'veterano'}">${c.tp_aluno}</span>
                        <span class="badge">${c.curso}</span>
                        <span class="badge">${c.polo}</span>
                        <span class="badge badge-recovery">Prioridade: Alta</span>
                    </div>
                </div>
            </div>

            <div class="diag-box">
                <h4><i data-lucide="brain-circuit"></i> Necessidade Identificada</h4>
                <p>${c.diagnostico_ia}</p>
            </div>

            <div class="action-box">
                <h4><i data-lucide="sparkles"></i> Próxima Melhor Ação (Orientada ao Sucesso)</h4>
                <p style="font-size: 1.05rem; line-height: 1.5;">${c.intervencao_recomendada}</p>
                
                <div class="impact-section">
                    <strong class="impact-title"><i data-lucide="target" style="width:15px; height:15px; vertical-align:middle;"></i> Impacto Esperado da Intervenção:</strong>
                    <ul class="impact-list">
                        ${impactListHtml}
                    </ul>
                </div>
            </div>

            <div style="margin-top: 8px;">
                <h3 style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Sinais Interceptados & Contexto</h3>
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
