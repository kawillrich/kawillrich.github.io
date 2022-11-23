
export default class MageLevelThreeSpells
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

let clairvoyance = new MageLevelThreeSpells("Clairvoyance", 3, 60, 12, "See through another's eyes", function () { console.log('Casting'); }, "clairvoyance");
let dispelMagic = new MageLevelThreeSpells("Dispel Magic", 3, 120, 999, "Destroys spells in a 20 foot cube", function () { console.log('Casting'); }, "dispel-magic");
let fireBall = new MageLevelThreeSpells("Fire Ball", 2, 240, 0, "Explosion in a sphere 40 foot diameter", function () { console.log('Casting'); }, "fire-ball");
let fly = new MageLevelThreeSpells("Fly", 3, 0, 6, "One creature may fly", function () { console.log('Casting'); }, "fly");
let haste = new MageLevelThreeSpells("Haste", 3, 240, 3, "Up to 24 creatures move double speed", function () { console.log('Casting'); }, "haste");
let holdPerson = new MageLevelThreeSpells("Hold Person", 3, 120, 1, "Parlyzes up to 4 creatures", function () { console.log('Casting'); }, "hold-person");
let infravision = new MageLevelThreeSpells("Infravision", 3, 0, 24, "One living creature", function () { console.log('Casting'); }, "infravision");
let invisibilityTenFoot = new MageLevelThreeSpells("Invisibility 10 feet radius", 3, 120, 999, "All creatures within 10 feet", function () { console.log('Casting'); }, "invisibility-ten-feet");
let lightningBolt = new MageLevelThreeSpells("Lightning Bolt", 3, 180, 0, "Bolt 60 feet long, 5 feet wide", function () { console.log('Casting'); }, "lightning-bolt");
let protectionFromEvilTenFoot = new MageLevelThreeSpells("Protection From Evil 10 feet radius", 3, 0, 12, "Barrier 20 feet in diameter", function () { console.log('Casting'); }, "protection-from-evil-ten-feet");
let protectionFromNormalMissiles = new MageLevelThreeSpells("Protection From Missiles", 3, 30, 12, "One creature", function () { console.log('Casting'); }, "protection-from-missiles");
let waterBreathing = new MageLevelThreeSpells("Water Breathing", 3, 30, 24, "One air-breathing creature", function () { console.log('Casting'); }, "water-breathing");

export { clairvoyance, dispelMagic, fireBall, fly, haste, holdPerson, infravision, invisibilityTenFoot, lightningBolt, protectionFromEvilTenFoot, protectionFromNormalMissiles, waterBreathing }