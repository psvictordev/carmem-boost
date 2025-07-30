import { Shield, Zap, Heart, Award, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MethodSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Reduzir o volume abdominal",
      description: "de forma segura e rápida",
      detail: "Resultados visíveis já na primeira semana"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reorganizar a musculatura interna",
      description: "e redefinir sua silhueta",
      detail: "Fortalecimento profundo do core"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Correção da diástase abdominal",
      description: "e gordura localizada",
      detail: "Tratamento específico pós-gestação"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Realinhamento da autoestima",
      description: "e da autopercepção",
      detail: "Uma nova relação com o espelho"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-medical-primary border-medical-primary">
              <Award className="w-4 h-4 mr-2" />
              Método Exclusivo e Patenteado
            </Badge>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-medical-primary">CONTOUR</span>
            </h2>
            
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-medical-dark">
              Reconstrução Abdominal Não Cirúrgica
            </p>
            
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Desenvolvido a partir de <strong>protocolos europeus</strong>, recursos de bioengenharia estética 
              e tecnologia de ponta, o Contour é um método exclusivo, criado para:
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-500 border-0 bg-gradient-to-br from-white to-orange-50/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-medical-primary text-white rounded-full group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-medical-dark group-hover:text-medical-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-2">
                        {benefit.description}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        {benefit.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emotional Impact */}
          <div className="text-center bg-gradient-to-r from-medical-primary/5 to-orange-100/30 rounded-3xl p-12">
            <Heart className="w-16 h-16 text-medical-primary mx-auto mb-6 animate-pulse-glow" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-medical-dark">
              Não é apenas estética.
            </h3>
            <p className="text-2xl text-gray-700 font-medium">
              É uma nova relação com o espelho.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {["Autoconfiança", "Bem-estar", "Qualidade de vida", "Autoestima"].map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-white/50 text-medical-dark">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};