'use client';

import { useEffect, useState } from 'react';

type ProblemIconName = 'clock' | 'userLost' | 'search' | 'repeat' | 'chat' | 'chart';

function ProblemIcon({ name }: { name: ProblemIconName }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-emerald-300 drop-shadow-[0_0_14px_rgba(110,231,183,0.55)]" aria-hidden="true">
      {name === 'clock' && (
        <>
          <circle cx="24" cy="24" r="15" {...common} />
          <path d="M24 14v11l7 4" {...common} />
          <path d="M36 35c3-3 5-7 5-11" {...common} className="opacity-45" />
          <path d="M39 39h.01" {...common} className="opacity-45" />
        </>
      )}

      {name === 'userLost' && (
        <>
          <circle cx="21" cy="16" r="7" {...common} />
          <path d="M9 37c2-8 7-12 14-12" {...common} />
          <path d="M32 29l8 8" {...common} />
          <path d="M40 29l-8 8" {...common} />
        </>
      )}

      {name === 'search' && (
        <>
          <circle cx="21" cy="21" r="13" {...common} />
          <path d="M31 31l9 9" {...common} />
          <path d="M34 13h4" {...common} className="opacity-50" />
          <path d="M37 10v6" {...common} className="opacity-50" />
        </>
      )}

      {name === 'repeat' && (
        <>
          <path d="M15 14h15c5 0 9 4 9 9" {...common} />
          <path d="M31 7l8 7-8 7" {...common} />
          <path d="M33 34H18c-5 0-9-4-9-9" {...common} />
          <path d="M17 41l-8-7 8-7" {...common} />
        </>
      )}

      {name === 'chat' && (
        <>
          <path d="M10 14c0-4 4-7 9-7h10c5 0 9 3 9 7v9c0 4-4 7-9 7H20l-10 8v-24Z" {...common} />
          <path d="M18 19h.01M24 19h.01M30 19h.01" {...common} />
          <circle cx="36" cy="12" r="8" className="fill-emerald-300 text-emerald-300" />
          <text x="36" y="15" textAnchor="middle" className="fill-[#052e1a] text-[8px] font-black">99+</text>
        </>
      )}

      {name === 'chart' && (
        <>
          <path d="M10 38h28" {...common} />
          <path d="M13 38V20h7v18" {...common} />
          <path d="M24 38V13h7v25" {...common} />
          <path d="M35 38V27h7v11" {...common} />
          <path d="M12 11c8 0 11 10 18 10 5 0 8-4 11-8" {...common} className="opacity-70" />
        </>
      )}
    </svg>
  );
}


type SolutionIconName = 'brain' | 'human' | 'target' | 'score' | 'followup' | 'integration';

type DynamicCapability = {
  icon: SolutionIconName;
  title: string;
  text: string;
};

