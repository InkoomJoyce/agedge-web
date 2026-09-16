// src/pages/About.jsx
import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  HardHat,
  PenTool,
  Wrench,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  Star,
  Cpu,
  ArrowRight,
  Sparkles,
  Award,
  Target,
  Layers,
  Mail,
} from "lucide-react";

// ═══════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════
const EXPERTISE_AREAS = [
  {
    icon: PenTool,
    title: "Design & Costing",
    desc: "Innovative designs with accurate cost estimation",
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "Full-scale construction management and execution",
  },
  {
    icon: Users,
    title: "Project Supervision",
    desc: "Dedicated oversight throughout project lifecycle",
  },
  {
    icon: Wrench,
    title: "Renovation Works",
    desc: "Transform existing spaces with modern upgrades",
  },
  {
    icon: Building2,
    title: "Facility Management",
    desc: "Ongoing maintenance and facility operations",
  },
  {
    icon: Target,
    title: "Feasibility Studies",
    desc: "Data-driven analysis to validate every project",
  },
];

const STATS = [
  { value: "10+", label: "Years of Excellence", icon: Star },
  { value: "50+", label: "Projects Completed", icon: Building2 },
  { value: "5+", label: "Expert Team", icon: Users },
  { value: "100%", label: "Client Satisfaction", icon: CheckCircle },
];

const TECHNOLOGIES = [
  "AutoCAD",
  "Revit",
  "Lumion",
  "3ds Max",
  "SketchUp",
  "Photoshop",
  "Illustrator",
  "Enscape",
];

