import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall, fireArrows, dragonFang} from './spell-class-v2.js';
export default class Specialty {
    constructor(name, healthPoints, spell1, spell2, spell3, maxHealthPoints, characterExperience, characterLanguages, characterLevel, characterSavingThrows, characterHitRoll, characterSpecialSkills) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.spell1 = spell1;
        this.spell2 = spell2;
        this.spell3 = spell3;
        this.maxHealthPoints = maxHealthPoints;
        this.chacterLanguages = characterLanguages;
        this.characterLevel = characterLevel || 1;
        this.characterExperience = characterExperience || 0;
        this.characterSavingThrows = characterSavingThrows;
        this.characterHitRoll = characterHitRoll;
        this.characterSpecialSkills = characterSpecialSkills;
        
    };
};

let noSpecialty = new Specialty(
    'None', 
    0, 
    noSpell, 
    noSpell, 
    noSpell, 
    0, 
    ["Common Tongue"], 
    0, 
    0, 
    [{name: "Poison or Death Ray", score: 14,},{name: "Magic Wand", score: 15,},{name: "Turn to Stone or Paralysis",score: 16,},{name: "Dragon Breath",score: 17,},{name: "Spells or Magic Staff",score: 17,}], [], [ {name: 'None'}]
    );

let warrior = new Specialty('Warrior', 140, noSpell, noSpell, noSpell, 140, [], 0, [], [], []);

let masterArcher = new Specialty('Master Archer', 125, minorHealing, noSpell, noSpell, 125, [], 0, 0, [], [], []);

let highMage = new Specialty('High Mage', 115, minorHealing, fireBall, fireArrows, 115, [], 0, 0, [], [], []);

let dragonWarrior = new Specialty('Dragon Warrior', 500, majorHealing, dragonFang, dragonFang, 500, [], 0, 0, [], [], [])



export { noSpecialty, warrior, masterArcher, highMage, dragonWarrior };




