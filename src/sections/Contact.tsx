import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">CONTACTO</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Estamos aquí para responder tus preguntas y ayudarte a dar el siguiente paso en tu carrera.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">
              Conecta con nosotros
            </h3>
            <p className="text-gray-600 mb-8">
              Nuestro equipo está disponible para atenderte y resolver todas tus dudas. No dudes en contactarnos por cualquiera de estos canales:
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-500 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Dirección</h4>
                  <p className="text-gray-600">
                    Av. Principal 123, Ciudad Deportiva<br />
                    28001 Caracas, Venezuela
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-500 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Email</h4>
                  <p className="text-gray-600">
                    info@elitehoops.com<br />
                    scouting@elitehoops.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-500 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Teléfono</h4>
                  <p className="text-gray-600">
                    +58 123 456 789<br />
                    +58 987 654 321
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-500 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Horario</h4>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 - 18:00<br />
                    Fines de semana: Cerrado
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy rounded-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <Calendar size={24} className="text-orange-500 mr-3" />
                <h4 className="text-xl font-bold">Agenda una reunión</h4>
              </div>
              <p className="mb-4">
                Reserva una videollamada con uno de nuestros agentes para discutir tu carrera y posibles oportunidades.
              </p>
              <a 
                href="#" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition-colors"
              >
                Agendar Cita
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">
              Envíanos un mensaje
            </h3>
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-20 h-96 bg-gray-200 rounded-lg overflow-hidden">
          {/* Map would go here - using placeholder for now */}
          <div className="h-full flex items-center justify-center bg-gray-300">
            <p className="text-gray-600 font-medium">Mapa con la ubicación de nuestras oficinas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;