import { FighterList } from "./types";
import warriorImage1 from "./warriorBack.png"
import warriorImage2 from "./warriorFront.png"
import rogueImage1 from "./rogueBack.png"
import rogueImage2 from "./rogueFront.png"
import mageImage1 from "./mageBack.png"
import mageImage2 from "./mageFront.png"


export let defaultFighterList: FighterList = {
  list: [
    {
      id: 1,
      name: "Guerrero",
      maxHP: 300,
      currentHP: 300,
      attack: 55,
      defense: 40,
      moves: [
        { name: "Golpe", power: 50 },
        { name: "Ejecutar", power: 100 }
      ],
      image: warriorImage1,
      image2: warriorImage2
    },
    {
      id: 2,
      name: "Picaro",
      maxHP: 225,
      currentHP: 225,
      attack: 52,
      defense: 43,
      moves: [
        { name: "Puñalada", power: 50 },
        { name: "Emboscada", power: 150 }
      ],
      image: rogueImage1,
      image2: rogueImage2
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
      ],
      image: mageImage1,
      image2: mageImage2
    }
  ]
}