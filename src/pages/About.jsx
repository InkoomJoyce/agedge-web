import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, Building2, HardHat, PenTool, 
  Ruler, Wrench, Users, Calendar, 
  MapPin, Mail, Globe, CheckCircle, 
  Star, Shield, Cpu, Layers, Target,
  ChevronRight, Image as ImageIcon,
  ArrowUpRight, Sparkles
} from 'lucide-react'

// Constants - extracted for better maintainability
const EXPERTISE_AREAS = [
  { icon: PenTool, title: "Design & Costing", desc: "Innovative designs with accurate cost estimation" },
  { icon: HardHat, title: "Construction", desc: "Full-scale construction management and execution" },
  { icon: Users, title: "Project Supervision", desc: "Dedicated oversight throughout project lifecycle" },
  { icon: Wrench, title: "Renovation Works", desc: "Transform existing spaces with modern upgrades" },
  { icon: Building2, title: "Facility Management", desc: "Ongoing maintenance and facility operations" }
]

const STATS = [
  { value: "10+", label: "Years of Excellence", icon: Star },
  { value: "50+", label: "Projects Completed", icon: Building2 },
  { value: "5+", label: "Expert Team", icon: Users },
  { value: "100%", label: "Client Satisfaction", icon: CheckCircle }
]

const TECHNOLOGIES = ["AutoCAD", "Revit", "Lumion", "3ds Max", "SketchUp", "Photoshop", "Illustrator"]

const OFFICE_IMAGES = [
  {
    url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?w=600&h=400&fit=crop",
    title: "Modern Office Space",
    location: "Accra, Ghana"
  },
  {
    url: "https://images.pexels.com/photos/36444550/pexels-photo-36444550.png",
    title: "Architecture Team",
    location: "Collaboration Hub"
  }
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('expertise')
  const sectionRef = useRef(null)

  // Memoized tab config
  const tabs = useMemo(() => [
    { id: 'expertise', label: 'Areas of Expertise' },
    { id: 'technology', label: 'Technology' }
  ], [])

  // Intersection Observer - single observer pattern
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '20px' }
    )

    const currentRef = sectionRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  // Animation helper
  const getAnimationClasses = (delay = 0) => {
    return `transition-all duration-700 delay-${delay} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gray-50 pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
      aria-label="About AGEdge Global"
    >
      {/* Green Background Highlights - Floating Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Compact */}
        <div className={`text-center mb-12 ${getAnimationClasses(0)}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Since 2016 • Ghana's Trusted Build Firm
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-2">
            AGEdge{' '}
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Global
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Feasibility • Design • Build • Procurement • Facility Management
          </p>

          <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            AGEdge Global Limited is a Ghanaian architectural design and build firm made up of architects, 
            engineers, project managers and other built environment professionals. For the past ten years, 
            we have executed several projects across Ghana, leveraging innovation and sustainability.
          </p>

          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"></div>
          </div>
        </div>

        {/* Hero Image - Compact */}
        <div className={`mb-12 ${getAnimationClasses(100)}`}>
          <div className="relative group rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10" />
            <img
              src="https://images.pexels.com/photos/13729358/pexels-photo-13729358.png"
              alt="AGEdge Global architecture firm - Modern building design showcase"
              className="w-full h-[200px] sm:h-[280px] md:h-[340px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-green-400"></div>
                <span className="text-white/80 text-xs font-medium tracking-wider uppercase">Featured Project</span>
              </div>
              <p className="text-white text-base sm:text-lg font-semibold mt-1">Building Dreams Across Ghana</p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Compact Cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${getAnimationClasses(200)}`}>
          {STATS.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx} 
                className="group relative text-center p-4 sm:p-5 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-green-50/0 to-green-100/0 group-hover:from-green-50/30 group-hover:via-green-50/20 group-hover:to-green-100/30 transition-all duration-300 rounded-xl" />
                <div className="relative">
                  <div className="inline-flex p-2 rounded-lg bg-green-50 group-hover:bg-green-100 transition-all duration-300 mb-2">
                    <Icon className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tabs Section - Streamlined */}
        <div className={`mb-12 ${getAnimationClasses(300)}`}>
          {/* Tab Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg shadow-green-500/25'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {/* Expertise Tab */}
            {activeTab === 'expertise' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {EXPERTISE_AREAS.map((area, idx) => {
                  const Icon = area.icon
                  return (
                    <div 
                      key={idx} 
                      className="group p-5 bg-white rounded-xl border border-gray-200/50 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="inline-flex p-2.5 rounded-lg bg-green-50 group-hover:bg-green-100 transition-all duration-300 mb-3">
                        <Icon className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">{area.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{area.desc}</p>
                      <div className="mt-3 w-10 h-0.5 bg-green-400 group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Technology Tab */}
            {activeTab === 'technology' && (
              <div className="bg-white rounded-xl border border-gray-200/50 shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden min-h-[220px]">
                    <img
                      src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=600&h=400&fit=crop"
                      alt="Architecture software and drafting tools"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent"></div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-6 h-px bg-green-400"></div>
                      <span className="text-green-600 text-xs font-medium tracking-wider uppercase">Innovation</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      We continuously explore modern technology to improve our product delivery, 
                      undertaking regular updates to enhance the quality of our work.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {TECHNOLOGIES.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 border border-transparent hover:border-green-200">
                          <Cpu className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-xs text-gray-700 font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Office Images - Compact Grid */}
        <div className={`grid sm:grid-cols-2 gap-4 ${getAnimationClasses(400)}`}>
          {OFFICE_IMAGES.map((item, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-[180px] sm:h-[220px] object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="w-6 h-0.5 bg-green-400"></div>
                    <span className="text-green-400 text-[10px] font-medium tracking-wider uppercase">Our Space</span>
                  </div>
                  <p className="text-white text-base font-semibold">{item.title}</p>
                  <p className="text-white/60 text-xs">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}