import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O método Contour realmente funciona sem cirurgia?",
      answer: "Sim! O método Contour utiliza protocolos europeus de bioengenharia estética que permitem reconstruir o abdômen sem cortes, sem anestesia e sem riscos cirúrgicos. Os resultados são visíveis já na primeira semana e comprovados cientificamente."
    },
    {
      question: "Quanto tempo leva para ver os primeiros resultados?",
      answer:
        "O resultados são visíveis já nos primeiros 7 dias de tratamento.",
    },
    {
      question: "O tratamento é doloroso?",
      answer: "Não! Uma das principais vantagens do método Contour é ser completamente indolor. Você pode relaxar durante as sessões e retomar suas atividades normais imediatamente após o tratamento."
    },
    {
      question: "Funciona para diástase abdominal?",
      answer: "Sim, o método Contour é especialmente eficaz para correção de diástase abdominal. Utilizamos técnicas específicas que fortalecem a musculatura profunda e aproximam os músculos separados, sem necessidade de cirurgia."
    },
    {
      question: "Qual o diferencial da consulta bio premium?",
      answer:
        "O diferencial está no diagnóstico personalizado completo (biorressonância, bioimpedância, adipometria, exame bidigital) que nos permite entender exatamente seu tipo de gordura, histórico hormonal e necessidades específicas. Não é apenas uma avaliação.",
    },
    {
      question: "Preciso fazer dieta rigorosa durante o tratamento?",
      answer:
        "No nosso tratamento não há necessidade de pesar comida, contar calorias, e nem passar fome. Fornecemos orientações nutricionais personalizadas baseadas no seu mapeamento metabólico, priorizando uma alimentação equilibrada e sustentável.",
    },
    {
      question: "Quanto custa o tratamento completo?",
      answer:
        "O investimento varia conforme seu diagnóstico personalizado e plano de transformação. Na consulta Bio Premium, apresentamos todas as opções com valores transparentes e condições de pagamento facilitadas.",
    },
    {
      question: "Há garantia de resultados?",
      answer: "Oferecemos garantia de satisfação. Se após a consulta completa você não se sentir confiante com o plano proposto, pode interromper sem prosseguir com o tratamento. Nossa taxa de satisfação é de 98%."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-medical-primary" />
              <span className="text-medical-primary font-semibold">Dúvidas Frequentes</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-medical-dark">
              Tire todas suas dúvidas
            </h2>
            
            <p className="text-xl text-gray-600">
              As perguntas mais comuns sobre o método Contour
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-medical-dark hover:text-medical-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="text-center mt-16 bg-gradient-to-r from-medical-primary/5 to-orange-100/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-medical-dark">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer todas suas questões na consulta personalizada.
            </p>
            <p className="text-sm text-gray-500">
              💬 Você também pode tirar suas dúvidas diretamente no WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};