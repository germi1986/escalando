'use client'

import type { KeyboardEvent, TouchEvent } from 'react'
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
    "eyebrow": "API oficial de Meta",
    "title": "WhatsApp Business Platform oficial",
    "text": "Atención y campañas sobre la API oficial, con implementación como Tech Provider de Meta.",
    "status": "Tech Provider de Meta",
    "channel": "WhatsApp",
    "accent": "green",
    "inbox": [
      {
        "name": "Carla Méndez",
        "meta": "Consulta por implementación",
        "tag": "API oficial"
      },
      {
        "name": "Óptica Sur",
        "meta": "Ventana cerrada",
        "tag": "Plantilla"
      },
      {
        "name": "Hotel Plaza",
        "meta": "Seguimiento pendiente",
        "tag": "CRM"
      }
    ],
    "main": {
      "title": "Canal verificado y operativo",
      "message": "El negocio atiende desde WhatsApp Business Platform, conserva trazabilidad y usa plantillas cuando corresponde.",
      "result": "Integración oficial lista",
      "detail": "Sin sellos inventados ni categorías incorrectas."
    },
    "side": [
      {
        "label": "Proveedor",
        "value": "Meta"
      },
      {
        "label": "Condición",
        "value": "Tech Provider"
      },
      {
        "label": "Canal principal",
        "value": "WhatsApp"
      }
    ]
  },
  {
    "eyebrow": "Operación multicanal",
    "title": "Conversaciones centralizadas",
    "text": "WhatsApp primero, con Instagram, Messenger, web y otros canales integrables según alcance.",
    "status": "Canales configurables",
    "channel": "Multicanal",
    "accent": "blue",
    "inbox": [
      {
        "name": "Diego Suárez",
        "meta": "Instagram DM",
        "tag": "Integrable"
      },
      {
        "name": "Martina López",
        "meta": "Formulario web",
        "tag": "Web"
      },
      {
        "name": "Carla Méndez",
        "meta": "WhatsApp",
        "tag": "Principal"
      }
    ],
    "main": {
      "title": "Un contexto compartido",
      "message": "Cada conversación entra con canal, contacto, intención y estado para que el equipo opere sin perder continuidad.",
      "result": "Conversación derivada al equipo",
      "detail": "El origen cambia. La operación sigue siendo una sola."
    },
    "side": [
      {
        "label": "WhatsApp",
        "value": "Principal"
      },
      {
        "label": "Instagram",
        "value": "Integrable"
      },
      {
        "label": "Web",
        "value": "Configurable"
      }
    ]
  },
  {
    "eyebrow": "IA con control",
    "title": "Respuestas con contexto y criterio humano",
    "text": "La IA resuelve lo repetible y escala al equipo cuando aparece una excepción comercial.",
    "status": "Humano disponible",
    "channel": "IA + equipo",
    "accent": "violet",
    "inbox": [
      {
        "name": "Clínica Nova",
        "meta": "Caso sensible",
        "tag": "Humano"
      },
      {
        "name": "Studio 24",
        "meta": "Objeción de precio",
        "tag": "IA"
      },
      {
        "name": "Panadería Central",
        "meta": "Consulta frecuente",
        "tag": "Auto"
      }
    ],
    "main": {
      "title": "La respuesta no empieza de cero",
      "message": "El sistema lee historial, reglas del negocio y etapa comercial antes de sugerir o enviar una respuesta.",
      "result": "Takeover humano activado",
      "detail": "El operador recibe resumen, intención y próximo mensaje sugerido."
    },
    "side": [
      {
        "label": "Contexto",
        "value": "Historial completo"
      },
      {
        "label": "Reglas",
        "value": "Por negocio"
      },
      {
        "label": "Control",
        "value": "Manual o IA"
      }
    ]
  },
  {
    "eyebrow": "CRM conversacional",
    "title": "Próximo paso comercial visible",
    "text": "Cada conversación queda conectada con oportunidad, responsable, etapa y seguimiento.",
    "status": "Seguimiento activo",
    "channel": "CRM",
    "accent": "amber",
    "inbox": [
      {
        "name": "Carla Méndez",
        "meta": "Plan Crecimiento",
        "tag": "Alta"
      },
      {
        "name": "Diego Ramos",
        "meta": "Presupuesto enviado",
        "tag": "Retomar"
      },
      {
        "name": "Marina Vega",
        "meta": "Pago pendiente",
        "tag": "Cobro"
      }
    ],
    "main": {
      "title": "Oportunidad recuperada",
      "message": "El equipo ve qué hay que hacer, cuándo retomarlo y qué información ya tiene el cliente.",
      "result": "Próximo seguimiento programado",
      "detail": "Mañana 10:30, responsable asignado."
    },
    "side": [
      {
        "label": "Etapa",
        "value": "Evaluación"
      },
      {
        "label": "Prioridad",
        "value": "Alta"
      },
      {
        "label": "Responsable",
        "value": "Comercial"
      }
    ]
  },
  {
    "eyebrow": "Campañas responsables",
    "title": "Segmentación antes de enviar",
    "text": "Audiencias, consentimiento, frecuencia y plantillas se revisan antes de activar una campaña.",
    "status": "Borrador revisado",
    "channel": "Campañas",
    "accent": "rose",
    "inbox": [
      {
        "name": "Clientes inactivos",
        "meta": "468 contactos",
        "tag": "Audiencia"
      },
      {
        "name": "Bajas recientes",
        "meta": "Excluidas",
        "tag": "Regla"
      },
      {
        "name": "Promo julio",
        "meta": "Plantilla requerida",
        "tag": "Revisar"
      }
    ],
    "main": {
      "title": "Campaña revisada antes del envío",
      "message": "La plataforma ayuda a enviar con permiso, objetivo y frecuencia controlada, no a saturar una base.",
      "result": "Lista para aprobación",
      "detail": "Consentimiento, bajas y horario considerados."
    },
    "side": [
      {
        "label": "Segmento",
        "value": "Inactivos"
      },
      {
        "label": "Frecuencia",
        "value": "Controlada"
      },
      {
        "label": "Plantilla",
        "value": "Según caso"
      }
    ]
  },
  {
    "eyebrow": "Resultados operativos",
    "title": "Ventas, turnos y pagos con trazabilidad",
    "text": "El foco está en resultados concretos: venta cerrada, pago recibido, turno confirmado y seguimiento medible.",
    "status": "Operación medible",
    "channel": "Métricas",
    "accent": "slate",
    "inbox": [
      {
        "name": "Venta cerrada",
        "meta": "Plan mensual",
        "tag": "Resultado"
      },
      {
        "name": "Pago recibido",
        "meta": "Link confirmado",
        "tag": "Cobro"
      },
      {
        "name": "Turno confirmado",
        "meta": "Mañana 15:00",
        "tag": "Agenda"
      }
    ],
    "main": {
      "title": "Resultados del día",
      "message": "La operación deja señales visibles para priorizar, medir y corregir sin depender de memoria o planillas sueltas.",
      "result": "Venta cerrada",
      "detail": "Pago recibido y seguimiento postventa creado."
    },
    "side": [
      {
        "label": "Activas",
        "value": "42"
      },
      {
        "label": "Seguimientos",
        "value": "11"
      },
      {
        "label": "Humanos",
        "value": "6"
      }
    ]
  }
]

