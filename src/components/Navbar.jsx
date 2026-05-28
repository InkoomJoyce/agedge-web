import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const timeoutRef = useRef(null)

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
    { name: 'HOME', path: '/', ariaLabel: 'AGEdge Global Homepage' },
    { name: 'ABOUT US', path: '/about', ariaLabel: 'About AGEdge Global' },
    {
      name: 'SERVICES',
      path: '/services',
      ariaLabel: 'Construction and Real Estate Services',
      dropdown: [
        { name: 'Project Feasibility', path: '/services/feasibility' },
        { name: 'Planning', path: '/services/planning' },
        { name: 'Design', path: '/services/design' },
        { name: 'Costing', path: '/services/costing' },
        { name: 'Construction', path: '/services/construction' },
        { name: 'Procurement', path: '/services/procurement' },
        { name: 'Facility Management', path: '/services/facility-management' }
      ]
    },
    {
      name: 'PROJECTS',
      path: '/projects',
      ariaLabel: 'AGEdge Construction Projects in Ghana',
      dropdown: [
        { name: 'Commercial', path: '/projects?filter=commercial' },
        { name: 'Construction', path: '/projects?filter=construction' },
        { name: 'Design', path: '/projects?filter=design' },
        { name: 'Interior', path: '/projects?filter=interior' },
        { name: 'Educational', path: '/projects?filter=educational' },
        { name: 'Healthcare', path: '/projects?filter=healthcare' },
        { name: 'Hospitality', path: '/projects?filter=hospitality' },
        { name: 'Industrial', path: '/projects?filter=industrial' },
        { name: 'Religious', path: '/projects?filter=religious' },
        { name: 'Residential', path: '/projects?filter=residential' }
      ]
    },
    {
      name: 'RESOURCES',
      path: '/resources',
      ariaLabel: 'AGEdge Resources and Tools',
      dropdown: [
        { name: 'Locations', path: '/locations' },
        { name: 'Cost Calculator', path: '/cost-calculator' },
        { name: '360° Walkthrough', path: '/walkthrough' }
      ]
    },
    {
      name: 'BLOG',
      path: '/blog',
      ariaLabel: 'AGEdge Blog and News',
      dropdown: [
        { name: 'Blog', path: '/blog' },
        { name: 'News', path: '/news' },
        { name: 'Quarterly Reports', path: '/reports' },
        { name: 'Magazine', path: '/magazine' }
      ]
    },
    { name: 'CONTACT US', path: '/contact', ariaLabel: 'Contact AGEdge Global' },
  ]

  const linkBaseClass = "font-bold px-3 py-2 rounded-full transition duration-200 relative"
  const linkHoverClass = scrolled? 'hover:bg-gray-200' : 'hover:bg-white/20'

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
          scrolled
        ? 'bg-white text-black border-b border-gray-200 shadow-sm'
            : 'bg-transparent text-white'
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
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                    onMouseLeave={() => link.dropdown && handleMouseLeave()}
                  >
                    <Link
                      to={link.path}
                      className={`${linkBaseClass} ${linkHoverClass} flex items-center gap-1`}
                      role="menuitem"
                      aria-label={link.ariaLabel}
                      aria-current={location.pathname === link.path? 'page' : undefined}
                      aria-haspopup={link.dropdown? 'true' : undefined}
                      aria-expanded={openDropdown === link.name}
                    >
                      {link.name}
                      {link.dropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === link.name? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {link.dropdown && openDropdown === link.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Get Started */}
              <Link
                to="/contact"
                className={`px-6 py-2.5 rounded-full font-semibold transition ${
                  scrolled
                ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
                aria-label="Contact AGEdge Global to start your construction project"
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 relative w-8 h-8"
              aria-label={menuOpen? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen? (
                <X className={`w-6 h-6 ${scrolled? 'text-black' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled? 'text-black' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden mt-4 pb-4 bg-white text-black rounded-lg shadow-lg max-h- overflow-y-auto"
              role="menu"
            >
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.name? null : link.name)}
                        className="w-full flex items-center justify-between px-4 py-3 font-medium hover:bg-gray-100 border-b border-gray-100"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === link.name && (
                        <div className="bg-gray-50">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-8 py-2.5 text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-700"
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
                      className="block px-4 py-3 font-medium hover:bg-gray-100 border-b border-gray-100 last:border-0"
                      role="menuitem"
                      aria-label={link.ariaLabel}
                      aria-current={location.pathname === link.path? 'page' : undefined}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-3">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600"
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