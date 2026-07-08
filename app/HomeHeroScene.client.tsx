"use client"

import { Component, Suspense, useMemo, useRef } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Html, RoundedBox, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

type Scenario = {
  contact: string
  channel: 'WhatsApp' | 'Instagram' | 'Web'
  intent: string
  preview: string
  incoming: string
  aiReply: string
  followUp: string
  nextStep: string
  conversion: string
  conversionDetail: string
  finalStatus: string
}

type HeroQuality = 'desktop' | 'mobile'

const SCENARIOS: Scenario[] = [
  {
    contact: 'Carla Méndez',
    channel: 'WhatsApp',
    intent: 'Precio',
    preview: '¿Cuánto sale?',
    incoming: 'Hola, quería saber el precio del plan mensual.',
    aiReply:
      '¡Hola Carla! Claro. Te paso las opciones disponibles y te marco cuál conviene según tu equipo.',
    followUp: 'Perfecto. ¿Cómo puedo pagarlo?',
    nextStep: 'Enviar link de pago',
    conversion: 'Pago recibido',
    conversionDetail: 'Plan mensual · $78.000',
    finalStatus: 'Venta cerrada',
  },
  {
    contact: 'Diego Ramos',
    channel: 'Instagram',
    intent: 'Stock',
    preview: '¿Tienen stock?',
    incoming: 'Hola, ¿tienen stock en talle M color negro?',
    aiReply:
      'Sí, tenemos disponible. Te puedo reservar una unidad por 30 minutos si querés avanzar.',
    followUp: 'Dale, reservámela.',
    nextStep: 'Confirmar reserva',
    conversion: 'Pedido confirmado',
    conversionDetail: 'Talle M · Color negro',
    finalStatus: 'Pedido cerrado',
  },
  {
    contact: 'Martina López',
    channel: 'Web',
    intent: 'Turno',
    preview: 'Necesito un turno',
    incoming: 'Buenas, ¿hay turnos disponibles para mañana?',
    aiReply:
      'Sí, mañana tenemos disponibilidad a las 10:30 y 15:00. ¿Qué horario te queda mejor?',
    followUp: 'A las 15:00 me sirve.',
    nextStep: 'Confirmar horario',
    conversion: 'Turno confirmado',
    conversionDetail: 'Mañana · 15:00',
    finalStatus: 'Reserva agendada',
  },
  {
    contact: 'Panadería Central',
    channel: 'WhatsApp',
    intent: 'Envío',
    preview: '¿Hacen envíos?',
    incoming: 'Hola, ¿hacen envíos a Zona Sur?',
    aiReply:
      'Sí, trabajamos con envíos programados. Decime la localidad y te confirmo costo y horario.',
    followUp: 'Es para Lomas de Zamora.',
    nextStep: 'Calcular envío',
    conversion: 'Venta cerrada',
    conversionDetail: 'Entrega programada',
    finalStatus: 'Cliente convertido',
  },
]

const HERO_UI_SCENES = [
  { key: 'chat', label: 'Conversaciones', pill: 'IA en control' },
  { key: 'classification', label: 'Clasificación automática', pill: 'Segmentación en vivo' },
  { key: 'campaign', label: 'Campañas', pill: 'Automatización controlada' },
  { key: 'personality', label: 'Personalidad IA', pill: 'Respuesta configurable' },
  { key: 'handoff', label: 'Derivación a humano', pill: 'Escalamiento inteligente' },
  { key: 'reopen', label: 'Reapertura con plantilla', pill: 'Ventana recuperada' },
] as const

type HeroUiSceneKey = (typeof HERO_UI_SCENES)[number]['key']

const CUSTOMER_CLASSIFICATIONS = [
  { name: 'Panadería Central', recency: '94 días', status: 'En riesgo', score: '82%', action: 'Reactivar' },
  { name: 'Estética Alma', recency: '14 días', status: 'Activo', score: '71%', action: 'Seguimiento' },
  { name: 'Clínica Nova', recency: '3 días', status: 'VIP', score: '93%', action: 'Priorizar' },
  { name: 'Óptica Sur', recency: '181 días', status: 'Perdido', score: '18%', action: 'Win-back' },
]

const CAMPAIGN_QUEUE = ['Carla Méndez', 'Diego Ramos', 'Martina López', 'Panadería Central']

const PERSONALITY_CONTROLS = [
  { label: 'Cordial', value: 92 },
  { label: 'Persuasiva', value: 74 },
  { label: 'Breve', value: 58 },
  { label: 'Enfoque en cierre', value: 88 },
]

const HANDOFF_CASES = [
  { name: 'Clínica Nova', reason: 'Caso sensible', priority: 'Alta' },
  { name: 'Constructora Fénix', reason: 'Cotización compleja', priority: 'Media' },
  { name: 'Studio 24', reason: 'Reclamo', priority: 'Alta' },
]

const REOPEN_CASES = [
  { name: 'Hotel Plaza', status: 'Fuera de ventana', template: 'promo_julio_01' },
  { name: 'Óptica Sur', status: 'Lista para reabrir', template: 'seguimiento_web' },
  { name: 'Estética Alma', status: 'Recuperable', template: 'turno_recordatorio' },
]

type HomeHeroSceneClientProps = {
  scenarioIndex: number
  phase: number
  sceneIndex: number
  isVisible: boolean
  quality: HeroQuality
}

export default function HomeHeroSceneClient({
  scenarioIndex,
  phase,
  sceneIndex,
  isVisible,
  quality,
}: HomeHeroSceneClientProps) {
  const scenario = SCENARIOS[scenarioIndex]
  const isMobileQuality = quality === 'mobile'

  return (
    <Canvas
      camera={{ position: [1, 3, 7.8], fov: 25 }}
      dpr={isMobileQuality ? [1, 1.15] : [1, 1.35]}
      shadows
      frameloop={isVisible ? 'always' : 'never'}
      onCreated={({ camera }) => camera.lookAt(0, 0.1, 0)}
    >
      <HeroScene
        scenario={scenario}
        phase={phase}
        activeIndex={scenarioIndex}
        sceneIndex={sceneIndex}
        quality={quality}
      />
    </Canvas>
  )
}

