import type { CSSProperties, ReactNode } from "react";
import BrandMark from "./components/BrandMark";
import Reveal from "./components/Reveal";
import ThemeToggle from "./components/ThemeToggle";

const whatsappNumber = "5491153230859";

function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const trustBadges = [
  "IA + humano",
  "Seguimiento con contexto",
  "Campañas responsables",
  "Datos exportables",
];

const painPoints = [
  {
    title: "Consultas sin próximo paso",
    text: "Las conversaciones entran, se responden como se puede y muchas terminan sin criterio de seguimiento ni cierre claro.",
    icon: "chat",
    signal: "Se enfrían",
    accent: "rgba(34, 211, 238, 0.22)",
  },
  {
    title: "Clientes que nadie retoma",
    text: "Personas que pidieron información, compraron o quedaron cerca de avanzar vuelven a perderse porque todo depende de memoria humana.",
    icon: "recover",
    signal: "Valor dormido",
    accent: "rgba(52, 211, 153, 0.22)",
  },
  {
    title: "Promesas sin trazabilidad",
    text: "Cuando un operador cambia, el historial se corta y el negocio deja de saber qué se prometió, qué quedó pendiente y quién debía seguir.",
    icon: "team",
    signal: "Sin control",
    accent: "rgba(37, 99, 235, 0.2)",
  },
  {
    title: "Datos dispersos",
    text: "WhatsApp, planillas y notas sueltas fragmentan la operación. Se atiende, pero después cuesta medir, revisar y ordenar.",
    icon: "data",
    signal: "Información rota",
    accent: "rgba(45, 212, 191, 0.24)",
  },
];

const opportunitySignals = [
  "Clientes que compraron una vez y no volvieron",
  "Consultas que pidieron información y quedaron sin seguimiento",
  "Oportunidades que hoy dependen de que alguien se acuerde",
  "Base propia desaprovechada mientras sube el costo de adquirir nuevos leads",
];

const mechanismSteps = [
  {
    kpi: "01",
    title: "Atiende con información real",
    text: "La IA responde con contexto del negocio, no con frases genéricas. Horarios, promociones, políticas y límites quedan configurados desde el inicio.",
  },
  {
    kpi: "02",
    title: "Ordena conversaciones y estados",
    text: "Cada contacto deja historial, estado comercial y próximo paso para que WhatsApp deje de depender de memoria o velocidad individual.",
  },
  {
    kpi: "03",
    title: "Deriva cuando hace falta criterio",
    text: "Si la conversación requiere cierre, excepción o sensibilidad humana, el equipo toma el caso sin perder contexto.",
  },
  {
    kpi: "04",
    title: "Recupera oportunidades dormidas",
    text: "La base propia se vuelve accionable para reactivar consultas frías, clientes inactivos y seguimientos pendientes.",
  },
  {
    kpi: "05",
    title: "Deja trazabilidad para medir",
    text: "Las conversaciones, decisiones y datos quedan registradas para ajustar la operación sin operar a ciegas.",
  },
];

const differenceCards = [
  {
    title: "No vende automatización ciega",
    text: "La prioridad no es responder por responder. Es sostener una operación comercial usable y revisable.",
    icon: "shield",
  },
  {
    title: "No te deja solo con la implementación",
    text: "El sistema se configura con información real del negocio para que el arranque tenga sentido operativo.",
    icon: "hands",
  },
  {
    title: "No reemplaza al equipo cuando hace falta criterio",
    text: "La IA asiste y ordena. El control humano aparece donde conviene cuidar cierre, tono o excepción.",
    icon: "handoff",
  },
  {
    title: "No propone campañas sin cuidado operativo",
    text: "Segmentación, frecuencia y contexto importan más que el volumen ciego cuando se trabaja sobre WhatsApp.",
    icon: "warning",
  },
];

