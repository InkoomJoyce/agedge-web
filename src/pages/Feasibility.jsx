import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, TrendingUp, Shield, Clock, BarChart, CheckCircle, ArrowRight } from 'lucide-react'

export default function Feasibility() {
  const [animateNumbers, setAnimateNumbers] = useState(false)

  useEffect(() => {
    setAnimateNumbers(true)
    const timer = setTimeout(() => setAnimateNumbers(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const benefits = [
    {
      icon: "📊",
      title: "Risk Mitigation",
      description: "Identify potential challenges before they become costly problems"
    },
    {
      icon: "💰",
      title: "Financial Clarity",
      description: "Accurate cost estimates and ROI projections"
    },
    {
      icon: "📅",
      title: "Timeline Certainty",
      description: "Realistic project schedules and milestone planning"
    },
    {
      icon: "🔍",
      title: "Market Intelligence",
      description: "Deep insights into market conditions and trends"
    }
  ]

  const studyComponents = [
    {
      title: "Technical Assessment",
      items: ["Site analysis and soil testing", "Structural requirements evaluation", "Material availability study", "Infrastructure needs assessment"]
    },
    {
      title: "Financial Analysis",
      items: ["Budget estimation and cost planning", "ROI and payback period calculation", "Funding options evaluation", "Tax implications review"]
    },
    {
      title: "Legal & Regulatory",
      items: ["Permit and license requirements", "Zoning and land use compliance", "Environmental impact assessment", "Building code adherence"]
    },
    {
      title: "Market Study",
      items: ["Demand and supply analysis", "Competitor benchmarking", "Pricing strategy development", "Target market identification"]
    }
  ]

  const caseStudies = [
    {
      title: "Luxury Residential Development",
      location: "East Legon, Accra",
      result: "Project successfully completed with 25% ROI",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=600&h=400&fit=crop"
    },
    {
      title: "Educational Facility",
      location: "Accra, Ghana",
      result: "Secured funding and permits within 4 months",
      image: "https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?w=600&h=400&fit=crop"
    },
    {
      title: "Commercial Complex",
      location: "Tema, Ghana",
      result: "Identified cost savings of 15%",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=600&h=400&fit=crop"
    }
  ]

  const faqs = [
    {
      q: "How long does a feasibility study take?",
      a: "Typically 2-6 weeks depending on project complexity and scope."
    },
    {
      q: "What's included in the feasibility report?",
      a: "Technical assessment, financial analysis, risk evaluation, market study, and actionable recommendations."
    },
    {
      q: "Do I need a feasibility study for a small project?",
      a: "Even small projects benefit from feasibility studies to avoid costly mistakes and ensure success."
    },
    {
      q: "Can you help with permit applications?",
      a: "Yes, we assist with all regulatory approvals and permit applications."
    }
  ]

  return (
    <div className="relative min-h-screen bg-gray-50 pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Green Background Highlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* Hero Section - Compact like Services page */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 text-xs font-medium mb-4">
            <FileText className="w-4 h-4" />
            <span>Service Detail</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-2">
            Feasibility{' '}
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Studies
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Make informed decisions with comprehensive project analysis and planning
          </p>

          <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            A feasibility study is your roadmap to project success. We analyze every aspect of your proposed 
            development—technical, financial, legal, and market factors—to provide you with clear, actionable 
            insights before you commit significant resources.
          </p>

          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group text-center p-5 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{benefit.title}</h3>
              <p className="text-xs text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* What We Study Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-xs tracking-wide text-green-600 font-medium mb-2">COMPREHENSIVE ANALYSIS</p>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">What We Study</h2>
            <div className="flex justify-center gap-2">
              <div className="w-8 h-px bg-green-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <div className="w-8 h-px bg-green-300"></div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {studyComponents.map((component, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-green-600 font-bold text-sm">{idx + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{component.title}</h3>
                <ul className="space-y-1.5">
                  {component.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300">
            <p className="text-2xl font-bold text-green-600">95%</p>
            <p className="text-xs text-gray-500 mt-1">Project Success Rate</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300">
            <p className="text-2xl font-bold text-green-600">2-6</p>
            <p className="text-xs text-gray-500 mt-1">Weeks Turnaround</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300">
            <p className="text-2xl font-bold text-green-600">100%</p>
            <p className="text-xs text-gray-500 mt-1">Customized Reports</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300">
            <p className="text-2xl font-bold text-green-600">50+</p>
            <p className="text-xs text-gray-500 mt-1">Studies Completed</p>
          </div>
        </div> */}

       

        {/* FAQ Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-xs tracking-wide text-green-600 font-medium mb-2">COMMON QUESTIONS</p>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">Frequently Asked Questions</h2>
            <div className="flex justify-center gap-2">
              <div className="w-8 h-px bg-green-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <div className="w-8 h-px bg-green-300"></div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</h3>
                <p className="text-xs text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        
       
      </div>
    </div>
  )
}