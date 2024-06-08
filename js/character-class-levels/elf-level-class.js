import { charmPerson, detectMagic, floatingDisc, holdPortal, light, magicMissile, protectionFromEvil, readLanguages, shield, sleep, ventriloquism, readMagic } from '../mage-spells/mage-level-one-spells-class.js'
import { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, web, wizardLock, detectInvisible  } from '../mage-spells/mage-level-two-spells-class.js';
import { clairvoyance, dispelMagic, fireBall, fly, haste, holdPerson, infravision, invisibilityTenFoot, lightningBolt, protectionFromEvilTenFoot, protectionFromNormalMissiles, waterBreathing } from '../mage-spells/mage-level-three-spells-class.js'

//==============================================end imports===============================================//


export default class ElfLevels {
    constructor (level, specialtySkills, numberOfSpells) {
        this.level= level;        
        this.specialtySkills = specialtySkills;
        this.numberOfSpells = numberOfSpells;        
    }
};

let veteranMedium = new ElfLevels (    
    {
        name: "Veteran Medium",
        level: 1,
        maxXP: 3999,
        savingThrows: {       
            "Poison or Death Ray": 12,
            "Magic Wand": 13,
            "Turn to Stone or Paralysis": 13,
            "Dragon Breath": 15,
            "Spells or Magic Staff": 15
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
        "First Level Mage Spells": " ",
        "Second Level Mage Spells": " ",
        "Third Level Mage Spells": " ",
        "Vision": {
            "Infravision": "See 60 feet in the dark",
            "Night Vision": "See 60 feet in the dark",       
        },
        "Immunity to Ghoul Paralysis": "Immune to paralysis from Ghouls",
        "Detection": "Find secret and hidden doors at 33%",
    },
    [1, 0, 0], 
);    

       
let warriorSeer = new ElfLevels (
    {
    name: "Warrior Seer",
    level: 2,
    maxXP: 7999,
    savingThrows: {       
        "Poison or Death Ray": 12,
        "Magic Wand": 13,
        "Turn to Stone or Paralysis": 13,
        "Dragon Breath": 15,
        "Spells or Magic Staff": 15
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
    "First Level Mage Spells": " ",
    "Second Level Mage Spells": " ",
    "Third Level Mage Spells": " ",  
    "Vision": {
        "Infravision": "See 60 feet in the dark",
        "Night Vision": "See 60 feet in the dark",       
    },
    "Immunity to Ghoul Paralysis": "Immune to paralysis from Ghouls",
    "Detection": "Find secret and hidden doors at 33%",
    },
    [2, 0, 0], 
); 

let swordMasterConjurer = new ElfLevels (
    {
    name: "Swordmaster Conjurer",
    level: 3,
    maxXP: 15999,
    savingThrows: {       
        "Poison or Death Ray": 12,
        "Magic Wand": 13,
        "Turn to Stone or Paralysis": 13,
        "Dragon Breath": 15,
        "Spells or Magic Staff": 15
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
    "First Level Mage Spells": " ",
    "Second Level Mage Spells": " ",
    "Third Level Mage Spells": " ",
    "Vision": {
        "Infravision": "See 60 feet in the dark",
        "Night Vision": "See 60 feet in the dark",       
    },
    "Immunity to Ghoul Paralysis": "Immune to paralysis from Ghouls",
    "Detection": "Find secret and hidden doors at 33%",
    },
    [2, 1, 0], 
); 

export { veteranMedium, warriorSeer, swordMasterConjurer };