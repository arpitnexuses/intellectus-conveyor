"use client"

import Image from "next/image"

export default function ConveyorBelt() {
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
    { name: "Logo 24", logo: "/24.png" },
    { name: "Logo 25", logo: "/25.png" },
    { name: "Logo 26", logo: "/26.png" },
  ]

  return (
    <div style={{ 
      width: '100%', 
      overflow: 'hidden', 
      backgroundColor: '#5a6b7a',
      height: '100px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        animation: 'scroll-left 60s linear infinite',
        whiteSpace: 'nowrap'
      }}>
        {/* First set of logos for seamless loop */}
          {logos.map((company, index) => (
          <div key={`first-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  padding: '16px 20px',
                  margin: '0 6px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  height: '80px',
                  minWidth: '140px',
                  width: '140px',
                  transition: 'all 0.3s ease',
                  flexShrink: 0
                }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#66818c'
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1.1)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1)'
                }
              }}
            >
              <Image 
                src={company.logo} 
                alt={company.name} 
                width={80}
                height={60}
                style={{
                  height: '60px',
                  width: 'auto',
                  maxWidth: '120px',
                  objectFit: 'contain',
                  flexShrink: 0,
                  filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 0 0 transparent)',
                  mixBlendMode: 'multiply',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            <div style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              margin: '0 6px'
            }}>
              <div style={{
                width: '2px',
                height: '70px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '1px'
              }}></div>
            </div>
            </div>
          ))}

        {/* Duplicate set for seamless loop */}
          {logos.map((company, index) => (
          <div key={`second-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  padding: '16px 20px',
                  margin: '0 6px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  height: '80px',
                  minWidth: '140px',
                  width: '140px',
                  transition: 'all 0.3s ease',
                  flexShrink: 0
                }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#66818c'
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1.1)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1)'
                }
              }}
            >
              <Image 
                src={company.logo} 
                alt={company.name} 
                width={80}
                height={60}
                style={{
                  height: '60px',
                  width: 'auto',
                  maxWidth: '120px',
                  objectFit: 'contain',
                  flexShrink: 0,
                  filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 0 0 transparent)',
                  mixBlendMode: 'multiply',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            <div style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              margin: '0 6px'
            }}>
              <div style={{
                width: '2px',
                height: '70px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '1px'
              }}></div>
            </div>
            </div>
          ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}