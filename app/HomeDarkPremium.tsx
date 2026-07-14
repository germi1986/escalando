import Image from 'next/image'
import { IBM_Plex_Mono, Manrope } from 'next/font/google'
import HeroProductCarousel from './HeroProductCarousel'
import ScrollReveal from './ScrollReveal'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-dark-sans',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dark-mono',
  display: 'swap',
})

const NAV_ITEMS = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Canales', href: '#canales' },
  { label: 'Campañas', href: '#campanias' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Planes', href: '#precios' },
]

const OUTCOMES = [
  {
    icon: 'message',
    title: 'Venta cerrada',
    text: 'WhatsApp, historial y seguimiento en un mismo flujo comercial.',
  },
  {
    icon: 'route',
    title: 'Pago o turno confirmado',
    text: 'El equipo ve estado, responsable y qué acción sigue.',
  },
  {
    icon: 'shield',
    title: 'Difusión revisada',
    text: 'Listas de difusión, segmentación y consentimiento antes del envío.',
  },
] as const

const PROBLEMS = [
  'WhatsApp, Instagram, web y Messenger terminan repartidos entre personas.',
  'El seguimiento depende de memoria o planillas sueltas.',
  'Las campañas y listas de difusión salen sin suficiente trazabilidad.',
]

const RESPONSIBLE_RULES = [
  {
    title: 'Consentimiento primero',
    text: 'Trabajar sobre contactos que aceptaron recibir comunicaciones y respetar las solicitudes de baja.',
  },
  {
    title: 'Listas con criterio',
    text: 'Armar listas de difusión y campañas según relación, interés, etapa comercial y objetivo.',
  },
  {
    title: 'Frecuencia controlada',
    text: 'Definir horarios, pausas y límites para no saturar al cliente ni deteriorar el canal.',
  },
]

const FLOW_STEPS = [
  {
    eyebrow: 'Entrada',
    title: 'Responder con contexto',
    text: 'La consulta entra con contacto, canal e historial para que el equipo no arranque desde cero.',
  },
  {
    eyebrow: 'Operación',
    title: 'Ordenar seguimiento y ventas',
    text: 'IA y equipo humano trabajan sobre el mismo cliente, la misma oportunidad y la misma conversación.',
  },
  {
    eyebrow: 'Activación',
    title: 'Activar campañas y listas',
    text: 'Las listas de difusión y campañas salen con segmentación, frecuencia y plantillas cuando hacen falta.',
  },
]

const CHANNELS = [
  { name: 'WhatsApp', state: 'Principal', detail: 'WhatsApp Business Platform oficial para atención, seguimiento y campañas.' },
  { name: 'Instagram', state: 'Integrable', detail: 'DMs centralizables según alcance técnico y configuración de la cuenta.' },
  { name: 'Messenger', state: 'Integrable', detail: 'Conversaciones sociales dentro de la misma operación compartida.' },
  { name: 'Web', state: 'Configurable', detail: 'Formularios, chat y consultas web conectables al flujo comercial.' },
]



const PRICING_PLANS = [
  {
    name: 'Inicial',
    eyebrow: 'WhatsApp + IA',
    price: 'USD 149',
    setup: 'Setup desde USD 300',
    target: 'Para ordenar la atención y responder con contexto desde un canal principal.',
    featured: false,
    cta: 'Evaluar plan Inicial',
    items: [
      '1 negocio y WhatsApp como canal principal',
      'IA comercial configurada',
      'Panel de conversaciones',
      'Modo IA / humano',
      'Base de conocimiento inicial',
    ],
  },
  {
    name: 'Crecimiento',
    eyebrow: 'CRM + seguimiento',
    price: 'USD 299',
    setup: 'Setup desde USD 500',
    target: 'Para recuperar oportunidades y trabajar el seguimiento comercial de forma medible.',
    featured: true,
    cta: 'Evaluar plan Crecimiento',
    items: [
      'Todo lo del plan Inicial',
      'CRM conversacional',
      'Follow up automático',
      'Campañas responsables',
      'Segmentación de clientes',
    ],
  },
  {
    name: 'Escala',
    eyebrow: 'Operación a medida',
    price: 'USD 599',
    setup: 'Setup desde USD 1.000',
    target: 'Para equipos con más volumen, operadores, integraciones o flujos personalizados.',
    featured: false,
    cta: 'Consultar implementación',
    items: [
      'Todo lo del plan Crecimiento',
      'Canales adicionales según alcance',
      'Flujos personalizados',
      'Automatizaciones n8n',
      'Soporte prioritario',
    ],
  },
]