const comparisonRows = [
  {
    label: "Qué resuelve",
    chatbot: "Responder mensajes",
    crm: "Registrar información",
    platforms: "Ofrecer herramientas configurables",
    escalando: "Ordenar WhatsApp como sistema comercial medible",
  },
  {
    label: "Implementación",
    chatbot: "Flujos básicos",
    crm: "Carga y adopción interna",
    platforms: "El cliente arma gran parte del sistema",
    escalando: "Plataforma más configuración acompañada",
  },
  {
    label: "Seguimiento",
    chatbot: "Limitado al chat",
    crm: "Depende del equipo",
    platforms: "Posible, pero no siempre guiado",
    escalando: "Contexto, estado y próximo paso en la misma operación",
  },
  {
    label: "Campañas y base propia",
    chatbot: "No suele ser el foco",
    crm: "Necesita procesos externos",
    platforms: "Potente, pero con más complejidad operativa",
    escalando: "Recuperación y campañas responsables como parte del sistema",
  },
];

const proofBullets = [
  "Diagnóstico inicial para entender el punto de partida",
  "Configuración con información real del negocio",
  "Control humano cuando hace falta criterio",
  "Datos y conversaciones con trazabilidad y exportación",
  "Costos externos aclarados antes de activar campañas",
  "Demo visual para entender alcance y lógica operativa",
];

const fitBullets = [
  "Plan Inicial para ordenar y empezar con criterio",
  "Plan Crecimiento para trabajar base propia y recuperar ventas",
  "Plan Escala para más volumen, más operadores o integraciones",
  "Setup visible desde el principio y costos externos aclarados",
];

const plans = [
  {
    name: "Inicial",
    subtitle: "WhatsApp IA",
    price: "USD 149",
    setup: "Setup desde USD 300",
    target: "Para negocios que quieren ordenar la atención y dejar de depender de chats sueltos.",
    featured: false,
    includes: [
      "1 negocio y 1 número de WhatsApp",
      "IA comercial básica configurada",
      "Panel de conversaciones",
      "Modo IA / humano",
      "Base de conocimiento y FAQ inicial",
      "Carga o importación básica de clientes",
      "Exportación de datos",
      "Auditoría básica",
    ],
    limits: ["Hasta 2 usuarios", "Hasta 1.000 contactos gestionados", "Campañas avanzadas no incluidas"],
  },
  {
    name: "Crecimiento",
    subtitle: "Recuperación Comercial",
    price: "USD 299",
    setup: "Setup desde USD 500",
    target: "Para negocios con base propia que necesitan recuperar oportunidades y medir mejor el seguimiento.",
    featured: true,
    includes: [
      "Todo lo del plan Inicial",
      "Campañas responsables",
      "Segmentación de clientes",
      "Recuperación de clientes dormidos",
      "Importación CSV avanzada",
      "Promociones y objetivos comerciales",
      "Reportes y auditoría en tiempo real",
      "Acompañamiento comercial mensual",
    ],
    limits: ["Hasta 5 usuarios", "Hasta 5.000 contactos gestionados", "1 integración simple incluida"],
  },
  {
    name: "Escala",
    subtitle: "Operación IA a Medida",
    price: "USD 599",
    setup: "Setup desde USD 1.000",
    target: "Para equipos con más volumen, varios operadores o necesidad de integraciones externas.",
    featured: false,
    includes: [
      "Todo lo del plan Crecimiento",
      "Flujos comerciales a medida",
      "Integraciones con e-commerce o sistemas externos",
      "Automatizaciones n8n",
      "Dashboards avanzados",
      "Reglas avanzadas de derivación",
      "Soporte prioritario",
      "Revisión mensual de estrategia",
    ],
    limits: ["Hasta 10 usuarios", "Hasta 15.000 contactos gestionados", "Hasta 3 integraciones según complejidad"],
  },
];

