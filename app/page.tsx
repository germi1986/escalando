'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type Message = {
  from: 'system' | 'client' | 'ai';
  text: string;
  time: string;
};

type IntelligenceState = {
  customerType: string;
  intent: string;
  leadScore: number;
  recoveryProbability: number;
  priceSensitivity: string;
  favoriteCluster: string;
  nextAction: string;
  status: string;
  events: string[];
};

const messages: Message[] = [
  {
    from: 'system',
    time: '12:03',
    text: 'Cliente detectado en base histórica: 143 días sin comprar · ticket promedio alto · afinidad con productos premium.',
  },
  {
    from: 'ai',
    time: '12:04',
    text: 'Hola Martín 😊 Te escribe Escalando Labs para mostrarte cómo un sistema puede recuperar clientes sin depender de seguimiento manual.',
  },
  {
    from: 'client',
    time: '12:05',
    text: 'Ok, ¿pero qué haría exactamente?',
  },
  {
    from: 'ai',
    time: '12:05',
    text: 'Detectaría clientes inactivos, analizaría su historial, enviaría un mensaje contextual y actualizaría automáticamente el estado comercial según la respuesta.',
  },
  {
    from: 'client',
    time: '12:06',
    text: 'Eso me serviría. Yo tengo muchos clientes que compraron y después desaparecieron.',
  },
  {
    from: 'ai',
    time: '12:06',
    text: 'Perfecto. En ese caso el sistema puede segmentarlos, priorizar los de mayor valor y activar follow-ups sin que tengas que revisar conversación por conversación.',
  },
  {
    from: 'system',
    time: '12:06',
    text: 'Automatización activada: cliente clasificado · score actualizado · próximo seguimiento programado.',
  },
];

const states: IntelligenceState[] = [
  {
    customerType: 'Cliente inactivo',
    intent: 'Sin respuesta todavía',
    leadScore: 42,
    recoveryProbability: 58,
    priceSensitivity: 'Media',
    favoriteCluster: 'Productos premium',
    nextAction: 'Enviar mensaje contextual',
    status: 'Pendiente de interacción',
    events: ['customer_found', 'history_loaded'],
  },
  {
    customerType: 'Cliente inactivo',
    intent: 'Reactivación iniciada',
    leadScore: 51,
    recoveryProbability: 66,
    priceSensitivity: 'Media',
    favoriteCluster: 'Productos premium',
    nextAction: 'Esperar respuesta',
    status: 'Mensaje enviado',
    events: ['message_sent', 'crm_note_created'],
  },
  {
    customerType: 'Cliente interesado',
    intent: 'Consulta comercial',
    leadScore: 64,
    recoveryProbability: 74,
    priceSensitivity: 'Media',
    favoriteCluster: 'Productos premium',
    nextAction: 'Explicar valor del sistema',
    status: 'Conversación abierta',
    events: ['reply_received', 'intent_detected'],
  },
  {
    customerType: 'Cliente interesado',
    intent: 'Evaluando solución',
    leadScore: 72,
    recoveryProbability: 81,
    priceSensitivity: 'Baja / media',
    favoriteCluster: 'Automatización comercial',
    nextAction: 'Mostrar recuperación de clientes',
    status: 'Lead calificado',
    events: ['lead_score_updated', 'segment_assigned'],
  },
  {
    customerType: 'Oportunidad comercial',
    intent: 'Dolor identificado',
    leadScore: 86,
    recoveryProbability: 91,
    priceSensitivity: 'Media',
    favoriteCluster: 'Recuperación de clientes',
    nextAction: 'Proponer diagnóstico',
    status: 'Alta prioridad',
    events: ['pain_point_detected', 'high_intent_signal'],
  },
  {
    customerType: 'Oportunidad comercial',
    intent: 'Necesita automatización',
    leadScore: 92,
    recoveryProbability: 94,
    priceSensitivity: 'Media',
    favoriteCluster: 'Follow-ups automáticos',
    nextAction: 'Agendar conversación',
    status: 'Listo para contacto humano',
    events: ['followup_scheduled', 'sheet_updated'],
  },
  {
    customerType: 'Lead caliente',
    intent: 'Solicitud de solución',
    leadScore: 96,
    recoveryProbability: 97,
    priceSensitivity: 'Media',
    favoriteCluster: 'Sistema conversacional IA',
    nextAction: 'Derivar a reunión',
    status: 'Derivado a ventas',
    events: ['crm_updated', 'meta_event_sent', 'owner_notified'],
  },
];

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xs uppercase tracking-[0.2em] text-white/35">{label}</div>
      <div className="mt-2 text-lg font-medium text-white/90">{value}</div>
    </div>
  );
}

