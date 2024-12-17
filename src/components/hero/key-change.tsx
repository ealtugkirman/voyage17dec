import Image from 'next/image'

interface SectionProps {
  title: string
  description: string
}

const Section: React.FC<SectionProps> = ({ title, description }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

function KeyChangeLayout() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-32">
      <h2 className="text-sm uppercase text-gray-500 mb-2">Companies hire us</h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">When it's time for a key change</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Section
            title="Reinvention"
            description="When businesses outgrow their markets and need to scale, we provide solutions for this growth and expansion."
          />
          <Section
            title="Transformation"
            description="When established brands search for ways to reinvent themselves for the modern internet culture while maintaining their personality."
          />
          <Section
            title="Breakthrough"
            description="We help startup first-timers design and build their product, roll it out, and get funded."
          />
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Abstract 3D graphic"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default KeyChangeLayout;