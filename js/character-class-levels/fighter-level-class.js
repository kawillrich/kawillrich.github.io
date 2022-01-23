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
    }, 
    ['None'] 
    );    

       
let fighterWarrior = new FighterLevels (
    {
    name: "warrior",
    level: 2,
    maxXP: 3999,

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
}, 
['None']
);

let fighterSwordmaster = new FighterLevels (
    {
    name: "Swordmaster",
    level: 3,
    maxXP: 7999,

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
}, 
['None']
);

export { fighterVeteran, fighterWarrior, fighterSwordmaster };