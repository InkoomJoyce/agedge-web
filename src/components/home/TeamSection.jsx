import { useEffect, useRef, useState } from 'react'
import { Users, Award, GraduationCap, MapPin, Mail, Phone, ChevronRight, Star, Calendar, BookOpen, HardHat, PenTool, Ruler, Wrench, Briefcase } from 'lucide-react'

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedMember, setSelectedMember] = useState(null)
  const sectionRef = useRef(null)

  const teamMembers = [
    {
      id: 1,
      name: "Victor Anaafi Gyasi",
      role: "Principal Architect & Managing Director",
      category: "Leadership",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
      icon: PenTool,
      qualifications: [
        "BSc & Post Graduate Diploma in Architecture - KNUST",
        "MSc in Project Management",
        "Mandella Washington Fellowship - University of New Mexico"
      ],
      affiliations: ["Member - Ghana Institute of Architects"],
      expertise: ["Architecture", "Construction", "Project Management", "Business Strategy"],
      description: "Over fifteen years of practice in Ghana, Victor has acquired in-depth knowledge in architecture and construction through a wide collection of private, commercial and government projects. His leadership combines technical excellence with entrepreneurial vision.",
      projects: 50,
      awards: 8,
      email: "victor.gyasi@agedge.com",
      phone: "+233 24 XXXX",
      location: "Accra, Ghana"
    },
    {
      id: 2,
      name: "Selorm Lumor",
      role: "Assistant Architect",
      category: "Architecture",
      experience: "3+ years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
      icon: PenTool,
      qualifications: [
        "BSc in Architecture - KNUST",
        "MSc in Architecture - KNUST"
      ],
      affiliations: ["Member - Ghana Institute of Architects (Probationers List)"],
      expertise: ["Design", "Construction Documentation", "3D Visualization", "Site Analysis"],
      description: "Selorm brings fresh perspectives and contemporary design sensibilities to the firm. Her widespread skills in design and construction, combined with her academic excellence, make her an invaluable asset to every project she touches.",
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      icon: Wrench,
      qualifications: [
        "Certificate in Architecture & Draftsmanship - KNUST (2007)"
      ],
      affiliations: [],
      expertise: ["Architectural Drafting", "Site Supervision", "Construction Detailing", "Technical Drawing"],
      description: "With over a decade of hands-on experience, Paul's widespread skills in design exposure and site work make him an indispensable asset. His technical precision bridges the gap between architectural vision and construction reality.",
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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
      icon: Ruler,
      qualifications: [
        "BSc in Building Technology - KNUST"
      ],
      affiliations: [],
      expertise: ["Project Management", "Quantity Surveying", "Cost Estimation", "Contract Administration"],
      description: "Michael brings comprehensive experience in quantity surveying services across Building and Civil engineering works. He has been solely responsible for project management services on a variety of projects including pre and post contract services.",
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
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
      icon: HardHat,
      qualifications: [
        "Civil & Structural Engineering",
        "Traditional & Contemporary Structural Analysis"
      ],
      affiliations: [],
      expertise: ["Structural Engineering", "Civil Engineering", "Structural Analysis", "Cost Optimization"],
      description: "With over three decades of experience, Wilberforce combines both contemporary and traditional methods of structural design analysis to ensure our buildings are safe and optimized in cost. His in-depth knowledge has been beneficial across all our completed projects.",
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
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
      icon: Briefcase,
      qualifications: [
        "BSc in Business Administration - University of Ghana",
        "MBA in Marketing - GIMPA",
        "Certified Sales Professional"
      ],
      affiliations: ["Member - Chartered Institute of Marketing Ghana"],
      expertise: ["Business Development", "Strategic Partnerships", "Client Relations", "Market Expansion"],
      description: "Joyce brings over 8 years of experience in business development and strategic partnerships across Ghana's real estate and construction sectors. Her expertise in client relations and market expansion has been instrumental in driving the firm's growth and establishing lasting client relationships.",
      projects: 30,
      awards: 4,
      email: "joyce.inkoom@agedge.com",
      phone: "+233 24 XXXX",
      location: "Accra, Ghana"
    }
  ]

  // Calculate combined experience
  const totalExperience = teamMembers.reduce((sum, member) => {
    const years = parseInt(member.experience) || 0
    return sum + years
  }, 0)

  const totalProjects = teamMembers.reduce((sum, member) => sum + member.projects, 0)
  const totalAwards = teamMembers.reduce((sum, member) => sum + member.awards, 0)

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

  // Schema markup for team
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AGEdge Global",
    "description": "Meet our expert team of architects, engineers, and construction professionals",
    "member": teamMembers.map(member => ({
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
  }

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden py-14 lg:py-16"
        aria-label="Meet Our Expert Team - Architects, Engineers & Construction Professionals"
      >
        {/* Parallax Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/29453302/pexels-photo-29453302.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: `scale(${1 + scrollY * 0.0002})`,
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-3">
              Meet the{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
                Expert Team
              </span>
            </h2>

            <p className="text-slate-100 max-w-3xl mx-auto mt-3 font-light">
              Decades of combined experience, united by a passion for architectural excellence
            </p>

            <div className="flex justify-center gap-2 mt-6">
              <div className="w-12 h-px bg-green-300"></div>
              <div className="w-3 h-px bg-green-400"></div>
              <div className="w-3 h-px bg-green-500"></div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => {
              const Icon = member.icon
              return (
                <div
                  key={member.id}
                  className={`group relative transition-all duration-700 transform hover:scale-105 hover:z-10 hover:-translate-y-2 ${
                    isVisible? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-green-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative bg-white/5 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/10 group-hover:bg-green-500/10 group-hover:border-green-400/40 transition-all duration-500">
                    <div className="p-6 lg:p-8">
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative w-28 h-28 lg:w-32 lg:h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900">
                          <img
                            src={member.image}
                            alt={`${member.name} - ${member.role} at AGEdge Global`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                          <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white text-xs font-medium whitespace-nowrap">
                            {member.category}
                          </div>
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="text-center mb-4 mt-4">
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-green-300 text-xs lg:text-sm font-medium">{member.role}</p>
                        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-slate-300">
                          <Calendar className="w-3 h-3" />
                          <span>{member.experience} experience</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-200 text-xs lg:text-sm leading-relaxed mb-4 line-clamp-3">
                        {member.description}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full border-white/20">
                            +{member.expertise.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Stats Row */}
                      <div className="flex justify-around pt-4 border-t border-white/10">
                        <div className="text-center">
                          <p className="text-base lg:text-lg font-bold text-white">{member.projects}+</p>
                          <p className="text-xs text-slate-300">Projects</p>
                        </div>
                        <div className="w-px bg-white/20"></div>
                        <div className="text-center">
                          <p className="text-base lg:text-lg font-bold text-white">{member.awards}</p>
                          <p className="text-xs text-slate-300">Awards</p>
                        </div>
                        <div className="w-px bg-white/20"></div>
                        <div className="text-center">
                          <div className="inline-flex p-1.5 bg-green-500/20 rounded-lg">
                            <Icon className="w-4 h-4 text-green-400" />
                          </div>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="w-full mt-4 px-4 py-2 bg-white/10 hover:bg-green-500/20 text-white hover:text-green-200 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn border-white/20 hover:border-green-400/40"
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

      {/* Modal for Member Details */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="relative mb-6">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
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
                    <div className="flex items-center gap-2 text-sm text-gray-600 break-all">
                      <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{selectedMember.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{selectedMember.phone}</span>
                    </div>
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