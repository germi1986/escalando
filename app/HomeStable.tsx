import Image from 'next/image'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-technical',
  display: 'swap',
})

const WHATSAPP_URL = `https://wa.me/5491153230859?text=${encodeURIComponent(
  'Hola, quiero evaluar cómo ordenar la atención y el seguimiento comercial de mi negocio con Escalando Labs.',
)}`

const NAV_ITEMS = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
]

const PROBLEM_ROWS = [
  {
    index: '01',
    title: 'Las consultas quedan repartidas.',
    text: 'El equipo atiende en varios canales y pierde contexto, prioridad y próximos pasos.',
  },
  {
    index: '02',
    title: 'El seguimiento depende de la memoria.',
    text: 'Las oportunidades se enfrían porque nadie ve con claridad cuándo retomar cada conversación.',
  },
  {
    index: '03',
    title: 'La automatización trabaja aislada.',
    text: 'Un bot puede responder, pero no organiza la operación ni sabe cuándo debe intervenir una persona.',
  },
]

const OPERATING_STEPS = [
  {
    index: '01',
    label: 'ENTRADA',
    title: 'Centralizá la conversación',
    text: 'Cada consulta entra con contacto, canal, intención y estado comercial.',
  },
  {
    index: '02',
    label: 'CRITERIO',
    title: 'Usá IA con reglas reales',
    text: 'La IA responde lo repetible y respeta políticas, horarios y límites.',
  },
  {
    index: '03',
    label: 'SEGUIMIENTO',
    title: 'Conservá el próximo paso',
    text: 'El sistema deja visible qué hacer, cuándo hacerlo y quién debe intervenir.',
  },
  {
    index: '04',
    label: 'CONTROL',
    title: 'Tomá el control humano',
    text: 'El equipo entra con todo el contexto cuando hace falta criterio o negociación.',
  },
]

const INDUSTRY_CASES = [
  {
    index: 'A',
    sector: 'Gastronomía',
    title: 'Consultas, pedidos y clientes que vuelven.',
    text: 'Respondé preguntas frecuentes, ordená pedidos y retomá clientes sin listas improvisadas.',
  },
  {
    index: 'B',
    sector: 'Servicios',
    title: 'Presupuestos con próximo paso claro.',
    text: 'Registrá intención, urgencia y estado para que cada consulta avance hasta una decisión.',
  },
  {
    index: 'C',
    sector: 'Comercios',
    title: 'Stock, ventas y seguimiento en un solo lugar.',
    text: 'Unificá conversaciones y oportunidades para no perder ventas entre chats.',
  },
  {
    index: 'D',
    sector: 'Salud y turnos',
    title: 'Atención ágil con derivación responsable.',
    text: 'Automatizá lo repetible y pasá casos sensibles a una persona con contexto completo.',
  },
]

