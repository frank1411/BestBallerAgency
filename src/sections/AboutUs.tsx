const AboutUs = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">QUIÉNES SOMOS</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Comprometidos con el éxito y desarrollo profesional de los mejores talentos del baloncesto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-4">
              Agencia internacional de representación con resultados probados
            </h3>
            
            <p className="text-gray-700 mb-6">
              Somos una agencia internacional de representación de jugadores y entrenadores profesionales 
              de baloncesto, respaldada por más de una década de experiencia conectando talentos con 
              oportunidades en las mejores ligas del mundo.
            </p>
            
            <p className="text-gray-700 mb-6">
              Nuestra misión es potenciar el desarrollo integral de cada deportista, maximizando 
              su valor profesional y personal para asegurar una carrera exitosa y sostenible en el tiempo.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-navy italic">
                "Cada deportista es único. Nuestro trabajo es identificar ese valor diferencial 
                y convertirlo en oportunidades reales de crecimiento profesional."
              </p>
              <p className="text-navy font-bold mt-2">— Castor Besteiro, Fundador</p>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.pexels.com/photos/8112799/pexels-photo-8112799.jpeg" 
              alt="Equipo de Best Baller Agency" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-navy mb-2">EXPERIENCIA</h4>
            <p className="text-gray-600">
              Más de 10 años trabajando con ligas profesionales alrededor del mundo.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-navy mb-2">RED GLOBAL</h4>
            <p className="text-gray-600">
              Conexiones con equipos, ligas y organizaciones en más de 30 países.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-navy mb-2">ENFOQUE INTEGRAL</h4>
            <p className="text-gray-600">
              Desarrollo deportivo, profesional y personal para carreras sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;