import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiTag,
  FiBookOpen,
  FiUsers,
  FiShare2,
  FiMessageCircle,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiSend,
  FiTrendingUp,
  FiEdit3,
} from "react-icons/fi";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: "all", label: "All Posts", count: 8 },
    { id: "architecture", label: "Architecture", count: 1 },
    { id: "construction", label: "Construction", count: 2 },
    { id: "design", label: "Design Tips", count: 3 },
    { id: "industry", label: "Industry News", count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Modern Architectural Trends Shaping Ghana's Skyline",
      category: "architecture",
      excerpt:
        "Explore the latest architectural innovations transforming residential and commercial spaces across Ghana...",
      content: `
        <p>Ghana's architectural landscape is evolving rapidly, blending traditional aesthetics with contemporary design principles. From sustainable materials to smart home integration, here are the top trends reshaping our cities.</p>
        
        <h2>1. Sustainable Design</h2>
        <p>Green building practices are becoming standard, with architects incorporating energy-efficient systems, natural lighting, and local materials to reduce environmental impact.</p>
        
        <h2>2. Open Floor Plans</h2>
        <p>Modern Ghanaian homes are embracing open concepts that maximize space and natural light, creating flowing transitions between living, dining, and kitchen areas.</p>
        
        <h2>3. Indoor-Outdoor Living</h2>
        <p>Large sliding doors, covered patios, and garden spaces are blurring the lines between interior and exterior, perfect for our tropical climate.</p>
        
        <h2>4. Smart Home Technology</h2>
        <p>From automated lighting to security systems, technology integration is becoming essential in luxury developments across Accra and beyond.</p>
      `,
      image:
        "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=800&h=500&fit=crop",
      author: "Victor Anaafi Gyasi",
      authorRole: "Principal Architect",
      date: "April 15, 2026",
      readTime: "5 min read",
      tags: ["Architecture", "Trends", "Innovation"],
      slug: "10-modern-architectural-trends-shaping-ghanas-skyline",
    },
    {
      id: 2,
      title: "Choosing the Right Building Materials for Your Home",
      category: "construction",
      excerpt:
        "A comprehensive guide to selecting quality materials that ensure durability, aesthetics, and value for money...",
      content: `
        <p>The foundation of any great building lies in its materials. Understanding what to look for and where to source quality supplies can make all the difference in your project's success.</p>
        
        <h2>Understanding Material Grades</h2>
        <p>Not all materials are created equal. Learn about the different grades of cement, steel, and finishes available in the Ghanaian market.</p>
        
        <h2>Sourcing Tips</h2>
        <p>Working with reputable suppliers who provide certification and warranties ensures you're getting genuine products that will stand the test of time.</p>
        
        <h2>Cost vs. Quality</h2>
        <p>While premium materials cost more upfront, they often save money long-term through reduced maintenance and replacement needs.</p>
      `,
      image:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=500&fit=crop",
      author: "Michael Dankyi Yeboah",
      authorRole: "Project Manager & Quantity Surveyor",
      date: "April 10, 2026",
      readTime: "4 min read",
      tags: ["Materials", "Construction", "Quality"],
      slug: "choosing-the-right-building-materials",
    },
    {
      id: 3,
      title: "Sustainable Design: Building for Tomorrow",
      category: "design",
      excerpt:
        "How eco-friendly architecture is reducing costs and environmental impact for homeowners across Africa...",
      content: `
        <p>Sustainable design isn't just good for the planet—it's good for your wallet. Energy-efficient homes save money while providing healthier living environments.</p>
        
        <h2>Passive Cooling Techniques</h2>
        <p>Strategic window placement, cross-ventilation, and thermal mass materials can significantly reduce air conditioning needs in Ghana's tropical climate.</p>
        
        <h2>Solar Integration</h2>
        <p>Solar panels and solar water heaters are becoming more affordable, offering independence from unreliable grid power.</p>
        
        <h2>Rainwater Harvesting</h2>
        <p>Collecting rainwater for landscaping and non-potable uses reduces water bills and environmental impact.</p>
      `,
      image:
        "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=500&fit=crop",
      author: "Selorm Lumor",
      authorRole: "Assistant Architect",
      date: "April 5, 2026",
      readTime: "6 min read",
      tags: ["Sustainability", "Green Building", "Design"],
      slug: "sustainable-design-building-for-tomorrow",
    },
    {
      id: 4,
      title: "The Rise of Luxury Real Estate in Accra",
      category: "industry",
      excerpt:
        "Discover what's driving demand for premium properties in East Legon, Cantonments, and beyond...",
      content: `
        <p>Accra's luxury real estate market is booming, driven by returning diaspora, foreign investment, and a growing affluent class seeking world-class living standards.</p>
        
        <h2>Prime Locations</h2>
        <p>East Legon, Cantonments, and Airport Residential Area remain the most desirable addresses, with property values appreciating steadily.</p>
        
        <h2>What Buyers Want</h2>
        <p>Modern amenities, security features, and premium finishes are non-negotiable for today's luxury home buyers.</p>
        
        <h2>Investment Potential</h2>
        <p>Real estate remains one of Ghana's most stable investment vehicles, offering both capital appreciation and rental income opportunities.</p>
      `,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=500&fit=crop",
      author: "Wilberforce Adote Brown",
      authorRole: "Civil & Structural Engineer",
      date: "March 28, 2026",
      readTime: "5 min read",
      tags: ["Real Estate", "Luxury", "Investment"],
      slug: "rise-of-luxury-real-estate-in-accra",
    },
    {
      id: 5,
      title: "5 Common Construction Mistakes to Avoid",
      category: "construction",
      excerpt:
        "Expert advice on preventing costly errors during your building project, from foundation to finishing...",
      content: `
        <p>Construction projects are complex, and small mistakes can lead to major headaches. Learn from these common pitfalls to ensure your project runs smoothly.</p>
        
        <h2>Poor Planning</h2>
        <p>Rushing into construction without proper architectural drawings and approvals often leads to costly changes mid-project.</p>
        
        <h2>Inadequate Supervision</h2>
        <p>Regular site visits and quality checks catch issues early before they become expensive problems.</p>
        
        <h2>Ignoring Soil Conditions</h2>
        <p>Proper soil testing determines foundation requirements—skipping this step risks structural issues down the line.</p>
      `,
      image:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=500&fit=crop",
      author: "Michael Dankyi Yeboah",
      authorRole: "Project Manager & Quantity Surveyor",
      date: "March 20, 2026",
      readTime: "4 min read",
      tags: ["Construction", "Tips", "Avoid Mistakes"],
      slug: "common-construction-mistakes-to-avoid",
    },
    {
      id: 6,
      title: "Biophilic Design: Bringing Nature Indoors",
      category: "design",
      excerpt:
        "How incorporating natural elements into your home design can improve wellbeing and aesthetic appeal...",
      content: `
        <p>Biophilic design connects occupants with nature, reducing stress and improving cognitive function through strategic use of plants, natural light, and organic materials.</p>
        
        <h2>Natural Light Optimization</h2>
        <p>Skylights, large windows, and light wells bring sunlight deep into interior spaces, reducing artificial lighting needs.</p>
        
        <h2>Indoor Gardens</h2>
        <p>Living walls, potted plants, and courtyard gardens purify air while creating calming visual focal points.</p>
        
        <h2>Natural Materials</h2>
        <p>Wood, stone, and bamboo add warmth and texture while supporting local artisans and sustainable forestry.</p>
      `,
      image:
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=800&h=500&fit=crop",
      author: "Selorm Lumor",
      authorRole: "Assistant Architect",
      date: "March 15, 2026",
      readTime: "5 min read",
      tags: ["Design", "Biophilic", "Wellness"],
      slug: "biophilic-design-bringing-nature-indoors",
    },
    {
      id: 7,
      title: "The Future of Construction Technology in Ghana",
      category: "industry",
      excerpt:
        "From BIM to drones, how technology is revolutionizing the local construction industry...",
      content: `
        <p>Technology is transforming how we design, plan, and execute construction projects in Ghana, improving efficiency and reducing errors.</p>
        
        <h2>Building Information Modeling (BIM)</h2>
        <p>3D modeling software allows architects, engineers, and contractors to coordinate seamlessly, catching clashes before construction begins.</p>
        
        <h2>Drone Surveying</h2>
        <p>UAVs provide accurate topographic data and progress monitoring, saving time compared to traditional surveying methods.</p>
        
        <h2>Project Management Software</h2>
        <p>Digital tools keep teams aligned, tracking schedules, budgets, and communications in real-time.</p>
      `,
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=800&h=500&fit=crop",
      author: "Victor Anaafi Gyasi",
      authorRole: "Principal Architect",
      date: "March 10, 2026",
      readTime: "4 min read",
      tags: ["Technology", "Innovation", "BIM"],
      slug: "future-of-construction-technology-in-ghana",
    },
    {
      id: 8,
      title: "Maximizing Small Spaces: Design Tips for Apartments",
      category: "design",
      excerpt:
        "Creative solutions for making compact living spaces feel larger, brighter, and more functional...",
      content: `
        <p>Urban living often means smaller footprints, but smart design can make even modest apartments feel spacious and luxurious.</p>
        
        <h2>Multi-Functional Furniture</h2>
        <p>Storage beds, foldable desks, and expandable tables maximize utility without crowding the room.</p>
        
        <h2>Strategic Mirrors</h2>
        <p>Large mirrors reflect light and create the illusion of depth, making rooms appear twice their size.</p>
        
        <h2>Vertical Storage</h2>
        <p>Floor-to-ceiling shelving and wall-mounted cabinets utilize otherwise wasted wall space.</p>
      `,
      image:
        "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?w=800&h=500&fit=crop",
      author: "Paul Tetteh",
      authorRole: "Senior Technician",
      date: "March 5, 2026",
      readTime: "3 min read",
      tags: ["Interior Design", "Small Spaces", "Tips"],
      slug: "maximizing-small-spaces-design-tips",
    },
  ];

  const featuredPosts = blogPosts.slice(0, 3);
  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const getShareUrl = (platform, post) => {
    const url = encodeURIComponent(
      `https://agedgeglobal.com/blog/${post.slug}`
    );
    const title = encodeURIComponent(post.title);

    switch (platform) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case "whatsapp":
        return `https://api.whatsapp.com/send?text=${title}%20-%20${url}`;
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      case "telegram":
        return `https://t.me/share/url?url=${url}&text=${title}`;
      default:
        return "#";
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
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
        {/* Background Image — The Francis */}
        <div className="absolute inset-0">
          <img
            src="/images/projects/the-francis/1.jpeg"
            alt="AGEdge Global Blog - Architecture and Construction Insights"
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

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-40">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm mb-6">
            <FiEdit3 className="w-3.5 h-3.5 text-green-300" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white">
              Insights & Updates
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.05] mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Our
            <br />
            <span className="relative inline-block mt-2">
              <span className="font-bold bg-gradient-to-r from-green-300 via-green-200 to-emerald-300 bg-clip-text text-transparent">
                Blog
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
                  stroke="url(#blogUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="blogUnderline"
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
            Expert insights on architecture, construction, design, and industry
            trends — written by the professionals who shape Ghana's skyline.
          </p>

          {/* Floating chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <FiBookOpen className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">8 Articles</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <FiUsers className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">Expert Contributors</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <FiTrendingUp className="w-3.5 h-3.5 text-green-300" />
              <span className="font-medium">Industry Trends</span>
            </div>
          </div>

          {/* Decorative divider */}
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
        <div className="relative z-20 -mt-20 md:-mt-24 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: FiBookOpen, value: "8+", label: "Articles Published" },
              { icon: FiUsers, value: "5+", label: "Expert Contributors" },
              { icon: FiClock, value: "4", label: "Minutes Avg Read" },
              { icon: FiTag, value: "5+", label: "Topics Covered" },
            ].map((stat, idx) => {
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
                  bubble: "from-purple-500 to-fuchsia-600 shadow-purple-500/30",
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
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-4">
            <FiBookOpen className="w-4 h-4" />
            <span>Latest Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 mb-3">
            Stories from the{" "}
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Field
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into articles about design, construction, materials, and the
            trends shaping Ghana's built environment.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
              <span
                className={`text-[10px] ${
                  selectedCategory === cat.id
                    ? "text-green-200"
                    : "text-gray-400"
                }`}
              >
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === "all" && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500 rounded-full"></span>
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/50 hover:-translate-y-1"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-600 text-white px-2 py-0.5 rounded-lg text-[10px] font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-1.5">
                      <FiCalendar className="w-3 h-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <FiClock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-600 font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-900 truncate">
                          {post.author}
                        </p>
                        <p className="text-[10px] text-gray-500 truncate">
                          {post.authorRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-500 rounded-full"></span>
            {selectedCategory === "all"
              ? "Latest Articles"
              : `${categories.find((c) => c.id === selectedCategory)?.label}`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(selectedCategory === "all"
              ? filteredPosts.slice(3)
              : filteredPosts
            ).map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/50 hover:-translate-y-1"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-green-600/90 text-white px-2 py-0.5 rounded-lg text-[10px] font-semibold backdrop-blur-sm">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-1.5">
                    <FiCalendar className="w-3 h-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <FiClock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px] text-gray-600 font-medium">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-600 truncate max-w-[100px]">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-green-600 text-sm group-hover:translate-x-1 transition-transform inline-block font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="sticky top-4 float-right z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors mr-4 mt-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="clear-both p-6 md:p-8">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-56 md:h-72 object-cover rounded-xl mb-6"
              />

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" /> {selectedPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FiClock className="w-4 h-4" /> {selectedPost.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FiTag className="w-4 h-4" /> {selectedPost.tags.join(", ")}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-lg font-bold text-green-600">
                  {selectedPost.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {selectedPost.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedPost.authorRole}
                  </p>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-gray-100">
                {selectedPost.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 p-5 bg-gray-50 rounded-xl border border-gray-200/50">
                <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                  <FiShare2 className="w-4 h-4" />
                  Share this article:
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={getShareUrl("facebook", selectedPost)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg text-sm hover:bg-[#1864D9] transition-colors"
                  >
                    <FiFacebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href={getShareUrl("twitter", selectedPost)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#000000] text-white rounded-lg text-sm hover:bg-[#333333] transition-colors"
                  >
                    <FiTwitter className="w-4 h-4" />
                    Twitter
                  </a>
                  <a
                    href={getShareUrl("whatsapp", selectedPost)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm hover:bg-[#1DA851] transition-colors"
                  >
                    <FiMessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={getShareUrl("linkedin", selectedPost)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg text-sm hover:bg-[#084B8C] transition-colors"
                  >
                    <FiLinkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={getShareUrl("telegram", selectedPost)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0088CC] text-white rounded-lg text-sm hover:bg-[#006699] transition-colors"
                  >
                    <FiSend className="w-4 h-4" />
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}