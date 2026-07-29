import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Added descriptive alt text for each image - critical for SEO
  const images = [
    {
      url: 'https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg',
      alt: 'Modern architecture office building in Accra Ghana by AGEdge Global'
    },
    {
      url: 'https://images.pexels.com/photos/28681443/pexels-photo-28681443.jpeg',
      alt: 'Luxury residential apartment complex construction Ghana'
    },
    // {
    //   url: 'https://images.pexels.com/photos/28350363/pexels-photo-28350363.jpeg',
    //   alt: 'Commercial skyscraper architecture project by AGEdge'
    // },
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      alt: 'Contemporary home interior design Ghana real estate'
    },
    {
      url: 'https://images.pexels.com/photos/36394726/pexels-photo-36394726.jpeg',
      alt: 'Modern villa exterior with pool Accra residential project'
    },
    {
      url: 'https://images.pexels.com/photos/26886878/pexels-photo-26886878.jpeg',
      alt: 'Luxury living room construction and materials Ghana'
    },
    {
      url: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg',
      alt: 'Real estate property exterior design by AGEdge Global'
    },
    {
      url: 'https://images.pexels.com/photos/30945258/pexels-photo-30945258.jpeg',
      alt: 'Modern kitchen construction materials Ghana'
    },
    {
      url: 'https://images.pexels.com/photos/36871609/pexels-photo-36871609.jpeg',
      alt: 'Architectural building facade Accra commercial project'
    },
    // {
    //   url: 'https://images.pexels.com/photos/29334668/pexels-photo-29334668.png',
    //   alt: 'Luxury real estate property for sale Ghana AGEdge'
    // },
  ]

  // Preload first image for LCP
  useEffect(() => {
    const img = new Image()
    img.src = images[0].url
  }, [])

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const handleSlideChange = (newSlide) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(newSlide)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000) // Match the transition duration
  }

  const nextSlide = () => {
    if (isTransitioning) return
    handleSlideChange((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    handleSlideChange((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return
    handleSlideChange(index)
  }

  return (
    <section className="relative bg-black text-white pt-20 h-screen overflow-hidden" aria-label="AGEdge Global Hero">
      {/* Background Images - Zoom Out Transition */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchpriority={index === 0 ? 'high' : 'low'}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" aria-hidden="true" />

      {/* Content - H1 is now keyword optimized */}
      <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Architecture, Construction & Real Estate 
          </h1>
          <p className="text-xl md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            AGEdge Global delivers end-to-end building solutions across Ghana. From architectural design to construction and property development.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-green-500 transition shadow-lg"
              aria-label="View AGEdge construction and real estate projects"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="bg-black/40 backdrop-blur-sm border-2 border-green-500 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              aria-label="Contact AGEdge to start your construction project"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-green-500 backdrop-blur-sm p-3 rounded-full transition z-10"
        aria-label="Previous project image"
        disabled={isTransitioning}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-green-500 backdrop-blur-sm p-3 rounded-full transition z-10"
        aria-label="Next project image"
        disabled={isTransitioning}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <nav aria-label="Hero image gallery navigation" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
            aria-label={`Go to project image ${index + 1} of ${images.length}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
            disabled={isTransitioning}
          />
        ))}
      </nav>
    </section>
  )
}