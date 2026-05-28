import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, Building2, HardHat, PenTool, 
  Ruler, Wrench, Users, Calendar, 
  MapPin, Mail, Globe, CheckCircle, 
  Star, Shield, Cpu, Layers, Target,
  ChevronRight, Image as ImageIcon
} from 'lucide-react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('expertise')
  const sectionRef = useRef(null)

  const expertiseAreas = [
    { icon: PenTool, title: "Design & Costing", desc: "Innovative designs with accurate cost estimation" },
    { icon: HardHat, title: "Construction", desc: "Full-scale construction management and execution" },
    { icon: Users, title: "Project Supervision", desc: "Dedicated oversight throughout project lifecycle" },
    { icon: Wrench, title: "Renovation Works", desc: "Transform existing spaces with modern upgrades" },
    { icon: Building2, title: "Facility Management", desc: "Ongoing maintenance and facility operations" }
  ]

  const teamMembers = [
    {
      name: "Victor Anaafi Gyasi",
      role: "Principal Architect & Managing Director",
      experience: "15+ years",
      qualifications: "BSc Architecture, MSc Project Management, Mandella Washington Fellow",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Selorm Lumor",
      role: "Assistant Architect",
      experience: "3+ years",
      qualifications: "BSc & MSc Architecture - KNUST",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Paul Tetteh",
      role: "Senior Technician",
      experience: "10+ years",
      qualifications: "Certificate in Architecture & Draftsmanship - KNUST",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Dankyi Yeboah",
      role: "Project Manager & Quantity Surveyor",
      experience: "15+ years",
      qualifications: "BSc Building Technology - KNUST",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "Wilberforce Adote Brown",
      role: "Civil & Structural Engineer",
      experience: "30+ years",
      qualifications: "Civil & Structural Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ]

  const projectImages = [
    {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=600&fit=crop",
      title: "Luxury Residence",
      category: "Private Residence"
    },
    {
      url: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=600&fit=crop",
      title: "Modern Villa",
      category: "Private Residence"
    },
    {
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=600&fit=crop",
      title: "School Complex",
      category: "Educational Facility"
    },
    {
      url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=600&fit=crop",
      title: "Apartment Complex",
      category: "Multi-Family Housing"
    },
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop",
      title: "Executive Home",
      category: "Private Residence"
    },
    {
      url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=800&h=600&fit=crop",
      title: "Commercial Building",
      category: "Commercial"
    }
  ]

  const technologies = ["AutoCAD", "Revit", "Lumion", "3ds Max", "SketchUp", "Photoshop", "Illustrator"]

  const stats = [
    { value: "10+", label: "Years of Excellence", icon: Star },
    { value: "50+", label: "Projects Completed", icon: Building2 },
    { value: "5+", label: "Expert Team", icon: Users },
    { value: "100%", label: "Client Satisfaction", icon: CheckCircle }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white min-h-screen"
      aria-label="About AGEdge Global"
    >
      {/* Navigation Bar */}
      {/* <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Hero Section with Image */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            <span>Ghana's Premier Design & Build Firm</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-4">
            AGEdge{' '}
            <span className="font-bold text-amber-600">
              Global
            </span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Architecture • Design • Build
          </p>

          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-gray-600 leading-relaxed">
              AGEdge Global Limited is a Ghanaian architectural design and build firm made up of architects, 
              engineers, project managers and other built environment professionals. For the past ten years, 
              we have executed several projects across Ghana, leveraging innovation and sustainability.
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <div className="w-12 h-px bg-amber-300"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-12 h-px bg-amber-300"></div>
          </div>
        </div>

        {/* Hero Image Banner */}
        <div className={`mb-20 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=600&fit=crop"
            alt="AGEdge Global architecture firm - Modern building design showcase"
            className="w-full h-[300px] md:h-[400px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Featured Projects Gallery */}
        <div className={`mb-20 transition-all duration-700 delay-250 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Recent Projects</h2>
            <p className="text-gray-500">Showcasing excellence across Ghana</p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-12 h-px bg-amber-300"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((project, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{project.title}</p>
                    <p className="text-amber-300 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Section */}
        <div className={`mb-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('expertise')}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-t-lg ${
                activeTab === 'expertise'
                  ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Areas of Expertise
            </button>
            <button
              onClick={() => setActiveTab('personnel')}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-t-lg ${
                activeTab === 'personnel'
                  ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Our Team
            </button>
            <button
              onClick={() => setActiveTab('technology')}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-t-lg ${
                activeTab === 'technology'
                  ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Technology
            </button>
          </div>

          {/* Expertise Tab */}
          {activeTab === 'expertise' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, idx) => {
                const Icon = area.icon
                return (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Icon className="w-10 h-10 text-amber-500 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-500 text-sm">{area.desc}</p>
                  </div>
                )
              })}
            </div>
          )}

          {/* Personnel Tab with Images */}
          {activeTab === 'personnel' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-amber-100 flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-amber-600 text-sm font-medium">{member.role}</p>
                      <p className="text-xs text-gray-400">{member.experience} experience</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{member.qualifications}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <img
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=600&h=400&fit=crop"
                    alt="Architecture software and drafting tools"
                    className="rounded-xl shadow-md w-full h-[250px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-gray-600 mb-6">
                    We continuously explore modern technology to improve our product delivery, 
                    undertaking regular updates to enhance the quality of our work.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Cpu className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Office Image Section */}
        <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-350 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?w=600&h=400&fit=crop"
              alt="AGEdge Global modern office space in Accra"
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/2927008/pexels-photo-2927008.jpeg?w=600&h=400&fit=crop"
              alt="Architecture team meeting and collaboration"
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Location & Contact */}
        <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
            </div>
            <p className="text-gray-600">
              Number 1 Beige Street, Azumah, New Weija, Accra
            </p>
            <p className="text-gray-500 text-sm mt-2">GPS: GS-0065-2998</p>
            <p className="text-gray-600 mt-3">P. O. Box CT 1061, Cantonments, Accra</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-semibold text-gray-900">Connect</h3>
            </div>
            <p className="text-gray-600">Email: info@agedgeglobal.com</p>
            <p className="text-gray-600 mt-2">Website: www.agedgeglobal.com</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Bankers:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-lg text-sm text-gray-600">Stanbic Bank Ghana</span>
                <span className="px-3 py-1 bg-white rounded-lg text-sm text-gray-600">Fidelity Bank Ghana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center pt-8 border-t border-gray-100 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 rounded-full">
            <Shield className="w-4 h-4 text-amber-600" />
            <p className="text-sm text-amber-800 font-medium">
              Innovation • Sustainability • Excellence in Global Architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}