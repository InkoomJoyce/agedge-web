import { useEffect, useRef, useState } from 'react'
import { Building2, Home, Warehouse, Factory, Store, Hotel, GraduationCap, Heart, Award, ChevronRight, ChevronLeft, Users } from 'lucide-react'

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [clientsIndex, setClientsIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef(null)
  const featuredAutoPlayRef = useRef(null)
  const clientsAutoPlayRef = useRef(null)

  const clientCategories = [
    {
      category: "Real Estate Developers",
      icon: Building2,
      description: "Trusted partners in creating landmark properties",
      count: "12+"
    },
    {
      category: "Corporate Clients",
      icon: Users,
      description: "Commercial spaces that inspire productivity",
      count: "25+"
    },
    {
      category: "Government Projects",
      icon: Building2,
      description: "Infrastructure that serves communities",
      count: "8+"
    },
    {
      category: "Private Homeowners",
      icon: Home,
      description: "Dream homes brought to life",
      count: "50+"
    },
    {
      category: "Hospitality",
      icon: Hotel,
      description: "Luxury hotels and resorts",
      count: "6+"
    },
    {
      category: "Retail",
      icon: Store,
      description: "Modern shopping destinations",
      count: "10+"
    }
  ]

  const featuredClients = [
    {
      id: 1,
      name: "Asante Industries",
      logo: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Corporate Clients",
      industry: "Manufacturing",
      projectCount: 3,
      since: 2024,
      description: "Leading industrial conglomerate in West Africa",
      testimonial: "AGEdge transformed our operations with world-class facilities."
    },
    {
      id: 2,
      name: "Osei Properties",
      logo: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Real Estate Developers",
      industry: "Real Estate",
      projectCount: 5,
      since: 2023,
      description: "Premium residential & commercial developers",
      testimonial: "The attention to detail and quality is unmatched."
    },
    {
      id: 3,
      name: "Heritage Bank Ghana",
      logo: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Corporate Clients",
      industry: "Finance",
      projectCount: 2,
      since: 2024,
      description: "Leading financial institution",
      testimonial: "Professionalism from start to finish."
    },
    {
      id: 4,
      name: "Accra City Hotel",
      logo: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Hospitality",
      industry: "Hospitality",
      projectCount: 2,
      since: 2025,
      description: "Luxury hospitality development",
      testimonial: "Exceeded our expectations in every way."
    }
  ]

  const allClients = [
    {
      id: 1,
      name: "Dawcons Ltd",
      logo: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=400",
      industry: "Construction",
      projectCount: 8,
      since: 2022
    },
    {
      id: 2,
      name: "Efua's Homes",
      logo: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400",
      industry: "Residential",
      projectCount: 12,
      since: 2023
    },
    {
      id: 3,
      name: "Tema Free Zone",
      logo: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400",
      industry: "Infrastructure",
      projectCount: 1,
      since: 2025
    },
    {
      id: 4,
      name: "Ghana Education Trust",
      logo: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=400",
      industry: "Education",
      projectCount: 4,
      since: 2023
    },
    {
      id: 5,
      name: "Kumasi Mall",
      logo: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=400",
      industry: "Retail",
      projectCount: 1,
      since: 2024
    },
    {
      id: 6,
      name: "Western Region Devt",
      logo: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400",
      industry: "Infrastructure",
      projectCount: 3,
      since: 2024
    },
    {
      id: 7,
      name: "Tech Ridge Ghana",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      industry: "Technology",
      projectCount: 1,
      since: 2025
    },
    {
      id: 8,
      name: "Dr. Kwame Mensah",
      logo: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400",
      industry: "Residential",
      projectCount: 1,
      since: 2025
    }
  ]

  const getChunks = (array, size) => {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  }

  const featuredChunks = getChunks(featuredClients, 2)
  const clientsChunks = getChunks(allClients, 4)

  const stats = {
    totalClients: allClients.length + featuredClients.length,
    repeatRate: "85%",
    industries: [...new Set([...featuredClients,...allClients].map(c => c.industry))].length,
    totalProjects: [...featuredClients,...allClients].reduce((sum, client) => sum + client.projectCount, 0)
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
    if (featuredChunks.length > 1) {
      featuredAutoPlayRef.current = setInterval(() => {
        handleFeaturedNext()
      }, 3000)
    }
    return () => clearInterval(featuredAutoPlayRef.current)
  }, [featuredIndex, featuredChunks.length])

  useEffect(() => {
    if (clientsChunks.length > 1) {
      clientsAutoPlayRef.current = setInterval(() => {
        handleClientsNext()
      }, 3000)
    }
    return () => clearInterval(clientsAutoPlayRef.current)
  }, [clientsIndex, clientsChunks.length])

  const handleFeaturedPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setFeaturedIndex((prev) => (prev === 0? featuredChunks.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
    clearInterval(featuredAutoPlayRef.current)
    featuredAutoPlayRef.current = setInterval(() => handleFeaturedNext(), 3000)
  }

  const handleFeaturedNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setFeaturedIndex((prev) => (prev === featuredChunks.length - 1? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleClientsPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setClientsIndex((prev) => (prev === 0? clientsChunks.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
    clearInterval(clientsAutoPlayRef.current)
    clientsAutoPlayRef.current = setInterval(() => handleClientsNext(), 3000)
  }

  const handleClientsNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setClientsIndex((prev) => (prev === clientsChunks.length - 1? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToFeaturedSlide = (index) => {
    if (isAnimating || index === featuredIndex) return
    setIsAnimating(true)
    setFeaturedIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToClientsSlide = (index) => {
    if (isAnimating || index === clientsIndex) return
    setIsAnimating(true)
    setClientsIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const clientsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AGEdge Global",
    "description": "Trusted by leading organizations across Ghana",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": stats.totalProjects
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden py-12 lg:py-16  bg-gradient-to-br from-slate-50 via-white to-amber-50/30"
        aria-label="Our Trusted Clients - Partners Across Ghana"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-800 mb-3">
              Our{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Valued Clients
              </span>
            </h2>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-3 font-light">
              Building lasting partnerships with industry leaders across Ghana's most prestigious sectors
            </p>

            <div className="flex justify-center gap-2 mt-6">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-12 h-px bg-amber-300"></div>
            </div>
          </div>

          {/* Stats Banner */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center p-5 bg-gradient-to-br from-white to-amber-50/50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-amber-100/50">
              <p className="text-3xl font-bold text-slate-800 mb-1">{stats.totalClients}+</p>
              <p className="text-xs text-slate-500 font-medium">Trusted Clients</p>
            </div>
            <div className="text-center p-5 bg-gradient-to-br from-white to-amber-50/50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-amber-100/50">
              <p className="text-3xl font-bold text-slate-800 mb-1">{stats.totalProjects}+</p>
              <p className="text-xs text-slate-500 font-medium">Projects Completed</p>
            </div>
            <div className="text-center p-5 bg-gradient-to-br from-white to-amber-50/50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-amber-100/50">
              <p className="text-3xl font-bold text-slate-800 mb-1">{stats.repeatRate}</p>
              <p className="text-xs text-slate-500 font-medium">Repeat Clients</p>
            </div>
            <div className="text-center p-5 bg-gradient-to-br from-white to-amber-50/50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-amber-100/50">
              <p className="text-3xl font-bold text-slate-800 mb-1">{stats.industries}+</p>
              <p className="text-xs text-slate-500 font-medium">Industries Served</p>
            </div>
          </div>

          {/* Featured Clients Carousel */}
          <div className={`mb-12 transition-all duration-1000 delay-300 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Featured Partnerships</h3>
              <p className="text-slate-500 text-sm">Proud to work with Ghana's most respected organizations</p>
            </div>

            <div className="relative">
              {featuredChunks.length > 1 && (
                <>
                  <button
                    onClick={handleFeaturedPrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    aria-label="Previous featured clients"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                  <button
                    onClick={handleFeaturedNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    aria-label="Next featured clients"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>
                </>
              )}

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${featuredIndex * 100}%)` }}
                >
                  {featuredChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="w-full flex-shrink-0 px-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        {chunk.map((client) => (
                          <div
                            key={client.id}
                            className="group relative bg-gradient-to-br from-white via-white to-amber-50/40 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-100/60 hover:border-amber-300 hover:-translate-y-1"
                          >
                            <div className="relative p-6">
                              {/* Logo with colored background */}
                              <div className="flex items-center justify-center h-28 mb-4 bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-xl group-hover:from-amber-50 group-hover:to-amber-100/50 transition-all duration-500">
                                <img
                                  src={client.logo}
                                  alt={`${client.name} logo - Trusted AGEdge client partner`}
                                  className="max-h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                />
                              </div>

                              <div className="text-center">
                                <h4 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-amber-700 transition-colors">{client.name}</h4>
                                <p className="text-amber-600 text-sm font-medium mb-2">{client.industry}</p>
                                <p className="text-slate-500 text-sm mb-3 font-light">{client.description}</p>

                                <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-3 mb-3 border border-amber-100/50">
                                  <p className="text-sm text-slate-700 italic font-light">"{client.testimonial}"</p>
                                </div>

                                <div className="flex justify-center gap-4 pt-3 border-t border-amber-100/50">
                                  <div className="text-center">
                                    <p className="text-xs text-slate-400">Projects</p>
                                    <p className="text-lg font-semibold text-slate-800">{client.projectCount}</p>
                                  </div>
                                  <div className="w-px bg-amber-200/50"></div>
                                  <div className="text-center">
                                    <p className="text-xs text-slate-400">Partner Since</p>
                                    <p className="text-lg font-semibold text-slate-800">{client.since}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {featuredChunks.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {featuredChunks.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToFeaturedSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === featuredIndex
                        ? 'w-8 h-2 bg-amber-500'
                          : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to featured slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* All Clients Carousel */}
          <div className={`transition-all duration-1000 delay-400 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Our Extended Family</h3>
              <p className="text-slate-500 text-sm">Every client is a partner in our journey of excellence</p>
            </div>

            <div className="relative">
              {clientsChunks.length > 1 && (
                <>
                  <button
                    onClick={handleClientsPrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    aria-label="Previous clients"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                  <button
                    onClick={handleClientsNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    aria-label="Next clients"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>
                </>
              )}

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${clientsIndex * 100}%)` }}
                >
                  {clientsChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="w-full flex-shrink-0 px-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {chunk.map((client) => (
                          <div
                            key={client.id}
                            className="group relative bg-gradient-to-br from-white to-amber-50/30 hover:to-amber-50/60 rounded-xl p-5 transition-all duration-300 border border-amber-100/50 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-center h-20 mb-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                              <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>

                            <div className="text-center">
                              <p className="text-sm font-semibold text-slate-800 mb-1 group-hover:text-amber-700 transition-colors">{client.name}</p>
                              <p className="text-xs text-amber-600 mb-2">{client.industry}</p>
                              <div className="flex justify-center gap-2 text-xs text-slate-400">
                                <span>{client.projectCount} projects</span>
                                <span>•</span>
                                <span>{client.since}</span>
                              </div>
                            </div>

                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-12 transition-all duration-300 rounded-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {clientsChunks.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {clientsChunks.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToClientsSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === clientsIndex
                        ? 'w-8 h-2 bg-amber-500'
                          : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to clients slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Industry Categories */}
          <div className={`mt-16 pt-10 border-t border-amber-100/50 transition-all duration-1000 delay-500 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Industries We Serve</h3>
              <p className="text-slate-500 text-sm">Expertise across Ghana's key economic sectors</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {clientCategories.map((category, idx) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.category}
                    className="group text-center p-5 rounded-2xl bg-gradient-to-br from-white to-amber-50/30 hover:to-amber-50/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-amber-100/50 hover:border-amber-300 cursor-pointer"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 group-hover:from-amber-200 group-hover:to-amber-100 transition-all duration-500 mb-3 shadow-sm">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm group-hover:text-amber-700 transition-colors">{category.category}</h4>
                    <p className="text-xs text-slate-500">{category.count}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}