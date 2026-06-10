import { useState } from 'react'

export default function Magazine() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [activeSection, setActiveSection] = useState('featured')

  // Featured Cover Story
  const coverStory = {
    title: "THE FUTURE OF AFRICAN ARCHITECTURE",
    subtitle: "How a new generation of architects is redefining the continent's skyline",
    author: "VICTOR ANAAFI GYASI",
    issue: "VOLUME 01 • ISSUE 02",
    image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=900&fit=crop",
    excerpt: "From Accra to Lagos, a design revolution is transforming how we think about space, culture, and sustainability..."
  }

  // Featured Articles
  const featuredArticles = [
    {
      id: 1,
      title: "CONCRETE POETRY",
      subtitle: "The brutalist revival in contemporary residential design",
      author: "SELORM LUMOR",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=600&fit=crop",
      category: "DESIGN",
      readTime: "8 MIN READ",
      content: "Brutalism is experiencing a renaissance, but with a softer touch. Modern architects are embracing concrete's raw beauty while incorporating warmth through wood, glass, and strategic landscaping. This architectural language speaks of honesty, strength, and timelessness."
    },
    {
      id: 2,
      title: "THE MATERIAL REVOLUTION",
      subtitle: "Sustainable innovations changing construction",
      author: "MICHAEL DANKYI YEBOAH",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=600&fit=crop",
      category: "TECHNOLOGY",
      readTime: "6 MIN READ",
      content: "From bamboo composites to recycled plastic bricks, the materials shaping tomorrow's buildings are as innovative as they are sustainable. These new materials don't just reduce environmental impact—they're creating entirely new aesthetic possibilities."
    },
    {
      id: 3,
      title: "SPACE & LIGHT",
      subtitle: "Mastering natural illumination in tropical architecture",
      author: "WILBERFORCE ADOTE BROWN",
      image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=600&fit=crop",
      category: "TECHNIQUE",
      readTime: "7 MIN READ",
      content: "In Ghana's tropical climate, natural light is both a blessing and a challenge. Discover how strategic window placement, light wells, and reflective surfaces create luminous spaces without overheating."
    }
  ]

  // Magazine Sections
  const sections = [
    {
      name: "EDITOR'S PICK",
      articles: [
        {
          id: 4,
          title: "THE VISIONARY: Victor Anaafi Gyasi on 15 years of shaping Ghana's skyline",
          author: "EDITORIAL TEAM",
          image: "https://images.pexels.com/photos/1560259/pexels-photo-1560259.jpeg?w=800&h=500&fit=crop",
          excerpt: "In an exclusive interview, the principal architect shares insights on leadership, design philosophy, and the future of Ghanaian architecture."
        },
        {
          id: 5,
          title: "BEFORE & AFTER: The Buaben Residence Transformation",
          author: "PROJECT SPOTLIGHT",
          image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=500&fit=crop",
          excerpt: "See how a dated property was transformed into a stunning modern masterpiece through thoughtful design and quality craftsmanship."
        }
      ]
    },
    {
      name: "PROJECTS",
      articles: [
        {
          id: 6,
          title: "FAITH MONTESSORI: Designing for the future of education",
          author: "PAUL TETTEH",
          image: "https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?w=800&h=500&fit=crop",
          excerpt: "How educational architecture impacts learning outcomes and community development."
        },
        {
          id: 7,
          title: "TACHIE ENCLAVE: Reimagining multi-family living",
          author: "MICHAEL DANKYI YEBOAH",
          image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=500&fit=crop",
          excerpt: "Creating community-focused residential spaces that balance privacy with connection."
        }
      ]
    },
    {
      name: "DESIGN",
      articles: [
        {
          id: 8,
          title: "THE ART OF FINISHING: Selecting premium materials",
          author: "SELORM LUMOR",
          image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=800&h=500&fit=crop",
          excerpt: "A guide to choosing finishes that elevate your space from ordinary to extraordinary."
        },
        {
          id: 9,
          title: "BIOPHILIC DESIGN: Bringing nature into your home",
          author: "VICTOR ANAAFI GYASI",
          image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?w=800&h=500&fit=crop",
          excerpt: "How incorporating natural elements improves wellbeing and aesthetic appeal."
        }
      ]
    }
  ]

  // Full Page Spreads (Double-page features)
  const fullPageSpreads = [
    {
      id: 1,
      title: "THE INDEPENDENCE ARCH",
      subtitle: "A Symbol of Freedom",
      imageLeft: "https://images.pexels.com/photos/28904657/pexels-photo-28904657.jpeg?w=800&h=600&fit=crop",
      imageRight: "https://images.pexels.com/photos/245436/pexels-photo-245436.jpeg?w=800&h=600&fit=crop",
      caption: "Ghana's most iconic landmark stands as a testament to architectural vision and national pride."
    }
  ]

  // Quick Read Grid (Small cards)
  const quickReads = [
    {
      id: 10,
      title: "5 Trends Shaping 2026",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?w=400&h=300&fit=crop",
      readTime: "3 MIN"
    },
    {
      id: 11,
      title: "Sustainable Materials Guide",
      image: "https://images.pexels.com/photos/2927008/pexels-photo-2927008.jpeg?w=400&h=300&fit=crop",
      readTime: "4 MIN"
    },
    {
      id: 12,
      title: "Lighting Masterclass",
      image: "https://images.pexels.com/photos/2760253/pexels-photo-2760253.jpeg?w=400&h=300&fit=crop",
      readTime: "5 MIN"
    },
    {
      id: 13,
      title: "Space Planning Tips",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=400&h=300&fit=crop",
      readTime: "3 MIN"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Magazine Header - Fashion Magazine Style */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-2">ARCHITECTURE & DESIGN QUARTERLY</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-900">
              AGEDGE<span className="font-bold text-amber-500">/</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2">VOLUME I — THE DESIGN ISSUE</p>
          </div>
          
          {/* Magazine Navigation */}
          <div className="flex justify-center gap-8 mt-6 text-xs tracking-wide">
            <button className="text-gray-600 hover:text-amber-500 transition-colors">FEATURES</button>
            <button className="text-gray-600 hover:text-amber-500 transition-colors">PROJECTS</button>
            <button className="text-gray-600 hover:text-amber-500 transition-colors">INTERVIEWS</button>
            <button className="text-gray-600 hover:text-amber-500 transition-colors">DESIGN</button>
            <button className="text-gray-600 hover:text-amber-500 transition-colors">ARCHIVE</button>
          </div>
        </div>
      </div>

      {/* Cover Story - Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] flex items-end bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={coverStory.image}
            alt={coverStory.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-sm tracking-[0.2em] mb-4">{coverStory.issue}</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              {coverStory.title}
            </h2>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              {coverStory.subtitle}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-amber-400"></div>
              <p className="text-sm tracking-wide">{coverStory.author}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Note */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center border-b border-gray-100">
        <p className="text-sm tracking-[0.2em] text-amber-500 mb-4">EDITOR'S LETTER</p>
        <h3 className="text-3xl font-light text-gray-900 mb-6">Architecture as Storytelling</h3>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          "Great architecture tells a story—of place, of people, of possibility. In this issue, 
          we explore the narratives behind Ghana's most inspiring spaces, from private residences 
          to public monuments. Join us as we celebrate the art of building."
        </p>
        <div className="mt-6">
          <div className="w-12 h-px bg-amber-300 mx-auto"></div>
          <p className="text-sm text-gray-400 mt-4">Victor Anaafi Gyasi — Editor-in-Chief</p>
        </div>
      </div>

      {/* Featured Articles - Magazine Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] text-amber-500">FEATURES</p>
          <h3 className="text-3xl font-light text-gray-900 mt-2">This Month's Highlights</h3>
          <div className="w-12 h-px bg-amber-300 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <div
              key={article.id}
              className="group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-black/60 text-white px-3 py-1 rounded-full tracking-wide">
                    {article.category}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 tracking-wide mb-2">{article.readTime}</p>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-500 transition-colors">
                {article.title}
              </h4>
              <p className="text-sm text-gray-500 mb-2">{article.subtitle}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">By {article.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full Page Spread - Double Page Feature */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm tracking-[0.2em] text-amber-500">FULL PAGE SPREAD</p>
            <h3 className="text-2xl font-light text-gray-900 mt-2">Iconic Landmarks</h3>
          </div>
          
          {fullPageSpreads.map((spread) => (
            <div key={spread.id} className="grid md:grid-cols-2 gap-0 bg-white shadow-xl">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                  src={spread.imageLeft}
                  alt={spread.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                  src={spread.imageRight}
                  alt={spread.subtitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-2xl font-bold mb-1">{spread.title}</p>
                  <p className="text-sm text-gray-200">{spread.subtitle}</p>
                  <p className="text-xs text-gray-300 mt-2">{spread.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Magazine Sections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              <div className="border-l-2 border-amber-400 pl-4 mb-6">
                <p className="text-xs tracking-[0.2em] text-amber-500">{section.name}</p>
              </div>
              <div className="space-y-8">
                {section.articles.map((article) => (
                  <div
                    key={article.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="overflow-hidden mb-3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-500 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1 line-clamp-2">{article.excerpt}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">By {article.author}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reads Grid - Magazine Style */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm tracking-[0.2em] text-amber-500">QUICK READS</p>
            <h3 className="text-2xl font-light text-gray-900 mt-2">Bite-Sized Inspiration</h3>
            <div className="w-12 h-px bg-amber-300 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickReads.map((read) => (
              <div
                key={read.id}
                className="group cursor-pointer"
                onClick={() => setSelectedArticle(read)}
              >
                <div className="overflow-hidden mb-3">
                  <img
                    src={read.image}
                    alt={read.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-amber-500 transition-colors">
                  {read.title}
                </h4>
                <p className="text-xs text-gray-400">{read.readTime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Section - Magazine Style */}
      <div className="border-t border-b border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.2em] text-amber-500 mb-4">SUBSCRIBE</p>
          <h3 className="text-3xl font-light text-gray-900 mb-4">Never Miss an Issue</h3>
          <p className="text-gray-500 mb-6">
            Get the latest architecture and design stories delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-amber-400"
            />
            <button className="px-6 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">Free quarterly magazine • Unsubscribe anytime</p>
        </div>
      </div>

      {/* Footer - Magazine Style */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">AGEDGE<span className="font-bold text-amber-500">/</span></h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
            Architecture & Design Quarterly — Celebrating the art of building in Ghana and beyond
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-500">
            <span>© 2026 AGEDGE GLOBAL</span>
            <span>•</span>
            <span>ALL RIGHTS RESERVED</span>
            <span>•</span>
            <span>ISSN 1234-5678</span>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedArticle(null)}>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedArticle(null)}
              className="sticky top-4 float-right z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors mr-4 mt-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="clear-both p-8">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-80 object-cover rounded-xl mb-8"
              />
              
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  {selectedArticle.category && <span className="text-amber-500">{selectedArticle.category}</span>}
                  {selectedArticle.readTime && <span>{selectedArticle.readTime}</span>}
                  {selectedArticle.author && <span>By {selectedArticle.author}</span>}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h2>
                
                {selectedArticle.subtitle && (
                  <p className="text-xl text-gray-500 mb-6">{selectedArticle.subtitle}</p>
                )}

                <div className="prose prose-lg max-w-none">
                  <p>{selectedArticle.excerpt || selectedArticle.content}</p>
                  <p className="mt-4">For the complete article, pick up a copy of AGEDGE Magazine or subscribe to our digital edition.</p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg text-sm hover:bg-amber-600 transition-colors">
                      Subscribe to Magazine
                    </button>
                    <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      Share Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}