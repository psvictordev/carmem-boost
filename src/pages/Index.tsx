import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { MethodSection } from "@/components/MethodSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DoctorSection } from "@/components/DoctorSection";
import { ConsultaSection } from "@/components/ui/ConsultaSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <TestimonialsSection />
      <DoctorSection />
      <ConsultaSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
