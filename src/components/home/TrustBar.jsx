import { useEffect, useState, useRef } from "react";
import { TrendingUp, Zap, MapPin, Calendar } from "lucide-react";

export default function TrustBar() {
  const [counts, setCounts] = useState({
    projects: 0,
    services: 0,
    year: 2016,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: "projects",
      icon: TrendingUp,
      finalValue: 300,
      suffix: "+",
      label: "Construction Projects Delivered in Ghana",
      description: "Residential & commercial architecture across Accra",
      detail: "From concept to completion, each AGEdge Global project delivers precision architecture and construction excellence across Ghana.",
      ariaLabel: "Over 300 construction projects delivered by AGEdge Global"
    },
    {
      id: "services",
      icon: Zap,
      finalValue: 7,
      suffix: "",
      label: "Integrated Building Services",
      description: "End-to-end architectural solutions",
      detail: "Architecture · Materials · Construction · Real Estate · Project Management · Interior Design · Consultancy — seamlessly integrated.",
      ariaLabel: "7 core building services offered"
    },
    {
      id: "location",
      icon: MapPin,
      finalValue: 1,
      suffix: "",
      label: "Headquartered in Accra, Ghana",
      description: "Serving clients nationwide",
      detail: "Proudly Ghanaian architecture and construction firm serving West Africa with global design standards.",
      ariaLabel: "Based in Accra Ghana"
    },
    {
      id: "year",
      icon: Calendar,
      finalValue: 2016,
      suffix: "",
      label: "Established",
      description: "Decades of combined expertise",
      detail: "Built on legacy, driven by innovation — shaping Ghana's skylines since 2016.",
      ariaLabel: "Established in 2016"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting &&!hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(stats[0].finalValue * progress),
        services: Math.floor(stats[1].finalValue * progress),
        year: 2016,
      });

      if (currentStep >= steps) {
        setCounts({
          projects: stats[0].finalValue,
          services: stats[1].finalValue,
          year: 2016,
        });
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AGEdge Global",
    "url": "https://agedgeglobal.com",
    "description": "Architecture, Materials, Construction & Real Estate firm based in Accra, Ghana",
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "300+"
    },
    "knowsAbout": ["Architecture", "Construction", "Real Estate", "Building Materials", "Ghana"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section
        ref={sectionRef}
        className="bg-white overflow-hidden relative"
        aria-labelledby="trust-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          {/* Heading */}
          <div className="text-center mb-10 lg:mb-12">
            <h2
              id="trust-heading"
              className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-800 mb-3"
            >
              AGEdge Global Impact
              <span className="block text-2xl lg:text-3xl font-light text-slate-400 mt-2">
                Architecture · Materials · Construction · Real Estate
              </span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <p className="text-slate-500 text-lg leading-relaxed font-light">
                Leading <strong className="font-medium text-slate-700">architecture and construction firm in Ghana</strong>. 
                Delivering end-to-end building solutions with <span className="italic text-slate-700 font-medium">innovation and sustainability</span>.
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-6" aria-hidden="true">
              <div className="w-12 h-px bg-amber-300"></div>
              <div className="w-3 h-px bg-amber-400"></div>
              <div className="w-3 h-px bg-amber-500"></div>
            </div>
          </div>

          {/* Stats grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
            role="list"
            aria-label="AGEdge Global company statistics"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              const displayValue = stat.id === 'projects'
          ? counts.projects
                : stat.id === 'services'
          ? counts.services
                : stat.finalValue;

              return (
                <article
                  key={stat.id}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 hover:border-amber-200"
                  role="listitem"
                  aria-label={stat.ariaLabel}
                >
                  <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                    <div className="w-full h-full border-t-2 border-r-2 border-amber-300 rounded-tr-lg" />
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-stone-50 to-amber-50 group-hover:from-amber-50 group-hover:to-amber-100 transition-all duration-500">
                      <Icon className="w-6 h-6 text-amber-600 group-hover:text-amber-700 transition-colors" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-5xl lg:text-6xl font-light text-slate-900 tracking-tighter leading-tight">
                      {stat.suffix === "+"
                  ? `${displayValue}${stat.suffix}`
                        : stat.id === 'year'
                  ? displayValue
                        : displayValue}
                    </p>

                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-1">
                        {stat.label}
                      </h3>
                      <p className="text-sm text-amber-600 font-medium">
                        {stat.description}
                      </p>
                    </div>

                    <div className="pt-3 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-y-0 translate-y-2">
                      <p className="text-xs text-slate-600 leading-relaxed border-t border-stone-100 pt-3 font-medium">
                        {stat.detail}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-transparent via-amber-50/20 to-transparent" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}