const faqs = [
  {
    question: "¿Reemplaza a mi equipo?",
    answer:
      "No. La IA asiste; el equipo interviene cuando hace falta criterio, excepción comercial o cierre humano.",
  },
  {
    question: "¿Sirve para campañas masivas?",
    answer:
      "Solo si hay segmentación, contexto y uso responsable. La lógica no es enviar por volumen sino cuidar la operación y la relación con la base.",
  },
  {
    question: "¿Los costos de WhatsApp están incluidos?",
    answer:
      "No siempre. WhatsApp Business Platform, Twilio, Meta u otros proveedores pueden cobrar aparte según país, categoría y uso.",
  },
  {
    question: "¿Tengo que diseñar todo yo?",
    answer:
      "No. La implementación es acompañada: se configura el sistema con información real del negocio y criterio comercial.",
  },
  {
    question: "¿Sirve para cualquier negocio?",
    answer:
      "No. Encaja mejor cuando WhatsApp ya es parte real de la operación comercial y hay conversaciones, seguimiento o base propia para ordenar.",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-cyan)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-magenta)] shadow-[0_0_18px_rgba(217,70,239,0.85)]" />
      {children}
    </div>
  );
}

function CheckIcon() {
  return <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-cyan)] shadow-[0_0_18px_rgba(34,211,238,0.55)]" />;
}

