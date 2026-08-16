import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { CoursePage } from '@/features/site/CoursePage';
import { WhatsAppPage } from '@/features/whatsapp/WhatsAppPage';
import { DemoPage } from '@/features/demo/DemoPage';

/**
 * Três superfícies, um app:
 *   /site      → simulação do ambiente UniCesumar (pré-venda)
 *   /whatsapp  → simulação de WhatsApp (onboarding proativo)
 *   /demo      → seletor de cenários da apresentação
 *
 * `/site` fica FORA do AppShell de propósito: a simulação precisa parecer o
 * site real, e uma barra de navegação do protótipo por cima destruiria isso.
 * As outras rotas ficam dentro, para o time circular durante o desenvolvimento.
 */
export function App() {
  return (
    <Routes>
      {/* Superfície 1 — sem casca de desenvolvimento */}
      <Route
        path="/site"
        element={<Navigate to="/site/curso/administracao" replace />}
      />
      <Route path="/site/curso/:slug" element={<CoursePage />} />

      {/* Superfícies 2 e 3 — com casca de navegação */}
      <Route element={<AppShell />}>
        <Route path="/whatsapp/*" element={<WhatsAppPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Route>

      <Route path="/" element={<Navigate to="/demo" replace />} />
      <Route path="*" element={<Navigate to="/demo" replace />} />
    </Routes>
  );
}
