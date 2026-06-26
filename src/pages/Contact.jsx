import { useState, useEffect, useRef } from 'react'
import { 
  Phone, Mail, MapPin, Clock, Calendar, 
  User, MessageCircle, ArrowRight, CheckCircle,
  Building2
} from 'lucide-react'

export default function Contact() {
  const [activeForm, setActiveForm] = useState('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    projectType: '',
    budget: '',
    address: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorDetails, setErrorDetails] = useState('')

  const [heroVisible, setHeroVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  const heroRef = useRef(null)
  const contentRef = useRef(null)

  const FORMSPREE_IDS = {
    contact: 'xpqnbrvy',
    consultation: 'mojbrwgl',
    quote: 'xqejnbra'
  }

  const contactInfo = {
    phone: ["+233 54 886 9192", "+233 24 XXX XXXX"],
    email: ["info@agedgeglobal.com", "projects@agedgeglobal.com"],
    address: "Number 1 Beige Street, Azumah, New Weija, Accra",
    gps: "GS-0065-2998"
  }

  const projectTypes = [
    "Residential Villa",
    "Commercial Building",
    "Educational Facility",
    "Multi-Family Housing",
    "Renovation Project",
    "Material Supply"
  ]

  const budgetRanges = [
    "Under $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000 - $1,000,000",
    "Over $1,000,000"
  ]

  // SEO Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AGEdge Global - Architecture and Construction Experts",
    "description": "Contact AGEdge Global for architecture, construction, real estate, and building services in Ghana. Get a free consultation for your project.",
    "url": "https://agedgeglobal.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "AGEdge Global",
      "telephone": "+233548869192",
      "email": "info@agedgeglobal.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Number 1 Beige Street, Azumah, New Weija",
        "addressLocality": "Accra",
        "addressCountry": "GH"
      }
    }
  }

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
      createObserver(setHeroVisible, heroRef),
      createObserver(setContentVisible, contentRef)
    ]

    return () => observers.forEach(obs => obs && obs.disconnect())
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
    setErrorDetails('')

    const formElement = e.target
    const formDataObj = new FormData(formElement)
    const formType = formDataObj.get('form_type')
    
    const formspreeId = FORMSPREE_IDS[formType] || FORMSPREE_IDS.contact

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formDataObj,
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
          preferredDate: '',
          projectType: '',
          budget: '',
          address: ''
        })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        const errorData = await res.json()
        setSubmitStatus('error')
        setErrorDetails(errorData.error || `Server responded with ${res.status}`)
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorDetails(error.message || 'Network error. Please check your connection.')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      items: contactInfo.phone,
      action: (item) => `tel:${item.replace(/\s/g, '')}`,
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      hoverBg: "group-hover:bg-green-500",
      ariaLabel: "Call AGEdge Global"
    },
    {
      icon: Mail,
      title: "Email Us",
      items: contactInfo.email,
      action: (item) => `mailto:${item}`,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-500",
      ariaLabel: "Email AGEdge Global"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      items: [contactInfo.address],
      action: (item) => `https://maps.google.com/?q=${encodeURIComponent(item)}`,
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-500",
      extra: contactInfo.gps,
      ariaLabel: "Visit AGEdge Global office"
    }
  ]

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <div className="relative min-h-screen bg-gray-50 overflow-hidden pb-12 md:pb-16">
        {/* Green Background Highlights - Optimized for mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-32 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-32 w-56 sm:w-80 h-56 sm:h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-32 right-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute top-2/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Section - Mobile optimized */}
        <header ref={heroRef} className="relative h-[35vh] min-h-[280px] sm:h-[40vh] sm:min-h-[300px] flex items-center justify-center bg-gray-900 pt-16 md:pt-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/28973399/pexels-photo-28973399.jpeg"
              alt="Contact AGEdge Global - Architecture and Construction Experts in Ghana"
              className="w-full h-full object-cover opacity-25"
              loading="eager"
              fetchPriority="high"
              width="1600"
              height="900"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
          </div>
          <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
              </span>
              <span className="hidden xs:inline">We're Here to Help</span>
              <span className="xs:hidden">Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 sm:mb-4">
              Get in{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light px-2">
              Let's discuss your vision and bring it to life
            </p>
            <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-8">
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"></div>
            </div>
          </div>
        </header>

        {/* Main Content - Mobile Optimized */}
        <main ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 -mt-6 sm:-mt-8">
          <div className={`grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Left Column - Contact Cards (Vertical - Mobile First) */}
            <div className="lg:col-span-4 space-y-3 sm:space-y-4">
              {contactCards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 via-gray-50/0 to-gray-100/0 group-hover:bg-opacity-30 transition-all duration-500" />
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className={`p-2 sm:p-3 rounded-xl ${card.bgColor} ${card.hoverBg} transition-all duration-500 flex-shrink-0`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${card.textColor} group-hover:text-white transition-colors duration-500`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{card.title}</h3>
                        {card.items.map((item, i) => (
                          <a
                            key={i}
                            href={card.action(item)}
                            target={card.title === "Visit Us" ? "_blank" : undefined}
                            rel={card.title === "Visit Us" ? "noopener noreferrer" : undefined}
                            className="block text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm truncate"
                            aria-label={`${card.ariaLabel} - ${item}`}
                          >
                            {item}
                          </a>
                        ))}
                        {card.extra && (
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-1 font-mono">{card.extra}</p>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1 sm:mt-2" />
                    </div>
                  </div>
                )
              })}

              {/* Hours Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl bg-amber-50 flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Mon-Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-xs sm:text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (Mobile Optimized) */}
            <div className="lg:col-span-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200/50 shadow-lg">
                {/* Form Tabs - Mobile Optimized */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {[
                    { id: 'contact', label: '📧 Contact', mobileLabel: '📧 Contact Us' },
                    { id: 'consultation', label: '📅 Consultation', mobileLabel: '📅 Book Consultation' },
                    { id: 'quote', label: '💰 Quote', mobileLabel: '💰 Request Quote' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveForm(tab.id)}
                      className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border-2 ${
                        activeForm === tab.id
                          ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-500/25'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border-green-500 hover:border-green-600'
                      }`}
                      aria-label={`Switch to ${tab.label} form`}
                    >
                      <span className="hidden xs:inline">{tab.label}</span>
                      <span className="xs:hidden">{tab.mobileLabel}</span>
                    </button>
                  ))}
                </div>

                {/* Success/Error Messages - Mobile Optimized */}
                {submitStatus === 'success' && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm sm:text-base font-medium text-green-700">Message sent successfully!</p>
                        <p className="text-xs sm:text-sm text-green-600">We'll contact you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm sm:text-base font-medium text-red-700">Submission failed</p>
                        <p className="text-xs sm:text-sm text-red-600">{errorDetails || "Please try again."}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Form - Mobile Optimized */}
                {activeForm === 'contact' && (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">Send us a Message</h3>
                    </div>
                    <input type="hidden" name="form_type" value="contact" />
                    <input type="hidden" name="_subject" value="New Contact Form Submission - AGEdge Global" />
                    <input type="hidden" name="_replyto" value={formData.email} />
                    <input type="hidden" name="_gotcha" value="" />
                    
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={3}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none text-xs sm:text-sm"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 sm:py-3.5 rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 text-sm"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}

                {/* Consultation Form - Mobile Optimized */}
                {activeForm === 'consultation' && (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">Book a Consultation</h3>
                    </div>
                    <input type="hidden" name="form_type" value="consultation" />
                    <input type="hidden" name="_subject" value="New Consultation Request - AGEdge Global" />
                    <input type="hidden" name="_replyto" value={formData.email} />
                    <input type="hidden" name="_gotcha" value="" />
                    
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={2}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none text-xs sm:text-sm"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 sm:py-3.5 rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 text-sm"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Submitting...
                        </span>
                      ) : 'Request Consultation'}
                    </button>
                  </form>
                )}

                {/* Quote Form - Mobile Optimized */}
                {activeForm === 'quote' && (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">Request a Quote</h3>
                    </div>
                    <input type="hidden" name="form_type" value="quote" />
                    <input type="hidden" name="_subject" value="NEW QUOTE REQUEST - AGEdge Global" />
                    <input type="hidden" name="_replyto" value={formData.email} />
                    <input type="hidden" name="_gotcha" value="" />
                    
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Project Location"
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-xs sm:text-sm"
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Project Details..."
                      rows={2}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none text-xs sm:text-sm"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 sm:py-3.5 rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 text-sm"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Submitting...
                        </span>
                      ) : 'Request Quote'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}