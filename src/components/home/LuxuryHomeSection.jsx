import { useEffect, useRef, useState } from 'react'
import { Phone, Calendar, User, Mail, MessageCircle, ArrowRight, CheckCircle, Clock, Award, Shield, Home, Gem, Sparkles, PenTool, Ruler, Heart, MapPin, Star, Building2, Crown, ChevronRight } from 'lucide-react'

export default function LuxuryHomeSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const sectionRef = useRef(null)

  // Individual visibility states for each section
  const [headerVisible, setHeaderVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [featuresVisible, setFeaturesVisible] = useState(false)
  const [processVisible, setProcessVisible] = useState(false)
  const [testimonialsVisible, setTestimonialsVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)

  const headerRef = useRef(null)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const processRef = useRef(null)
  const testimonialsRef = useRef(null)
  const formRef = useRef(null)

  const luxuryFeatures = [
    {
      title: "Bespoke Designs",
      description: "Custom architectural designs tailored to your unique vision"
    },
    {
      title: "Premium Materials",
      description: "Finest quality materials from global and local sources"
    },
    {
      title: "White-Glove Service",
      description: "Dedicated project manager from concept to completion"
    },
    {
      title: "Award-Winning Team",
      description: "Recognized excellence in luxury residential architecture"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Discuss your vision, preferences, and budget"
    },
    {
      step: "02",
      title: "Concept Design",
      description: "Custom architectural plans and 3D visualizations"
    },
    {
      step: "03",
      title: "Material Selection",
      description: "Curate premium finishes and materials"
    },
    {
      step: "04",
      title: "Construction",
      description: "Expert execution with quality assurance"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Kwame Asante",
      location: "East Legon, Accra",
      text: "AGEdge transformed our vision into reality. The attention to detail and quality of craftsmanship exceeded our expectations.",
      rating: 5
    },
    {
      name: "Mrs. Abena Osei",
      location: "Cantonments, Accra",
      text: "From design to completion, the team was professional and dedicated. Our luxury home is everything we dreamed of.",
      rating: 5
    },
    {
      name: "Mr. Michael Appiah",
      location: "Airport Residential, Accra",
      text: "Exceptional service and stunning results. AGEdge delivered our dream home ahead of schedule.",
      rating: 5
    }
  ]

  // Observer for each section
  useEffect(() => {
    const options = { threshold: 0.1 }

    const createObserver = (setVisible, ref) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      }, options)
      if (ref.current) observer.observe(ref.current)
      return observer
    }

    const observers = [
      createObserver(setHeaderVisible, headerRef),
      createObserver(setHeroVisible, heroRef),
      createObserver(setFeaturesVisible, featuresRef),
      createObserver(setProcessVisible, processRef),
      createObserver(setTestimonialsVisible, testimonialsRef),
      createObserver(setFormVisible, formRef)
    ]

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const res = await fetch(e.target.action, {
        method: e.target.method,
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      })

      if (res.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          preferredDate: ''
        })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const luxuryServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Home Design and Construction",
    "provider": {
      "@type": "Organization",
      "name": "AGEdge Global"
    },
    "serviceType": "Luxury Residential Construction",
    "areaServed": {
      "@type": "Place",
      "name": "Ghana"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Home Services",
      "itemListElement": luxuryFeatures.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature.title,
          "description": feature.description
        },
        "position": index + 1
      }))
    }
  }

  return (
    <>
      <style>{`
        @keyframes dropIn {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }
          60% {
            transform: translateY(10px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      .animate-drop {
          animation: dropIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(luxuryServiceSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden py-12 lg:py-16 bg-gray-100"
        aria-label="Build Your Luxury Home - Premium Design & Construction Services"
      >
        {/* Green Highlight Backgrounds */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top left green glow */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-200/40 rounded-full blur-3xl animate-float" />
          
          {/* Center right green glow */}
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-float-slow" />
          
          {/* Bottom left green glow */}
          <div className="absolute -bottom-40 -left-20 w-72 h-72 bg-green-200/35 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Middle left subtle green glow */}
          <div className="absolute top-1/3 -left-20 w-64 h-64 bg-green-400/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
          
          {/* Bottom right green glow */}
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-green-300/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header - Reduced margin */}
          <div ref={headerRef} className={`text-center mb-10 transition-all duration-1000 ${
            headerVisible? 'animate-drop opacity-100' : 'translate-y-[-80px] opacity-0'
          }`} style={{ animationDelay: '0ms' }}>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-800 mb-3">
              Build Your{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                Luxury Home
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto font-light text-sm md:text-base">
              Experience the pinnacle of architectural excellence. Let us bring your dream home to life with uncompromising quality and timeless design.
            </p>

            <div className="flex justify-center gap-2 mt-5">
              <div className="w-12 h-px bg-green-300"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="w-12 h-px bg-green-300"></div>
            </div>
          </div>

          {/* Process Section - Reduced margin */}
          <div ref={processRef} className={`mb-12 transition-all duration-1000 ${
            processVisible? 'animate-drop opacity-100' : 'translate-y-[-80px] opacity-0'
          }`} style={{ animationDelay: '0ms' }}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Our Process</h3>
              <p className="text-gray-600 text-sm font-light">A seamless journey from vision to reality</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-green-300 to-transparent" />
                  )}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white text-lg font-bold mb-3 shadow-lg">
                      {step.step}
                    </div>
                    <h4 className="text-base font-semibold text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-xs font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image & Features Grid - Reduced margin */}
          <div ref={heroRef} className={`grid lg:grid-cols-2 gap-6 mb-12 transition-all duration-1000 ${
            heroVisible? 'animate-drop opacity-100' : 'translate-y-[-80px] opacity-0'
          }`} style={{ animationDelay: '0ms' }}>
            {/* Image Column */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Luxury modern home exterior with contemporary architecture"
                className="w-full h-[280px] lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="flex items-center gap-2 text-white">
                  <Home className="w-4 h-4" />
                  <span className="text-xs font-medium">Luxury Villa • East Legon</span>
                </div>
              </div>
            </div>

            {/* Features Grid - 2x2 layout, more compact */}
            <div className="grid grid-cols-2 gap-3">
              {luxuryFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-green-50 to-white p-4 rounded-xl border border-green-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-base font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials & Booking Section - Reduced gap */}
          <div className={`grid lg:grid-cols-2 gap-8 ${
            testimonialsVisible || formVisible? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Testimonials - Stars Kept */}
            <div ref={testimonialsRef} className={`space-y-4 transition-all duration-1000 ${
              testimonialsVisible? 'animate-drop' : 'translate-y-[-80px] opacity-0'
            }`} style={{ animationDelay: '0ms' }}>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">What Our Clients Say</h3>
                <p className="text-gray-600 text-sm font-light">Trusted by discerning homeowners across Ghana</p>
              </div>
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3 text-sm font-light">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 font-light">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking Form - More compact */}
            <div ref={formRef} className={`bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-lg transition-all duration-1000 ${
              formVisible? 'animate-drop' : 'translate-y-[-80px] opacity-0'
            }`} style={{ animationDelay: '100ms' }}>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Schedule a Consultation</h3>
                <p className="text-gray-600 text-xs font-light">Let's discuss your luxury home vision</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-green-700 font-medium text-sm">Request submitted successfully!</p>
                      <p className="text-green-600 text-xs font-light">We'll contact you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-500">⚠</div>
                    <div>
                      <p className="text-red-700 font-medium text-sm">Submission failed</p>
                      <p className="text-red-600 text-xs font-light">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <form
                action="https://formspree.io/f/xeedzpbj"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all font-light"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all font-light"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all font-light"
                />

                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all font-light"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your vision..."
                  rows="2"
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all resize-none font-light"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-2.5 text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book Your Consultation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>

              <p className="text-center text-xs text-gray-500 mt-3 font-light">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}