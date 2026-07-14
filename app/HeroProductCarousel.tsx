'use client'

import type { FocusEvent, KeyboardEvent, TouchEvent } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'

type Scene = {
  eyebrow: string
  title: string
  text: string
  status: string
  channel: string
  accent: 'blue' | 'green' | 'amber' | 'violet' | 'rose' | 'slate'
  inbox: Array<{ name: string; meta: string; tag: string }>
  main: {
    title: string
    message: string
    result: string
    detail: string
  }
  side: Array<{ label: string; value: string }>
}

const SCENES: Scene[] = [
  {
    eyebrow: 'API oficial de Meta',
    title: 'WhatsApp Business Platform oficial',
    text: 'Atención, seguimiento, listas de difusión y campañas sobre la API oficial, con implementación como Tech Provider de Meta.',
    status: 'API oficial + Tech Provider',
    channel: 'WhatsApp',
    accent: 'green',
    inbox: [
      { name: 'Carla Méndez', meta: 'Consulta por implementación', tag: 'API oficial' },
      { name: 'Óptica Sur', meta: 'Plantilla aprobada', tag: 'Difusión' },
      { name: 'Hotel Plaza', meta: 'Seguimiento pendiente', tag: 'CRM' },
    ],
    main: {
      title: 'Integración sobre la API oficial',
      message: 'El negocio atiende desde WhatsApp Business Platform, conserva trazabilidad y usa plantillas cuando corresponde.',
      result: 'Infraestructura preparada para operar',
      detail: 'Trazabilidad, plantillas y reglas oficiales cuando corresponde.',
    },
    side: [
      { label: 'Canal', value: 'WhatsApp' },
      { label: 'API', value: 'Oficial' },
      { label: 'Condición', value: 'Tech Provider' },
    ],
  },
  {
    eyebrow: 'Operación multicanal',
    title: 'Conversaciones centralizadas',
    text: 'WhatsApp primero, con Instagram, Messenger, web y otros canales integrables según alcance.',
    status: 'Canales configurables',
    channel: 'Multicanal',
    accent: 'blue',
    inbox: [
      { name: 'Diego Suárez', meta: 'Instagram DM', tag: 'Integrable' },
      { name: 'Martina López', meta: 'Formulario web', tag: 'Web' },
      { name: 'Carla Méndez', meta: 'WhatsApp', tag: 'Principal' },
    ],
    main: {
      title: 'Un contexto compartido',
      message: 'Cada conversación entra con canal, contacto, intención y estado para que el equipo opere sin perder continuidad.',
      result: 'Conversación derivada al equipo',
      detail: 'El origen cambia. La operación sigue siendo una sola.',
    },
    side: [
      { label: 'WhatsApp', value: 'Principal' },
      { label: 'Instagram', value: 'Integrable' },
      { label: 'Web', value: 'Configurable' },
    ],
  },
  {
    eyebrow: 'IA con control',
    title: 'Respuestas con contexto y criterio humano',
    text: 'La IA resuelve lo repetible y escala al equipo cuando aparece una excepción comercial.',
    status: 'Humano disponible',
    channel: 'IA + equipo',
    accent: 'violet',
    inbox: [
      { name: 'Clínica Nova', meta: 'Caso sensible', tag: 'Humano' },
      { name: 'Studio 24', meta: 'Objeción de precio', tag: 'IA' },
      { name: 'Panadería Central', meta: 'Consulta frecuente', tag: 'Auto' },
    ],
    main: {
      title: 'La respuesta no empieza de cero',
      message: 'El sistema lee historial, reglas del negocio y etapa comercial antes de sugerir o enviar una respuesta.',
      result: 'Takeover humano activado',
      detail: 'El operador recibe resumen, intención y siguiente mensaje sugerido.',
    },
    side: [
      { label: 'Contexto', value: 'Historial completo' },
      { label: 'Reglas', value: 'Por negocio' },
      { label: 'Control', value: 'Manual o IA' },
    ],
  },
  {
    eyebrow: 'CRM conversacional',
    title: 'Seguimiento comercial visible',
    text: 'Cada conversación queda conectada con oportunidad, responsable, etapa y seguimiento.',
    status: 'Seguimiento activo',
    channel: 'CRM',
    accent: 'amber',
    inbox: [
      { name: 'Carla Méndez', meta: 'Plan Crecimiento', tag: 'Alta' },
      { name: 'Diego Ramos', meta: 'Presupuesto enviado', tag: 'Retomar' },
      { name: 'Marina Vega', meta: 'Pago pendiente', tag: 'Cobro' },
    ],
    main: {
      title: 'Oportunidad recuperada',
      message: 'El equipo ve qué hay que hacer, cuándo retomarlo y qué información ya tiene el cliente.',
      result: 'Seguimiento programado',
      detail: 'Mañana 10:30, responsable asignado.',
    },
    side: [
      { label: 'Etapa', value: 'Evaluación' },
      { label: 'Prioridad', value: 'Alta' },
      { label: 'Responsable', value: 'Comercial' },
    ],
  },
  {
    eyebrow: 'Campañas responsables',
    title: 'Listas de difusión con criterio',
    text: 'Audiencias, consentimiento, frecuencia y plantillas se revisan antes de activar campañas o listas de difusión.',
    status: 'Borrador revisado',
    channel: 'Campañas',
    accent: 'rose',
    inbox: [
      { name: 'Clientes inactivos', meta: '468 contactos', tag: 'Audiencia' },
      { name: 'Bajas recientes', meta: 'Excluidas', tag: 'Regla' },
      { name: 'Promo julio', meta: 'Plantilla requerida', tag: 'Revisar' },
    ],
    main: {
      title: 'Campaña revisada antes del envío',
      message: 'La plataforma ayuda a enviar con permiso, objetivo y frecuencia controlada, no a saturar una base.',
      result: 'Lista para aprobación',
      detail: 'Consentimiento, bajas y horario considerados.',
    },
    side: [
      { label: 'Segmento', value: 'Inactivos' },
      { label: 'Frecuencia', value: 'Controlada' },
      { label: 'Plantilla', value: 'Según caso' },
    ],
  },
  {
    eyebrow: 'Resultados operativos',
    title: 'Ventas, turnos y pagos con trazabilidad',
    text: 'El foco está en resultados concretos: venta cerrada, pago recibido, turno confirmado y seguimiento medible.',
    status: 'Operación medible',
    channel: 'Métricas',
    accent: 'slate',
    inbox: [
      { name: 'Venta cerrada', meta: 'Plan mensual', tag: 'Resultado' },
      { name: 'Pago recibido', meta: 'Link confirmado', tag: 'Cobro' },
      { name: 'Turno confirmado', meta: 'Mañana 15:00', tag: 'Agenda' },
    ],
    main: {
      title: 'Resultados del día',
      message: 'La operación deja señales visibles para priorizar, medir y corregir sin depender de memoria o planillas sueltas.',
      result: 'Venta cerrada',
      detail: 'Pago recibido y seguimiento postventa creado.',
    },
    side: [
      { label: 'Activas', value: '42' },
      { label: 'Seguimientos', value: '11' },
      { label: 'Humanos', value: '6' },
    ],
  },
]

