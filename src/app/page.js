'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    setIsRevealed(true)
  }, [])

  return (
    <div className="bg-[#000000] flex justify-center items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className={`relative overflow-hidden ${isRevealed ? 'reveal-animation' : ''}`}>
        <Image
          width={1080}
          height={411}
          src="/images/BannerTL.png"
          alt="Logo techlight"
           className="select-none"
        />
      </div>
    </div>
  )
}

// Estilos para la animación
const styles = `
  @keyframes revealAnimation {
    0% {
      clip-path: inset(0 100% 0 0);
    }
    100% {
      clip-path: inset(0 0 0 0);
    }
  }

  .reveal-animation {
    animation: revealAnimation 3.5s ease-out forwards;
  }
`


if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = styles
  document.head.appendChild(styleElement)
}