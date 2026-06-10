import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Feasibility() {
  const [animateNumbers, setAnimateNumbers] = useState(false)
  const [selectedStep, setSelectedStep] = useState(0)

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

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, goals, and project requirements"
    },
    {
      step: "02",
      title: "Data Collection",
      description: "Site visits, market research, and regulatory review"
    },
    {
      step: "03",
      title: "Analysis & Modeling",
      description: "Technical, financial, and risk analysis"
    },
    {
      step: "04",
      title: "Report Generation",
      description: "Comprehensive feasibility report with recommendations"
    },
    {
      step: "05",
      title: "Presentation",
      description: "Detailed presentation of findings and next steps"
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[450px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=900&fit=crop"
            alt="Feasibility Studies - Project Planning & Analysis"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4 backdrop-blur-sm">
            Service Detail
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Feasibility{' '}
            <span className="font-bold text-amber-400">Studies</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Make informed decisions with comprehensive project analysis and planning
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-12 h-px bg-amber-400"></div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-amber-500 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-amber-600 font-medium">Feasibility Studies</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-wide text-amber-500 mb-2">WHY CHOOSE FEASIBILITY STUDIES</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Plan with{' '}
            <span className="font-bold text-amber-600">Confidence</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A feasibility study is your roadmap to project success. We analyze every aspect of your proposed 
            development—technical, financial, legal, and market factors—to provide you with clear, actionable 
            insights before you commit significant resources.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* What We Study Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-sm tracking-wide text-amber-500 mb-2">COMPREHENSIVE ANALYSIS</p>
            <h2 className="text-3xl font-light text-gray-900 mb-4">What We Study</h2>
            <div className="w-12 h-px bg-amber-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyComponents.map((component, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-amber-600 font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{component.title}</h3>
                <ul className="space-y-2">
                  {component.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-sm tracking-wide text-amber-500 mb-2">OUR PROCESS</p>
            <h2 className="text-3xl font-light text-gray-900 mb-4">How We Work</h2>
            <div className="w-12 h-px bg-amber-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-amber-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
            <p className="text-3xl font-bold text-amber-600">95%</p>
            <p className="text-sm text-gray-500 mt-1">Project Success Rate</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
            <p className="text-3xl font-bold text-amber-600">2-6</p>
            <p className="text-sm text-gray-500 mt-1">Weeks Turnaround</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
            <p className="text-3xl font-bold text-amber-600">100%</p>
            <p className="text-sm text-gray-500 mt-1">Customized Reports</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
            <p className="text-3xl font-bold text-amber-600">50+</p>
            <p className="text-sm text-gray-500 mt-1">Studies Completed</p>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-sm tracking-wide text-amber-500 mb-2">SUCCESS STORIES</p>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Case Studies</h2>
            <div className="w-12 h-px bg-amber-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{study.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{study.location}</p>
                  <p className="text-sm text-amber-600 font-medium">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-sm tracking-wide text-amber-500 mb-2">COMMON QUESTIONS</p>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-12 h-px bg-amber-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your Feasibility Study?</h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Get expert insights and make informed decisions for your project
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-amber-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <button className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}