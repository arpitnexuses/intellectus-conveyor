"use client"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Conveyor Belt Test</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="w-full overflow-hidden bg-[#5a6b7a]">
          <div className="relative h-20 flex items-center">
            <div 
              className="flex items-center"
              style={{
                animation: 'scroll-left 10s linear infinite'
              }}
            >
              <div className="flex items-center whitespace-nowrap px-4 py-2 mx-3 rounded-lg cursor-pointer h-full bg-blue-500">
                <span className="text-white font-medium text-sm">Test Logo 1</span>
              </div>
              <div className="h-full flex items-center mx-2">
                <div className="w-px h-16 bg-gray-300"></div>
              </div>
              <div className="flex items-center whitespace-nowrap px-4 py-2 mx-3 rounded-lg cursor-pointer h-full bg-green-500">
                <span className="text-white font-medium text-sm">Test Logo 2</span>
              </div>
              <div className="h-full flex items-center mx-2">
                <div className="w-px h-16 bg-gray-300"></div>
              </div>
              <div className="flex items-center whitespace-nowrap px-4 py-2 mx-3 rounded-lg cursor-pointer h-full bg-red-500">
                <span className="text-white font-medium text-sm">Test Logo 3</span>
              </div>
            </div>
          </div>
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
      `}</style>
    </div>
  )
}

