"use client"

import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'

type OrbitCardStyle = CSSProperties & { '--orbit-index': number }

type ProductCard = {
  key: string
  title: string
  eyebrow: string
  status: string
  accent: 'blue' | 'green' | 'amber' | 'official'
  content: ReactNode
}

const PIPELINE_STEPS = [
  { label: 'Consulta', value: 'Intención detectada' },
  { label: 'CRM', value: 'Estado actualizado' },
  { label: 'Follow up', value: 'Próximo paso' },
  { label: 'Resultado', value: 'Venta / reserva / alerta' },
]

const CHANNELS = ['WhatsApp', 'Instagram', 'Messenger', 'TikTok', 'Telegram', 'Custom']

export default function HomeHeroStage() {
  const cards: ProductCard[] = [
    {
      key: 'conversation',
      title: 'Atención IA',
      eyebrow: 'Conversaciones en vivo',
      status: 'IA en control',
      accent: 'blue',
      content: <ConversationUi />,
    },
    {
      key: 'crm',
      title: 'CRM + follow up',
      eyebrow: 'Oportunidades priorizadas',
      status: 'Seguimiento activo',
      accent: 'green',
      content: <CrmUi />,
    },
    {
      key: 'campaigns',
      title: 'Campañas + canales',
      eyebrow: 'Reactivación responsable',
      status: 'Riesgo controlado',
      accent: 'amber',
      content: <CampaignUi />,
    },
    {
      key: 'official',
      title: 'WhatsApp API oficial',
      eyebrow: 'Infraestructura aprobada',
      status: 'Meta Tech Provider',
      accent: 'official',
      content: <OfficialWhatsAppUi />,
    },
  ]

  return (
    <div className="hero-stage hero-stage--lightweight hero-stage--ui-carousel" aria-label="Vista del sistema comercial conversacional de Escalando Labs">
      <div className="hero-ui-shell">
        <div className="hero-ui-backdrop" aria-hidden="true">
          <span className="hero-ui-orb hero-ui-orb--blue" />
          <span className="hero-ui-orb hero-ui-orb--green" />
          <span className="hero-ui-orb hero-ui-orb--amber" />
          <span className="hero-ui-ring hero-ui-ring--one" />
          <span className="hero-ui-ring hero-ui-ring--two" />
        </div>

        <div className="hero-ui-topbar">
          <div className="hero-ui-window-dots" aria-hidden="true"><span /><span /><span /></div>
          <strong>Escalando Labs · consola comercial</strong>
          <em>Multicanal</em>
        </div>

        <div className="hero-ui-orbit" aria-label="Tarjetas de producto en movimiento">
          {cards.map((card, index) => (
            <article
              className={`hero-product-card hero-product-card--${card.accent}`}
              style={{ '--orbit-index': index } as OrbitCardStyle}
              key={card.key}
            >
              <header className="product-card-header">
                <div>
                  <span>{card.eyebrow}</span>
                  <strong>{card.title}</strong>
                </div>
                <em>{card.status}</em>
              </header>

              {card.content}
            </article>
          ))}
        </div>

        <div className="hero-ui-flow" aria-label="Flujo comercial resumido">
          {PIPELINE_STEPS.map((step, index) => (
            <div className="hero-ui-flow-step" key={step.label}>
              <i>{String(index + 1).padStart(2, '0')}</i>
              <div>
                <strong>{step.label}</strong>
                <span>{step.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ConversationUi() {
  const conversations = [
    { name: 'Carla M.', text: 'Precio del plan', active: true, tag: 'IA' },
    { name: 'Diego R.', text: 'Stock disponible', active: false, tag: 'IG' },
    { name: 'Clínica Nova', text: 'Caso sensible', active: false, tag: 'SLA' },
  ]

  return (
    <div className="product-window product-window--conversation">
      <aside className="product-mini-sidebar">
        <div className="mini-logo">ESC <strong>LABS</strong></div>
        <div className="mini-list">
          {conversations.map((item) => (
            <div className={`mini-conversation ${item.active ? 'is-active' : ''}`} key={item.name}>
              <span>{item.name.charAt(0)}</span>
              <div><strong>{item.name}</strong><small>{item.text}</small></div>
              <em>{item.tag}</em>
            </div>
          ))}
        </div>
      </aside>

      <section className="product-chat-panel">
        <div className="mini-section-head">
          <div><strong>Carla Méndez</strong><span>WhatsApp · Intención: precio</span></div>
          <em>IA en control</em>
        </div>
        <div className="mini-chat-body">
          <p className="mini-bubble mini-bubble--in">Hola, quería saber el precio del plan mensual.</p>
          <p className="mini-system">Intención detectada · <strong>Precio + cierre</strong></p>
          <p className="mini-bubble mini-bubble--ai">¡Hola Carla! Te paso opciones y marco cuál conviene según tu equipo.</p>
          <p className="mini-bubble mini-bubble--in mini-bubble--short">Perfecto. ¿Cómo puedo pagarlo?</p>
          <div className="mini-result"><strong>Próximo paso</strong><span>Enviar link de pago + seguimiento</span></div>
        </div>
      </section>

      <aside className="product-side-metrics">
        <Metric label="Estado" value="Oportunidad" />
        <Metric label="SLA" value="6 min" />
        <Metric label="Takeover" value="Disponible" tone="good" />
      </aside>
    </div>
  )
}

function CrmUi() {
  return (
    <div className="product-window product-window--crm">
      <section className="crm-profile-card">
        <div className="crm-avatar">CM</div>
        <div>
          <span>Cliente priorizado</span>
          <strong>Carla Méndez</strong>
          <p>Interés alto · consultó precio y forma de pago.</p>
        </div>
        <em>Score 82%</em>
      </section>

      <section className="crm-main-grid">
        <div className="crm-status-card">
          <span>Estado comercial</span>
          <strong>Seguimiento activo</strong>
          <div className="crm-progress"><i style={{ width: '72%' }} /></div>
          <p>La IA dejó contexto y próximo paso para no perder la oportunidad.</p>
        </div>

        <div className="crm-next-card">
          <span>Próxima acción</span>
          <strong>Recordar propuesta</strong>
          <p>Hoy · 18:30 · si no responde.</p>
        </div>
      </section>

      <section className="crm-timeline">
        {[
          ['Consulta recibida', 'WhatsApp'],
          ['Intención detectada', 'Precio'],
          ['Propuesta enviada', 'IA'],
          ['Follow up programado', 'Automático'],
        ].map(([title, label], index) => (
          <div className={index <= 2 ? 'is-done' : ''} key={title}>
            <i>{index + 1}</i>
            <strong>{title}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

function CampaignUi() {
  return (
    <div className="product-window product-window--campaign">
      <section className="campaign-top-grid">
        <div className="campaign-card campaign-card--main">
          <span>Campaña</span>
          <strong>Reactivación clientes en riesgo</strong>
          <p>Plantillas, horario, cooldown y lotes antes de enviar.</p>
        </div>
        <div className="campaign-card campaign-card--risk">
          <span>Riesgo</span>
          <strong>Controlado</strong>
          <div className="risk-meter"><i /></div>
        </div>
      </section>

      <section className="channel-grid" aria-label="Canales conectables">
        {CHANNELS.map((channel, index) => (
          <div className={index === 0 ? 'is-primary' : ''} key={channel}>
            <strong>{channel}</strong>
            <span>{index === 0 ? 'Oficial' : index === 5 ? 'A pedido' : 'CRM'}</span>
          </div>
        ))}
      </section>

      <section className="send-queue">
        {[
          ['Carla Méndez', 'Enviado'],
          ['Óptica Sur', 'En cola'],
          ['Hotel Plaza', 'Esperando lote'],
        ].map(([name, status], index) => (
          <div className={index === 0 ? 'is-sent' : ''} key={name}>
            <strong>{name}</strong>
            <span>{status}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

function OfficialWhatsAppUi() {
  return (
    <div className="product-window product-window--official">
      <section className="official-hero-card">
        <div className="official-whatsapp-mark" aria-label="WhatsApp oficial">
          <Image
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            width={82}
            height={82}
            sizes="82px"
            className="official-whatsapp-logo"
          />
        </div>

        <div className="official-copy">
          <span>Acceso habilitado</span>
          <strong>WhatsApp Business Platform</strong>
          <p>
            Escalando Labs opera sobre la infraestructura oficial de WhatsApp API
            para atención, campañas, seguimiento y reapertura con plantillas.
          </p>
        </div>
      </section>

      <section className="official-badge-row" aria-label="Estado de aprobación">
        <div className="official-meta-badge">
          <i>∞</i>
          <div>
            <span>Meta</span>
            <strong>Tech Provider</strong>
          </div>
        </div>

        <div className="official-api-badge">
          <span>API</span>
          <strong>Oficial</strong>
        </div>
      </section>

      <section className="official-proof-grid">
        <div>
          <span>Confianza</span>
          <strong>Canal oficial</strong>
          <p>Sin atajos ni soluciones informales.</p>
        </div>
        <div>
          <span>Operación</span>
          <strong>Multiempresa</strong>
          <p>Preparado para varias marcas y equipos.</p>
        </div>
        <div>
          <span>Escala</span>
          <strong>Plantillas + CRM</strong>
          <p>Reapertura y seguimiento con contexto.</p>
        </div>
      </section>
    </div>
  )
}


function Metric({ label, value, tone }: { label: string; value: string; tone?: 'good' }) {
  return (
    <div className={`metric-tile ${tone === 'good' ? 'metric-tile--good' : ''}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}
