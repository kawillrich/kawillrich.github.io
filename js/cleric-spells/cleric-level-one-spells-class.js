
export let clericLevelOneSpells = [];

export default class ClericLevelOneSpells {
    constructor (name, level, range, duration, effect, castingEffect, IDName) {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
        this.IDName = IDName;
    }
};

let cureLightWoundsCleric = new ClericLevelOneSpells ("Cure Light Wounds", 1, 0, 0, "Cures 2-7 points of damage upon touch, cleric must make a hit roll", 
    function() {console.log('Casting');}, "cure-light-wounds-cleric");

let detectMagicCleric = new ClericLevelOneSpells ("Detect Magic", 1, 0, 2, "Detects magic within 60 feet", 
    function() {console.log('Casting');}, "detect-magic-cleric");

let detectEvilCleric = new ClericLevelOneSpells ("Detect Evil", 60, 2, "Everything within 60 feet", 
    function() {console.log('Casting');}, "detect-evil-cleric");

let purifyFoodAndWaterCleric = new ClericLevelOneSpells ("Purify Food and Water", 1, 10, 0, "Makes spoiled or poisoned food and water safe and usable (one ration, 6 waterskins", 
    function() {console.log('Casting');}, "purify-food-and-water-cleric");

let lightCleric = new ClericLevelOneSpells ("Light", 1, 120, 6, "Volume of 30 feet diameter", 
    function() {console.log('Casting');}, "light-cleric");

let removeFearCleric = new ClericLevelOneSpells ("Remove Fear", 1, 0, 0, "Will calm the creature and remove any fear. Plus 1 bonus for each level up to 6", 
    function() {console.log('Casting');}, "remove-fear-cleric");

let protectionFromEvilCleric = new ClericLevelOneSpells ("Protection from Evil", 1, 0, 6, "The Cleric only", 
    function() {console.log('Casting');}, "protection-from-evil-cleric");

let resistColdCleric = new ClericLevelOneSpells ("Resist Cold", 1, 0, 6, "All creatures within 30 feet", 
    function() {console.log('Casting');}, "resist-cold-cleric");


export { cureLightWoundsCleric, detectEvilCleric, detectMagicCleric, purifyFoodAndWaterCleric, lightCleric, removeFearCleric, protectionFromEvilCleric, resistColdCleric };