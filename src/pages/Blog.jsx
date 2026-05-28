import { useState } from 'react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPost, setSelectedPost] = useState(null)

  const categories = [
    { id: 'all', label: 'All Posts', count: 12 },
    { id: 'architecture', label: 'Architecture', count: 4 },
    { id: 'construction', label: 'Construction', count: 3 },
    { id: 'design', label: 'Design Tips', count: 3 },
    { id: 'industry', label: 'Industry News', count: 2 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "10 Modern Architectural Trends Shaping Ghana's Skyline",
      category: "architecture",
      excerpt: "Explore the latest architectural innovations transforming residential and commercial spaces across Ghana...",
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
      image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=800&h=500&fit=crop",
      author: "Victor Anaafi Gyasi",
      authorRole: "Principal Architect",
      date: "April 15, 2026",
      readTime: "5 min read",
      tags: ["Architecture", "Trends", "Innovation"]
    },
    {
      id: 2,
      title: "Choosing the Right Building Materials for Your Home",
      category: "construction",
      excerpt: "A comprehensive guide to selecting quality materials that ensure durability, aesthetics, and value for money...",
      content: `
        <p>The foundation of any great building lies in its materials. Understanding what to look for and where to source quality supplies can make all the difference in your project's success.</p>
        
        <h2>Understanding Material Grades</h2>
        <p>Not all materials are created equal. Learn about the different grades of cement, steel, and finishes available in the Ghanaian market.</p>
        
        <h2>Sourcing Tips</h2>
        <p>Working with reputable suppliers who provide certification and warranties ensures you're getting genuine products that will stand the test of time.</p>
        
        <h2>Cost vs. Quality</h2>
        <p>While premium materials cost more upfront, they often save money long-term through reduced maintenance and replacement needs.</p>
      `,
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=500&fit=crop",
      author: "Michael Dankyi Yeboah",
      authorRole: "Project Manager & Quantity Surveyor",
      date: "April 10, 2026",
      readTime: "4 min read",
      tags: ["Materials", "Construction", "Quality"]
    },
    {
      id: 3,
      title: "Sustainable Design: Building for Tomorrow",
      category: "design",
      excerpt: "How eco-friendly architecture is reducing costs and environmental impact for homeowners across Africa...",
      content: `
        <p>Sustainable design isn't just good for the planet—it's good for your wallet. Energy-efficient homes save money while providing healthier living environments.</p>
        
        <h2>Passive Cooling Techniques</h2>
        <p>Strategic window placement, cross-ventilation, and thermal mass materials can significantly reduce air conditioning needs in Ghana's tropical climate.</p>
        
        <h2>Solar Integration</h2>
        <p>Solar panels and solar water heaters are becoming more affordable, offering independence from unreliable grid power.</p>
        
        <h2>Rainwater Harvesting</h2>
        <p>Collecting rainwater for landscaping and non-potable uses reduces water bills and environmental impact.</p>
      `,
      image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=500&fit=crop",
      author: "Selorm Lumor",
      authorRole: "Assistant Architect",
      date: "April 5, 2026",
      readTime: "6 min read",
      tags: ["Sustainability", "Green Building", "Design"]
    },
    {
      id: 4,
      title: "The Rise of Luxury Real Estate in Accra",
      category: "industry",
      excerpt: "Discover what's driving demand for premium properties in East Legon, Cantonments, and beyond...",
      content: `
        <p>Accra's luxury real estate market is booming, driven by returning diaspora, foreign investment, and a growing affluent class seeking world-class living standards.</p>
        
        <h2>Prime Locations</h2>
        <p>East Legon, Cantonments, and Airport Residential Area remain the most desirable addresses, with property values appreciating steadily.</p>
        
        <h2>What Buyers Want</h2>
        <p>Modern amenities, security features, and premium finishes are non-negotiable for today's luxury home buyers.</p>
        
        <h2>Investment Potential</h2>
        <p>Real estate remains one of Ghana's most stable investment vehicles, offering both capital appreciation and rental income opportunities.</p>
      `,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=500&fit=crop",
      author: "Wilberforce Adote Brown",
      authorRole: "Civil & Structural Engineer",
      date: "March 28, 2026",
      readTime: "5 min read",
      tags: ["Real Estate", "Luxury", "Investment"]
    },
    {
      id: 5,
      title: "5 Common Construction Mistakes to Avoid",
      category: "construction",
      excerpt: "Expert advice on preventing costly errors during your building project, from foundation to finishing...",
      content: `
        <p>Construction projects are complex, and small mistakes can lead to major headaches. Learn from these common pitfalls to ensure your project runs smoothly.</p>
        
        <h2>Poor Planning</h2>
        <p>Rushing into construction without proper architectural drawings and approvals often leads to costly changes mid-project.</p>
        
        <h2>Inadequate Supervision</h2>
        <p>Regular site visits and quality checks catch issues early before they become expensive problems.</p>
        
        <h2>Ignoring Soil Conditions</h2>
        <p>Proper soil testing determines foundation requirements—skipping this step risks structural issues down the line.</p>
      `,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=500&fit=crop",
      author: "Michael Dankyi Yeboah",
      authorRole: "Project Manager & Quantity Surveyor",
      date: "March 20, 2026",
      readTime: "4 min read",
      tags: ["Construction", "Tips", "Avoid Mistakes"]
    },
    {
      id: 6,
      title: "Biophilic Design: Bringing Nature Indoors",
      category: "design",
      excerpt: "How incorporating natural elements into your home design can improve wellbeing and aesthetic appeal...",
      content: `
        <p>Biophilic design connects occupants with nature, reducing stress and improving cognitive function through strategic use of plants, natural light, and organic materials.</p>
        
        <h2>Natural Light Optimization</h2>
        <p>Skylights, large windows, and light wells bring sunlight deep into interior spaces, reducing artificial lighting needs.</p>
        
        <h2>Indoor Gardens</h2>
        <p>Living walls, potted plants, and courtyard gardens purify air while creating calming visual focal points.</p>
        
        <h2>Natural Materials</h2>
        <p>Wood, stone, and bamboo add warmth and texture while supporting local artisans and sustainable forestry.</p>
      `,
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=800&h=500&fit=crop",
      author: "Selorm Lumor",
      authorRole: "Assistant Architect",
      date: "March 15, 2026",
      readTime: "5 min read",
      tags: ["Design", "Biophilic", "Wellness"]
    },
    {
      id: 7,
      title: "The Future of Construction Technology in Ghana",
      category: "industry",
      excerpt: "From BIM to drones, how technology is revolutionizing the local construction industry...",
      content: `
        <p>Technology is transforming how we design, plan, and execute construction projects in Ghana, improving efficiency and reducing errors.</p>
        
        <h2>Building Information Modeling (BIM)</h2>
        <p>3D modeling software allows architects, engineers, and contractors to coordinate seamlessly, catching clashes before construction begins.</p>
        
        <h2>Drone Surveying</h2>
        <p>UAVs provide accurate topographic data and progress monitoring, saving time compared to traditional surveying methods.</p>
        
        <h2>Project Management Software</h2>
        <p>Digital tools keep teams aligned, tracking schedules, budgets, and communications in real-time.</p>
      `,
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=800&h=500&fit=crop",
      author: "Victor Anaafi Gyasi",
      authorRole: "Principal Architect",
      date: "March 10, 2026",
      readTime: "4 min read",
      tags: ["Technology", "Innovation", "BIM"]
    },
    {
      id: 8,
      title: "Maximizing Small Spaces: Design Tips for Apartments",
      category: "design",
      excerpt: "Creative solutions for making compact living spaces feel larger, brighter, and more functional...",
      content: `
        <p>Urban living often means smaller footprints, but smart design can make even modest apartments feel spacious and luxurious.</p>
        
        <h2>Multi-Functional Furniture</h2>
        <p>Storage beds, foldable desks, and expandable tables maximize utility without crowding the room.</p>
        
        <h2>Strategic Mirrors</h2>
        <p>Large mirrors reflect light and create the illusion of depth, making rooms appear twice their size.</p>
        
        <h2>Vertical Storage</h2>
        <p>Floor-to-ceiling shelving and wall-mounted cabinets utilize otherwise wasted wall space.</p>
      `,
      image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?w=800&h=500&fit=crop",
      author: "Paul Tetteh",
      authorRole: "Senior Technician",
      date: "March 5, 2026",
      readTime: "3 min read",
      tags: ["Interior Design", "Small Spaces", "Tips"]
    }
  ]

  const featuredPosts = blogPosts.slice(0, 3)
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=900&fit=crop"
            alt="AGEdge Global Blog - Architecture and Construction Insights"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4 backdrop-blur-sm">
            Insights & Updates
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Our{' '}
            <span className="font-bold text-amber-400">Blog</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert insights on architecture, construction, design, and industry trends
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
          <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-100">
            <div className="text-2xl mb-1">📝</div>
            <p className="text-xl font-bold text-amber-500">12+</p>
            <p className="text-sm text-gray-600">Articles Published</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-100">
            <div className="text-2xl mb-1">👥</div>
            <p className="text-xl font-bold text-amber-500">5+</p>
            <p className="text-sm text-gray-600">Expert Contributors</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-100">
            <div className="text-2xl mb-1">📖</div>
            <p className="text-xl font-bold text-amber-500">4</p>
            <p className="text-sm text-gray-600">Minutes Avg Read</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-100">
            <div className="text-2xl mb-1">🏷️</div>
            <p className="text-xl font-bold text-amber-500">5+</p>
            <p className="text-sm text-gray-600">Topics Covered</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
              <span className={`text-xs ${selectedCategory === cat.id ? 'text-amber-200' : 'text-gray-400'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Featured Posts Section */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
            {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.label}`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === 'all' ? filteredPosts.slice(3) : filteredPosts).map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-amber-500/90 text-white px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    <span className="text-amber-500 text-sm group-hover:translate-x-1 transition-transform inline-block">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get the latest insights on architecture, construction, and design delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
            />
            <button className="px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedPost(null)}>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPost(null)}
              className="sticky top-4 float-right z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors mr-4 mt-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="clear-both p-6 md:p-8">
              {/* Header Image */}
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-6"
              />
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <span>📅</span> {selectedPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span>⏱️</span> {selectedPost.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span>🏷️</span> {selectedPost.tags.join(', ')}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h2>

              {/* Author Info */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-lg font-bold text-amber-600">
                  {selectedPost.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{selectedPost.author}</p>
                  <p className="text-sm text-gray-500">{selectedPost.authorRole}</p>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-gray-100">
                {selectedPost.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share Section */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-3">Share this article:</p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-600 transition-colors">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">
                    LinkedIn
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