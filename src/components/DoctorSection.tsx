import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Users, Star, CheckCircle } from "lucide-react";
import profilePhoto from "./../profilePhoto.png";

export const DoctorSection = () => {
  const credentials = [
    "Especialista em Medicina Estética",
    "Formação em Protocolos Europeus", 
    "Certificada em Bioengenharia Estética",
    "Membro da Sociedade Brasileira de Medicina Estética",
    "15 anos de experiência"
  ];

  const achievements = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "Centenas de pacientes transformadas",
    },
    { icon: <Star className="w-5 h-5" />, text: "98% de satisfação" },
    { icon: <Award className="w-5 h-5" />, text: "Criadora do método Contour" },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-medical-primary/10 to-orange-100/50 rounded-3xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <img src={profilePhoto} alt="Logo" className="p-8" />
                  <div className="w-16 h-16 bg-medical-primary/20 rounded-full mx-auto mb-1 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-medical-primary" />
                  </div>
                  <p className="text-lg font-medium mb-4">
                    Dra. Carmem Sevilla
                  </p>
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4">
                <Badge className="bg-medical-primary text-white px-4 py-2 shadow-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Especialista
                </Badge>
              </div>
              
              <div className="absolute -bottom-4 -left-4">
                <Badge className="bg-white text-medical-primary border border-medical-primary px-4 py-2 shadow-medium">
                  <Star className="w-4 h-4 mr-2" />
                  15 anos
                </Badge>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <Badge variant="outline" className="mb-4 text-medical-primary border-medical-primary">
                <GraduationCap className="w-4 h-4 mr-2" />
                Especialista Certificada
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-medical-dark">
                Dra. Carmem Sevilla
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Carmem Sevilla é Biomédica Esteta, especialista em Reconstrução
                Abdominal Não Cirúrgica e criadora de métodos exclusivos que já
                transformaram a autoestima e o corpo de centenas de mulheres.
                Sua consulta vai muito além de uma avaliação estética: é o
                primeiro passo para uma nova versão de si mesma.
              </p>

              {/* Credentials */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-medical-dark">
                  Formação e Certificações:
                </h3>
                <div className="grid gap-2">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-medical-accent flex-shrink-0" />
                      <span className="text-gray-600">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="grid md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="border-0 bg-white shadow-soft">
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-2 text-medical-primary">
                        {achievement.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-700">
                        {achievement.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 bg-medical-primary/5 rounded-2xl border-l-4 border-medical-primary">
                <p className="text-gray-700 italic leading-relaxed">
                  "Minha missão vai além do corpo: é devolver às mulheres a
                  autoestima, a confiança e o brilho no olhar. Porque cada
                  mulher é única — e merece um tratamento à altura da sua
                  história."
                </p>
                <p className="text-right mt-3 font-semibold text-medical-dark">
                  — Dra. Carmem Sevilla
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};