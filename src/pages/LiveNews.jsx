import { useState, useEffect, useCallback } from 'react'
import { 
  FiCalendar, FiClock, FiUser, FiBookOpen,
  FiExternalLink, FiMessageCircle, FiTag,
  FiShare2, FiArrowRight
} from 'react-icons/fi'
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaTelegram 
} from 'react-icons/fa'

export default function LiveNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('architecture')
  const [selectedNews, setSelectedNews] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  // API Key - Get from https://newsapi.org/register
  const NEWS_API_KEY = '4055acac534649c995488647d2ca9367'
  
  // Better category-specific search queries
  const categories = [
    { 
      id: 'architecture', 
      label: 'Architecture', 
      query: '"architecture" AND (design OR building OR residential OR commercial)',
      keywords: 'architecture design building residential commercial'
    },
    { 
      id: 'construction', 
      label: 'Construction', 
      query: '"construction" AND (building OR materials OR project OR development)',
      keywords: 'construction building materials project development'
    },
    { 
      id: 'realestate', 
      label: 'Real Estate', 
      query: '"real estate" AND (property OR housing OR development OR investment)',
      keywords: 'real estate property housing development investment'
    },
    { 
      id: 'sustainable', 
      label: 'Sustainable', 
      query: '("sustainable" OR "green" OR "eco-friendly") AND (architecture OR construction)',
      keywords: 'sustainable green eco-friendly architecture building'
    },
    { 
      id: 'interior', 
      label: 'Interior Design', 
      query: '"interior design" AND (home OR residential OR commercial OR renovation)',
      keywords: 'interior design home renovation decorating'
    },
    { 
      id: 'landscape', 
      label: 'Landscape', 
      query: '"landscape architecture" OR "garden design" OR "outdoor space"',
      keywords: 'landscape architecture garden design outdoor'
    }
  ]

  // Architecture-specific fallback news
  const architectureNews = [
    {
      id: 1,
      title: "The Rise of Contemporary African Architecture",
      excerpt: "How modern architects are blending traditional African design with contemporary aesthetics...",
      content: "Across Africa, a new generation of architects is redefining the continent's built environment. From sustainable housing projects in Ghana to innovative cultural centers in Nigeria, African architecture is experiencing a renaissance. This movement combines local materials, traditional design principles, and modern construction techniques to create buildings that are both functional and culturally significant.",
      image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=800&h=500&fit=crop",
      date: new Date().toLocaleDateString(),
      author: "Architectural Digest Africa",
      source: "Architecture Magazine",
      readTime: "6 min read",
      category: "architecture",
      url: "https://www.architecturaldigest.com/africa"
    },
    {
      id: 2,
      title: "Innovative Construction Techniques for Tropical Climates",
      excerpt: "Discover how architects are designing buildings that stay cool naturally in Ghana's warm climate...",
      content: "Passive cooling techniques, cross-ventilation, and thermal mass materials are revolutionizing how buildings perform in tropical climates. Architects are moving away from energy-intensive air conditioning toward natural solutions that reduce costs and environmental impact.",
      image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=500&fit=crop",
      date: new Date().toLocaleDateString(),
      author: "Green Building Africa",
      source: "Sustainable Architecture",
      readTime: "5 min read",
      category: "architecture",
      url: "https://www.greenbuildingafrica.com"
    },
    {
      id: 3,
      title: "Luxury Villa Design Trends in Accra",
      excerpt: "From infinity pools to smart home technology, see what's shaping luxury living in Ghana's capital...",
      content: "East Legon and Cantonments are seeing a boom in luxury villa construction. Features like home automation, sustainable materials, and indoor-outdoor living spaces are becoming standard in high-end residential architecture.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=500&fit=crop",
      date: new Date().toLocaleDateString(),
      author: "Luxury Living Magazine",
      source: "Real Estate Today",
      readTime: "4 min read",
      category: "architecture",
      url: "https://www.luxurylivingmagazine.com"
    },
    {
      id: 4,
      title: "Sustainable Building Materials Gaining Popularity",
      excerpt: "Bamboo, rammed earth, and recycled materials are becoming mainstream in construction...",
      content: "Builders and architects are increasingly turning to sustainable materials that reduce carbon footprint while maintaining durability and aesthetics. These materials are not only environmentally friendly but also cost-effective in the long run.",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=500&fit=crop",
      date: new Date().toLocaleDateString(),
      author: "Green Construction News",
      source: "Sustainable Building",
      readTime: "5 min read",
      category: "construction",
      url: "https://www.greenconstructionnews.com"
    },
    {
      id: 5,
      title: "Educational Architecture: Designing Schools for Tomorrow",
      excerpt: "How modern school design is impacting learning outcomes across Africa...",
      content: "Educational facilities are being reimagined with flexible learning spaces, natural lighting, and outdoor classrooms. These designs are shown to improve student engagement and academic performance.",
      image: "https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?w=800&h=500&fit=crop",
      date: new Date().toLocaleDateString(),
      author: "Education Design International",
      source: "Architecture Weekly",
      readTime: "7 min read",
      category: "architecture",
      url: "https://www.educationdesigninternational.com"
    },
    {
      id: 6,
      title: "The Future of Real Estate Development in West Africa",
      excerpt: "Investment opportunities and emerging trends in Ghana's property market...",
      content: "With a growing middle class and urbanization rates, West Africa's real estate market presents significant opportunities for developers and investors. Mixed-use developments and affordable housing are particularly in demand.",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=500&fit=crop",
      date: new Date().toLocaleDateString(),
      author: "Property Investor Weekly",
      source: "Real Estate News",
      readTime: "6 min read",
      category: "realestate",
      url: "https://www.propertyinvestorweekly.com"
    }
  ]

  const fetchNews = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const category = categories.find(c => c.id === selectedCategory)
      const searchQuery = category?.query || categories[0].query
      
      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&language=en&sortBy=relevancy&pageSize=15&page=${currentPage}&apiKey=${NEWS_API_KEY}`
      
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.status === 'ok' && data.articles && data.articles.length > 0) {
        const categoryKeywords = category.keywords.toLowerCase().split(' ')
        const filteredArticles = data.articles.filter(article => {
          const title = (article.title || '').toLowerCase()
          const description = (article.description || '').toLowerCase()
          return categoryKeywords.some(keyword => 
            title.includes(keyword) || description.includes(keyword)
          )
        })
        
        const articlesToShow = filteredArticles.length > 0 ? filteredArticles : data.articles.slice(0, 6)
        
        const formattedNews = articlesToShow.map((article, idx) => ({
          id: idx,
          title: article.title || 'Architecture News Update',
          excerpt: article.description || `Latest ${category.label.toLowerCase()} news and updates from the industry.`,
          content: article.content || article.description || `Read more about this ${category.label.toLowerCase()} story.`,
          image: article.urlToImage || getCategoryImage(selectedCategory),
          date: new Date(article.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          author: article.author || 'Industry Expert',
          source: article.source?.name || 'Architecture News',
          readTime: `${Math.max(3, Math.ceil((article.content?.length || 500) / 1000))} min read`,
          url: article.url
        }))
        
        setNews(formattedNews)
        setTotalResults(data.totalResults)
      } else {
        const filteredFallback = architectureNews.filter(
          news => news.category === selectedCategory || selectedCategory === 'architecture'
        )
        setNews(filteredFallback.length > 0 ? filteredFallback : architectureNews)
        setTotalResults(filteredFallback.length)
        if (NEWS_API_KEY === 'YOUR_NEWSAPI_KEY_HERE') {
          setError('Demo mode: Add your NewsAPI key to see live architecture news.')
        } else {
          setError('Showing sample architecture news. Live feed will appear once available.')
        }
      }
    } catch (err) {
      console.error('Fetch error:', err)
      const filteredFallback = architectureNews.filter(
        news => news.category === selectedCategory || selectedCategory === 'architecture'
      )
      setNews(filteredFallback.length > 0 ? filteredFallback : architectureNews)
      setTotalResults(filteredFallback.length)
      setError('Using sample architecture news. Please check your API key for live updates.')
    } finally {
      setLoading(false)
    }
  }, [selectedCategory, currentPage])

  const getCategoryImage = (category) => {
    const images = {
      architecture: 'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=800&h=500&fit=crop',
      construction: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=500&fit=crop',
      realestate: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=500&fit=crop',
      sustainable: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=500&fit=crop',
      interior: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=800&h=500&fit=crop',
      landscape: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?w=800&h=500&fit=crop'
    }
    return images[category] || images.architecture
  }

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(totalResults / 15)

  // Share URL function
  const getShareUrl = (platform, newsItem) => {
    const url = encodeURIComponent(newsItem.url || `https://agedgeglobal.com/news/${newsItem.id}`)
    const title = encodeURIComponent(newsItem.title)
    
    switch(platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=${title}%20-%20${url}`
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      case 'telegram':
        return `https://t.me/share/url?url=${url}&text=${title}`
      default:
        return '#'
    }
  }

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Green Background Highlights */}
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

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gray-900 pt-12 md:pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=600&fit=crop"
            alt="Architecture and Construction News"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-4 backdrop-blur-sm border border-green-400/30">
            <span className="relative inline-flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Architecture & Construction News
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Industry{' '}
            <span className="font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              News
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Curated architecture, construction, and design news from around the world
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-green-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div className="w-12 h-px bg-green-400"></div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Demo Notice */}
        {error && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-blue-800">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-500">Fetching {categories.find(c => c.id === selectedCategory)?.label} news...</p>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/50 hover:-translate-y-1"
                  onClick={() => setSelectedNews(item)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = getCategoryImage(selectedCategory)
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-green-600 text-white">
                        {item.source}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-1.5">
                      <FiCalendar className="w-3 h-3" />
                      <span>{item.date}</span>
                      <span>•</span>
                      <FiClock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <FiUser className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500 truncate max-w-[120px]">{item.author}</span>
                      </div>
                      <span className="text-green-600 text-sm group-hover:translate-x-1 transition-transform inline-block font-medium">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {news.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500">No {categories.find(c => c.id === selectedCategory)?.label} news found. Try another category.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-gray-600 text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* News Modal - Green Theme with Read More Link */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedNews(null)}>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedNews(null)}
              className="sticky top-4 float-right z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors mr-4 mt-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="clear-both p-6 md:p-8">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-56 md:h-72 object-cover rounded-xl mb-6"
                onError={(e) => {
                  e.target.src = getCategoryImage(selectedCategory)
                }}
              />
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {selectedNews.source}
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" /> {selectedNews.date}
                </span>
                <span className="flex items-center gap-1">
                  <FiClock className="w-4 h-4" /> {selectedNews.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <FiUser className="w-4 h-4" /> {selectedNews.author}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedNews.title}</h2>

              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
                <p>{selectedNews.excerpt}</p>
                <p>{selectedNews.content}</p>
              </div>

              {/* Read More on Source - Links to actual news site */}
              {selectedNews.url && (
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-sm text-gray-700 mb-3 flex items-center gap-2">
                    <FiBookOpen className="w-4 h-4 text-green-600" />
                    Want to read more on the source?
                  </p>
                  <a
                    href={selectedNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Read Full Article
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Share Section - Green Theme */}
              <div className="mt-6 p-5 bg-gray-50 rounded-xl border border-gray-200/50">
                <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                  <FiShare2 className="w-4 h-4" />
                  Share this news:
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={getShareUrl('facebook', selectedNews)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg text-sm hover:bg-[#1864D9] transition-colors"
                  >
                    <FaFacebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href={getShareUrl('twitter', selectedNews)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#000000] text-white rounded-lg text-sm hover:bg-[#333333] transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                    Twitter
                  </a>
                  <a
                    href={getShareUrl('whatsapp', selectedNews)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm hover:bg-[#1DA851] transition-colors"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={getShareUrl('linkedin', selectedNews)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg text-sm hover:bg-[#084B8C] transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={getShareUrl('telegram', selectedNews)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0088CC] text-white rounded-lg text-sm hover:bg-[#006699] transition-colors"
                  >
                    <FaTelegram className="w-4 h-4" />
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}