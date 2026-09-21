import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  X,
  ArrowRight,
  Sparkles,
  Building2,
  Award,
  Users,
} from "lucide-react";

// ═══════════════════════════════════════════
// REUSABLE PROTECTED IMAGE
// Applies: draggable=false, no right-click, no select,
// and a CSS watermark overlay
// ═══════════════════════════════════════════
function ProtectedImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  watermark = true,
  watermarkPosition = "bottom-right",
  pointerEvents = "auto",
}) {
  // Position class for the watermark
  const positionClass = {
    "bottom-right": "bottom-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "top-right": "top-2 right-2",
    "top-left": "top-2 left-2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }[watermarkPosition] || "bottom-2 right-2";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        className={`select-none ${imgClassName}`}
        style={{ pointerEvents }}
      />

      {watermark && (
        <div
          className={`absolute ${positionClass} pointer-events-none select-none z-10`}
          aria-hidden="true"
        >
          <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-white/60 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] whitespace-nowrap">
            © AGEdge Global
          </span>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════
const projects = [
  // ─────────── PRIVATE RESIDENCES ───────────
  {
    id: 1,
    name: "Akorkor's Residence",
    category: "residential",
    type: "Mediterranean Villa",
    location: "Accra, Ghana",
    year: "2024",
    description:
      "A Mediterranean-inspired villa defined by warm cream walls, terracotta roof tiles, and elegant arched windows. Deep wooden eaves, ornate lantern sconces, and a double-height balcony create a relaxed, timeless character, while the landscaped gardens and outdoor lounge offer a serene retreat for family living.",
    images: [
      "/images/projects/akorkors-residence/1.jpeg",
      "/images/projects/akorkors-residence/2.jpeg",
      "/images/projects/akorkors-residence/3.jpeg",
      "/images/projects/akorkors-residence/4.jpeg",
    ],
    features: [
      "Mediterranean Architecture",
      "Arched Windows",
      "Landscaped Gardens",
      "Covered Balcony",
    ],
  },
  {
    id: 2,
    name: "Buabeng Residence",
    category: "residential",
    type: "Private Residence",
    location: "Accra, Ghana",
    year: "2024",
    description:
      "A stunning modern residence featuring contemporary design elements, open spaces, and premium finishes. This home showcases our commitment to luxury living.",
    images: [
      "/images/projects/buabeng-residence/1.jpeg",
      "/images/projects/buabeng-residence/2.jpeg",
      "/images/projects/buabeng-residence/3.jpeg",
      "/images/projects/buabeng-residence/4.jpeg",
    ],
    features: [
      "Modern Architecture",
      "Open Floor Plan",
      "Premium Finishes",
      "Landscaped Garden",
    ],
  },
  {
    id: 3,
    name: "Kantu Residence",
    category: "residential",
    type: "Luxury Villa",
    location: "East Legon, Accra",
    year: "2024",
    description:
      "A masterpiece of architectural design combining elegance with functionality. This luxury villa features state-of-the-art amenities and breathtaking views.",
    images: [
      "/images/projects/kantu-residence/1.jpeg",
      "/images/projects/kantu-residence/2.jpeg",
      "/images/projects/kantu-residence/3.jpeg",
      "/images/projects/kantu-residence/4.jpeg",
    ],
    features: [
      "Infinity Pool",
      "Smart Home System",
      "Home Theater",
      "Wine Cellar",
    ],
  },
  {
    id: 4,
    name: "Nana's Residence",
    category: "residential",
    type: "Executive Home",
    location: "Spintex, Accra",
    year: "2024",
    description:
      "An executive home that blends contemporary design with traditional elements, creating a warm and inviting atmosphere.",
    images: [
      "/images/projects/nanas-residence/1.jpeg",
      "/images/projects/nanas-residence/2.jpeg",
      "/images/projects/nanas-residence/3.jpeg",
      "/images/projects/nanas-residence/4.jpeg",
    ],
    features: [
      "Home Office",
      "Entertainment Area",
      "Modern Kitchen",
      "Private Garden",
    ],
  },

  // ─────────── EDUCATIONAL ───────────
  {
    id: 5,
    name: "Faith Montessori - Admin Block",
    category: "educational",
    type: "Administrative Block",
    location: "Accra, Ghana",
    year: "2023",
    description:
      "The administrative block of Faith Montessori School, designed to provide a professional and welcoming environment for staff and visitors.",
    images: ["/images/projects/faith-montessori-admin-block/1.png"],
    features: [
      "Modern Offices",
      "Reception Area",
      "Conference Room",
      "Staff Facilities",
    ],
  },
  {
    id: 6,
    name: "Faith Montessori - Boys Dormitory",
    category: "educational",
    type: "Boys Dormitory",
    location: "Accra, Ghana",
    year: "2023",
    description:
      "A purpose-built boys' dormitory offering comfortable and secure accommodation for students of Faith Montessori School.",
    images: ["/images/projects/faith-montessori-boys-dorm/1.png"],
    features: [
      "Spacious Rooms",
      "Study Areas",
      "Secure Environment",
      "Recreational Space",
    ],
  },
  {
    id: 7,
    name: "Faith Montessori - Girls Dormitory",
    category: "educational",
    type: "Girls Dormitory",
    location: "Accra, Ghana",
    year: "2023",
    description:
      "A purpose-built girls' dormitory offering comfortable and secure accommodation for students of Faith Montessori School.",
    images: [
      "/images/projects/faith-montessori-girls-dorm/1.png",
      "/images/projects/faith-montessori-girls-dorm/2.png",
    ],
    features: [
      "Spacious Rooms",
      "Study Areas",
      "Secure Environment",
      "Recreational Space",
    ],
  },

  // ─────────── OFFICE & COMMERCIAL ───────────
  {
    id: 8,
    name: "Richmond Complex",
    category: "office",
    type: "Commercial Complex",
    location: "Accra, Ghana",
    year: "2024",
    description:
      "A modern commercial complex designed for productivity and prestige, featuring flexible workspaces and premium amenities.",
    images: [
      "/images/projects/richmond-complex/1.jpeg",
      "/images/projects/richmond-complex/2.jpeg",
      "/images/projects/richmond-complex/3.jpeg",
      "/images/projects/richmond-complex/4.jpeg",
    ],
    features: [
      "Open Workspaces",
      "Conference Rooms",
      "Rooftop Lounge",
      "Secure Parking",
    ],
  },

  // ─────────── MULTI-FAMILY HOUSING ───────────
  {
    id: 9,
    name: "Abena's Home",
    category: "multifamily",
    type: "Affordable Housing",
    location: "Accra, Ghana",
    year: "2024",
    description:
      "A thoughtfully designed affordable housing development that delivers quality living without compromise. Abena's Home makes dignified, well-built residences accessible to families and young professionals, proving that good design and affordability can go hand in hand.",
    images: [
      "/images/projects/abenas-home/1.jpeg",
      "/images/projects/abenas-home/2.jpeg",
    ],
    features: [
      "Affordable Units",
      "Quality Construction",
      "Community Spaces",
      "Secure Environment",
    ],
  },
  {
    id: 10,
    name: "Tachie Enclave",
    category: "multifamily",
    type: "Multi-Family Housing",
    location: "Accra, Ghana",
    year: "2024",
    description:
      "A contemporary multi-family housing development offering comfortable living spaces with community-focused design.",
    images: [
      "/images/projects/tachie-enclave/1.jpeg",
      "/images/projects/tachie-enclave/2.jpeg",
      "/images/projects/tachie-enclave/3.jpeg",
      "/images/projects/tachie-enclave/4.jpeg",
    ],
    features: [
      "Secure Environment",
      "Parking Facility",
      "Green Spaces",
      "Community Center",
    ],
  },
  {
    id: 11,
    name: "The Francis",
    category: "multifamily",
    type: "Luxury Apartments",
    location: "Cantonments, Accra",
    year: "2024",
    description:
      "Premium apartment complex offering luxury living with stunning city views and world-class amenities.",
    images: [
      "/images/projects/the-francis/1.jpeg",
      "/images/projects/the-francis/2.jpeg",
      "/images/projects/the-francis/3.jpeg",
      "/images/projects/the-francis/4.jpeg",
    ],
    features: [
      "Rooftop Terrace",
      "Fitness Center",
      "Swimming Pool",
      "24/7 Security",
    ],
  },
  {
    id: 12,
    name: "Airport Heights",
    category: "multifamily",
    type: "Residential Apartments",
    location: "Airport City, Accra",
    year: "2024",
    description:
      "A modern residential apartment development situated near the airport, offering convenient and comfortable urban living.",
    images: ["/images/projects/airport-heights/1.jpeg"],
    features: [
      "Modern Units",
      "Secure Parking",
      "Convenient Location",
      "Rooftop Views",
    ],
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Private Residences" },
  { id: "educational", label: "Educational Facilities" },
  { id: "office", label: "Offices & Commercial" },
  { id: "multifamily", label: "Multi-Family Housing" },
  { id: "religious", label: "Religious Buildings" },
  { id: "construction", label: "Projects under Construction" },
  { id: "built", label: "Built Projects" },
];

const stats = [
  { value: "50+", label: "Projects Completed", icon: Building2 },
  { value: "15+", label: "Happy Clients", icon: Users },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "12", label: "Featured Projects", icon: Sparkles },
];

const ALL_PROJECTS_INITIAL_COUNT = 6;

// ─────────── FEATURED ORDERING ───────────
const ALL_PROJECTS_ORDER = [
  "Richmond Complex",
  "Airport Heights",
  "Akorkor's Residence",
  "Kantu Residence",
  "Buabeng Residence",
  "Nana's Residence",
  "The Francis",
  "Tachie Enclave",
  "Abena's Home",
  "Faith Montessori - Girls Dormitory",
  "Faith Montessori - Boys Dormitory",
  "Faith Montessori - Admin Block",
];

const MULTIFAMILY_ORDER = [
  "Airport Heights",
  "Abena's Home",
  "Tachie Enclave",
  "The Francis",
];

const sortByName = (list, order) => {
  const indexMap = new Map(order.map((name, i) => [name, i]));
  return [...list].sort((a, b) => {
    const ai = indexMap.has(a.name) ? indexMap.get(a.name) : 999;
    const bi = indexMap.has(b.name) ? indexMap.get(b.name) : 999;
    return ai - bi;
  });
};

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════
export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleFilterChange = (id) => {
    setFilter(id);
    setShowAll(false);
  };

  const filteredProjects = useMemo(() => {
    let base;

    if (filter === "all") {
      base = sortByName(projects, ALL_PROJECTS_ORDER);
      if (!showAll) {
        return base.slice(0, ALL_PROJECTS_INITIAL_COUNT);
      }
      return base;
    }

    if (filter === "multifamily") {
      base = sortByName(
        projects.filter((p) => p.category === "multifamily"),
        MULTIFAMILY_ORDER
      );
      return base;
    }

    return projects.filter((p) => p.category === filter);
  }, [filter, showAll]);

  const totalForFilter =
    filter === "all"
      ? projects.length
      : projects.filter((p) => p.category === filter).length;

  const hasMore =
    filter === "all" &&
    !showAll &&
    totalForFilter > ALL_PROJECTS_INITIAL_COUNT;

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Highlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative min-h-screen -mt-24 md:-mt-28 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ProtectedImage
            src="/images/projects/richmond-complex/1.jpeg"
            alt="Richmond Complex"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            watermarkPosition="bottom-right"
            pointerEvents="none"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-green-300" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white">
              Our Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.05] mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            A Showcase of
            <br />
            <span className="relative inline-block mt-2">
              <span className="font-bold bg-gradient-to-r from-green-300 via-green-200 to-emerald-300 bg-clip-text text-transparent">
                Crafted Excellence
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
                  stroke="url(#heroUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="heroUnderline"
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
            From intimate family homes to landmark commercial developments —
            explore a curated selection of our architectural and construction
            work across Ghana.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">12 Featured Projects</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">Across Greater Accra</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <Award className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">10+ Years of Craft</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ EVERYTHING ELSE ═══════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* STATS — overlapping hero bottom */}
        <div className="relative z-20 -mt-20 md:-mt-24 mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl p-5 text-center shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 bg-gradient-to-br from-white via-white to-green-50/60 border border-green-100/80"
                >
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/10 blur-2xl group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 opacity-80" />
                  {Icon && (
                    <div className="relative flex justify-center mb-3">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                        <div className="relative p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                          <Icon
                            className="w-5 h-5 text-white"
                            strokeWidth={2.2}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <p className="relative text-3xl font-extrabold bg-gradient-to-br from-gray-900 via-green-800 to-green-600 bg-clip-text text-transparent leading-none">
                    {stat.value}
                  </p>
                  <p className="relative text-[11px] uppercase tracking-wider font-semibold text-gray-500 mt-2 group-hover:text-green-700 transition-colors">
                    {stat.label}
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-gradient-to-r from-transparent via-green-400/60 to-transparent group-hover:w-16 transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects found in this category yet.
            </p>
          </div>
        )}

        {/* View More Button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              View More Projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════
// PROJECT CARD
// ═══════════════════════════════════════════
function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative h-52 overflow-hidden">
        <ProtectedImage
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full"
          imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          watermarkPosition="bottom-right"
          pointerEvents="none"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute top-3 right-3 bg-green-500 text-white px-2.5 py-1 rounded-full text-[10px] font-medium z-20">
          {project.type}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {project.name}
        </h3>

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

        <p className="text-gray-600 text-sm line-clamp-2">
          {project.description}
        </p>

        <button className="mt-3 text-green-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
          View Project
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PROJECT MODAL
// ═══════════════════════════════════════════
function ProjectModal({ project, onClose }) {
  const imageCount = project.images.length;
  const gridCols = imageCount === 1 ? "grid-cols-1" : "grid-cols-2";
  const imageHeight = imageCount === 1 ? "h-96" : "h-48";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          <div className={`grid ${gridCols} gap-3 mb-6`}>
            {project.images.map((img, idx) => (
              <ProtectedImage
                key={idx}
                src={img}
                alt={`${project.name} - Image ${idx + 1}`}
                className={`rounded-xl w-full ${imageHeight}`}
                imgClassName="rounded-xl w-full h-full object-cover"
                watermarkPosition="bottom-right"
                pointerEvents="none"
              />
            ))}
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {project.name}
            </h2>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span className="text-green-600 font-medium">{project.type}</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Completed {project.year}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Key Features
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                >
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
                onClick={onClose}
                className="px-6 py-2.5 border-2 border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}