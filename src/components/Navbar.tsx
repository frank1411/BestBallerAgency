import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-white font-bold text-xl">BEST BALLER AGENCY</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#quienes-somos" className="text-white hover:text-orange-500 transition-colors">
              QUIENES SOMOS
            </a>
            <a href="#representados" className="text-white hover:text-orange-500 transition-colors">
              REPRESENTADOS
            </a>
            <a href="#servicios" className="text-white hover:text-orange-500 transition-colors">
              SERVICIOS
            </a>
            <a href="#oportunidades" className="text-white hover:text-orange-500 transition-colors">
              OPORTUNIDADES INTERNACIONALES
            </a>
            <a
              href="#postulate"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              POSTÚLATE
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#quienes-somos"
              className="block px-3 py-2 text-white hover:bg-navy-light"
              onClick={toggleMobileMenu}
            >
              QUIENES SOMOS
            </a>
            <a
              href="#representados"
              className="block px-3 py-2 text-white hover:bg-navy-light"
              onClick={toggleMobileMenu}
            >
              REPRESENTADOS
            </a>
            <a
              href="#servicios"
              className="block px-3 py-2 text-white hover:bg-navy-light"
              onClick={toggleMobileMenu}
            >
              SERVICIOS
            </a>
            <a
              href="#oportunidades"
              className="block px-3 py-2 text-white hover:bg-navy-light"
              onClick={toggleMobileMenu}
            >
              OPORTUNIDADES INTERNACIONALES
            </a>
            <a
              href="#postulate"
              className="block px-3 py-2 bg-orange-500 text-white rounded-md"
              onClick={toggleMobileMenu}
            >
              POSTÚLATE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;