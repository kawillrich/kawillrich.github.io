
export let clericLevelOneSpells = [];

export default class ClericLevelOneSpells {
    constructor (name, level, range, duration, effect, castingEffect) {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
    }
};

let cureLightWoundsCleric = new ClericLevelOneSpells ("Cure Light Wounds", 1, 0, 0, "Cures 2-7 points of damage upon touch, cleric must make a hit roll", 
// function() {
//     console.log('casting')
// }
);
let detectMagicCleric = new ClericLevelOneSpells ("Detect Magic", 1, 0, 2, "Detects magic within 60 feet");
let detectEvilCleric = new ClericLevelOneSpells ("Detect Evil", 60, 2, "Everything within 60 feet");
let purifyFoodAndWaterCleric = new ClericLevelOneSpells ("Purify Food and Water", 1, 10, 0, "Makes spoiled or poisoned food and water safe and usable (one ration, 6 waterskins");
let lightCleric = new ClericLevelOneSpells ("Light", 1, 120, 6, "Volume of 30 feet diameter");
let removeFearCleric = new ClericLevelOneSpells ("Remove Fear", 1, 0, 0, "Will calm the creature and remove any fear. Plus 1 bonus for each level up to 6",
function() {
    console.log('Casting');
    //finalCharacter.spell2AttackMonster1();
}

);
let protectionFromEvilCleric = new ClericLevelOneSpells ("Protection from Evil", 1, 0, 6, "The Cleric only");
let resistColdCleric = new ClericLevelOneSpells ("Resist Cold", 1, 0, 6, "All creatures within 30 feet");


export { cureLightWoundsCleric, detectEvilCleric, detectMagicCleric, purifyFoodAndWaterCleric, lightCleric, removeFearCleric, protectionFromEvilCleric, resistColdCleric };