import { charmPerson, detectMagic, floatingDisc, holdPortal, lightSpell, magicMissile, protectionFromEvil, readLanguages, shieldSpell, sleepSpell, ventriloquism} from './mage-level-one-spells-class.js'
import { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, webSpell, wizardLock } from './mage-level-two-spells-class.js';
import { mageFirstLevelSpells } from './js_v14-3.js';
import { mageSecondLevelSpells } from './js_v14-3.js';
import { mageThirdLevelSpells } from './js_v14-3.js';


export default class MageLevels {
    constructor (level, specialtySkills, numberOfSpells) {
       

        this.level= level;        
        this.specialtySkills = specialtySkills;
        this.numberOfSpells = numberOfSpells;
        
    }
};


let mageMedium = new MageLevels (
    
    {
        name: "Medium",
        level: 1,
        maxEP: 2499,
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
        "First Level Mage Spells": " ",
        "Secod Level Mage Spells": " ",
        "Third Level Mage Spells": " ",
        },
        [1, 0, 0], 
    );    

       
let mageSeer = new MageLevels (
    {
    name: "Seer",
    level: 2,
    maxHP: 4999,
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
    "First Level": " ",
    "Secod Level": " ",
    "Third Level": " ",  
    }, 
[2, 0, 0], 
); 

let mageConjurer = new MageLevels (
    {
    name: "Conjurer",
    level: 3,
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
        "First Level": " ",
        "Secod Level": " ",
        "Third Level": " ",
    }[2, 1, 0], 
); 

export { mageMedium, mageSeer, mageConjurer };