const AUTO_ROTATE_MS = 5200

function ArrowIcon({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={direction === 'next' ? 'M5 12h14m-5-5 5 5-5 5' : 'M19 12H5m5-5-5 5 5 5'} />
    </svg>
  )
}

function WhatsAppLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="20" fill="#25D366" />
      <path
        fill="#fff"
        d="M20.08 8.4c-6.43 0-11.65 5.19-11.65 11.58 0 2.04.54 4.03 1.56 5.79l-1.65 6.02 6.2-1.62a11.75 11.75 0 0 0 5.54 1.41h.01c6.43 0 11.66-5.19 11.66-11.59 0-3.09-1.22-6-3.41-8.18a11.7 11.7 0 0 0-8.26-3.4Zm0 21.2h-.01a9.76 9.76 0 0 1-4.97-1.36l-.36-.21-3.68.96.99-3.57-.23-.37a9.6 9.6 0 0 1-1.49-5.08c0-5.32 4.36-9.66 9.73-9.66 2.6 0 5.05 1.01 6.89 2.84a9.58 9.58 0 0 1 2.84 6.81c0 5.33-4.37 9.65-9.71 9.65Zm5.3-7.25c-.29-.14-1.72-.84-1.99-.94-.26-.1-.45-.14-.64.14-.19.29-.73.94-.9 1.13-.16.19-.33.22-.62.08-.29-.14-1.2-.44-2.29-1.39-.85-.75-1.42-1.67-1.59-1.96-.16-.29-.01-.45.12-.59.12-.12.29-.32.43-.48.14-.16.19-.28.29-.47.09-.19.04-.37-.02-.51-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.26.29-.99.97-.99 2.36s1.01 2.74 1.15 2.93c.14.19 1.98 3.02 4.79 4.23.67.29 1.19.46 1.59.59.67.21 1.28.18 1.76.11.53-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z"
      />
    </svg>
  )
}

