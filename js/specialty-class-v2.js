//import fighter
import { fighterWarrior, fighterVeteran, fighterSwordmaster } from './character-class-levels/fighter-level-class.js';

//import mage
import { mageMedium, mageSeer, mageConjurer } from './character-class-levels/mage-level-class.js';

//import thief
import { apprentice, footpad, robber } from './character-class-levels/thief-level-class.js';

//import elf
import { veteranMedium, warriorSeer, swordMasterConjurer } from './character-class-levels/elf-level-class.js';

//import spells
import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall, fireArrows, dragonFang} from './spell-class-v2.js';

//==============================================end imports===============================================//


export default class Specialty {
    constructor(name, healthPoints, spell1, spell2, spell3, maxHealthPoints, characterExperience, characterLanguages, characterLevel) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.spell1 = spell1;
        this.spell2 = spell2;
        this.spell3 = spell3;
        this.maxHealthPoints = maxHealthPoints;
        this.characterExperience = characterExperience || 0;     
        this.chacterLanguages = characterLanguages || ["Common Tongue"];        
        this.characterLevel = characterLevel || 1;
        
    };
};

let noSpecialty = new Specialty('None', 0, noSpell, noSpell, noSpell, 0, 0, ["Common Tongue"]);

let warrior = new Specialty('Warrior', 8, noSpell, noSpell, noSpell, 8, 0, ['Common Tongue'], fighterWarrior);

let highMage = new Specialty('High Mage', 500, minorHealing, fireBall, fireArrows, 500, 0, ["Common Tongue"], mageMedium);

let dragonWarrior = new Specialty('Dragon Warrior', 500, majorHealing, dragonFang, dragonFang, 500, 0, ["Common Tongue"], )

let elf = new Specialty('Elf', 6, noSpell, noSpell, noSpell, 6, 0, ["Common Tongue", "Elvish", "Gnoll", "Hobgoblin", "Orc"]);

let dwarf = new Specialty('Dwarf', 8, noSpell, noSpell, noSpell, 8, 0, ["Common Tongue", "Dwarvish", "Gnome", "Goblin", "Kobold"]);

let halfling = new Specialty('Halfling', 6, noSpell, noSpell, noSpell, 6, 0, ["Common Tongue", "Halfling"]);

let cleric = new Specialty('Cleric', 6, minorHealing, noSpell, noSpell, 6, 0, ["Common Tongue"]);

let thief = new Specialty('Thief', 4, noSpell, noSpell,noSpell, 4, 0, ["Common Tongue"]);

export { noSpecialty, warrior, highMage, dragonWarrior, elf, dwarf, halfling, cleric, thief };




