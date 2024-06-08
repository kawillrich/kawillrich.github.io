export default class NormalMan {
    constructor (level, specialtySkills) {
        this.level= level;        
        this.specialtySkills = specialtySkills;
    }
};

let normalMan = new NormalMan (
    {
        name: "Normal Man",
        level: 1,
        maxXP: 1999,
        savingThrows: {       
            "Poison or Death Ray": 14,
            "Magic Wand": 15,
            "Turn to Stone or Paralysis": 16,
            "Dragon Breath": 17,
            "Spells or Magic Staff": 17
        },

        hitRolls: [
            [9, 10],
            [8, 11],
            [7, 12],
            [6, 13],
            [5, 14],
            [4, 15],
            [3, 16],
            [2, 17],
            [1, 18],
            [0, 19]    
        ]
    }, 
    ['None'] 
    );    

export { normalMan };