function HeroScene({
  scenario,
  phase,
  activeIndex,
  sceneIndex,
  quality,
}: {
  scenario: Scenario
  phase: number
  activeIndex: number
  sceneIndex: number
  quality: HeroQuality
}) {
  const stageRef = useRef<THREE.Group>(null)
  const isMobileQuality = quality === 'mobile'

  useFrame(({ mouse }) => {
    if (!stageRef.current) return

    stageRef.current.rotation.y = -0.055 + mouse.x * 0.026
    stageRef.current.rotation.x = -0.01 + mouse.y * 0.008
  })

  return (
    <>
      <color attach="background" args={['#08131f']} />
      <fog attach="fog" args={['#08131f', 8.5, 18]} />

      <ambientLight intensity={0.3} />
      <hemisphereLight args={['#dcecff', '#020617', 0.56]} />

      <directionalLight
        position={[-4.8, 6.2, 5.4]}
        intensity={1.22}
        color="#e8f2ff"
        castShadow
        shadow-mapSize-width={isMobileQuality ? 1024 : 1536}
        shadow-mapSize-height={isMobileQuality ? 1024 : 1536}
        shadow-bias={-0.00018}
        shadow-normalBias={0.045}
      />
      <spotLight
        position={[1.35, 4.0, 4.8]}
        angle={0.4}
        penumbra={0.88}
        intensity={1.62}
        color="#bfe3ff"
        castShadow={!isMobileQuality}
      />
      <spotLight
        position={[-3.2, 2.8, 3.1]}
        angle={0.52}
        penumbra={0.92}
        intensity={0.38}
        color="#f6cf9f"
      />
      <pointLight position={[0.05, 0.74, 1.18]} intensity={1.02} color="#66bfff" distance={4.8} decay={2} />
      <pointLight position={[0.28, -0.66, 1.02]} intensity={0.84} color="#ffb05c" distance={3.4} decay={2} />
      <pointLight position={[0.02, -0.76, 0.84]} intensity={0.42} color="#6fe1ff" distance={2.8} decay={2} />
      <pointLight position={[2.35, 1.2, 1.75]} intensity={0.38} color="#5ab6ff" distance={4.2} decay={2} />
      <pointLight position={[-2.7, 0.9, 1.88]} intensity={0.32} color="#ffd2a6" distance={3.8} decay={2} />
      <pointLight position={[0.1, 1.1, -1.78]} intensity={0.34} color="#456fff" distance={5.2} decay={2} />
      <pointLight position={[0, 2.35, 3.2]} intensity={0.22} color="#f8fbff" distance={4.4} decay={2} />

      <NightWindow />
      <FloorGlow />

      <ContactShadows
        position={[0.15, -1.003, 0.18]}
        opacity={isMobileQuality ? 0.56 : 0.64}
        scale={5.9}
        blur={isMobileQuality ? 1.7 : 2.15}
        far={2.45}
        color="#020617"
        frames={1}
      />

      <group ref={stageRef} position={[0, -0.05, 0]}>
        <Desk />
        <Monitor
          scenario={scenario}
          phase={phase}
          activeIndex={activeIndex}
          sceneIndex={sceneIndex}
        />
        <DeskObjects />
      </group>
    </>
  )
}

function FloorGlow() {
  return (
    <>
      <mesh position={[0.9, -1.025, -0.28]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5.7, 3.2]} />
        <meshBasicMaterial color="#0b3d83" transparent opacity={0.026} />
      </mesh>

      <mesh position={[0.16, -1.018, 0.44]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.7, 1.12]} />
        <meshBasicMaterial color="#55c4ff" transparent opacity={0.036} />
      </mesh>

      <mesh position={[0.18, -1.017, 0.96]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 0.78]} />
        <meshBasicMaterial color="#ffb56b" transparent opacity={0.042} />
      </mesh>

      <mesh position={[-1.25, -1.017, 0.58]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.9, 0.64]} />
        <meshBasicMaterial color="#ffd8ab" transparent opacity={0.024} />
      </mesh>
    </>
  )
}

function NightWindow() {
  const cloudRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!cloudRef.current) return
    cloudRef.current.position.x = Math.sin(clock.elapsedTime * 0.055) * 0.16
    cloudRef.current.position.y = Math.cos(clock.elapsedTime * 0.04) * 0.02
  })

  return (
    <group position={[0.9, 1.42, -2.35]}>
      <mesh position={[0, 0, -0.11]}>
        <planeGeometry args={[5.92, 3.14]} />
        <meshBasicMaterial color="#040912" transparent opacity={0.86} />
      </mesh>

      <mesh position={[0.02, 0.02, -0.08]}>
        <planeGeometry args={[5.72, 2.96]} />
        <meshBasicMaterial color="#091321" transparent opacity={0.24} />
      </mesh>

      <mesh position={[0.18, 0.12, -0.03]}>
        <planeGeometry args={[4.2, 2.15]} />
        <meshBasicMaterial color="#0d1725" transparent opacity={0.2} />
      </mesh>

      <mesh position={[-0.84, 0.08, 0.0]}>
        <planeGeometry args={[1.64, 2.6]} />
        <meshBasicMaterial color="#040912" transparent opacity={0.18} />
      </mesh>
      <mesh position={[1.42, 0.05, 0.0]}>
        <planeGeometry args={[1.28, 2.54]} />
        <meshBasicMaterial color="#040912" transparent opacity={0.16} />
      </mesh>

      <mesh position={[0, 1.45, 0]}>
        <boxGeometry args={[5.75, 0.03, 0.03]} />
        <meshBasicMaterial color="#667c97" transparent opacity={0.14} />
      </mesh>
      <mesh position={[0, -1.45, 0]}>
        <boxGeometry args={[5.75, 0.03, 0.03]} />
        <meshBasicMaterial color="#667c97" transparent opacity={0.12} />
      </mesh>
      <mesh position={[0.12, 0, 0]}>
        <boxGeometry args={[0.03, 2.95, 0.03]} />
        <meshBasicMaterial color="#667c97" transparent opacity={0.12} />
      </mesh>

      <WindowGlow position={[-1.92, -0.54, 0.015]} width={0.92} color="#ffd89a" opacity={0.14} />
      <WindowGlow position={[1.88, -0.7, 0.015]} width={0.7} color="#72b7ff" opacity={0.06} />
      <WindowGlow position={[0.78, -0.62, 0.015]} width={0.52} color="#ffd9a8" opacity={0.08} />
      <WindowGlow position={[0.08, -0.18, 0.01]} width={2.2} color="#a5c7ea" opacity={0.03} />

      <BokehDot position={[-2.12, -0.56, 0.03]} size={0.22} color="#f8ddb0" opacity={0.11} />
      <BokehDot position={[-1.76, -0.56, 0.03]} size={0.18} color="#ffe8c6" opacity={0.09} />
      <BokehDot position={[1.54, -0.74, 0.03]} size={0.18} color="#78bdff" opacity={0.06} />
      <BokehDot position={[1.84, -0.7, 0.03]} size={0.14} color="#9ad0ff" opacity={0.05} />
      <BokehDot position={[0.66, -0.64, 0.03]} size={0.13} color="#ffd9a1" opacity={0.07} />
      <BokehDot position={[-0.3, 0.92, 0.02]} size={0.34} color="#b9d7ff" opacity={0.03} />
      <BokehDot position={[2.28, 0.78, 0.02]} size={0.26} color="#88bfff" opacity={0.025} />
      <BokehDot position={[-2.34, 0.7, 0.02]} size={0.28} color="#ffe6bf" opacity={0.028} />

      <group ref={cloudRef}>
        <SoftCloud position={[-1.16, 0.64, 0.04]} scale={0.56} />
        <SoftCloud position={[0.78, 0.18, 0.04]} scale={0.44} />
        <SoftCloud position={[1.46, 0.8, 0.04]} scale={0.34} />
      </group>
    </group>
  )
}

