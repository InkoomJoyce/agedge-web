import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const sectionRef = useRef(null)

  const coreServices = [
    {
      id: 1,
      category: "architecture",
      icon: PenTool,
      title: "Architecture & Design",
      description: "Innovative, climate-smart designs tailored to Ghana's landscape and culture.",
      features: [
        "Concept Design & Feasibility Studies",
        "3D Visualization & Virtual Walkthroughs",
        "Sustainable & Biophilic Design",
        "Building Permits & Regulatory Compliance",
        "Post-Occupancy Evaluation"
      ],
      image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=600&h=400&fit=crop",
      color: "from-amber-500 to-amber-600"
    },
    {
      id: 2,
      category: "materials",
      icon: Box,
      title: "Materials Supply & Procurement",
      description: "Premium building materials sourced globally and supplied locally for quality construction.",
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
      features: [
        "Property Development",
        "Investment Analysis",
        "Property Management",
        "Sales & Marketing",
        "ROI Optimization"
      ],
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=600&h=400&fit=crop",
      color: "from-green-500 to-green-600"
    }
  ]

  const additionalServices = [
    {
      icon: FileText,
      title: "Project Feasibility",
      description: "Comprehensive project assessment and viability studies"
    },
    {
      icon: Wrench,
      title: "Renovation & Face-lifts",
      description: "Transform existing spaces with modern upgrades"
    },
    {
      icon: Building2,
      title: "Facility Management",
      description: "Ongoing maintenance and facility operations"
    },
    {
      icon: Ruler,
      title: "Quantity Surveying",
      description: "Accurate cost estimation and contract administration"
    },
    {
      icon: Users,
      title: "Project Supervision",
      description: "Dedicated oversight throughout project lifecycle"
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Efficient material transportation and handling"
    }
  ]

  const qualityMetrics = [
    { value: "100%", label: "Quality Assurance", icon: Shield },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "15+", label: "Years Combined Experience", icon: Users },
    { value: "50+", label: "Projects Completed", icon: Building2 }
  ]

  const globalPartners = [
    { country: "China", flag: "🇨🇳", partners: "3 Strategic Partners", icon: Ship },
    { country: "Germany", flag: "🇩🇪", partners: "2 Manufacturing Partners", icon: Factory },
    { country: "Turkey", flag: "🇹🇷", partners: "2 Material Suppliers", icon: Package },
    { country: "UAE", flag: "🇦🇪", partners: "1 Logistics Hub", icon: Warehouse },
    { country: "South Africa", flag: "🇿🇦", partners: "2 Regional Partners", icon: Handshake },
    { country: "USA", flag: "🇺🇸", partners: "1 Technology Partner", icon: Cpu }
  ]

  const innovationHighlights = [
    {
      icon: Cpu,
      title: "BIM Technology",
      description: "Building Information Modeling for precision planning"
    },
    {
      icon: Sparkles,
      title: "Sustainable Design",
      description: "Eco-friendly materials and energy-efficient solutions"
    },
    {
      icon: Gem,
      title: "Premium Finishes",
      description: "Luxury materials from world-class suppliers"
    },
    {
      icon: Rocket,
      title: "Fast-Track Delivery",
      description: "Accelerated project timelines without quality compromise"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Discuss vision, budget, and timeline"
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Architectural designs and material selection"
    },
    {
      step: "03",
      title: "Procurement",
      description: "Global sourcing and logistics coordination"
    },
    {
      step: "04",
      title: "Construction",
      description: "Expert execution with quality control"
    },
    {
      step: "05",
      title: "Handover",
      description: "Final inspection and project completion"
    }
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

  const filteredServices = activeCategory === 'all' 
    ? coreServices 
    : coreServices.filter(s => s.category === activeCategory)

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
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <section
        ref={sectionRef}
        className="bg-white min-h-screen"
        aria-label="AGEdge Global Services - Architecture, Materials, Construction, Real Estate"
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
          {/* Hero Section */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Integrated Building Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-4">
              Our{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Services
              </span>
            </h1>

            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Architecture • Materials • Construction • Real Estate
            </p>

            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-gray-600 leading-relaxed">
                A vertically integrated powerhouse bringing architecture, materials, construction, 
                and real estate under one roof. We remove middleman friction and deliver turnkey 
                solutions with uncompromising quality and innovation.
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-12 h-px bg-amber-300"></div>
            </div>
          </div>

          {/* Quality Metrics */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {qualityMetrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <Icon className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                  <p className="text-sm text-gray-500">{metric.label}</p>
                </div>
              )
            })}
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('architecture')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'architecture'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => setActiveCategory('materials')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'materials'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Materials
            </button>
            <button
              onClick={() => setActiveCategory('construction')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'construction'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Construction
            </button>
            <button
              onClick={() => setActiveCategory('realestate')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'realestate'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Real Estate
            </button>
          </div>

          {/* Core Services Grid */}
          <div className={`grid lg:grid-cols-2 gap-8 mb-20 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {filteredServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-60 mix-blend-multiply`} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex p-2 bg-white/20 backdrop-blur-md rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Services */}
          <div className={`mb-20 transition-all duration-700 delay-250 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">Additional Services</h2>
              <p className="text-gray-500">Comprehensive solutions for every project need</p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-12 h-px bg-amber-300"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="w-12 h-px bg-amber-300"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-all duration-300">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Global Partners Section */}
          <div className={`mb-20 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                <Globe2 className="w-4 h-4" />
                <span>Global Reach</span>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Global Partners</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Strategic partnerships with premium suppliers and manufacturers worldwide, ensuring access to the finest materials and technologies
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {globalPartners.map((partner, idx) => {
                const Icon = partner.icon
                return (
                  <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="text-4xl mb-2">{partner.flag}</div>
                    <Icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800 text-sm">{partner.country}</p>
                    <p className="text-xs text-gray-500">{partner.partners}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Innovation & Quality Section */}
          <div className={`mb-20 transition-all duration-700 delay-350 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Innovation at Heart</span>
                </div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Quality & Innovation</h2>
                <p className="text-gray-600 mb-6">
                  At AGEdge Global, we continuously explore modern technology to improve our product delivery. 
                  We undertake regular updates to enhance the quality of our work, ensuring every project meets 
                  global standards of excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">Quality Assurance</p>
                      <p className="text-sm text-gray-500">Rigorous testing and inspection at every stage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">Continuous Improvement</p>
                      <p className="text-sm text-gray-500">Regular updates to processes and technology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">Industry Recognition</p>
                      <p className="text-sm text-gray-500">Award-winning designs and construction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {innovationHighlights.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl text-center hover:bg-amber-50 transition-all duration-300">
                      <Icon className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className={`mb-20 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Process</h2>
              <p className="text-gray-500">A seamless journey from vision to reality</p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-12 h-px bg-amber-300"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="w-12 h-px bg-amber-300"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center py-12 bg-gradient-to-r from-gray-50 to-amber-50 rounded-3xl transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Build Your Vision?</h3>
            <p className="text-gray-600 mb-6">Let's discuss how our integrated services can bring your project to life</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}