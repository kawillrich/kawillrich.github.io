
export let clericLevelTwoSpells = [];

export default class ClericLevelTwoSpells {
    constructor (name, level, range, duration, effect, castingEffect) {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
    }
};

let blessCleric = new ClericLevelTwoSpells ("Bless", 2, 60, 6, "Improves morale of friendly creatures by +1, give +1 hit and damage rolls", 
// function() {
//     console.log('casting')
// }
);
let findTrapsCleric = new ClericLevelTwoSpells ("Find Traps", 2, 0, 2, "Cuases traps to glow with blue light with 30 feet");
let holdPersonCleric = new ClericLevelTwoSpells ("HOld Person", 2 ,180, 9, "Affects humans, humanoids, but not undead or creatures larger than Ogres");
let knowAlignmentCleric = new ClericLevelTwoSpells ("Know Alignment", 2, 0, 1, "Caster discovers alignment of creatures or items withing 10 feet");
let resistFire = new ClericLevelTwoSpells ("Resist Fire", 2, 30, 2, "Cannot be harmed by fire, recieves +2 Saving Throw against all magical fire");
let silence15ftCleric = new ClericLevelTwoSpells ("Silence", 2, 180, 12, "Sphere of silence 30 feet across",
function() {
    console.log('Casting');
    //finalCharacter.spell2AttackMonster1();
}

);
let snakeCharmCleric = new ClericLevelTwoSpells ("Snake Charm", 2, 60, 5, "Charm 1 HD of snakes for each level of the cleric");
let speakWithAnimalCleric = new ClericLevelTwoSpells ("Speak With Animals", 2, 0, 6, "Cleric must name one animal");


export { blessCleric, findTrapsCleric, holdPersonCleric, knowAlignmentCleric, resistFire, silence15ftCleric, snakeCharmCleric, speakWithAnimalCleric };