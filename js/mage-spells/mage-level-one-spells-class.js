
export let mageLevelOneSpells = [];

export default class MageLevelOneSpells
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

let charmPerson = new MageLevelOneSpells("Charm Person", 1, 120, 0, "Charms one person", function casting() { console.log('casting') }, "charm-person", true);
let detectMagic = new MageLevelOneSpells("Detect Magic", 1, 0, 2, "Detects magic within 60 feet", function () { console.log('casting') }, "detect-magic", false);
let floatingDisc = new MageLevelOneSpells("Floating Disc", 1, 0, 6, "Creates an invisible disc that can carry 5000 cn", function () { console.log('casting') }, "floating-disc", false);
let holdPortal = new MageLevelOneSpells("Hold Portal", 1, 10, [2, 12], "On door, gate, or similar portal", function () { console.log('casting') }, "hold-portal", false);
let light = new MageLevelOneSpells("Light", 1, 120, 6, "Volume of 30 feet diameter", function () { console.log('casting') }, "light", false);
let magicMissile = new MageLevelOneSpells("Magic Missile", 1, 150, 0.1, "Creates one or more arrows",
    function ()
    {
        console.log('Casting Magic Missile');
        //finalCharacter.spell2AttackMonster1();
    }, "magic-missile", true

);
let protectionFromEvil = new MageLevelOneSpells("Protection from Evil", 1, 0, 6, "The mage only", function () { console.log('casting') }, "protection-from-evil", true);
let readLanguages = new MageLevelOneSpells("Read Languages", 1, 0, 2, "The mage only", function () { console.log('casting') }, "read-languages", false);
let shield = new MageLevelOneSpells("Shield", 1, 0, 2, "The mage only", function () { console.log('casting') }, "shield", true);
let sleep = new MageLevelOneSpells("Sleep", 1, 240, [4, 16], "2-16 Hit Dice of leaving creatures within a 40 foot square area", function () { console.log('casting') }, "sleep", true);
let ventriloquism = new MageLevelOneSpells("Ventriloquism", 1, 60, 2, "One item or location", function () { console.log('casting') }, "ventriloquism", true);
let readMagic = new MageLevelOneSpells("Read Magic", 1, 0, 0, "The mage only", function () { console.log('casting') }, "read-magic", false);

export { charmPerson, detectMagic, floatingDisc, holdPortal, light, magicMissile, protectionFromEvil, readLanguages, shield, sleep, ventriloquism, readMagic };