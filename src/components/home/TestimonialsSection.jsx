import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, Building2, Calendar, Award } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef(null)
  const autoPlayRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Kwame Asante",
      role: "CEO, Asante Industries",
      location: "Accra, Ghana",
      project: "40,000 sq ft Warehouse - Tema",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "AGEdge didn't just build our warehouse—they transformed our entire logistics operation. Their integrated approach saved us 6 months and 15% on costs. The materials quality and construction precision exceeded every expectation.",
      rating: 5,
      year: 2025,
      tags: ["Commercial", "Industrial", "Timeline"]
    },
    {
      id: 2,
      name: "Mrs. Abena Osei",
      role: "Principal, Osei Properties",
      location: "East Legon, Accra",
      project: "Luxury Villas - The Pearl Estate",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "The attention to architectural detail is remarkable. AGEdge understood our vision for luxury living and delivered beyond imagination. From design to finishing, their team's professionalism is unmatched in Ghana's real estate market.",
      rating: 5,
      year: 2025,
      tags: ["Residential", "Luxury", "Design"]
    },
    {
      id: 3,
      name: "Ing. Michael Dawson",
      role: "Project Director, Dawcons Ltd",
      location: "Kumasi, Ghana",
      project: "Mixed-Use Development - Asokwa",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Working with a single team for architecture, materials, construction, and real estate streamlined everything. AGEdge's project management is world-class. They delivered ahead of schedule with zero quality compromises.",
      rating: 5,
      year: 2024,
      tags: ["Commercial", "Mixed-Use", "Efficiency"]
    },
    {
      id: 4,
      name: "Mrs. Efua Mensah",
      role: "Founder, Efua's Homes",
      location: "Takoradi, Ghana",
      project: "Affordable Housing Project",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "As a developer focused on affordable housing, finding cost-effective yet quality materials is crucial. AGEdge's materials division provided premium supplies at competitive prices. Their end-to-end service is a game-changer.",
      rating: 5,
      year: 2024,
      tags: ["Affordable", "Materials", "Value"]
    },
    {
      id: 5,
      name: "Hon. Samuel Boateng",
      role: "MP, Municipal Assembly",
      location: "Cape Coast, Ghana",
      project: "Community Center Complex",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "AGEdge delivered our community center on budget despite challenging coastal conditions. Their climate-smart design and local material sourcing showed true understanding of Ghana's environment. Exceptional public sector partner.",
      rating: 5,
      year: 2024,
      tags: ["Public", "Community", "Climate-Smart"]
    },
    {
      id: 6,
      name: "Arch. Yaa Asantewaa",
      role: "Lead Architect, Design Plus",
      location: "Accra, Ghana",
      project: "Corporate HQ - Airport City",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "As an architect, I'm critical of execution. AGEdge translated our complex biophilic design into reality flawlessly. Their construction team respects architectural intent — rare in this market. True design-build excellence.",
      rating: 5,
      year: 2025,
      tags: ["Corporate", "Biophilic", "Precision"]
    },
    {
      id: 7,
      name: "Mr. Kofi Adomako",
      role: "MD, Adomako Logistics",
      location: "Tema, Ghana",
      project: "Logistics Hub Expansion",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Phase 1 was so successful we immediately contracted AGEdge for Phase 2 and 3. Their materials supply chain alone saved us 3 weeks. One vendor, zero headaches, maximum accountability. This is how construction should work.",
      rating: 5,
      year: 2024,
      tags: ["Logistics", "Expansion", "Reliability"]
    },
    {
      id: 8,
      name: "Dr. Akosua Frimpong",
      role: "Director, Frimpong Medical",
      location: "Spintex, Accra",
      project: "Private Medical Facility",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Healthcare facilities demand precision. AGEdge delivered sterile environments, specialized MEP, and healing aesthetics. Their understanding of medical-grade construction standards impressed our entire board. Highly recommended.",
      rating: 5,
      year: 2025,
      tags: ["Healthcare", "Specialized", "Standards"]
    },
    {
      id: 9,
      name: "Mr. Emmanuel Tetteh",
      role: "Chairman, Tetteh Group",
      location: "Cantonments, Accra",
      project: "Luxury Apartments - The Ridge",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "We've worked with many contractors. AGEdge is different — they think like developers. Value engineering, market positioning, ROI optimization. They didn't just build our apartments, they maximized our investment returns.",
      rating: 5,
      year: 2024,
      tags: ["Investment", "ROI", "Developer"]
    },
    {
      id: 10,
      name: "Ms. Nana Ama Serwaa",
      role: "Owner, Serwaa Retail Chain",
      location: "Osu, Accra",
      project: "Flagship Store + Warehouse",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "From concept sketches to grand opening in 8 months. AGEdge handled our retail design, construction, and even helped source fixtures through their materials network. Seamless experience for a first-time commercial developer.",
      rating: 5,
      year: 2025,
      tags: ["Retail", "Fast-Track", "Turnkey"]
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

  // Fixed: Auto-play every 5 seconds - no dependency on currentIndex
  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1? 0 : prev + 1))
  }, [testimonials.length])

  useEffect(() => {
    if (isPaused) return

    autoPlayRef.current = setInterval(() => {
      goToNextSlide()
    }, 5000) // 5 seconds

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isPaused, goToNextSlide])

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === testimonials.length - 1? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AGEdge Global Building Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "10",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.content,
      "datePublished": `${t.year}-01-01`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-stone-50"
        aria-label="Client Testimonials - What Our Satisfied Clients Say"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-stone-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-10 transition-all duration-1000 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Trusted by Industry Leaders</span>
            </div> */}

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-3">
              What Our{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Satisfied Clients
              </span>
              <span className="block text-2xl md:text-3xl font-light text-slate-400 mt-2">
                Are Saying
              </span>
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto mt-3">
              Real stories from real clients across Ghana. Discover why industry leaders trust AGEdge for their most important projects.
            </p>

            <div className="flex justify-center gap-2 mt-6">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-3 h-px bg-amber-400"></div>
              <div className="w-3 h-px bg-amber-500"></div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                      <div className="absolute top-6 right-6 opacity-5">
                        <Quote className="w-24 h-24 text-slate-900" />
                      </div>

                      <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                        <div className="space-y-6">
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>

                          <p className="text-slate-700 text-lg leading-relaxed italic">
                            "{testimonial.content}"
                          </p>

                          <div className="flex items-center gap-4 pt-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-md opacity-50" />
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 text-lg">{testimonial.name}</p>
                              <p className="text-amber-600 text-sm font-medium">{testimonial.role}</p>
                              <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                                <Building2 className="w-3 h-3" />
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-stone-50 to-amber-50/30 rounded-2xl p-6 space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-amber-100 rounded-lg">
                              <Award className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wider">Featured Project</p>
                              <p className="font-semibold text-slate-900">{testimonial.project}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {testimonial.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 shadow-sm border border-slate-100"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-slate-200">
                            <p className="text-xs text-slate-400 flex items-center gap-2">
                              <Calendar className="w-3 h-3" />
                              Completed in {testimonial.year}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-full ${
                    idx === currentIndex
                     ? 'w-8 h-2 bg-amber-500'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className={`mt-12 text-center transition-all duration-1000 delay-500 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* <div className="inline-flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-amber-400" />
                <span>Verified Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-amber-400" />
                <span>Real Client Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-amber-400" />
                <span>Updated Weekly</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}