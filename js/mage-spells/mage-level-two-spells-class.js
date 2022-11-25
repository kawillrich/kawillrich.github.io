export let mageLevelTwoSpells = [];

export default class MageLevelTwoSpells
{
    constructor (name, level, range, duration, effect, castingEffect, className, useBattle)
    {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
        this.className = className;
        this.useBattle = useBattle;
    }
};

let continualLight = new MageLevelTwoSpells("Continual Light", 2, 120, 999, "Volume of 60 foot diameter", function () { console.log('Casting'); }, "continual-light", false);
let detectEvil = new MageLevelTwoSpells("Detect Evil", 2, 60, 2, "Everything within 60 feet", function () { console.log('Casting'); }, "detect-evil", false);
let invisibility = new MageLevelTwoSpells("Invisibility", 2, 240, 999, "One creature or object", function () { console.log('Casting'); }, "invisibility", true);
let esp = new MageLevelTwoSpells("ESP", 2, 60, 12, "All thoughts in one direction", function () { console.log('Casting'); }, "esp", false);
let knock = new MageLevelTwoSpells("Knock", 2, 60, 1, "One lock or bar", function () { console.log('Casting'); }, "knock", false);
let levitate = new MageLevelTwoSpells("Levitate", 2, 0, 6, "The mage only", function () { console.log('Casting'); }, "levitate", false);
let locateObject = new MageLevelTwoSpells("Locate Object", 2, 60, 2, "One object within range", function () { console.log('Casting'); }, "locate-object", false);
let mirrorImage = new MageLevelTwoSpells("Mirror Image", 2, 0, 6, "The mage only", function () { console.log('Casting'); }, "mirror-image", true);
let phantasmalForce = new MageLevelTwoSpells("Phantasmal Force", 2, 999, 12, "20 foot volume", function () { console.log('Casting'); }, "phantasmal-force", false);
let web = new MageLevelTwoSpells("Web", 2, 10, 48, "A volume of 10 by 10 by 10", function () { console.log('Casting'); }, "web", true);
let wizardLock = new MageLevelTwoSpells("Wizard Lock", 2, 10, 999, "One portal or lock", function () { console.log('Casting'); }, "wizard-lock", false);
let detectInvisible = new MageLevelTwoSpells("Detect Invisible", 2, 10, 6, "Detect invisibility", function () { console.log('Casting'); }, "detect-invisible", false);

export { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, web, wizardLock, detectInvisible }