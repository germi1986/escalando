import BrandMark from "./components/BrandMark";
import ThemeToggle from "./components/ThemeToggle";

const whatsappUrl =
  "https://wa.me/5491153230859?text=Hola,%20quiero%20una%20demo%20de%20Escalando%20Labs";

const trustBadges = [
  "Atención IA + humana",
  "Campañas responsables",
  "CRM propio",
  "Auditoría en tiempo real",
  "Datos exportables",
  "IA entrenada para tu negocio",
];

const painPoints = [
  {
    title: "Consultas que se pierden",
    text: "WhatsApp recibe intención de compra todo el día, pero muchas conversaciones quedan sin seguimiento real.",
  },
  {
    title: "Clientes dormidos",
    text: "La base ya existe: clientes que compraron, preguntaron o quedaron cerca de cerrar y nunca volvieron a ser contactados.",
  },
  {
    title: "Equipo sin sistema",
    text: "Cada operador responde como puede, sin contexto, sin historial comercial claro y sin métricas de operación.",
  },
  {
    title: "Campañas mal usadas",
    text: "Enviar por enviar no es estrategia. En WhatsApp, la insistencia sin criterio puede dañar la línea y la reputación.",
  },
  {
    title: "Más ads, menos control",
    text: "Comprar leads nuevos cada vez cuesta más. Antes de invertir más, conviene ordenar lo que ya tenés.",
  },
  {
    title: "Datos atrapados",
    text: "Contactos, notas, pedidos y oportunidades quedan repartidos en celulares, chats, planillas y memoria humana.",
  },
];

const solutionSteps = [
  {
    kpi: "01",
    title: "Atiende",
    text: "La IA responde preguntas frecuentes, entiende promociones y mantiene una conversación clara con información real del negocio.",
  },
  {
    kpi: "02",
    title: "Ordena",
    text: "Centraliza clientes, conversaciones, estados y datos comerciales para que WhatsApp deje de ser una bandeja caótica.",
  },
  {
    kpi: "03",
    title: "Deriva",
    text: "Cuando hace falta criterio humano, el sistema permite tomar la conversación y devolverla a IA sin perder trazabilidad.",
  },
  {
    kpi: "04",
    title: "Recupera",
    text: "Ayuda a reactivar clientes dormidos, consultas frías y oportunidades que quedaron sin cierre comercial.",
  },
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
    text: "Identidad del negocio, horarios, ubicación, envíos, pagos, políticas, personalidad, FAQ, promociones, productos y objetivos comerciales.",
  },
  {
    title: "Conversaciones centralizadas",
    text: "Bandeja para ordenar WhatsApp con modo IA / humano, lectura de mensajes, alertas operativas y continuidad de atención.",
  },
  {
    title: "CRM de clientes",
    text: "Carga manual, edición, eliminación, importación CSV, exportación y controles para evitar duplicados por negocio.",
  },
  {
    title: "Campañas responsables",
    text: "Estados de campaña, activación controlada, riesgo de envío, contactos asociados, lotes, horarios y reglas de seguridad.",
  },
  {
    title: "Multiempresa y roles",
    text: "Gestión por negocio activo, invitaciones, propietarios, administradores y operadores para separar accesos y operación.",
  },
  {
    title: "Auditoría y salud",
    text: "Registro de acciones, pantalla de salud operativa, métricas de actividad, watchdog, campañas y checks críticos del sistema.",
  },
  {
    title: "Integraciones preparadas",
    text: "Base técnica para conectar n8n, Supabase, WhatsApp/Twilio y sistemas externos según el caso real de cada negocio.",
  },
  {
    title: "Datos bajo control",
    text: "La información comercial se puede ordenar, consultar y exportar. La operación no queda escondida en un celular.",
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
    platforms: "El cliente suele configurar buena parte del sistema",
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
  {
    label: "Control humano",
    chatbot: "Puede quedar rígido",
    crm: "Humano primero",
    platforms: "Depende de la configuración",
    escalando: "IA asistida, con intervención humana cuando corresponde",
  },
];

