import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

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

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100)
    setSliderPosition(clampedPercentage)
  }, [isDragging])

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchMove = useCallback((e) => {
    if (!containerRef.current) return
    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const percentage = (x / rect.width) * 100
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100)
    setSliderPosition(clampedPercentage)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove])

  const currentProject = projects[activeProject]

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Green Background Highlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Hero Section - Fixed navbar spacing */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gray-900 pt-16 md:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=600&fit=crop"
            alt="360° Walkthrough - See Your Project Come to Life"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-4 backdrop-blur-sm border border-green-400/30">
            Immersive Experience
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            360°{' '}
            <span className="font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Walkthrough
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See your project come to life - from foundation to finishing
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-green-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div className="w-12 h-px bg-green-400"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Before/After Slider Section - Compact */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Before & After Transformation</h2>
            <p className="text-gray-500 text-sm">Slide to see the amazing transformation</p>
            <div className="flex justify-center gap-2 mt-3">
              <div className="w-10 h-px bg-green-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <div className="w-10 h-px bg-green-300"></div>
            </div>
          </div>

          {/* Project Selector - Compact */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveProject(idx)
                  setSliderPosition(50)
                }}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeProject === idx
                    ? 'bg-green-600 text-white shadow-lg shadow-green-500/25'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Before/After Slider - Smaller with Stylish Borders */}
          <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-900 border-2 border-white/10 ring-1 ring-green-500/20">
            <div
              ref={containerRef}
              className="relative w-full aspect-[16/9] max-h-[420px] cursor-ew-resize select-none touch-none"
              onMouseDown={handleMouseDown}
              onTouchStart={(e) => {
                const touch = e.touches[0]
                const rect = containerRef.current?.getBoundingClientRect()
                if (rect) {
                  const x = touch.clientX - rect.left
                  const percentage = (x / rect.width) * 100
                  setSliderPosition(Math.min(Math.max(percentage, 0), 100))
                }
              }}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Finished) */}
              <div className="absolute inset-0">
                <img
                  src={currentProject.afterImage}
                  alt="Finished project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-green-500/5" />
              </div>
              
              {/* Before Image (Construction) - Clipped */}
              <div
                className="absolute inset-0 overflow-hidden transition-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentProject.beforeImage}
                  alt="Under construction"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: `${sliderPosition}% 50%` }}
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-amber-500/5" />
              </div>

              {/* Stylish Slider Handle - Smaller */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-2xl cursor-ew-resize transition-shadow duration-300 hover:shadow-white/50"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Glowing line effect */}
                <div className="absolute inset-0 -mx-1.5 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
                
                {/* Main handle circle - Smaller */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center ring-2 ring-white/40 transition-all duration-300">
                      <div className="flex items-center gap-0.5">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7l-4 4m0 0l4 4m-4-4h12m4-8v16" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -inset-1 rounded-full border border-green-400/30 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Labels - Compact */}
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <p className="text-white/90 text-[10px] font-medium tracking-wide">Before</p>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-green-500/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-green-400/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <p className="text-white text-[10px] font-medium tracking-wide">After</p>
                </div>
              </div>

              {/* Percentage indicator - Compact */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-0.5 rounded-full border border-white/10">
                <span className="text-white/70 text-[10px] font-mono tracking-wider">
                  {Math.round(sliderPosition)}%
                </span>
              </div>

              {/* Stylish Border Accents */}
              <div className="absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-green-400 to-transparent" />
              <div className="absolute top-0 right-0 w-16 h-0.5 bg-gradient-to-l from-green-400 to-transparent" />
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-green-400 to-transparent" />
              <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-gradient-to-l from-green-400 to-transparent" />
            </div>
          </div>

          {/* Project Info - Compact Card */}
          <div className="mt-4 bg-white rounded-xl p-3 border border-gray-200/50 shadow-md flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <h3 className="text-sm font-bold text-gray-900">{currentProject.title}</h3>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <p className="text-xs text-gray-500">{currentProject.location}</p>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full">
              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">{currentProject.completionDate}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full">
              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">{currentProject.duration}</span>
            </div>
          </div>
        </div>

        {/* 360° Walkthrough Timeline - Compact */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Project Journey</h2>
            <p className="text-gray-500 text-sm">From design to completion - every step of the way</p>
            <div className="flex justify-center gap-2 mt-3">
              <div className="w-10 h-px bg-green-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <div className="w-10 h-px bg-green-300"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {walkthroughImages.map((item, idx) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-1 border border-gray-200/50"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold shadow-lg ${
                      item.phase === 'Design Phase' ? 'bg-blue-500' :
                      item.phase === 'Construction Phase' ? 'bg-orange-500' :
                      item.phase === 'Finishing Phase' ? 'bg-purple-500' :
                      'bg-green-500'
                    } text-white`}>
                      {item.phase}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-300 text-xs">{item.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Experience - Compact */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Interactive Experience</h2>
            <p className="text-gray-500 text-sm">Click on any image above to see detailed views</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">How It Works</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Browse through our project gallery above",
                    "Click any image to see detailed views",
                    "Use the before/after slider to see transformations",
                    "Contact us to schedule an on-site tour"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <span className="text-white text-[10px] font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-center text-white shadow-xl shadow-green-500/25">
              <svg className="w-12 h-12 mx-auto mb-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Want to See More?</h3>
              <p className="text-green-100 text-sm mb-4">Schedule a site visit or request a personalized virtual tour</p>
              <Link
                to="/contact"
                className="inline-block px-5 py-2 bg-white text-green-600 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request a Tour
              </Link>
            </div>
          </div>
        </div>

        
        
      </div>

      {/* Image Modal - Green Theme */}
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
                loading="lazy"
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
                <Link
                  to="/contact"
                  className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}