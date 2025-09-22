import ConveyorBelt from "@/components/conveyor-belt"

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white',
      padding: '40px 20px'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        <ConveyorBelt />
      </div>
    </div>
  )
}