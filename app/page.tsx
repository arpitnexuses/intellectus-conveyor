import ConveyorBelt from "@/components/conveyor-belt"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <ConveyorBelt />
      </div>
    </main>
  )
}
