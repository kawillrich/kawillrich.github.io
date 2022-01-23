
//==============================================end imports===============================================//


export default class HalflingLevels {
    constructor (level, specialtySkills) {
        this.level= level;        
        this.specialtySkills = specialtySkills;
    }
};

let halflingVeteran = new HalflingLevels (    
    {
        name: "Halfling Veteran",
        level: 1,
        maxXP: 1999,
        savingThrows: [       
            { name: "Poison or Death Ray", score: 8},
            { name: "Magic Wand", score: 9},
            { name: "Turn to Stone or Paralysis", score: 10},
            { name: "Dragon Breath", score: 13},
            { name: "Spells or Magic Staff", score: 12},
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
    {        
        "Combat": {
            "AC Bonus": "-2 bonus to AC when attacked by creatures larger than man-sized",
            "Hit Roll Bonus": "+1 bonus to Hit Roll when using missile weapons",    
            "Initiative Bonus": "+1 bonus to individual initiative"   
        },
        "Hiding": "Can only be detected 10 percent of the time in woods and underbrush.  33 percent (1 to 2 on d6) chance to hide in dark dungeons/shadows",
    },
);    

       
let halflingWarrior = new HalflingLevels (
    {
    name: "Halfling Warrior",
    level: 2,
    maxXP: 3999,
    savingThrows: [       
        { name: "Poison or Death Ray", score: 8},
        { name: "Magic Wand", score: 9},
        { name: "Turn to Stone or Paralysis", score: 10},
        { name: "Dragon Breath", score: 13},
        { name: "Spells or Magic Staff", score: 12},
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
{        
    "Combat": {
        "AC Bonus": "-2 bonus to AC when attacked by creatures larger than man-sized",
        "Hit Roll Bonus": "+1 bonus to Hit Roll when using missile weapons",    
        "Initiative Bonus": "+1 bonus to individual initiative"   
    },
    "Hiding": "Can only be detected 10 percent of the time in woods and underbrush.  33 percent (1 to 2 on d6) chance to hide in dark dungeons/shadows",
},
); 

let halflingSwordmaster = new HalflingLevels (
    {
    name: "Halfling Swordmaster",
    level: 3,
    maxXP: 3999,
    savingThrows: [       
        { name: "Poison or Death Ray", score: 8},
        { name: "Magic Wand", score: 9},
        { name: "Turn to Stone or Paralysis", score: 10},
        { name: "Dragon Breath", score: 13},
        { name: "Spells or Magic Staff", score: 12},
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
{        
    "Combat": {
        "AC Bonus": "-2 bonus to AC when attacked by creatures larger than man-sized",
        "Hit Roll Bonus": "+1 bonus to Hit Roll when using missile weapons",    
        "Initiative Bonus": "+1 bonus to individual initiative"   
    },
    "Hiding": "Can only be detected 10 percent of the time in woods and underbrush.  33 percent (1 to 2 on d6) chance to hide in dark dungeons/shadows",
},
); 

export { halflingVeteran, halflingWarrior, halflingSwordmaster };