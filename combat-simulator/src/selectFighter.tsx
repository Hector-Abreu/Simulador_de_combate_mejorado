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
      <h2>Select Fighter for Player {player}</h2>
      {fighters.map((fighter) => (
        <p key={fighter.id}>
          <button onClick={() => onSelect(fighter)}>
            {fighter.name} (HP: {fighter.hp}, Attack: {fighter.attack}, Defense: {fighter.defense})
          </button>
        </p>
      ))}
    </div>
  );
};

export default SelectFighter;
