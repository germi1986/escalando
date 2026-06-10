import type { CSSProperties, ReactNode } from "react";
import BrandMark from "./components/BrandMark";
import Reveal from "./components/Reveal";
import ThemeToggle from "./components/ThemeToggle";

const whatsappUrl =
  "https://wa.me/5491153230859?text=Hola,%20quiero%20una%20demo%20de%20Escalando%20Labs";

const trustBadges = [
  "IA + humano",
  "CRM WhatsApp",
  "Campañas responsables",
  "Base recuperable",
  "Auditoría operativa",
  "Datos exportables",
];

const painPoints = [
  {
    title: "Consultas que se pierden",
    text: "WhatsApp recibe intención de compra todo el día, pero muchas conversaciones quedan sin seguimiento real.",
    icon: "chat",
    signal: "Sin próximo paso",
    accent: "rgba(34, 211, 238, 0.22)",
  },
  {
    title: "Clientes dormidos",
    text: "La base ya existe: clientes que compraron, preguntaron o quedaron cerca de cerrar y nunca volvieron a ser contactados.",
    icon: "sleep",
    signal: "Valor inmóvil",
    accent: "rgba(52, 211, 153, 0.22)",
  },
  {
    title: "Equipo sin sistema",
    text: "Cada operador responde como puede, sin contexto, sin historial comercial claro y sin métricas de operación.",
    icon: "team",
    signal: "Memoria humana",
    accent: "rgba(37, 99, 235, 0.2)",
  },
  {
    title: "Campañas mal usadas",
    text: "Enviar por enviar no es estrategia. En WhatsApp, la insistencia sin criterio puede dañar la línea y la reputación.",
    icon: "warning",
    signal: "Riesgo de bloqueo",
    accent: "rgba(251, 146, 60, 0.24)",
  },
  {
    title: "Más ads, menos control",
    text: "Comprar leads nuevos cada vez cuesta más. Antes de invertir más, conviene ordenar lo que ya tenés.",
    icon: "chart",
    signal: "Costo creciente",
    accent: "rgba(217, 70, 239, 0.2)",
  },
  {
    title: "Datos atrapados",
    text: "Contactos, notas, pedidos y oportunidades quedan repartidos en celulares, chats, planillas y memoria humana.",
    icon: "data",
    signal: "Información dispersa",
    accent: "rgba(45, 212, 191, 0.24)",
  },
];

const selectedArguments = [
  {
    title: "La base propia vale más de lo que parece",
    text: "Tus clientes, consultas y conversaciones históricas ya tienen vínculo con tu negocio. La oportunidad está en ordenarlas y volverlas accionables.",
    use: "Oportunidad comercial",
    icon: "database",
  },
  {
    title: "Antes de comprar leads, recuperá los que ya tenés",
    text: "Cuando los anuncios se encarecen, trabajar mejor la base existente puede ser una decisión más eficiente y controlable.",
    use: "Insight de conversión",
    icon: "recover",
  },
  {
    title: "Campañas responsables, no spam",
    text: "WhatsApp necesita segmentación, frecuencia, horarios y criterio. El sistema prioriza cuidado operativo antes que volumen ciego.",
    use: "Diferencial de seguridad",
    icon: "shield",
  },
  {
    title: "IA entrenada con información real",
    text: "La IA no responde desde frases genéricas: trabaja con horarios, políticas, promociones, productos, tono y objetivos del negocio.",
    use: "Diferencial técnico",
    icon: "brain",
  },
  {
    title: "Implementación acompañada",
    text: "No entregamos una herramienta vacía. Configuramos el sistema con criterio comercial para que tenga sentido en la operación real.",
    use: "Diferencial de servicio",
    icon: "hands",
  },
];

const solutionSteps = [
  {
    kpi: "01",
    title: "Atiende",
    text: "La IA responde preguntas frecuentes, entiende promociones y mantiene una conversación clara con información del negocio.",
  },
  {
    kpi: "02",
    title: "Ordena",
    text: "Centraliza clientes, conversaciones, estados y datos comerciales para que WhatsApp deje de ser una bandeja caótica.",
  },
  {
    kpi: "03",
    title: "Deriva",
    text: "Cuando hace falta criterio humano, el equipo puede tomar la conversación sin perder contexto ni trazabilidad.",
  },
  {
    kpi: "04",
    title: "Recupera",
    text: "Ayuda a reactivar clientes dormidos, consultas frías y oportunidades que quedaron sin cierre comercial.",
  },
];

