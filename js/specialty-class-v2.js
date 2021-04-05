import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall} from './spell-class-v2.js';
export default class Specialty {
    constructor(name, healthPoints, spell1, spell2) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.spell1 = spell1;
        this.spell2 = spell2;
     

    };
};

let noSpecialty = new Specialty('None', 0, noSpell, noSpell);
let warrior = new Specialty('Warrior', 140, noSpell, noSpell);
let masterArcher = new Specialty('Master Archer', 125, minorHealing, noSpell);
let highMage = new Specialty('High Mage', 115, minorHealing, fireBall);

export { noSpecialty, warrior, masterArcher, highMage };



