import HeroSection from '@/components/marketing/HeroSection';
import AboutSection from '@/components/marketing/AboutSection';
import MenuHighlights from '@/components/marketing/MenuHighlights';
import ExperienceSection from '@/components/marketing/ExperienceSection';
import Testimonials from '@/components/marketing/Testimonials';
import CTASection from '@/components/marketing/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuHighlights />
      <ExperienceSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
