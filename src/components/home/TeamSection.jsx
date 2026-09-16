import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Star,
  Calendar,
  BookOpen,
  HardHat,
  PenTool,
  Ruler,
  Wrench,
  Briefcase,
  Search,
  X,
  Sparkles,
  Building2,
  Send,
  ArrowRight,
} from "lucide-react";

// ─── OPTION A: Keep images in src/assets ───
// import victorImage from "../../assets/victor.jpg";
// import selormImage from "../../assets/selorm.jpg";
// import paulImage from "../../assets/paul.jpg";
// import michaelImage from "../../assets/dankyi.jpg";
// import wilberforceImage from "../../assets/brown.jpg";
// import joyceImage from "../../assets/joyce.jpg";

// ─── OPTION B: Move images to public/images/team/ and use these instead ───
const victorImage = "/images/team/victor.jpg";
const selormImage = "/images/team/selorm.jpg";
const paulImage = "/images/team/paul.jpg";
const michaelImage = "/images/team/dankyi.jpg";
const wilberforceImage = "/images/team/brown.jpg";
const joyceImage = "/images/team/joyce.jpg";

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
      "Mandella Washington Fellowship - University of New Mexico",
    ],
    affiliations: ["Member - Ghana Institute of Architects"],
    expertise: [
      "Architecture",
      "Construction",
      "Project Management",
      "Business Strategy",
    ],
    description:
      "Over fifteen years of practice in Ghana, Victor has acquired in-depth knowledge in architecture and construction through a wide collection of private, commercial and government projects.",
    projects: 50,
    awards: 8,
    email: "vagyasi2@gmail.com",
    phone: "+233 244 988 093",
    location: "Accra, Ghana",
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
    affiliations: [
      "Member - Ghana Institute of Architects (Probationers List)",
    ],
    expertise: [
      "Design",
      "Construction Documentation",
      "3D Visualization",
      "Site Analysis",
    ],
    description:
      "Selorm brings fresh perspectives and contemporary design sensibilities to the firm. Her widespread skills in design and construction make her an invaluable asset.",
    projects: 15,
    awards: 2,
    email: "selorm.lumor@agedge.com",
    phone: "+233 24 XXXX",
    location: "Accra, Ghana",
  },
  {
    id: 3,
    name: "Paul Tetteh",
    role: "Senior Technician",
    category: "Technical",
    experience: "10+ years",
    image: paulImage,
    icon: Wrench,
    qualifications: [
      "Certificate in Architecture & Draftsmanship - KNUST (2007)",
    ],
    affiliations: [],
    expertise: [
      "Architectural Drafting",
      "Site Supervision",
      "Construction Detailing",
      "Technical Drawing",
    ],
    description:
      "With over a decade of hands-on experience, Paul's widespread skills in design exposure and site work make him an indispensable asset.",
    projects: 35,
    awards: 3,
    email: "paul.tetteh@agedge.com",
    phone: "+233 24 XXX XXXX",
    location: "Accra, Ghana",
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
    expertise: [
      "Project Management",
      "Quantity Surveying",
      "Cost Estimation",
      "Contract Administration",
    ],
    description:
      "Michael brings comprehensive experience in quantity surveying services across Building and Civil engineering works.",
    projects: 45,
    awards: 5,
    email: "michael.yeboah@agedge.com",
    phone: "+233 24 XXX XXXX",
    location: "Accra, Ghana",
  },
  {
    id: 5,
    name: "Wilberforce Adote Brown",
    role: "Civil & Structural Engineer",
    category: "Engineering",
    experience: "30+ years",
    image: wilberforceImage,
    icon: HardHat,
    qualifications: [
      "Civil & Structural Engineering",
      "Traditional & Contemporary Structural Analysis",
    ],
    affiliations: [],
    expertise: [
      "Structural Engineering",
      "Civil Engineering",
      "Structural Analysis",
      "Cost Optimization",
    ],
    description:
      "With over three decades of experience, Wilberforce combines both contemporary and traditional methods of structural design analysis.",
    projects: 80,
    awards: 12,
    email: "wilberforce.brown@agedge.com",
    phone: "+233 24 XXXX",
    location: "Accra, Ghana",
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
      "Certified Sales Professional",
    ],
    affiliations: ["GNBCC"],
    expertise: [
      "Business Development",
      "Strategic Partnerships",
      "Client Relations",
      "Market Expansion",
    ],
    description:
      "Joyce brings over 4 years of experience in business development and strategic partnerships across Ghana's real estate and construction sectors.",
    projects: 30,
    awards: 4,
    email: "inkoomja@gmail.com",
    phone: "+233 548 869 192",
    location: "Accra, Ghana",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Members" },
  { id: "Leadership", label: "Leadership" },
  { id: "Architecture", label: "Architecture" },
  { id: "Engineering", label: "Engineering" },
  { id: "Management", label: "Management" },
  { id: "Technical", label: "Technical" },
];

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  // Overall stats
  const stats = useMemo(() => {
    const totalExperience = TEAM_MEMBERS.reduce((sum, m) => {
      const years = parseInt(m.experience) || 0;
      return sum + years;
    }, 0);
    const totalProjects = TEAM_MEMBERS.reduce((s, m) => s + m.projects, 0);
    const totalAwards = TEAM_MEMBERS.reduce((s, m) => s + m.awards, 0);
    return { totalExperience, totalProjects, totalAwards };
  }, []);

  // Filtered members
  const filteredMembers = useMemo(() => {
    let list = TEAM_MEMBERS;

    if (activeCategory !== "all") {
      list = list.filter((m) => m.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.role.toLowerCase().includes(q) ||
          m.expertise.some((e) => e.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  const teamSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AGEdge Global",
      description:
        "Meet our expert team of architects, engineers, and construction professionals",
      member: TEAM_MEMBERS.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        worksFor: { "@type": "Organization", name: "AGEdge Global" },
        hasCredential: member.qualifications.map((q) => ({
          "@type": "EducationalOccupationalCredential",
          name: q,
        })),
        knowsAbout: member.expertise,
      })),
    }),
    []
  );

  useEffect(() => {
    if (!sectionRef.current) return;
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );
    observerRef.current.observe(sectionRef.current);
    return () => observerRef.current?.disconnect();
  }, []);

  const handleCloseModal = useCallback(() => setSelectedMember(null), []);
  const handleMemberClick = useCallback((member) => setSelectedMember(member), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleCloseModal]);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      {/* Background Highlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 -left-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-32 right-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section
        ref={sectionRef}
        className="relative min-h-screen -mt-24 md:-mt-28 flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/images/projects/kantu-residence/1.jpeg"
            alt="AGEdge Global Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm mb-6">
            <Users className="w-3.5 h-3.5 text-green-300" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white">
              Our People
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.05] mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Meet the
            <br />
            <span className="relative inline-block mt-2">
              <span className="font-bold bg-gradient-to-r from-green-300 via-green-200 to-emerald-300 bg-clip-text text-transparent">
                Expert Team
              </span>
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C50 3 150 1 298 6"
                  stroke="url(#teamUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="teamUnderline"
                    x1="0"
                    y1="0"
                    x2="300"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#86efac" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#4ade80" />
                    <stop offset="1" stopColor="#86efac" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-100 font-light leading-relaxed mt-8 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            Decades of combined experience — architects, engineers, project
            managers, and business leaders united by a passion for excellence in
            Ghana's built environment.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <Users className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">6 Experts</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">255+ Projects Combined</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <Award className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">34 Industry Awards</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-300/70" />
            <div className="w-2 h-2 rotate-45 bg-green-300" />
            <div className="w-1.5 h-1.5 rotate-45 bg-green-200/70" />
            <div className="w-2 h-2 rotate-45 bg-green-300" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-300/70" />
          </div>
        </div>
      </section>

      {/* ═══════════ EVERYTHING ELSE ═══════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats — overlapping hero bottom */}
        <div className="relative z-20 -mt-20 md:-mt-24 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                icon: Calendar,
                value: `${stats.totalExperience}+`,
                label: "Years Combined",
                theme: {
                  card: "from-emerald-50 via-white to-emerald-100/60 border-emerald-100",
                  bubble: "from-emerald-500 to-green-600 shadow-emerald-500/30",
                  text: "from-emerald-900 via-emerald-700 to-emerald-500",
                  bar: "from-emerald-400 via-green-500 to-emerald-400",
                  label: "group-hover:text-emerald-700",
                  blob: "from-emerald-400/20 to-green-400/10",
                },
              },
              {
                icon: Building2,
                value: `${stats.totalProjects}+`,
                label: "Projects Delivered",
                theme: {
                  card: "from-blue-50 via-white to-blue-100/60 border-blue-100",
                  bubble: "from-blue-500 to-indigo-600 shadow-blue-500/30",
                  text: "from-blue-900 via-blue-700 to-indigo-500",
                  bar: "from-blue-400 via-indigo-500 to-blue-400",
                  label: "group-hover:text-blue-700",
                  blob: "from-blue-400/20 to-indigo-400/10",
                },
              },
              {
                icon: Award,
                value: stats.totalAwards,
                label: "Industry Awards",
                theme: {
                  card: "from-amber-50 via-white to-amber-100/60 border-amber-100",
                  bubble: "from-amber-500 to-orange-600 shadow-amber-500/30",
                  text: "from-amber-900 via-amber-700 to-orange-500",
                  bar: "from-amber-400 via-orange-500 to-amber-400",
                  label: "group-hover:text-amber-700",
                  blob: "from-amber-400/20 to-orange-400/10",
                },
              },
              {
                icon: Users,
                value: TEAM_MEMBERS.length,
                label: "Team Members",
                theme: {
                  card: "from-purple-50 via-white to-purple-100/60 border-purple-100",
                  bubble: "from-purple-500 to-fuchsia-600 shadow-purple-500/30",
                  text: "from-purple-900 via-purple-700 to-fuchsia-500",
                  bar: "from-purple-400 via-fuchsia-500 to-purple-400",
                  label: "group-hover:text-purple-700",
                  blob: "from-purple-400/20 to-fuchsia-400/10",
                },
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              const theme = stat.theme;
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl p-5 text-center shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 bg-gradient-to-br border ${theme.card}`}
                >
                  <div
                    className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${theme.blob} blur-2xl group-hover:scale-125 transition-transform duration-500`}
                  />
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-80 ${theme.bar}`}
                  />
                  <div className="relative flex justify-center mb-3">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.bubble} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
                      />
                      <div
                        className={`relative p-3 rounded-2xl bg-gradient-to-br ${theme.bubble} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>
                  <p
                    className={`relative text-3xl font-extrabold bg-gradient-to-br ${theme.text} bg-clip-text text-transparent leading-none`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`relative text-[11px] uppercase tracking-wider font-semibold text-gray-500 mt-2 transition-colors ${theme.label}`}
                  >
                    {stat.label}
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-gradient-to-r from-transparent via-green-400/60 to-transparent group-hover:w-16 transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Section heading */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The People Behind the Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 mb-3">
            Talented Minds,{" "}
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              One Vision
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our team by specialty, or search by name, role, or expertise.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-10 space-y-4">
          {/* Search box */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, role, or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-11 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-sm shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* No results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex p-4 rounded-full bg-gray-100 mb-4">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-gray-600 mb-1 font-medium">No team members found</p>
            <p className="text-sm text-gray-500">
              Try a different search term or category.
            </p>
          </div>
        )}

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMembers.map((member, idx) => {
            const Icon = member.icon;
            return (
              <div
                key={member.id}
                className={`group relative transition-all duration-500 transform hover:scale-[1.02] hover:z-10 hover:-translate-y-2 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${Math.min(idx * 80, 400)}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-green-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-green-500/30 group-hover:border-green-500 transition-all duration-500">
                  <div className="p-6 lg:p-8">
                    {/* Profile image */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <div className="relative w-28 h-28 lg:w-32 lg:h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover object-top"
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

                    {/* Name & role */}
                    <div className="text-center mb-4 mt-4">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-green-600 text-xs lg:text-sm font-medium">
                        {member.role}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{member.experience} experience</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 line-clamp-2">
                      {member.description}
                    </p>

                    {/* Expertise tags */}
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

                    {/* Quick contact */}
                    <div className="flex justify-center gap-2 mb-4">
                      <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-green-100 text-gray-500 hover:text-green-700 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-green-100 text-gray-500 hover:text-green-700 transition-colors"
                        aria-label={`Call ${member.name}`}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Stats row */}
                    <div className="flex justify-around pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <p className="text-base lg:text-lg font-bold text-gray-900">
                          {member.projects}+
                        </p>
                        <p className="text-xs text-gray-500">Projects</p>
                      </div>
                      <div className="w-px bg-gray-200" />
                      <div className="text-center">
                        <p className="text-base lg:text-lg font-bold text-gray-900">
                          {member.awards}
                        </p>
                        <p className="text-xs text-gray-500">Awards</p>
                      </div>
                      <div className="w-px bg-gray-200" />
                      <div className="text-center">
                        <div className="inline-flex p-1.5 bg-green-100 rounded-lg">
                          <Icon className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </div>

                    {/* View profile */}
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
            );
          })}
        </div>

        {/* Join CTA */}
        {/* <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 p-8 md:p-12 text-center shadow-2xl shadow-green-500/20">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs font-semibold tracking-wider uppercase text-white mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Join Our Team
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Want to Build With Us?
              </h3>
              <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm sm:text-base">
                We're always looking for talented architects, engineers, and
                project managers who share our passion for excellence.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Get in Touch
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/25 transition-all duration-300"
                >
                  See Our Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* ═══════════ MEMBER MODAL ═══════════ */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-name"
        >
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left column */}
                <div>
                  <div className="mb-6">
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

                  <div className="text-center md:text-left">
                    <h3
                      id="member-name"
                      className="text-xl md:text-2xl font-bold text-gray-900"
                    >
                      {selectedMember.name}
                    </h3>
                    <p className="text-green-600 font-medium mt-1">
                      {selectedMember.role}
                    </p>
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
                      href={`tel:${selectedMember.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{selectedMember.phone}</span>
                    </a>
                  </div>

                  {/* Booking CTA */}
                  <Link
                    to="/contact"
                    onClick={handleCloseModal}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Book a Consultation
                  </Link>
                </div>

                {/* Right column */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-green-500" />
                      Biography
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {selectedMember.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-green-500" />
                      Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {selectedMember.qualifications.map((qual, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
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
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
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
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                          {selectedMember.projects}+
                        </p>
                        <p className="text-xs text-gray-500">
                          Projects Completed
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                          {selectedMember.awards}
                        </p>
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
    </div>
  );
}