import React, { useState, useEffect } from 'react';
import { PlayerCard } from '../components/PlayerCard';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

// Definir interfaz de Player
interface Player {
  id: string;
  name: string;
  position: string;
  team: string;
  imageUrl?: string;
  type?: 'player' | 'coach';
  featured?: boolean;
}

const RepresentedPlayers: React.FC = () => {
  // Estados para manejar jugadores
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados de filtrado
  const [filter, setFilter] = useState<'all' | 'player' | 'coach'>('all');
  const [visibleCount, setVisibleCount] = useState(6);

  // Datos de ejemplo para cuando la API falle
  const examplePlayers: Player[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      position: 'Base',
      team: 'Trotamundos de Carabobo',
      type: 'player',
      imageUrl: 'https://via.placeholder.com/300x400?text=Juan+Pérez'
    },
    {
      id: '2',
      name: 'Carlos Rodríguez',
      position: 'Escolta',
      team: 'Cocodrilos de Caracas',
      type: 'player',
      imageUrl: 'https://via.placeholder.com/300x400?text=Carlos+Rodríguez'
    },
    {
      id: '3',
      name: 'Miguel González',
      position: 'Alero',
      team: 'Guaros de Lara',
      type: 'player',
      imageUrl: 'https://via.placeholder.com/300x400?text=Miguel+González'
    },
    {
      id: '4',
      name: 'Pedro Martínez',
      position: 'Ala-Pívot',
      team: 'Spartans Distrito Capital',
      type: 'player',
      imageUrl: 'https://via.placeholder.com/300x400?text=Pedro+Martínez'
    },
    {
      id: '5',
      name: 'Luis Sánchez',
      position: 'Pívot',
      team: 'Marinos de Anzoátegui',
      type: 'player',
      imageUrl: 'https://via.placeholder.com/300x400?text=Luis+Sánchez'
    },
    {
      id: '6',
      name: 'Roberto Fernández',
      position: 'Entrenador',
      team: 'Selección Nacional',
      type: 'coach',
      imageUrl: 'https://via.placeholder.com/300x400?text=Roberto+Fernández'
    }
  ];

  // Efecto para cargar jugadores
  useEffect(() => {
    const apiEndpoints = [
      'https://ohks3g46lg.execute-api.us-east-1.amazonaws.com/prod/players',
      'https://pj0im8sjn1.execute-api.us-east-1.amazonaws.com/prod/players'
    ];

    const fetchPlayers = async () => {
      let apiSuccess = false;
      
      for (const endpoint of apiEndpoints) {
        try {
          console.log(`Intentando conectar a: ${endpoint}`);
          const response = await fetch(endpoint);
          
          if (!response.ok) {
            console.warn(`Error en la respuesta de ${endpoint}: ${response.status}`);
            continue;
          }

          const data: Player[] = await response.json();
          
          if (data && Array.isArray(data) && data.length > 0) {
            console.log(`Datos obtenidos correctamente de ${endpoint}`, data);
            setPlayers(data);
            setLoading(false);
            apiSuccess = true;
            return;
          } else {
            console.warn(`Datos vacíos o inválidos de ${endpoint}`);
          }
        } catch (err) {
          console.warn(`Error al conectar con ${endpoint}:`, err);
        }
      }

      // Si ningún endpoint funciona, usar datos de ejemplo
      if (!apiSuccess) {
        console.log('Usando datos de ejemplo debido a fallos en las APIs');
        setPlayers(examplePlayers);
        setError('Mostrando datos de ejemplo. No se pudo conectar con el servidor.');
      }
      
      setLoading(false);
    };

    fetchPlayers();
  }, []);

  // Filtrar jugadores
  const filteredPlayers = players.filter(player => {
    if (filter === 'all') return true;
    return player.type === filter;
  });

  // Jugadores mostrados
  const displayedPlayers = filteredPlayers.slice(0, visibleCount);

  // Manejar mostrar más jugadores
  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Estados de carga y error
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p>Cargando jugadores...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                {error}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="represented-players-section container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestros Representados</h2>
        <p className="text-gray-600">Profesionales de élite en el mundo del deporte</p>
      </div>

      {/* Filtros */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              filter === 'all'
                ? 'bg-orange-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            } transition-colors`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('player')}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              filter === 'player'
                ? 'bg-orange-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            } transition-colors`}
          >
            Jugadores
          </button>
          <button
            onClick={() => setFilter('coach')}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              filter === 'coach'
                ? 'bg-orange-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            } transition-colors`}
          >
            Entrenadores
          </button>
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPlayers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredPlayers.length && (
        <div className="text-center mt-12">
          <Button
            onClick={handleShowMore}
          >
            Ver más representados
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default RepresentedPlayers;