function Glyph({ name }: { name: string }) {
  const common = "h-6 w-6";

  if (name === "chat") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 6.5h14a2 2 0 0 1 2 2v6.2a2 2 0 0 1-2 2H10l-4.8 3.1.8-3.1H5a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2Z" />
        <path d="M8 10h8" />
        <path d="M8 13h5" />
      </svg>
    );
  }

  if (name === "recover") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12a8 8 0 1 0 2.3-5.7" />
        <path d="M4 4v6h6" />
        <path d="M12 8v5l3 2" />
      </svg>
    );
  }

  if (name === "team") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M3.5 20a5 5 0 0 1 10 0" />
        <path d="M16.5 11.5a2.5 2.5 0 1 0 0-5" />
        <path d="M15.5 15.5a4.3 4.3 0 0 1 5 4.5" />
      </svg>
    );
  }

  if (name === "data" || name === "database") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 20 6v5c0 5-3.3 8.6-8 10-4.7-1.4-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (name === "warning") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 22 20H2L12 3Z" />
        <path d="M12 9v5" />
        <path d="M12 17h.01" />
      </svg>
    );
  }

  if (name === "handoff" || name === "hands") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.5 12.5 10 15a2.4 2.4 0 0 0 3.4 0l3.1-3.1a2 2 0 0 0 0-2.8 2 2 0 0 0-2.8 0L12 10.8" />
        <path d="M9.5 14.5 7.8 16.2a2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8L8 10.4" />
        <path d="M14 6h5v5" />
        <path d="m19 6-5.5 5.5" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 11.5 11 15l6-7" />
      <path d="M4.5 12a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Z" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:max-w-none">
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.20),transparent_58%)] blur-3xl" />
      <div className="float-soft relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] p-4 shadow-[var(--shadow-strong)] backdrop-blur-2xl">
        <div className="noise-layer absolute inset-0 opacity-20" />
        <div className="relative flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
          </div>
          <span className="text-xs font-semibold text-[var(--text-muted)]">Sistema comercial · Activo</span>
        </div>

        <div className="relative grid gap-4 pt-4 md:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-5">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>Cliente · 14:32</span>
                <span>Seguimiento</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-strong)]">
                Hola, había pedido precio la semana pasada. ¿Sigue disponible?
              </p>
            </div>

            <div className="ml-6 rounded-3xl border border-cyan-400/25 bg-cyan-400/[0.08] p-5 shadow-[0_0_34px_rgba(34,211,238,0.10)]">
              <div className="flex items-center justify-between text-xs text-[var(--brand-cyan)]">
                <span>IA comercial</span>
                <span>Contexto recuperado</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-strong)]">
                Sí. Veo tu consulta anterior y dejo listo el siguiente paso para que no se pierda el seguimiento.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs text-[var(--text-muted)]">Estado</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text-strong)]">Seguimiento activo</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs text-[var(--text-muted)]">Modo</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text-strong)]">IA + humano</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--surface-soft),transparent)] p-5">
            <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(34,211,238,0.25)_1px,transparent_0)] [background-size:22px_22px]" />
            <div className="relative flex h-full min-h-[320px] flex-col justify-between">
              <div className="flex justify-center pt-4">
                <BrandMark size="lg" />
              </div>
              <div className="space-y-3">
                {[
                  ["Conversaciones", "Con contexto"],
                  ["Próximo paso", "Definido"],
                  ["Trazabilidad", "Activa"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] px-4 py-3 backdrop-blur-xl"
                  >
                    <span className="text-xs text-[var(--text-muted)]">{label}</span>
                    <span className="text-sm font-bold text-[var(--text-strong)]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EscalandoLabsLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(217,70,239,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.055] [background-image:linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] [background-size:56px_56px]" />

      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--nav-bg)] backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" aria-label="Ir al inicio" className="rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-300/60">
            <BrandMark showLabel size="sm" />
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-7 text-sm font-medium text-[var(--text-secondary)] lg:flex">
            <a className="transition hover:text-[var(--text-strong)]" href="#problema">Problema</a>
            <a className="transition hover:text-[var(--text-strong)]" href="#oportunidad">Oportunidad</a>
            <a className="transition hover:text-[var(--text-strong)]" href="#solucion">Solución</a>
            <a className="transition hover:text-[var(--text-strong)]" href="#diferencial">Diferencial</a>
            <a className="transition hover:text-[var(--text-strong)]" href="#planes">Planes</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#planes"
              className="hidden rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)] sm:inline-flex lg:hidden"
            >
              Planes
            </a>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <a
              href={whatsappUrl("Hola, quiero solicitar un diagnóstico comercial sobre mi operación en WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-location="header_whatsapp"
              className="inline-flex rounded-full bg-[var(--text-strong)] px-4 py-2.5 text-sm font-bold text-[var(--background)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)] sm:px-5"
            >
              <span className="sm:hidden">Diagnóstico ↗</span>
              <span className="hidden sm:inline">Solicitar diagnóstico comercial ↗</span>
            </a>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative scroll-mt-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-cyan)] shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                Para negocios que venden y atienden por WhatsApp
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-[var(--text-strong)] sm:text-6xl lg:text-7xl">
                Convertí tu WhatsApp en un <span className="landing-gradient-text">sistema comercial medible.</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                Escalando Labs transforma WhatsApp en una operación comercial con IA y control humano para que cada conversación tenga contexto, seguimiento y próximo paso.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
                Muchas ventas no se pierden por falta de mensajes. Se pierden porque WhatsApp queda suelto: respuestas sin criterio, clientes sin historial claro y oportunidades que se enfrían sin seguimiento.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl("Hola, quiero solicitar un diagnóstico comercial sobre mi operación en WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-location="hero_recovery"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--text-strong)] px-7 py-4 text-base font-bold text-[var(--background)] shadow-[var(--shadow-strong)] transition hover:-translate-y-0.5"
                >
                  Solicitar diagnóstico comercial ↗
                </a>
                <a
                  href="/demo"
                  data-analytics-location="hero_demo"
                  className="inline-flex items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-7 py-4 text-base font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
                >
                  Ver demo visual
                </a>
              </div>

              <div className="mt-4 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">
                Revisamos tu operación en WhatsApp, detectamos dónde se enfrían oportunidades y evaluamos si Escalando Labs encaja en tu negocio.
              </div>

              <div className="mt-9 flex flex-wrap gap-2.5">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3.5 py-2 text-xs font-semibold text-[var(--text-secondary)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section id="problema" className="scroll-mt-28 border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-4xl">
            <SectionLabel>Problema</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              La venta no se pierde solo por falta de demanda. También se pierde por falta de sistema.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              WhatsApp concentra consultas, cierres, reclamos y seguimiento. Sin un sistema, todo depende de memoria, velocidad y buena voluntad.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)]">
              Cuando cada operador responde como puede, sin historial comercial claro ni criterios compartidos, el negocio queda expuesto a conversaciones que no avanzan, clientes que no vuelven y decisiones que nadie puede revisar después.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painPoints.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                as="article"
                className="problem-card group rounded-3xl border border-[var(--border-soft)] p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-strong)]"
                style={{ "--card-glow": item.accent } as CSSProperties}
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-[var(--brand-cyan)] shadow-[0_0_28px_rgba(34,211,238,0.10)]">
                    <Glyph name={item.icon} />
                  </div>
                  <span className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {item.signal}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.text}</p>
                <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-[var(--surface-strong)]">
                  <div className="pulse-line h-full rounded-full bg-[linear-gradient(90deg,var(--brand-cyan),var(--brand-green),var(--brand-magenta))]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="oportunidad" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <SectionLabel>Oportunidad</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Tu próxima venta puede estar en una conversación vieja, no en un anuncio nuevo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              La base propia suele valer más de lo que parece cuando se puede ordenar, segmentar y volver accionable.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)]">
              Muchos negocios ya tienen clientes que compraron, personas que pidieron precio, consultas que quedaron frías y seguimientos que nunca se hicieron. Antes de invertir más en adquisición, conviene revisar cuánto valor ya existe dentro de WhatsApp y cuánto de ese valor hoy se pierde por falta de sistema.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2.25rem] border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <div className="grid gap-3">
                {opportunitySignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--text-secondary)]"
                  >
                    <CheckIcon />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
              <a
                href={whatsappUrl("Hola, quiero un diagnóstico consultivo sobre mi operación en WhatsApp y mi base de clientes.")}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-location="base_evaluation"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400/[0.12] px-6 py-3 font-bold text-[var(--text-strong)] transition hover:-translate-y-0.5 hover:bg-cyan-400/[0.18]"
              >
                Solicitar diagnóstico comercial ↗
              </a>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                Un diagnóstico consultivo sobre tu operación en WhatsApp: cómo atendés hoy, dónde se enfrían oportunidades y qué conviene ordenar primero.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="solucion" className="scroll-mt-28 border-y border-[var(--border-soft)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          <Reveal className="lg:sticky lg:top-28">
            <SectionLabel>Mecanismo</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              WhatsApp deja de ser una bandeja suelta cuando cada conversación entra en un sistema.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Escalando Labs combina atención asistida por IA, contexto comercial, CRM y control humano para que cada contacto tenga estado, historial y próximo paso.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
              No se trata solo de automatizar respuestas. Se trata de hacer que cada conversación deje información útil, pueda ser continuada por una persona y alimente una operación comercial que no dependa del azar.
            </p>
            <a
              href="/demo"
              data-analytics-location="hero_demo"
              className="mt-8 inline-flex items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-6 py-3 text-sm font-bold text-[var(--text-strong)] transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
            >
              Ver demo visual
            </a>
          </Reveal>

          <div className="grid gap-4">
            {mechanismSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90} as="article" className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-7 shadow-[var(--shadow-soft)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--text-strong)] text-sm font-black text-[var(--background)]">
                    {step.kpi}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[var(--text-strong)]">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="diferencial" className="scroll-mt-28 border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-4xl">
            <SectionLabel>Diferencial</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              No alcanza con responder mensajes. Hay que convertirlos en operación comercial.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              El diferencial de Escalando Labs no es solo la IA. Es cómo conecta atención, contexto, seguimiento y control humano dentro de una operación medible.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)]">
              Un chatbot puede responder. Un CRM puede registrar. Una plataforma puede dar herramientas. Escalando Labs apunta a otra cosa: que WhatsApp funcione como un sistema comercial serio para PyMEs y equipos reales.
            </p>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {differenceCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 80}
                as="article"
                className="flex h-full min-h-[280px] flex-col rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-strong)]"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-[var(--brand-cyan)]">
                  <Glyph name={card.icon} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-[var(--text-strong)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{card.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] shadow-[var(--shadow-soft)]">
            <div className="overflow-x-auto">
              <div className="grid min-w-[860px] grid-cols-[0.8fr_1fr_1fr_1.15fr_1.25fr] border-b border-[var(--border-soft)] bg-[var(--surface-soft)] text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                <div className="p-4">Criterio</div>
                <div className="p-4">Chatbot básico</div>
                <div className="p-4">CRM tradicional</div>
                <div className="p-4">Plataformas</div>
                <div className="p-4 text-[var(--brand-cyan)]">Escalando Labs</div>
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid min-w-[860px] grid-cols-[0.8fr_1fr_1fr_1.15fr_1.25fr] border-b border-[var(--border-soft)] last:border-b-0"
                >
                  <div className="p-4 text-sm font-bold text-[var(--text-strong)]">{row.label}</div>
                  <div className="p-4 text-sm leading-6 text-[var(--text-secondary)]">{row.chatbot}</div>
                  <div className="p-4 text-sm leading-6 text-[var(--text-secondary)]">{row.crm}</div>
                  <div className="p-4 text-sm leading-6 text-[var(--text-secondary)]">{row.platforms}</div>
                  <div className="bg-cyan-400/[0.055] p-4 text-sm font-semibold leading-6 text-[var(--text-strong)]">{row.escalando}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>Prueba y riesgo</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Antes de activar, necesitás claridad. Después, necesitás control.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Escalando Labs no promete magia ni volumen ciego. Propone una implementación cuidada, con límites claros y operación revisable.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
              La mejor prueba posible hoy no es inventar autoridad. Es mostrar con transparencia qué se configura, qué control conserva el negocio, qué depende de terceros y cómo se ordena la operación antes de escalar.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-8 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {proofBullets.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-[var(--text-secondary)]">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="/demo"
                data-analytics-location="risk_demo"
                className="mt-8 inline-flex items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] px-6 py-3 text-sm font-bold text-[var(--text-strong)] transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
              >
                Ver demo visual
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="planes" data-analytics-view="pricing_view" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="max-w-4xl">
          <SectionLabel>Pricing + encaje</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
            Precios pensados para software, implementación y criterio comercial.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            No competimos por ser lo más barato ni por prometer mensajes ilimitados. El precio refleja configuración, acompañamiento y operación responsable.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)]">
            El pricing tiene que ayudar a responder dos preguntas: qué tipo de operación estás comprando y si tu caso encaja hoy. No es una compra impulsiva. Es una decisión operativa.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {fitBullets.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--text-secondary)]"
            >
              <CheckIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 90}
              as="article"
              className={`relative rounded-[2rem] border p-7 shadow-[var(--shadow-soft)] ${
                plan.featured
                  ? "border-cyan-400/35 bg-cyan-400/[0.08] lg:-mt-4 lg:mb-4"
                  : "border-[var(--border-soft)] bg-[var(--panel)]"
              }`}
            >
              {plan.featured ? (
                <div className="absolute right-6 top-6 rounded-full bg-[var(--brand-magenta)] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                  Recomendado
                </div>
              ) : null}
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Plan {plan.name}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{plan.subtitle}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{plan.target}</p>
              <div className="mt-7">
                <span className="text-4xl font-semibold tracking-[-0.05em] text-[var(--text-strong)]">{plan.price}</span>
                <span className="text-[var(--text-muted)]"> / mes</span>
                <p className="mt-2 text-sm font-semibold text-[var(--brand-cyan)]">{plan.setup}</p>
              </div>
              <a
                href={whatsappUrl(`Hola, quiero solicitar un diagnóstico comercial para evaluar si el Plan ${plan.name} encaja en mi operación de WhatsApp.`)}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-location={`plan_${plan.name.toLowerCase()}`}
                className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--text-strong)] px-5 py-3.5 text-sm font-bold text-[var(--background)] transition hover:-translate-y-0.5"
              >
                Solicitar diagnóstico comercial ↗
              </a>
              <div className="mt-7 space-y-3">
                {plan.includes.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">Límites sugeridos</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {plan.limits.map((limit) => (
                    <li key={limit}>• {limit}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180} className="mt-6 rounded-3xl border border-amber-300/25 bg-amber-300/[0.08] p-6 text-sm leading-7 text-[var(--text-secondary)]">
          <strong className="text-[var(--text-strong)]">Nota clara:</strong> Los cargos de WhatsApp Business Platform, Twilio, Meta u otros proveedores pueden cobrarse aparte según uso, país y tipo de mensaje. Te ayudamos a estimarlos antes de activar campañas.
        </Reveal>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>Objeciones</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Lo importante no es automatizar más. Es automatizar con criterio.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Estas son las dudas que normalmente frenan la decisión y cómo se resuelven.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
              Si una objeción es válida, se responde con límites claros, no con promesas infladas.
            </p>
          </Reveal>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 80} as="article" className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-6">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[var(--border-soft)] bg-[var(--panel)] p-8 text-center shadow-[var(--shadow-strong)] md:p-16">
          <div className="mx-auto flex justify-center">
            <BrandMark size="lg" />
          </div>
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.055em] text-[var(--text-strong)] md:text-6xl">
            WhatsApp deja de ser caos cuando pasa a tener sistema.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
            Escalando Labs te ayuda a ordenar, atender, recuperar y medir desde un solo lugar, con IA y control humano.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)]">
            Si hoy tu operación comercial depende de memoria humana, respuestas aisladas y seguimientos manuales, el problema no es responder más rápido. El problema es no tener sistema. El siguiente paso es diagnosticar qué parte de tu operación conviene ordenar primero.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl("Hola, quiero solicitar un diagnóstico comercial para evaluar mi operación en WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-location="final_cta"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--text-strong)] px-7 py-4 text-base font-bold text-[var(--background)] shadow-[var(--shadow-strong)] transition hover:-translate-y-0.5"
            >
              Solicitar diagnóstico comercial ↗
            </a>
            <a
              href="/demo"
              data-analytics-location="final_demo"
              className="inline-flex items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-7 py-4 text-base font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)]"
            >
              Ver demo visual
            </a>
          </div>
        </Reveal>
      </section>

      <a
        href={whatsappUrl("Hola, quiero solicitar un diagnóstico comercial para mi operación en WhatsApp.")}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-location="mobile_sticky_cta"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-[var(--text-strong)] px-5 py-3 text-sm font-bold text-[var(--background)] shadow-[var(--shadow-strong)] sm:hidden"
      >
        Diagnóstico ↗
      </a>

      <footer className="border-t border-[var(--border-soft)] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <BrandMark showLabel size="sm" />
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Páginas legales">
            <a className="transition hover:text-[var(--text-strong)]" href="/privacidad">
              Privacidad
            </a>
            <a className="transition hover:text-[var(--text-strong)]" href="/terminos">
              Términos
            </a>
            <a className="transition hover:text-[var(--text-strong)]" href="/contacto">
              Contacto
            </a>
            <a className="transition hover:text-[var(--text-strong)]" href="/eliminacion-datos">
              Eliminación de datos
            </a>
          </nav>
          <p>© {new Date().getFullYear()} Escalando Labs. Operación comercial medible para WhatsApp.</p>
        </div>
      </footer>
    </main>
  );
}
