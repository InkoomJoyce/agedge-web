import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter, FaYoutube, FaTiktok } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

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
      "https://linkedin.com/company/agedge-global-limited",
      "https://facebook.com/share/1PLAcDxj81/",
      "https://twitter.com/agedgeglobal",
      "https://youtube.com/@agedgegloballimited",
      "https://tiktok.com/@agedgegloballimited"
    ]
  }

  // Privacy Policy Modal
  const PrivacyModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowPrivacyModal(false)}>
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setShowPrivacyModal(false)}
          className="sticky top-4 float-right z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors mr-4 mt-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="clear-both p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          </div>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p>
              At AGEdge Global, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">1. Information We Collect</h3>
            <p>
              We collect information you provide directly, such as your name, email address, phone number, and project details when you contact us, subscribe to our newsletter, or request a consultation.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">2. How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and improve our services</li>
              <li>To communicate with you about your projects</li>
              <li>To send you updates, newsletters, and marketing materials</li>
              <li>To respond to your inquiries and requests</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800">3. Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">4. Sharing Your Information</h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">5. Your Rights</h3>
            <p>
              You have the right to access, update, or delete your personal information at any time. Contact us at <a href="mailto:info@agedgeglobal.com" className="text-green-600 hover:underline">info@agedgeglobal.com</a> to exercise these rights.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">6. Cookies</h3>
            <p>
              We use cookies to enhance your experience on our website. You can choose to disable cookies in your browser settings.
            </p>
            <p className="text-xs text-gray-400 mt-6">
              For any questions about our privacy policy, please contact us at <a href="mailto:info@agedgeglobal.com" className="text-green-600 hover:underline">info@agedgeglobal.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  // Terms of Service Modal
  const TermsModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowTermsModal(false)}>
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setShowTermsModal(false)}
          className="sticky top-4 float-right z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors mr-4 mt-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="clear-both p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
          </div>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p>
              Welcome to AGEdge Global. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">1. Acceptance of Terms</h3>
            <p>
              By accessing this website, you agree to these terms of service. If you do not agree, please do not use our website.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">2. Services</h3>
            <p>
              AGEdge Global provides architecture, materials supply, construction management, and real estate development services. All services are subject to individual project agreements.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">3. Intellectual Property</h3>
            <p>
              All content on this website, including text, images, logos, and designs, is the property of AGEdge Global and is protected by copyright laws.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">4. User Conduct</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>You agree not to misuse our website or services</li>
              <li>You agree not to upload harmful or malicious content</li>
              <li>You agree to provide accurate information when using our services</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800">5. Limitation of Liability</h3>
            <p>
              AGEdge Global shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">6. Governing Law</h3>
            <p>
              These terms are governed by the laws of the Republic of Ghana.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">7. Changes to Terms</h3>
            <p>
              We reserve the right to update these terms at any time. Changes will be effective upon posting on this page.
            </p>
            <p className="text-xs text-gray-400 mt-6">
              For any questions about our terms of service, please contact us at <a href="mailto:info@agedgeglobal.com" className="text-green-600 hover:underline">info@agedgeglobal.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Privacy Modal */}
      {showPrivacyModal && <PrivacyModal />}
      
      {/* Terms Modal */}
      {showTermsModal && <TermsModal />}

      <footer className="bg-gray-300 text-gray-900" role="contentinfo">
        {/* Newsletter Section */}
        <div className="border-b border-gray-400">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Stay Updated</h3>
                <p className="text-gray-600">
                  Get project updates, real estate insights, and exclusive offers from AGEdge Global.
                </p>
              </div>
              <div>
                {status === 'success' ? (
                  <div className="bg-green-100 border border-green-500 rounded-lg p-4 text-center" role="status" aria-live="polite">
                    <p className="font-semibold text-green-700">Thank you for subscribing!</p>
                    <p className="text-sm text-green-600 mt-1">Watch your inbox for exciting things from us.</p>
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
                      className="flex-1 bg-white border-2 border-green-500/50 rounded-full px-5 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition disabled:opacity-50"
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
                      className="flex-1 bg-white border-2 border-green-500/50 rounded-full px-5 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      aria-label="Subscribe to newsletter"
                      className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Sending...' : 'Subscribe'}
                    </button>
                  </form>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm mt-2" role="alert">Something went wrong. Please try again.</p>
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
                <h3 className="text-2xl font-bold tracking-wide text-gray-800">AGEdge Global</h3>
              </Link>
              <p className="text-gray-600 leading-relaxed max-w-md mb-6">
                Architecture, Materials, Construction, Real Estate — Under One Roof.
                Building dreams and creating communities across Ghana.
              </p>
              
              {/* All Social Icons - Green Borders */}
              <nav aria-label="Social media links" className="flex flex-wrap gap-3">
                <a href="https://instagram.com/agedgeglobal" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border-2 border-green-500/40 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition"
                   aria-label="Follow AGEdge Global on Instagram">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/company/agedgegloballimited" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border-2 border-green-500/40 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition"
                   aria-label="Follow AGEdge Global on LinkedIn">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="https://facebook.com/agedgegloballimited" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border-2 border-green-500/40 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition"
                   aria-label="Follow AGEdge Global on Facebook">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/agedgeglobal" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border-2 border-green-500/40 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition"
                   aria-label="Follow AGEdge Global on X">
                  <FaXTwitter className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@agedgegloballimited" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border-2 border-green-500/40 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition"
                   aria-label="Subscribe to AGEdge Global on YouTube">
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a href="https://tiktok.com/@agedgegloballimited" target="_blank" rel="noopener noreferrer me"
                   className="w-9 h-9 rounded-full border-2 border-green-500/40 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition"
                   aria-label="Follow AGEdge Global on TikTok">
                  <FaTiktok className="w-4 h-4" />
                </a>
              </nav>
            </div>

            {/* Column 2: Quick Links */}
            <nav aria-label="Company links">
              <h4 className="font-semibold mb-4 text-gray-800">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-600 hover:text-green-600 transition text-sm">About AGEdge Global</Link></li>
                <li><Link to="/services" className="text-gray-600 hover:text-green-600 transition text-sm">Construction & Architectural Services</Link></li>
                <li><Link to="/projects" className="text-gray-600 hover:text-green-600 transition text-sm">Featured Projects in Ghana</Link></li>
                <li><Link to="/locations" className="text-gray-600 hover:text-green-600 transition text-sm">Our Locations</Link></li>
              </ul>
            </nav>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Contact</h4>
              <address className="not-italic">
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li>Number 1 Beige Street, Azumah, New Weija, Accra, Ghana</li>
                  <li><a href="mailto:info@agedgeglobal.com" className="hover:text-green-600 transition">info@agedgeglobal.com</a></li>
                  <li><a href="tel:+233256073041" className="hover:text-green-600 transition">+233 25 607 3041</a></li>
                  <li><Link to="/contact" className="hover:text-green-600 transition">Contact AGEdge Global</Link></li>
                </ul>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-gray-600">
              © {currentYear} AGEdge Global Limited. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex gap-5">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="text-gray-600 hover:text-green-600 transition cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTermsModal(true)}
                className="text-gray-600 hover:text-green-600 transition cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-gray-500">Architecture & Construction Company in Accra, Ghana</span>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}