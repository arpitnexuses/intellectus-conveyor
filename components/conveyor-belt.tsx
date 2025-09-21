"use client"

import Image from "next/image"

export default function ConveyorBelt() {
  // 19 company logos with their names
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
    <div className="w-full overflow-hidden" style={{ backgroundColor: "#5a6b7a" }}>
      <div className="relative h-16 sm:h-20 flex items-center">
        {/* First set of logos */}
        <div className="flex items-center animate-scroll-left">
          {logos.map((company, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <div className="flex items-center whitespace-nowrap px-2 sm:px-4 py-2 mx-1 sm:mx-2 rounded-lg transition-colors duration-300 hover:bg-[#66818c] cursor-pointer h-full">
                <Image 
                  src={company.logo} 
                  alt={company.name} 
                  width={80}
                  height={48}
                  className="h-8 w-auto object-contain max-w-12 sm:h-10 sm:max-w-16 md:h-12 md:max-w-20"
                />
                <span className="text-white font-medium text-sm sm:text-base md:text-lg ml-2 sm:ml-3">{company.name}</span>
              </div>
              {index < logos.length - 1 && (
                <div className="h-full flex items-center">
                  <div className="w-px h-12 sm:h-16 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center animate-scroll-left">
          {logos.map((company, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <div className="flex items-center whitespace-nowrap px-2 sm:px-4 py-2 mx-1 sm:mx-2 rounded-lg transition-colors duration-300 hover:bg-[#66818c] cursor-pointer h-full">
                <Image 
                  src={company.logo} 
                  alt={company.name} 
                  width={80}
                  height={48}
                  className="h-8 w-auto object-contain max-w-12 sm:h-10 sm:max-w-16 md:h-12 md:max-w-20"
                />
                <span className="text-white font-medium text-sm sm:text-base md:text-lg ml-2 sm:ml-3">{company.name}</span>
              </div>
              {index < logos.length - 1 && (
                <div className="h-full flex items-center">
                  <div className="w-px h-12 sm:h-16 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
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
        
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        
        @media (max-width: 640px) {
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }
        }
      `}</style>
    </div>
  )
}
