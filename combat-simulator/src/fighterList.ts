import { FighterList } from "./types";

export let defaultFighterList: FighterList = {
  list: [
    {
      id: 1,
      name: "Guerrero",
      maxHP: 300,
      currentHP: 300,
      attack: 55,
      defense: 40,
      moves: [{ name: "Golpe", power: 50 }, { name: "Ejecutar", power: 100 }]
    },
    {
      id: 2,
      name: "Picaro",
      maxHP: 225,
      currentHP: 225,
      attack: 52,
      defense: 43,
      moves: [{ name: "Puñalada", power: 50 }, { name: "Emboscada", power: 150 }]
    },
    {
      id: 3,
      name: "Mago",
      maxHP: 165,
      currentHP: 165,
      attack: 65,
      defense: 30,
      moves: [
        { name: "Bola de Fuego", power: 90 },
        { name: "Rayo", power: 110 }
      ]
    }
  ]
}