function SolutionIcon({ name, className = 'h-8 w-8' }: { name: SolutionIconName; className?: string }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg viewBox="0 0 48 48" className={`${className} text-emerald-300 drop-shadow-[0_0_16px_rgba(110,231,183,0.5)]`} aria-hidden="true">
      {name === 'brain' && (
        <>
          <path d="M18 10c-5 0-9 4-9 9 0 2 .7 3.8 2 5.2A8.5 8.5 0 0 0 9 30c0 5 4 9 9 9 3 0 5.3-1.2 7-3.2 1.7 2 4 3.2 7 3.2 5 0 9-4 9-9 0-2.2-.8-4.2-2.2-5.8A8.1 8.1 0 0 0 40 19c0-5-4-9-9-9-2.8 0-5.1 1.2-6.8 3.2C22.6 11.2 20.4 10 18 10Z" {...common} />
          <path d="M18 18c3 0 5 2 5 5M30 18c-3 0-5 2-5 5M18 30c3 0 5-2 5-5M30 30c-3 0-5-2-5-5" {...common} className="opacity-60" />
        </>
      )}
      {name === 'human' && (
        <>
          <path d="M9 24c0-8 6.5-14 15-14s15 6 15 14-6.5 14-15 14c-2.8 0-5.4-.6-7.5-1.8L9 39l2.6-7.1A14 14 0 0 1 9 24Z" {...common} />
          <path d="M17 22h.01M24 22h.01M31 22h.01" {...common} />
          <path d="M18 29c3.5 2.6 8.5 2.6 12 0" {...common} className="opacity-70" />
        </>
      )}
      {name === 'target' && (
        <>
          <circle cx="24" cy="24" r="15" {...common} />
          <circle cx="24" cy="24" r="8" {...common} className="opacity-65" />
          <circle cx="24" cy="24" r="2" className="fill-emerald-300" />
          <path d="M35 13l6-6M34 8h7v7" {...common} />
        </>
      )}
      {name === 'score' && (
        <>
          <path d="M10 37h28" {...common} />
          <path d="M14 37V25h6v12M22 37V17h6v20M30 37V10h6v27" {...common} />
          <path d="M11 14c7 0 9 8 15 8 5 0 8-4 12-10" {...common} className="opacity-60" />
        </>
      )}
      {name === 'followup' && (
        <>
          <path d="M15 13h16c5 0 9 4 9 9s-4 9-9 9H20" {...common} />
          <path d="M27 6l-8 7 8 7" {...common} />
          <path d="M33 38H17c-5 0-9-4-9-9s4-9 9-9h11" {...common} className="opacity-55" />
        </>
      )}
      {name === 'integration' && (
        <>
          <rect x="8" y="8" width="12" height="12" rx="4" {...common} />
          <rect x="28" y="8" width="12" height="12" rx="4" {...common} />
          <rect x="8" y="28" width="12" height="12" rx="4" {...common} />
          <rect x="28" y="28" width="12" height="12" rx="4" {...common} />
          <path d="M20 14h8M14 20v8M34 20v8M20 34h8" {...common} className="opacity-65" />
        </>
      )}
    </svg>
  );
}

