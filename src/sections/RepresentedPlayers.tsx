import { useState } from 'react';
import PlayerCard from '../components/PlayerCard';
import { playersData } from '../data/players';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const RepresentedPlayers = () => {
  const [filter, setFilter] = useState('all'); // all, players, coaches
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Filter players based on selected category
  const filteredPlayers = playersData.filter(player => {
    if (filter === 'all') return true;
    return player.type === filter;
  });
  
  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredPlayers.length));
  };
  
  const displayedPlayers = filteredPlayers.slice(0, visibleCount);
  
  return (
    <section id="representados" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">NUESTROS REPRESENTADOS</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Trabajamos con los mejores talentos del baloncesto mundial, guiándolos hacia el éxito deportivo y profesional.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
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
              variant="outline"
              onClick={handleShowMore}
              className="inline-flex items-center"
            >
              Ver más representados
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RepresentedPlayers;