import { Award, BarChart2, Briefcase, Globe, ShieldCheck, UserCheck } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Negociación de Contratos",
      description: "Maximizamos el valor de cada contrato utilizando nuestra experiencia y red de contactos en el mundo del baloncesto.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Marketing Personal",
      description: "Desarrollamos tu marca personal para aumentar tu visibilidad y atractivo comercial dentro y fuera de la cancha.",
      icon: <BarChart2 size={32} />
    },
    {
      title: "Asesoría Legal",
      description: "Protegemos tus intereses con asesoramiento legal especializado en contratos deportivos y derechos de imagen.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Gestión de Carrera",
      description: "Planificamos estratégicamente cada paso de tu carrera para maximizar tu potencial deportivo y económico.",
      icon: <UserCheck size={32} />
    },
    {
      title: "Oportunidades Internacionales",
      description: "Accede a ligas y mercados globales gracias a nuestra extensa red de contactos en el baloncesto mundial.",
      icon: <Globe size={32} />
    },
    {
      title: "Reconocimiento y Premios",
      description: "Trabajamos para posicionarte estratégicamente para reconocimientos y premios que impulsen tu carrera.",
      icon: <Award size={32} />
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">NUESTROS SERVICIOS</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Ofrecemos un acompañamiento integral para que te enfoques en lo que mejor sabes hacer: jugar al baloncesto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-navy rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Representación Profesional de Élite
              </h3>
              <p className="text-gray-300 mb-6">
                Nuestro equipo de agentes certificados trabaja incansablemente para ofrecerte las mejores oportunidades profesionales adaptadas a tus objetivos y capacidades.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Negociaciones transparentes y efectivas",
                  "Estrategias personalizadas para cada etapa de tu carrera",
                  "Asesoramiento continuo y disponibilidad 24/7",
                  "Red global de contactos con equipos y ligas profesionales"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#postulate"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Solicitar Representación
              </a>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/5384617/pexels-photo-5384617.jpeg"
                alt="Basketball negotiation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;