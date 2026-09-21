import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";

export default function Calculator() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    propertySize: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    finishLevel: "",
    location: "",
    timeline: "",
    estimatedBudget: 0,
  });

  // Reset state when navigating away or back to the page
  useEffect(() => {
    setStep(1);
    setSubmitStatus(null);
    setIsSubmitting(false);
  }, [location.key]);

  const projectTypes = useMemo(
    () => [
      { id: "residential", label: "Residential Villa", basePrice: 250, description: "Luxury homes, private residences" },
      { id: "commercial", label: "Commercial Building", basePrice: 300, description: "Offices, retail spaces, warehouses" },
      { id: "educational", label: "Educational Facility", basePrice: 220, description: "Schools, colleges, training centers" },
      { id: "multifamily", label: "Multi-Family Housing", basePrice: 200, description: "Apartments, enclaves, compounds" },
      { id: "renovation", label: "Renovation Project", basePrice: 150, description: "Face-lifts, remodeling, extensions" },
      { id: "material", label: "Material Supply Only", basePrice: 0, description: "Premium building materials" },
    ],
    []
  );

  const finishLevels = useMemo(
    () => [
      { id: "basic", label: "Basic Finish", multiplier: 1.0, description: "Essential finishes, functional spaces" },
      { id: "standard", label: "Standard Finish", multiplier: 1.3, description: "Good quality materials, modern finishes" },
      { id: "premium", label: "Premium Finish", multiplier: 1.6, description: "High-end materials, superior craftsmanship" },
      { id: "luxury", label: "Luxury Finish", multiplier: 2.0, description: "Top-tier finishes, custom designs" },
    ],
    []
  );

  const locations = useMemo(
    () => [
      { id: "accra", label: "Accra (Greater Accra)", multiplier: 1.2 },
      { id: "kumasi", label: "Kumasi (Ashanti Region)", multiplier: 1.0 },
      { id: "takoradi", label: "Takoradi (Western Region)", multiplier: 0.95 },
      { id: "tema", label: "Tema", multiplier: 1.1 },
      { id: "other", label: "Other Regions", multiplier: 0.9 },
    ],
    []
  );

  const calculateBudget = useCallback(
    (data) => {
      const project = projectTypes.find((p) => p.id === data.projectType);
      const finish = finishLevels.find((f) => f.id === data.finishLevel);
      const location = locations.find((l) => l.id === data.location);

      if (!project || !finish || !location) return 0;

      let baseAmount = 0;

      if (data.projectType === "material") {
        baseAmount = (data.propertySize || 0) * 50;
      } else {
        const size = data.propertySize || 1000;
        const bedrooms = data.bedrooms || 3;
        const bathrooms = data.bathrooms || 2;
        const floors = data.floors || 1;

        baseAmount =
          size * project.basePrice +
          bedrooms * 5000 +
          bathrooms * 3000 +
          floors * 10000;
      }

      const finalAmount = baseAmount * finish.multiplier * location.multiplier;
      return Math.round(finalAmount);
    },
    [projectTypes, finishLevels, locations]
  );

  useEffect(() => {
    const budget = calculateBudget(formData);
    setFormData((prev) => {
      if (prev.estimatedBudget === budget) return prev;
      return { ...prev, estimatedBudget: budget };
    });
  }, [
    formData.projectType,
    formData.propertySize,
    formData.bedrooms,
    formData.bathrooms,
    formData.floors,
    formData.finishLevel,
    formData.location,
    calculateBudget,
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const FORMSPREE_ID = "xqejnbra";
    const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: projectTypes.find((p) => p.id === formData.projectType)?.label || "",
      propertySize: formData.propertySize,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      floors: formData.floors,
      finishLevel: finishLevels.find((f) => f.id === formData.finishLevel)?.label || "",
      location: locations.find((l) => l.id === formData.location)?.label || "",
      timeline: formData.timeline,
      estimatedBudget: `$${formData.estimatedBudget.toLocaleString()}`,
      _subject: "New Cost Calculator Submission",
    };

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          setStep(1);
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
            propertySize: "",
            bedrooms: "",
            bathrooms: "",
            floors: "",
            finishLevel: "",
            location: "",
            timeline: "",
            estimatedBudget: 0,
          });
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Green Background Highlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 -left-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-32 right-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2322c55e' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ═══════════ HERO SECTION — FULL SCREEN ═══════════ */}
      <section className="relative min-h-screen -mt-24 md:-mt-28 flex items-center overflow-hidden">
        {/* Background Image — The Francis */}
        <div className="absolute inset-0">
          <img
            src="/images/projects/richmond-complex/4.jpeg"
            alt="Cost Calculator - Estimate Your Building Project"
            className="w-full h-full object-cover"
          />
          {/* Light overlay — image stays visible */}
          <div className="absolute inset-0 bg-black/25" />
          {/* Strong bottom gradient for text legibility */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          {/* Subtle top fade for header */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
        </div>

        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm mb-6">
            <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold tracking-wider uppercase text-white">
              Plan Your Project
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.05] mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Cost
            <br />
            <span className="relative inline-block mt-2">
              <span className="font-bold bg-gradient-to-r from-green-300 via-green-200 to-emerald-300 bg-clip-text text-transparent">
                Estimator
              </span>
              {/* Decorative underline */}
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C50 3 150 1 298 6"
                  stroke="url(#calcUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="calcUnderline"
                    x1="0"
                    y1="0"
                    x2="300"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#86efac" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#4ade80" />
                    <stop offset="1" stopColor="#86efac" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-100 font-light leading-relaxed mt-8 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            Get a rough estimate for your construction or renovation project —
            in under two minutes. No commitment, just clarity.
          </p>

          {/* Floating chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Instant Estimate</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">No Commitment</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs text-white shadow-sm">
              <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">2-Minute Process</span>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-300/70" />
            <div className="w-2 h-2 rotate-45 bg-green-300" />
            <div className="w-1.5 h-1.5 rotate-45 bg-green-200/70" />
            <div className="w-2 h-2 rotate-45 bg-green-300" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-300/70" />
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: "Project Details" },
              { step: 2, label: "Finish & Location" },
              { step: 3, label: "Your Estimate" },
              { step: 4, label: "Contact Info" },
            ].map((item) => (
              <div key={item.step} className="flex-1 text-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-all ${
                    step >= item.step
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {item.step}
                </div>
                <p
                  className={`text-sm hidden sm:block ${
                    step >= item.step
                      ? "text-green-600 font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 rounded-full w-full">
              <div
                className="absolute top-0 left-0 h-1 bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-xl p-6 md:p-8">
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
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, projectType: type.id }))
                      }
                      className={`p-4 border rounded-xl text-left transition-all ${
                        formData.projectType === type.id
                          ? "border-green-500 bg-green-50 ring-2 ring-green-500"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <p className="font-semibold text-gray-900">{type.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {formData.projectType && formData.projectType !== "material" && (
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Bedroom" : "Bedrooms"}
                          </option>
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Bathroom" : "Bathrooms"}
                          </option>
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Floor" : "Floors"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {formData.projectType === "material" && (
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                </div>
              )}

              <button
                onClick={nextStep}
                disabled={
                  !formData.projectType ||
                  (formData.projectType !== "material" && !formData.propertySize)
                }
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  {finishLevels.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, finishLevel: level.id }))
                      }
                      className={`p-4 border rounded-xl text-left transition-all ${
                        formData.finishLevel === level.id
                          ? "border-green-500 bg-green-50 ring-2 ring-green-500"
                          : "border-gray-200 hover:border-green-300"
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                >
                  <option value="">Select location</option>
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.label}
                    </option>
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
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
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25 disabled:opacity-50"
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

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-100">
                <p className="text-gray-600 text-sm mb-2">Estimated Project Cost</p>
                <p className="text-5xl font-bold text-green-600">
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
                      material availability, and market conditions.
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
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25"
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

              {submitStatus === "success" && (
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

              {submitStatus === "error" && (
                <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm">Submission failed. Please try again or call us directly.</p>
                </div>
              )}

              {submitStatus !== "success" && (
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
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
                      disabled={
                        isSubmitting ||
                        !formData.name ||
                        !formData.email ||
                        !formData.phone
                      }
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit & Get Estimate →"}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-6 pt-4">
                    <a
                      href="tel:+233256073041"
                      className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors text-sm"
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
                      className="text-gray-500 hover:text-green-600 transition-colors text-sm"
                    >
                      Start Over
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}