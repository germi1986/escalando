'use client'

import type { HTMLAttributes, ReactNode } from 'react'
import { useEffect, useRef } from 'react'

type ScrollRevealProps = {
  as?: 'div' | 'section'
  className?: string
  children: ReactNode
} & HTMLAttributes<HTMLElement>

export default function ScrollReveal({
  as = 'div',
  className,
  children,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      node.dataset.reveal = 'visible'
      return undefined
    }

    node.classList.add('scroll-reveal--managed')
    node.dataset.reveal = 'hidden'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        node.dataset.reveal = 'visible'
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const revealClass = ['scroll-reveal', className].filter(Boolean).join(' ')
  const setNode = (node: HTMLElement | null) => {
    ref.current = node
  }

  if (as === 'section') {
    return (
      <section {...props} ref={setNode} className={revealClass} data-reveal="visible">
        {children}
      </section>
    )
  }

  return (
    <div {...props} ref={setNode} className={revealClass} data-reveal="visible">
      {children}
    </div>
  )
}