export default function HeroProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)
  const [isInteractionPaused, setIsInteractionPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const activeScene = SCENES[activeIndex]
  const isCredentialScene = activeIndex === 0
  const isAutoPlayPaused = isManuallyPaused || isInteractionPaused || reduceMotion

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReduceMotion(media.matches)

    updateMotion()
    media.addEventListener('change', updateMotion)

    return () => media.removeEventListener('change', updateMotion)
  }, [])

  useEffect(() => {
    if (isAutoPlayPaused) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SCENES.length)
    }, AUTO_ROTATE_MS)

    return () => window.clearInterval(timer)
  }, [isAutoPlayPaused])

  const controls = useMemo(
    () => ({
      previous: () => setActiveIndex((current) => (current - 1 + SCENES.length) % SCENES.length),
      next: () => setActiveIndex((current) => (current + 1) % SCENES.length),
      goTo: (index: number) => setActiveIndex(index),
    }),
    [],
  )

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      controls.previous()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      controls.next()
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    if (touchStartX.current === null) return

    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < 42) return
    if (distance < 0) controls.next()
    else controls.previous()
  }

  function handleFocus(event: FocusEvent<HTMLElement>) {
    if (event.currentTarget.contains(event.target)) {
      setIsInteractionPaused(true)
    }
  }

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsInteractionPaused(false)
    }
  }

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Escenas de producto de Escalando Labs"
      onFocusCapture={handleFocus}
      onBlurCapture={handleBlur}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsInteractionPaused(true)}
      onMouseLeave={() => setIsInteractionPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <div className="hero-carousel__chrome">
        <div>
          <span />
          <span />
          <span />
        </div>
        <strong>{activeScene.channel}</strong>
        <em>{activeScene.status}</em>
      </div>

      <div className={`hero-carousel__autoplay${isAutoPlayPaused ? ' is-paused' : ''}`} aria-hidden="true">
        <span key={`${activeIndex}-${isAutoPlayPaused}-${reduceMotion}`} style={{ animationDuration: `${AUTO_ROTATE_MS}ms` }} />
      </div>

      <div key={activeScene.title} className={`hero-carousel__scene hero-carousel__scene--${activeScene.accent}`} aria-live="polite">
        <aside className="hero-carousel__inbox" aria-label="Conversaciones de ejemplo">
          <header>
            <span>Operación</span>
            <strong>{activeScene.eyebrow}</strong>
          </header>
          {activeScene.inbox.map((item, index) => (
            <article className={index === 0 ? 'is-active' : ''} key={`${activeScene.title}-${item.name}`}>
              <span>{item.name.slice(0, 2).toUpperCase()}</span>
              <div>
                <strong>{item.name}</strong>
                <small>{item.meta}</small>
              </div>
              <em>{item.tag}</em>
            </article>
          ))}
        </aside>

        <div className="hero-carousel__main">
          <div className="hero-carousel__copy">
            <span>{activeScene.eyebrow}</span>
            {isCredentialScene ? (
              <div className="hero-carousel__whatsapp-presence" aria-label="WhatsApp Business Platform oficial">
                <span className="hero-carousel__whatsapp-logo">
                  <WhatsAppLogo />
                </span>
                <div>
                  <strong>WhatsApp</strong>
                  <small>Business Platform oficial</small>
                </div>
              </div>
            ) : null}
            <h2>{activeScene.title}</h2>
            <p>{activeScene.text}</p>
            {isCredentialScene ? (
              <div className="hero-carousel__credential-strip">
                <strong>API oficial</strong>
                <strong>Tech Provider</strong>
                <strong>WhatsApp principal</strong>
              </div>
            ) : null}
          </div>

          <div className="hero-carousel__message">
            <small>{activeScene.main.title}</small>
            <p>{activeScene.main.message}</p>
          </div>

          <div className="hero-carousel__result">
            <span />
            <div>
              <strong>{activeScene.main.result}</strong>
              <small>{activeScene.main.detail}</small>
            </div>
          </div>
        </div>

        <aside className="hero-carousel__side" aria-label="Indicadores de la escena">
          {activeScene.side.map((item) => (
            <div key={`${activeScene.title}-${item.label}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </aside>
      </div>

      <div className="hero-carousel__controls">
        <button type="button" onClick={controls.previous} aria-label="Ver escena anterior">
          <ArrowIcon direction="prev" />
        </button>
        <div className="hero-carousel__dots-wrap">
          <div className="hero-carousel__scene-count" aria-hidden="true">{String(activeIndex + 1).padStart(2, '0')} / {String(SCENES.length).padStart(2, '0')}</div>
          <div className="hero-carousel__dots" aria-label="Escenas del carrusel">
            {SCENES.map((scene, index) => (
              <button
                type="button"
                key={scene.title}
                className={index === activeIndex ? 'is-active' : ''}
                onClick={() => controls.goTo(index)}
                aria-label={`Ver escena ${index + 1}: ${scene.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero-carousel__pause"
            onClick={() => setIsManuallyPaused((current) => !current)}
            aria-pressed={isManuallyPaused}
          >
            {isManuallyPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
          </button>
        </div>
        <button type="button" onClick={controls.next} aria-label="Ver escena siguiente">
          <ArrowIcon direction="next" />
        </button>
      </div>
      <p className="hero-carousel__caption">Vista ilustrativa · Los datos y resultados mostrados son ejemplos de operación.</p>
    </section>
  )
}