function WindowGlow({
  position,
  width,
  color,
  opacity,
}: {
  position: [number, number, number]
  width: number
  color: string
  opacity: number
}) {
  return (
    <mesh position={position}>
      <planeGeometry args={[width, 0.04]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function BokehDot({
  position,
  size,
  color,
  opacity,
}: {
  position: [number, number, number]
  size: number
  color: string
  opacity: number
}) {
  return (
    <mesh position={position}>
      <circleGeometry args={[size, 24]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function SoftCloud({
  position,
  scale,
}: {
  position: [number, number, number]
  scale: number
}) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[-0.35, 0, 0]}>
        <sphereGeometry args={[0.35, 24, 12]} />
        <meshBasicMaterial color="#d7e8ff" transparent opacity={0.055} />
      </mesh>
      <mesh position={[0, 0.07, 0]}>
        <sphereGeometry args={[0.45, 24, 12]} />
        <meshBasicMaterial color="#d7e8ff" transparent opacity={0.07} />
      </mesh>
      <mesh position={[0.42, -0.02, 0]}>
        <sphereGeometry args={[0.32, 24, 12]} />
        <meshBasicMaterial color="#d7e8ff" transparent opacity={0.05} />
      </mesh>
    </group>
  )
}

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453123
  return value - Math.floor(value)
}

function rangedRandom(seed: number, min: number, max: number) {
  return min + pseudoRandom(seed) * (max - min)
}

function useWoodTexture() {
  return useMemo(() => {
    const size = 1024
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size

    const context = canvas.getContext('2d')

    if (!context) {
      const fallback = new THREE.Texture()
      fallback.needsUpdate = true
      return fallback
    }

    context.fillStyle = '#6a4630'
    context.fillRect(0, 0, size, size)

    for (let y = 0; y < size; y += 6) {
      const tone = 74 + Math.sin(y * 0.022) * 14 + (pseudoRandom(y + 1) * 8 - 4)
      context.fillStyle = `rgba(${tone + 24}, ${tone + 10}, ${tone - 8}, 0.24)`
      context.fillRect(0, y, size, 4)
    }

    for (let i = 0; i < 160; i += 1) {
      const x = pseudoRandom(i + 11) * size
      const y = pseudoRandom(i + 37) * size
      const width = rangedRandom(i + 71, 120, 440)
      const height = rangedRandom(i + 101, 10, 36)

      context.beginPath()
      context.ellipse(x, y, width, height, pseudoRandom(i + 131) * 0.08, 0, Math.PI * 2)
      context.fillStyle = i % 4 === 0 ? 'rgba(58, 30, 18, 0.08)' : 'rgba(142, 96, 61, 0.06)'
      context.fill()
    }

    for (let i = 0; i < 1100; i += 1) {
      const x = pseudoRandom(i + 211) * size
      const y = pseudoRandom(i + 431) * size
      const alpha = rangedRandom(i + 631, 0.02, 0.055)
      const light = rangedRandom(i + 877, 90, 132)
      context.fillStyle = `rgba(${light + 15}, ${light}, ${light - 12}, ${alpha})`
      context.fillRect(x, y, 1.5, 1.5)
    }

    const gradient = context.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.06)')
    gradient.addColorStop(0.45, 'rgba(255, 255, 255, 0)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)')
    context.fillStyle = gradient
    context.fillRect(0, 0, size, size)

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(2.4, 1.4)
    texture.anisotropy = 8
    texture.colorSpace = THREE.SRGBColorSpace
    texture.needsUpdate = true

    return texture
  }, [])
}

function KeyboardFallback({ position }: { position: [number, number, number] }) {
  const rows = [10, 11, 11, 8]

  return (
    <group position={position} rotation={[0, 0.02, -0.015]}>
      <RoundedBox args={[1.02, 0.042, 0.38]} radius={0.03} smoothness={6} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#1a2434"
          roughness={0.34}
          metalness={0.14}
          clearcoat={0.38}
          clearcoatRoughness={0.24}
        />
      </RoundedBox>

      <group position={[0, 0.026, -0.01]}>
        {rows.map((count, rowIndex) => {
          const spacingX = 0.082
          const startX = -((count - 1) * spacingX) / 2
          const z = -0.12 + rowIndex * 0.075
          const offsetX = rowIndex === 3 ? -0.055 : 0

          return Array.from({ length: count }).map((_, keyIndex) => (
            <mesh
              key={`row-${rowIndex}-key-${keyIndex}`}
              position={[startX + keyIndex * spacingX + offsetX, 0, z]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[0.058, 0.012, 0.05]} />
              <meshStandardMaterial color="#334155" roughness={0.42} metalness={0.12} />
            </mesh>
          ))
        })}

        <mesh position={[0.02, 0, 0.145]} castShadow receiveShadow>
          <boxGeometry args={[0.42, 0.012, 0.055]} />
          <meshStandardMaterial color="#334155" roughness={0.42} metalness={0.12} />
        </mesh>
      </group>
    </group>
  )
}

type KeyboardErrorBoundaryProps = {
  children: ReactNode
  fallback: ReactNode
}

type KeyboardErrorBoundaryState = {
  error: Error | null
}

class KeyboardErrorBoundary extends Component<KeyboardErrorBoundaryProps, KeyboardErrorBoundaryState> {
  state: KeyboardErrorBoundaryState = {
    error: null,
  }

  static getDerivedStateFromError(error: Error): KeyboardErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('[Escalando Labs] No se pudo cargar keyboard.glb. Uso fallback procedural.', error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return this.props.fallback
    }

    return this.props.children
  }
}

