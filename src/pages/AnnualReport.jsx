import { useState, useEffect } from 'react'

export default function AnnualReport() {
  const [selectedYear, setSelectedYear] = useState('2026')
  const [animateNumbers, setAnimateNumbers] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  // Financial Data 2016-2026
  const financialData = {
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
    revenue: [0.5, 0.8, 1.2, 1.8, 2.5, 3.5, 5.0, 7.5, 11.0, 15.0, 20.0],
    profit: [0.05, 0.12, 0.25, 0.45, 0.70, 1.10, 1.80, 2.80, 4.50, 6.50, 9.00],
    projects: [2, 4, 6, 9, 12, 18, 25, 32, 40, 48, 55],
    employees: [3, 4, 5, 7, 8, 10, 12, 15, 18, 22, 28],
    clients: [2, 4, 7, 10, 15, 22, 30, 38, 45, 52, 62]
  }

  // Project Data by Category
  const projectData = {
    residential: [1, 2, 3, 5, 7, 10, 14, 18, 22, 26, 30],
    commercial: [1, 1, 2, 2, 3, 4, 5, 7, 9, 11, 13],
    educational: [0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8],
    multifamily: [0, 0, 0, 0, 0, 1, 2, 2, 3, 4, 4]
  }

  // Awards and Recognition
  const awardsData = [
    { year: 2018, award: "Best Emerging Architecture Firm", category: "Industry" },
    { year: 2019, award: "Sustainable Design Excellence", category: "Design" },
    { year: 2020, award: "Top 10 Construction Companies", category: "Industry" },
    { year: 2021, award: "Innovation in Building Materials", category: "Innovation" },
    { year: 2022, award: "Ghana's Leading Architecture Firm", category: "Industry" },
    { year: 2023, award: "Excellence in Project Management", category: "Management" },
    { year: 2024, award: "Best Luxury Residential Design", category: "Design" },
    { year: 2025, award: "African Architecture Award", category: "International" },
    { year: 2026, award: "Top Employer of the Year", category: "Workplace" }
  ]

  // Key Milestones
  const milestones = [
    { year: 2016, event: "Company Founded", description: "AGEdge Global established in Accra, Ghana" },
    { year: 2017, event: "First Major Project", description: "Completed first residential villa in East Legon" },
    { year: 2018, event: "Team Expansion", description: "Grew to 5 permanent staff members" },
    { year: 2019, event: "Materials Division Launch", description: "Started in-house materials supply" },
    { year: 2020, event: "Construction Division", description: "Full construction management services added" },
    { year: 2021, event: "Real Estate Division", description: "Launched property development arm" },
    { year: 2022, event: "50 Projects Milestone", description: "Completed 50th project" },
    { year: 2023, event: "International Partnerships", description: "Global supplier agreements signed" },
    { year: 2024, event: "Regional Expansion", description: "Projects in Kumasi and Takoradi" },
    { year: 2025, event: "100+ Team Members", description: "Reached 25+ permanent staff" },
    { year: 2026, event: "10 Year Anniversary", description: "Celebrating a decade of excellence" }
  ]

  // Calculate Growth Percentages
  const getGrowth = (data, year, previousYear) => {
    const current = data[data.length - 1]
    const previous = data[data.length - 2]
    return ((current - previous) / previous * 100).toFixed(1)
  }

  useEffect(() => {
    setAnimateNumbers(true)
    const timer = setTimeout(() => setAnimateNumbers(false), 2000)
    return () => clearTimeout(timer)
  }, [selectedYear])

  // Get current year data
  const currentYearIndex = financialData.years.indexOf(parseInt(selectedYear))
  const currentRevenue = financialData.revenue[currentYearIndex]
  const currentProfit = financialData.profit[currentYearIndex]
  const currentProjects = financialData.projects[currentYearIndex]
  const currentEmployees = financialData.employees[currentYearIndex]
  const currentClients = financialData.clients[currentYearIndex]

  // Calculate max values for charts
  const maxRevenue = Math.max(...financialData.revenue)
  const maxProjects = Math.max(...financialData.projects)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[350px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=600&fit=crop"
            alt="Annual Report - AGEdge Global Performance Overview"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="relative inline-flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            10 Years of Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Annual{' '}
            <span className="font-bold text-amber-400">Report</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrating a decade of growth, innovation, and architectural excellence (2016 - 2026)
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-12 h-px bg-amber-400"></div>
          </div>
        </div>
      </div>

      {/* Year Selector */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-center gap-2">
            {financialData.years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year.toString())}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedYear === year.toString()
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-4 text-center border border-amber-100 transform hover:scale-105 transition-all duration-300">
            <p className="text-xs text-gray-500 mb-1">Revenue (USD M)</p>
            <p className={`text-2xl font-bold text-amber-600 transition-all duration-1000 ${animateNumbers ? 'scale-110' : 'scale-100'}`}>
              ${currentRevenue}M
            </p>
            <p className="text-xs text-green-600 mt-1">↑ {getGrowth(financialData.revenue, selectedYear, '2025')}%</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-4 text-center border border-amber-100 transform hover:scale-105 transition-all duration-300">
            <p className="text-xs text-gray-500 mb-1">Profit (USD M)</p>
            <p className={`text-2xl font-bold text-amber-600 transition-all duration-1000 ${animateNumbers ? 'scale-110' : 'scale-100'}`}>
              ${currentProfit}M
            </p>
            <p className="text-xs text-green-600 mt-1">↑ {getGrowth(financialData.profit, selectedYear, '2025')}%</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-4 text-center border border-amber-100 transform hover:scale-105 transition-all duration-300">
            <p className="text-xs text-gray-500 mb-1">Projects</p>
            <p className={`text-2xl font-bold text-amber-600 transition-all duration-1000 ${animateNumbers ? 'scale-110' : 'scale-100'}`}>
              {currentProjects}
            </p>
            <p className="text-xs text-green-600 mt-1">↑ {getGrowth(financialData.projects, selectedYear, '2025')}%</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-4 text-center border border-amber-100 transform hover:scale-105 transition-all duration-300">
            <p className="text-xs text-gray-500 mb-1">Team Members</p>
            <p className={`text-2xl font-bold text-amber-600 transition-all duration-1000 ${animateNumbers ? 'scale-110' : 'scale-100'}`}>
              {currentEmployees}
            </p>
            <p className="text-xs text-green-600 mt-1">↑ {getGrowth(financialData.employees, selectedYear, '2025')}%</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-4 text-center border border-amber-100 transform hover:scale-105 transition-all duration-300">
            <p className="text-xs text-gray-500 mb-1">Happy Clients</p>
            <p className={`text-2xl font-bold text-amber-600 transition-all duration-1000 ${animateNumbers ? 'scale-110' : 'scale-100'}`}>
              {currentClients}
            </p>
            <p className="text-xs text-green-600 mt-1">↑ {getGrowth(financialData.clients, selectedYear, '2025')}%</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200 mb-8">
          {[
            { id: 'overview', label: 'Overview & Growth' },
            { id: 'financial', label: 'Financial Performance' },
            { id: 'projects', label: 'Project Portfolio' },
            { id: 'milestones', label: 'Milestones & Awards' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-t-lg ${
                activeTab === tab.id
                  ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Revenue Growth Chart - Animated Bar Chart */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Growth Trajectory (USD Millions)</h3>
              <p className="text-gray-500 text-sm mb-6">10-year compound annual growth rate: 45%</p>
              <div className="space-y-4">
                {financialData.years.map((year, idx) => {
                  const height = (financialData.revenue[idx] / maxRevenue) * 100
                  return (
                    <div key={year} className="group">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{year}</span>
                        <span className="text-gray-600">${financialData.revenue[idx]}M</span>
                      </div>
                      <div className="h-12 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-101"
                          style={{ width: `${height}%` }}
                        >
                          <div className="h-full w-0 group-hover:w-full transition-all duration-300">
                            <div className="h-full bg-gradient-to-r from-amber-500 to-amber-700 opacity-50 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Team & Client Growth - Line Chart Style */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Team Growth</h3>
                <div className="relative h-64">
                  <svg className="w-full h-full" viewBox="0 0 500 200">
                    <defs>
                      <linearGradient id="teamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    {[0, 50, 100, 150, 200].map(y => (
                      <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4"/>
                    ))}
                    {/* Area under line */}
                    <polygon
                      points={`0,200 ${financialData.employees.map((val, idx) => `${idx * 50},${200 - (val / 30) * 200}`).join(' ')} 500,200`}
                      fill="url(#teamGradient)"
                      className="transition-all duration-1000"
                    />
                    {/* Line */}
                    <polyline
                      points={financialData.employees.map((val, idx) => `${idx * 50},${200 - (val / 30) * 200}`).join(' ')}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      className="transition-all duration-1000"
                    />
                    {/* Data points */}
                    {financialData.employees.map((val, idx) => (
                      <circle
                        key={idx}
                        cx={idx * 50}
                        cy={200 - (val / 30) * 200}
                        r="4"
                        fill="#f59e0b"
                        className="transition-all duration-1000"
                      />
                    ))}
                  </svg>
                  <div className="flex justify-between mt-2">
                    {financialData.years.map(year => (
                      <span key={year} className="text-xs text-gray-500">{year}</span>
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">From 3 to 28 team members in 10 years</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Growth</h3>
                <div className="relative h-64">
                  <svg className="w-full h-full" viewBox="0 0 500 200">
                    <defs>
                      <linearGradient id="clientGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <polygon
                      points={`0,200 ${financialData.clients.map((val, idx) => `${idx * 50},${200 - (val / 70) * 200}`).join(' ')} 500,200`}
                      fill="url(#clientGradient)"
                      className="transition-all duration-1000"
                    />
                    <polyline
                      points={financialData.clients.map((val, idx) => `${idx * 50},${200 - (val / 70) * 200}`).join(' ')}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      className="transition-all duration-1000"
                    />
                    {financialData.clients.map((val, idx) => (
                      <circle key={idx} cx={idx * 50} cy={200 - (val / 70) * 200} r="4" fill="#10b981"/>
                    ))}
                  </svg>
                  <div className="flex justify-between mt-2">
                    {financialData.years.map(year => (
                      <span key={year} className="text-xs text-gray-500">{year}</span>
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">From 2 to 62 happy clients</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="space-y-12">
            {/* Revenue vs Profit Chart */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue vs Profit Comparison (USD Millions)</h3>
              <div className="space-y-6">
                {financialData.years.map((year, idx) => (
                  <div key={year}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-700">{year}</span>
                      <div className="flex gap-4">
                        <span className="text-amber-600">Revenue: ${financialData.revenue[idx]}M</span>
                        <span className="text-green-600">Profit: ${financialData.profit[idx]}M</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-1000"
                          style={{ width: `${(financialData.revenue[idx] / maxRevenue) * 100}%` }}
                        />
                      </div>
                      <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
                          style={{ width: `${(financialData.profit[idx] / maxRevenue) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Table */}
            <div className="bg-gray-50 rounded-2xl p-6 overflow-x-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">10-Year Financial Summary</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600">Year</th>
                    <th className="text-right py-3 px-4 text-gray-600">Revenue (USD M)</th>
                    <th className="text-right py-3 px-4 text-gray-600">Profit (USD M)</th>
                    <th className="text-right py-3 px-4 text-gray-600">Margin %</th>
                    <th className="text-right py-3 px-4 text-gray-600">YoY Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {financialData.years.map((year, idx) => {
                    const margin = (financialData.profit[idx] / financialData.revenue[idx] * 100).toFixed(1)
                    const growth = idx > 0 ? ((financialData.revenue[idx] - financialData.revenue[idx-1]) / financialData.revenue[idx-1] * 100).toFixed(1) : '-'
                    return (
                      <tr key={year} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                        <td className="py-3 px-4 font-medium text-gray-900">{year}</td>
                        <td className="text-right py-3 px-4 text-gray-600">${financialData.revenue[idx]}M</td>
                        <td className="text-right py-3 px-4 text-gray-600">${financialData.profit[idx]}M</td>
                        <td className="text-right py-3 px-4 text-green-600">{margin}%</td>
                        <td className="text-right py-3 px-4 text-amber-600">{growth === '-' ? '-' : `+${growth}%`}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-12">
            {/* Project Categories - Pie Chart Style */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Project Portfolio Distribution (2026)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                  <div className="relative w-64 h-64">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
                      {/* Residential - 55% */}
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#f59e0b" strokeWidth="8"
                        strokeDasharray={`${(30 / 100) * 283} ${283 - (30 / 100) * 283}`}
                        strokeDashoffset="0"
                        transform="rotate(-90 50 50)"/>
                      <text x="50" y="45" textAnchor="middle" className="text-xs font-bold fill-amber-600">55%</text>
                      <text x="50" y="55" textAnchor="middle" className="text-xs fill-gray-500">Residential</text>
                    </svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">Residential</span>
                    </div>
                    <span className="font-bold text-gray-900">55%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Commercial</span>
                    </div>
                    <span className="font-bold text-gray-900">23%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Educational</span>
                    </div>
                    <span className="font-bold text-gray-900">14%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Multi-Family</span>
                    </div>
                    <span className="font-bold text-gray-900">8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects by Category Over Time */}
            <div className="bg-gray-50 rounded-2xl p-6 overflow-x-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Categories Growth (2016-2026)</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600">Year</th>
                    <th className="text-right py-3 px-4 text-gray-600">Residential</th>
                    <th className="text-right py-3 px-4 text-gray-600">Commercial</th>
                    <th className="text-right py-3 px-4 text-gray-600">Educational</th>
                    <th className="text-right py-3 px-4 text-gray-600">Multi-Family</th>
                    <th className="text-right py-3 px-4 text-gray-600">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {financialData.years.map((year, idx) => (
                    <tr key={year} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-900">{year}</td>
                      <td className="text-right py-3 px-4 text-gray-600">{projectData.residential[idx]}</td>
                      <td className="text-right py-3 px-4 text-gray-600">{projectData.commercial[idx]}</td>
                      <td className="text-right py-3 px-4 text-gray-600">{projectData.educational[idx]}</td>
                      <td className="text-right py-3 px-4 text-gray-600">{projectData.multifamily[idx]}</td>
                      <td className="text-right py-3 px-4 font-bold text-gray-900">{financialData.projects[idx]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'milestones' && (
          <div className="space-y-12">
            {/* Milestones Timeline */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">10-Year Journey Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-300 hidden md:block"></div>
                <div className="space-y-6">
                  {milestones.map((milestone, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-12 group">
                      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-100 group-hover:scale-150 transition-transform duration-300"></div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 group-hover:translate-x-1">
                        <div className="flex flex-wrap items-center justify-between mb-2">
                          <span className="text-amber-600 font-bold">{milestone.year}</span>
                          <span className="text-xs text-gray-400">Milestone</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{milestone.event}</h4>
                        <p className="text-sm text-gray-500">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards Table */}
            <div className="bg-gray-50 rounded-2xl p-6 overflow-x-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600">Year</th>
                    <th className="text-left py-3 px-4 text-gray-600">Award</th>
                    <th className="text-left py-3 px-4 text-gray-600">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.map((award, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-900">{award.year}</td>
                      <td className="py-3 px-4 text-gray-600">{award.award}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          award.category === 'Industry' ? 'bg-blue-100 text-blue-700' :
                          award.category === 'Design' ? 'bg-purple-100 text-purple-700' :
                          award.category === 'Innovation' ? 'bg-green-100 text-green-700' :
                          award.category === 'International' ? 'bg-amber-100 text-amber-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {award.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 10-Year Summary Card */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">A Decade of Excellence</h3>
          <p className="text-amber-100 mb-6">From humble beginnings to industry leadership</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-3xl font-bold">55</p>
              <p className="text-xs text-amber-100">Total Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">62</p>
              <p className="text-xs text-amber-100">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold">28</p>
              <p className="text-xs text-amber-100">Team Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$20M</p>
              <p className="text-xs text-amber-100">Annual Revenue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}