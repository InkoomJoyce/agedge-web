import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const timeoutRef = useRef(null)

  // Check if we're on the home page
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [location])

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const navLinks = [
    { name: 'Home', path: '/', ariaLabel: 'AGEdge Global Homepage' },
    { name: 'About Us', path: '/about', ariaLabel: 'About AGEdge Global' },
    {
      name: 'Services',
      path: '/services',
      ariaLabel: 'Construction and Real Estate Services',
    },
    {
      name: 'Projects',
      path: '/projects',
      ariaLabel: 'AGEdge Construction Projects in Ghana',
    },
    {
      name: 'Resources',
      path: '/resources',
      ariaLabel: 'AGEdge Resources and Tools',
      dropdown: [
        { name: 'Locations', path: '/locations' },
        { name: 'Cost Calculator', path: '/calculator' },
        { name: '360° Walkthrough', path: '/walkthrough' }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      ariaLabel: 'AGEdge Blog and News',
      dropdown: [
        { name: 'Blog', path: '/blog' },
        { name: 'News', path: '/live-news' },
        { name: 'Magazine', path: '/magazine' },
        { name: 'Annual Reports', path: '/annual-reports' },
      ]
    },
    { name: 'Contact Us', path: '/contact', ariaLabel: 'Contact AGEdge Global' },
    { name: 'Team', path: '/team', ariaLabel: 'AGEdge Global Team' },
  ]

  // Determine if navbar should be transparent
  // Only transparent on home page AND not scrolled
  const isTransparent = isHomePage && !scrolled

  const linkBaseClass = "font-bold px-3 py-2 rounded-full transition duration-200 relative"
  
  // Hover class based on transparency state
  const linkHoverClass = isTransparent 
    ? 'hover:bg-white/20' 
    : 'hover:bg-gray-200'

  // Text color based on transparency state
  const textColorClass = isTransparent ? 'text-white' : 'text-black'

  // Get Started button style based on transparency state
  const getStartedClass = isTransparent
    ? 'bg-white text-black hover:bg-gray-200'
    : 'bg-green-600 text-white hover:bg-green-700'

  // Check if link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": navLinks.map(link => link.name),
    "url": navLinks.map(link => `https://agedgeglobal.com${link.path}`)
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationSchema)}
      </script>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-white text-black border-b border-gray-200 shadow-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-1">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center -my-2" aria-label="AGEdge Global - Home">
              <img
                src="/agedge-logo.png"
                alt="AGEdge Global - Architecture Construction Real Estate Ghana"
                className="h-20 md:h-24 w-auto"
                width="460"
                height="120"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
              <div className="flex items-center gap-6 flex-1 justify-center" role="menubar">
                {navLinks.map((link) => {
                  const active = isActive(link.path)
                  const hasDropdown = link.dropdown && link.dropdown.length > 0
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => hasDropdown && handleMouseEnter(link.name)}
                      onMouseLeave={() => hasDropdown && handleMouseLeave()}
                    >
                      <Link
                        to={link.path}
                        className={`${linkBaseClass} ${linkHoverClass} ${textColorClass} flex items-center gap-1 ${
                          active ? 'ring-2 ring-green-500 ring-offset-2 ring-offset-transparent' : ''
                        }`}
                        role="menuitem"
                        aria-label={link.ariaLabel}
                        aria-current={active ? 'page' : undefined}
                        aria-haspopup={hasDropdown ? 'true' : undefined}
                        aria-expanded={openDropdown === link.name}
                      >
                        {link.name}
                        {hasDropdown && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openDropdown === link.name ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </Link>

                      {/* Dropdown - Only for Resources and Blog */}
                      {hasDropdown && openDropdown === link.name && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Get Started */}
              <Link
                to="/contact"
                className={`px-6 py-2.5 rounded-full font-semibold transition ${getStartedClass}`}
                aria-label="Contact AGEdge Global to start your construction project"
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 relative w-8 h-8"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className={`w-6 h-6 ${isTransparent ? 'text-white' : 'text-black'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isTransparent ? 'text-white' : 'text-black'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden mt-4 pb-4 bg-white text-black rounded-lg shadow-lg max-h-[80vh] overflow-y-auto"
              role="menu"
            >
              {navLinks.map((link) => {
                const active = isActive(link.path)
                const hasDropdown = link.dropdown && link.dropdown.length > 0
                return (
                  <div key={link.name}>
                    {hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                          className={`w-full flex items-center justify-between px-4 py-3 font-medium hover:bg-gray-100 border-b border-gray-100 ${
                            active ? 'text-green-600' : ''
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {active && (
                              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                            )}
                            {link.name}
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === link.name && (
                          <div className="bg-gray-50">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-8 py-2.5 text-sm text-slate-600 hover:bg-green-50 hover:text-green-700"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 font-medium hover:bg-gray-100 border-b border-gray-100 last:border-0 ${
                          active ? 'text-green-600' : ''
                        }`}
                        role="menuitem"
                        aria-label={link.ariaLabel}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span className="flex items-center gap-2">
                          {active && (
                            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                          )}
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </div>
                )
              })}
              <div className="px-4 pt-3">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700"
                  role="menuitem"
                  aria-label="Contact AGEdge Global to start your project"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}