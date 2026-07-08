import Image from 'next/image'
import HomeHeroStage from './HomeHeroStage.client'

const HEADER_NAV_ITEMS = [
  'Plataforma',
  'Soluciones',
  'Recursos',
  'Empresa',
  'Precios',
]

const INDUSTRY_FITS = [
  { title: 'Gastronomía y delivery', icon: '🍽️' },
  { title: 'Servicios profesionales', icon: '🧩' },
  { title: 'Comercios y franquicias', icon: '🏬' },
  { title: 'Educación, salud y turnos', icon: '🗓️' },
]

const FLOW_STEPS = [
  {
    step: '1',
    title: 'Entra una conversación',
    text: 'Desde WhatsApp, Instagram, Messenger, TikTok, Telegram o un canal personalizado.',
    icon: '?',
  },
  {
    step: '2',
    title: 'Escalando la ordena',
    text: 'Asigna contacto, canal, intención, estado comercial y prioridad de seguimiento.',
    icon: '?',
  },
  {
    step: '3',
    title: 'La IA ayuda',
    text: 'Responde lo simple, sugiere próximos pasos y prepara follow ups con contexto.',
    icon: '?',
  },
  {
    step: '4',
    title: 'El equipo convierte',
    text: 'Toma control cuando hace falta criterio humano, cierre o excepción comercial.',
    icon: '?',
  },
]

const FEATURE_COLUMNS = [
  {
    title: 'IA con contexto de tu negocio.',
    items: [
      ['Base real', 'Usa información del negocio, políticas, horarios y límites.'],
      ['Sugerencias', 'Propone respuestas y próximos pasos que el equipo puede aplicar.'],
      ['Derivación', 'Escala a humano cuando la situación lo requiere.'],
    ],
  },
  {
    title: 'Reactivá tu base sin hacer spam.',
    items: [
      ['Clientes dormidos', 'Identifica oportunidades que todavía pueden volver.'],
      ['Mensajes controlados', 'Segmenta, mide frecuencia y cuida la reputación.'],
      ['Seguimiento posterior', 'Mide aperturas, respuestas y recuperaciones.'],
    ],
  },
  {
    title: 'Control para trabajar en equipo.',
    items: [
      ['Roles por usuario', 'Cada persona ve lo que necesita operar.'],
      ['Historial de acciones', 'La operación queda trazable y revisable.'],
      ['Multiempresa', 'Gestioná varias marcas desde una base común.'],
    ],
  },
]

const CHANNEL_STACK = [
  { name: 'WhatsApp', detail: 'Canal principal con WhatsApp Business Platform', state: 'Oficial' },
  { name: 'Instagram', detail: 'DMs con contexto comercial y CRM', state: 'Meta' },
  { name: 'Messenger', detail: 'Conversaciones sociales centralizadas', state: 'Meta' },
  { name: 'TikTok', detail: 'Consultas sociales convertidas en oportunidades', state: 'A pedido' },
  { name: 'Telegram', detail: 'Atención para comunidades, soporte o ventas', state: 'Integrable' },
  { name: 'Custom Channel', detail: 'Desarrollo sujeto a alcance, pruebas y validación', state: 'Custom' },
]

const PRICING_PLANS = [
  {
    name: 'Inicial',
    subtitle: 'WhatsApp IA',
    price: 'USD 149',
    setup: 'Setup desde USD 300',
    target: 'Para ordenar la atención, responder con contexto y dejar de depender de chats sueltos.',
    featured: false,
    includes: ['1 negocio y 1 canal principal', 'IA comercial configurada', 'Panel de conversaciones', 'Modo IA / humano', 'Base de conocimiento inicial'],
  },
  {
    name: 'Crecimiento',
    subtitle: 'CRM + follow up',
    price: 'USD 299',
    setup: 'Setup desde USD 500',
    target: 'Para recuperar oportunidades, trabajar base propia y medir mejor el seguimiento comercial.',
    featured: true,
    includes: ['Todo lo del plan Inicial', 'CRM conversacional', 'Follow up automático', 'Campañas responsables', 'Segmentación de clientes'],
  },
  {
    name: 'Escala',
    subtitle: 'Multicanal a medida',
    price: 'USD 599',
    setup: 'Setup desde USD 1.000',
    target: 'Para equipos con más volumen, varios operadores, integraciones o canales personalizados.',
    featured: false,
    includes: ['Todo lo del plan Crecimiento', 'Canales adicionales', 'Flujos personalizados', 'Automatizaciones n8n', 'Soporte prioritario'],
  },
]

