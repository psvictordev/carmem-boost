import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export const FooterSection = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre o método Contour.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-medical-dark text-white">
      {/* Final CTA Section */}
      <div className="py-16 bg-gradient-to-r from-medical-primary to-orange-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronta para sua transformação?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende agora sua Consulta Bio Premium com 50% de desconto
            </p>
            <Button 
              size="lg" 
              className="bg-white text-medical-primary hover:bg-orange-50 shadow-large text-xl px-12 py-6 rounded-full font-bold transition-all duration-300 hover:scale-105"
              onClick={handleWhatsAppContact}
            >
              Quero Agendar Agora
            </Button>
            <p className="text-sm mt-4 opacity-75">
              Vagas limitadas • Atendimento via WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-medical-primary">
                  Carmen Sevilla
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Especialista em reconstrução abdominal não cirúrgica. 
                  Devolvendo autoestima e confiança através do método Contour.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-medical-primary flex-shrink-0" />
                    <span className="text-gray-300">
                      Rua dos Jardins, 123 - Jardins, São Paulo - SP
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-medical-primary flex-shrink-0" />
                    <span className="text-gray-300">(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-medical-primary flex-shrink-0" />
                    <span className="text-gray-300">contato@carmemsevilla.com.br</span>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Horário de Atendimento</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Segunda à Sexta</span>
                    <span className="text-white">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sábado</span>
                    <span className="text-white">8h às 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Domingo</span>
                    <span className="text-white">Fechado</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Siga-nos</h4>
                  <div className="flex gap-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-medical-primary hover:border-medical-primary hover:text-white"
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-medical-primary hover:border-medical-primary hover:text-white"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-medical-primary hover:border-medical-primary hover:text-white"
                    >
                      <Youtube className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4 text-white">
                      Atendimento Rápido
                    </h4>
                    <p className="text-gray-300 mb-6">
                      Tire suas dúvidas ou agende sua consulta diretamente pelo WhatsApp
                    </p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={handleWhatsAppContact}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Conversar no WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Carmen Sevilla. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-medical-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-medical-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-medical-primary transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};