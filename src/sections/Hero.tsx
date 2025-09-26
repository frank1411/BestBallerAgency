import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <img
          src="https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg"
          alt="Basketball player in action"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            REPRESENTAMOS TALENTO.
            <br />
            IMPULSAMOS TU CARRERA
            <br />
            AL SIGUIENTE NIVEL.
          </h1>
          
          <p className="text-xl text-white mb-8">
            Agencia internacional de representación de 
            jugadores y entrenadores profesionales
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#formulario-aplicacion" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('formulario-aplicacion');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block"
            >
              <Button size="lg">
                SOLICITA REPRESENTACIÓN
              </Button>
            </a>
            <a 
              href="#nuestros-representados" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('nuestros-representados');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block"
            >
              <Button variant="outline" size="lg" className="text-black border-white hover:bg-black hover:text-white">
                CONOCE NUESTROS JUGADORES
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;