const safeCampaigns = [
  "No vendemos spam ni promesas de miles de mensajes sin estrategia.",
  "Cuidamos horarios, frecuencia y reputación del número.",
  "Priorizamos clientes con relación previa, contexto o consentimiento válido.",
  "Medimos progresivamente antes de escalar volumen.",
];

const databaseSignals = [
  "Clientes que compraron una vez y no volvieron",
  "Personas que pidieron precio y quedaron frías",
  "Pedidos o consultas abandonadas",
  "Contactos importados desde CSV o fuentes disponibles",
  "Segmentos por estado, interés o historial",
  "Datos descargables para no quedar cautivo del sistema",
];

const features = [
  {
    title: "IA comercial configurable",
    text: "Identidad, horarios, envíos, pagos, políticas, FAQ, promociones y objetivos comerciales.",
  },
  {
    title: "Conversaciones centralizadas",
    text: "Bandeja para ordenar WhatsApp con modo IA / humano, alertas operativas y continuidad de atención.",
  },
  {
    title: "CRM de clientes",
    text: "Carga manual, importación CSV, edición, exportación y controles para trabajar sobre la base propia.",
  },
  {
    title: "Campañas responsables",
    text: "Estados, activación controlada, lotes, horarios y criterios de seguridad para no enviar por enviar.",
  },
  {
    title: "Auditoría y salud",
    text: "Señales de actividad, watchdog, errores, campañas y controles críticos para no operar a ciegas.",
  },
  {
    title: "Integraciones a medida",
    text: "Base técnica para conectar WhatsApp, automatizaciones y sistemas externos según necesidad y alcance.",
  },
];

const howItWorks = [
  {
    title: "Diagnóstico",
    text: "Revisamos cómo vendés por WhatsApp, qué información existe y dónde se pierden oportunidades.",
  },
  {
    title: "Configuración",
    text: "Cargamos conocimiento real del negocio: horarios, respuestas, promociones, límites y tono comercial.",
  },
  {
    title: "Activación cuidada",
    text: "La IA empieza a asistir, el equipo conserva control y las campañas se prueban de forma progresiva.",
  },
  {
    title: "Medición y ajuste",
    text: "Se revisan señales de operación para mejorar respuestas, seguimiento y recuperación de clientes.",
  },
];

const comparisonRows = [
  {
    label: "Enfoque",
    chatbot: "Responder mensajes",
    crm: "Registrar clientes",
    platforms: "Dar herramientas configurables",
    escalando: "Convertir WhatsApp en operación comercial medible",
  },
  {
    label: "Implementación",
    chatbot: "Flujos básicos",
    crm: "Carga y adopción interna",
    platforms: "El cliente configura gran parte del sistema",
    escalando: "Plataforma + configuración + criterio comercial",
  },
  {
    label: "Campañas",
    chatbot: "Broadcast simple o limitado",
    crm: "Acciones externas",
    platforms: "Muy potentes, pero requieren estrategia",
    escalando: "Segmentación, frecuencia y límites sanos",
  },
  {
    label: "Base dormida",
    chatbot: "No suele ser el eje",
    crm: "Depende del uso del equipo",
    platforms: "Posible, pero no siempre guiado",
    escalando: "Recuperación comercial como prioridad",
  },
];