const AUTO_ROTATE_MS = 6500

function ArrowIcon({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={direction === 'next' ? 'M5 12h14m-5-5 5 5-5 5' : 'M19 12H5m5-5-5 5 5 5'} />
    </svg>
  )
}

export default function HeroProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const activeScene = SCENES[activeIndex]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReduceMotion(media.matches)

    updateMotion()
    media.addEventListener('change', updateMotion)

    return () => media.removeEventListener('change', updateMotion)
  }, [])

  useEffect(() => {
    if (isPaused || reduceMotion) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SCENES.length)
    }, AUTO_ROTATE_MS)

    return () => window.clearInterval(timer)
  }, [isPaused, reduceMotion])

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

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Escenas de producto de Escalando Labs"
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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

      <div className={`hero-carousel__scene hero-carousel__scene--${activeScene.accent}`} aria-live="polite">
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

        <main className="hero-carousel__main">
          <div className="hero-carousel__copy">
            <span>{activeScene.eyebrow}</span>
            <h2>{activeScene.title}</h2>
            <p>{activeScene.text}</p>
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
        </main>

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
        <div className="hero-carousel__dots" role="tablist" aria-label="Escenas del carrusel">
          {SCENES.map((scene, index) => (
            <button
              type="button"
              key={scene.title}
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => controls.goTo(index)}
              aria-label={`Ver escena ${index + 1}: ${scene.title}`}
              aria-selected={index === activeIndex}
              role="tab"
            />
          ))}
        </div>
        <button type="button" onClick={controls.next} aria-label="Ver escena siguiente">
          <ArrowIcon direction="next" />
        </button>
      </div>
    </section>
  )
}
