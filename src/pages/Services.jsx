import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Home, Building2, HardHat, PenTool, 
  Ruler, Wrench, Users, Calendar, 
  MapPin, Mail, Globe, CheckCircle, 
  Star, Shield, Cpu, Layers, Target,
  ChevronRight, TrendingUp, Award, 
  Truck, Warehouse, Factory, Globe2,
  BarChart, LineChart, Phone, MailCheck,
  Sparkles, Gem, Crown, Rocket,
  ArrowRight, Box, Package, Ship,
  FileText, Briefcase, Handshake
} from 'lucide-react'

// Constants - Extracted for maintainability
const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'materials', label: 'Materials' },
  { id: 'construction', label: 'Construction' },
  { id: 'realestate', label: 'Real Estate' },
  { id: 'feasibility', label: 'Feasibility' }
]

const QUALITY_METRICS = [
  { value: "100%", label: "Quality Assurance", icon: Shield },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "15+", label: "Years Combined Experience", icon: Users },
  { value: "50+", label: "Projects Completed", icon: Building2 }
]

const GLOBAL_PARTNERS = [
  { country: "China", flag: "🇨🇳", partners: "3 Strategic Partners", icon: Ship },
  { country: "Germany", flag: "🇩🇪", partners: "2 Manufacturing Partners", icon: Factory },
  { country: "Turkey", flag: "🇹🇷", partners: "2 Material Suppliers", icon: Package },
  { country: "UAE", flag: "🇦🇪", partners: "1 Logistics Hub", icon: Warehouse },
  { country: "South Africa", flag: "🇿🇦", partners: "2 Regional Partners", icon: Handshake },
  { country: "USA", flag: "🇺🇸", partners: "1 Technology Partner", icon: Cpu }
]

