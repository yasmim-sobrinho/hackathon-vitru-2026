import { NavLink, Outlet } from 'react-router-dom';
import { resolveAgentAdapter } from '@/services/agent';

const NAV = [
  { to: '/demo', label: 'Demo' },
  { to: '/site/curso/administracao', label: 'Site UniCesumar' },
  { to: '/whatsapp', label: 'WhatsApp' },
] as const;

/**
 * Casca de navegação do protótipo. Existe para a equipe circular entre as
 * superfícies durante o desenvolvimento e a apresentação.
 */
export function AppShell() {
  const adapterName = resolveAgentAdapter().name;

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
          <span className="text-sm font-semibold tracking-tight text-ink-900">
            Jornada de Ingresso
            <span className="ml-2 font-normal text-ink-500">UniCesumar</span>
          </span>

          <nav aria-label="Superfícies do protótipo" className="flex gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-md px-3 py-1.5 text-sm transition-colors',
                    isActive
                      ? 'bg-brand-50 font-medium text-brand-700'
                      : 'text-ink-500 hover:bg-slate-100 hover:text-ink-700',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <span
            className="ml-auto rounded-full bg-slate-100 px-2.5 py-1 text-xs text-ink-500"
            title="Implementação de AgentAdapter ativa"
          >
            {adapterName}
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
