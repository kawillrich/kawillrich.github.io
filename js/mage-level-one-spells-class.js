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

export { charmPerson };