 import { useEffect, useRef, useState } from 'react'
import { Send, Mail, CheckCircle, XCircle, Users, TrendingUp, Award, Sparkles, Bell, MessageCircle, Heart } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // 'idle', 'loading', 'success', 'error'
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  const FORMSPREE_ID = 'xeedzpbj' // Replace with your actual Formspree ID
  const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`

  const benefits = [
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Latest trends in architecture & construction"
    },
    {
      icon: Award,
      title: "Exclusive Updates",
      description: "New projects and company milestones"
    },
    {
      icon: Users,
      title: "Expert Tips",
      description: "Professional advice from our team"
    },
    {
      icon: Sparkles,
      title: "Early Access",
      description: "Be first to know about new services"
    }
  ]

  const stats = {
    subscribers: 2847,
    monthlyEmails: 4,
    openRate: "68%"
  }

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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
      return
    }

    setStatus('loading')

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Newsletter Subscriber',
          _replyto: email
        })
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus(null), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(null), 3000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
    }
  }

  const newsletterSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AGEdge Global",
    "description": "Subscribe to our newsletter for architecture insights and company updates",
    "email": "newsletter@agedge.com",
    "potentialAction": {
      "@type": "SubscribeAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://agedge.com/newsletter",
        "inLanguage": "en",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsletterSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 bg-white"
        aria-label="Newsletter Signup - Stay Updated with AGEdge Global"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <div className={`text-center mb-10 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-800 mb-3">
              Join Our{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Newsletter
              </span>
            </h2>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-3 font-light">
              Get exclusive architecture insights, project updates, and expert tips delivered to your inbox
            </p>

            <div className="flex justify-center gap-2 mt-6">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-12 h-px bg-amber-300"></div>
            </div>
          </div>

          {/* Stats Badges */}
          <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-full border border-stone-200">
              <Users className="w-4 h-4 text-amber-600" />
              <span className="text-slate-700 text-sm">{stats.subscribers.toLocaleString()}+ Subscribers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-full border border-stone-200">
              <Mail className="w-4 h-4 text-amber-600" />
              <span className="text-slate-700 text-sm">{stats.monthlyEmails} Emails/Month</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-full border border-stone-200">
              <TrendingUp className="w-4 h-4 text-amber-600" />
              <span className="text-slate-700 text-sm">{stats.openRate} Open Rate</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-amber-600" />
                  Why Subscribe?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) => {
                    const Icon = benefit.icon
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-amber-100 rounded-lg">
                          <Icon className="w-4 h-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-slate-800 font-medium text-sm">{benefit.title}</p>
                          <p className="text-slate-500 text-xs">{benefit.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-stone-50 to-white rounded-2xl p-6 border border-stone-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 text-amber-500/50 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm italic">
                      "The AGEdge newsletter has become my go-to resource for construction trends in Ghana. Highly recommended!"
                    </p>
                    <p className="text-amber-600 text-sm font-medium mt-3">
                      — Kwame Asante, Real Estate Developer
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>No spam. Unsubscribe anytime.</span>
                </div>
                <div className="w-px h-4 bg-stone-300 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>Privacy guaranteed.</span>
                </div>
              </div>
            </div>

            {/* Right Column - Signup Form */}
            <div className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-lg">
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-in">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <p className="text-green-700 font-medium">Successfully subscribed!</p>
                        <p className="text-green-600/80 text-sm">Check your inbox for confirmation.</p>
                      </div>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-in">
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <div>
                        <p className="text-red-700 font-medium">Subscription failed</p>
                        <p className="text-red-600/80 text-sm">Please check your email and try again.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex p-3 bg-amber-100 rounded-2xl mb-4">
                    <Mail className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Subscribe Now
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Join 2,800+ professionals getting weekly insights
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe Now
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-slate-400 text-xs text-center mb-3">
                    What you'll receive:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-xs text-slate-600">
                      📐 Design Trends
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-xs text-slate-600">
                      🏗 Project Spotlights
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-xs text-slate-600">
                      💡 Expert Tips
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-xs text-slate-600">
                      🎉 Exclusive Events
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}