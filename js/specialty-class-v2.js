import { fighterWarrior, fighterVeteran, fighterSwordmaster } from './fighter-level-class.js';
import { mageMedium, mageSeer, mageConjurer } from './mage-level-class.js';
import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall, fireArrows, dragonFang} from './spell-class-v2.js';
export default class Specialty {
    constructor(name, healthPoints, spell1, spell2, spell3, maxHealthPoints, characterExperience, characterLanguages, characterLevel) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.spell1 = spell1;
        this.spell2 = spell2;
        this.spell3 = spell3;
        this.maxHealthPoints = maxHealthPoints;
        this.characterExperience = characterExperience || 0;     
        this.chacterLanguages = characterLanguages;        
        this.characterLevel = characterLevel;
        
    };
};

let noSpecialty = new Specialty('None', 0, noSpell, noSpell, noSpell, 0, 0, ["Common Tongue"]);

let warrior = new Specialty('Warrior', 8, noSpell, noSpell, noSpell, 140, 0, ['Common Tongue'], fighterWarrior);

let masterArcher = new Specialty('Master Archer', 6, minorHealing, noSpell, noSpell, 125, 0, ["Common Tongue"], );

let highMage = new Specialty('High Mage', 4, minorHealing, fireBall, fireArrows, 115, 0, ["Common Tongue"], mageMedium);

let dragonWarrior = new Specialty('Dragon Warrior', 500, majorHealing, dragonFang, dragonFang, 500, 0, ["Common Tongue"], )

let elf = new Specialty('Elf', 6, noSpell, noSpell, noSpell, 6, 0, ["Common Tongue", "Elvish"]);

let dwarf = new Specialty('Dwarf', 8, noSpell, noSpell, noSpell, 8, 0, ["Common Tongue", "Dwarvish"]);

let halfling = new Specialty('Halfling', 6, noSpell, noSpell, noSpell, 6, 0, ["Common Tongue", "Halfling"]);

let cleric = new Specialty('Cleric', 6, minorHealing, noSpell, noSpell, 6, 0, ["Common Tongue"]);

let thief = new Specialty('Thief', 4, noSpell, noSpell,noSpell, 4, 0, ["Common Tongue"]);

export { noSpecialty, warrior, masterArcher, highMage, dragonWarrior, elf, dwarf, halfling, cleric, thief };




