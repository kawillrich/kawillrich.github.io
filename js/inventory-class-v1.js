export default class Inventory {
    constructor (name, description) {
        this.name = name;
        this.description = description
    }

};

let noItem = new Inventory("None", "None");
let raynardsCoin = new Inventory("Raynard's Coin", "Coin provided to you from Raynard");
let farmersNote = new Inventory("Farmer's Note", "Note received from farmers after defeating wolves");

export { raynardsCoin, farmersNote, noItem };