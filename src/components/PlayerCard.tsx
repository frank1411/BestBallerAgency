import React from 'react';

export interface Player {
  id: string;
  name: string;
  position: string;
  team: string;
  imageUrl?: string;
  type?: 'player' | 'coach';
  featured?: boolean;
}

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {player.imageUrl && (
        <img 
          src={player.imageUrl} 
          alt={player.name} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="mt-4">
        <h3 className="text-xl font-bold">{player.name}</h3>
        <p className="text-gray-600">{player.position} - {player.team}</p>
        {player.type && (
          <span className="inline-block mt-2 px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">
            {player.type === 'player' ? 'Jugador' : 'Entrenador'}
          </span>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
