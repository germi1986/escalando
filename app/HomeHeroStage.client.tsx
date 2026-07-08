"use client"

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const HeroSceneCanvas = dynamic(() => import('./HomeHeroScene.client'), {
  ssr: false,
  loading: () => <HeroStageFallback mode="loading" />,
})

const SCENARIO_COUNT = 4
const HERO_SCENE_COUNT = 6

type HeroQuality = 'desktop' | 'mobile'
type HeroStageMode = 'loading' | 'optimized'

type NavigatorWithHints = Navigator & {
  connection?: {
    saveData?: boolean
  }
  deviceMemory?: number
}

type WindowWithIdleCallbacks = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number
  cancelIdleCallback?: (handle: number) => void
}

type DeviceState = {
  prefersReducedMotion: boolean
  quality: HeroQuality
  useStaticFallback: boolean
}

function readDeviceState(): DeviceState {
  if (typeof window === 'undefined') {
    return {
      prefersReducedMotion: false,
      quality: 'desktop',
      useStaticFallback: false,
    }
  }

  const isMobileViewport = window.matchMedia('(max-width: 900px)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const navigatorWithHints = navigator as NavigatorWithHints
  const saveData = navigatorWithHints.connection?.saveData === true
  const lowMemoryMobile = isMobileViewport && typeof navigatorWithHints.deviceMemory === 'number'
    ? navigatorWithHints.deviceMemory <= 4
    : false

  return {
    prefersReducedMotion,
    quality: isMobileViewport ? 'mobile' : 'desktop',
    useStaticFallback: prefersReducedMotion || saveData || lowMemoryMobile,
  }
}

function HeroStageFallback({ mode }: { mode: HeroStageMode }) {
  const isOptimizedMode = mode === 'optimized'

  return (
    <div className="hero-stage__fallback" data-mode={mode}>
      <span className="hero-stage__fallback-pill">
        {isOptimizedMode ? 'Vista optimizada' : 'Escena 3D V4.5'}
      </span>
      <strong>
        {isOptimizedMode ? 'Cargamos una versión más liviana para este dispositivo' : 'Cargando monitor y teclado'}
      </strong>
      <p>
        {isOptimizedMode
          ? 'Protegemos la carga inicial y dejamos el contenido comercial listo primero, sin tocar la composición aprobada de desktop.'
          : 'La composición aprobada se hidrata en cliente para que el texto y el header aparezcan antes.'}
      </p>
    </div>
  )
}

export default function HomeHeroStage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [sceneIndex, setSceneIndex] = useState(0)
  const [phase, setPhase] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [shouldLoadScene, setShouldLoadScene] = useState(false)
  const [deviceState, setDeviceState] = useState<DeviceState>(() => readDeviceState())

  useEffect(() => {
    const updateDeviceState = () => {
      setDeviceState(readDeviceState())
    }

    updateDeviceState()
    window.addEventListener('resize', updateDeviceState)

    return () => window.removeEventListener('resize', updateDeviceState)
  }, [])

  useEffect(() => {
    const element = containerRef.current

    if (!element || typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (deviceState.useStaticFallback || shouldLoadScene || !isVisible) {
      return
    }

    const windowWithIdleCallbacks = window as WindowWithIdleCallbacks
    let timeoutId: number | null = null
    let idleId: number | null = null
    let cancelled = false

    const activateScene = () => {
      if (!cancelled) {
        setShouldLoadScene(true)
      }
    }

    if (typeof windowWithIdleCallbacks.requestIdleCallback === 'function') {
      idleId = windowWithIdleCallbacks.requestIdleCallback(activateScene, { timeout: 900 })
    } else {
      timeoutId = window.setTimeout(activateScene, 220)
    }

    return () => {
      cancelled = true

      if (idleId !== null && typeof windowWithIdleCallbacks.cancelIdleCallback === 'function') {
        windowWithIdleCallbacks.cancelIdleCallback(idleId)
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [deviceState.useStaticFallback, isVisible, shouldLoadScene])

  useEffect(() => {
    if (deviceState.useStaticFallback || !shouldLoadScene || !isVisible) {
      return
    }

    const timer = window.setInterval(() => {
      setPhase((currentPhase) => {
        if (currentPhase >= 3) {
          setSceneIndex((currentScene) => {
            const nextScene = (currentScene + 1) % HERO_SCENE_COUNT

            if (nextScene === 0) {
              setScenarioIndex((currentIndex) => (currentIndex + 1) % SCENARIO_COUNT)
            }

            return nextScene
          })

          return 0
        }

        return currentPhase + 1
      })
    }, 2100)

    return () => window.clearInterval(timer)
  }, [deviceState.useStaticFallback, isVisible, shouldLoadScene])

  return (
    <div ref={containerRef} className="hero-stage" aria-label="Escena 3D de Escalando Labs">
      {deviceState.useStaticFallback ? (
        <HeroStageFallback mode="optimized" />
      ) : shouldLoadScene ? (
        <HeroSceneCanvas
          scenarioIndex={scenarioIndex}
          phase={phase}
          sceneIndex={sceneIndex}
          isVisible={isVisible}
          quality={deviceState.quality}
        />
      ) : (
        <HeroStageFallback mode="loading" />
      )}
    </div>
  )
}