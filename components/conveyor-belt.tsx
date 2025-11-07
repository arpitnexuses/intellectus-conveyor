"use client"

import Image from "next/image"
import { useRef } from "react"

export default function ConveyorBelt() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const pauseScroll = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = 'paused'
    }
  }

  const resumeScroll = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = 'running'
    }
  }

  const handleBeltClick = () => {
    window.open('https://intellectuscapital.com.au/track-record/', '_blank')
  }
  const logos = [
    { name: "Logo 1", logo: "/1.png" },
    { name: "Logo 2", logo: "/2.png" },
    { name: "Logo 3", logo: "/3.png" },
    { name: "Logo 4", logo: "/4.png" },
    { name: "Logo 5", logo: "/5.png" },
    { name: "Logo 6", logo: "/6.png" },
    { name: "Logo 7", logo: "/7.png" },
    { name: "Logo 8", logo: "/8.png" },
    { name: "Logo 9", logo: "/9.png" },
    { name: "Logo 10", logo: "/10.png" },
    { name: "Logo 11", logo: "/11.png" },
    { name: "Logo 12", logo: "/12.png" },
    { name: "Logo 13", logo: "/13.png" },
    { name: "Logo 14", logo: "/14.png" },
    { name: "Logo 15", logo: "/15.png" },
    { name: "Logo 16", logo: "/16.png" },
    { name: "Logo 17", logo: "/17.png" },
    { name: "Logo 18", logo: "/18.png" },
    { name: "Logo 19", logo: "/19.png" },
    { name: "Logo 20", logo: "/20.png" },
    { name: "Logo 21", logo: "/21.png" },
    { name: "Logo 22", logo: "/22.png" },
    { name: "Logo 23", logo: "/23.png" },
    { name: "Avance Clinical", logo: "/24.png" },
    { name: "Logo 25", logo: "/25.png" },
    { name: "Logo 26", logo: "/26.png" },
    { name: "Logo 27", logo: "/27.png" },
  ]

  return (
    <div style={{ 
      width: '100%', 
      overflow: 'hidden', 
      background: 'linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 50%, #f5f5f5 100%)',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)',
      height: '150px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      margin: '0',
      cursor: 'pointer'
    }} onMouseLeave={resumeScroll} onClick={handleBeltClick}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        width: 'max-content',
        animation: 'scroll-left 60s linear infinite'
      }} ref={scrollerRef}>
        {/* Create multiple sets for seamless infinite loop */}
        {[...Array(3)].map((_, setIndex) => 
          logos.map((company, index) => (
            <div 
              key={`set-${setIndex}-${index}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                padding: '16px 20px',
                margin: '0',
                borderRadius: '12px',
                cursor: 'pointer',
                height: '120px',
                minWidth: '180px',
                width: '180px',
                transition: 'all 0.3s ease',
                flexShrink: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                pauseScroll()
                e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #d1d8db 60%, #e8ebec 100%)'
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)'
                e.currentTarget.style.borderColor = 'rgba(200, 200, 200, 0.8)'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1.1)'
                  img.style.filter = 'brightness(1.3) contrast(1.4) saturate(1.2)'
                }
              }}
              onMouseLeave={(e) => {
                resumeScroll()
                e.currentTarget.style.background = 'none'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1)'
                  img.style.filter = 'brightness(1.2) contrast(1.3) saturate(1.1)'
                }
              }}
            >
              <Image 
                src={company.logo} 
                alt={company.name} 
                width={80}
                height={60}
                style={{
                  height: '90px',
                  width: 'auto',
                  maxWidth: '160px',
                  objectFit: 'contain',
                  flexShrink: 0,
                  filter: 'brightness(1.2) contrast(1.3) saturate(1.1)',
                  transition: 'transform 0.3s ease',
                  imageRendering: 'auto',
                  willChange: 'auto'
                }}
              />
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  )
}