function DynamicSolutionCard() {
  const capabilities: DynamicCapability[] = [
    {
      icon: 'brain',
      title: 'Memoria persistente',
      text: 'Recuerda contexto, historial y continuidad comercial de cada conversación.',
    },
    {
      icon: 'human',
      title: 'Atención IA humanizada',
      text: 'Responde de forma natural, cercana y coherente, sin sensación de bot genérico.',
    },
    {
      icon: 'target',
      title: 'Contexto persistente',
      text: 'Entiende en qué punto está cada cliente y qué necesita para avanzar.',
    },
    {
      icon: 'score',
      title: 'Scoring automático',
      text: 'Clasifica interés, urgencia y probabilidad de compra en tiempo real.',
    },
    {
      icon: 'followup',
      title: 'Conversaciones que parecen humanas',
      text: 'Automatiza seguimiento sin perder timing, tono ni continuidad.',
    },
    {
      icon: 'integration',
      title: 'Acciones conectadas',
      text: 'Registra datos, actualiza planillas, dispara eventos y organiza el proceso comercial.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % capabilities.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [capabilities.length]);

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-emerald-400/20 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] backdrop-blur-xl p-10 min-h-[330px] hover:border-emerald-300/35 hover:-translate-y-1 transition-all duration-500 shadow-[0_0_60px_rgba(16,185,129,0.05)]">
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl group-hover:bg-emerald-400/15 transition-colors" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-6">
          <div className="w-16 h-16 rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.08] shadow-[inset_0_0_24px_rgba(52,211,153,0.14),0_0_34px_rgba(52,211,153,0.1)] flex items-center justify-center">
            <SolutionIcon name={active.icon} />
          </div>

          <div className="flex gap-1.5 pt-2">
            {capabilities.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ver capacidad ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeIndex ? 'w-7 bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.7)]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-emerald-300/70 text-xs tracking-[0.28em] uppercase">
          Núcleo conversacional IA
        </div>

        <h3 className="mt-4 text-3xl font-medium tracking-[-0.035em] leading-tight">
          Atención IA con contexto persistente
        </h3>

        <div key={activeIndex} className="mt-8 animate-[capabilityIn_520ms_ease-out]">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-4 py-2 text-sm text-emerald-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
            {active.title}
          </div>

          <p className="mt-5 text-white/62 text-lg leading-relaxed max-w-xl">
            {active.text}
          </p>
        </div>

        <div className="mt-9 h-1 overflow-hidden rounded-full bg-white/10">
          <div key={`bar-${activeIndex}`} className="h-full rounded-full bg-emerald-300 animate-[progressWidth_3200ms_linear] shadow-[0_0_14px_rgba(110,231,183,0.7)]" />
        </div>
      </div>
    </div>
  );
}

export default function EscalandoLabsLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      <style>{`
        @keyframes capabilityIn {
          0% { opacity: 0; transform: translateY(14px) scale(0.985); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes progressWidth {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none animate-pulse">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/[0.06] bg-black/50 supports-[backdrop-filter]:bg-black/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
            <span className="text-lg tracking-[0.25em] font-semibold uppercase text-white/95">
              Escalando Labs
            </span>
          </div>

          <button className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all text-sm text-white/80">
            Contacto
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/65 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Automatización comercial con IA
              </div>

              <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.95] max-w-4xl">
                Convertimos tu WhatsApp en un sistema automático de ventas y seguimiento.
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-white/60 max-w-2xl">
                Diseñamos sistemas conversacionales inteligentes para negocios que venden, atienden y hacen seguimiento por WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <a
  href="https://wa.me/5491153230859"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 rounded-2xl bg-white text-black font-medium text-lg hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 inline-flex items-center justify-center"
>
  Hablar por WhatsApp ↗
</a>

                <a
                  href="/demo"
                  className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white/80 text-lg hover:bg-white/[0.05] transition-all duration-300 inline-flex items-center justify-center"
                >
                  Ver demostración
                </a>
              </div>

              <div className="flex flex-wrap gap-3 mt-12 text-sm text-white/45">
                {[
                  'Seguimiento automático',
                  'IA conversacional',
                  'Integraciones',
                  'WhatsApp Business',
                  'Automatización comercial',
                ].map((tag, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* MOCKUP */}
            <div className="relative">
              <div className="absolute -inset-10 bg-emerald-500/10 blur-3xl rounded-full animate-pulse" />

              <div className="relative rounded-[32px] border border-white/10 bg-[#0B0B0B]/90 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] hover:scale-[1.01] transition-all duration-500">
                <div className="h-14 border-b border-white/10 flex items-center px-6 gap-3 bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>

                <div className="p-6 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-black p-4">
                    <div className="text-sm text-white/40 mb-3">
                      Cliente · 14:32
                    </div>

                    <div className="text-white/85 leading-relaxed">
                      Hola! Quería saber si todavía tienen turnos disponibles para esta semana.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.08] p-4 ml-10">
                    <div className="text-sm text-emerald-300/70 mb-3">
                      IA · Respondido automáticamente
                    </div>

                    <div className="text-white/90 leading-relaxed">
                      ¡Hola! Sí 😊 Tenemos disponibilidad para jueves y viernes. ¿Querés que te muestre los horarios disponibles?
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-white/40 text-sm">
                        Tiempo de respuesta
                      </div>

                      <div className="text-3xl font-semibold mt-3">
                        -92%
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-white/40 text-sm">
                        Conversaciones activas
                      </div>

                      <div className="text-3xl font-semibold mt-3">
                        24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-5">
              Problema
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
              La mayoría de los negocios pierden ventas por desorden en WhatsApp.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: 'Respuestas tardías',
                text: 'Cada minuto que pasa, es una venta que se enfría.',
                icon: 'clock' as const,
              },
              {
                title: 'Clientes olvidados',
                text: 'Leads que preguntaron una vez y nunca más volvieron.',
                icon: 'userLost' as const,
              },
              {
                title: 'Seguimientos inexistentes',
                text: 'Sin seguimiento, las oportunidades desaparecen.',
                icon: 'search' as const,
              },
              {
                title: 'Consultas repetidas',
                text: 'Las mismas preguntas, una y otra vez.',
                icon: 'repeat' as const,
              },
              {
                title: 'WhatsApp saturado',
                text: 'Conversaciones desordenadas y equipos colapsados.',
                icon: 'chat' as const,
              },
              {
                title: 'Cero organización comercial',
                text: 'Sin datos, sin métricas, sin crecimiento.',
                icon: 'chart' as const,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-7 min-h-[220px] hover:border-emerald-400/30 hover:bg-white/[0.045] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,rgba(52,211,153,0.14),transparent_35%)]" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-500/[0.08] border border-emerald-400/15 shadow-[inset_0_0_22px_rgba(52,211,153,0.12),0_0_26px_rgba(52,211,153,0.08)] flex items-center justify-center mb-7">
                    <ProblemIcon name={item.icon} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white/95 tracking-[-0.03em] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-lg leading-relaxed text-white/55 max-w-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCION */}
      <section className="border-y border-white/[0.06] bg-white/[0.015] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-5">
              Solución
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
              Sistemas conversacionales diseñados para vender y hacer seguimiento.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <DynamicSolutionCard />

            {[
              {
                title: 'Seguimiento inteligente',
                text: 'Reactivamos clientes y retomamos conversaciones automáticamente cuando detectamos oportunidad.',
                icon: 'followup' as const,
              },
              {
                title: 'Clasificación y scoring',
                text: 'Detectamos interés, intención y probabilidad de compra para ordenar conversaciones.',
                icon: 'score' as const,
              },
              {
                title: 'Integraciones a medida',
                text: 'Conectamos WhatsApp con Sheets, pagos, CRMs, eventos de Meta y APIs.',
                icon: 'integration' as const,
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/60 backdrop-blur-xl p-10 min-h-[330px] hover:border-emerald-500/25 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_15%_10%,rgba(52,211,153,0.13),transparent_34%)]" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-3xl border border-emerald-500/15 bg-emerald-500/[0.08] mb-8 flex items-center justify-center shadow-[inset_0_0_22px_rgba(52,211,153,0.1)]">
                    <SolutionIcon name={card.icon} />
                  </div>

                  <h3 className="text-3xl font-medium tracking-[-0.03em] mb-5">
                    {card.title}
                  </h3>

                  <p className="text-white/60 text-lg leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
<section className="relative mx-auto mt-32 max-w-6xl px-6">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_70%)]" />

  <div className="mb-14 text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-green-400/70">
      Infraestructura conversacional
    </p>

    <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
      Más que un chatbot
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
      Escalando Labs combina IA, automatización y lógica comercial
      para construir sistemas conversacionales realmente útiles para negocios.
    </p>
  </div>

  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
    <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.02] px-6 py-5 text-sm font-medium text-zinc-400">
      <div>Capacidades</div>
      <div className="text-center">Automatizaciones tradicionales</div>
      <div className="text-center text-green-400">Escalando Labs</div>
    </div>

    {[
      ["Respuestas automáticas", true, true],
      ["Conversaciones naturales", false, true],
      ["Memoria persistente", false, true],
      ["Detección de intención", false, true],
      ["Follow-ups inteligentes", false, true],
      ["Clasificación de clientes", false, true],
      ["Scoring automático", false, true],
      ["Integraciones a medida", false, true],
      ["Automatización comercial real", false, true],
    ].map(([label, oldWay, escalando], index) => (
      <div
        key={label as string}
        className={`grid grid-cols-3 items-center px-6 py-5 transition-colors duration-300 hover:bg-white/[0.03] ${
          index !== 8 ? "border-b border-white/5" : ""
        }`}
      >
        <div className="text-sm text-zinc-200 md:text-base">
          {label as string}
        </div>

        <div className="flex justify-center">
          {oldWay ? (
            <span className="text-zinc-500">✓</span>
          ) : (
            <span className="text-zinc-700">✕</span>
          )}
        </div>

        <div className="flex justify-center">
          {escalando ? (
            <span className="text-green-400">✓</span>
          ) : (
            <span className="text-zinc-700">✕</span>
          )}
        </div>
      </div>
    ))}
  </div>

  <div className="mt-16 text-center">
    <p className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
      No automatizamos respuestas.
    </p>

    <p className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-green-400 md:text-5xl">
      Automatizamos procesos comerciales.
    </p>
  </div>
</section>

      ```tsx id="g3d0a6"
{/* IMPLEMENTACIÓN */}
<section className="relative mx-auto max-w-7xl px-6 py-28">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.06),transparent_70%)]" />

  <div className="max-w-3xl">
    <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-5">
      Implementación
    </div>

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
      Sistemas adaptados
      <br />
      a cada negocio.
    </h2>

    <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
      Escalando Labs implementa automatización comercial e infraestructura IA
      según el nivel de complejidad y necesidades reales de cada operación.
    </p>
  </div>

  <div className="mt-16 grid gap-6 md:grid-cols-3">

    {/* STARTER */}
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-green-500/30 hover:bg-white/[0.05]">
      <div className="mb-6 inline-flex rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
        Starter
      </div>

      <h3 className="text-2xl font-semibold text-white">
        Atención IA inteligente
      </h3>

      <div className="mt-8 space-y-4 text-zinc-400">
        <div>✓ Conversaciones automatizadas</div>
        <div>✓ Seguimiento básico</div>
        <div>✓ Integración WhatsApp</div>
        <div>✓ Automatización inicial</div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Implementación
        </div>

        <div className="mt-2 text-2xl font-semibold text-green-400">
          3–5 días
        </div>
      </div>
    </div>

    {/* GROWTH */}
    <div className="group rounded-3xl border border-green-500/20 bg-green-500/[0.06] p-8 backdrop-blur-xl transition-all duration-300 hover:border-green-400/40 hover:bg-green-500/[0.08]">
      <div className="mb-6 inline-flex rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
        Growth
      </div>

      <h3 className="text-2xl font-semibold text-white">
        Automatización comercial
      </h3>

      <div className="mt-8 space-y-4 text-zinc-300">
        <div>✓ Scoring automático</div>
        <div>✓ Recuperación de clientes</div>
        <div>✓ Integraciones avanzadas</div>
        <div>✓ Follow-ups inteligentes</div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Implementación
        </div>

        <div className="mt-2 text-2xl font-semibold text-green-400">
          1–2 semanas
        </div>
      </div>
    </div>

    {/* INFRASTRUCTURE */}
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-green-500/30 hover:bg-white/[0.05]">
      <div className="mb-6 inline-flex rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
        Infrastructure
      </div>

      <h3 className="text-2xl font-semibold text-white">
        Sistemas personalizados
      </h3>

      <div className="mt-8 space-y-4 text-zinc-400">
        <div>✓ Arquitectura a medida</div>
        <div>✓ APIs y automatizaciones</div>
        <div>✓ Flujos complejos</div>
        <div>✓ Infraestructura escalable</div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Implementación
        </div>

        <div className="mt-2 text-2xl font-semibold text-green-400">
          Personalizado
        </div>
      </div>
    </div>

  </div>
</section>
      
      {/* RUBROS */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-5">
              Rubros
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
              Ideal para negocios que venden por conversación.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 mt-16">
            {[
              'Restaurantes',
              'Peluquerías',
              'Veterinarias',
              'Peluquerías caninas',
              'Indumentaria',
              'Perfumerías',
              'Distribuidoras',
              'Editoriales',
              'Comercios locales',
              'Servicios',
            ].map((tag, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white/75 hover:bg-white/[0.05] transition-all"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-32 px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-14 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-3xl rounded-full animate-pulse" />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] leading-tight max-w-4xl mx-auto">
              Tu negocio ya tiene clientes escribiendo.
              <br />
              El problema es todo lo que pasa después.
            </h2>

            <p className="mt-8 text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Automatizá atención, seguimiento y recuperación de clientes sin perder el trato humano.
            </p>

            <a
  href="https://wa.me/5491153230859"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 rounded-2xl bg-white text-black font-medium text-lg hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 inline-flex items-center justify-center"
>
  Hablar por WhatsApp ↗
</a>
          </div>
        </div>
      </section>
    </div>
  )
}

