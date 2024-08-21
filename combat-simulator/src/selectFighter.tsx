import React from 'react';
import { Fighter } from './types';

interface SelectFighterProps {
  fighters: Fighter[];
  onSelect: (fighter: Fighter) => void;
  player: number;
}

const SelectFighter: React.FC<SelectFighterProps> = ({ fighters, onSelect, player }) => {
  return (
    <div>
      <h2>Elige luchardor para el jugador {player}</h2>
      {fighters.map((fighter) => (
        <div key={fighter.id}>
          <button className="skill-button" onClick={() => onSelect(fighter)}>
            {fighter.name} (Vida: {fighter.maxHP}, Ataque: {fighter.attack}, Defensa: {fighter.defense})
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectFighter;
