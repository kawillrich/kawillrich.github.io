
export let mageLevelOneSpells = [];

export default class MageLevelOneSpells {
    constructor (name, level, range, duration, effect, castingEffect) {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
    }
};

let charmPerson = new MageLevelOneSpells ("Charm Person", 1, 120, "Varies", "Charms one person", 
// function() {
//     console.log('casting')
// }
);
let detectMagic = new MageLevelOneSpells ("Detec Magic", 1, 0, 2, "Detects magic within 60 feet");
let floatingDisc = new MageLevelOneSpells ("Floating Disc", 1, 0, 6, "Creates an invisible disc that can carry 5000 cn");
let holdPortal = new MageLevelOneSpells ("Hold Portal", 1, 10, [2,12], "On door, gate, or similar portal");
let light = new MageLevelOneSpells ("Light", 1, 120, 6, "Volume of 30 feet diameter");
let magicMissile = new MageLevelOneSpells ("Magic Missile", 1, 150, 0.1, "Creates one or more arrows",
function() {
    console.log('Casting');
    //finalCharacter.spell2AttackMonster1();
}

);
let protectionFromEvil = new MageLevelOneSpells ("Protection from Evil", 1, 0, 6, "The mage only");
let readLanguages = new MageLevelOneSpells ("Read Languages", 1, 0, 2, "The mage only");
let shield = new MageLevelOneSpells ("Shield", 1, 0, 2, "The mage only");
let sleep = new MageLevelOneSpells ("Sleep", 1, 240, [4, 16], "2-16 Hit Dice of leaving creatures within a 40 foot square area");
let ventriloquism = new MageLevelOneSpells ("Ventriloquism", 1, 60, 2, "One item or location");
let readMagic = new MageLevelOneSpells ("Read Magic", 1, 0, 0, "The mage only");

export { charmPerson, detectMagic, floatingDisc, holdPortal, light, magicMissile, protectionFromEvil, readLanguages, shield, sleep, ventriloquism, readMagic };