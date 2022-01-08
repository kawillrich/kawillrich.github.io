//RENAME as QuestItem?

export default class Inventory {
    constructor (name, description, enchantment, encumbrance) {
        this.name = name;
        this.description = description;
        this.enchantment = enchantment;
        this.encumbrance = encumbrance;
    };

    

};

let noItem = new Inventory("None", "None", 0, 0);
let raynardsCoin = new Inventory("Raynard's Coin", "Coin provided to you from Raynard", 0, 0);
let farmersNote = new Inventory("Farmer's Note", "Note received from farmers after defeating wolves", 0, 0);
let eloisesRing = new Inventory("Eloise's Ring", "Ring Eloise wore", 20, 1)

export { raynardsCoin, farmersNote, noItem , eloisesRing };