function RealKeyboardModel() {
  const { scene } = useGLTF(KEYBOARD_MODEL_URL, true)

  const object = useMemo(() => {
    const clonedScene = scene.clone(true)

    const box = new THREE.Box3().setFromObject(clonedScene)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()

    box.getSize(size)
    box.getCenter(center)

    const longestPlanarSide = Math.max(size.x, size.z, 0.001)
    const scale = KEYBOARD_TARGET_WIDTH / longestPlanarSide

    clonedScene.scale.setScalar(scale)
    clonedScene.position.set(
      KEYBOARD_POSITION[0] - center.x * scale,
      KEYBOARD_SURFACE_Y - box.min.y * scale,
      KEYBOARD_POSITION[2] - center.z * scale,
    )
    clonedScene.rotation.set(...KEYBOARD_ROTATION)

    clonedScene.traverse((child) => {
      const mesh = child as THREE.Mesh
      if (!mesh.isMesh) return

      mesh.castShadow = true
      mesh.receiveShadow = true

      const material = mesh.material
      const materials = Array.isArray(material) ? material : [material]

      materials.forEach((item) => {
        const mat = item as THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial
        if (!mat) return

        mat.needsUpdate = true

        if ('roughness' in mat && typeof mat.roughness === 'number') {
          mat.roughness = Math.min(Math.max(mat.roughness, 0.28), 0.66)
        }

        if ('metalness' in mat && typeof mat.metalness === 'number') {
          mat.metalness = Math.min(Math.max(mat.metalness, 0.04), 0.48)
        }

        if ('envMapIntensity' in mat && typeof mat.envMapIntensity === 'number') {
          mat.envMapIntensity = 0.7
        }
      })
    })

    return clonedScene
  }, [scene])

  return <primitive object={object} />
}

function Desk() {
  const woodTexture = useWoodTexture()

  return (
    <>
      <RoundedBox
        args={[6.35, 0.2, 2.72]}
        radius={0.03}
        smoothness={8}
        position={[0, -1.12, 0]}
        receiveShadow
      >
        <meshPhysicalMaterial
          map={woodTexture}
          color="#523626"
          roughness={0.62}
          metalness={0.04}
          clearcoat={0.18}
          clearcoatRoughness={0.74}
        />
      </RoundedBox>

      <RoundedBox
        args={[6.22, 0.03, 2.58]}
        radius={0.02}
        smoothness={8}
        position={[0, -1.0, 0.12]}
        receiveShadow
      >
        <meshPhysicalMaterial
          map={woodTexture}
          color="#7b5438"
          roughness={0.36}
          metalness={0.03}
          clearcoat={0.52}
          clearcoatRoughness={0.42}
        />
      </RoundedBox>

      <mesh position={[0.22, -0.9885, 0.34]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.6, 1.18]} />
        <meshBasicMaterial color="#53aef2" transparent opacity={0.028} />
      </mesh>

      <mesh position={[0.2, -0.9879, 0.92]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.15, 0.72]} />
        <meshBasicMaterial color="#ffbb70" transparent opacity={0.044} />
      </mesh>

      <mesh position={[-1.52, -0.9882, 0.46]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.62, 0.012]} />
        <meshBasicMaterial color="#fff1d9" transparent opacity={0.058} />
      </mesh>
      <mesh position={[1.15, -0.988, 0.58]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.18, 0.012]} />
        <meshBasicMaterial color="#dbeafe" transparent opacity={0.034} />
      </mesh>

      <mesh position={[0, -0.981, -0.64]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5.65, 0.02]} />
        <meshBasicMaterial color="#fff3df" transparent opacity={0.024} />
      </mesh>
      <mesh position={[0, -0.9805, 1.34]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5.45, 0.014]} />
        <meshBasicMaterial color="#1f120d" transparent opacity={0.14} />
      </mesh>
    </>
  )
}

const MODEL_URL = '/models/monitor.glb'

const MODEL_TARGET_SIZE = 4.25
const MODEL_OFFSET: [number, number, number] = [0, 0.5, 0]
const MODEL_ROTATION: [number, number, number] = [0.2, 0, 0]

const SCREEN_HTML_POSITION: [number, number, number] = [-0.45, 0.462, -0.025]
const SCREEN_HTML_DISTANCE_FACTOR = 3.6
const SCREEN_HTML_ROTATION: [number, number, number] = [-0.115, 0, 0]

const KEYBOARD_MODEL_URL = '/models/keyboard.glb'
const KEYBOARD_TARGET_WIDTH = 2.5
const KEYBOARD_POSITION: [number, number, number] = [0, -0.942, 0.94]
const KEYBOARD_ROTATION: [number, number, number] = [0, 0, 0]
const KEYBOARD_SURFACE_Y = -0.967

const SHOW_SCREEN_GUIDE = false
const SHOW_MODEL_BOX = false
const FORCE_VISIBLE_MODEL_MATERIAL = false

function Monitor({
  scenario,
  phase,
  activeIndex,
  sceneIndex,
}: {
  scenario: Scenario
  phase: number
  activeIndex: number
  sceneIndex: number
}) {
  return (
    <group position={[0, -0.25, 0]}>
      <ModelErrorBoundary>
        <Suspense fallback={<MonitorLoadingFallback />}>
          <RealMonitorModel />
        </Suspense>
      </ModelErrorBoundary>

      <ScreenLight />

      {SHOW_SCREEN_GUIDE && <ScreenGuide />}

      <Html
        transform
        position={SCREEN_HTML_POSITION}
        rotation={SCREEN_HTML_ROTATION}
        distanceFactor={SCREEN_HTML_DISTANCE_FACTOR}
        style={{ pointerEvents: 'none' }}
      >
        <MonitorInterface
          scenario={scenario}
          phase={phase}
          activeIndex={activeIndex}
          sceneIndex={sceneIndex}
        />
      </Html>
    </group>
  )
}

type RealMonitorDiagnostics = {
  object: THREE.Group
  debugSize: [number, number, number]
}

function RealMonitorModel() {
  const { scene } = useGLTF(MODEL_URL, true)

  const { object, debugSize } = useMemo<RealMonitorDiagnostics>(() => {
    const clonedScene = scene.clone(true)

    const box = new THREE.Box3().setFromObject(clonedScene)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()

    box.getSize(size)
    box.getCenter(center)

    const longestSide = Math.max(size.x, size.y, size.z, 0.001)
    const scale = MODEL_TARGET_SIZE / longestSide

    clonedScene.scale.setScalar(scale)
    clonedScene.position.set(
      MODEL_OFFSET[0] - center.x * scale,
      MODEL_OFFSET[1] - center.y * scale,
      MODEL_OFFSET[2] - center.z * scale,
    )
    clonedScene.rotation.set(...MODEL_ROTATION)

    clonedScene.traverse((child) => {
      const mesh = child as THREE.Mesh
      if (!mesh.isMesh) return

      mesh.castShadow = true
      mesh.receiveShadow = true

      if (FORCE_VISIBLE_MODEL_MATERIAL) {
        mesh.material = new THREE.MeshBasicMaterial({
          color: '#dbeafe',
          side: THREE.DoubleSide,
        })
        return
      }

      const material = mesh.material
      const materials = Array.isArray(material) ? material : [material]

      materials.forEach((item) => {
        const mat = item as THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial
        if (!mat) return

        mat.needsUpdate = true

        if ('color' in mat && mat.color) {
          mat.color.lerp(new THREE.Color('#16181d'), 0.7)
        }

        if ('emissive' in mat && mat.emissive) {
          mat.emissive.set('#000000')
        }

        if ('roughness' in mat && typeof mat.roughness === 'number') {
          mat.roughness = Math.max(mat.roughness, 0.62)
        }

        if ('metalness' in mat && typeof mat.metalness === 'number') {
          mat.metalness = Math.min(Math.max(mat.metalness, 0.04), 0.16)
        }

        if ('envMapIntensity' in mat && typeof mat.envMapIntensity === 'number') {
          mat.envMapIntensity = 0.38
        }
      })
    })

    return {
      object: clonedScene,
      debugSize: [size.x * scale, size.y * scale, size.z * scale],
    }
  }, [scene])

  return (
    <>
      <primitive object={object} />

      {SHOW_MODEL_BOX && (
        <mesh position={MODEL_OFFSET} rotation={MODEL_ROTATION}>
          <boxGeometry args={debugSize} />
          <meshBasicMaterial color="#f97316" wireframe transparent opacity={0.8} />
        </mesh>
      )}
    </>
  )
}

