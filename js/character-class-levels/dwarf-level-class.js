
//==============================================end imports===============================================//


export default class DwarfLevels {
    constructor (level, specialtySkills) {
        this.level= level;        
        this.specialtySkills = specialtySkills;
    }
};

let dwarvenVeteran = new DwarfLevels (    
    {
        name: "Dwarven Veteran",
        level: 1,
        maxXP: 2199,
        savingThrows: {       
            "Poison or Death Ray": 8,
            "Magic Wand": 9,
            "Turn to Stone or Paralysis": 10,
            "Dragon Breath": 13,
            "Spells or Magic Staff": 12
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
    {        
        "Vision": {
            "Infravision": "See 60 feet in the dark",
            "Night Vision": "See 60 feet in the dark",       
        },
        "Detection": "Find secret and hidden doors at 33%",
    },
);    

       
let dwarvenWarrior = new DwarfLevels (
    {
    name: "Dwarven Warrior",
    level: 2,
    maxXP: 4399,
    savingThrows: {       
        "Poison or Death Ray": 8,
        "Magic Wand": 9,
        "Turn to Stone or Paralysis": 10,
        "Dragon Breath": 13,
        "Spells or Magic Staff": 12
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
    {        
        "Vision": {
            "Infravision": "See 60 feet in the dark",
            "Night Vision": "See 60 feet in the dark",       
        },
        "Detection": "Find secret and hidden doors at 33%",
    },
); 

let dwarvenSwordmaster = new DwarfLevels (
    {
    name: "Dwarven Swordmaster",
    level: 3,
    maxXP: 8799,
    savingThrows: {       
        "Poison or Death Ray": 8,
        "Magic Wand": 9,
        "Turn to Stone or Paralysis": 10,
        "Dragon Breath": 13,
        "Spells or Magic Staff": 12
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
{        
    "Vision": {
        "Infravision": "See 60 feet in the dark",
        "Night Vision": "See 60 feet in the dark",       
    },
    "Detection": "Find secret and hidden doors at 33%",
},
); 

export { dwarvenVeteran, dwarvenWarrior, dwarvenSwordmaster };