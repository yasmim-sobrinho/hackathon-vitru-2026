/**
 * Rodapé do site. Estrutura em grupos de links, como o site real
 * (Institucional, EAD, Cursos populares, Áreas de interesse).
 */

const FOOTER_GROUPS: { title: string; links: string[] }[] = [
  {
    title: 'Institucional',
    links: ['Sobre a UniCesumar', 'Trabalhe conosco', 'Ouvidoria', 'Blog'],
  },
  {
    title: 'Educação a Distância',
    links: ['Graduação EAD', 'Pós-graduação EAD', 'Encontre um polo', 'Studeo'],
  },
  {
    title: 'Cursos populares',
    links: ['Administração', 'Ciências Contábeis', 'Pedagogia', 'Direito'],
  },
  {
    title: 'Para o aluno',
    links: [
      'Calendário acadêmico',
      'Portal do aluno',
      'Espaço Calouro',
      'Mapa do site',
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-uni-navy-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-uni-yellow">
                {group.title}
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#footer" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>
            Protótipo construído para o Hackathon Vitru 2026. Réplica de
            interface para fins de demonstração — não é o site oficial da
            UniCesumar.
          </p>
        </div>
      </div>
    </footer>
  );
}
