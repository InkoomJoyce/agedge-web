import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Calendar, X, ArrowRight, CheckCircle } from 'lucide-react'

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
    <div className="relative min-h-screen bg-gray-50 pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Green Background Highlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       

        {/* Hero Section - Compact like Services page */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-4">
            <span>Our Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-2">
            Featured{' '}
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Explore our portfolio of exceptional architectural and construction projects across Ghana
          </p>

          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-4 text-center border border-gray-200/50 hover:shadow-md transition-all duration-300">
              <p className="text-2xl font-bold text-green-600">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filter Buttons - Green Theme */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2.5 py-1 rounded-full text-[10px] font-medium">
                  {project.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                <button className="mt-3 text-green-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Project
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal - Green Theme */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
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
                    <span className="text-green-600 font-medium">{selectedProject.type}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Completed {selectedProject.year}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.description}</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    Request Similar Project
                  </Link>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 border-2 border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}