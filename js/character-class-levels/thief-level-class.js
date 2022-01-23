export default class ThiefLevels {
    constructor (level, specialtySkills) {
        this.level= level;        
        this.specialtySkills = specialtySkills;
    }
};

let apprentice = new ThiefLevels (
    {
        name: "Apprentice",
        level: 1,
        maxXP: 1199,
        savingThrows: [       
            { name: "Poison or Death Ray", score: 13},
            { name: "Magic Wand", score: 14},
            { name: "Turn to Stone or Paralysis", score: 13},
            { name: "Dragon Breath", score: 16},
            { name: "Spells or Magic Staff", score: 15},
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
        "Open Locks" : 15,
        "Remove Traps": 10,
        "Pick Pockets": 20,
        "Move Silently": 30, 
        "Climb Sheer Surfaces": 87,
        "Hide in Shadows": 10,
        "Hear Noise": 17,
    } 
);    

       
let footpad = new ThiefLevels (
    {
    name: "Footpad",
    level: 2,
    maxXP: 2399,

    savingThrows: [       
        { name: "Poison or Death Ray", score: 13},
        { name: "Magic Wand", score: 14},
        { name: "Turn to Stone or Paralysis", score: 13},
        { name: "Dragon Breath", score: 16},
        { name: "Spells or Magic Staff", score: 15},  
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
        "Open Locks" : 15,
        "Remove Traps": 10,
        "Pick Pockets": 20,
        "Move Silently": 30, 
        "Climb Sheer Surfaces": 87,
        "Hide in Shadows": 10,
        "Hear Noise": 17,
    } 
);

let robber = new ThiefLevels (
    {
    name: "Robber",
    level: 3,
    maxXP: 4799,

    savingThrows: [       
        { name: "Poison or Death Ray", score: 13},
        { name: "Magic Wand", score: 14},
        { name: "Turn to Stone or Paralysis", score: 13},
        { name: "Dragon Breath", score: 16},
        { name: "Spells or Magic Staff", score: 15},
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
        "Open Locks" : 15,
        "Remove Traps": 10,
        "Pick Pockets": 20,
        "Move Silently": 30, 
        "Climb Sheer Surfaces": 87,
        "Hide in Shadows": 10,
        "Hear Noise": 17,
    } 
);

export { apprentice, footpad, robber };