const FAQ_ITEMS = [
  {
    question: '¿Escalando Labs es solamente un bot?',
    answer:
      'La IA es una parte del sistema. Escalando Labs organiza conversaciones, clientes, seguimiento, campañas y trabajo humano dentro de una misma operación.',
  },
  {
    question: '¿Escalando Labs evita los costos de Meta?',
    answer:
      'Los costos de WhatsApp, Meta, IA y otros proveedores externos se calculan por separado. El objetivo es usar esas comunicaciones con más criterio y menos desperdicio.',
  },
  {
    question: '¿Es una plataforma multicanal?',
    answer:
      'WhatsApp es el canal principal y se trabaja sobre WhatsApp Business Platform. Instagram, Messenger, web y otros canales pueden integrarse según alcance, validación técnica y configuración de cada negocio.',
  },
  {
    question: '¿Puedo usar listas de difusión y campañas masivas?',
    answer:
      'Las listas de difusión y campañas deben respetar el consentimiento del cliente, las solicitudes de baja y las políticas de WhatsApp. Escalando Labs no está pensado para mensajes masivos indiscriminados.',
  },
  {
    question: '¿La IA reemplaza al equipo?',
    answer:
      'La IA resuelve tareas repetibles, conserva contexto y ayuda a priorizar. Una persona puede tomar el control cuando hace falta criterio, negociación o una excepción.',
  },
  {
    question: '¿Los planes incluyen la implementación?',
    answer:
      'Cada plan tiene un costo mensual y un setup inicial. Antes de activar la operación se define el alcance, las integraciones necesarias y los costos externos estimados.',
  },
]

type IconName =
  | 'arrow'
  | 'check'
  | 'message'
  | 'route'
  | 'shield'
  | 'spark'
  | 'users'
  | 'clock'
  | 'template'
  | 'chart'
  | 'human'
  | 'campaign'

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (name === 'arrow') {
    return (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </svg>
    )
  }

  if (name === 'check') {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    )
  }

  if (name === 'message') {
    return (
      <svg {...common}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    )
  }

  if (name === 'route') {
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.5 6h4.75A2.75 2.75 0 0 1 16 8.75v1.5A2.75 2.75 0 0 1 13.25 13H10a2 2 0 0 0-2 2v.5" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3 4.5 6v5.4c0 4.7 3.2 7.8 7.5 9.6 4.3-1.8 7.5-4.9 7.5-9.6V6Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    )
  }

  if (name === 'spark') {
    return (
      <svg {...common}>
        <path d="m12 3 1.15 4.35L17.5 8.5l-4.35 1.15L12 14l-1.15-4.35L6.5 8.5l4.35-1.15Z" />
        <path d="m18 14 .7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7Z" />
      </svg>
    )
  }

  if (name === 'users') {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20" />
        <path d="M15.5 5.5a3 3 0 0 1 0 5.5M17 14a4.5 4.5 0 0 1 3.5 4.4V20" />
      </svg>
    )
  }

  if (name === 'clock') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    )
  }

  if (name === 'template') {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    )
  }

  if (name === 'chart') {
    return (
      <svg {...common}>
        <path d="M4 20V9M10 20V4M16 20v-7M22 20H2" />
      </svg>
    )
  }

  if (name === 'human') {
    return (
      <svg {...common}>
        <circle cx="12" cy="7" r="3" />
        <path d="M5.5 21v-2.2a6.5 6.5 0 0 1 13 0V21" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M4 6.5h16M4 12h10M4 17.5h7" />
      <path d="m17 14 3 3-3 3" />
    </svg>
  )
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`dark-brand${footer ? ' dark-brand--footer' : ''}`} href="#inicio" aria-label="Escalando Labs, inicio">
      <span className="dark-brand__mark" aria-hidden="true">
        <Image src="/brand-icon.png" alt="" width={36} height={36} priority={!footer} />
      </span>
      <span className="dark-brand__name">
        <strong>Escalando</strong>
        <span>Labs</span>
      </span>
    </a>
  )
}