const salesArguments = [
  {
    title: "No es solo un chatbot",
    text: "El eje no es automatizar respuestas, sino ordenar atención, seguimiento, datos y recuperación comercial desde WhatsApp.",
    strength: 5,
    place: "Hero / Solución",
  },
  {
    title: "La base propia vale más de lo que parece",
    text: "Muchos negocios ya tienen clientes, consultas y conversaciones con intención. Escalando Labs ayuda a volver accionable esa información.",
    strength: 5,
    place: "Problema / Base dormida",
  },
  {
    title: "Antes de comprar más leads, recuperá los que ya tenés",
    text: "Cuando la publicidad se vuelve más competida, mejorar la conversión de la base existente puede ser una decisión más eficiente.",
    strength: 5,
    place: "Hero / Cierre",
  },
  {
    title: "Campañas responsables, no spam",
    text: "WhatsApp necesita frecuencia, segmentación, horarios y vínculo real. La solución prioriza cuidado operativo antes que volumen ciego.",
    strength: 5,
    place: "No es spam / Pricing",
  },
  {
    title: "Automatización con control humano",
    text: "La IA atiende, pero el equipo puede intervenir cuando la conversación requiere criterio, sensibilidad o cierre manual.",
    strength: 4,
    place: "Solución / Funcionalidades",
  },
  {
    title: "Tus datos siguen siendo tuyos",
    text: "La operación se ordena en sistema y puede exportarse. Esto evita que la información comercial quede atrapada en chats dispersos.",
    strength: 4,
    place: "Funcionalidades / Cierre",
  },
  {
    title: "IA entrenada con información real",
    text: "Horarios, políticas, envíos, pagos, promociones, productos y tono de marca alimentan respuestas más útiles y menos genéricas.",
    strength: 4,
    place: "Funcionalidades / Cerebro",
  },
  {
    title: "Operación auditable",
    text: "La actividad deja señales: campañas, errores, watchdog, lecturas y registros. Eso permite corregir sin trabajar a ciegas.",
    strength: 4,
    place: "Funcionalidades / Comparativa",
  },
  {
    title: "Implementación acompañada",
    text: "No se entrega una herramienta vacía: se configura según el negocio, su base, sus promociones y sus límites comerciales.",
    strength: 5,
    place: "Comparativa / Pricing",
  },
  {
    title: "Preparado para integrarse",
    text: "El sistema puede conectar fuentes y herramientas externas mediante automatizaciones e integraciones según necesidad y complejidad.",
    strength: 3,
    place: "Funcionalidades / Plan Escala",
  },
  {
    title: "Seguimiento sin depender de la memoria",
    text: "Las oportunidades no cerradas pueden identificarse y trabajarse con reglas, estados y recordatorios comerciales.",
    strength: 4,
    place: "Base dormida / Solución",
  },
  {
    title: "WhatsApp como canal comercial, no solo mensajería",
    text: "El objetivo es que cada conversación tenga contexto, estado y posibilidad de medición, no que quede perdida en una bandeja infinita.",
    strength: 5,
    place: "Hero / Cierre",
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
    question: "¿Qué pasa con mis datos?",
    answer:
      "Tus clientes, conversaciones y registros son parte de tu operación. El sistema contempla exportación y evita que la información quede encerrada en chats sueltos.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-cyan)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-magenta)] shadow-[0_0_18px_rgba(217,70,239,0.85)]" />
      {children}
    </div>
  );
}

