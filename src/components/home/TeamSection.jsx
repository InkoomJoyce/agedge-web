import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { Users, Award, GraduationCap, MapPin, Mail, Phone, ChevronRight, Star, Calendar, BookOpen, HardHat, PenTool, Ruler, Wrench, Briefcase } from 'lucide-react'

// Import local images
import victorImage from '../../assets/victor.jpg'
import selormImage from '../../assets/selorm.jpg'
import paulImage from '../../assets/paul.jpg'
import michaelImage from '../../assets/dankyi.jpg'
import wilberforceImage from '../../assets/brown.jpg'
import joyceImage from '../../assets/joyce.jpg'

// Memoized team data - prevents recreation on each render
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Victor Anaafi Gyasi",
    role: "Principal Architect & Managing Director",
    category: "Leadership",
    experience: "15+ years",
    image: victorImage,
    icon: PenTool,
    qualifications: [
      "BSc & Post Graduate Diploma in Architecture - KNUST",
      "MSc in Project Management",
      "Mandella Washington Fellowship - University of New Mexico"
    ],
    affiliations: ["Member - Ghana Institute of Architects"],
    expertise: ["Architecture", "Construction", "Project Management", "Business Strategy"],
    description: "Over fifteen years of practice in Ghana, Victor has acquired in-depth knowledge in architecture and construction through a wide collection of private, commercial and government projects.",
    projects: 50,
    awards: 8,
    email: "vagyasi2@gmail.com",
    phone: "+233 244 988 093",
    location: "Accra, Ghana"
  },
  {
    id: 2,
    name: "Selorm Lumor",
    role: "Assistant Architect",
    category: "Architecture",
    experience: "3+ years",
    image: selormImage,
    icon: PenTool,
    qualifications: ["BSc in Architecture - KNUST", "MSc in Architecture - KNUST"],
    affiliations: ["Member - Ghana Institute of Architects (Probationers List)"],
    expertise: ["Design", "Construction Documentation", "3D Visualization", "Site Analysis"],
    description: "Selorm brings fresh perspectives and contemporary design sensibilities to the firm. Her widespread skills in design and construction make her an invaluable asset.",
    projects: 15,
    awards: 2,
    email: "selorm.lumor@agedge.com",
    phone: "+233 24 XXXX",
    location: "Accra, Ghana"
  },
  {
    id: 3,
    name: "Paul Tetteh",
    role: "Senior Technician",
    category: "Technical",
    experience: "10+ years",
    image: paulImage,
    icon: Wrench,
    qualifications: ["Certificate in Architecture & Draftsmanship - KNUST (2007)"],
    affiliations: [],
    expertise: ["Architectural Drafting", "Site Supervision", "Construction Detailing", "Technical Drawing"],
    description: "With over a decade of hands-on experience, Paul's widespread skills in design exposure and site work make him an indispensable asset.",
    projects: 35,
    awards: 3,
    email: "paul.tetteh@agedge.com",
    phone: "+233 24 XXX XXXX",
    location: "Accra, Ghana"
  },
  {
    id: 4,
    name: "Michael Dankyi Yeboah",
    role: "Project Manager & Quantity Surveyor",
    category: "Management",
    experience: "15+ years",
    image: michaelImage,
    icon: Ruler,
    qualifications: ["BSc in Building Technology - KNUST"],
    affiliations: [],
    expertise: ["Project Management", "Quantity Surveying", "Cost Estimation", "Contract Administration"],
    description: "Michael brings comprehensive experience in quantity surveying services across Building and Civil engineering works.",
    projects: 45,
    awards: 5,
    email: "michael.yeboah@agedge.com",
    phone: "+233 24 XXX XXXX",
    location: "Accra, Ghana"
  },
  {
    id: 5,
    name: "Wilberforce Adote Brown",
    role: "Civil & Structural Engineer",
    category: "Engineering",
    experience: "30+ years",
    image: wilberforceImage,
    icon: HardHat,
    qualifications: ["Civil & Structural Engineering", "Traditional & Contemporary Structural Analysis"],
    affiliations: [],
    expertise: ["Structural Engineering", "Civil Engineering", "Structural Analysis", "Cost Optimization"],
    description: "With over three decades of experience, Wilberforce combines both contemporary and traditional methods of structural design analysis.",
    projects: 80,
    awards: 12,
    email: "wilberforce.brown@agedge.com",
    phone: "+233 24 XXXX",
    location: "Accra, Ghana"
  },
  {
    id: 6,
    name: "Joyce Inkoom",
    role: "Business Development Lead",
    category: "Leadership",
    experience: "4+ years",
    image: joyceImage,
    icon: Briefcase,
    qualifications: [
      "BSc - University of Ghana",
      "Project Management Professional",
      "Revenue Operations Professional",
      "Certified Sales Professional"
    ],
    affiliations: ["GNBCC"],
    expertise: ["Business Development", "Strategic Partnerships", "Client Relations", "Market Expansion"],
    description: "Joyce brings over 4 years of experience in business development and strategic partnerships across Ghana's real estate and construction sectors.",
    projects: 30,
    awards: 4,
    email: "inkoomja@gmail.com",
    phone: "+233 548 869 192",
    location: "Accra, Ghana"
  }
]

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)
  const sectionRef = useRef(null)
  const observerRef = useRef(null)

  // Memoized calculations - only recalculated when team members change
  const stats = useMemo(() => {
    const totalExperience = TEAM_MEMBERS.reduce((sum, member) => {
      const years = parseInt(member.experience) || 0
      return sum + years
    }, 0)
    const totalProjects = TEAM_MEMBERS.reduce((sum, member) => sum + member.projects, 0)
    const totalAwards = TEAM_MEMBERS.reduce((sum, member) => sum + member.awards, 0)
    return { totalExperience, totalProjects, totalAwards }
  }, [])

  // Memoized schema - only generated once
  const teamSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AGEdge Global",
    "description": "Meet our expert team of architects, engineers, and construction professionals",
    "member": TEAM_MEMBERS.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "worksFor": {
        "@type": "Organization",
        "name": "AGEdge Global"
      },
      "hasCredential": member.qualifications.map(q => ({
        "@type": "EducationalOccupationalCredential",
        "name": q
      })),
      "knowsAbout": member.expertise
    }))
  }), [])

  // Optimized intersection observer with passive option
  useEffect(() => {
    if (!sectionRef.current) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observerRef.current?.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    observerRef.current.observe(sectionRef.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  // Memoized modal close handler
  const handleCloseModal = useCallback(() => {
    setSelectedMember(null)
  }, [])

  // Memoized member click handler
  const handleMemberClick = useCallback((member) => {
    setSelectedMember(member)
  }, [])

  // Memoized escape key handler
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [handleCloseModal])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedMember])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 bg-gray-50"
        aria-label="Meet Our Expert Team"
      >
        {/* Green Background Highlights - No image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-3">
              Meet the{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                Expert Team
              </span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-3 font-light">
              Decades of combined experience, united by a passion for architectural excellence
            </p>

            <div className="flex justify-center gap-2 mt-6">
              <div className="w-12 h-px bg-green-300"></div>
              <div className="w-3 h-px bg-green-400"></div>
              <div className="w-3 h-px bg-green-500"></div>
            </div>
          </div>

          {/* Team Grid - Cards with Green Borders */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => {
              const Icon = member.icon
              return (
                <div
                  key={member.id}
                  className={`group relative transition-all duration-500 transform hover:scale-[1.02] hover:z-10 hover:-translate-y-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${Math.min(idx * 80, 400)}ms` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-green-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-green-500/30 group-hover:border-green-500 transition-all duration-500">
                    <div className="p-6 lg:p-8">
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative w-28 h-28 lg:w-32 lg:h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                          <img
  src={member.image}
  alt={`${member.name} - ${member.role}`}
  className="w-full h-full object-cover object-top"  // Shows the top part
  loading="lazy"
  width="128"
  height="128"
/>
                        </div>

                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                          <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white text-xs font-medium whitespace-nowrap shadow-lg">
                            {member.category}
                          </div>
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="text-center mb-4 mt-4">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-green-600 text-xs lg:text-sm font-medium">{member.role}</p>
                        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{member.experience} experience</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 line-clamp-2">
                        {member.description}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                            +{member.expertise.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Stats Row */}
                      <div className="flex justify-around pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <p className="text-base lg:text-lg font-bold text-gray-900">{member.projects}+</p>
                          <p className="text-xs text-gray-500">Projects</p>
                        </div>
                        <div className="w-px bg-gray-200"></div>
                        <div className="text-center">
                          <p className="text-base lg:text-lg font-bold text-gray-900">{member.awards}</p>
                          <p className="text-xs text-gray-500">Awards</p>
                        </div>
                        <div className="w-px bg-gray-200"></div>
                        <div className="text-center">
                          <div className="inline-flex p-1.5 bg-green-100 rounded-lg">
                            <Icon className="w-4 h-4 text-green-600" />
                          </div>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={() => handleMemberClick(member)}
                        className="w-full mt-4 px-4 py-2 bg-green-50 hover:bg-green-500 text-green-600 hover:text-white rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-green-200 hover:border-green-600"
                        aria-label={`View ${member.name}'s profile`}
                      >
                        View Profile
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal - Optimized with lazy loading */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal()
          }}
        >
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="relative mb-6">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
  <img
    src={selectedMember.image}
    alt={selectedMember.name}
    className="w-full h-full object-cover object-top"
    loading="lazy"
    width="400"
    height="400"
  />
</div>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                    <p className="text-green-600 font-medium mt-1">{selectedMember.role}</p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedMember.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedMember.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <a 
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 break-all hover:text-green-600 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{selectedMember.email}</span>
                    </a>
                    <a 
                      href={`tel:${selectedMember.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{selectedMember.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-green-500" />
                      Biography
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{selectedMember.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-green-500" />
                      Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {selectedMember.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedMember.affiliations.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-green-500" />
                        Affiliations
                      </h4>
                      <ul className="space-y-2">
                        {selectedMember.affiliations.map((aff, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                            <span>{aff}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-green-500" />
                      Core Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex justify-around">
                      <div className="text-center">
                        <p className="text-xl md:text-2xl font-bold text-gray-900">{selectedMember.projects}+</p>
                        <p className="text-xs text-gray-500">Projects Completed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl md:text-2xl font-bold text-gray-900">{selectedMember.awards}</p>
                        <p className="text-xs text-gray-500">Industry Awards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}