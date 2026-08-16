/**
 * Cabeçalho do site UniCesumar.
 *
 * Réplica da estrutura do site real: barra utilitária escura no topo
 * (central de atendimento + acesso do aluno), depois a barra da marca com
 * navegação principal. Cores e tipografia vêm dos tokens em index.css,
 * extraídos do CSS público do tema.
 */

const NAV_ITEMS = [
  'EAD e Semipresencial',
  'Presencial',
  'Medicina',
  'Pesquisa e Extensão',
  'Institucional',
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 shadow-sm">
      <div className="bg-uni-navy-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-2 text-xs">
          <a className="flex items-center gap-2 hover:underline" href="#atendimento">
            <span aria-hidden>📞</span> Central de Atendimento
          </a>
          <a className="flex items-center gap-2 hover:underline" href="#aluno">
            <span aria-hidden>👤</span> Acesso do Aluno
          </a>
        </div>
      </div>

      <div className="bg-uni-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-4">
          <a href="/" className="flex items-baseline gap-1 shrink-0">
            <span className="font-display text-2xl font-extrabold tracking-tight">
              Uni<span className="text-uni-yellow">Cesumar</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#nav"
                className="whitespace-nowrap transition hover:text-uni-yellow"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#inscreva-se"
            className="shrink-0 rounded-full bg-uni-yellow px-6 py-2.5 text-sm font-bold text-uni-navy-ink transition hover:brightness-95"
          >
            Inscreva-se
          </a>
        </div>
      </div>
    </header>
  );
}
