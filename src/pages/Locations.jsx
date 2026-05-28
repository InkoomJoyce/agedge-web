import { useState } from 'react'

export default function Locations() {
  const [selectedRegion, setSelectedRegion] = useState('ghana')
  const [selectedLocation, setSelectedLocation] = useState(null)

  const locations = {
    ghana: {
      name: "Ghana",
      description: "Headquartered in Accra, we serve clients nationwide with dedicated teams and local expertise.",
      image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=1200&h=600&fit=crop",
      cities: [
        {
          name: "Accra",
          description: "Headquarters and primary operations hub",
          image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=600&h=400&fit=crop",
          projects: 25,
          active: true,
          landmarks: ["Independence Square", "Kokrobite Beach", "Labadi Beach"]
        },
        {
          name: "Kumasi",
          description: "Major projects in the Ashanti Region",
          image: "https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?w=600&h=400&fit=crop",
          projects: 12,
          active: true,
          landmarks: ["Manhyia Palace", "Kejetia Market", "Kumasi Fort"]
        },
        {
          name: "Takoradi",
          description: "Growing presence in the Western Region",
          image: "https://images.pexels.com/photos/245436/pexels-photo-245436.jpeg?w=600&h=400&fit=crop",
          projects: 8,
          active: true,
          landmarks: ["Market Circle", "Sekondi Harbour", "Busua Beach"]
        },
        {
          name: "Tema",
          description: "Industrial and commercial projects",
          image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?w=600&h=400&fit=crop",
          projects: 10,
          active: true,
          landmarks: ["Tema Harbour", "Community Centres", "Industrial Area"]
        },
        {
          name: "Cape Coast",
          description: "Educational and heritage projects",
          image: "https://images.pexels.com/photos/2927008/pexels-photo-2927008.jpeg?w=600&h=400&fit=crop",
          projects: 5,
          active: false,
          landmarks: ["Cape Coast Castle", "Kakum National Park", "University of Cape Coast"]
        },
        {
          name: "Ho",
          description: "Emerging market in Volta Region",
          image: "https://images.pexels.com/photos/2760253/pexels-photo-2760253.jpeg?w=600&h=400&fit=crop",
          projects: 3,
          active: false,
          landmarks: ["Mount Gemi", "Wli Waterfalls", "Tafi Atome"]
        }
      ]
    },
    africa: {
      name: "Africa",
      description: "Expanding our footprint across the African continent with strategic partnerships and projects.",
      image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=1200&h=600&fit=crop",
      cities: [
        {
          name: "Lagos, Nigeria",
          description: "West Africa's largest construction market",
          image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=600&h=400&fit=crop",
          projects: 6,
          active: true,
          landmarks: ["Lekki", "Victoria Island", "Eko Atlantic"]
        },
        {
          name: "Abidjan, Ivory Coast",
          description: "Growing presence in Francophone Africa",
          image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=600&h=400&fit=crop",
          projects: 4,
          active: true,
          landmarks: ["Plateau District", "Cocody", "Banco National Park"]
        },
        {
          name: "Nairobi, Kenya",
          description: "East African expansion hub",
          image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=600&h=400&fit=crop",
          projects: 3,
          active: false,
          landmarks: ["Nairobi National Park", "KICC", "Westlands"]
        },
        {
          name: "Johannesburg, SA",
          description: "Southern African partnership base",
          image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?w=600&h=400&fit=crop",
          projects: 2,
          active: false,
          landmarks: ["Sandton", "Soweto", "Apartheid Museum"]
        }
      ]
    }
  }

  const stats = [
    { value: "50+", label: "Projects Across Ghana", icon: "🏗️" },
    { value: "6", label: "Regions Served", icon: "📍" },
    { value: "10+", label: "Partner Locations", icon: "🤝" },
    { value: "4", label: "African Countries", icon: "🌍" }
  ]

  const currentLocation = locations[selectedRegion]
  const activeCities = currentLocation.cities.filter(c => c.active)
  const upcomingCities = currentLocation.cities.filter(c => !c.active)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={currentLocation.image}
            alt={`AGEdge Global locations in ${currentLocation.name}`}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="text-2xl mr-2">📍</span> Our Footprint
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Where We{' '}
            <span className="font-bold text-amber-400">Build</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From Accra to Lagos, we're transforming skylines across Ghana and Africa
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-12 h-px bg-amber-400"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-xl font-bold text-amber-500">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Region Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedRegion('ghana')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              selectedRegion === 'ghana'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="text-xl">🇬🇭</span>
            Ghana
          </button>
          <button
            onClick={() => setSelectedRegion('africa')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              selectedRegion === 'africa'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="text-xl">🌍</span>
            Africa
          </button>
        </div>

        {/* Region Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {currentLocation.name}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentLocation.description}
          </p>
        </div>

        {/* Active Locations Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Active Locations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCities.map((city, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedLocation(city)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-xl">{city.name}</span>
                      <span className="bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                        {city.projects} Projects
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {city.landmarks.slice(0, 2).map((landmark, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {landmark}
                      </span>
                    ))}
                    {city.landmarks.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{city.landmarks.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Locations */}
        {upcomingCities.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-400 rounded-full"></span>
              Coming Soon
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingCities.map((city, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedLocation(city)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-amber-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{city.name}</h4>
                    <p className="text-gray-500 text-sm">{city.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map Visualization */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Expansion Map</h3>
            <p className="text-gray-600">Strategically positioned across key markets</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇬🇭</span>
                <h4 className="text-xl font-bold text-gray-900">Ghana</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Greater Accra Region</span>
                  <span className="text-amber-500 font-semibold">25 Projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 rounded-full h-2" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ashanti Region</span>
                  <span className="text-amber-500 font-semibold">12 Projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 rounded-full h-2" style={{ width: '48%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Western Region</span>
                  <span className="text-amber-500 font-semibold">8 Projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 rounded-full h-2" style={{ width: '32%' }}></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌍</span>
                <h4 className="text-xl font-bold text-gray-900">Africa Expansion</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nigeria</span>
                  <span className="text-amber-500 font-semibold">6 Projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 rounded-full h-2" style={{ width: '60%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ivory Coast</span>
                  <span className="text-amber-500 font-semibold">4 Projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 rounded-full h-2" style={{ width: '40%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kenya & South Africa</span>
                  <span className="text-amber-500 font-semibold">5 Projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 rounded-full h-2" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Map Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
          <img
            src="https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=1200&h=500&fit=crop"
            alt="AGEdge Global coverage across Ghana and Africa"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Looking to Build in Your Area?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're expanding our presence across Africa. Contact us to discuss how we can bring our expertise to your location.
          </p>
          <button className="px-8 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg">
            Inquire About Your Location
          </button>
        </div>
      </div>

      {/* Location Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedLocation(null)}>
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-8">
              <img
                src={selectedLocation.image}
                alt={selectedLocation.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedLocation.name}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <span>📊</span> {selectedLocation.projects} Projects Completed
                </span>
                <span className="flex items-center gap-1">
                  <span>📍</span> {selectedLocation.active ? 'Active Location' : 'Coming Soon'}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{selectedLocation.description}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Notable Landmarks</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedLocation.landmarks.map((landmark, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {landmark}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button className="flex-1 px-6 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
                  Inquire About Projects Here
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}