type ModelErrorBoundaryProps = {
  children: ReactNode
}

type ModelErrorBoundaryState = {
  error: Error | null
}

class ModelErrorBoundary extends Component<ModelErrorBoundaryProps, ModelErrorBoundaryState> {
  state: ModelErrorBoundaryState = {
    error: null,
  }

  static getDerivedStateFromError(error: Error): ModelErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[Escalando Labs] Error cargando monitor.glb', error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return <ModelLoadError message={this.state.error.message} />
    }

    return this.props.children
  }
}

function ModelLoadError({ message }: { message: string }) {
  return (
    <Html center position={[0, 0.2, 0.4]} distanceFactor={8}>
      <div
        style={{
          width: 260,
          borderRadius: 16,
          padding: 14,
          color: '#fecaca',
          background: 'rgba(127, 29, 29, 0.86)',
          border: '1px solid rgba(248, 113, 113, 0.5)',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 13,
          lineHeight: 1.35,
          boxShadow: '0 20px 60px rgba(0,0,0,.35)',
        }}
      >
        <strong style={{ display: 'block', color: '#fff', marginBottom: 6 }}>
          No se pudo cargar monitor.glb
        </strong>
        <span>{message}</span>
      </div>
    </Html>
  )
}

function MonitorLoadingFallback() {
  return (
    <group>
      <Html center position={[0, 0.1, 0.5]} distanceFactor={8}>
        <div
          style={{
            borderRadius: 999,
            padding: '9px 13px',
            color: '#ffedd5',
            background: 'rgba(124, 45, 18, 0.88)',
            border: '1px solid rgba(251, 146, 60, 0.45)',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          Cargando /models/monitor.glb...
        </div>
      </Html>
      <RoundedBox
        args={[4.24, 2.56, 0.2]}
        radius={0.085}
        smoothness={10}
        position={[0, 0, -0.055]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#050910"
          roughness={0.26}
          metalness={0.62}
          clearcoat={0.85}
          clearcoatRoughness={0.28}
        />
      </RoundedBox>

      <RoundedBox
        args={[1.3, 0.09, 0.64]}
        radius={0.04}
        smoothness={8}
        position={[0, -1.83, -0.08]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#07101b"
          metalness={0.72}
          roughness={0.24}
          clearcoat={0.6}
          clearcoatRoughness={0.25}
        />
      </RoundedBox>
    </group>
  )
}

function ScreenLight() {
  return (
    <>
      <pointLight position={[1.28, 0.54, 0.64]} intensity={0.62} color="#67c2ff" distance={2.4} decay={2} />
      <pointLight position={[1, -0.22, 0.95]} intensity={0.38} color="#ffb15b" distance={1.9} decay={2} />
      <pointLight position={[1.1, -0.72, 0.9]} intensity={0.34} color="#ffc98f" distance={1.55} decay={2} />
      <pointLight position={[1.42, 0.05, 1.28]} intensity={0.2} color="#2f9de4" distance={2.1} decay={2} />

      <mesh position={[1.28, 0.05, -0.22]}>
        <planeGeometry args={[2.45, 2.1]} />
        <meshBasicMaterial color="#245dbe" transparent opacity={0.018} />
      </mesh>

      <mesh position={[1.4, -0.92, 0.42]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.85, 0.82]} />
        <meshBasicMaterial color="#60c6ff" transparent opacity={0.032} />
      </mesh>

      <mesh position={[1.18, -0.948, 0.98]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.25, 0.48]} />
        <meshBasicMaterial color="#ffbc73" transparent opacity={0.048} />
      </mesh>

      <mesh position={[1.28, -0.985, 0.08]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.35, 0.24]} />
        <meshBasicMaterial color="#95dcff" transparent opacity={0.022} />
      </mesh>

      <mesh position={[1.1, -0.18, 0.16]}>
        <planeGeometry args={[2.2, 1.45]} />
        <meshBasicMaterial color="#ffb66a" transparent opacity={0.009} />
      </mesh>
    </>
  )
}

function ScreenGuide() {
  return (
    <mesh position={[0, 0, 0.09]}>
      <planeGeometry args={[3.84, 2.18]} />
      <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.45} />
    </mesh>
  )
}

function DeskObjects() {
  return (
    <KeyboardErrorBoundary fallback={<KeyboardFallback position={KEYBOARD_POSITION} />}>
      <Suspense fallback={<KeyboardFallback position={KEYBOARD_POSITION} />}>
        <RealKeyboardModel />
      </Suspense>
    </KeyboardErrorBoundary>
  )
}

function MonitorInterface({
  scenario,
  phase,
  activeIndex,
  sceneIndex,
}: {
  scenario: Scenario
  phase: number
  activeIndex: number
  sceneIndex: number
}) {
  const scene = HERO_UI_SCENES[sceneIndex]

  return (
    <div className="monitor-ui" data-scene={scene.key}>
      <aside className="ui-sidebar">
        <div className="ui-logo">
          ESCALANDO <strong>LABS</strong>
        </div>

        <SidebarContent
          scene={scene.key}
          phase={phase}
          activeIndex={activeIndex}
        />
      </aside>

      <section className={`ui-chat scene-workspace scene-${scene.key}`}>
        <SceneHeader scene={scene.key} scenario={scenario} phase={phase} />

        <SceneMainContent scene={scene.key} scenario={scenario} phase={phase} />
      </section>

      <aside className="ui-panel">
        <PanelContent scene={scene.key} scenario={scenario} phase={phase} />
      </aside>

      <SceneToast scene={scene.key} scenario={scenario} phase={phase} />
    </div>
  )
}

