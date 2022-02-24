
export default class MageLevelThreeSpells {
    constructor (name, level, range, duration, effect) {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
    }
};

let clairvoyance = new MageLevelThreeSpells ("Clairvoyance", 3, 60, 12, "See through another's eyes");
let dispelMagic = new MageLevelThreeSpells ("Dispel Magic", 3, 120, 999, "Destroys spells in a 20' cube");
let fireBall = new MageLevelThreeSpells ("Fire Ball", 2, 240, 0, "Explosion in a sphere 40' diameter");
let fly = new MageLevelThreeSpells ("Fly", 3, 0, 6, "One creature may fly");
let haste = new MageLevelThreeSpells ("Haste", 3, 240, 3, "Up to 24 creatures move double speed");
let holdPerson = new MageLevelThreeSpells ("Hold Person", 3, 120, 1, "Parlyzes up to 4 creatures");
let infravision = new MageLevelThreeSpells ("Infravision", 3, 0, 24, "One living creature");
let invisibilityTenFoot = new MageLevelThreeSpells ("Invisibility 10' radius", 3, 120, 999, "All creatures within 10'");
let lightningBolt = new MageLevelThreeSpells ("Lightning Bolt", 3, 180, 0, "Bolt 60 feet long, 5 feet wide");
let protectionFromEvilTenFoot = new MageLevelThreeSpells ("Protection From Evil 10' radius", 3, 0, 12, "Barrier 20 feet in diameter");
let protectionFromNormalMissiles = new MageLevelThreeSpells ("Portection From Missiles", 3, 30, 12, "One creature");
let waterBreathing = new MageLevelThreeSpells ("Water Breathing", 3, 30, 24, "One air-breathing creature");

export { clairvoyance, dispelMagic, fireBall, fly, haste, holdPerson, infravision, invisibilityTenFoot, lightningBolt, protectionFromEvilTenFoot, protectionFromNormalMissiles, waterBreathing }