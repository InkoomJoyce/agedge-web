import { useEffect, useRef, useState } from 'react'
import ServiceCard from '../ServiceCard'
import { X, ArrowRight, CheckCircle } from 'lucide-react'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedService, setSelectedService] = useState(null)
  const sectionRef = useRef(null)

  const services = [
    {
      title: "Architecture",
      desc: "Modern, climate-smart designs tailored to Ghana's landscape and culture.",
      icon: "🏛",
      delay: 0,
      keyFeatures: ["Biophilic Design", "Passive Cooling", "Local Materials"],
      fullDescription: "Our architecture team creates sustainable, climate-responsive designs that blend modern aesthetics with Ghana's rich cultural heritage. We specialize in biophilic design that connects occupants with nature, passive cooling techniques that reduce energy consumption, and the use of locally-sourced materials that support the local economy. From concept to completion, we ensure every design is functional, beautiful, and environmentally conscious.",
      benefits: [
        "Energy-efficient building designs",
        "Cultural integration and context sensitivity",
        "Sustainable material selection",
        "Future-proof architectural solutions"
      ],
      portfolio: "Featured projects include luxury villas in East Legon, eco-friendly schools, and commercial complexes across Accra."
    },
    {
      title: "Materials", 
      desc: "Premium building materials sourced and supplied for quality construction.",
      icon: "🔨",
      delay: 100,
      keyFeatures: ["Sustainable Sourcing", "Quality Certified", "Just-in-Time Delivery"],
      fullDescription: "We source and supply only the highest quality building materials from trusted local and international suppliers. Our materials are carefully selected for durability, sustainability, and aesthetic appeal. With our just-in-time delivery system, we ensure materials arrive precisely when needed, reducing site storage costs and minimizing waste. Every material is quality certified to meet Ghana's building standards.",
      benefits: [
        "Quality-assured materials",
        "Cost-effective sourcing",
        "Timely delivery to site",
        "Sustainable material options"
      ],
      portfolio: "Supplying materials for major developments including residential estates, commercial buildings, and infrastructure projects throughout Ghana."
    },
    {
      title: "Construction",
      desc: "Full construction management from foundation to finishing.",
      icon: "🏗",
      delay: 200,
      keyFeatures: ["Project Oversight", "Safety First", "Timeline Guaranteed"],
      fullDescription: "Our construction management team oversees every aspect of your project from groundbreaking to final handover. We combine decades of experience with modern construction techniques to deliver projects on time and within budget. Safety is our top priority, with comprehensive site safety protocols and regular inspections. Our project managers coordinate all trades, manage resources, and maintain clear communication throughout the build process.",
      benefits: [
        "Professional project management",
        "Strict quality control",
        "Safety-first approach",
        "On-time delivery guaranteed"
      ],
      portfolio: "Successfully completed over 50 projects including luxury residences, educational facilities, and commercial buildings across Ghana."
    },
    {
      title: "Real Estate",
      desc: "Residential & commercial development with investment-grade returns.",
      icon: "🏘",
      delay: 300,
      keyFeatures: ["Market Analysis", "ROI Optimized", "End-to-End Management"],
      fullDescription: "We identify prime development opportunities and deliver projects that generate exceptional returns for investors. Our real estate team conducts comprehensive market analysis to identify demand drivers and optimal property types. From site acquisition to development and sales, we manage the entire process to maximize ROI. Our portfolio includes both residential and commercial developments that have consistently outperformed market benchmarks.",
      benefits: [
        "Data-driven investment decisions",
        "Premium property development",
        "End-to-end project management",
        "Proven track record of returns"
      ],
      portfolio: "Developed residential estates, commercial properties, and mixed-use developments across Accra and beyond."
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedService])

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AGEdge Global",
    "description": "Integrated Architecture, Materials, Construction & Real Estate services in Accra, Ghana",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AGEdge Global Building Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${service.title} Services in Ghana`,
          "description": service.desc,
          "areaServed": "Ghana"
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
        className="relative overflow-hidden py-16 lg:py-20 bg-gray-900"
        aria-labelledby="services-heading"
      >
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/29453302/pexels-photo-29453302.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: `scale(${1 + scrollY * 0.0002})`,
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/80 to-gray-900/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 
              id="services-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight"
            >
              Our Core Services
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              AGEdge Global is a vertical powerhouse that integrates all four pillars of building with 
              <strong className="font-medium text-gray-200"> one expert team</strong>, ensuring you own the entire journey.
            </p>

            <div className="flex justify-center gap-3 mt-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400/60 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400/80" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-gray-400/60 to-transparent" />
            </div>
          </div>

          {/* Services Grid - Clickable Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                onClick={() => setSelectedService(service)}
                className={`group relative transform transition-all duration-500 hover:scale-110 hover:z-50 hover:-translate-y-3 text-white cursor-pointer ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${service.delay}ms` }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedService(service)
                  }
                }}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-400/30 to-gray-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 [&_*]:text-white [&_h3]:text-white [&_p]:text-gray-100 group-hover:[&_h3]:text-white group-hover:[&_p]:text-gray-200">
                  <ServiceCard 
                    title={service.title} 
                    description={service.desc}
                    icon={service.icon}
                    keyFeatures={service.keyFeatures}
                  />
                  {/* Click Hint */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedService(null)
          }}
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-10 duration-300 shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 rounded-t-3xl">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{selectedService.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                    <p className="text-gray-500 text-sm">{selectedService.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Full Description */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-gray-700 leading-relaxed">{selectedService.fullDescription}</p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.keyFeatures.map((feature) => (
                    <span 
                      key={feature}
                      className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Benefits</h4>
                <div className="grid gap-2">
                  {selectedService.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Portfolio</h4>
                <p className="text-gray-700">{selectedService.portfolio}</p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 font-medium text-center shadow-lg shadow-gray-500/25 flex items-center justify-center gap-2"
                >
                  Inquire About {selectedService.title}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}