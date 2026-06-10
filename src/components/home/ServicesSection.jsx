import { useEffect, useRef, useState } from 'react'
import ServiceCard from '../ServiceCard'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  const services = [
    {
      title: "Architecture",
      desc: "Modern, climate-smart designs tailored to Ghana's landscape and culture.",
      icon: "🏛",
      delay: 0,
      keyFeatures: ["Biophilic Design", "Passive Cooling", "Local Materials"]
    },
    {
      title: "Materials", 
      desc: "Premium building materials sourced and supplied for quality construction.",
      icon: "🔨",
      delay: 100,
      keyFeatures: ["Sustainable Sourcing", "Quality Certified", "Just-in-Time Delivery"]
    },
    {
      title: "Construction",
      desc: "Full construction management from foundation to finishing.",
      icon: "🏗",
      delay: 200,
      keyFeatures: ["Project Oversight", "Safety First", "Timeline Guaranteed"]
    },
    {
      title: "Real Estate",
      desc: "Residential & commercial development with investment-grade returns.",
      icon: "🏘",
      delay: 300,
      keyFeatures: ["Market Analysis", "ROI Optimized", "End-to-End Management"]
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
          {/* Dark grey overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/80 to-gray-900/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
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

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative transform transition-all duration-500 hover:scale-110 hover:z-50 hover:-translate-y-3 text-white ${
                  isVisible 
                ? 'translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${service.delay}ms` }}
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-400/30 to-gray-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 [&_*]:text-white [&_h3]:text-white [&_p]:text-gray-100 group-hover:[&_h3]:text-white group-hover:[&_p]:text-gray-200">
                  <ServiceCard 
                    title={service.title} 
                    description={service.desc}
                    icon={service.icon}
                    keyFeatures={service.keyFeatures}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}