function CheckIcon() {
  return <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-cyan)] shadow-[0_0_18px_rgba(34,211,238,0.55)]" />;
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:max-w-none">
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.20),transparent_58%)] blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] p-4 shadow-[var(--shadow-strong)] backdrop-blur-2xl">
        <div className="flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
          </div>
          <span className="text-xs font-semibold text-[var(--text-muted)]">Operación WhatsApp · En vivo</span>
        </div>

        <div className="grid gap-4 pt-4 md:grid-cols-[1fr_0.9fr]">
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
                  ["Campañas seguras", "Activo"],
                  ["Watchdog", "OK"],
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
  const topArguments = salesArguments.filter((item) => item.strength === 5).slice(0, 5);

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
            <a className="transition hover:text-[var(--text-strong)]" href="#solucion">Solución</a>
            <a className="transition hover:text-[var(--text-strong)]" href="#funcionalidades">Funcionalidades</a>
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

      <section id="inicio" className="relative">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-cyan)] shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              Infraestructura comercial conversacional para WhatsApp
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-[var(--text-strong)] sm:text-6xl lg:text-7xl">
              IA comercial para WhatsApp que atiende, ordena y recupera clientes.
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
                Quiero una demo ↗
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-7 py-4 text-base font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
              >
                Ver cómo funciona
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

          <HeroVisual />
        </div>
      </section>

      <section id="problema" className="border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <SectionLabel>El problema real</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Muchos negocios ya tienen clientes. Lo que no tienen es una forma de aprovecharlos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              WhatsApp concentra ventas, soporte, consultas y promesas comerciales. Sin sistema, todo eso depende de memoria, velocidad y buena voluntad.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--border-strong)]"
              >
                <div className="mb-6 h-11 w-11 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] shadow-[0_0_28px_rgba(34,211,238,0.10)]" />
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucion" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>La solución</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Convertimos tu WhatsApp en una operación comercial medible.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Escalando Labs combina IA, CRM, campañas cuidadas, auditoría e intervención humana para que cada conversación tenga contexto y próximo paso.
            </p>
          </div>

          <div id="como-funciona" className="grid gap-4">
            {solutionSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-7 shadow-[var(--shadow-soft)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--text-strong)] text-sm font-black text-[var(--background)]">
                    {step.kpi}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[var(--text-strong)]">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{step.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--border-soft)] bg-[var(--panel)]">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.16),transparent_30%),radial-gradient(circle_at_75%_35%,rgba(34,211,238,0.14),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
          <div>
            <SectionLabel>No es spam, es estrategia</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              En WhatsApp, volumen sin criterio es riesgo.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-8 shadow-[var(--shadow-soft)] backdrop-blur-xl">
            <p className="text-2xl font-semibold leading-snug tracking-[-0.035em] text-[var(--text-strong)]">
              En WhatsApp no existe la campaña masiva sana si no hay segmentación, frecuencia y vínculo real.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "No vendemos spam ni promesas de miles de mensajes sin estrategia.",
                "Cuidamos horarios, frecuencia y reputación del número.",
                "Priorizamos clientes con relación previa o consentimiento válido.",
                "Medimos progresivamente antes de escalar volumen.",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[var(--text-secondary)]">
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <SectionLabel>Base de datos dormida</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Tu próxima venta puede estar en una conversación vieja.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Antes de comprar más leads, conviene revisar clientes que ya conocen tu marca. Ahí suele haber intención, confianza y oportunidades invisibles.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.10] px-6 py-3 font-bold text-[var(--text-strong)] transition hover:-translate-y-0.5 hover:bg-cyan-400/[0.16]"
            >
              Evaluar mi base de clientes
            </a>
          </div>

          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)]">
            <div className="space-y-3">
              {databaseSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--text-secondary)]"
                >
                  <CheckIcon />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionLabel>Funcionalidades reales detectadas</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
                Plataforma, operación y criterio comercial en un solo sistema.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
              Esta sección fue redactada en base a las rutas y componentes presentes en los archivos adjuntos. Las integraciones externas quedan planteadas como implementación según caso.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--border-strong)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <SectionLabel>Comparativa</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
            Las grandes plataformas te dan herramientas. Escalando Labs te ayuda a convertirlas en operación.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            Manychat, Wati, Respond.io, Botmaker, Kommo, Zenvia o Callbell pueden ser muy buenas opciones según el caso. Nuestro diferencial está en combinar plataforma, implementación, estrategia y adaptación a PyMEs reales de la región.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] shadow-[var(--shadow-soft)]">
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
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <SectionLabel>Argumentos de venta</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              12 razones concretas para elegir una operación conversacional.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {salesArguments.map((argument) => (
              <article key={argument.title} className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{argument.title}</h3>
                  <span className="rounded-full border border-[var(--border-soft)] px-2.5 py-1 text-xs font-bold text-[var(--brand-cyan)]">
                    {argument.strength}/5
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{argument.text}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{argument.place}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-cyan-400/25 bg-cyan-400/[0.08] p-7">
            <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[var(--text-strong)]">Los 5 más fuertes para sostener la landing</h3>
            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {topArguments.map((argument) => (
                <div key={argument.title} className="rounded-2xl border border-cyan-400/20 bg-[var(--panel)] p-4 text-sm font-semibold leading-6 text-[var(--text-strong)]">
                  {argument.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <SectionLabel>Planes y pricing</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
            Precios pensados para software, implementación y acompañamiento.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            No competimos por barato ni prometemos mensajes ilimitados. El precio debe reflejar configuración, criterio comercial y operación responsable.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[2rem] border p-7 shadow-[var(--shadow-soft)] ${
                plan.featured
                  ? "border-cyan-400/35 bg-cyan-400/[0.08]"
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
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-amber-300/25 bg-amber-300/[0.08] p-6 text-sm leading-7 text-[var(--text-secondary)]">
          <strong className="text-[var(--text-strong)]">Nota clara:</strong> Los cargos de WhatsApp Business Platform, Twilio, Meta u otros proveedores pueden cobrarse aparte según uso, país y tipo de mensaje. Te ayudamos a estimarlos antes de activar campañas.
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[var(--section-soft)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          <div>
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
              Claro antes de empezar. Medible después de activar.
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-6">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[var(--border-soft)] bg-[var(--panel)] p-8 text-center shadow-[var(--shadow-strong)] md:p-16">
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
        </div>
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
