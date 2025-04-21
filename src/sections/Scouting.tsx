import { Search, UserPlus, FileCheck, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Scouting = () => {
  return (
    <section id="postulate" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">POSTÚLATE</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Buscamos constantemente nuevo talento para representar. 
            Sigue el proceso y forma parte de nuestra familia de deportistas.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
              <UserPlus size={28} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-2">1. Aplica</h3>
              <p className="text-gray-600">
                Completa el formulario con tus datos personales, experiencia y objetivos profesionales.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
              <Search size={28} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-2">2. Evaluación</h3>
              <p className="text-gray-600">
                Nuestro equipo de scouts analizará tu perfil, estadísticas y potencial de desarrollo.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
              <FileCheck size={28} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-2">3. Entrevista</h3>
              <p className="text-gray-600">
                Si tu perfil se ajusta a nuestros criterios, te contactaremos para una entrevista personal.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
              <CheckCircle size={28} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-2">4. Representación</h3>
              <p className="text-gray-600">
                Definiremos juntos un plan personalizado para impulsar tu carrera al siguiente nivel.
              </p>
            </div>
          </div>
        </div>
        
        {/* Application Form */}
        <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Formulario de Aplicación</h3>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <h4 className="font-semibold text-navy mb-4 border-b pb-2">Información Personal</h4>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Correo electrónico *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Fecha de nacimiento *
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-semibold text-navy mb-4 border-b pb-2">Información Deportiva</h4>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Tipo *
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona...</option>
                <option value="player">Jugador</option>
                <option value="coach">Entrenador</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Posición (si eres jugador)
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona...</option>
                <option value="PG">Base</option>
                <option value="SG">Escolta</option>
                <option value="SF">Alero</option>
                <option value="PF">Ala-Pívot</option>
                <option value="C">Pívot</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Altura (cm)
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Equipo actual
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Experiencia previa *
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe tu trayectoria deportiva, equipos anteriores y logros destacados..."
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Enlaces (videos, perfil en redes sociales, etc.)
              </label>
              <textarea
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Comparte enlaces a tus highlights, perfiles en redes sociales o cualquier recurso que muestre tu talento..."
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                ¿Por qué quieres que te representemos? *
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Cuéntanos tus objetivos profesionales y por qué crees que podemos ayudarte a alcanzarlos..."
              ></textarea>
            </div>
            
            <div className="md:col-span-2 flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales *
              </label>
            </div>
            
            <div className="md:col-span-2 text-center">
              <Button type="submit" size="lg" className="mt-4">
                Enviar Solicitud
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Scouting;