function Bar({ value }: { value: number }) {
  return (
    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.55)] transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function DemoPage() {
  const [step, setStep] = useState(0);
  const visibleMessages = useMemo(() => messages.slice(0, step + 1), [step]);
  const current = states[step];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((currentStep) => (currentStep >= messages.length - 1 ? 0 : currentStep + 1));
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.13),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/[0.06] bg-black/50 supports-[backdrop-filter]:bg-black/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
            <span className="text-lg tracking-[0.25em] font-semibold uppercase text-white/95">
              Escalando Labs
            </span>
          </Link>

          <a
            href="https://wa.me/5491153230859"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all text-sm text-white/80"
          >
            Quiero una demo ↗
          </a>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/65 backdrop-blur-xl">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Demo interactiva
          </div>

          <h1 className="mt-7 text-4xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.95]">
            Mirá lo que pasa detrás de una conversación comercial con IA.
          </h1>

          <p className="mt-7 text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl">
            No es solo responder mensajes. El sistema detecta intención, clasifica clientes, actualiza datos y activa seguimientos automáticamente.
          </p>
        </div>

        <section className="mt-12 grid lg:grid-cols-[0.92fr_1.08fr] gap-6 items-stretch">
          <div className="rounded-[32px] border border-white/10 bg-[#0B0B0B]/90 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)]">
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
              <div>
                <div className="text-sm font-medium text-white/85">WhatsApp comercial</div>
                <div className="text-xs text-emerald-300/70">Sistema activo · respondiendo en tiempo real</div>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </div>
            </div>

            <div className="min-h-[520px] p-5 md:p-6 flex flex-col gap-4 bg-[radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_35%)]">
              {visibleMessages.map((message, index) => {
                const isClient = message.from === 'client';
                const isSystem = message.from === 'system';

                return (
                  <div
                    key={`${message.time}-${index}`}
                    className={`animate-[fadeIn_0.35s_ease-out] max-w-[88%] ${
                      isClient ? 'self-end' : 'self-start'
                    }`}
                  >
                    <div
                      className={`rounded-2xl border p-4 leading-relaxed ${
                        isSystem
                          ? 'border-emerald-500/15 bg-emerald-500/[0.07] text-emerald-50/85'
                          : isClient
                            ? 'border-white/10 bg-white/[0.08] text-white/90'
                            : 'border-white/10 bg-black/70 text-white/85'
                      }`}
                    >
                      <div className="mb-2 text-xs text-white/35">
                        {isSystem ? 'Sistema' : isClient ? 'Cliente' : 'IA comercial'} · {message.time}
                      </div>
                      {message.text}
                    </div>
                  </div>
                );
              })}

              <div className="mt-auto rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white/35">
                Simulación controlada · el valor real está en la inteligencia comercial que se activa detrás.
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-black/70 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.45)]">
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
              <div>
                <div className="text-sm font-medium text-white/85">Capa de inteligencia comercial</div>
                <div className="text-xs text-white/40">Scoring · clasificación · automatizaciones</div>
              </div>
              <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] text-xs text-emerald-300">
                Live
              </div>
            </div>

            <div className="p-5 md:p-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <StatCard label="Cliente detectado" value={current.customerType} />
                <StatCard label="Intención" value={current.intent} />
                <StatCard label="Sensibilidad al precio" value={current.priceSensitivity} />
                <StatCard label="Cluster favorito" value={current.favoriteCluster} />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-white/55">Lead score</div>
                    <div className="text-2xl font-semibold text-white">{current.leadScore}</div>
                  </div>
                  <Bar value={current.leadScore} />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-white/55">Probabilidad de conversión</div>
                    <div className="text-2xl font-semibold text-emerald-300">{current.recoveryProbability}%</div>
                  </div>
                  <Bar value={current.recoveryProbability} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/35">Estado</div>
                  <div className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white/90">
                    {current.status}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/35">Próxima acción</div>
                  <div className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white/90">
                    {current.nextAction}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#050505] p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-white/55">Eventos del sistema</div>
                  <div className="text-xs text-white/35">n8n · Sheets · Meta · CRM</div>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  {current.events.map((event, index) => (
                    <div
                      key={`${event}-${index}`}
                      className="flex items-center gap-3 text-white/65 animate-[fadeIn_0.35s_ease-out]"
                    >
                      <span className="text-emerald-400">✓</span>
                      <span className="text-white/30">12:0{Math.min(step + 3, 9)}:{22 + index}</span>
                      <span>{event}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setStep((currentStep) => (currentStep >= messages.length - 1 ? 0 : currentStep + 1))}
                  className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:scale-[1.02] transition-all"
                >
                  Avanzar demo
                </button>

                <button
                  onClick={() => setStep(0)}
                  className="px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/[0.06] transition-all"
                >
                  Reiniciar
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] leading-tight">
              Esto puede adaptarse a tu negocio, tus clientes y tus procesos.
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">
              Atención automática, recuperación de clientes, scoring, follow-ups e integraciones con tus herramientas actuales.
            </p>
            <a
              href="https://wa.me/5491153230859"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 py-4 rounded-2xl bg-white text-black font-medium text-lg hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 inline-flex items-center justify-center"
            >
              Quiero algo así para mi negocio ↗
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
