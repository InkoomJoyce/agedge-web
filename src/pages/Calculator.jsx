import { useState } from 'react'

export default function Calculator() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    propertySize: '',
    bedrooms: '',
    bathrooms: '',
    floors: '',
    finishLevel: '',
    location: '',
    timeline: '',
    estimatedBudget: 0
  })

  const projectTypes = [
    { id: 'residential', label: 'Residential Villa', basePrice: 250, description: 'Luxury homes, private residences' },
    { id: 'commercial', label: 'Commercial Building', basePrice: 300, description: 'Offices, retail spaces, warehouses' },
    { id: 'educational', label: 'Educational Facility', basePrice: 220, description: 'Schools, colleges, training centers' },
    { id: 'multifamily', label: 'Multi-Family Housing', basePrice: 200, description: 'Apartments, enclaves, compounds' },
    { id: 'renovation', label: 'Renovation Project', basePrice: 150, description: 'Face-lifts, remodeling, extensions' },
    { id: 'material', label: 'Material Supply Only', basePrice: 0, description: 'Premium building materials' }
  ]

  const finishLevels = [
    { id: 'basic', label: 'Basic Finish', multiplier: 1.0, description: 'Essential finishes, functional spaces' },
    { id: 'standard', label: 'Standard Finish', multiplier: 1.3, description: 'Good quality materials, modern finishes' },
    { id: 'premium', label: 'Premium Finish', multiplier: 1.6, description: 'High-end materials, superior craftsmanship' },
    { id: 'luxury', label: 'Luxury Finish', multiplier: 2.0, description: 'Top-tier finishes, custom designs' }
  ]

  const locations = [
    { id: 'accra', label: 'Accra (Greater Accra)', multiplier: 1.2 },
    { id: 'kumasi', label: 'Kumasi (Ashanti Region)', multiplier: 1.0 },
    { id: 'takoradi', label: 'Takoradi (Western Region)', multiplier: 0.95 },
    { id: 'tema', label: 'Tema', multiplier: 1.1 },
    { id: 'other', label: 'Other Regions', multiplier: 0.9 }
  ]

  // Calculate estimated budget
  const calculateBudget = () => {
    const project = projectTypes.find(p => p.id === formData.projectType)
    const finish = finishLevels.find(f => f.id === formData.finishLevel)
    const location = locations.find(l => l.id === formData.location)
    
    if (!project || !finish || !location) return 0
    
    let baseAmount = 0
    
    if (formData.projectType === 'material') {
      baseAmount = (formData.propertySize || 0) * 50
    } else {
      const size = formData.propertySize || 1000
      const bedrooms = formData.bedrooms || 3
      const bathrooms = formData.bathrooms || 2
      const floors = formData.floors || 1
      
      baseAmount = (size * project.basePrice) + (bedrooms * 5000) + (bathrooms * 3000) + (floors * 10000)
    }
    
    const finalAmount = baseAmount * finish.multiplier * location.multiplier
    return Math.round(finalAmount)
  }

  // Update budget whenever form changes
  const updateBudget = () => {
    const budget = calculateBudget()
    setFormData(prev => ({ ...prev, estimatedBudget: budget }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setTimeout(() => updateBudget(), 100)
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // REPLACE WITH YOUR FORMSPREE ID
    const FORMSPREE_ID = 'xqejnbra'
    const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`
    
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: projectTypes.find(p => p.id === formData.projectType)?.label || '',
      propertySize: formData.propertySize,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      floors: formData.floors,
      finishLevel: finishLevels.find(f => f.id === formData.finishLevel)?.label || '',
      location: locations.find(l => l.id === formData.location)?.label || '',
      timeline: formData.timeline,
      estimatedBudget: `$${formData.estimatedBudget.toLocaleString()}`,
      _subject: 'New Cost Calculator Submission'
    }
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          setStep(1)
          setFormData({
            name: '',
            email: '',
            phone: '',
            projectType: '',
            propertySize: '',
            bedrooms: '',
            bathrooms: '',
            floors: '',
            finishLevel: '',
            location: '',
            timeline: '',
            estimatedBudget: 0
          })
          setSubmitStatus(null)
        }, 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 3000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
    }
    setIsSubmitting(false)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?w=1600&h=600&fit=crop"
            alt="Cost Calculator - Estimate Your Building Project"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4 backdrop-blur-sm">
            Plan Your Project
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Cost{' '}
            <span className="font-bold text-amber-400">Estimator</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get a rough estimate for your construction or renovation project
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-12 h-px bg-amber-400"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: 'Project Details' },
              { step: 2, label: 'Finish & Location' },
              { step: 3, label: 'Your Estimate' },
              { step: 4, label: 'Contact Info' }
            ].map((item) => (
              <div key={item.step} className="flex-1 text-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-all ${
                    step >= item.step
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {item.step}
                </div>
                <p className={`text-sm hidden sm:block ${
                  step >= item.step ? 'text-amber-600 font-medium' : 'text-gray-400'
                }`}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 rounded-full w-full">
              <div
                className="absolute top-0 left-0 h-1 bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8">
          {/* Step 1: Project Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Project Details</h2>
                <p className="text-gray-500 text-sm mt-1">Tell us about your building project</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {projectTypes.map(type => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, projectType: type.id }))
                        updateBudget()
                      }}
                      className={`p-4 border rounded-xl text-left transition-all ${
                        formData.projectType === type.id
                          ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-500'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <p className="font-semibold text-gray-900">{type.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {formData.projectType && formData.projectType !== 'material' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Size (square feet) *
                    </label>
                    <input
                      type="number"
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleInputChange}
                      placeholder="e.g., 2000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                    />
                    <p className="text-xs text-gray-400 mt-1">Approximate total floor area</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bedrooms
                      </label>
                      <select
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                      >
                        <option value="">Select</option>
                        {[1,2,3,4,5,6].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Bedroom' : 'Bedrooms'}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bathrooms
                      </label>
                      <select
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                      >
                        <option value="">Select</option>
                        {[1,2,3,4,5].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Bathroom' : 'Bathrooms'}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Floors
                      </label>
                      <select
                        name="floors"
                        value={formData.floors}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                      >
                        <option value="">Select</option>
                        {[1,2,3,4,5].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Floor' : 'Floors'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {formData.projectType === 'material' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Approximate Quantity (square feet)
                  </label>
                  <input
                    type="number"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleInputChange}
                    placeholder="e.g., 5000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}

              <button
                onClick={nextStep}
                disabled={!formData.projectType || (formData.projectType !== 'material' && !formData.propertySize)}
                className="w-full bg-amber-500 text-white font-semibold py-3 rounded-xl hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 2: Finish Level & Location */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Finish Level & Location</h2>
                <p className="text-gray-500 text-sm mt-1">Select your preferred quality and location</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Finish Level *
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {finishLevels.map(level => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, finishLevel: level.id }))
                        updateBudget()
                      }}
                      className={`p-4 border rounded-xl text-left transition-all ${
                        formData.finishLevel === level.id
                          ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-500'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <p className="font-semibold text-gray-900">{level.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{level.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Location *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                >
                  <option value="">Select location</option>
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                >
                  <option value="">Select timeline</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="12-18 months">12-18 months</option>
                  <option value="18+ months">18+ months</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevStep}
                  className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.finishLevel || !formData.location}
                  className="flex-1 bg-amber-500 text-white font-semibold py-3 rounded-xl hover:bg-amber-600 transition-colors disabled:opacity-50"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Estimated Budget */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Estimated Budget</h2>
                <p className="text-gray-500 text-sm mt-1">Based on the information you provided</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
                <p className="text-gray-600 text-sm mb-2">Estimated Project Cost</p>
                <p className="text-5xl font-bold text-amber-600">
                  ${formData.estimatedBudget.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-3">*This is a rough estimate only</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-yellow-800">Important Note</p>
                    <p className="text-sm text-yellow-700 mt-1">
                      This is an estimated budget only. Actual costs may vary based on specific requirements, 
                      material availability, and market conditions. For an accurate quote, please book a free consultation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-blue-800">What's Included?</p>
                    <p className="text-sm text-blue-700 mt-1">
                      This estimate covers architectural design, construction materials, labor, 
                      project management, and standard finishes. Excludes land acquisition, 
                      permits, and external utilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevStep}
                  className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={nextStep}
                  className="flex-1 bg-amber-500 text-white font-semibold py-3 rounded-xl hover:bg-amber-600 transition-colors"
                >
                  Get Free Consultation →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Contact Information</h2>
                <p className="text-gray-500 text-sm mt-1">Fill in your details to receive your estimate</p>
              </div>

              {submitStatus === 'success' && (
                <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-green-700 font-medium">Estimate Request Submitted Successfully!</p>
                      <p className="text-green-600 text-sm">We'll contact you within 24 hours with a detailed consultation.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm">Submission failed. Please try again or call us directly.</p>
                </div>
              )}

              {submitStatus !== 'success' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevStep}
                      className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                      className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit & Get Estimate →'}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-6 pt-4">
                    <a
                      href="tel:+233548869192"
                      className="flex items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Us Instead
                    </a>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-gray-500 hover:text-amber-500 transition-colors text-sm"
                    >
                      Start Over
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need help? Call us at <a href="tel:+233548869192" className="text-amber-600 font-medium">+233 54 886 9192</a> 
            {' '}or email <a href="mailto:info@agedgeglobal.com" className="text-amber-600 font-medium">info@agedgeglobal.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}