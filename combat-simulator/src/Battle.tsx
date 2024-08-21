import React, { useState } from 'react';
import { Fighter, BattleState } from './types';
import SelectFighter from './selectFighter';
import { defaultFighterList } from './fighterList';

const Battle: React.FC = () => {
  const [fighters, setFighters] = useState<Fighter[]>(defaultFighterList.list);
  const [battleState, setBattleState] = useState<BattleState>({
    player1: null,
    player2: null,
    currentTurn: 1,
  });

  const handleSelectFighter = (fighter: Fighter, player: number) => {
    setBattleState((prevState) => ({
      ...prevState,
      [player === 1 ? 'player1' : 'player2']: fighter,
    }));

    setFighters((prevFighters) =>
      prevFighters.filter((f) => f.id !== fighter.id)
    );
  };

  const handleAttack = (attacker: Fighter, defender: Fighter, selectedSkillPower: number) => {
    const damage = Math.max(0, attacker.attack + selectedSkillPower - defender.defense);
    defender.hp = Math.max(0, defender.hp - damage);

    if (defender.hp > 0) {
      const damageReceived = Math.max(0, defender.attack + defender.moves[0].power - attacker.defense);
      attacker.hp = Math.max(0, attacker.hp - damageReceived);
    }

    setBattleState((prevState) => ({
      ...prevState,
      currentTurn: prevState.currentTurn + 1,
      winner: defender.hp <= 0 ? attacker : undefined,
    }));
  };

  return (
    <div>
      {!battleState.player1 && (
        <SelectFighter
          fighters={fighters}
          onSelect={(fighter) => handleSelectFighter(fighter, 1)}
          player={1}
        />
      )}
      {!battleState.player2 && battleState.player1 && (
        <SelectFighter
          fighters={fighters}
          onSelect={(fighter) => handleSelectFighter(fighter, 2)}
          player={2}
        />
      )}
      {battleState.player1 && battleState.player2 && (
        <>
          <h2>
            {battleState.player1.name} VS {battleState.player2.name} - Turno: {battleState.currentTurn}
          </h2>
          <p>{battleState.player1.name} HP: {battleState.player1.hp}</p>
          <p>{battleState.player2.name} HP: {battleState.player2.hp}</p>
          {battleState.winner ? (
            <h2>{battleState.winner.name} wins!</h2>
          ) : (
            <>
              <button onClick={() => handleAttack(battleState.player1!, battleState.player2!, battleState.player1!.moves[0].power)}>
                {battleState.player1!.moves[0].name}  {battleState.player1!.moves[0].power} 
              </button>
              <button onClick={() => handleAttack(battleState.player1!, battleState.player2!, battleState.player1!.moves[1].power)}>
                {battleState.player1!.moves[1].name}  {battleState.player1!.moves[1].power}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Battle;
