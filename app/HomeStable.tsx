import Image from 'next/image'

const DIAGNOSTIC_URL = `https://wa.me/5491153230859?text=${encodeURIComponent(
  'Hola, quiero evaluar cómo ordenar la atención y el seguimiento comercial de mi negocio con Escalando Labs.',
)}`

const NAV_ITEMS = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
]

const HERO_PROOFS = [
  'Respuestas con contexto',
  'Seguimiento trazable',
  'Takeover humano',
]

const PROBLEMS = [
  {
    index: '01',
    title: 'Las consultas quedan repartidas.',
    text: 'El equipo atiende en varios canales y pierde contexto, prioridades y próximos pasos.',
  },
  {
    index: '02',
    title: 'El seguimiento depende de la memoria.',
    text: 'Las oportunidades se enfrían porque nadie sabe con claridad cuándo retomar cada conversación.',
  },
  {
    index: '03',
    title: 'La automatización trabaja sin criterio.',
    text: 'Un bot aislado responde, pero no organiza la operación ni sabe cuándo debe intervenir una persona.',
  },
]

const FLOW_STEPS = [
  {
    number: '01',
    title: 'Centralizá la conversación',
    text: 'Cada consulta entra al mismo flujo con contacto, canal, intención y estado comercial.',
  },
  {
    number: '02',
    title: 'Usá IA con reglas reales',
    text: 'La IA responde lo repetible, propone próximos pasos y respeta políticas, horarios y límites.',
  },
  {
    number: '03',
    title: 'Seguimiento con control humano',
    text: 'El equipo ve qué necesita atención, toma el control y deja todo el historial trazado.',
  },
]

const USE_CASES = [
  {
    tag: 'Gastronomía',
    title: 'Consultas, pedidos y clientes que vuelven.',
    text: 'Respondé preguntas frecuentes, ordená pedidos y retomá clientes sin depender de listas improvisadas.',
  },
  {
    tag: 'Servicios',
    title: 'Presupuestos con próximo paso claro.',
    text: 'Registrá intención, urgencia y estado para que cada consulta avance hasta una decisión.',
  },
  {
    tag: 'Comercios',
    title: 'Stock, ventas y seguimiento en un solo lugar.',
    text: 'Unificá conversaciones y oportunidades para que el equipo no pierda ventas entre chats.',
  },
  {
    tag: 'Salud y turnos',
    title: 'Atención ágil con derivación responsable.',
    text: 'Automatizá lo repetible y pasá los casos sensibles a una persona con contexto completo.',
  },
]

