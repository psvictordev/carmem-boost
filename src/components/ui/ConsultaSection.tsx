import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  Shield,
  Microscope,
  Brain,
  Activity,
  Ruler,
  HandMetal,
  Target,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export const ConsultaSection = () => {
  const diagnostics = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Biorressonância",
      description: "Mapeamento metabólico e gastrointestinal completo",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Diagnóstico Funcional",
      description: "Avaliação profunda dos sistemas corporais",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Bioimpedância Digital",
      description: "Análise de alta precisão da composição corporal",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Adipometria",
      description: "Identificação específica do perfil de gordura",
    },
    {
      icon: <HandMetal className="w-6 h-6" />,
      title: "Exame Bidigital",
      description: "Detecção de diástase e avaliação muscular",
    },
  ];

  const handleAgendarConsulta = () => {
    // Simulate WhatsApp redirect
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar minha Consulta Bio Premium com 50% de desconto."
    );
    window.open(`https://wa.me/5594984149190?text=${message}`, "_blank");
  };

  return (
    <section id="consulta-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-medical-accent border-medical-accent"
            >
              <Target className="w-4 h-4 mr-2" />
              Diagnóstico Personalizado
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-medical-dark">
              Toda transformação começa com um{" "}
              <span className="text-medical-primary">diagnóstico</span>
            </h2>

            <p className="text-2xl text-gray-600 mb-4">
              Mas aqui, não é qualquer avaliação.
            </p>

            <div className="bg-gradient-to-r from-medical-primary/5 to-orange-100/30 rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-medical-dark mb-2">
                VOCÊ TERÁ ACESSO À{" "}
                <span className="text-medical-primary">
                  CONSULTA BIO PREMIUM
                </span>
              </p>
              <p className="text-gray-600">
                A consulta mais completa da nossa clínica
              </p>
            </div>
          </div>

          {/* Diagnostics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {diagnostics.map((diagnostic, index) => (
              <Card
                key={index}
                className="group hover:shadow-large transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-medical-primary text-white rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {diagnostic.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-medical-dark">
                    {diagnostic.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {diagnostic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Benefit */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-medical-primary to-orange-400 text-white rounded-3xl p-8 max-w-4xl mx-auto">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Tudo isso para entender o seu corpo de forma única
              </h3>
              <p className="text-xl opacity-90">
                e construir o plano ideal de reconstrução abdominal sem
                cirurgia.
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-medical-primary shadow-cta overflow-hidden">
              <CardContent className="p-0">
                {/* Urgency Header */}
                <div className="bg-red-500 text-white text-center py-3">
                  <div className="flex items-center justify-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="font-semibold">VAGAS LIMITADAS</span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Limited Spots Alert */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-medical-dark">
                      As agendas estão quase completas
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Vagas limitadas para agendamento com valor promocional de{" "}
                      <strong className="text-medical-primary">50% OFF</strong>{" "}
                      na consulta
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-medical-primary to-orange-400 text-white rounded-2xl p-6 mb-6">
                      <div className="flex items-center justify-center gap-4 flex-wrap">
                        <div>
                          <span className="text-xl text-orange-200 line-through">
                            De R$ 500
                          </span>
                          <div className="text-4xl md:text-5xl font-bold">
                            R$ 250
                          </div>
                          <span className="text-orange-200">
                            Via Pix antecipado
                          </span>
                        </div>
                        <Badge className="bg-red-500 text-white text-lg px-4 py-2">
                          50% OFF
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-orange-600 bg-orange-50 rounded-lg p-4 mb-6">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">
                        Promoção válida apenas para as 10 primeiras agendas
                        confirmadas da semana
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {[
                      "Consulta segura",
                      "Diagnóstico completo",
                      "Plano personalizado",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 justify-center text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="text-center mb-6">
                    <Button
                      size="lg"
                      className="bg-gradient-cta hover:scale-105 text-white shadow-cta text-xl px-12 py-6 rounded-full font-bold transition-all duration-300"
                      onClick={handleAgendarConsulta}
                    >
                      SIM, QUERO GARANTIR MINHA VAGA COM DESCONTO
                    </Button>
                  </div>

                  {/* Guarantee */}
                  <div className="text-center text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
                    <Shield className="w-5 h-5 mx-auto mb-2 text-green-500" />
                    <p>
                      Se ao final da avaliação você sentir que não é para você,{" "}
                      <strong>
                        pode interromper sem seguir para tratamento
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
