import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Users, TrendingUp, Award } from 'lucide-react'

export default function CtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { value: 300, label: "Projects", suffix: "+", icon: Building2 },
    { value: 100, label: "Client Satisfaction", suffix: "%", icon: Users },
    { value: 15, label: "Years Combined", suffix: "+", icon: TrendingUp },
    { value: 7, label: "Core Services", suffix: "", icon: Award }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const ctaSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AGEdge Global",
    "url": "https://agedgeglobal.com",
    "logo": "https://agedgeglobal.com/logo.png",
    "description": "Building Dreams & Creating Communities - Integrated construction services in Ghana",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "makesOffer": stats.map(stat => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": stat.label,
        "description": `${stat.value}${stat.suffix} ${stat.label} delivered`
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ctaSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-gray-200"
        aria-label="Call to Action - Start Your Building Journey"
      >

        {/* Animated Background Patterns - Green 500 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(0,0,0,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column */}
            <div className={`space-y-8 transition-all duration-1000 transform ${
              isVisible? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-green-500 to-transparent" />
                <span className="text-green-600 text-sm font-mono tracking-wider uppercase font-semibold">
                  Since 2016
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Building Dreams &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 mt-2">
                  Creating Communities
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-green-500/50 pl-6">
                From luxury estates in East Legon to industrial warehouses in Tema,
                <span className="text-green-600 font-semibold"> AGEdge Global</span> brings vision, materials,
                and execution together under one sophisticated roof.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/about"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105"
                >
                  <span className="relative z-10">Discover AGEdge</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                >
                  Start a Project
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                  <span>No obligation consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                  <span>Free project estimate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                  <span>24/7 client support</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />

                  <img
                    src="https://images.pexels.com/photos/28681441/pexels-photo-28681441.jpeg"
                    alt="Modern architectural masterpiece in Accra, Ghana - AGEdge construction portfolio"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-px bg-green-400" />
                      <p className="text-green-400 text-sm font-mono tracking-wider">Featured Project</p>
                    </div>
                    <p className="text-white font-semibold text-lg">The Pearl • East Legon</p>
                    <p className="text-gray-300 text-sm">Luxury residential development</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full p-4 shadow-xl animate-bounce">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                    <Award className="w-6 h-6 text-white relative z-10" />
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-green-500/20 rounded-full" />
                <div className="absolute -top-6 -right-6 w-24 h-24 border border-green-500/10 rounded-full" />
              </div>

              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                <div className="px-4 py-2 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">
                  ⭐ Trusted by 300+ clients
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">
                  🏆 Award-winning designs
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">
                  🌍 Ghana's premier builder
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      </section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
       .animate-bounce {
          animation: bounce 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}