export default class FighterLevels {
    constructor (level, specialtySkills) {
        this.level= level;        
        this.specialtySkills = specialtySkills;

    }
};

let fighterLevel1 = new FighterLevels ( fighterLevel1 );    







let fighterLevel1 = {
    name: "Veteran",
    level: 1,
    savingThrows: [       
        { name: "Poison or Death Ray", score: 12},
        { name: "Magic Wand", score: 13},
        { name: "Turn to Stone or Paralysis", score: 14},
        { name: "Dragon Breath", score: 15},
        { name: "Spells or Magic Staff", score: 16},
    ],

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
};
        