const PLANS = [
  {
    name: 'Inicial',
    subtitle: 'WhatsApp + IA',
    price: 'USD 149',
    setup: 'Setup desde USD 300',
    description: 'Para ordenar la atención y responder con contexto desde un canal principal.',
    features: [
      '1 negocio y 1 canal principal',
      'IA comercial configurada',
      'Panel de conversaciones',
      'Modo IA / humano',
      'Base de conocimiento inicial',
    ],
    featured: false,
    cta: 'Evaluar plan Inicial',
  },
  {
    name: 'Crecimiento',
    subtitle: 'CRM + follow up',
    price: 'USD 299',
    setup: 'Setup desde USD 500',
    description: 'Para recuperar oportunidades y trabajar el seguimiento comercial de forma medible.',
    features: [
      'Todo lo del plan Inicial',
      'CRM conversacional',
      'Follow up automático',
      'Campañas responsables',
      'Segmentación de clientes',
    ],
    featured: true,
    cta: 'Evaluar plan Crecimiento',
  },
  {
    name: 'Escala',
    subtitle: 'Multicanal a medida',
    price: 'USD 599',
    setup: 'Setup desde USD 1.000',
    description: 'Para equipos con más volumen, operadores, integraciones o flujos personalizados.',
    features: [
      'Todo lo del plan Crecimiento',
      'Canales adicionales',
      'Flujos personalizados',
      'Automatizaciones n8n',
      'Soporte prioritario',
    ],
    featured: false,
    cta: 'Consultar implementación',
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

function planUrl(planName: string) {
  return `https://wa.me/5491153230859?text=${encodeURIComponent(
    `Hola, quiero evaluar el plan ${planName} de Escalando Labs para mi negocio.`,
  )}`
}

function SiteHeader() {
  return (
    <header className="stable-header" aria-label="Navegación principal">
      <div className="stable-header__inner">
        <a className="stable-brand" href="#inicio" aria-label="Escalando Labs inicio">
          <span className="stable-brand__mark" aria-hidden="true">
            <Image src="/brand-icon.png" alt="" width={34} height={34} priority />
          </span>
          <span className="stable-brand__wordmark">
            ESCALANDO
            <strong>LABS</strong>
          </span>
        </a>

        <nav className="stable-nav" aria-label="Secciones de la página">
          {NAV_ITEMS.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="stable-header__actions">
          <a className="stable-link-button" href="/demo">
            Ver demo
          </a>
          <a className="stable-primary-button stable-primary-button--compact" href={DIAGNOSTIC_URL} target="_blank" rel="noreferrer">
            Hablar por WhatsApp
          </a>
        </div>

        <details className="stable-mobile-nav">
          <summary aria-label="Abrir navegación">Menú</summary>
          <div>
            {NAV_ITEMS.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href="/demo">Ver demo</a>
            <a href={DIAGNOSTIC_URL} target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
        </details>
      </div>
    </header>
  )
}

function ProductPreview() {
  return (
    <div className="stable-product" aria-label="Ejemplo ilustrativo del panel comercial">
      <div className="stable-product__topbar">
        <div aria-hidden="true"><span /><span /><span /></div>
        <strong>Escalando Labs · operación comercial</strong>
        <em>Ejemplo ilustrativo</em>
      </div>

      <div className="stable-product__modes" aria-label="Áreas del sistema">
        <span className="is-active">Atender</span>
        <span>Seguimiento</span>
        <span>Recuperar</span>
      </div>

      <div className="stable-product__workspace">
        <aside className="stable-product__inbox" aria-label="Conversaciones">
          <p>Conversaciones</p>
          {[
            ['CM', 'Carla Méndez', 'Precio del plan', 'Ahora'],
            ['DR', 'Diego Ramos', 'Stock disponible', '4 min'],
            ['CN', 'Clínica Nova', 'Caso sensible', '12 min'],
          ].map(([initials, name, message, time], index) => (
            <article className={index === 0 ? 'is-active' : ''} key={name}>
              <span>{initials}</span>
              <div><strong>{name}</strong><small>{message}</small></div>
              <em>{time}</em>
            </article>
          ))}
        </aside>

        <section className="stable-product__chat" aria-label="Conversación activa">
          <header>
            <div>
              <strong>Carla Méndez</strong>
              <span>WhatsApp · intención: precio</span>
            </div>
            <em>IA en control</em>
          </header>

          <div className="stable-product__messages">
            <p className="is-inbound">Hola, quería saber el precio del plan mensual.</p>
            <span>Intención detectada: precio + cierre</span>
            <p className="is-ai">¡Hola, Carla! Te paso las opciones y te marco cuál conviene según tu equipo.</p>
            <p className="is-inbound is-short">Perfecto. ¿Cómo puedo pagarlo?</p>
          </div>

          <div className="stable-product__next-step">
            <span>Próximo paso sugerido</span>
            <strong>Enviar propuesta y programar seguimiento</strong>
          </div>
        </section>

        <aside className="stable-product__context" aria-label="Contexto comercial">
          <p>Contexto comercial</p>
          <div><span>Estado</span><strong>Oportunidad</strong></div>
          <div><span>Prioridad</span><strong>Alta</strong></div>
          <div><span>SLA</span><strong>6 minutos</strong></div>
          <div><span>Takeover</span><strong>Disponible</strong></div>
        </aside>
      </div>

      <div className="stable-product__flow" aria-label="Flujo comercial resumido">
        {['Consulta', 'Contexto', 'Próximo paso', 'Resultado'].map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="stable-footer">
      <div className="stable-footer__inner">
        <div>
          <a className="stable-brand" href="#inicio" aria-label="Escalando Labs inicio">
            <span className="stable-brand__mark" aria-hidden="true">
              <Image src="/brand-icon.png" alt="" width={34} height={34} />
            </span>
            <span className="stable-brand__wordmark">
              ESCALANDO
              <strong>LABS</strong>
            </span>
          </a>
          <p>Sistema comercial conversacional con IA y control humano.</p>
        </div>

        <nav aria-label="Páginas legales">
          <a href="/privacidad">Privacidad</a>
          <a href="/terminos">Términos</a>
          <a href="/contacto">Contacto legal</a>
          <a href="/eliminacion-datos">Eliminación de datos</a>
        </nav>

        <p>© {new Date().getFullYear()} Escalando Labs.</p>
      </div>
    </footer>
  )
}

export default function HomeStable() {
  return (
    <div className="landing-stable" id="inicio">
      <a className="stable-skip-link" href="#contenido-principal">
        Ir al contenido principal
      </a>
      <SiteHeader />

      <main id="contenido-principal">
        <section className="stable-hero" aria-labelledby="stable-hero-title">
          <div className="stable-hero__copy">
            <p className="stable-eyebrow">PARA EQUIPOS QUE VENDEN POR WHATSAPP</p>
            <h1 id="stable-hero-title">
              Que ninguna consulta quede <span>sin seguimiento.</span>
            </h1>
            <p className="stable-hero__description">
              Escalando Labs reúne WhatsApp, IA y CRM para responder, priorizar y retomar oportunidades desde un solo lugar, con control humano cuando hace falta.
            </p>

            <div className="stable-hero__actions">
              <a className="stable-primary-button" href="/demo">
                Ver demo interactiva
              </a>
              <a className="stable-secondary-button" href={DIAGNOSTIC_URL} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </div>

            <div className="stable-hero__proofs" aria-label="Capacidades principales">
              {HERO_PROOFS.map((proof) => <span key={proof}>{proof}</span>)}
            </div>

            <div className="stable-provider-card" aria-label="Integración oficial de WhatsApp">
              <div className="stable-provider-card__icon">
                <Image src="/whatsapp-icon.png" alt="WhatsApp" width={34} height={34} />
              </div>
              <div>
                <span>WhatsApp Business Platform</span>
                <strong>Meta Tech Provider</strong>
              </div>
              <p>Infraestructura oficial preparada para operaciones multiempresa.</p>
            </div>
          </div>

          <ProductPreview />
        </section>

        <section className="stable-trust-strip" aria-label="Tipos de negocio">
          <p>Un panel base, configurable según la operación de cada negocio.</p>
          <div>
            {['Gastronomía', 'Servicios', 'Comercios', 'Salud y turnos'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="stable-section stable-problem" id="plataforma">
          <div className="stable-section__intro">
            <p className="stable-kicker">EL PROBLEMA</p>
            <h2>WhatsApp vende. El desorden comercial hace perder oportunidades.</h2>
            <p>Escalando Labs no agrega otro canal: convierte las conversaciones existentes en una operación visible y medible.</p>
          </div>

          <div className="stable-problem__grid">
            {PROBLEMS.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stable-section stable-flow" id="como-funciona">
          <div className="stable-section__intro stable-section__intro--centered">
            <p className="stable-kicker">CÓMO FUNCIONA</p>
            <h2>Una sola secuencia para atender, seguir y convertir.</h2>
            <p>La automatización trabaja dentro de reglas claras y el equipo conserva el control de la relación comercial.</p>
          </div>

          <div className="stable-flow__grid">
            {FLOW_STEPS.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stable-section stable-product-story">
          <div className="stable-product-story__copy">
            <p className="stable-kicker">UNA OPERACIÓN, NO UN BOT</p>
            <h2>La IA resuelve lo repetible. El sistema conserva el contexto.</h2>
            <p>
              Cada conversación deja información útil: quién consultó, qué necesita, qué se respondió, cuándo hay que retomar y quién debe intervenir.
            </p>
            <ul>
              <li>Base de conocimiento y políticas del negocio.</li>
              <li>Priorización y próximos pasos comerciales.</li>
              <li>Historial compartido entre IA y personas.</li>
              <li>Campañas y reactivación con límites configurables.</li>
            </ul>
          </div>

          <div className="stable-product-story__summary" aria-label="Resumen del producto">
            <span>Conversaciones</span>
            <strong>Contexto compartido</strong>
            <i aria-hidden="true" />
            <span>CRM + seguimiento</span>
            <strong>Próximos pasos visibles</strong>
            <i aria-hidden="true" />
            <span>Equipo humano</span>
            <strong>Control cuando importa</strong>
          </div>
        </section>

        <section className="stable-section stable-cases" id="casos">
          <div className="stable-section__intro">
            <p className="stable-kicker">CASOS DE USO</p>
            <h2>El mismo panel, adaptado a distintas formas de vender.</h2>
            <p>El lenguaje, los módulos, las métricas y los flujos pueden configurarse según el tipo de negocio.</p>
          </div>

          <div className="stable-cases__grid">
            {USE_CASES.map((item) => (
              <article key={item.tag}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stable-section stable-pricing" id="precios">
          <span id="planes" className="stable-anchor-alias" aria-hidden="true" />
          <div className="stable-section__intro">
            <p className="stable-kicker">PRECIOS</p>
            <h2>Empezá con el alcance correcto y escalá cuando la operación lo pida.</h2>
            <p>Software, configuración y acompañamiento se cotizan con claridad. Los proveedores externos se estiman antes de activar la operación.</p>
          </div>

          <div className="stable-pricing__grid">
            {PLANS.map((plan) => (
              <article className={plan.featured ? 'is-featured' : ''} key={plan.name}>
                {plan.featured ? <span className="stable-pricing__badge">Recomendado</span> : null}
                <p>Plan {plan.name}</p>
                <h3>{plan.subtitle}</h3>
                <strong>{plan.price}<small> / mes</small></strong>
                <em>{plan.setup}</em>
                <span>{plan.description}</span>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <a href={planUrl(plan.name)} target="_blank" rel="noreferrer">
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="stable-section stable-faq" id="faq">
          <div className="stable-section__intro">
            <p className="stable-kicker">PREGUNTAS FRECUENTES</p>
            <h2>Lo importante antes de evaluar una implementación.</h2>
          </div>

          <div className="stable-faq__list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="stable-final-cta" id="diagnostico">
          <p className="stable-kicker">SIGUIENTE PASO</p>
          <h2>No vendemos un bot. Diseñamos una operación comercial.</h2>
          <p>Revisemos cómo atendés hoy, dónde se enfrían oportunidades y qué conviene ordenar primero.</p>
          <div>
            <a className="stable-primary-button" href={DIAGNOSTIC_URL} target="_blank" rel="noreferrer">
              Evaluar mi operación
            </a>
            <a className="stable-secondary-button" href="/demo">
              Ver la demo
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