function Header() {
  return (
    <header className="dark-header" aria-label="Navegación principal">
      <div className="dark-shell dark-header__inner">
        <Brand />

        <nav className="dark-nav" aria-label="Secciones de la página">
          {NAV_ITEMS.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="dark-header__actions">
          <a className="dark-header__demo" href="#plataforma">
            Ver cómo funciona
          </a>
          <a className="dark-button dark-button--small" href="/demo">
            Solicitar una demo
          </a>
        </div>

        <details className="dark-mobile-nav">
          <summary aria-label="Abrir navegación">
            <span>Menú</span>
            <i aria-hidden="true" />
          </summary>
          <div>
            {NAV_ITEMS.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#plataforma">Ver cómo funciona</a>
            <a href="/demo">Solicitar una demo</a>
          </div>
        </details>
      </div>
    </header>
  )
}

function ProductWorkspace() {
  const contacts = [
    { initials: 'CM', name: 'Carla Méndez', detail: 'Consulta por planes', time: 'Ahora', active: true },
    { initials: 'DS', name: 'Diego Suárez', detail: 'Esperando presupuesto', time: '8 min', active: false },
    { initials: 'MV', name: 'Marina Vega', detail: 'Seguimiento programado', time: '1 h', active: false },
  ]

  return (
    <div className="product-stage" aria-label="Vista ilustrativa del panel de Escalando Labs">
      <div className="product-stage__ambient" aria-hidden="true" />
      <div className="product-window">
        <div className="product-window__topbar">
          <div className="product-window__brand">
            <span aria-hidden="true">
              <Image src="/brand-icon.png" alt="" width={24} height={24} />
            </span>
            <strong>Escalando Labs</strong>
          </div>
          <div className="product-window__search">Buscar conversaciones</div>
          <div className="product-window__status">
            <i aria-hidden="true" />
            Operación activa
          </div>
        </div>

        <div className="product-window__body">
          <aside className="product-sidebar" aria-label="Navegación ilustrativa">
            <span className="is-active"><Icon name="message" /></span>
            <span><Icon name="users" /></span>
            <span><Icon name="route" /></span>
            <span><Icon name="campaign" /></span>
          </aside>

          <aside className="product-inbox" aria-label="Lista ilustrativa de conversaciones">
            <header>
              <div>
                <strong>Conversaciones</strong>
                <span>12 activas</span>
              </div>
              <button type="button" disabled aria-hidden="true">+</button>
            </header>

            <div className="product-inbox__filters">
              <span className="is-active">Todas</span>
              <span>Revisión</span>
              <span>Humano</span>
            </div>

            <div className="product-inbox__list">
              {contacts.map((contact) => (
                <article className={contact.active ? 'is-active' : ''} key={contact.name}>
                  <span className="product-avatar">{contact.initials}</span>
                  <div>
                    <strong>{contact.name}</strong>
                    <small>{contact.detail}</small>
                  </div>
                  <time>{contact.time}</time>
                </article>
              ))}
            </div>
          </aside>

          <section className="product-conversation" aria-label="Conversación ilustrativa">
            <header className="product-conversation__header">
              <div>
                <span className="product-avatar">CM</span>
                <div>
                  <strong>Carla Méndez</strong>
                  <small>WhatsApp · Cliente potencial</small>
                </div>
              </div>
              <span className="product-control-state">
                <i aria-hidden="true" />
                IA en control
              </span>
            </header>

            <div className="product-conversation__context">
              <span>Intención: evaluar plan</span>
              <span>Prioridad: alta</span>
              <span>Última compra: sin datos</span>
            </div>

            <div className="product-messages">
              <div className="product-message product-message--customer">
                Hola, quería saber qué plan me conviene para atender consultas y hacer seguimiento.
                <time>16:21</time>
              </div>

              <div className="product-detection">
                <Icon name="spark" />
                Intención comercial detectada
              </div>

              <div className="product-message product-message--ai">
                ¡Hola, Carla! Para recomendarte bien necesito saber cuántas personas atienden hoy y cuántas consultas reciben por semana.
                <time>16:21</time>
              </div>

              <div className="product-message product-message--customer product-message--short">
                Somos tres y recibimos unas 250.
                <time>16:22</time>
              </div>
            </div>

            <div className="product-next-step">
              <span className="product-next-step__icon"><Icon name="route" /></span>
              <div>
                <small>Próximo paso sugerido</small>
                <strong>Preparar diagnóstico y retomar mañana</strong>
              </div>
              <button type="button" disabled aria-hidden="true">Programar</button>
            </div>
          </section>

          <aside className="product-customer" aria-label="Contexto comercial ilustrativo">
            <header>
              <small>Contexto comercial</small>
              <strong>Oportunidad activa</strong>
            </header>

            <dl>
              <div>
                <dt>Etapa</dt>
                <dd>Evaluación</dd>
              </div>
              <div>
                <dt>Responsable</dt>
                <dd>Equipo comercial</dd>
              </div>
              <div>
                <dt>Próxima acción</dt>
                <dd>Mañana, 10:30</dd>
              </div>
            </dl>

            <div className="product-customer__timeline">
              <span />
              <div>
                <small>Ahora</small>
                <strong>Consulta recibida</strong>
              </div>
              <span />
              <div>
                <small>En curso</small>
                <strong>Calificación con IA</strong>
              </div>
              <span className="is-future" />
              <div>
                <small>Próximo</small>
                <strong>Seguimiento comercial</strong>
              </div>
            </div>

            <div className="product-human-control">
              <Icon name="human" />
              <div>
                <strong>Control humano disponible</strong>
                <span>El equipo puede intervenir con todo el contexto.</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <p className="product-stage__caption">Vista ilustrativa · La configuración final depende del alcance de cada implementación.</p>
    </div>
  )
}

function CampaignPlanner() {
  return (
    <div className="campaign-planner" aria-label="Ejemplo ilustrativo de preparación de campaña">
      <div className="campaign-planner__header">
        <div>
          <span>Campaña</span>
          <strong>Clientes inactivos · Julio</strong>
        </div>
        <span className="campaign-planner__draft">Borrador</span>
      </div>

      <div className="campaign-planner__body">
        <div className="campaign-planner__audience">
          <span className="campaign-planner__label">Audiencia seleccionada</span>
          <strong>468 contactos</strong>
          <p>Clientes con consentimiento, sin compra reciente y sin contacto promocional en los últimos 14 días.</p>

          <div className="campaign-planner__bars" aria-hidden="true">
            <span style={{ width: '84%' }} />
            <span style={{ width: '62%' }} />
            <span style={{ width: '38%' }} />
          </div>

          <dl>
            <div>
              <dt>Base evaluada</dt>
              <dd>1.284</dd>
            </div>
            <div>
              <dt>Excluidos por criterio</dt>
              <dd>816</dd>
            </div>
          </dl>
        </div>

        <div className="campaign-planner__checks">
          <span className="campaign-planner__label">Revisión antes de activar</span>
          <ul>
            <li><Icon name="check" /><span>Consentimiento y bajas considerados</span><em>Listo</em></li>
            <li><Icon name="users" /><span>Segmento y objetivo definidos</span><em>Listo</em></li>
            <li><Icon name="clock" /><span>Frecuencia y horario controlados</span><em>Listo</em></li>
            <li><Icon name="template" /><span>Plantilla oficial cuando corresponda</span><em>Revisar</em></li>
          </ul>
        </div>
      </div>

      <div className="campaign-planner__footer">
        <p>Los costos de Meta y otros proveedores se calculan por separado.</p>
        <button type="button" disabled aria-hidden="true">Revisar campaña</button>
      </div>
    </div>
  )
}

function SectionIntro({
  eyebrow,
  title,
  text,
  align = 'left',
}: {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`dark-section-intro${align === 'center' ? ' dark-section-intro--center' : ''}`}>
      <p className="dark-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="dark-section-intro__text">{text}</p> : null}
    </div>
  )
}

export default function HomeDarkPremium() {
  return (
    <div className={`landing-dark ${manrope.variable} ${plexMono.variable}`} id="inicio">
      <a className="dark-skip-link" href="#contenido-principal">
        Ir al contenido principal
      </a>

      <Header />

      <main id="contenido-principal">
        <section className="dark-hero">
          <div className="dark-shell dark-hero__inner">
            <div className="dark-hero__copy">
              <div className="dark-hero__badge">
                <span aria-hidden="true"><Icon name="shield" /></span>
                WhatsApp Business Platform oficial - Tech Provider de Meta
              </div>
              <h1>
                WhatsApp, clientes y ventas <span>en una sola operación.</span>
              </h1>
              <p className="dark-hero__lead">
                Escalando Labs trabaja sobre la API oficial de WhatsApp, integra otros canales y ordena atención, seguimiento, listas de difusión y campañas responsables con IA y control humano.
              </p>
              <div className="dark-hero__actions">
                <a className="dark-button" href="/demo">
                  Solicitar una demo
                  <Icon name="arrow" />
                </a>
                <a className="dark-button dark-button--secondary" href="#plataforma">
                  Ver cómo funciona
                </a>
              </div>

              <div className="dark-hero__trust">
                <span><i aria-hidden="true" /> API oficial de WhatsApp</span>
                <span><i aria-hidden="true" /> Tech Provider de Meta</span>
                <span><i aria-hidden="true" /> Listas de difusión y campañas responsables</span>
              </div>
            </div>

            <HeroProductCarousel />
          </div>
        </section>

        <ScrollReveal as="section" className="dark-outcomes" aria-label="Resultados principales">
          <div className="dark-shell dark-outcomes__inner">
            {OUTCOMES.map((outcome) => (
              <article key={outcome.title}>
                <span><Icon name={outcome.icon} /></span>
                <div>
                  <strong>{outcome.title}</strong>
                  <p>{outcome.text}</p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="dark-section dark-operation" id="plataforma">
          <div className="dark-shell">
            <SectionIntro
              eyebrow="Operación comercial compartida"
              title="Consultas, clientes y próximos pasos en un mismo lugar."
              text="Escalando Labs conecta atención, contexto y seguimiento para que cada conversación tenga continuidad, sin importar si empezó en WhatsApp, Instagram, Messenger, web u otro canal integrable."
            />

            <div className="dark-operation__content">
              <div className="dark-operation__problems">
                {PROBLEMS.map((problem) => (
                  <p key={problem}>
                    <span aria-hidden="true" />
                    {problem}
                  </p>
                ))}
              </div>

              <div className="dark-operation__solution">
                <div className="dark-operation__pulse" aria-hidden="true">
                  <span />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="dark-operation__solution-copy">
                  <small>Un solo contexto compartido</small>
                  <h3>Atención, seguimiento y activación trabajan sobre el mismo cliente.</h3>
                  <p>
                    La IA y el equipo humano ven qué preguntó, qué necesita, qué se respondió y cuál es la siguiente
                    acción comercial.
                  </p>
                </div>

                <div className="dark-operation__signal">
                  <span>Consulta recibida</span>
                  <i aria-hidden="true" />
                  <span>Intención detectada</span>
                  <i aria-hidden="true" />
                  <span>Próximo paso</span>
                  <i aria-hidden="true" />
                  <strong>Resultado</strong>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="dark-section dark-channels" id="canales">
          <div className="dark-shell dark-channels__inner">
            <div className="dark-channels__copy">
              <p className="dark-eyebrow">Claridad multicanal</p>
              <h2>WhatsApp es el canal principal. La operación puede ordenar más canales sin duplicar trabajo.</h2>
              <p>Las conversaciones se organizan en un contexto compartido: contacto, canal de origen, intención, historial, responsable y próximo paso comercial.</p>
            </div>

            <div className="dark-channels__grid">
              {CHANNELS.map((channel) => (
                <article key={channel.name}>
                  <span>{channel.state}</span>
                  <h3>{channel.name}</h3>
                  <p>{channel.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="dark-section dark-whatsapp-change" id="campanias">
          <div className="dark-shell dark-whatsapp-change__inner">
            <div className="dark-whatsapp-change__copy">
              <p className="dark-eyebrow dark-eyebrow--amber">Campañas y difusión</p>
              <h2>La API oficial exige criterio. Las listas de difusión también.</h2>
              <p>
                Las comunicaciones comerciales oficiales requieren consentimiento, segmentación, plantillas cuando corresponda, frecuencia sana y costos visibles.
              </p>
              <p>
                Escalando Labs no elimina esas reglas. Ayuda a convertirlas en una operación más ordenada, selectiva y
                medible.
              </p>
            </div>

            <div className="dark-whatsapp-change__shift">
              <div className="dark-shift-state dark-shift-state--before">
                <span>Antes</span>
                <strong>Difusión manual</strong>
                <ul>
                  <li>Poca segmentación</li>
                  <li>Costo poco visible</li>
                  <li>Escasa trazabilidad</li>
                </ul>
              </div>

              <div className="dark-shift-arrow" aria-hidden="true">
                <Icon name="arrow" />
              </div>

              <div className="dark-shift-state dark-shift-state--now">
                <span>Ahora</span>
                <strong>Comunicación con reglas</strong>
                <ul>
                  <li>Consentimiento y bajas</li>
                  <li>Plantillas y categorías</li>
                  <li>Frecuencia y reputación</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="dark-section dark-responsible">
          <div className="dark-shell">
            <SectionIntro
              eyebrow="Campañas responsables"
              title="Cada campaña empieza por audiencia, permiso y objetivo comercial."
              text="La plataforma está pensada para que una campaña comience por la audiencia y el objetivo, no por el botón de enviar."
            />

            <div className="dark-responsible__content">
              <div className="dark-responsible__principles">
                {RESPONSIBLE_RULES.map((rule, index) => (
                  <article key={rule.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{rule.title}</h3>
                      <p>{rule.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <CampaignPlanner />
            </div>

            <p className="dark-responsible__note">
              Escalando Labs no garantiza aprobaciones ni evita restricciones del proveedor. La calidad del canal también
              depende del consentimiento, el contenido y el comportamiento de cada negocio.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="dark-section dark-flow" id="como-funciona">
          <div className="dark-shell">
            <SectionIntro
              eyebrow="Cómo funciona"
              title="Una secuencia simple para atender, seguir y convertir."
              text="La tecnología trabaja detrás. El equipo ve una operación clara y conserva el control."
              align="center"
            />

            <ol className="dark-flow__steps">
              {FLOW_STEPS.map((step, index) => (
                <li key={step.title}>
                  <div className="dark-flow__marker">
                    <span>{index + 1}</span>
                    {index < FLOW_STEPS.length - 1 ? <i aria-hidden="true" /> : null}
                  </div>
                  <div>
                    <small>{step.eyebrow}</small>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="dark-section dark-product-depth">
          <div className="dark-shell dark-product-depth__inner">
            <div className="dark-product-depth__copy">
              <p className="dark-eyebrow">Producto real, configuración por negocio</p>
              <h2>Una pantalla pensada para operar sin improvisar.</h2>
              <p>
                El equipo ve conversación activa, contexto comercial, métricas y próximo paso sin reconstruir la historia del cliente.
              </p>

              <ul>
                <li><Icon name="message" /><span><strong>Conversaciones centralizadas</strong> con historial y estado.</span></li>
                <li><Icon name="route" /><span><strong>Seguimiento comercial</strong> visible para todo el equipo.</span></li>
                <li><Icon name="human" /><span><strong>Takeover humano</strong> con el contexto completo.</span></li>
                <li><Icon name="campaign" /><span><strong>Campañas segmentadas</strong> dentro de reglas configurables.</span></li>
              </ul>
            </div>

            <div className="dark-product-depth__visual dark-product-depth__visual--workspace">
              <ProductWorkspace />
            </div>
          </div>
        </ScrollReveal>


        <ScrollReveal as="section" className="dark-section dark-pricing" id="precios">
          <span id="planes" className="dark-anchor-alias" aria-hidden="true" />
          <div className="dark-shell">
            <SectionIntro
              eyebrow="Planes"
              title="Empezá con el alcance correcto. Escalá cuando la operación lo pida."
              text="Software, configuración y acompañamiento se cotizan con claridad. Los costos de Meta, mensajería, IA y otros proveedores se estiman por separado."
              align="center"
            />

            <div className="dark-pricing__plans">
              {PRICING_PLANS.map((plan) => {
                const planUrl = `https://wa.me/5491153230859?text=${encodeURIComponent(
                  `Hola, quiero evaluar el plan ${plan.name} de Escalando Labs para mi negocio.`,
                )}`

                return (
                  <article className={plan.featured ? 'is-featured' : ''} key={plan.name}>
                    <header>
                      <span>{plan.eyebrow}</span>
                      {plan.featured ? <em>Más elegido</em> : null}
                    </header>
                    <h3>{plan.name}</h3>
                    <div className="dark-pricing__price">
                      <strong>{plan.price}</strong>
                      <span>/ mes</span>
                    </div>
                    <p className="dark-pricing__setup">{plan.setup}</p>
                    <p className="dark-pricing__target">{plan.target}</p>
                    <ul>
                      {plan.items.map((item) => (
                        <li key={item}><Icon name="check" />{item}</li>
                      ))}
                    </ul>
                    <a href={planUrl} target="_blank" rel="noreferrer">
                      {plan.cta}
                      <Icon name="arrow" />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="dark-section dark-faq" id="faq">
          <div className="dark-shell dark-faq__inner">
            <div className="dark-faq__intro">
              <p className="dark-eyebrow">Preguntas frecuentes</p>
              <h2>Lo importante antes de evaluar una implementación.</h2>
              <p>Transparencia sobre Meta, costos externos, control humano, campañas, listas de difusión y canales adicionales.</p>
            </div>

            <div className="dark-faq__items">
              {FAQ_ITEMS.map((item) => (
                <details key={item.question}>
                  <summary>
                    <strong>{item.question}</strong>
                    <span aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="dark-final" id="diagnostico">
          <div className="dark-shell dark-final__inner">
            <div>
              <p className="dark-eyebrow">Siguiente paso</p>
              <h2>Ordenemos primero lo que hoy te hace perder ventas.</h2>
              <p>
                Revisamos cómo atendés, dónde se enfrían oportunidades y qué conviene implementar sin agregar complejidad
                innecesaria.
              </p>
            </div>

            <div className="dark-final__actions">
              <a className="dark-button" href="/demo">
                Solicitar una demo
                <Icon name="arrow" />
              </a>
              <a className="dark-button dark-button--secondary" href="#plataforma">
                Ver cómo funciona
              </a>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <footer className="dark-footer">
        <div className="dark-shell dark-footer__inner">
          <div className="dark-footer__brand">
            <Brand footer />
            <p>Sistema comercial conversacional con IA, seguimiento y control humano.</p>
          </div>

          <nav aria-label="Páginas legales">
            <a href="/privacidad">Privacidad</a>
            <a href="/terminos">Términos</a>
            <a href="/contacto">Contacto legal</a>
            <a href="/eliminacion-datos">Eliminación de datos</a>
          </nav>

          <p className="dark-footer__copyright">© {new Date().getFullYear()} Escalando Labs.</p>
        </div>
      </footer>
    </div>
  )
}
