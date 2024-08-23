import React from 'react';
import { Fighter } from '../data/types';

interface SelectFighterProps {
  fighters: Fighter[];
  onSelect: (fighter: Fighter) => void;
  player: number;
}

const SelectFighter: React.FC<SelectFighterProps> = ({ fighters, onSelect, player }) => {
  return (
    <div>
      <h2>Elige luchador para el jugador {player}</h2>
      <div className='select-fighter-container '>
        {fighters.map((fighter) => (
          <div key={fighter.id}>
            <img src={fighter.image2} alt={fighter.name} className="fighter-image" />
            <br></br>
            <button className="skill-button" onClick={() => onSelect(fighter)}>
              {fighter.name} (Vida: {fighter.maxHP}, Ataque: {fighter.attack}, Defensa: {fighter.defense})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectFighter;
