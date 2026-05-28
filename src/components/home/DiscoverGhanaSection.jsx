import { useEffect, useRef, useState } from 'react'
import { MapPin, Building2, Calendar, Users, Star, Award, Compass, Heart, ChevronRight, Clock, Ruler, Sun, Wind, Trees, ArrowRight } from 'lucide-react'

export default function DiscoverGhanaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  const building = {
    name: "Independence Arch",
    location: "Accra, Ghana",
    year: "1961",
    architect: "Theodora Salome Okoh (Design)",
    description: "The Independence Arch stands as Ghana's most iconic monument, symbolizing the nation's freedom from colonial rule. Located in Black Star Square, this magnificent structure commemorates Ghana's historic independence on March 6, 1957 - the first sub-Saharan African country to gain independence.",
    longDescription: "Designed as part of Ghana's visionary post-independence architecture, the Independence Arch represents more than just a monument—it embodies the spirit of African liberation and national pride. The arch features striking modernist design elements that blend with traditional Ghanaian symbolism. Flanked by the Black Star Gate and the Liberation Day Monument, it forms a powerful architectural trilogy that tells the story of Ghana's journey to freedom.",
    features: [
      { icon: Ruler, label: "Height", value: "30 meters" },
      { icon: Calendar, label: "Completed", value: "1961" },
      { icon: MapPin, label: "Location", value: "Black Star Square, Accra" },
      { icon: Users, label: "Annual Visitors", value: "500,000+" }
    ],
    culturalSignificance: [
      "Symbol of Ghanaian independence and sovereignty",
      "Hosts annual Independence Day celebrations (March 6th)",
      "Represents Pan-African unity and liberation",
      "UNESCO World Heritage Site nominee",
      "Central feature of Black Star Square"
    ],
    architecturalDetails: [
      "Modernist architectural style with brutalist influences",
      "Five-star pentagram design element (Black Star of Africa)",
      "Reinforced concrete construction",
      "Panoramic viewing platform",
      "Integrated monument plaza"
    ],
    visitorInfo: {
      bestTime: "December to March (Dry season)",
      hours: "9:00 AM - 6:00 PM Daily",
      tips: "Visit during Independence Day celebrations for cultural performances"
    }
  }

  // Similar notable buildings for reference
  const similarBuildings = [
    {
      name: "Kwame Nkrumah Mausoleum",
      location: "Accra",
      image: "https://images.pexels.com/photos/28904657/pexels-photo-28904657.jpeg",
      era: "1992"
    },
    {
      name: "Osu Castle",
      location: "Accra",
      image: "https://images.pexels.com/photos/245436/pexels-photo-245436.jpeg",
      era: "17th Century"
    },
    {
      name: "National Theatre",
      location: "Accra",
      image: "https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg",
      era: "1992"
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

  // Schema markup
  const landmarkSchema = {
    "@context": "https://schema.org",
    "@type": "LandmarksOrHistoricalBuildings",
    "name": building.name,
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressCountry": "GH"
      }
    },
    "description": building.description,
    "dateCreated": building.year,
    "numberOfVisitors": "500000",
    "significantEvent": "Ghana Independence Day Celebrations"
  }

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landmarkSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden py-20 lg:py-28 bg-white"
        aria-label="Discover Ghana - Iconic Architecture & Landmarks"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-50 rounded-full blur-3xl opacity-30" />
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
              <Compass className="w-4 h-4" />
              <span>Discover Ghana's Heritage</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-4">
              Iconic{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Architecture
              </span>
              <span className="block text-2xl md:text-3xl font-light text-gray-400 mt-2">
                That Defines a Nation
              </span>
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Explore Ghana's most celebrated landmarks and the stories they tell about our rich cultural heritage
            </p>

            <div className="flex justify-center gap-2 mt-8">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-12 h-px bg-amber-300"></div>
            </div>
          </div>

          {/* Main Feature */}
          <div className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="https://images.pexels.com/photos/28904657/pexels-photo-28904657.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt={`${building.name} - Iconic landmark in ${building.location}, Ghana`}
                  className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">{building.name} • {building.location}</p>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-3">
                {similarBuildings.map((item, idx) => (
                  <div key={idx} className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs font-medium text-center px-2">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Title & Location */}
              <div>
                <div className="flex items-center gap-2 text-amber-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{building.location}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {building.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Est. {building.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>National Monument</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {building.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {building.longDescription}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {building.features.map((feature, idx) => {
                  const Icon = feature.icon
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <Icon className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{feature.label}</p>
                        <p className="text-sm font-semibold text-gray-900">{feature.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Action Button */}
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105">
                Plan Your Visit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Tabs Section */}
          <div className={`mt-16 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-8">
              {['overview', 'architecture', 'visitor-info'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-t-lg ${
                    activeTab === tab
                      ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab === 'overview' && 'Cultural Significance'}
                  {tab === 'architecture' && 'Architectural Details'}
                  {tab === 'visitor-info' && 'Visitor Information'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Cultural & Historical Significance</h4>
                  <ul className="space-y-3">
                    {building.culturalSignificance.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Architectural Features</h4>
                  <ul className="space-y-3">
                    {building.architecturalDetails.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'visitor-info' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Best Time to Visit</p>
                        <p className="text-gray-600 text-sm">{building.visitorInfo.bestTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Opening Hours</p>
                        <p className="text-gray-600 text-sm">{building.visitorInfo.hours}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Wind className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Pro Tips</p>
                        <p className="text-gray-600 text-sm">{building.visitorInfo.tips}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Trees className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Nearby Attractions</p>
                        <p className="text-gray-600 text-sm">Black Star Square, Kwame Nkrumah Mausoleum, Arts Centre</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Ghana Pride Footer */}
          {/* <div className={`mt-12 text-center pt-8 border-t border-gray-100 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-50 to-amber-100 rounded-full">
              <Heart className="w-4 h-4 text-amber-600 fill-amber-600" />
              <p className="text-sm text-amber-800 font-medium">
                Ghana's architectural heritage — a testament to our past, present, and future
              </p>
              <ChevronRight className="w-4 h-4 text-amber-600" />
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}