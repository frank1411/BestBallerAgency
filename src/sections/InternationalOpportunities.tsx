import { Globe } from 'lucide-react';
import Button from '../components/Button';

const InternationalOpportunities = () => {
  // Top basketball leagues data
  const leagues = [
    { name: "NBA", country: "Estados Unidos", flag: "🇺🇸" },
    { name: "Euroliga", country: "Europa", flag: "🇪🇺" },
    { name: "ACB", country: "Venezuela", flag: "🇪🇸" },
    { name: "LNB Pro A", country: "Francia", flag: "🇫🇷" },
    { name: "Lega Basket", country: "Italia", flag: "🇮🇹" },
    { name: "VTB United", country: "Rusia", flag: "🇷🇺" },
    { name: "BSL", country: "Turquía", flag: "🇹🇷" },
    { name: "NBL", country: "Australia", flag: "🇦🇺" },
    { name: "CBA", country: "China", flag: "🇨🇳" },
    { name: "Liga ACB", country: "Argentina", flag: "🇦🇷" },
    { name: "NBB", country: "Brasil", flag: "🇧🇷" },
    { name: "B.League", country: "Japón", flag: "🇯🇵" },
  ];

  return (
    <section id="oportunidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">OPORTUNIDADES INTERNACIONALES</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Conectamos talento con las mejores ligas de baloncesto alrededor del mundo.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-bold text-navy">Presencia Global</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Nuestra red de contactos se extiende a más de 30 países, permitiéndonos conectar a nuestros representados con oportunidades que se alinean perfectamente con sus objetivos profesionales y personales.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy text-xl mb-2">+150</h4>
                  <p className="text-gray-600">Equipos en contacto</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy text-xl mb-2">+30</h4>
                  <p className="text-gray-600">Países con presencia</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy text-xl mb-2">+45</h4>
                  <p className="text-gray-600">Ligas profesionales</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy text-xl mb-2">+200</h4>
                  <p className="text-gray-600">Contratos negociados</p>
                </div>
              </div>
              
              <Button>Explora Oportunidades</Button>
            </div>
            
            <div className="bg-navy p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Ligas donde tenemos representados</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {leagues.map((league, index) => (
                  <div key={index} className="flex items-center border-b border-navy-light pb-3 mb-3">
                    <div className="mr-3 text-2xl">{league.flag}</div>
                    <div>
                      <h4 className="font-semibold">{league.name}</h4>
                      <p className="text-xs text-gray-300">{league.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalOpportunities;