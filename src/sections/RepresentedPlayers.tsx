import React, { useState, useEffect } from 'react';
import { PlayerCard } from '../components/PlayerCard';
import { Button } from '../components/ui/Button';
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

  // Efecto para cargar jugadores
  useEffect(() => {
    const apiEndpoints = [
      'https://ohks3g46lg.execute-api.us-east-1.amazonaws.com/prod/players',
      'https://pj0im8sjn1.execute-api.us-east-1.amazonaws.com/prod/players'
    ];

    const fetchPlayers = async () => {
      for (const endpoint of apiEndpoints) {
        try {
          const response = await fetch(endpoint);
          
          if (!response.ok) {
            throw new Error(`Error al obtener jugadores: ${response.status}`);
          }

          const data: Player[] = await response.json();
          
          if (data.length > 0) {
            setPlayers(data);
            setLoading(false);
            return;
          }
        } catch (err) {
          console.warn(`Error con endpoint ${endpoint}:`, err);
        }
      }

      // Si ningún endpoint funciona
      setError('No se pudieron obtener los jugadores');
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
  if (loading) return <div>Cargando representados...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="representados" className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestros Representados</h2>
        <p className="text-gray-600">Profesionales de élite en el mundo del deporte</p>
      </div>
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