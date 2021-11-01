export default class Achievements {
    constructor(name) {
        this.name = name;
        
    }
};

let killedFarmWolves = new Achievements("Killed Farm Wolves");
let spokeToRaynard = new Achievements("Spoke to Raynard");

export { killedFarmWolves, spokeToRaynard };