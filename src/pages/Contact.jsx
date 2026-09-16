import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  User,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Send,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [activeForm, setActiveForm] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
    projectType: "",
    budget: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState("");

  const [contentVisible, setContentVisible] = useState(false);
  const contentRef = useRef(null);

  const FORMSPREE_IDS = {
    contact: "xpqnbrvy",
    consultation: "mojbrwgl",
    quote: "xqejnbra",
  };

  const contactInfo = {
    phone: ["0256073041"],
    email: ["info@agedgeglobal.com"],
    address: "Number 1 Beige Street, Azumah, New Weija, Accra",
    gps: "GS-0065-2998",
    hours: "Monday – Friday, 8:00 AM – 5:00 PM",
  };

  const projectTypes = [
    "Residential Villa",
    "Commercial Building",
    "Educational Facility",
    "Multi-Family Housing",
    "Renovation Project",
    "Material Supply",
  ];

  const budgetRanges = [
    "Under $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000 - $1,000,000",
    "Over $1,000,000",
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact AGEdge Global - Architecture and Construction Experts",
    description:
      "Contact AGEdge Global for architecture, construction, real estate, and building services in Ghana. Get a free consultation for your project.",
    url: "https://agedgeglobal.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "AGEdge Global",
      telephone: "+233256073041",
      email: "info@agedgeglobal.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Number 1 Beige Street, Azumah, New Weija",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    },
  };

  useEffect(() => {
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setContentVisible(true);
        observer.disconnect();
      }
    }, options);

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails("");

    const formElement = e.target;
    const formDataObj = new FormData(formElement);
    const formType = formDataObj.get("form_type");

    const formspreeId = FORMSPREE_IDS[formType] || FORMSPREE_IDS.contact;

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formDataObj,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredDate: "",
          projectType: "",
          budget: "",
          address: "",
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitStatus("error");
        setErrorDetails(
          data?.errors?.map((err) => err.message).join(", ") ||
            "Something went wrong. Please try again."
        );
        setTimeout(() => setSubmitStatus(null), 6000);
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorDetails(
        "Network error. Please check your connection and try again."
      );
      setTimeout(() => setSubmitStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Green Background Highlights */}
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ═══════════ HERO SECTION — FULL SCREEN ═══════════ */}
      <section className="relative min-h-screen -mt-24 md:-mt-28 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/projects/richmond-complex/1.jpeg"
            alt="Contact AGEdge Global"
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
            <MessageCircle className="w-3.5 h-3.5 text-green-300" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white">
              Get in Touch
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.05] mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Let's Build
            <br />
            <span className="relative inline-block mt-2">
              <span className="font-bold bg-gradient-to-r from-green-300 via-green-200 to-emerald-300 bg-clip-text text-transparent">
                Something Great
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
                  stroke="url(#contactUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="contactUnderline"
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
            Whether you're starting a new build, renovating a space, or just
            exploring ideas — our team is ready to help bring your vision to
            life.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="tel:0256073041"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm hover:bg-white/25 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">0256073041</span>
            </a>
            <a
              href="mailto:info@agedgeglobal.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm hover:bg-white/25 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">info@agedgeglobal.com</span>
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <Clock className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">Mon – Fri, 8AM – 5PM</span>
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
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Info cards — overlapping hero bottom */}
        <div className="relative z-20 -mt-20 md:-mt-24 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "0256073041",
                href: "tel:0256073041",
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
                icon: Mail,
                label: "Email Us",
                value: "info@agedgeglobal.com",
                href: "mailto:info@agedgeglobal.com",
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
                icon: MapPin,
                label: "Visit Us",
                value: "New Weija, Accra",
                subvalue: "GS-0065-2998",
                href: null,
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
                icon: Clock,
                label: "Working Hours",
                value: "Mon – Fri",
                subvalue: "8:00 AM – 5:00 PM",
                href: null,
                theme: {
                  card: "from-purple-50 via-white to-purple-100/60 border-purple-100",
                  bubble: "from-purple-500 to-fuchsia-600 shadow-purple-500/30",
                  text: "from-purple-900 via-purple-700 to-fuchsia-500",
                  bar: "from-purple-400 via-fuchsia-500 to-purple-400",
                  label: "group-hover:text-purple-700",
                  blob: "from-purple-400/20 to-fuchsia-400/10",
                },
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              const theme = item.theme;
              const Card = item.href ? "a" : "div";
              const cardProps = item.href
                ? { href: item.href, className: "block" }
                : {};

              return (
                <Card
                  key={idx}
                  {...cardProps}
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
                    className={`relative text-[10px] uppercase tracking-wider font-semibold text-gray-500 mb-1 transition-colors ${theme.label}`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`relative text-sm font-bold bg-gradient-to-br ${theme.text} bg-clip-text text-transparent leading-tight break-words`}
                  >
                    {item.value}
                  </p>
                  {item.subvalue && (
                    <p className="relative text-xs text-gray-500 mt-1">
                      {item.subvalue}
                    </p>
                  )}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-gradient-to-r from-transparent via-green-400/60 to-transparent group-hover:w-16 transition-all duration-500" />
                </Card>
              );
            })}
          </div>
        </div>

        {/* Section heading */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Send a Message</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 mb-3">
            How Can We{" "}
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Help You?
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the form that fits your needs — a quick message, a
            consultation booking, or a project quote request.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: "contact", label: "Send a Message" },
            { id: "consultation", label: "Book Consultation" },
            { id: "quote", label: "Request a Quote" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveForm(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeForm === tab.id
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ═══════════ CENTERED FORM ═══════════ */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200/60 p-6 md:p-10">
            {/* SUCCESS */}
            {submitStatus === "success" && (
              <div className="mb-6 p-5 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">
                    Message sent successfully!
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    Thank you for reaching out — we'll get back to you within 24
                    hours (Mon–Fri).
                  </p>
                </div>
              </div>
            )}

            {/* ERROR */}
            {submitStatus === "error" && (
              <div className="mb-6 p-5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800">
                    Something went wrong
                  </p>
                  <p className="text-sm text-red-700 mt-1">
                    {errorDetails ||
                      "Please try again or call us at 0256073041."}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="form_type" value={activeForm} />

              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      placeholder="0256073041"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Consultation fields */}
              {activeForm === "consultation" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Quote fields */}
              {activeForm === "quote" && (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      >
                        <option value="">Select type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      >
                        <option value="">Select range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Address / Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                        placeholder="e.g., East Legon, Accra"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}