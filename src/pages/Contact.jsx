import { useState, useEffect, useRef } from 'react'

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

  // Visibility states for animations
  const [heroVisible, setHeroVisible] = useState(false)
  const [socialVisible, setSocialVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [imageMapVisible, setImageMapVisible] = useState(false)

  const heroRef = useRef(null)
  const socialRef = useRef(null)
  const cardsRef = useRef(null)
  const formRef = useRef(null)
  const imageMapRef = useRef(null)

  // REPLACE THESE WITH YOUR ACTUAL FORMSPREE IDs
  const FORMSPREE_IDS = {
    contact: 'xpqnbrvy',
    consultation: 'mojbrwgl',
    quote: 'xqejnbra'
  }

  const contactInfo = {
    phone: ["+233 54 886 9192", "+233 24 XXX XXXX"],
    email: ["info@agedgeglobal.com", "projects@agedgeglobal.com"],
    address: "Number 1 Beige Street, Azumah, New Weija, Accra",
    gps: "GS-0065-2998",
    postal: "P. O. Box CT 1061, Cantonments, Accra",
    hours: {
      weekdays: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 2:00 PM",
      sunday: "Closed"
    }
  }

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com/agedgeglobal", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", color: "hover:text-blue-600" },
    { name: "Instagram", url: "https://instagram.com/agedgeglobal", icon: "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5z M12 8a4 4 0 100 8 4 4 0 000-8z", color: "hover:text-pink-600" },
    { name: "LinkedIn", url: "https://linkedin.com/company/agedgeglobal", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z", color: "hover:text-blue-700" },
    { name: "Twitter", url: "https://twitter.com/agedgeglobal", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", color: "hover:text-blue-400" },
    { name: "YouTube", url: "https://youtube.com/@agedgeglobal", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z", color: "hover:text-red-600" },
    { name: "TikTok", url: "https://tiktok.com/@agedgeglobal", icon: "M19.59 6.69a4.1 4.1 0 01-3.57-1.87 4.1 4.1 0 00-3.57 1.87 4.1 4.1 0 01-3.57 1.87 4.1 4.1 0 01-3.57-1.87v7.5a4.1 4.1 0 01-3.57 1.87 4.1 4.1 0 01-3.57-1.87 4.1 4.1 0 01-3.57 1.87 4.1 4.1 0 01-3.57-1.87v-7.5", color: "hover:text-black" },
    { name: "WhatsApp", url: "https://wa.me/233548869192", icon: "M3 21l1.65-3.8a9 9 0 111.4 1.4L3 21z M9 12h.01M12 12h.01M15 12h.01", color: "hover:text-green-500" },
    { name: "Pinterest", url: "https://pinterest.com/agedgeglobal", icon: "M9 3a6 6 0 000 12 6 6 0 100-12z M9 3v12 M15 9a6 6 0 01-6 6", color: "hover:text-red-700" },
    { name: "Telegram", url: "https://t.me/agedgeglobal", icon: "M22 2L15 10 M22 2l-7 12-7-5-8-3 22-4z M22 2l-4 13-7-5-8-3 22-4z", color: "hover:text-blue-500" },
    { name: "Snapchat", url: "https://snapchat.com/add/agedgeglobal", icon: "M12 3a6 6 0 00-6 6v2c0 2.2-1.8 4-4 4h20c-2.2 0-4-1.8-4-4V9a6 6 0 00-6-6z M8 17v2a4 4 0 008 0v-2", color: "hover:text-yellow-500" },
    { name: "Threads", url: "https://threads.net/@agedgeglobal", icon: "M12 2a10 10 0 00-10 10c0 4.4 2.9 8.2 6.9 9.5a6 6 0 016.2-3.5 10 10 0 006.9-6 10 10 0 00-10-10z M12 8a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z", color: "hover:text-purple-600" }
  ]

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

  // Intersection Observers for side animations
  useEffect(() => {
    const options = { threshold: 0.15 }

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
      createObserver(setSocialVisible, socialRef),
      createObserver(setCardsVisible, cardsRef),
      createObserver(setFormVisible, formRef),
      createObserver(setImageMapVisible, imageMapRef)
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

  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes slideInLeft {
          0% { transform: translateX(-80px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          0% { transform: translateX(80px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.1); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.2); }
        }
        .animate-slide-left {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-slide-right {
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/28973399/pexels-photo-28973399.jpeg"
            alt="Contact AGEdge Global - Architecture and Construction Experts"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent" />
        </div>
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
          heroVisible ? 'animate-slide-left opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            We're Here to Help
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Contact{' '}
            <span className="font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Let's discuss your vision and bring it to life
          </p>
          <div className="flex justify-center gap-3 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Social Media Section - Glassmorphism */}
      <div ref={socialRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200/50 transition-all duration-1000 ${
          socialVisible ? 'animate-slide-right opacity-100' : 'opacity-0'
        }`}>
          <p className="text-center text-gray-600 font-medium mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-green-300"></span>
            Connect With Us
            <span className="w-8 h-px bg-green-300"></span>
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                aria-label={social.name}
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Contact Info Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className={`group p-6 bg-white rounded-2xl border border-gray-200/50 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
            cardsVisible ? 'animate-slide-left opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-green-50/0 to-green-100/0 group-hover:from-green-50/30 group-hover:via-green-50/20 group-hover:to-green-100/30 transition-all duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-all duration-500 group-hover:scale-110">
                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Call Us</h3>
              {contactInfo.phone.map((phone, idx) => (
                <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-gray-600 hover:text-green-600 transition-colors mb-1 text-sm">
                  {phone}
                </a>
              ))}
              <p className="text-xs text-gray-400 mt-3">Mon-Sat, 8AM - 6PM</p>
            </div>
          </div>

          {/* Email Card */}
          <div className={`group p-6 bg-white rounded-2xl border border-gray-200/50 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
            cardsVisible ? 'animate-slide-left opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-green-50/0 to-green-100/0 group-hover:from-green-50/30 group-hover:via-green-50/20 group-hover:to-green-100/30 transition-all duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-all duration-500 group-hover:scale-110">
                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Email Us</h3>
              {contactInfo.email.map((email, idx) => (
                <a key={idx} href={`mailto:${email}`} className="block text-gray-600 hover:text-green-600 transition-colors mb-1 text-sm">
                  {email}
                </a>
              ))}
              <p className="text-xs text-gray-400 mt-3">Response within 24 hours</p>
            </div>
          </div>

          {/* Visit Card */}
          <div className={`group p-6 bg-white rounded-2xl border border-gray-200/50 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
            cardsVisible ? 'animate-slide-left opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-green-50/0 to-green-100/0 group-hover:from-green-50/30 group-hover:via-green-50/20 group-hover:to-green-100/30 transition-all duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-all duration-500 group-hover:scale-110">
                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{contactInfo.address}</p>
              <p className="text-gray-500 text-xs mt-2 font-mono bg-gray-100 px-3 py-1 rounded-lg inline-block">GPS: {contactInfo.gps}</p>
            </div>
          </div>
        </div>

        {/* Form Tabs - Pill Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { id: 'contact', label: 'Contact Us' },
            { id: 'consultation', label: 'Book Consultation' },
            { id: 'quote', label: 'Request Quote' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveForm(tab.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeForm === tab.id
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-slide-right">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-green-700 font-medium">Message sent successfully!</p>
                <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-red-700 font-medium">Submission failed</p>
                <p className="text-red-600 text-sm">{errorDetails || "Please try again or contact us directly."}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form Section - Glassmorphism */}
        <div ref={formRef} className={`max-w-2xl mx-auto transition-all duration-1000 ${
          formVisible ? 'animate-slide-right opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-xl">
            {/* Contact Form */}
            {activeForm === 'contact' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                </div>
                <input type="hidden" name="form_type" value="contact" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - AGEdge Global" />
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_gotcha" value="" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3.5 rounded-xl hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}

            {/* Consultation Form */}
            {activeForm === 'consultation' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Book a Consultation</h3>
                </div>
                <input type="hidden" name="form_type" value="consultation" />
                <input type="hidden" name="_subject" value="New Consultation Request - AGEdge Global" />
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_gotcha" value="" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                </div>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
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
                  rows="3"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3.5 rounded-xl hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Request Consultation'}
                </button>
              </form>
            )}

            {/* Quote Form */}
            {activeForm === 'quote' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Request a Quote</h3>
                </div>
                <input type="hidden" name="form_type" value="quote" />
                <input type="hidden" name="_subject" value="NEW QUOTE REQUEST - AGEdge Global" />
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_gotcha" value="" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Project Location"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                </div>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
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
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
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
                  rows="3"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3.5 rounded-xl hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Image and Map Section - Premium Gallery */}
        <div ref={imageMapRef} className="grid md:grid-cols-2 gap-6 mt-12">
          <div className={`group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ${
            imageMapVisible ? 'animate-slide-left opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0ms' }}>
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/27626186/pexels-photo-27626186.jpeg"
                alt="Modern architectural design by AGEdge Global"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-green-400"></div>
                  <span className="text-white/80 text-xs font-medium tracking-wider uppercase">Featured Project</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ${
            imageMapVisible ? 'animate-slide-right opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '100ms' }}>
            <div className="relative overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.042158715487!2d-0.294623684734369!3d5.603654995860266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a6f6b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sAccra!5e0!3m2!1sen!2sgh!4v1234567890!5m2!1sen!2sgh"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="AGEdge Global Office Location"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 