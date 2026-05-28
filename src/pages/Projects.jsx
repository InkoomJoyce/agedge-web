import { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Buaben Residence",
      category: "residential",
      type: "Private Residence",
      location: "Accra, Ghana",
      year: "2024",
      description: "A stunning modern residence featuring contemporary design elements, open spaces, and premium finishes. This home showcases our commitment to luxury living.",
      images: [
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=600&fit=crop"
      ],
      features: ["Modern Architecture", "Open Floor Plan", "Premium Finishes", "Landscaped Garden"]
    },
    {
      id: 2,
      title: "Adu Residence",
      category: "residential",
      type: "Luxury Villa",
      location: "East Legon, Accra",
      year: "2024",
      description: "A masterpiece of architectural design combining elegance with functionality. This luxury villa features state-of-the-art amenities and breathtaking views.",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=800&h=600&fit=crop"
      ],
      features: ["Infinity Pool", "Smart Home System", "Home Theater", "Wine Cellar"]
    },
    {
      id: 3,
      title: "Faith Montessori School",
      category: "educational",
      type: "Educational Facility",
      location: "Accra, Ghana",
      year: "2023",
      description: "A modern educational facility designed to inspire learning and creativity. Features include spacious classrooms, administrative block, and dormitories.",
      images: [
        "https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/245436/pexels-photo-245436.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=800&h=600&fit=crop"
      ],
      features: ["Modern Classrooms", "Administrative Block", "Boys & Girls Dormitories", "Sports Facilities"]
    },
    {
      id: 4,
      title: "Tachie Enclave",
      category: "multifamily",
      type: "Multi-Family Housing",
      location: "Accra, Ghana",
      year: "2024",
      description: "A contemporary multi-family housing development offering comfortable living spaces with community-focused design.",
      images: [
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2927008/pexels-photo-2927008.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2760253/pexels-photo-2760253.jpeg?w=800&h=600&fit=crop"
      ],
      features: ["Secure Environment", "Parking Facility", "Green Spaces", "Community Center"]
    },
    {
      id: 5,
      title: "Anoah Heights",
      category: "multifamily",
      type: "Luxury Apartments",
      location: "Cantonments, Accra",
      year: "2024",
      description: "Premium apartment complex offering luxury living with stunning city views and world-class amenities.",
      images: [
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2106175/pexels-photo-2106175.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?w=800&h=600&fit=crop"
      ],
      features: ["Rooftop Terrace", "Fitness Center", "Swimming Pool", "24/7 Security"]
    },
    {
      id: 6,
      title: "Ababio Residence",
      category: "residential",
      type: "Executive Home",
      location: "Spintex, Accra",
      year: "2024",
      description: "An executive home that blends contemporary design with traditional elements, creating a warm and inviting atmosphere.",
      images: [
        "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2106175/pexels-photo-2106175.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?w=800&h=600&fit=crop"
      ],
      features: ["Home Office", "Entertainment Area", "Modern Kitchen", "Private Garden"]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Private Residences' },
    { id: 'educational', label: 'Educational Facilities' },
    { id: 'multifamily', label: 'Multi-Family Housing' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "6+", label: "Active Projects" }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=900&fit=crop"
            alt="AGEdge Global Projects Showcase"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4 backdrop-blur-sm">
            Our Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Featured{' '}
            <span className="font-bold text-amber-400">Projects</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of exceptional architectural and construction projects across Ghana
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
              <p className="text-2xl font-bold text-amber-500">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                <button className="mt-4 text-amber-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-lg">
            View All Projects
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-8">
              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedProject.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProject.title} - Image ${idx + 1}`}
                    className="rounded-xl w-full h-48 object-cover"
                  />
                ))}
              </div>

              {/* Project Details */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {selectedProject.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Completed {selectedProject.year}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.description}</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="px-6 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
                    Request Similar Project
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gray-50 mt-16 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-600 mb-8">Let's bring your vision to life with our expert team</p>
          <button className="px-8 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-md">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  )
}