import { charmPerson, detectMagic, floatingDisc, holdPortal, lightSpell, magicMissile, protectionFromEvil, readLanguages, shieldSpell, sleepSpell, ventriloquism, continualLight, detectEvil, invisibility} from './mage-level-one-spells-class.js'

export default class MageLevels {
    constructor (level, specialtySkills) {
        this.level= level;        
        this.specialtySkills = specialtySkills;
    }
};

let mageFirstLevelSpells = [];
let mageSecondLevelSpells = [];

let mageMedium = new MageLevels (
    {
        name: "Medium",
        level: 1,
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
    [mageFirstLevelSpells] 
    );    

       
let mageSeer = new MageLevels (
    {
    name: "Seer",
    level: 2,
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
[mageFirstLevelSpells]
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
[mageFirstLevelSpells, mageSecondLevelSpells]
);

export { mageMedium, mageSeer, mageConjurer };