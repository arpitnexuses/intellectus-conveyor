"use client"

import Image from "next/image"

export default function ConveyorBelt() {
  const logos = [
    { name: "Viostream", logo: "/1.png" },
    { name: "Worldsmart", logo: "/2.png" },
    { name: "Igneo", logo: "/3.png" },
    { name: "Landchecker", logo: "/4.png" },
    { name: "Elula", logo: "/5.png" },
    { name: ".ID Consulting", logo: "/6.png" },
    { name: "PowerHealth Solutions", logo: "/7.png" },
    { name: "Lanser Communities", logo: "/8.png" },
    { name: "ASX-listed Comms & Tech Co.", logo: "/9.jpeg" },
    { name: "ResourceCo", logo: "/10.png" },
    { name: "Boart Longyear", logo: "/11.png" },
    { name: "CPR Pharma / Avance Clinical / Agilex Biolabs", logo: "/12.png" },
    { name: "Udder Delights", logo: "/13.png" },
    { name: "Myriota", logo: "/14.png" },
    { name: "Marvel Packers", logo: "/15.png" },
    { name: "Lloyd Electric & Engineering Ltd", logo: "/16.png" },
    { name: "Max Healthcare", logo: "/17.webp" },
    { name: "Dabur", logo: "/18.png" },
    { name: "Jaypee Group Cement Assets", logo: "/19.webp" },
  ]

  return (
    <div style={{ 
      width: '100%', 
      overflow: 'hidden', 
      backgroundColor: '#5a6b7a',
      height: '80px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        animation: 'scroll-left 30s linear infinite',
        whiteSpace: 'nowrap'
      }}>
          {logos.map((company, index) => (
          <div key={`first-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                padding: '8px 16px',
                margin: '0 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                height: '100%',
                minWidth: 'max-content',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#66818c'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Image 
                src={company.logo} 
                alt={company.name} 
                width={50}
                height={35}
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                  flexShrink: 0
                }}
              />
              <span style={{
                color: 'white',
                fontWeight: '500',
                fontSize: '14px',
                marginLeft: '12px',
                whiteSpace: 'nowrap'
              }}>
                {company.name}
              </span>
            </div>
            {index < logos.length - 1 && (
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                margin: '0 8px'
              }}>
                <div style={{
                  width: '1px',
                  height: '64px',
                  backgroundColor: '#d1d5db'
                }}></div>
              </div>
            )}
            </div>
          ))}
        </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        animation: 'scroll-left 30s linear infinite',
        whiteSpace: 'nowrap'
      }}>
          {logos.map((company, index) => (
          <div key={`second-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                padding: '8px 16px',
                margin: '0 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                height: '100%',
                minWidth: 'max-content',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#66818c'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Image 
                src={company.logo} 
                alt={company.name} 
                width={50}
                height={35}
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                  flexShrink: 0
                }}
              />
              <span style={{
                color: 'white',
                fontWeight: '500',
                fontSize: '14px',
                marginLeft: '12px',
                whiteSpace: 'nowrap'
              }}>
                {company.name}
              </span>
            </div>
            {index < logos.length - 1 && (
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                margin: '0 8px'
              }}>
                <div style={{
                  width: '1px',
                  height: '64px',
                  backgroundColor: '#d1d5db'
                }}></div>
              </div>
            )}
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