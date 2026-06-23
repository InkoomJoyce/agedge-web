import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, Building2, HardHat, PenTool, 
  Ruler, Wrench, Users, Calendar, 
  MapPin, Mail, Globe, CheckCircle, 
  Star, Shield, Cpu, Layers, Target,
  ChevronRight, Image as ImageIcon,
  ArrowUpRight
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
    { icon: Building2, title: "Facility Management", desc: "Ongoing maintenance and facility operations" },
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
      className="bg-gray-200 min-h-screen py-12 lg:py-20"
      aria-label="About AGEdge Global"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Since 2016 • Ghana's Trusted Build Firm
          </div> */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-4">
            AGEdge{' '}
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Global
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Feasibility • Design • Build • Procurement • Facility Management 
          </p>

          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              AGEdge Global Limited is a Ghanaian architectural design and build firm made up of architects, 
              engineers, project managers and other built environment professionals. For the past ten years, 
              we have executed several projects across Ghana, leveraging innovation and sustainability.
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"></div>
          </div>
        </div>

        {/* Hero Image Banner - Glassmorphism Style */}
        <div className={`mb-20 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10"></div>
            <img
              src="https://images.pexels.com/photos/13729358/pexels-photo-13729358.png"
              alt="AGEdge Global architecture firm - Modern building design showcase"
              className="w-full h-[320px] md:h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-green-400"></div>
                <span className="text-white/80 text-sm font-medium tracking-wider uppercase">Featured Project</span>
              </div>
              <p className="text-white text-xl font-semibold mt-2">Building Dreams Across Ghana</p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Premium Cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx} 
                className="group relative text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-green-50/0 to-green-100/0 group-hover:from-green-50/30 group-hover:via-green-50/20 group-hover:to-green-100/30 transition-all duration-500"></div>
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-green-50 group-hover:bg-green-100 transition-all duration-500 mb-4">
                    <Icon className="w-7 h-7 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Featured Projects Gallery - Masonry Style with Overlays */}
        <div className={`mb-20 transition-all duration-700 delay-250 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">Our Recent Projects</h2>
            <p className="text-gray-600 text-lg font-light">Showcasing excellence across Ghana</p>
            <div className="flex justify-center gap-2 mt-6">
              <div className="w-12 h-px bg-green-300"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="w-12 h-px bg-green-300"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((project, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.url}
                    alt={project.title}
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-0.5 bg-green-400"></div>
                      <span className="text-green-400 text-xs font-medium tracking-wider uppercase">{project.category}</span>
                    </div>
                    <p className="text-white text-xl font-semibold">{project.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-white/60 text-sm">View Project</span>
                      <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                  {/* Bottom Border Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Section - Glassmorphism */}
        <div className={`mb-20 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50 shadow-sm">
            <div className="flex flex-wrap justify-center gap-1">
              {['expertise', 'personnel', 'technology'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                    activeTab === tab
                      ? 'bg-green-600 text-white shadow-lg shadow-green-500/30'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab === 'expertise' && 'Areas of Expertise'}
                  {/* {tab === 'personnel' && 'Our Team'} */}
                  {tab === 'technology' && 'Technology'}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {/* Expertise Tab - Premium Grid */}
            {activeTab === 'expertise' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertiseAreas.map((area, idx) => {
                  const Icon = area.icon
                  return (
                    <div 
                      key={idx} 
                      className="group p-8 bg-white rounded-2xl border border-gray-200/50 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="inline-flex p-3 rounded-xl bg-green-50 group-hover:bg-green-100 transition-all duration-500 mb-5">
                        <Icon className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{area.desc}</p>
                      <div className="mt-4 w-12 h-0.5 bg-green-400 group-hover:w-20 transition-all duration-500"></div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Personnel Tab - Premium Cards with Avatars */}
            {/* {activeTab === 'personnel' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, idx) => (
                  <div 
                    key={idx} 
                    className="group p-6 bg-white rounded-2xl border border-gray-200/50 hover:border-green-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-green-100 group-hover:ring-green-400 transition-all duration-500">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">✓</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{member.name}</h3>
                        <p className="text-green-600 text-sm font-medium">{member.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"></span>
                          <p className="text-xs text-gray-500">{member.experience} experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed">{member.qualifications}</p>
                    </div>
                  </div>
                ))}
              </div>
            )} */}

            {/* Technology Tab - Premium Layout */}
            {activeTab === 'technology' && (
              <div className="bg-white rounded-2xl border border-gray-200/50 shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden min-h-[300px]">
                    <img
                      src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=600&h=400&fit=crop"
                      alt="Architecture software and drafting tools"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-8 h-px bg-green-400"></div>
                      <span className="text-green-600 text-sm font-medium tracking-wider uppercase">Innovation</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cutting-Edge Technology</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      We continuously explore modern technology to improve our product delivery, 
                      undertaking regular updates to enhance the quality of our work.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl hover:bg-green-50 transition-all duration-300 border border-transparent hover:border-green-200">
                          <Cpu className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700 font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Office Image Section - Premium Gallery */}
        <div className={`grid md:grid-cols-2 gap-8 mb-20 transition-all duration-700 delay-350 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
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
          ].map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-0.5 bg-green-400"></div>
                    <span className="text-green-400 text-xs font-medium tracking-wider uppercase">Our Space</span>
                  </div>
                  <p className="text-white text-xl font-semibold">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Contact - Premium Cards */}
        {/* <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="group p-8 bg-white rounded-2xl border border-gray-200/50 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-green-50 group-hover:bg-green-100 transition-all duration-500">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 leading-relaxed">
                Number 1 Beige Street, Azumah, New Weija, Accra, Ghana
              </p>
              <p className="text-gray-500 text-sm font-mono bg-gray-50 px-3 py-1.5 rounded-lg inline-block">GPS: GS-0065-2998</p>
              <p className="text-gray-600 text-sm pt-2">P. O. Box CT 1061, Cantonments, Accra</p>
            </div>
          </div>

          <div className="group p-8 bg-white rounded-2xl border border-gray-200/50 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-green-50 group-hover:bg-green-100 transition-all duration-500">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Connect</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-green-50 transition-all duration-300">
                <Mail className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">info@agedgeglobal.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-green-50 transition-all duration-300">
                <Globe className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">www.agedgeglobal.com</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}