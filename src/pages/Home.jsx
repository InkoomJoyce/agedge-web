import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import ServicesSection from '../components/home/ServicesSection'
import CtaSection from '../components/home/CtaSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import ClientsSection from '../components/home/ClientsSection'
import TeamSection from '../components/home/TeamSection'
import NewsletterSection from '../components/home/NewsletterSection'
import DiscoverGhanaSection from '../components/home/DiscoverGhanaSection'
import LuxuryLivingSection from '../components/home/LuxuryHomeSection'

export default function Home() {
  return (
    <>
      <Hero />
      <LuxuryLivingSection />
      
      <ServicesSection />
      <TrustBar />
     
    
      <TestimonialsSection />
       <CtaSection />
      <ClientsSection />
      <TeamSection />
      <NewsletterSection />
      {/* <DiscoverGhanaSection /> */}
      
    </>
  )
}