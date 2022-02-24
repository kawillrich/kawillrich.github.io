export let mageLevelTwoSpells = [];

export default class MageLevelTwoSpells {
    constructor (name, level, range, duration, effect) {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
    }
};

let continualLight = new MageLevelTwoSpells ("Continual Light", 2, 120, 999, "Volume of 60 foot diameter");
let detectEvil = new MageLevelTwoSpells ("Detect Evil", 2, 60, 2, "Everything within 60 feet");
let invisibility = new MageLevelTwoSpells ("Invisibility", 2, 240, 999, "One creature or object");
let esp = new MageLevelTwoSpells ("ESP", 2, 60, 12, "All thoughts in one direction");
let knock = new MageLevelTwoSpells ("Knock", 2, 60, 1, "One lock or bar");
let levitate = new MageLevelTwoSpells ("Levitate", 2, 0, 6, "The mage only");
let locateObject = new MageLevelTwoSpells ("Locate Object", 2, 60, 2, "One object within range");
let mirrorImage = new MageLevelTwoSpells ("Mirror Image", 2, 0, 6, "The mage only");
let phantasmalForce = new MageLevelTwoSpells ("Phantasmal Force", 2, 999, "20 foot volume");
let web = new MageLevelTwoSpells ("Web", 2, 10, 48, "A volume of 10 by 10 by 10");
let wizardLock = new MageLevelTwoSpells ("Wizard Lock", 2, 10, 999, "One portal or lock");
let detectInvisible = new MageLevelTwoSpells ("Detect Invisible", 2, 10, 6, "Detect invisibility");

export { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, web, wizardLock, detectInvisible }