import Header from '@/components/Header';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Hero from '@/components/Hero';
import AboutInstitution from '@/components/AboutInstitution';
import AcademicPrograms from '@/components/AcademicPrograms';
import Infrastructure from '@/components/Infrastructure';
import WhyChooseJKKN from '@/components/WhyChooseJKKN';
import AdmissionsSection from '@/components/AdmissionsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />
      <Hero />
      <AboutInstitution />
      <AcademicPrograms />
      <Infrastructure />
      <WhyChooseJKKN />
      <AdmissionsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
