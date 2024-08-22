import React, { useState } from 'react';
import { Fighter, BattleState } from './types';
import SelectFighter from './selectFighter';
import { defaultFighterList } from './fighterList';
import HealthBar from './HealthBar';

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
      [player === 1 ? 'player1' : 'player2']: {
        ...fighter,
        currentHP: fighter.maxHP, 
      },
    }));

    setFighters((prevFighters) =>
      prevFighters.filter((f) => f.id !== fighter.id)
    );
  };

  const handleAttack = (attacker: Fighter, defender: Fighter, selectedSkillPower: number) => {
    const damage = Math.max(0, attacker.attack + selectedSkillPower - defender.defense);
    defender.currentHP = Math.max(0, defender.currentHP - damage);

    if (defender.currentHP > 0) {
      const damageReceived = Math.max(0, defender.attack + defender.moves[0].power - attacker.defense);
      attacker.currentHP = Math.max(0, attacker.currentHP - damageReceived);
    }

    setBattleState((prevState) => ({
      ...prevState,
      currentTurn: prevState.currentTurn + 1,
      winner: defender.currentHP <= 0 ? attacker : undefined,
    }));
  };

  const handleReset = () => {
    setBattleState({
      player1: null,
      player2: null,
      currentTurn: 1,
      winner: undefined,
    });
    setFighters(defaultFighterList.list);
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
          <div style={{ textAlign: 'left', top: '30px', marginLeft: '50px' }}>
            {battleState.winner ? (
              <>
                <h2>¡{battleState.winner.name} ha ganado!</h2>
                <button className="skill-button" onClick={handleReset}>Reiniciar Combate</button>
              </>
            ) : (
              <h2>Turno: {battleState.currentTurn}</h2>
            )}
          </div>
          <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <p><b>{battleState.player2.name}</b></p>
            <HealthBar currentHP={battleState.player2.currentHP} maxHP={battleState.player2.maxHP} />
            <img src={battleState.player2.image2} alt={battleState.player2.name} className="fighter-image" />
          </div>
          <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
            <p><b>{battleState.player1.name}</b></p>
            <HealthBar currentHP={battleState.player1.currentHP} maxHP={battleState.player1.maxHP} />
            <img src={battleState.player1.image} alt={battleState.player1.name} className="fighter-image" />
            {battleState.winner ? (
              <h2>Fin del combate</h2>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                <button className="skill-button" onClick={() => handleAttack(battleState.player1!, battleState.player2!, battleState.player1!.moves[0].power)}>
                  {battleState.player1!.moves[0].name}
                </button>
                <button className="skill-button" onClick={() => handleAttack(battleState.player1!, battleState.player2!, battleState.player1!.moves[1].power)}>
                  {battleState.player1!.moves[1].name}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Battle;