const PRICING_PLANS = [
  {
    name: 'Inicial',
    eyebrow: 'WHATSAPP + IA',
    price: 'USD 149',
    setup: 'Setup desde USD 300',
    target: 'Para ordenar la atención y responder con contexto desde un canal principal.',
    featured: false,
    cta: 'Evaluar plan Inicial',
    items: [
      '1 negocio y 1 canal principal',
      'IA comercial configurada',
      'Panel de conversaciones',
      'Modo IA / humano',
      'Base de conocimiento inicial',
    ],
  },
  {
    name: 'Crecimiento',
    eyebrow: 'CRM + FOLLOW UP',
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
    eyebrow: 'MULTICANAL A MEDIDA',
    price: 'USD 599',
    setup: 'Setup desde USD 1.000',
    target: 'Para equipos con más volumen, operadores, integraciones o flujos personalizados.',
    featured: false,
    cta: 'Consultar implementación',
    items: [
      'Todo lo del plan Crecimiento',
      'Canales adicionales',
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
      'No. La IA es una parte del sistema. El objetivo es ordenar conversaciones, clientes, seguimiento, campañas y trabajo humano dentro de una operación común.',
  },
  {
    question: '¿La IA reemplaza al equipo?',
    answer:
      'No. Resuelve tareas repetibles y ayuda a priorizar. Una persona puede tomar el control cuando hace falta criterio, negociación o una excepción comercial.',
  },
  {
    question: '¿Qué canales se pueden integrar?',
    answer:
      'WhatsApp es el canal principal. Instagram, Messenger, Telegram, TikTok y canales personalizados dependen del alcance técnico y comercial definido para cada implementación.',
  },
  {
    question: '¿Puede hacer seguimiento automático?',
    answer:
      'Sí. Puede detectar oportunidades, programar próximos pasos y activar seguimientos según reglas, horarios, frecuencia y estado del cliente.',
  },
  {
    question: '¿Los costos de proveedores están incluidos?',
    answer:
      'Los planes cubren el software y el alcance indicado. Los costos de Meta, mensajería, IA u otros proveedores externos se estiman por separado antes de activar la operación.',
  },
]

function Brand() {
  return (
    <a className="editorial-brand" href="#inicio" aria-label="Escalando Labs inicio">
      <span className="editorial-brand__mark" aria-hidden="true">
        <Image src="/brand-icon.png" alt="" width={34} height={34} priority />
      </span>
      <span className="editorial-brand__wordmark">
        ESCALANDO
        <strong>LABS</strong>
      </span>
    </a>
  )
}

function SiteHeader() {
  return (
    <header className="editorial-header" aria-label="Navegación principal">
      <div className="editorial-header__inner">
        <Brand />

        <nav className="editorial-nav" aria-label="Secciones de la página">
          {NAV_ITEMS.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="editorial-header__actions">
          <a className="editorial-text-link" href="/demo">
            Ver demo
          </a>
          <a className="editorial-action editorial-action--compact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Evaluar operación
          </a>
        </div>

        <details className="editorial-mobile-nav">
          <summary aria-label="Abrir navegación">
            <span>MENÚ</span>
            <i aria-hidden="true">+</i>
          </summary>
          <div>
            {NAV_ITEMS.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href="/demo">Ver demo</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Evaluar operación
            </a>
          </div>
        </details>
      </div>
    </header>
  )
}

function OperationsConsole() {
  const conversations = [
    { initials: 'CM', name: 'Carla Méndez', subject: 'Precio del plan', time: 'AHORA', active: true },
    { initials: 'DR', name: 'Diego Ramos', subject: 'Stock disponible', time: '04 MIN', active: false },
    { initials: 'CN', name: 'Clínica Nova', subject: 'Caso sensible', time: '12 MIN', active: false },
  ]

  return (
    <div className="ops-console" aria-label="Ejemplo ilustrativo del panel comercial">
      <div className="ops-console__top">
        <div>
          <span>ESC / OPS</span>
          <strong>OPERACIÓN COMERCIAL</strong>
        </div>
        <p>WHATSAPP + IA + CRM</p>
        <em>● EN LÍNEA</em>
      </div>

      <div className="ops-console__body">
        <aside className="ops-console__inbox" aria-label="Conversaciones">
          <header>
            <span>01</span>
            <strong>CONVERSACIONES</strong>
          </header>

          {conversations.map((conversation) => (
            <article className={conversation.active ? 'is-active' : ''} key={conversation.name}>
              <span>{conversation.initials}</span>
              <div>
                <strong>{conversation.name}</strong>
                <small>{conversation.subject}</small>
              </div>
              <em>{conversation.time}</em>
            </article>
          ))}
        </aside>

        <section className="ops-console__conversation" aria-label="Conversación activa">
          <header>
            <div>
              <span>CARLA MÉNDEZ / WHATSAPP</span>
              <strong>INTENCIÓN: PRECIO + CIERRE</strong>
            </div>
            <em>IA EN CONTROL</em>
          </header>

          <div className="ops-console__messages">
            <p className="is-inbound">Hola, quería saber el precio del plan mensual.</p>
            <span>INTENCIÓN DETECTADA / PRIORIDAD ALTA</span>
            <p className="is-ai">
              ¡Hola, Carla! Te paso las opciones y te marco cuál conviene según tu equipo.
            </p>
            <p className="is-inbound is-short">Perfecto. ¿Cómo puedo pagarlo?</p>
          </div>

          <div className="ops-console__next">
            <span>PRÓXIMO PASO SUGERIDO</span>
            <strong>Enviar propuesta y programar seguimiento</strong>
            <button type="button">APLICAR →</button>
          </div>
        </section>

        <aside className="ops-console__data" aria-label="Contexto comercial">
          <header>
            <span>02</span>
            <strong>CONTEXTO</strong>
          </header>
          <dl>
            <div>
              <dt>ESTADO</dt>
              <dd>OPORTUNIDAD</dd>
            </div>
            <div>
              <dt>PRIORIDAD</dt>
              <dd>ALTA</dd>
            </div>
            <div>
              <dt>SLA</dt>
              <dd>06 MIN</dd>
            </div>
            <div>
              <dt>TAKEOVER</dt>
              <dd>DISPONIBLE</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="ops-console__footer" aria-label="Flujo comercial resumido">
        {['CONSULTA', 'CONTEXTO', 'PRÓXIMO PASO', 'RESULTADO'].map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomeStable() {
  return (
    <div className={`landing-editorial ${archivo.variable} ${plexMono.variable}`} id="inicio">
      <a className="editorial-skip-link" href="#contenido-principal">
        Ir al contenido principal
      </a>

      <SiteHeader />

      <main id="contenido-principal">
        <section className="editorial-hero" aria-labelledby="editorial-hero-title">
          <div className="editorial-hero__index" aria-hidden="true">
            <span>01</span>
            <p>OPERACIÓN<br />COMERCIAL</p>
          </div>

          <div className="editorial-hero__copy">
            <p className="editorial-kicker">PARA EQUIPOS QUE VENDEN POR WHATSAPP</p>
            <h1 id="editorial-hero-title">
              Que ninguna consulta quede <span>sin seguimiento.</span>
            </h1>
            <p className="editorial-hero__description">
              Escalando Labs reúne WhatsApp, IA y CRM para responder, priorizar y retomar oportunidades
              desde un solo lugar, con control humano cuando hace falta.
            </p>

            <div className="editorial-hero__actions">
              <a className="editorial-action" href="/demo">
                Ver demo interactiva
              </a>
              <a className="editorial-secondary-action" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </div>

            <dl className="editorial-hero__proofs">
              <div>
                <dt>01</dt>
                <dd>RESPUESTAS CON CONTEXTO</dd>
              </div>
              <div>
                <dt>02</dt>
                <dd>SEGUIMIENTO TRAZABLE</dd>
              </div>
              <div>
                <dt>03</dt>
                <dd>TAKEOVER HUMANO</dd>
              </div>
            </dl>
          </div>

          <div className="editorial-hero__product">
            <div className="editorial-product-label">
              <span>PRODUCTO / VISTA OPERATIVA</span>
              <em>EJEMPLO ILUSTRATIVO</em>
            </div>
            <OperationsConsole />
          </div>
        </section>

        <section className="editorial-signal-strip" aria-label="Propuesta de plataforma">
          <p>UN PANEL BASE. MÓDULOS Y FLUJOS CONFIGURABLES SEGÚN CADA INDUSTRIA.</p>
          <div>
            <span>GASTRONOMÍA</span>
            <span>SERVICIOS</span>
            <span>COMERCIOS</span>
            <span>SALUD Y TURNOS</span>
          </div>
        </section>

        <section className="editorial-section editorial-problem" id="plataforma">
          <div className="editorial-section__head">
            <p className="editorial-kicker">02 / EL PROBLEMA</p>
            <h2>WhatsApp vende. El desorden comercial hace perder oportunidades.</h2>
            <p>
              Escalando Labs no agrega otro canal: convierte las conversaciones existentes en una operación visible,
              compartida y medible.
            </p>
          </div>

          <div className="editorial-problem__rows">
            {PROBLEM_ROWS.map((problem) => (
              <article key={problem.index}>
                <span>{problem.index}</span>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-section editorial-flow" id="como-funciona">
          <div className="editorial-section__head editorial-section__head--split">
            <p className="editorial-kicker">03 / CÓMO FUNCIONA</p>
            <h2>Una sola secuencia para atender, seguir y convertir.</h2>
            <p>
              La automatización trabaja dentro de reglas claras. El equipo conserva el control de la relación comercial.
            </p>
          </div>

          <ol className="editorial-flow__sequence">
            {OPERATING_STEPS.map((step) => (
              <li key={step.index}>
                <span>{step.index}</span>
                <p>{step.label}</p>
                <h3>{step.title}</h3>
                <small>{step.text}</small>
              </li>
            ))}
          </ol>
        </section>

        <section className="editorial-system">
          <div className="editorial-system__copy">
            <p className="editorial-kicker">04 / UNA OPERACIÓN, NO UN BOT</p>
            <h2>La IA resuelve lo repetible. El sistema conserva el contexto.</h2>
            <p>
              Cada conversación deja información útil: quién consultó, qué necesita, qué se respondió, cuándo hay que
              retomar y quién debe intervenir.
            </p>
          </div>

          <div className="editorial-system__ledger" aria-label="Capacidades operativas">
            <div>
              <span>ENTRADA</span>
              <strong>Conversaciones centralizadas</strong>
              <p>Contacto, canal, intención y prioridad en un mismo flujo.</p>
            </div>
            <div>
              <span>MEMORIA</span>
              <strong>Contexto compartido</strong>
              <p>IA y equipo humano trabajan sobre el mismo historial.</p>
            </div>
            <div>
              <span>ACCIÓN</span>
              <strong>Próximos pasos visibles</strong>
              <p>Seguimiento, campañas y takeover con reglas configurables.</p>
            </div>
            <div>
              <span>CONTROL</span>
              <strong>Operación medible</strong>
              <p>Estados, tiempos y resultados trazados para mejorar decisiones.</p>
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-cases" id="casos">
          <div className="editorial-section__head">
            <p className="editorial-kicker">05 / CASOS DE USO</p>
            <h2>El mismo panel. Distintas formas de vender.</h2>
            <p>El lenguaje, los módulos, las métricas y los flujos se configuran según el tipo de negocio.</p>
          </div>

          <div className="editorial-cases__matrix">
            {INDUSTRY_CASES.map((item) => (
              <article key={item.index}>
                <header>
                  <span>{item.index}</span>
                  <p>{item.sector}</p>
                </header>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-section editorial-pricing" id="precios">
          <span id="planes" className="editorial-anchor-alias" aria-hidden="true" />

          <div className="editorial-section__head">
            <p className="editorial-kicker">06 / PRECIOS</p>
            <h2>Empezá con el alcance correcto. Escalá cuando la operación lo pida.</h2>
            <p>
              Software, configuración y acompañamiento se cotizan con claridad. Los proveedores externos se estiman
              antes de activar la operación.
            </p>
          </div>

          <div className="editorial-pricing__columns">
            {PRICING_PLANS.map((plan, index) => {
              const planUrl = `https://wa.me/5491153230859?text=${encodeURIComponent(
                `Hola, quiero evaluar el plan ${plan.name} de Escalando Labs para mi negocio.`,
              )}`

              return (
                <article className={plan.featured ? 'is-featured' : ''} key={plan.name}>
                  <header>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{plan.eyebrow}</p>
                    {plan.featured ? <em>RECOMENDADO</em> : null}
                  </header>
                  <h3>{plan.name}</h3>
                  <strong>{plan.price}<small> / MES</small></strong>
                  <p>{plan.setup}</p>
                  <blockquote>{plan.target}</blockquote>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href={planUrl} target="_blank" rel="noreferrer">
                    {plan.cta} <span aria-hidden="true">→</span>
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        <section className="editorial-section editorial-faq" id="faq">
          <div className="editorial-section__head">
            <p className="editorial-kicker">07 / PREGUNTAS FRECUENTES</p>
            <h2>Lo importante antes de evaluar una implementación.</h2>
          </div>

          <div className="editorial-faq__rows">
            {FAQ_ITEMS.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.question}</strong>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="editorial-final-cta" id="diagnostico">
          <div>
            <p className="editorial-kicker">08 / SIGUIENTE PASO</p>
            <h2>No vendemos un bot. Diseñamos una operación comercial.</h2>
          </div>
          <p>Revisemos cómo atendés hoy, dónde se enfrían oportunidades y qué conviene ordenar primero.</p>
          <div>
            <a className="editorial-final-cta__primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Evaluar mi operación
            </a>
            <a className="editorial-final-cta__secondary" href="/demo">
              Ver la demo
            </a>
          </div>
        </section>
      </main>

      <footer className="editorial-footer">
        <div>
          <Brand />
          <p>Sistema comercial conversacional con IA y control humano.</p>
        </div>

        <nav aria-label="Páginas legales">
          <a href="/privacidad">Privacidad</a>
          <a href="/terminos">Términos</a>
          <a href="/contacto">Contacto legal</a>
          <a href="/eliminacion-datos">Eliminación de datos</a>
        </nav>

        <p>© {new Date().getFullYear()} Escalando Labs.</p>
      </footer>
    </div>
  )
}
