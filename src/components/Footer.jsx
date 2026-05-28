import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter, FaYoutube, FaTiktok } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/xeedzpbj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // JSON-LD Schema for Google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AGEdge Global",
    "legalName": "AGEdge Global Limited",
    "url": "https://agedgeglobal.com",
    "description": "Architecture, Materials, Construction, Real Estate services in Ghana. Building dreams and creating communities across Accra.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Number 1 Beige Street, Azumah, New Weija",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233-25-607-3041",
      "contactType": "customer service",
      "email": "info@agedgeglobal.com"
    },
    "sameAs": [
      "https://instagram.com/agedgeglobal",
      "https://linkedin.com/company/agedgegloballimited",
      "https://facebook.com/agedgegloballimited",
      "https://twitter.com/agedgeglobal",
      "https://youtube.com/@agedgegloballimited",
      "https://tiktok.com/@agedgegloballimited"
    ]
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <footer className="bg-black text-white" role="contentinfo">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-400">
                  Get project updates, real estate insights, and exclusive offers from AGEdge Global.
                </p>
              </div>
              <div>
                {status === 'success' ? (
                  <div className="bg-white/10 border border-green-500/50 rounded-lg p-4 text-center" role="status" aria-live="polite">
                    <p className="font-semibold text-green-400">Thank you for subscribing!</p>
                    <p className="text-sm text-gray-400 mt-1">Watch your inbox for exciting things from us.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter subscription form">
                    <label htmlFor="newsletter-name" className="sr-only">Your name</label>
                    <input
                      id="newsletter-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="flex-1 bg-white/10 border border-gray-700 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition disabled:opacity-50"
                    />
                    <label htmlFor="newsletter-email" className="sr-only">Your email</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="flex-1 bg-white/10 border border-gray-700 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      aria-label="Subscribe to newsletter"
                      className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Sending...' : 'Subscribe'}
                    </button>
                  </form>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm mt-2" role="alert">Something went wrong. Please try again.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer - Compact */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-4" aria-label="AGEdge Global Homepage">
                <h3 className="text-2xl font-bold tracking-wide">AGEdge Global</h3>
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Architecture, Materials, Construction, Real Estate — Under One Roof.
                Building dreams and creating communities across Ghana.
              </p>
              
              {/* All Social Icons */}
              <nav aria-label="Social media links" className="flex flex-wrap gap-3">
                <a href="https://instagram.com/agedgeglobal" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
                   aria-label="Follow AGEdge Global on Instagram">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/company/agedgegloballimited" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
                   aria-label="Follow AGEdge Global on LinkedIn">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="https://facebook.com/agedgegloballimited" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
                   aria-label="Follow AGEdge Global on Facebook">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/agedgeglobal" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
                   aria-label="Follow AGEdge Global on X">
                  <FaXTwitter className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@agedgegloballimited" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
                   aria-label="Subscribe to AGEdge Global on YouTube">
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a href="https://tiktok.com/@agedgegloballimited" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
                   aria-label="Follow AGEdge Global on TikTok">
                  <FaTiktok className="w-4 h-4" />
                </a>
              </nav>
            </div>

            {/* Column 2: Quick Links */}
            <nav aria-label="Company links">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition text-sm">About AGEdge Global</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition text-sm">Construction & Architectural Services</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white transition text-sm">Featured Projects in Ghana</Link></li>
                <li><Link to="/locations" className="text-gray-400 hover:text-white transition text-sm">Our Locations</Link></li>
              </ul>
            </nav>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <address className="not-italic">
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li>Number 1 Beige Street, Azumah, New Weija, Accra, Ghana</li>
                  <li><a href="mailto:info@agedgeglobal.com" className="hover:text-white transition">info@agedgeglobal.com</a></li>
                  <li><a href="tel:+233256073041" className="hover:text-white transition">+233 25 607 3041</a></li>
                  <li><Link to="/contact" className="hover:text-white transition">Contact AGEdge Global</Link></li>
                </ul>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-gray-500">
              © {currentYear} AGEdge Global Limited. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex gap-5">
              <Link to="/privacy" className="text-gray-500 hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white transition">Terms of Service</Link>
              <span className="text-gray-600">Architecture & Construction Company in Accra, Ghana</span>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}