const FAQ_ITEMS = [
  ['¿Qué canales se integran?', 'WhatsApp como canal principal, más Instagram, Messenger, TikTok, Telegram y canales personalizados según alcance técnico.'],
  ['¿La implementación es complicada?', 'La idea es que no. Se configura el sistema con información real del negocio, criterios comerciales y pruebas antes de operar.'],
  ['¿Reemplaza al equipo?', 'No. La IA resuelve lo repetible y ordena la operación. El equipo toma control cuando hace falta criterio humano.'],
  ['¿Puede hacer follow up automático?', 'Sí. Puede detectar oportunidades, sugerir próximos pasos y activar seguimientos según reglas comerciales.'],
  ['¿Qué pasa con funciones a medida?', 'Se estiman por alcance, plazo y riesgo. Primero se prueban; después se suben a producción.'],
]

const DIAGNOSTIC_URL = `https://wa.me/5491153230859?text=${encodeURIComponent(
  'Hola, quiero solicitar un diagnóstico comercial para mi operación en WhatsApp.',
)}`

function SiteHeader() {
  return (
    <header className="site-header" aria-label="Navegación principal">
      <div className="site-header__inner">
        <a className="site-brand" href="#top" aria-label="Escalando Labs inicio">
          <span className="site-brand__mark" aria-hidden="true">
            <Image src="/brand-icon.png" alt="" width={32} height={32} sizes="32px" priority />
          </span>
          <span className="site-brand__wordmark">
            ESCALANDO
            <strong>LABS</strong>
          </span>
        </a>

        <nav className="site-nav" aria-label="Secciones de la landing">
          {HEADER_NAV_ITEMS.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="site-login" href="/demo">Ver demo</a>
          <a className="site-demo" href="#diagnostico">Solicitar demo</a>
        </div>
      </div>
    </header>
  )
}

function LandingSections() {
  return (
    <div className="landing-v3" aria-label="Contenido comercial de Escalando Labs">
      <section className="audience-strip" aria-label="Industrias sugeridas">
        <p>Pensado para equipos que venden por WhatsApp, Instagram, web y otros canales.</p>
        <div>
          {INDUSTRY_FITS.map((item) => (
            <article key={item.title}>
              <span>{item.icon}</span>
              <strong>{item.title}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="operating-section" id="plataforma">
        <div className="section-kicker">Plataforma</div>
        <div className="operating-layout">
          <div className="operating-copy">
            <h2>Una pantalla pensada para operar, no para improvisar.</h2>
            <p>
              Todo lo que tu equipo necesita para dar seguimiento real: conversación activa,
              sugerencia de IA, próximo paso, campaña asociada, datos del cliente, estado comercial
              e historial completo.
            </p>
          </div>

          <div className="annotated-board" aria-label="Vista conceptual del panel Escalando Labs">
            <div className="board-callout board-callout--left board-callout--one"><span />Conversación activa</div>
            <div className="board-callout board-callout--left board-callout--two"><span />Sugerencia de IA</div>
            <div className="board-callout board-callout--left board-callout--three"><span />Próximo paso</div>
            <div className="board-callout board-callout--left board-callout--four"><span />Campaña asociada</div>
            <div className="board-callout board-callout--right board-callout--one"><span />Datos del cliente</div>
            <div className="board-callout board-callout--right board-callout--two"><span />Estado comercial</div>
            <div className="board-callout board-callout--right board-callout--three"><span />Historial</div>

            <div className="mock-app-window">
              <aside>
                <div className="mock-logo">ESCALANDO <b>LABS</b></div>
                {['Conversaciones', 'Contactos', 'Oportunidades', 'Campañas', 'Reportes'].map((item, index) => (
                  <span className={index === 0 ? 'is-active' : ''} key={item}>{item}</span>
                ))}
              </aside>

              <main>
                <header>
                  <strong>Conversación activa</strong>
                  <em>IA + humano</em>
                </header>
                <div className="mock-message is-inbound">Hola, quería consultar por el plan mensual para 2 personas.</div>
                <div className="mock-message is-ai">¡Hola! Te cuento las opciones disponibles y te marco el próximo paso.</div>
                <div className="mock-message is-inbound">¿Tienen promos por pago trimestral?</div>
                <div className="mock-suggestion">Sugerencia IA · Aplicar beneficio y pedir datos mínimos</div>
              </main>

              <aside className="mock-detail-panel">
                <strong>Detalles del contacto</strong>
                <p>Carla Méndez · WhatsApp</p>
                <div><span>Oportunidad</span><b>Plan mensual</b></div>
                <div><span>Valor estimado</span><b>$78.000</b></div>
                <div><span>Próximo paso</span><b>Enviar propuesta</b></div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="flow-section" id="soluciones">
        <div className="flow-card">
          <div className="flow-intro">
            <div className="section-kicker">Flujo comercial</div>
            <h2>Un solo flujo comercial.</h2>
            <p>Menos caos. Más conversiones. Más memoria operativa.</p>
          </div>

          <div className="flow-steps">
            {FLOW_STEPS.map((step, index) => (
              <article className="flow-step" key={step.title}>
                <span className="flow-number">{step.step}</span>
                <i>{step.icon}</i>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < FLOW_STEPS.length - 1 ? <b aria-hidden="true">⬺</b> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-columns" id="recursos">
        {FEATURE_COLUMNS.map((column) => (
          <article className="feature-column" key={column.title}>
            <h2>{column.title}</h2>
            <div>
              {column.items.map(([title, text]) => (
                <div className="feature-row" key={title}>
                  <span />
                  <p><strong>{title}</strong>{text}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="channel-section" id="empresa">
        <div className="channel-copy">
          <div className="section-kicker">Canales + CRM</div>
          <h2>WhatsApp como gancho principal. Multicanal como operación real.</h2>
          <p>
            Escalando Labs centraliza conversaciones, clientes, campañas y follow ups en un panel común.
            También permite canales personalizados y funciones a medida con alcance, plazo y pruebas antes de producción.
          </p>
        </div>

        <div className="channel-grid">
          {CHANNEL_STACK.map((channel) => (
            <article key={channel.name}>
              <span>{channel.state}</span>
              <h3>{channel.name}</h3>
              <p>{channel.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-section" id="precios">
        <div className="pricing-head">
          <div className="section-kicker">Precios</div>
          <h2>Planes simples para empezar con criterio y escalar sin improvisar.</h2>
          <p>
            El precio combina software, configuración y acompañamiento. Los costos de proveedores externos
            pueden variar según canal, uso y país; se estiman antes de activar campañas.
          </p>
        </div>

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => (
            <article className={`pricing-card ${plan.featured ? 'is-featured' : ''}`} key={plan.name}>
              {plan.featured ? <span className="pricing-featured">Recomendado</span> : null}
              <p>Plan {plan.name}</p>
              <h3>{plan.subtitle}</h3>
              <strong>{plan.price}<small> / mes</small></strong>
              <em>{plan.setup}</em>
              <span>{plan.target}</span>
              <ul>
                {plan.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-cta-section" id="faq">
        <div className="faq-panel">
          <div className="section-kicker">Preguntas frecuentes</div>
          {FAQ_ITEMS.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>

        <div className="demo-panel" id="diagnostico">
          <div>
            <h2>Ordená conversaciones. Recuperá oportunidades. Vendé con más control.</h2>
            <p>
              Revisamos tus canales, detectamos dónde se enfrían oportunidades y definimos qué conviene ordenar primero.
            </p>
            <div className="landing-cta-actions">
              <a className="primary-button" href={DIAGNOSTIC_URL} target="_blank" rel="noreferrer">
                Solicitar diagnóstico
              </a>
              <a className="secondary-button" href="/contacto">
                Hablar con un especialista
              </a>
            </div>
          </div>
          <div className="operator-visual" aria-hidden="true">
            <div className="operator-screen">
              <span />
              <strong>Seguimiento activo</strong>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SiteFooter() {
  const legalLinks = [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Eliminación de datos', href: '/eliminacion-datos' },
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner site-footer__inner--simple">
        <div className="site-footer__brand">
          <a className="site-brand site-brand--footer" href="#top" aria-label="Escalando Labs inicio">
            <span className="site-brand__mark" aria-hidden="true">
              <Image src="/brand-icon.png" alt="" width={38} height={38} sizes="38px" />
            </span>
            <span className="site-brand__wordmark">
              ESCALANDO
              <strong>LABS</strong>
            </span>
          </a>
          <p>Sistema comercial conversacional con IA.</p>
        </div>

        <nav className="footer-legal-links" aria-label="Páginas legales">
          {legalLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>

        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Escalando Labs. Sistema comercial conversacional con IA.
        </p>
      </div>
    </footer>
  )
}

export default function HomeV45() {
  return (
    <main className="app-shell" id="top">
      <SiteHeader />
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">WHATSAPP, IA Y SEGUIMIENTO COMERCIAL</p>
          <h1>
            Convertí WhatsApp en un{' '}
            <span>sistema comercial con IA.</span>
          </h1>
          <p className="hero-description">
            Escalando Labs centraliza conversaciones, campañas, clientes y
            seguimiento para que cada consulta tenga respuesta, contexto y
            próximo paso.
          </p>
          <p className="hero-bridge">
            La IA resuelve lo simple, prioriza oportunidades y sabe cuándo pasarle la posta a una persona.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/demo">
              Quiero ver una demo para mi negocio
            </a>
            <a className="secondary-button" href="#soluciones">
              Ver el flujo comercial
            </a>
          </div>
          <div className="hero-bullets">
            <span>SLA configurable</span>
            <span>128 leads priorizados</span>
            <span>Takeover humano</span>
          </div>
          <div className="hero-trust-card" aria-label="Meta Tech Provider">
            <div className="trust-badge">
              <i>?</i>
              <strong>Meta Tech Provider</strong>
              <span>WhatsApp Business Platform</span>
            </div>
            <p>Preparado para operar WhatsApp oficial en entornos multiempresa.</p>
          </div>
        </div>
        <HomeHeroStage />
      </section>
      <LandingSections />
      <SiteFooter />
    </main>
  )
}