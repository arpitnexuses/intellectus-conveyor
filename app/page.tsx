import ConveyorBelt from "@/components/conveyor-belt"

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white',
      margin: '0',
      padding: '0',
      width: '100vw',
      overflowX: 'hidden'
    }}>
      <div style={{ 
        width: '100%', 
        margin: '0',
        padding: '0'
      }}>
        <ConveyorBelt />
      </div>
    </div>
  )
}