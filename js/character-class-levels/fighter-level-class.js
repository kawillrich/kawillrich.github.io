export default class FighterLevels {
    constructor (level, specialtySkills) {
        this.level= level;        
        this.specialtySkills = specialtySkills;
    }
};

let fighterVeteran = new FighterLevels (
    {
        name: "Veteran",
        level: 1,
        maxXP: 1999,
        savingThrows: {       
            "Poison or Death Ray": 12,
            "Magic Wand": 13,
            "Turn to Stone or Paralysis": 14,
            "Dragon Breath": 15,
            "Spells or Magic Staff": 16
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

       
let fighterWarrior = new FighterLevels (
    {
    name: "warrior",
    level: 2,
    maxXP: 3999,

    savingThrows: {       
        "Poison or Death Ray": 12,
        "Magic Wand": 13,
        "Turn to Stone or Paralysis": 14,
        "Dragon Breath": 15,
        "Spells or Magic Staff": 16
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

let fighterSwordmaster = new FighterLevels (
    {
    name: "Swordmaster",
    level: 3,
    maxXP: 7999,

    savingThrows: {       
        "Poison or Death Ray": 12,
        "Magic Wand": 13,
        "Turn to Stone or Paralysis": 14,
        "Dragon Breath": 15,
        "Spells or Magic Staff": 16
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

export { fighterVeteran, fighterWarrior, fighterSwordmaster };