import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall, fireArrows, dragonFang} from './spell-class-v2.js';
export default class Specialty {
    constructor(name, healthPoints, spell1, spell2, spell3, maxHealthPoints) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.spell1 = spell1;
        this.spell2 = spell2;
        this.spell3 = spell3;
        this.maxHealthPoints = maxHealthPoints;
    };
};

let noSpecialty = new Specialty('None', 0, noSpell, noSpell, noSpell, 0);
let warrior = new Specialty('Warrior', 140, noSpell, noSpell, noSpell, 140);
let masterArcher = new Specialty('Master Archer', 125, minorHealing, noSpell, noSpell, 125);
let highMage = new Specialty('High Mage', 115, minorHealing, fireBall, fireArrows, 115);
let dragonWarrior = new Specialty('Dragon Warrior', 500, majorHealing, dragonFang, fireArrows, 500)

export { noSpecialty, warrior, masterArcher, highMage, dragonWarrior };



