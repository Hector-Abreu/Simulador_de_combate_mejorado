export interface Fighter {
  id: number;
  name: string;
  maxHP: number;
  currentHP: number;
  attack: number;
  defense: number;
  moves: Move[];
  image: string;
  image2: string;
}

export interface FighterList {
  list: Fighter[]
}

export interface Move {
  name: string;
  power: number;
}

export interface BattleState {
  player1: Fighter | null;
  player2: Fighter | null;
  currentTurn: number;
  winner?: Fighter;
}
