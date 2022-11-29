import
{
    finalCharacter
} from "/js/js_v14-3.js";

import { toggleShowSpellList } from "/js/js_v14-3.js";

export default class MageLevelThreeSpells
{
    constructor (name, level, range, duration, effect, castingEffect, className, useBattle, damage)
    {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
        this.className = className;
        this.useBattle = useBattle;
        this.damage = damage;
    }
};

let clairvoyance = new MageLevelThreeSpells("Clairvoyance", 3, 60, 12, "See through another's eyes", function () { console.log('Casting'); }, "clairvoyance", false);
let dispelMagic = new MageLevelThreeSpells("Dispel Magic", 3, 120, 999, "Destroys spells in a 20 foot cube", function () { console.log('Casting'); }, "dispel-magic", false);
let fireBall = new MageLevelThreeSpells("Fire Ball", 2, 240, 0, "Explosion in a sphere 40 foot diameter", function () { console.log('Casting'); }, "fire-ball", true, 8);
let fly = new MageLevelThreeSpells("Fly", 3, 0, 6, "One creature may fly", function () { console.log('Casting'); }, "fly", false);
let haste = new MageLevelThreeSpells("Haste", 3, 240, 3, "Up to 24 creatures move double speed", function () { console.log('Casting'); }, "haste", true);
let holdPerson = new MageLevelThreeSpells("Hold Person", 3, 120, 1, "Parlyzes up to 4 creatures", function () { console.log('Casting'); }, "hold-person", true);
let infravision = new MageLevelThreeSpells("Infravision", 3, 0, 24, "One living creature", function () { console.log('Casting'); }, "infravision", false);
let invisibilityTenFoot = new MageLevelThreeSpells("Invisibility 10 feet radius", 3, 120, 999, "All creatures within 10 feet", function () { console.log('Casting'); }, "invisibility-ten-feet", true);
let lightningBolt = new MageLevelThreeSpells("Lightning Bolt", 3, 180, 0, "Bolt 60 feet long, 5 feet wide", function () { console.log('Casting'); }, "lightning-bolt", true);
let protectionFromEvilTenFoot = new MageLevelThreeSpells("Protection From Evil 10 feet radius", 3, 0, 12, "Barrier 20 feet in diameter", function () { console.log('Casting'); }, "protection-from-evil-ten-feet", true);
let protectionFromNormalMissiles = new MageLevelThreeSpells("Protection From Missiles", 3, 30, 12, "One creature", function () { console.log('Casting'); }, "protection-from-missiles", true);
let waterBreathing = new MageLevelThreeSpells("Water Breathing", 3, 30, 24, "One air-breathing creature", function () { console.log('Casting'); }, "water-breathing", false);

fireBall.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    if (attackedMonster === "Monster 1")
    {
        toggleShowSpellList();
        finalCharacter.areaAttackSpell(monster1, monster2, continueNextChapter, this.damage, this.name);
    } else if (attackedMonster === "Monster 2")
    {
        toggleShowSpellList();
        finalCharacter.spell2AttackMonster2(monster1, monster2, continueNextChapter, this.damage, this.name);
    }
}
export { clairvoyance, dispelMagic, fireBall, fly, haste, holdPerson, infravision, invisibilityTenFoot, lightningBolt, protectionFromEvilTenFoot, protectionFromNormalMissiles, waterBreathing }