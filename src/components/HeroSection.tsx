import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de mais informações sobre o método Contour."
    );
    window.open(`https://wa.me/559484413360?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Floating medical equipment background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div
          className="absolute bottom-32 right-20 w-24 h-24 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">
              Método Exclusivo • Sem Cirurgia
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Reconstrua seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200">
              abdômen
            </span>{" "}
            e sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white">
              autoestima
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
            O método exclusivo que redefine abdômens sem cirurgia, sem cortes,
            sem sofrimento.{" "}
            <strong className="text-white">
              Redução visível já na primeira semana.
            </strong>
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
            {[
              "Sem cirurgia",
              "Resultados em 7 dias",
              "Método científico europeu",
              "Atendimento personalizado",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-white text-medical-primary hover:bg-orange-50 shadow-cta text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-large"
            onClick={handleWhatsAppContact}
          >
            Agendar Consulta Bio Premium
          </Button>

          {/* Trust indicators */}
          <div className="mt-8 text-orange-100">
            <p className="text-sm">
              ✨ Descubra como transformar seu antes em um depois de tirar o
              fôlego
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};
