import React, { useState } from 'react';
import PlayerCard from '../components/PlayerCard';
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
  // Datos estáticos de jugadores
  const players: Player[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      position: 'Base',
      team: 'Trotamundos de Carabobo',
      type: 'player',
      imageUrl: 'https://images.unsplash.com/photo-1600189261869-3336cbe984f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      featured: true
    },
    {
      id: '2',
      name: 'Carlos Rodríguez',
      position: 'Escolta',
      team: 'Cocodrilos de Caracas',
      type: 'player',
      imageUrl: 'https://images.unsplash.com/photo-1585504256913-7f2601739ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      featured: true
    },
    {
      id: '4',
      name: 'Pedro Martínez',
      position: 'Ala-Pívot',
      team: 'Spartans Distrito Capital',
      type: 'player',
      imageUrl: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      featured: true
    },
    {
      id: '5',
      name: 'Luis Hernández',
      position: 'Pívot',
      team: 'Bucaneros de La Guaira',
      type: 'player',
      imageUrl: 'https://images.unsplash.com/photo-1542643423-5e3a3f4c9148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      featured: true
    },
    {
      id: '6',
      name: 'Jorge Rivas',
      position: 'Base',
      team: 'Gigantes de Guayana',
      type: 'player',
      imageUrl: 'https://images.unsplash.com/photo-1600189261869-3336cbe984f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      featured: true
    },
    {
      id: '7',
      name: 'Carlos Mendoza',
      position: 'Entrenador',
      team: 'Selección Nacional',
      type: 'coach',
      imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      featured: true
    }
  ];

  // Estados de filtrado
  const [filter, setFilter] = useState<'all' | 'player' | 'coach'>('all');
  const [visibleCount, setVisibleCount] = useState(3); // Mostrar 3 tarjetas inicialmente

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

  return (
    <section id="nuestros-representados" className="represented-players-section container mx-auto px-4 py-16">
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
      {filteredPlayers.length > 3 && visibleCount < filteredPlayers.length && (
        <div className="text-center mt-12">
          <Button
            onClick={handleShowMore}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
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