const OFFICE_IMAGES = [
  {
    url: "/images/projects/abenas-home/1.jpeg",
    title: "Design Studio",
    location: "Where ideas take shape",
  },
  {
    url: "/images/projects/the-francis/1.jpeg",
    title: "Built to Impress",
    location: "A glimpse of our work",
  },
];

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════
export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("expertise");
  const sectionRef = useRef(null);

  const tabs = useMemo(
    () => [
      { id: "expertise", label: "Areas of Expertise" },
      { id: "technology", label: "Technology" },
    ],
    []
  );

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "20px" }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getAnimationClasses = (delay = 0) => {
    return `transition-all duration-700 delay-${delay} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Highlights (orbs behind everything) */}
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

      {/* ═══════════ HERO SECTION — FULL SCREEN ═══════════ */}
      <section
        ref={sectionRef}
        className="relative min-h-screen -mt-24 md:-mt-28 flex items-center overflow-hidden"
      >
        {/* Background Image — Richmond Complex */}
        <div className="absolute inset-0">
          <img
            src="/images/projects/richmond-complex/3.jpeg"
            alt="Richmond Complex"
            className="w-full h-full object-cover"
          />
          {/* Light overlay — image stays visible */}
          <div className="absolute inset-0 bg-black/25" />
          {/* Strong bottom gradient for text legibility */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          {/* Subtle top fade for header */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
        </div>

        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-40">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-white">
              Since 2016 • Ghana's Trusted Build Firm
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.05] mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            The Story Behind
            <br />
            <span className="relative inline-block mt-2">
              <span className="font-bold bg-gradient-to-r from-green-300 via-green-200 to-emerald-300 bg-clip-text text-transparent">
                AGEdge Global
              </span>
              {/* Decorative underline */}
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C50 3 150 1 298 6"
                  stroke="url(#aboutUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="aboutUnderline"
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

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-100 font-light leading-relaxed mt-8 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            A Ghanaian architectural design and build firm — made up of
            architects, engineers, project managers, and built environment
            professionals. For over a decade we've been shaping skylines across
            Ghana.
          </p>

          {/* Floating stat chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">Design • Build • Manage</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">Across Ghana</span>
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
        {/* STATS — overlapping the hero bottom, colorful cards */}
        <div className="relative z-20 -mt-20 md:-mt-24 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              const themes = [
                {
                  card: "from-emerald-50 via-white to-emerald-100/60 border-emerald-100",
                  bubble: "from-emerald-500 to-green-600 shadow-emerald-500/30",
                  text: "from-emerald-900 via-emerald-700 to-emerald-500",
                  bar: "from-emerald-400 via-green-500 to-emerald-400",
                  label: "group-hover:text-emerald-700",
                  blob: "from-emerald-400/20 to-green-400/10",
                },
                {
                  card: "from-blue-50 via-white to-blue-100/60 border-blue-100",
                  bubble: "from-blue-500 to-indigo-600 shadow-blue-500/30",
                  text: "from-blue-900 via-blue-700 to-indigo-500",
                  bar: "from-blue-400 via-indigo-500 to-blue-400",
                  label: "group-hover:text-blue-700",
                  blob: "from-blue-400/20 to-indigo-400/10",
                },
                {
                  card: "from-amber-50 via-white to-amber-100/60 border-amber-100",
                  bubble: "from-amber-500 to-orange-600 shadow-amber-500/30",
                  text: "from-amber-900 via-amber-700 to-orange-500",
                  bar: "from-amber-400 via-orange-500 to-amber-400",
                  label: "group-hover:text-amber-700",
                  blob: "from-amber-400/20 to-orange-400/10",
                },
                {
                  card: "from-purple-50 via-white to-purple-100/60 border-purple-100",
                  bubble:
                    "from-purple-500 to-fuchsia-600 shadow-purple-500/30",
                  text: "from-purple-900 via-purple-700 to-fuchsia-500",
                  bar: "from-purple-400 via-fuchsia-500 to-purple-400",
                  label: "group-hover:text-purple-700",
                  blob: "from-purple-400/20 to-fuchsia-400/10",
                },
              ];
              const theme = themes[idx % themes.length];

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

                  {Icon && (
                    <div className="relative flex justify-center mb-3">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.bubble} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
                        />
                        <div
                          className={`relative p-3 rounded-2xl bg-gradient-to-br ${theme.bubble} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon
                            className="w-5 h-5 text-white"
                            strokeWidth={2.2}
                          />
                        </div>
                      </div>
                    </div>
                  )}

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

        {/* INTRO TEXT — brief "who we are" */}
        <div className={`mb-16 text-center max-w-3xl mx-auto ${getAnimationClasses(100)}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-4">
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 mb-4">
            Building with{" "}
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Purpose & Precision
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            AGEdge Global Limited is a Ghanaian architectural design and build
            firm made up of architects, engineers, project managers and other
            built environment professionals. For the past ten years, we have
            executed several projects across Ghana, leveraging innovation and
            sustainability.
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-300" />
            <div className="w-2 h-2 rotate-45 bg-green-500" />
            <div className="w-1.5 h-1.5 rotate-45 bg-green-400/60" />
            <div className="w-2 h-2 rotate-45 bg-green-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-300" />
          </div>
        </div>

        {/* TABS SECTION */}
        <div className={`mb-16 ${getAnimationClasses(200)}`}>
          {/* Tab Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-1.5 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {/* Expertise Tab */}
            {activeTab === "expertise" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {EXPERTISE_AREAS.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative bg-white rounded-xl border border-gray-200/60 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-5 overflow-hidden"
                    >
                      {/* Corner blob */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-green-400/10 to-emerald-400/5 blur-2xl group-hover:from-green-400/25 transition-all duration-500" />

                      <div className="relative inline-flex p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                      </div>

                      <h3 className="relative text-base font-bold text-gray-900 mb-1">
                        {area.title}
                      </h3>
                      <p className="relative text-sm text-gray-600 leading-relaxed">
                        {area.desc}
                      </p>

                      <div className="relative mt-4 h-0.5 w-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-20 transition-all duration-500" />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Technology Tab */}
            {activeTab === "technology" && (
              <div className="bg-white rounded-2xl border border-gray-200/60 shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative overflow-hidden min-h-[280px]">
                    <img
                      src="/images/projects/the-francis/1.jpeg"
                      alt="Architecture technology"
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-0.5 bg-green-400" />
                        <span className="text-green-400 text-[10px] font-medium tracking-wider uppercase">
                          Innovation
                        </span>
                      </div>
                      <p className="text-white text-sm font-semibold">
                        Precision begins with the right tools
                      </p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-6 h-px bg-green-400" />
                      <span className="text-green-600 text-xs font-medium tracking-wider uppercase">
                        Our Stack
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Cutting-Edge Technology
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      We continuously explore modern technology to improve our
                      product delivery, undertaking regular updates to enhance
                      the quality of our work.
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {TECHNOLOGIES.map((tech, idx) => (
                        <div
                          key={idx}
                          className="group flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 border border-transparent hover:border-green-200"
                        >
                          <Cpu className="w-3.5 h-3.5 text-green-500 group-hover:scale-110 transition-transform" />
                          <span className="text-xs text-gray-700 font-medium">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* OFFICE / SPACE IMAGES */}
        <div className={`mb-16 ${getAnimationClasses(300)}`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-3">
              <span>A Glimpse Inside</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
              Our Work in{" "}
              <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Action
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {OFFICE_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-[260px] sm:h-[320px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-0.5 bg-green-400" />
                      <span className="text-green-400 text-[10px] font-medium tracking-wider uppercase">
                        Our World
                      </span>
                    </div>
                    <p className="text-white text-lg font-bold">{item.title}</p>
                    <p className="text-white/70 text-xs">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mb-16 ${getAnimationClasses(400)}`}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 p-8 md:p-12 text-center shadow-2xl shadow-green-500/20">
            {/* Decorative orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to Build With Us?
              </h3>
              <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm sm:text-base">
                From feasibility studies to full-scale construction — let's
                bring your vision to life.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-md border border-white/30 text-white rounded-full font-medium hover:bg-white/25 transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}