import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl font-bold mb-4">BEST BALLER AGENCY</h2>
            <p className="text-gray-300 mb-4">
              Agencia internacional de representación de jugadores y entrenadores profesionales de baloncesto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#quienes-somos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Quienes Somos
                </a>
              </li>
              <li>
                <a href="#representados" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Representados
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#oportunidades" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Oportunidades Internacionales
                </a>
              </li>
              <li>
                <a href="#postulate" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Postúlate
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Av. Principal 123, Ciudad Deportiva, España</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+34 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@elitehoops.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mantente Informado</h3>
            <p className="text-gray-300 mb-4">
              Suscríbete para recibir noticias y oportunidades.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 bg-navy-light text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BEST BALLER AGENCY. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;