function SceneHeader({
  scene,
  scenario,
  phase,
}: {
  scene: HeroUiSceneKey
  scenario: Scenario
  phase: number
}) {
  const sceneMeta: Record<HeroUiSceneKey, { title: string; subtitle: string; pill: string }> = {
    chat: {
      title: scenario.contact,
      subtitle: `${scenario.channel} · Intención: ${scenario.intent}`,
      pill: 'IA en control',
    },
    classification: {
      title: 'Clasificación automática de clientes',
      subtitle: 'Segmentación comercial en tiempo real',
      pill: phase >= 2 ? 'Segmento detectado' : 'Analizando señales',
    },
    campaign: {
      title: 'Campaña de reactivación',
      subtitle: 'WhatsApp oficial, plantillas, lotes y riesgo antes de enviar',
      pill: phase >= 2 ? 'Envío en curso' : 'Meta Tech Provider',
    },
    personality: {
      title: 'Personalidad de la IA',
      subtitle: 'Tono, objetivos y límites configurables',
      pill: phase >= 2 ? 'Preview listo' : 'Ajuste fino',
    },
    handoff: {
      title: 'Derivación inteligente a humano',
      subtitle: 'La IA escala solo cuando hace falta',
      pill: phase >= 2 ? 'Operador asignado' : 'Caso sensible',
    },
    reopen: {
      title: 'Reapertura con plantilla',
      subtitle: 'Reapertura oficial con plantilla aprobada',
      pill: phase >= 2 ? 'Plantilla enviada' : 'WhatsApp oficial',
    },
  }

  const meta = sceneMeta[scene]

  return (
    <header className="chat-header scene-header">
      <div>
        <strong>{meta.title}</strong>
        <span>{meta.subtitle}</span>
      </div>

      <div className={`status-pill status-pill--${scene}`}>{meta.pill}</div>
    </header>
  )
}

