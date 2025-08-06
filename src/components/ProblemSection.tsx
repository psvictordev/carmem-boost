import { AlertTriangle, X, Target, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ProblemSection = () => {
  const problems = [
    {
      icon: <X className="w-6 h-6 text-red-500" />,
      title: "Academia sem resultados",
      description: "Horas de exercício sem ver mudanças na região abdominal",
    },
    {
      icon: <X className="w-6 h-6 text-red-500" />,
      title: "Dietas extremas",
      description: "Restrições que não funcionam e ainda prejudicam a saúde",
    },
    {
      icon: <X className="w-6 h-6 text-red-500" />,
      title: "Tratamentos genéricos",
      description: "Soluções padronizadas que ignoram sua individualidade",
    },
  ];

  const factors = [
    {
      icon: <Target className="w-8 h-8 text-medical-primary" />,
      title: "Sua HISTÓRIA hormonal e metabólica",
      description:
        "Cada corpo tem uma história única que influencia acumula e perde gordura",
    },
    {
      icon: <Zap className="w-8 h-8 text-medical-primary" />,
      title: "O TIPO específico de gordura",
      description:
        "Gordura subcutânea e visceral têm abordagens completamente diferentes",
    },
    {
      icon: <Users className="w-8 h-8 text-medical-primary" />,
      title: "A SINERGIA entre músculo, pele e fáscia",
      description:
        "O abdômen é um sistema complexo que precisa ser tratado integralmente",
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-medical-primary" />
            <span className="text-medical-primary font-semibold">
              A Verdade Que Ninguém Te Conta
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-medical-dark">
            A Dor que o <span className="text-medical-primary">Contour</span>{" "}
            Resolve
          </h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Sente que <strong>NADA funciona</strong> nessa 'barriguinha'
            teimosa?
            <br />
            Não é culpa sua. Tratamentos genéricos falham porque ignoram 3
            fatores cruciais:
          </p>
        </div>

        {/* Critical Factors */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {factors.map((factor, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-50 rounded-full">
                      {factor.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-medical-dark">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What You've Already Tried */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-medical-dark">
            Talvez você já tenha tentado de tudo:
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-red-50 rounded-lg"
              >
                {problem.icon}
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {problem.title}
                  </h4>
                  <p className="text-sm text-gray-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The Truth */}
          <div className="text-center bg-medical-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-medical-dark">
              A verdade é simples:
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <strong>
                Nem toda gordura é igual. Nem todo corpo responde da mesma
                forma.
              </strong>
              <br />É por isso que você precisa de um método inteligente,
              preciso e específico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
