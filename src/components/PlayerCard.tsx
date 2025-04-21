import { Star } from 'lucide-react';
import { Player } from '../types';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={player.imageUrl} 
          alt={`${player.name} - Basketball Player`}
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent p-4">
          <div className="flex items-center">
            {player.featured && (
              <div className="flex items-center bg-orange-500 text-white text-xs rounded px-2 py-1 mr-2">
                <Star size={12} className="mr-1" />
                <span>Destacado</span>
              </div>
            )}
            {player.international && (
              <div className="bg-blue-500 text-white text-xs rounded px-2 py-1">
                Internacional
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-navy mb-1">{player.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <span className="mr-3">{player.position}</span>
          <span className="mr-3">|</span>
          <span>{player.team}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-gray-100 p-2 rounded">
            <span className="text-sm text-gray-500">Edad</span>
            <p className="font-semibold">{player.age} años</p>
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <span className="text-sm text-gray-500">Altura</span>
            <p className="font-semibold">{player.height} cm</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{player.bio}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i}
                size={16}
                className={i < player.rating ? "text-orange-500 fill-orange-500" : "text-gray-300"}
              />
            ))}
          </div>
          <a 
            href={`#player-${player.id}`}
            className="text-blue-500 font-medium hover:text-blue-700 transition-colors"
          >
            Ver perfil
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;