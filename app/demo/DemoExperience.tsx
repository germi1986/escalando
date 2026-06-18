"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import BrandMark from "../components/BrandMark";
import ThemeToggle from "../components/ThemeToggle";

type DemoStage = {
  eyebrow: string;
  title: string;
  summary: string;
  clientMessage: string;
  aiReply: string;
  humanNote: string;
  score: number;
  conversion: number;
  status: string;
  intent: string;
  segment: string;
  action: string;
  events: string[];
};

const whatsappUrl =
  "https://wa.me/5491153230859?text=Hola,%20vi%20la%20demo%20visual%20de%20Escalando%20Labs%20y%20quiero%20evaluarlo%20para%20mi%20negocio";

const stages: DemoStage[] = [
  {
    eyebrow: "01 · Captura",
    title: "WhatsApp deja de ser una bandeja suelta.",
    summary:
      "El sistema recibe el mensaje, reconoce al contacto, recupera contexto histórico y evita que el equipo arranque desde cero.",
    clientMessage: "Hola, compré hace unos meses. ¿Sigue vigente la promo de esta semana?",
    aiReply:
      "Sí. Te puedo orientar con la promo vigente y, si querés, también revisar qué opción encaja mejor con tu compra anterior.",
    humanNote: "Cliente histórico detectado · 143 días sin comprar · ticket promedio alto",
    score: 42,
    conversion: 58,
    status: "Conversación iniciada",
    intent: "Consulta comercial",
    segment: "Cliente recuperable",
    action: "Responder con contexto",
    events: ["contacto_identificado", "historial_cargado", "respuesta_contextual"],
  },
  {
    eyebrow: "02 · Inteligencia",
    title: "Cada respuesta alimenta una lectura comercial.",
    summary:
      "La IA no solo contesta. Clasifica intención, sensibilidad al precio, urgencia y señales para decidir el próximo paso.",
    clientMessage: "Me interesa, pero quiero algo parecido a lo que compré antes. No quiero perder tiempo.",
    aiReply:
      "Perfecto. Tomo como referencia tu compra anterior y te muestro una opción directa. Si necesitás ajustar algo, lo derivo a una persona.",
    humanNote: "Intención alta · baja tolerancia a fricción · preferencia detectada",
    score: 69,
    conversion: 76,
    status: "Lead calificado",
    intent: "Evaluación activa",
    segment: "Alta afinidad",
    action: "Priorizar seguimiento",
    events: ["intencion_clasificada", "score_actualizado", "segmento_asignado"],
  },
  {
    eyebrow: "03 · Control humano",
    title: "La automatización no reemplaza criterio.",
    summary:
      "Cuando aparece una conversación sensible, una objeción o una oportunidad fuerte, el sistema prepara el pase a una persona.",
    clientMessage: "Si me asegurás que llega antes del viernes, lo confirmo hoy.",
    aiReply:
      "Para no prometer algo incorrecto, te paso con una persona del equipo que puede confirmar stock, plazo y condiciones.",
    humanNote: "Derivación sugerida · oportunidad de cierre · requiere confirmación operativa",
    score: 84,
    conversion: 88,
    status: "Listo para humano",
    intent: "Cierre posible",
    segment: "Oportunidad prioritaria",
    action: "Derivar a vendedor",
    events: ["riesgo_detectado", "handoff_preparado", "equipo_notificado"],
  },
  {
    eyebrow: "04 · Recuperación",
    title: "El valor queda registrado para volver a accionar.",
    summary:
      "La conversación actualiza el CRM, agenda el próximo seguimiento y deja datos exportables para que la base no vuelva a dormirse.",
    clientMessage: "Dale, escribime mañana con la confirmación y vemos cómo avanzamos.",
    aiReply:
      "Listo. Dejo registrado el interés y programo el seguimiento para mañana con el detalle pendiente.",
    humanNote: "Follow-up programado · CRM actualizado · campaña futura habilitada",
    score: 91,
    conversion: 93,
    status: "Seguimiento activo",
    intent: "Interés confirmado",
    segment: "Recuperación caliente",
    action: "Agendar follow-up",
    events: ["crm_actualizado", "followup_programado", "base_recuperable"],
  },
];

const productSignals = [
  { label: "IA con contexto", value: "Responde con datos reales del negocio" },
  { label: "CRM comercial", value: "Clientes, etiquetas, historial y estado" },
  { label: "Humano al mando", value: "Derivación cuando hace falta criterio" },
  { label: "Campañas sanas", value: "Segmentación, frecuencia y trazabilidad" },
];

const pipeline = [
  "Mensaje entrante",
  "Identidad del cliente",
  "Historial comercial",
  "Clasificación IA",
  "Acción recomendada",
  "CRM actualizado",
];

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-[var(--text-secondary)]">{label}</span>
        <span className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-strong)]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,var(--brand-cyan),var(--brand-green),var(--brand-magenta))] transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function SignalCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--brand-cyan)]">{label}</p>
      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{value}</p>
    </article>
  );
}

