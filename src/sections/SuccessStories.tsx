import { useState } from 'react';
import { Award, BarChart, Globe, Briefcase } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';
import { testimonials } from '../data/testimonials';

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const successCases = [
    {
      title: "De promesa local a estrella internacional",
      name: "Carlos Rodríguez",
      description: "Carlos llegó a nosotros como un prometedor base en la liga universitaria española. Trabajamos en su desarrollo técnico y visibilidad internacional, logrando su fichaje por un equipo de Euroliga en menos de 8 meses.",
      metrics: [
        { label: "Incremento salarial", value: "350%" },
        { label: "Seguidores en redes", value: "125K+" },
        { label: "Acuerdos comerciales", value: "6" }
      ],
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg"
    },
    {
      title: "Revitalizando una carrera consolidada",
      name: "Elena Martínez",
      description: "Tras varios años en la élite, Elena necesitaba un giro estratégico en su carrera. Desarrollamos un plan para diversificar sus oportunidades, extendiendo su vida deportiva profesional y sentando las bases para su transición post-baloncesto.",
      metrics: [
        { label: "Años de carrera adicionales", value: "5+" },
        { label: "Nuevas oportunidades", value: "3 países" },
        { label: "Plataforma de marca", value: "Lanzada" }
      ],
      image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg"
    },
    {
      title: "Del banquillo al protagonismo",
      name: "Miguel Fernández",
      description: "Miguel era un talento infrautilizado en su equipo. Identificamos su potencial real y encontramos un nuevo destino donde pudiera mostrar todas sus capacidades, convirtiéndose en pieza clave y multiplicando su valor de mercado.",
      metrics: [
        { label: "Minutos por partido", value: "+18.5" },
        { label: "Valoración media", value: "+12.3" },
        { label: "Ofertas recibidas", value: "5" }
      ],
      image: "https://images.pexels.com/photos/4320469/pexels-photo-4320469.jpeg"
    }
  ];
  
  const stats = [
    { value: "+200", label: "Contratos Negociados", icon: <Briefcase size={36} /> },
    { value: "+30M€", label: "En Contratos", icon: <BarChart size={36} /> },
    { value: "27", label: "Países con Jugadores", icon: <Globe size={36} /> },
    { value: "15+", label: "Premios Individuales", icon: <Award size={36} /> }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">CASOS DE ÉXITO</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Historias que demuestran nuestro compromiso con el crecimiento y éxito de cada representado.
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
        
        {/* Success Cases Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="flex border-b">
            {successCases.map((success, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === index
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {success.name}
              </button>
            ))}
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Caso de éxito
                </span>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {successCases[activeTab].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {successCases[activeTab].description}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {successCases[activeTab].metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-navy font-bold text-lg">{metric.value}</p>
                      <p className="text-gray-600 text-sm">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img
                  src={successCases[activeTab].image}
                  alt={`${successCases[activeTab].name} - Caso de éxito`}
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-navy text-center mb-8">Lo que dicen nuestros representados</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;