export default class Armor {
    constructor (name, armorPoints) {
        this.name = name;
        this.armorPoints = armorPoints;
       
    }
};

let chainMail = new Armor('Chain Mail', 3);
let leatherArmor = new Armor('Leather Armor', 2);
let robes = new Armor('Robes', 1);
let noArmor = new Armor('None', 0);
let scaleMail = new Armor('Scale Mail', 5);
let plateMail = new Armor('Plate Mail', 7);
let reinforcedLeather = new Armor('Reinforced Leather', 4);
let platedLeather = new Armor('Plated Leather', 6);
let reinforcedRobes = new Armor('Reinforced Robes', 2);
let enchantedRobes = new Armor('Enchanged Robes', 4);
let obsidianPlateMail = new Armor('Obsidian Plate Mail', 20);

export { chainMail, leatherArmor, robes, noArmor, scaleMail, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes, obsidianPlateMail };
