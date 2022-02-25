import { cureLightWoundsCleric, detectEvilCleric, detectMagicCleric, purifyFoodAndWaterCleric, lightCleric, removeFearCleric, protectionFromEvilCleric, resistColdCleric } from '../cleric-spells/cleric-level-one-spells-class.js';
import { blessCleric, findTrapsCleric, holdPersonCleric, knowAlignmentCleric, resistFireCleric, silence15ftCleric, snakeCharmCleric, speakWithAnimalCleric} from '../cleric-spells/cleric-level-two-spells-class.js';
import { continualLightCleric, cureBlindnessCleric, cureDiseaseCleric, growthOfAnimalsCleric, locateObjectCleric, removeCurseCleric, speakWithTheDeadCleric, strikingCleric } from '../cleric-spells/cleric-level-three-spells.js';


//==============================================end imports===============================================//


export default class ClericLevels {
    constructor (level, specialtySkills, numberOfSpells, turnUndeadTable) { 
        this.level= level;        
        this.specialtySkills = specialtySkills;
        this.numberOfSpells = numberOfSpells;
        this.turnUndeadTable = turnUndeadTable;
    }
};


let acolyte = new ClericLevels (
    {
        name: "Acolyte",
        level: 1,
        maxXP: 1499,
        savingThrows: [       
            { name: "Poison or Death Ray", score: 11},
            { name: "Magic Wand", score: 12},
            { name: "Turn to Stone or Paralysis", score: 14},
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
        "First Level Cleric Spells": [],
        "Second Level Cleric Spells": [],
        "Third Level Cleric Spells": [],
    },
    [8, 8, 8], 
    {
        "Skeleton": 7,
        "Zombie": 9,
        "Ghoul": 11,
        "Wight": 13,
        "Wraith": 13,
        "Mummy": 13,
        "Spectre": 13,
        "Vampire": 13,
    }
    );    

       
let adept = new ClericLevels (
    {
    name: "Adept",
    level: 2,
    maxXP: 2999,
    savingThrows: [       
        { name: "Poison or Death Ray", score: 11},
        { name: "Magic Wand", score: 12},
        { name: "Turn to Stone or Paralysis", score: 14},
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
        "First Level Cleric Spells": [],
        "Second Level Cleric Spells": [],
        "Third Level Cleric Spells": [],
    }, 
    [2, 0, 0], 
    {
        "Skeleton": "T",
        "Zombie": 7,
        "Ghoul": 9,
        "Wight": 11,
        "Wraith": 13,
        "Mummy": 13,
        "Spectre": 13,
        "Vampire": 13,
    }

); 

let priest = new ClericLevels (
    {
    name: "Priest",
    level: 3,
    maxXP: 5999,
    savingThrows: [       
        { name: "Poison or Death Ray", score: 11},
        { name: "Magic Wand", score: 12},
        { name: "Turn to Stone or Paralysis", score: 14},
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
        "First Level Cleric Spells": [],
        "Second Level Cleric Spells": [],
        "Third Level Cleric Spells": [],
    }[2, 1, 0], 
    {
        "Skeleton": "T",
        "Zombie": "T",
        "Ghoul": 7,
        "Wight": 9,
        "Wraith": 11,
        "Mummy": 13,
        "Spectre": 13,
        "Vampire": 13,
    }

); 

export { acolyte, adept, priest };