const INNOVATION_HIGHLIGHTS = [
  { icon: Cpu, title: "BIM Technology", description: "Building Information Modeling for precision planning" },
  { icon: Sparkles, title: "Sustainable Design", description: "Eco-friendly materials and energy-efficient solutions" },
  { icon: Gem, title: "Premium Finishes", description: "Luxury materials from world-class suppliers" },
  { icon: Rocket, title: "Fast-Track Delivery", description: "Accelerated project timelines without quality compromise" }
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const sectionRef = useRef(null)
  const navigate = useNavigate()

  // Service data - ONLY Feasibility has a link
  const coreServices = useMemo(() => [
    {
      id: 1,
      category: "architecture",
      icon: PenTool,
      title: "Architecture & Design",
      description: "Innovative, climate-smart designs tailored to Ghana's landscape and culture.",
      slug: "architecture",
      link: null,
      features: [
        "Concept Design & Feasibility Studies",
        "3D Visualization & Virtual Walkthroughs",
        "Sustainable & Biophilic Design",
        "Building Permits & Regulatory Compliance",
        "Post-Occupancy Evaluation"
      ],
      image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=600&h=400&fit=crop",
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      category: "materials",
      icon: Box,
      title: "Materials Supply & Procurement",
      description: "Premium building materials sourced globally and supplied locally for quality construction.",
      slug: "materials",
      link: null,
      features: [
        "Global Sourcing (China, Europe, USA)",
        "Quality Assurance & Testing",
        "Just-in-Time Delivery",
        "Bulk Order Discounts",
        "Material Consultation & Specification"
      ],
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=600&h=400&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      category: "construction",
      icon: HardHat,
      title: "Construction Management",
      description: "Full construction management — from foundation to finishing with quality assurance.",
      slug: "construction",
      link: null,
      features: [
        "Project Planning & Scheduling",
        "Quality Control & Safety Management",
        "Cost Estimation & Control",
        "Contract Administration",
        "Site Supervision & Handover"
      ],
      image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=600&h=400&fit=crop",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 4,
      category: "realestate",
      icon: Building2,
      title: "Real Estate Development",
      description: "Residential & commercial development with investment-grade returns.",
      slug: "real-estate",
      link: null,
      features: [
        "Property Development",
        "Investment Analysis",
        "Property Management",
        "Sales & Marketing",
        "ROI Optimization"
      ],
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=600&h=400&fit=crop",
      color: "from-green-500 to-green-600"
    },
    {
      id: 5,
      category: "feasibility",
      icon: FileText,
      title: "Feasibility Studies",
      description: "Comprehensive project analysis to ensure success before you build.",
      slug: "feasibility",
      link: "/services/feasibility",
      features: [
        "Technical & Site Assessment",
        "Financial Analysis & ROI Projections",
        "Market Research & Demand Analysis",
        "Risk Assessment & Mitigation Strategies",
        "Regulatory & Permitting Review",
        "Detailed Feasibility Report with Recommendations"
      ],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-600"
    }
  ], [])

  // Additional services - ONLY Feasibility has a link, ALL icons are green
  const additionalServices = useMemo(() => [
    { icon: FileText, title: "Project Feasibility", description: "Comprehensive project assessment and viability studies", link: "/services/feasibility" },
    { icon: Wrench, title: "Renovation & Face-lifts", description: "Transform existing spaces with modern upgrades", link: null },
    { icon: Building2, title: "Facility Management", description: "Ongoing maintenance and facility operations", link: null },
    { icon: Ruler, title: "Quantity Surveying", description: "Accurate cost estimation and contract administration", link: null },
    { icon: Users, title: "Project Supervision", description: "Dedicated oversight throughout project lifecycle", link: null },
    { icon: Truck, title: "Logistics & Delivery", description: "Efficient material transportation and handling", link: null }
  ], [])

  // Service detail handler
  const handleServiceClick = useCallback((service) => {
    if (service.link) {
      navigate(service.link)
    }
  }, [navigate])

  // Filter services based on active category
  const filteredServices = useMemo(() => {
    return activeCategory === 'all' 
      ? coreServices 
      : coreServices.filter(s => s.category === activeCategory)
  }, [activeCategory, coreServices])

  // Intersection Observer
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

  // Schema markup
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AGEdge Global Integrated Building Services",
    "provider": {
      "@type": "Organization",
      "name": "AGEdge Global Limited"
    },
    "serviceType": coreServices.map(s => s.title),
    "areaServed": {
      "@type": "Place",
      "name": "Ghana"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction and Design Services",
      "itemListElement": coreServices.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative min-h-screen bg-gray-50 pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
        aria-label="AGEdge Global Services - Architecture, Materials, Construction, Real Estate"
      >
        {/* Green Background Highlights */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className={`text-center mb-12 ${getAnimationClasses(0)}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Integrated Building Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-2">
              Our{' '}
              <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Architecture • Materials • Construction • Real Estate • Feasibility Studies
            </p>

            <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
              A vertically integrated powerhouse bringing architecture, materials, construction, 
              feasibility studies, and real estate under one roof. We remove middleman friction 
              and deliver turnkey solutions with uncompromising quality and innovation.
            </p>

            <div className="flex justify-center gap-2 mt-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"></div>
            </div>
          </div>

          {/* Quality Metrics */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${getAnimationClasses(100)}`}>
            {QUALITY_METRICS.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div key={idx} className="text-center p-4 bg-white rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className="text-xs text-gray-600 font-medium">{metric.label}</p>
                </div>
              )
            })}
          </div>

          {/* Category Filter - Green Theme */}
          <div className={`flex flex-wrap justify-center gap-2 mb-10 ${getAnimationClasses(150)}`}>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-green-600 text-white shadow-lg shadow-green-500/25'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Core Services Grid - Only Feasibility is clickable */}
          <div className={`grid lg:grid-cols-2 gap-6 mb-12 ${getAnimationClasses(200)}`}>
            {filteredServices.map((service) => {
              const Icon = service.icon
              const isClickable = service.link !== null
              
              return (
                <div 
                  key={service.id} 
                  onClick={() => isClickable && handleServiceClick(service)}
                  className={`group bg-white rounded-xl border border-gray-200/50 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                    isClickable ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-50 mix-blend-multiply`} />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="inline-flex p-1.5 bg-white/20 backdrop-blur-md rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {isClickable && (
                        <div className="absolute top-3 right-3 px-2 py-0.5 bg-green-500/90 text-white text-[10px] font-medium rounded-full backdrop-blur-sm">
                          Learn More
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className={`text-xl font-bold text-gray-900 mb-1 ${
                      isClickable ? 'group-hover:text-green-600 transition-colors' : ''
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-green-500 text-xs font-medium mt-1">
                          + {service.features.length - 3} more features
                          {isClickable && ' →'}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Services - ALL icons are green, only Feasibility clickable */}
          <div className={`mb-12 ${getAnimationClasses(250)}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">Additional Services</h2>
              <p className="text-sm text-gray-600">Comprehensive solutions for every project need</p>
              <div className="flex justify-center gap-2 mt-3">
                <div className="w-8 h-px bg-green-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                <div className="w-8 h-px bg-green-300"></div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalServices.map((service, idx) => {
                const Icon = service.icon
                const isClickable = service.link !== null
                
                if (isClickable) {
                  return (
                    <Link 
                      key={idx} 
                      to={service.link}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-200 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors flex-shrink-0">
                        <Icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 text-sm group-hover:text-green-600 transition-colors truncate">
                          {service.title}
                        </h3>
                        <p className="text-xs text-gray-500 truncate">{service.description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                  )
                }
                
                return (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200/50 hover:border-green-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors flex-shrink-0">
                      <Icon className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-700 text-sm truncate">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-400 truncate">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Global Partners */}
          <div className={`mb-12 ${getAnimationClasses(300)}`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-3">
                <Globe2 className="w-4 h-4" />
                <span>Global Reach</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">Our Global Partners</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Strategic partnerships with premium suppliers and manufacturers worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {GLOBAL_PARTNERS.map((partner, idx) => {
                const Icon = partner.icon
                return (
                  <div key={idx} className="text-center p-3 bg-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl mb-1">{partner.flag}</div>
                    <Icon className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <p className="font-semibold text-gray-800 text-xs">{partner.country}</p>
                    <p className="text-[10px] text-gray-500">{partner.partners}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Innovation Section */}
          <div className={`grid lg:grid-cols-2 gap-8 mb-12 ${getAnimationClasses(350)}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Innovation at Heart</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Quality & Innovation</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                At AGEdge Global, we continuously explore modern technology to improve our product delivery. 
                We undertake regular updates to enhance the quality of our work, ensuring every project meets 
                global standards of excellence.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Quality Assurance</p>
                    <p className="text-xs text-gray-500">Rigorous testing and inspection at every stage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Continuous Improvement</p>
                    <p className="text-xs text-gray-500">Regular updates to processes and technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Industry Recognition</p>
                    <p className="text-xs text-gray-500">Award-winning designs and construction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {INNOVATION_HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-gray-200/50 text-center hover:border-green-200 hover:shadow-md transition-all duration-300">
                    <Icon className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section - Green Theme */}
          <div className={`text-center py-10 px-6 bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl border border-green-100/50 ${getAnimationClasses(450)}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Build Your Vision?</h3>
            <p className="text-sm text-gray-600 mb-5">Let's discuss how our integrated services can bring your project to life</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-sm"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/feasibility"
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-green-500 text-green-600 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 text-sm"
              >
                Learn About Feasibility Studies
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}