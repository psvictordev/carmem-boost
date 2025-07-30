import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      result: "Perdeu 8cm de cintura",
      content: "Depois de duas gestações, achei que nunca mais recuperaria minha autoestima. O método Contour me devolveu não apenas meu abdômen, mas minha confiança. Em 3 semanas já via resultados incríveis!",
      rating: 5,
      initial: "M"
    },
    {
      name: "Ana Paula",
      age: "28 anos", 
      result: "Corrigiu diástase abdominal",
      content: "Sofria com diástase pós-parto há 2 anos. Tentei fisioterapia, exercícios... nada funcionava. A Dra. Carmen me explicou que cada caso é único. Hoje me sinto renovada!",
      rating: 5,
      initial: "A"
    },
    {
      name: "Júlia Santos",
      age: "42 anos",
      result: "Eliminou gordura localizada",
      content: "Mesmo fazendo academia religiosamente, aquela 'pochete' não saía. O diagnóstico personalizado foi fundamental. Entendi que meu corpo precisava de uma abordagem específica.",
      rating: 5,
      initial: "J"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-medical-dark">
              Transformações Reais
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossas pacientes falam sobre os resultados
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-medium hover:shadow-large transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-medical-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-medical-primary text-white font-semibold">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-medical-dark">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.age}</p>
                      <p className="text-sm text-medical-primary font-medium">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-medium max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-medical-dark">
                Sua transformação pode ser a próxima!
              </h3>
              <p className="text-gray-600 mb-6">
                Junte-se a centenas de mulheres que já recuperaram sua autoestima e confiança.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Avatar key={i} className="w-8 h-8 border-2 border-white">
                      <AvatarFallback className="bg-medical-primary text-white text-xs">
                        {String.fromCharCode(65 + i)}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span>+500 mulheres transformadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};