const plans = [
  {
    name: "Inicial",
    subtitle: "WhatsApp IA",
    price: "USD 149",
    setup: "Setup desde USD 300",
    target: "Para negocios que quieren ordenar y automatizar la atención por WhatsApp.",
    cta: "Empezar ordenado",
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
    target: "Para negocios con base de clientes que quieren recuperar ventas y medir mejor.",
    cta: "Recuperar clientes",
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
    target: "Para equipos con más volumen, varios operadores o integraciones externas.",
    cta: "Evaluar mi caso",
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
    question: "¿Escalando Labs reemplaza a mi equipo?",
    answer:
      "No. La IA atiende, ordena y ayuda a recuperar oportunidades, pero el equipo puede intervenir cuando haga falta criterio humano o cierre comercial.",
  },
  {
    question: "¿Puedo hacer campañas masivas?",
    answer:
      "La idea no es enviar por enviar. Trabajamos campañas progresivas, segmentadas y cuidadas para proteger la línea, la reputación y la experiencia del cliente.",
  },
  {
    question: "¿Los costos de WhatsApp están incluidos?",
    answer:
      "No necesariamente. WhatsApp Business Platform, Twilio, Meta u otros proveedores pueden cobrar aparte según país, categoría y uso del mensaje.",
  },
  {
    question: "¿Tengo que diseñar todos los flujos yo?",
    answer:
      "No. El diferencial es implementación acompañada: se configura el sistema con información real del negocio y criterio comercial.",
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

  if (name === "sleep") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 18h8l-8-8h8" />
        <path d="M15 6h5l-5 5h5" />
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

  if (name === "warning") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 22 20H2L12 3Z" />
        <path d="M12 9v5" />
        <path d="M12 17h.01" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
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

  if (name === "recover") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12a8 8 0 1 0 2.3-5.7" />
        <path d="M4 4v6h6" />
        <path d="M12 8v5l3 2" />
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

  if (name === "brain") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 4.5a3 3 0 0 0-3 3v.4A3.5 3.5 0 0 0 4.5 14 3.5 3.5 0 0 0 8 19h1" />
        <path d="M15 4.5a3 3 0 0 1 3 3v.4A3.5 3.5 0 0 1 19.5 14 3.5 3.5 0 0 1 16 19h-1" />
        <path d="M12 5v14" />
        <path d="M9 9h3" />
        <path d="M12 13h3" />
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
          <span className="text-xs font-semibold text-[var(--text-muted)]">WhatsApp Ops · En vivo</span>
        </div>

        <div className="relative grid gap-4 pt-4 md:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-5">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>Cliente · 14:32</span>
                <span>Inbound</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-strong)]">
                Hola, compré hace unos meses. ¿Sigue vigente la promo de esta semana?
              </p>
            </div>

            <div className="ml-6 rounded-3xl border border-cyan-400/25 bg-cyan-400/[0.08] p-5 shadow-[0_0_34px_rgba(34,211,238,0.10)]">
              <div className="flex items-center justify-between text-xs text-[var(--brand-cyan)]">
                <span>IA comercial</span>
                <span>Respuesta sugerida</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-strong)]">
                Sí, sigue vigente hasta el jueves. Te puedo pasar opciones y dejar el pedido listo si querés.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs text-[var(--text-muted)]">Modo</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text-strong)]">IA + humano</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs text-[var(--text-muted)]">Base</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text-strong)]">recuperable</p>
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
                  ["Consultas ordenadas", "94%"],
                  ["Campañas cuidadas", "Activo"],
                  ["Control humano", "OK"],
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
            <a className="transition hover:text-[var(--text-strong)]" href="#planes">Planes</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[var(--text-strong)] px-5 py-2.5 text-sm font-bold text-[var(--background)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)] sm:inline-flex"
            >
              Demo ↗
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
                Infraestructura comercial conversacional para WhatsApp
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-[var(--text-strong)] sm:text-6xl lg:text-7xl">
                IA comercial para WhatsApp que <span className="landing-gradient-text">atiende, ordena y recupera</span> clientes.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                No es solo un chatbot. Es una operación comercial asistida por IA para responder mejor, cuidar el control humano y convertir conversaciones viejas en nuevas oportunidades.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--text-strong)] px-7 py-4 text-base font-bold text-[var(--background)] shadow-[var(--shadow-strong)] transition hover:-translate-y-0.5"
                >
                  Quiero recuperar clientes ↗
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-7 py-4 text-base font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
                >
                  Ver demo visual
                </a>
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
          <Reveal className="max-w-3xl">
            <SectionLabel>El problema real</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              La venta no se pierde solo por falta de demanda. También se pierde por falta de sistema.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              WhatsApp concentra ventas, soporte, consultas y promesas comerciales. Sin sistema, todo depende de memoria, velocidad y buena voluntad.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} as="article" className="problem-card group rounded-3xl border border-[var(--border-soft)] p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-strong)]"
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
            <SectionLabel>Oportunidad comercial</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Tu próxima venta puede estar en una conversación vieja, no en un anuncio nuevo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              La base propia vale más de lo que parece. Antes de comprar más leads, conviene revisar clientes que ya conocen tu marca, preguntaron, compraron o quedaron cerca de cerrar.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2.25rem] border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-2">
                {databaseSignals.map((signal, index) => (
                  <div
                    key={signal}
                    className={`flex items-start gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--text-secondary)] ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <CheckIcon />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400/[0.12] px-6 py-3 font-bold text-[var(--text-strong)] transition hover:-translate-y-0.5 hover:bg-cyan-400/[0.18]"
              >
                Evaluar mi base de clientes
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--border-soft)] bg-[var(--panel)]">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.16),transparent_30%),radial-gradient(circle_at_75%_35%,rgba(34,211,238,0.14),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>IA bien integrada</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              La IA conversacional ya no es experimental. El problema es integrarla bien.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-8 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <p className="text-2xl font-semibold leading-snug tracking-[-0.035em] text-[var(--text-strong)]">
                Muchos negocios ya probaron IA. Pocos la conectaron con base de clientes, reglas comerciales, seguimiento, control humano y medición.
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                Escalando Labs apunta a esa brecha: no se trata de “tener IA”, sino de convertirla en una operación comercial concreta, cuidada y revisable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="solucion" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <SectionLabel>La solución</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Convertimos tu WhatsApp en una operación comercial medible.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Escalando Labs combina IA, CRM, campañas cuidadas, auditoría e intervención humana para que cada conversación tenga contexto y próximo paso.
            </p>
          </Reveal>

          <div id="como-funciona" className="grid gap-4">
            {solutionSteps.map((step, index) => (
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

      <section className="border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>5 argumentos clave</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              El diferencial no está en responder rápido. Está en vender mejor sin perder control.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {selectedArguments.map((argument, index) => (
              <Reveal key={argument.title} delay={index * 80} as="article" className={`rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] ${index < 2 ? "lg:col-span-2" : ""}`}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-[var(--brand-cyan)]">
                  <Glyph name={argument.icon} />
                </div>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[var(--brand-green)]">{argument.use}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-[var(--text-strong)]">{argument.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{argument.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[var(--border-soft)] bg-[var(--panel)]">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.16),transparent_30%),radial-gradient(circle_at_75%_35%,rgba(34,211,238,0.14),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>No es spam, es estrategia</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              En WhatsApp, volumen sin criterio es riesgo.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-8 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <p className="text-2xl font-semibold leading-snug tracking-[-0.035em] text-[var(--text-strong)]">
                En WhatsApp no existe la campaña masiva sana si no hay segmentación, frecuencia y vínculo real.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {safeCampaigns.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-[var(--text-secondary)]">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionLabel>Cómo funciona</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
            Un camino simple para pasar de WhatsApp caótico a sistema comercial.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} as="article" className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--surface-strong)] text-sm font-black text-[var(--brand-cyan)]">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em] text-[var(--text-strong)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="funcionalidades" className="border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-3xl">
              <SectionLabel>Funcionalidades</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
                Plataforma, operación y criterio comercial en un solo sistema.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
                Las integraciones externas se plantean como implementación según caso, alcance técnico y necesidad real del negocio.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 70} as="article" className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--border-strong)]">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{feature.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionLabel>Comparativa</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
            Las grandes plataformas te dan herramientas. Escalando Labs te ayuda a convertirlas en operación.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            Muchas herramientas son muy buenas según el caso. Nuestro diferencial está en combinar plataforma, implementación, estrategia y adaptación a PyMEs reales de la región.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] shadow-[var(--shadow-soft)]">
          <div className="overflow-x-auto">
            <div className="grid min-w-[860px] grid-cols-[0.72fr_1fr_1fr_1.15fr_1.3fr] border-b border-[var(--border-soft)] bg-[var(--surface-soft)] text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              <div className="p-4">Criterio</div>
              <div className="p-4">Chatbot básico</div>
              <div className="p-4">CRM tradicional</div>
              <div className="p-4">Plataformas globales</div>
              <div className="p-4 text-[var(--brand-cyan)]">Escalando Labs</div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid min-w-[860px] grid-cols-[0.72fr_1fr_1fr_1.15fr_1.3fr] border-b border-[var(--border-soft)] last:border-b-0"
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
      </section>

      <section id="planes" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionLabel>Planes y pricing</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
            Precios pensados para software, implementación y acompañamiento.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            No competimos por barato ni prometemos mensajes ilimitados. El precio debe reflejar configuración, criterio comercial y operación responsable.
          </p>
        </Reveal>

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
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--text-strong)] px-5 py-3.5 text-sm font-bold text-[var(--background)] transition hover:-translate-y-0.5"
              >
                {plan.cta}
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
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Claro antes de empezar. Medible después de activar.
            </h2>
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
            WhatsApp deja de ser caos y empieza a ser sistema.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Atendé, clasificá, recuperá y medí desde un solo lugar, con IA entrenada para tu negocio y control humano cuando corresponde.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--text-strong)] px-7 py-4 text-base font-bold text-[var(--background)] shadow-[var(--shadow-strong)] transition hover:-translate-y-0.5"
            >
              Hablar con Escalando Labs ↗
            </a>
            <a
              href="#planes"
              className="inline-flex items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-7 py-4 text-base font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)]"
            >
              Ver planes
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[var(--border-soft)] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <BrandMark showLabel size="sm" />
          <p>© {new Date().getFullYear()} Escalando Labs. Automatización comercial con IA para WhatsApp.</p>
        </div>
      </footer>
    </main>
  );
}
