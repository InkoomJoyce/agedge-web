import { useState, useRef, useEffect } from 'react'

export default function Walkthrough() {
  const [activeProject, setActiveProject] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const containerRef = useRef(null)

  const projects = [
    {
      id: 0,
      title: "Buaben Residence",
      location: "Accra, Ghana",
      description: "A stunning modern residence transformed from concept to reality",
      beforeImage: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=600&fit=crop",
      completionDate: "2024",
      duration: "8 months"
    },
    {
      id: 1,
      title: "Faith Montessori School",
      location: "Accra, Ghana",
      description: "Educational facility transformation from foundation to completion",
      beforeImage: "https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.pexels.com/photos/245436/pexels-photo-245436.jpeg?w=800&h=600&fit=crop",
      completionDate: "2023",
      duration: "12 months"
    },
    {
      id: 2,
      title: "Tachie Enclave",
      location: "Accra, Ghana",
      description: "Multi-family housing development journey",
      beforeImage: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=600&fit=crop",
      completionDate: "2024",
      duration: "10 months"
    }
  ]

  const walkthroughImages = [
    {
      id: 1,
      title: "Initial Design Concept",
      phase: "Design Phase",
      image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=800&h=600&fit=crop",
      description: "3D visualization and architectural planning"
    },
    {
      id: 2,
      title: "Foundation & Site Preparation",
      phase: "Construction Phase",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=600&fit=crop",
      description: "Site clearing, excavation, and foundation laying"
    },
    {
      id: 3,
      title: "Structural Framework",
      phase: "Construction Phase",
      image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=600&fit=crop",
      description: "Steel and concrete framework installation"
    },
    {
      id: 4,
      title: "Roofing & External Walls",
      phase: "Construction Phase",
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=800&h=600&fit=crop",
      description: "Roof structure and exterior wall construction"
    },
    {
      id: 5,
      title: "Interior Finishing",
      phase: "Finishing Phase",
      image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?w=800&h=600&fit=crop",
      description: "Internal walls, flooring, and ceiling installation"
    },
    {
      id: 6,
      title: "Final Touches",
      phase: "Completion Phase",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop",
      description: "Landscaping, painting, and final inspections"
    }
  ]

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100)
    setSliderPosition(clampedPercentage)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  const currentProject = projects[activeProject]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=600&fit=crop"
            alt="360° Walkthrough - See Your Project Come to Life"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4 backdrop-blur-sm">
            Immersive Experience
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            360°{' '}
            <span className="font-bold text-amber-400">Walkthrough</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See your project come to life - from foundation to finishing
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-12 h-px bg-amber-400"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Before/After Slider Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Before & After Transformation</h2>
            <p className="text-gray-500">Slide to see the amazing transformation</p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-12 h-px bg-amber-300"></div>
            </div>
          </div>

          {/* Project Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveProject(idx)
                  setSliderPosition(50)
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeProject === idx
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Before/After Slider */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div
              ref={containerRef}
              className="relative w-full h-[500px] cursor-ew-resize select-none"
              onMouseDown={handleMouseDown}
            >
              {/* After Image (Finished) - Full width */}
              <img
                src={currentProject.afterImage}
                alt="Finished building"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Before Image (Construction) - Clipped */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentProject.beforeImage}
                  alt="Under construction"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: `${sliderPosition}% 50%` }}
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l-4 4m0 0l4 4m-4-4h12m4-8v16" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                <p className="text-white text-sm font-medium">Under Construction</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-green-500/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                <p className="text-white text-sm font-medium">Finished Project</p>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-gray-900">{currentProject.title}</h3>
            <p className="text-gray-500 mt-1">{currentProject.location}</p>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{currentProject.description}</p>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600 text-sm">Completed: {currentProject.completionDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600 text-sm">Duration: {currentProject.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 360° Walkthrough Timeline */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Journey</h2>
            <p className="text-gray-500">From design to completion - every step of the way</p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-12 h-px bg-amber-300"></div>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {walkthroughImages.map((item, idx) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.phase === 'Design Phase' ? 'bg-blue-500' :
                      item.phase === 'Construction Phase' ? 'bg-orange-500' :
                      item.phase === 'Finishing Phase' ? 'bg-purple-500' :
                      'bg-green-500'
                    } text-white`}>
                      {item.phase}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">{item.title}</p>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 360° Interactive Viewer */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Interactive Experience</h2>
            <p className="text-gray-500">Click on any image above to see detailed views</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-amber-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-gray-600">Browse through our project gallery above</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-gray-600">Click any image to see detailed views</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-gray-600">Use the before/after slider to see transformations</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <p className="text-gray-600">Contact us to schedule an on-site tour</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold mb-3">Want to See More?</h3>
              <p className="text-amber-100 mb-6">Schedule a site visit or request a personalized virtual tour</p>
              <button className="px-6 py-2 bg-white text-amber-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Request a Tour
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-2xl font-bold text-amber-500">50+</p>
            <p className="text-xs text-gray-500">Projects Completed</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-2xl font-bold text-amber-500">12+</p>
            <p className="text-xs text-gray-500">Virtual Tours Available</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-2xl font-bold text-amber-500">6</p>
            <p className="text-xs text-gray-500">Project Phases</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-2xl font-bold text-amber-500">100%</p>
            <p className="text-xs text-gray-500">Transparency</p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedImage.phase === 'Design Phase' ? 'bg-blue-100 text-blue-700' :
                  selectedImage.phase === 'Construction Phase' ? 'bg-orange-100 text-orange-700' :
                  selectedImage.phase === 'Finishing Phase' ? 'bg-purple-100 text-purple-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {selectedImage.phase}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Want to see more projects like this?</p>
                <button className="mt-2 px-6 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}