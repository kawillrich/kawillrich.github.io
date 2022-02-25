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

let continualLight = new MageLevelTwoSpells ("Continual Light", 2, 120, 999, "Volume of 60 foot diameter", function() {console.log('Casting');}, "continual-light");
let detectEvil = new MageLevelTwoSpells ("Detect Evil", 2, 60, 2, "Everything within 60 feet", function() {console.log('Casting');}, "detect-evil");
let invisibility = new MageLevelTwoSpells ("Invisibility", 2, 240, 999, "One creature or object", function() {console.log('Casting');}, "invisibility");
let esp = new MageLevelTwoSpells ("ESP", 2, 60, 12, "All thoughts in one direction", function() {console.log('Casting');}, "esp");
let knock = new MageLevelTwoSpells ("Knock", 2, 60, 1, "One lock or bar", function() {console.log('Casting');}, "knock");
let levitate = new MageLevelTwoSpells ("Levitate", 2, 0, 6, "The mage only", function() {console.log('Casting');}, "levitate");
let locateObject = new MageLevelTwoSpells ("Locate Object", 2, 60, 2, "One object within range", function() {console.log('Casting');}, "locate-object");
let mirrorImage = new MageLevelTwoSpells ("Mirror Image", 2, 0, 6, "The mage only", function() {console.log('Casting');}, "mirror-image");
let phantasmalForce = new MageLevelTwoSpells ("Phantasmal Force", 2, 999, 12, "20 foot volume", function() {console.log('Casting');}, "phantasmal-force");
let web = new MageLevelTwoSpells ("Web", 2, 10, 48, "A volume of 10 by 10 by 10", function() {console.log('Casting');}, "web");
let wizardLock = new MageLevelTwoSpells ("Wizard Lock", 2, 10, 999, "One portal or lock", function() {console.log('Casting');}, "wizard-lock");
let detectInvisible = new MageLevelTwoSpells ("Detect Invisible", 2, 10, 6, "Detect invisibility", function() {console.log('Casting');}, "detect-invisible");

export { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, web, wizardLock, detectInvisible }