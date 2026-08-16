/**
 * Página de curso — a superfície onde o agente de pré-venda vive.
 *
 * O ponto da demo não é a página em si: é que a MESMA página, aberta por
 * URLs diferentes, entrega contextos de aquisição diferentes ao agente.
 * Abrir /curso/administracao?utm_campaign=adm-empreendedores e
 * /curso/administracao?utm_campaign=adm-carreira deve produzir aberturas
 * diferentes no widget, sem nenhuma pergunta a mais.
 */

import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { findCourse } from '@/data/courses';
import { describeOrigin, readAcquisitionContext } from '@/lib/utm';

import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const course = findCourse(slug);

  const acquisition = useMemo(
    () => readAcquisitionContext(location.search, location.pathname),
    [location.search, location.pathname],
  );

  const origin = describeOrigin(acquisition);

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-uni-navy">
            Curso não encontrado
          </h1>
          <p className="mt-3 text-uni-gray">
            O curso <code className="font-mono">{slug}</code> não existe no
            catálogo da demo.
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero do curso */}
        <section className="bg-linear-to-br from-uni-navy via-uni-navy to-uni-navy-deep text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.6fr_1fr] lg:py-20">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="rounded-full bg-white/15 px-3 py-1">
                  Graduação EAD
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1">
                  {course.degree}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1">
                  {course.durationSemesters} semestres
                </span>
              </div>

              <h1 className="font-display text-4xl leading-tight font-extrabold lg:text-5xl">
                {course.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80">
                {course.tagline}
              </p>

              {/* Prova visível de que a origem foi capturada. Na demo real
                  este bloco pode sair; ele existe para a banca enxergar que o
                  contexto não é inventado pelo agente. */}
              {origin && (
                <div className="mt-8 max-w-2xl rounded-xl border border-uni-yellow/40 bg-uni-yellow/10 px-4 py-3 text-sm">
                  <span className="font-bold text-uni-yellow">
                    Contexto capturado:
                  </span>{' '}
                  <span className="text-white/85">{origin}</span>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#inscricao"
                  className="rounded-full bg-uni-yellow px-8 py-3 text-sm font-bold text-uni-navy-ink transition hover:brightness-95"
                >
                  Inscreva-se agora
                </a>
                <a
                  href="#ementa"
                  className="rounded-full border border-white/40 px-8 py-3 text-sm font-bold transition hover:bg-white/10"
                >
                  Ver a grade do curso
                </a>
              </div>
            </div>

            {/* Cartão de oferta */}
            <aside
              id="inscricao"
              className="h-fit rounded-2xl bg-white p-6 text-uni-ink shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-uni-gray">
                Mensalidade a partir de
              </p>
              <p className="mt-1 font-display text-4xl font-extrabold text-uni-navy">
                {currency.format(course.monthlyPrice)}
              </p>
              <p className="mt-1 text-sm text-uni-gray line-through">
                {currency.format(course.fullPrice)}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  'Reconhecido pelo MEC',
                  'Material didático incluso',
                  'Estude pelo Studeo, no seu ritmo',
                  'Mais de 2.500 polos no Brasil',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-0.5 text-uni-green" aria-hidden>
                      ✔
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-uni-green py-3 text-sm font-bold text-white transition hover:brightness-95"
              >
                Fazer minha inscrição
              </button>
              <p className="mt-3 text-center text-xs text-uni-gray">
                Inscrição gratuita e sem compromisso
              </p>
            </aside>
          </div>
        </section>

        {/* Sobre o curso */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h2 className="font-display text-2xl font-bold text-uni-navy">
                Sobre o curso
              </h2>
              <p className="mt-4 leading-relaxed text-uni-gray">
                {course.description}
              </p>

              <h3
                id="ementa"
                className="mt-12 font-display text-xl font-bold text-uni-navy"
              >
                O que você vai estudar
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.modules.map((module) => (
                  <div
                    key={module.semester}
                    className="rounded-xl border border-uni-line bg-uni-mist/50 p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-wide text-uni-cyan">
                      {module.semester}º semestre
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm text-uni-gray">
                      {module.subjects.map((subject) => (
                        <li key={subject}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-uni-gray">
                Grade resumida para demonstração. A matriz curricular completa
                está disponível na secretaria acadêmica.
              </p>
            </div>

            <aside>
              <h3 className="font-display text-xl font-bold text-uni-navy">
                Onde você pode atuar
              </h3>
              <ul className="mt-5 space-y-2">
                {course.careers.map((career) => (
                  <li
                    key={career}
                    className="rounded-lg border border-uni-line px-4 py-2.5 text-sm text-uni-gray"
                  >
                    {career}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-uni-gray">
                Possibilidades de atuação da área. A UniCesumar não garante
                colocação profissional.
              </p>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-uni-mist">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <h2 className="font-display text-2xl font-bold text-uni-navy">
              Perguntas frequentes
            </h2>
            <div className="mt-8 space-y-3">
              {course.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-uni-line bg-white px-5 py-4"
                >
                  <summary className="cursor-pointer list-none font-semibold text-uni-navy marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {item.question}
                      <span
                        className="text-uni-cyan transition group-open:rotate-45"
                        aria-hidden
                      >
                        ＋
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-uni-gray">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