export default function DemoExperience() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % stages.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const visibleEvents = useMemo(() => stage.events, [stage]);

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(115deg,rgba(34,211,238,0.12),transparent_34%,rgba(217,70,239,0.10)_66%,transparent)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--nav-bg)] backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" aria-label="Volver a Escalando Labs" className="rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-300/60">
            <BrandMark showLabel size="sm" />
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#planes"
              className="hidden rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)] sm:inline-flex"
            >
              Ver planes
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--text-strong)] px-4 py-2 text-sm font-bold text-[var(--background)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5"
            >
              Hablar ahora
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-16">
        <div>
          <p className="inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            Demo visual · operación WhatsApp IA
          </p>
          <h1 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[var(--text-strong)] md:text-7xl">
            Mirá cómo WhatsApp se convierte en sistema comercial.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Una conversación entra. Escalando Labs la entiende, la ordena, la mide y activa el próximo paso sin perder control humano.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {productSignals.map((signal) => (
              <SignalCard key={signal.label} {...signal} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-[2.2rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.36),rgba(52,211,153,0.12),rgba(217,70,239,0.28))] opacity-70 blur-xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border-soft)] bg-[var(--panel)] shadow-[var(--shadow-strong)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[var(--brand-green)] shadow-[0_0_22px_rgba(52,211,153,0.72)]" />
                <div>
                  <p className="text-sm font-bold text-[var(--text-strong)]">Centro de operación</p>
                  <p className="text-xs text-[var(--text-muted)]">WhatsApp · IA · CRM · Equipo humano</p>
                </div>
              </div>
              <p className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs font-bold text-[var(--brand-cyan)]">
                En vivo
              </p>
            </div>

            <div className="grid min-h-[620px] gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-[var(--border-soft)] p-5 lg:border-b-0 lg:border-r">
                <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Cliente · WhatsApp</p>
                  <p className="mt-4 text-base leading-7 text-[var(--text-strong)]">{stage.clientMessage}</p>
                </div>

                <div className="ml-6 mt-4 rounded-3xl border border-cyan-400/25 bg-cyan-400/[0.08] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-cyan)]">IA comercial</p>
                  <p className="mt-4 text-base leading-7 text-[var(--text-strong)]">{stage.aiReply}</p>
                </div>

                <div className="mt-5 rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-green)]">Nota para el equipo</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{stage.humanNote}</p>
                </div>

                <div className="mt-5 grid grid-cols-4 gap-2">
                  {stages.map((item, index) => (
                    <button
                      key={item.eyebrow}
                      onClick={() => setActive(index)}
                      className={`h-2 rounded-full transition ${
                        index === active ? "bg-[var(--brand-cyan)]" : "bg-[var(--surface-strong)] hover:bg-[var(--border-strong)]"
                      }`}
                      aria-label={`Ver etapa ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-cyan)]">{stage.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)]">
                  {stage.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{stage.summary}</p>

                <div className="mt-6 grid gap-4">
                  <MetricBar label="Lead score" value={stage.score} />
                  <MetricBar label="Probabilidad de conversión" value={stage.conversion} />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <SignalCard label="Estado" value={stage.status} />
                  <SignalCard label="Intención" value={stage.intent} />
                  <SignalCard label="Segmento" value={stage.segment} />
                  <SignalCard label="Próxima acción" value={stage.action} />
                </div>

                <div className="mt-6 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-bold text-[var(--text-strong)]">Eventos del sistema</p>
                    <p className="text-xs text-[var(--text-muted)]">Auditoría operativa</p>
                  </div>
                  <div className="mt-4 space-y-3 font-mono text-sm">
                    {visibleEvents.map((event, index) => (
                      <div key={event} className="flex items-center gap-3 text-[var(--text-secondary)]">
                        <span className="text-[var(--brand-green)]">✓</span>
                        <span className="text-[var(--text-muted)]">12:0{active + 3}:{24 + index}</span>
                        <span>{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-18">
          <div className="grid gap-4 md:grid-cols-6">
            {pipeline.map((item, index) => (
              <div key={item} className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]">
                <p className="text-2xl font-semibold text-[var(--brand-cyan)]">0{index + 1}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[var(--text-strong)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-[2.2rem] border border-[var(--border-soft)] bg-[var(--panel)] p-7 shadow-[var(--shadow-strong)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-magenta)]">La diferencia real</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--text-strong)] md:text-6xl">
                No vendemos un bot. Diseñamos una operación comercial.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-[var(--text-secondary)]">
              <p>
                La demo muestra lo importante: cada mensaje genera contexto, cada contexto genera una decisión y cada decisión queda registrada para vender mejor sin castigar la reputación del número.
              </p>
              <p>
                Si tu WhatsApp hoy depende de memoria humana, notas sueltas y seguimientos manuales, el problema no es responder más rápido. El problema es que no tenés sistema.
              </p>
              <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--text-strong)] px-7 py-4 text-base font-bold text-[var(--background)] transition hover:-translate-y-0.5"
                >
                  Quiero evaluar mi caso
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-7 py-4 text-base font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)]"
                >
                  Volver a la landing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[var(--border-soft)] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <BrandMark showLabel size="sm" />
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Páginas legales">
            <Link className="transition hover:text-[var(--text-strong)]" href="/privacidad">
              Privacidad
            </Link>
            <Link className="transition hover:text-[var(--text-strong)]" href="/terminos">
              Términos
            </Link>
            <Link className="transition hover:text-[var(--text-strong)]" href="/contacto">
              Contacto
            </Link>
          </nav>
          <p>© {new Date().getFullYear()} Escalando Labs. WhatsApp comercial con IA y control humano.</p>
        </div>
      </footer>
    </main>
  );
}
