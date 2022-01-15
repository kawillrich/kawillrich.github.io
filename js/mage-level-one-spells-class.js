export let mageLevelOneSpells = [];

export default class MageLevelOneSpells {
    constructor (name, range, duration, effect) {
        this.name = name;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
    }
};

let charmPerson = new MageLevelOneSpells ("Charm Person", 120, "Varies", "Charms one person");
let detectMagic = new MageLevelOneSpells ("Detec Magic", 0, 2, "Detects magic within 60 feet");
let floatingDisc = new MageLevelOneSpells ("Floating Disc", 0, 6, "Creates an invisible disc that can carry 5000 cn");
let holdPortal = new MageLevelOneSpells ("Hold Portal", 10, [2,12], "On door, gate, or similar portal");
let lightSpell = new MageLevelOneSpells ("Light", 120, 6, "Volume of 30 feet diameter");
let magicMissile = new MageLevelOneSpells ("Magic Missile", 150, 0.1, "Creates one or more arrows");
let protectionFromEvil = new MageLevelOneSpells ("Protection from Evil", 0, 6, "The mage only");
let readLanguages = new MageLevelOneSpells ("Read Languages", 0, 2, "The mage only");
let shieldSpell = new MageLevelOneSpells ("Shield", 0, 2, "The mage only");
let sleepSpell = new MageLevelOneSpells ("Sleep", 240, [4, 16], "2-16 Hit Dice of leaving creatures within a 40 foot square area");
let ventriloquism = new MageLevelOneSpells ("Ventriloquism", 60, 2, "One item or location");


export { charmPerson, detectMagic, floatingDisc, holdPortal, lightSpell, magicMissile, protectionFromEvil, readLanguages, shieldSpell, sleepSpell, ventriloquism };