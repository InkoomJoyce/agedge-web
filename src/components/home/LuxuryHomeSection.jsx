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
      icon: Crown,
      title: "Bespoke Designs",
      description: "Custom architectural designs tailored to your unique vision"
    },
    {
      icon: Gem,
      title: "Premium Materials",
      description: "Finest quality materials from global and local sources"
    },
    {
      icon: Sparkles,
      title: "White-Glove Service",
      description: "Dedicated project manager from concept to completion"
    },
    {
      icon: Award,
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
      name: "Mrs. Abena Osei",
      location: "Cantonments, Accra",
      text: "From design to completion, the team was professional and dedicated. Our luxury home is everything we dreamed of.",
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
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(luxuryServiceSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white"
        aria-label="Build Your Luxury Home - Premium Design & Construction Services"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible? 'animate-drop opacity-100' : 'translate-y-[-80px] opacity-0'
          }`} style={{ animationDelay: '0ms' }}>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-800 mb-4">
              Build Your{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Luxury Home
              </span>
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto mt-4 font-light">
              Experience the pinnacle of architectural excellence. Let us bring your dream home to life with uncompromising quality and timeless design.
            </p>

            <div className="flex justify-center gap-2 mt-8">
              <div className="w-16 h-px bg-amber-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-16 h-px bg-amber-300"></div>
            </div>
          </div>

          {/* Hero Image & Stats */}
          <div ref={heroRef} className={`grid lg:grid-cols-2 gap-8 mb-20 transition-all duration-1000 ${
            heroVisible? 'animate-drop opacity-100' : 'translate-y-[-80px] opacity-0'
          }`} style={{ animationDelay: '0ms' }}>
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Luxury modern home exterior with contemporary architecture"
                className="w-full h- lg:h- object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center gap-2 text-white">
                  <Home className="w-5 h-5" />
                  <span className="text-sm font-medium">Luxury Villa • East Legon</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
                <Building2 className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-2xl font-bold text-slate-800">50+</p>
                <p className="text-sm text-slate-500 font-medium">Luxury Homes Built</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
                <Star className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-2xl font-bold text-slate-800">100%</p>
                <p className="text-sm text-slate-500 font-medium">Client Satisfaction</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
                <Award className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-2xl font-bold text-slate-800">15+</p>
                <p className="text-sm text-slate-500 font-medium">Design Awards</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
                <Clock className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-2xl font-bold text-slate-800">10+</p>
                <p className="text-sm text-slate-500 font-medium">Years Excellence</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div ref={featuresRef} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ${
            featuresVisible? 'opacity-100' : 'opacity-0'
          }`}>
            {luxuryFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className={`group text-center p-6 bg-white rounded-2xl border border-stone-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                    featuresVisible? 'animate-drop' : 'translate-y-[-80px] opacity-0'
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-500 mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm font-light">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* Process Section */}
          <div ref={processRef} className={`mb-20 transition-all duration-1000 ${
            processVisible? 'animate-drop opacity-100' : 'translate-y-[-80px] opacity-0'
          }`} style={{ animationDelay: '0ms' }}>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Our Process</h3>
              <p className="text-slate-500 font-light">A seamless journey from vision to reality</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-amber-300 to-transparent" />
                  )}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white text-2xl font-bold mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h4>
                    <p className="text-slate-500 text-sm font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials & Booking Section */}
          <div className={`grid lg:grid-cols-2 gap-12 ${
            testimonialsVisible || formVisible? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Testimonials */}
            <div ref={testimonialsRef} className={`space-y-6 transition-all duration-1000 ${
              testimonialsVisible? 'animate-drop' : 'translate-y-[-80px] opacity-0'
            }`} style={{ animationDelay: '0ms' }}>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">What Our Clients Say</h3>
                <p className="text-slate-500 font-light">Trusted by discerning homeowners across Ghana</p>
              </div>
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4 font-light">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-400 font-light">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking Form - FORMSPREE AJAX */}
            <div ref={formRef} className={`bg-gradient-to-br from-stone-50 to-white rounded-2xl p-6 md:p-8 border border-stone-100 shadow-lg transition-all duration-1000 ${
              formVisible? 'animate-drop' : 'translate-y-[-80px] opacity-0'
            }`} style={{ animationDelay: '100ms' }}>
              <div className="text-center mb-6">
                <div className="inline-flex p-3 bg-amber-100 rounded-2xl mb-4">
                  <Calendar className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Schedule a Consultation</h3>
                <p className="text-slate-500 text-sm font-light">Let's discuss your luxury home vision</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-green-700 font-medium">Request submitted successfully!</p>
                      <p className="text-green-600 text-sm font-light">We'll contact you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-red-500">⚠</div>
                    <div>
                      <p className="text-red-700 font-medium">Submission failed</p>
                      <p className="text-red-600 text-sm font-light">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <form
                action="https://formspree.io/f/xeedzpbj"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-light"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-light"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-light"
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-light"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your vision..."
                    rows="3"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none font-light"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book Your Consultation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>

              <p className="text-center text-xs text-slate-400 mt-4 font-light">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}