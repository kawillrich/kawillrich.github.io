export default class Inventory {
    constructor (name, description, enchantment) {
        this.name = name;
        this.description = description;
        this.enchantment = enchantment;
    };

};

let noItem = new Inventory("None", "None", 0);
let raynardsCoin = new Inventory("Raynard's Coin", "Coin provided to you from Raynard", 0);
let farmersNote = new Inventory("Farmer's Note", "Note received from farmers after defeating wolves", 0);
let eloisesRing = new Inventory("Eloise's Ring", "Ring Eloise wore", 20)

export { raynardsCoin, farmersNote, noItem , eloisesRing };