function SidebarContent({
  scene,
  phase,
  activeIndex,
}: {
  scene: HeroUiSceneKey
  phase: number
  activeIndex: number
}) {
  if (scene === 'chat') {
    return (
      <div className="conversation-list">
        {SCENARIOS.map((item, index) => (
          <div
            className={`conversation-item ${index === activeIndex ? 'is-active' : ''}`}
            key={item.contact}
          >
            <div className="avatar">{item.contact.charAt(0)}</div>
            <div className="conversation-meta">
              <strong>{item.contact}</strong>
              <span>{item.preview}</span>
            </div>
            <small>{index === activeIndex ? 'IA' : item.intent}</small>
          </div>
        ))}
      </div>
    )
  }

  if (scene === 'classification') {
    return (
      <div className="sidebar-flow">
        <div className="sidebar-label">Segmentos</div>
        <div className="segment-pills">
          <span className="segment-pill segment-pill--vip">VIP 08</span>
          <span className="segment-pill segment-pill--active">Activos 46</span>
          <span className="segment-pill segment-pill--risk">En riesgo 13</span>
          <span className="segment-pill segment-pill--lost">Perdidos 21</span>
        </div>

        <div className="sidebar-label">Leads detectados</div>
        <div className="stack-list">
          {CUSTOMER_CLASSIFICATIONS.map((lead, index) => (
            <div className={`stack-item ${index === phase ? 'is-active' : ''}`} key={lead.name}>
              <div>
                <strong>{lead.name}</strong>
                <span>{lead.recency} · score {lead.score}</span>
              </div>
              <em className={`stack-badge stack-badge--${lead.status.toLowerCase().replace(' ', '-')}`}>
                {lead.status}
              </em>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (scene === 'campaign') {
    const sentCount = phase === 0 ? 0 : phase === 1 ? 1 : phase === 2 ? 3 : 4

    return (
      <div className="sidebar-flow">
        <div className="sidebar-label">Canal oficial</div>
        <div className="metric-compact">Meta Tech Provider · WhatsApp oficial</div>

        <div className="sidebar-label">Audiencia</div>
        <div className="metric-compact">Clientes en riesgo · 128 contactos</div>

        <div className="sidebar-label">Cola de envíos</div>
        <div className="stack-list">
          {CAMPAIGN_QUEUE.map((name, index) => (
            <div className={`stack-item ${index < sentCount ? 'is-sent' : ''}`} key={name}>
              <div>
                <strong>{name}</strong>
                <span>{index < sentCount ? 'Plantilla enviada' : 'Pendiente en cola'}</span>
              </div>
              <em className={`stack-badge ${index < sentCount ? 'stack-badge--ok' : 'stack-badge--queue'}`}>
                {index < sentCount ? 'Enviado' : 'En cola'}
              </em>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (scene === 'personality') {
    return (
      <div className="sidebar-flow">
        <div className="sidebar-label">Presets</div>
        <div className="chip-grid">
          <span className="hero-chip is-active">Cordial</span>
          <span className="hero-chip">Formal</span>
          <span className="hero-chip is-active">Persuasiva</span>
          <span className="hero-chip">Breve</span>
          <span className="hero-chip is-active">Cierre</span>
          <span className="hero-chip">Empática</span>
        </div>

        <div className="sidebar-label">Guardrails</div>
        <div className="stack-list">
          <div className="stack-item">
            <div><strong>No prometer descuentos</strong><span>Sin aprobación humana</span></div>
            <em className="stack-badge stack-badge--violet">Límite</em>
          </div>
          <div className="stack-item">
            <div><strong>Pedir datos mínimos</strong><span>Solo nombre y teléfono</span></div>
            <em className="stack-badge stack-badge--active">Regla</em>
          </div>
        </div>
      </div>
    )
  }

  if (scene === 'handoff') {
    return (
      <div className="sidebar-flow">
        <div className="sidebar-label">Bandeja prioritaria</div>
        <div className="stack-list">
          {HANDOFF_CASES.map((item, index) => (
            <div className={`stack-item ${index === 0 ? 'is-active' : ''}`} key={item.name}>
              <div>
                <strong>{item.name}</strong>
                <span>{item.reason}</span>
              </div>
              <em className={`stack-badge ${item.priority === 'Alta' ? 'stack-badge--warm' : 'stack-badge--queue'}`}>
                {item.priority}
              </em>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="sidebar-flow">
      <div className="sidebar-label">Conversaciones fuera de ventana</div>
      <div className="stack-list">
        {REOPEN_CASES.map((item, index) => (
          <div className={`stack-item ${index === 1 ? 'is-active' : ''}`} key={item.name}>
            <div>
              <strong>{item.name}</strong>
              <span>{item.template}</span>
            </div>
            <em className="stack-badge stack-badge--teal">{item.status}</em>
          </div>
        ))}
      </div>
    </div>
  )
}

function SceneMainContent({
  scene,
  scenario,
  phase,
}: {
  scene: HeroUiSceneKey
  scenario: Scenario
  phase: number
}) {
  if (scene === 'chat') {
    return (
      <div className="chat-body">
        <div className="bubble inbound">{scenario.incoming}</div>

        <div className="system-event">
          Intención detectada: <strong>{scenario.intent}</strong>
        </div>

        {phase >= 1 && (
          <>
            <div className="typing">
              <span />
              <span />
              <span />
              La IA está respondiendo...
            </div>

            <div className="bubble ai">{scenario.aiReply}</div>
          </>
        )}

        {phase >= 2 && <div className="bubble inbound">{scenario.followUp}</div>}

        {phase >= 3 && (
          <div className="conversion-event">
            <strong>{scenario.conversion}</strong>
            <span>{scenario.conversionDetail}</span>
          </div>
        )}
      </div>
    )
  }

  if (scene === 'classification') {
    const lead = CUSTOMER_CLASSIFICATIONS[phase]

    return (
      <div className="scene-body">
        <div className="scene-card scene-card--feature">
          <span className="scene-kicker">Lead analizado</span>
          <strong>{lead.name}</strong>
          <div className="detail-grid">
            <div><span>Última interacción</span><strong>{lead.recency}</strong></div>
            <div><span>Intención reciente</span><strong>{scenario.intent}</strong></div>
            <div><span>Prob. de cierre</span><strong>{lead.score}</strong></div>
            <div><span>Siguiente paso</span><strong>{lead.action}</strong></div>
          </div>
        </div>

        <div className="scene-card">
          <span className="scene-kicker">Señales detectadas</span>
          <div className="chip-grid chip-grid--wide">
            <span className="hero-chip is-active">Recencia</span>
            <span className="hero-chip is-active">Frecuencia</span>
            <span className="hero-chip is-active">Ticket promedio</span>
            <span className="hero-chip">Respuesta humana</span>
          </div>
          <div className="progress-group">
            <div className="progress-row"><span>Score comercial</span><strong>{lead.score}</strong></div>
            <div className="progress-track"><i style={{ width: lead.score }} /></div>
          </div>
        </div>

        {phase >= 2 && (
          <div className="scene-card scene-card--accent">
            <span className="scene-kicker">Clasificación automática</span>
            <strong>{lead.status}</strong>
            <p>El sistema mueve el contacto al segmento correcto y propone el próximo paso comercial.</p>
          </div>
        )}

        {phase >= 3 && (
          <div className="scene-banner scene-banner--violet">
            Segmento actualizado · {lead.name} → {lead.status}
          </div>
        )}
      </div>
    )
  }

  if (scene === 'campaign') {
    const sentCount = phase === 0 ? 0 : phase === 1 ? 1 : phase === 2 ? 3 : 4
    const riskLabel = phase <= 1 ? 'Medio' : 'Controlado'
    const riskWidth = phase === 0 ? '52%' : phase === 1 ? '64%' : phase === 2 ? '42%' : '34%'

    return (
      <div className="scene-body">
        <div className="scene-grid scene-grid--two">
          <div className="scene-card">
            <span className="scene-kicker">Configuración de campaña</span>
            <div className="detail-grid">
              <div><span>Canal</span><strong>WhatsApp oficial</strong></div>
              <div><span>Audiencia</span><strong>Clientes en riesgo</strong></div>
              <div><span>Plantilla</span><strong>promo_julio_01</strong></div>
              <div><span>Intervalo</span><strong>3 min</strong></div>
            </div>
          </div>

          <div className="scene-card">
            <span className="scene-kicker">Riesgo de campaña</span>
            <div className="risk-row">
              <strong>{riskLabel}</strong>
              <span>{phase >= 2 ? 'Frecuencia ajustada automáticamente' : 'Lote alto para la franja elegida'}</span>
            </div>
            <div className="progress-track progress-track--risk"><i style={{ width: riskWidth }} /></div>
            <div className="chip-grid">
              <span className="hero-chip is-active">Horario permitido</span>
              <span className="hero-chip is-active">Cooldown activo</span>
              <span className="hero-chip">Plantilla aprobada</span>
            </div>
          </div>
        </div>

        <div className="scene-card scene-card--feature">
          <span className="scene-kicker">Envío escalonado</span>
          <ul className="send-log">
            {CAMPAIGN_QUEUE.map((name, index) => (
              <li key={name} className={index < sentCount ? 'is-complete' : ''}>
                <strong>{name}</strong>
                <span>{index < sentCount ? 'Plantilla enviada' : 'Esperando próximo lote'}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  if (scene === 'personality') {
    return (
      <div className="scene-body">
        <div className="scene-grid scene-grid--two">
          <div className="scene-card">
            <span className="scene-kicker">Perfil de respuesta</span>
            <div className="trait-list">
              {PERSONALITY_CONTROLS.map((trait) => (
                <div className="trait-row" key={trait.label}>
                  <div className="trait-head">
                    <span>{trait.label}</span>
                    <strong>{trait.value}%</strong>
                  </div>
                  <div className="progress-track"><i style={{ width: `${trait.value}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="scene-card">
            <span className="scene-kicker">Objetivos comerciales</span>
            <div className="chip-grid chip-grid--wide">
              <span className="hero-chip is-active">Pedir datos mínimos</span>
              <span className="hero-chip is-active">Buscar cierre</span>
              <span className="hero-chip">No improvisar precios</span>
              <span className="hero-chip">Escalar objeciones</span>
            </div>
          </div>
        </div>

        <div className="scene-card scene-card--feature">
          <span className="scene-kicker">Preview en vivo</span>
          <div className="preview-panel">
            <div className="preview-block">
              <span>Mensaje entrante</span>
              <p>Hola, quería saber si hoy todavía tienen lugar y cuál es la forma de pago.</p>
            </div>
            {phase >= 1 && (
              <div className="preview-block preview-block--response">
                <span>Respuesta IA</span>
                <p>
                  ¡Hola! Sí, tenemos disponibilidad hoy. Si querés, te ayudo a reservar ahora mismo y te comparto las formas de pago habilitadas.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (scene === 'handoff') {
    const steps = [
      'Detecta caso sensible y prioridad alta.',
      'Crea takeover con contexto resumido.',
      'Asigna operador responsable.',
      'Sugiere próximo mensaje para responder rápido.',
    ]

    return (
      <div className="scene-body">
        <div className="scene-card scene-card--feature">
          <span className="scene-kicker">Motivo de escalamiento</span>
          <strong>Cliente solicita excepción comercial + validación humana</strong>
          <p>La IA contiene la conversación, resume el contexto y deriva solo cuando conviene.</p>
        </div>

        <div className="scene-card">
          <span className="scene-kicker">Flujo de takeover</span>
          <div className="timeline-list">
            {steps.map((step, index) => (
              <div className={`timeline-step ${index <= phase ? 'is-active' : ''}`} key={step}>
                <i>{index + 1}</i>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {phase >= 2 && (
          <div className="scene-card scene-card--accent">
            <span className="scene-kicker">Contexto transferido</span>
            <p>Historial completo, intención detectada, riesgo comercial y sugerencia de próxima respuesta listos para el operador.</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="scene-body">
      <div className="scene-card scene-card--feature">
        <span className="scene-kicker">Ventana de 24 h cerrada</span>
        <strong>La conversación requiere plantilla para volver a abrirse.</strong>
        <div className="detail-grid">
          <div><span>Cliente</span><strong>Óptica Sur</strong></div>
          <div><span>Plantilla</span><strong>seguimiento_web</strong></div>
          <div><span>Canal</span><strong>WhatsApp oficial</strong></div>
          <div><span>Estado</span><strong>{phase >= 2 ? 'Enviada' : 'Lista para enviar'}</strong></div>
        </div>
      </div>

      <div className="scene-card">
        <span className="scene-kicker">Flujo de reapertura</span>
        <div className="timeline-list">
          <div className={`timeline-step ${phase >= 0 ? 'is-active' : ''}`}>
            <i>1</i><span>Detección de ventana cerrada</span>
          </div>
          <div className={`timeline-step ${phase >= 1 ? 'is-active' : ''}`}>
            <i>2</i><span>Sugerencia automática de plantilla oficial aprobada</span>
          </div>
          <div className={`timeline-step ${phase >= 2 ? 'is-active' : ''}`}>
            <i>3</i><span>Envío de plantilla con un clic</span>
          </div>
          <div className={`timeline-step ${phase >= 3 ? 'is-active' : ''}`}>
            <i>4</i><span>Cliente responde y la conversación vuelve a estar activa</span>
          </div>
        </div>
      </div>

      {phase >= 3 && (
        <div className="scene-card scene-card--accent">
          <span className="scene-kicker">Resultado</span>
          <p>Conversación reabierta · oportunidad recuperada para seguimiento comercial.</p>
        </div>
      )}
    </div>
  )
}

function PanelContent({
  scene,
  scenario,
  phase,
}: {
  scene: HeroUiSceneKey
  scenario: Scenario
  phase: number
}) {
  if (scene === 'chat') {
    return (
      <>
        <div className="panel-card">
          <span>Estado comercial</span>
          <strong>{phase >= 3 ? scenario.finalStatus : 'Oportunidad abierta'}</strong>
        </div>

        <div className="panel-card">
          <span>Próximo paso</span>
          <strong>{phase >= 3 ? 'Seguimiento postventa' : scenario.nextStep}</strong>
        </div>

        <div className="panel-card">
          <span>Sugerencia IA</span>
          <p>
            {phase >= 3
              ? 'Registrar resultado y preparar seguimiento.'
              : 'Responder con contexto y avanzar al próximo paso comercial.'}
          </p>
        </div>

        <div className="panel-card result">
          <span>Resultado</span>
          <strong>{phase >= 3 ? scenario.conversion : 'Pendiente'}</strong>
        </div>
      </>
    )
  }

  const panelMap: Record<HeroUiSceneKey, Array<{ label: string; value: string; detail?: string; result?: boolean }>> = {
    chat: [],
    classification: [
      { label: 'Segmento', value: CUSTOMER_CLASSIFICATIONS[phase].status },
      { label: 'Prob. cierre', value: CUSTOMER_CLASSIFICATIONS[phase].score },
      { label: 'Acción sugerida', value: CUSTOMER_CLASSIFICATIONS[phase].action },
      { label: 'Motor IA', value: 'Clasificación activa', detail: 'Recencia + ticket + frecuencia', result: true },
    ],
    campaign: [
      { label: 'Canal oficial', value: 'Meta Tech Provider' },
      { label: 'Riesgo', value: phase <= 1 ? 'Medio' : 'Controlado' },
      { label: 'Mensajes por lote', value: '25' },
      { label: 'Estado', value: phase >= 2 ? 'Campaña lanzada' : 'Lista para iniciar', detail: 'Con guardrails activos', result: true },
    ],
    personality: [
      { label: 'Tono dominante', value: 'Cordial + persuasiva' },
      { label: 'Objetivo', value: 'Cerrar y derivar datos' },
      { label: 'Límites', value: 'Sin promesas no aprobadas' },
      { label: 'Estado', value: phase >= 2 ? 'Preview validado' : 'Ajuste en progreso', detail: 'Personalidad lista para guardar', result: true },
    ],
    handoff: [
      { label: 'Prioridad', value: 'Alta' },
      { label: 'Asignado a', value: phase >= 2 ? 'Germán' : 'Pendiente' },
      { label: 'SLA objetivo', value: '6 min' },
      { label: 'Estado', value: phase >= 2 ? 'Takeover activo' : 'Escalando', detail: 'Con resumen y contexto', result: true },
    ],
    reopen: [
      { label: 'Canal oficial', value: 'Meta Tech Provider' },
      { label: 'Ventana', value: 'Cerrada' },
      { label: 'Plantilla', value: 'seguimiento_web' },
      { label: 'Estado', value: phase >= 3 ? 'Conversación reabierta' : phase >= 2 ? 'Plantilla enviada' : 'Lista para enviar', detail: 'Recuperación de oportunidad', result: true },
    ],
  }

  return (
    <>
      {panelMap[scene].map((item) => (
        <div className={`panel-card ${item.result ? 'result' : ''}`} key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          {item.detail ? <p>{item.detail}</p> : null}
        </div>
      ))}
    </>
  )
}

function SceneToast({
  scene,
  scenario,
  phase,
}: {
  scene: HeroUiSceneKey
  scenario: Scenario
  phase: number
}) {
  if (phase < 3) return null

  const toastMap: Record<HeroUiSceneKey, { title: string; detail: string }> = {
    chat: { title: scenario.conversion, detail: scenario.contact },
    classification: { title: 'Lead clasificado', detail: `${CUSTOMER_CLASSIFICATIONS[phase].name} · ${CUSTOMER_CLASSIFICATIONS[phase].status}` },
    campaign: { title: 'Campaña en marcha', detail: 'Plantillas enviadas en forma escalonada' },
    personality: { title: 'Personalidad guardada', detail: 'La IA responde con el tono configurado' },
    handoff: { title: 'Takeover activado', detail: 'Operador asignado con contexto completo' },
    reopen: { title: 'Conversación reabierta', detail: 'El cliente volvió a responder' },
  }

  const toast = toastMap[scene]

  return (
    <div className={`toast toast--${scene}`}>
      <strong>{toast.title}</strong>
      <span>{toast.detail}</span>
    </div>
  )
}
