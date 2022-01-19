export default class Weapon {
    constructor (name, damage, type, numOfHands, cost, encumbrance) {
        this.name = name;
        this.damage = damage;
        this.type = type;
        this.numOfHands = numOfHands;
        this.cost = cost;
        this.encumbrance = encumbrance;
    }

   
}


let noWeapon = new Weapon('None', 0, 'Melee', 1, 0, 0); 

// 1d4 damage
let woodenClub = new Weapon('Wooden Club', 4, 'Melee', 1, 3, 50);
let dagger = new Weapon('Dagger', 4, 'Melee', 1, 3, 10);
let sling = new Weapon('Sling', 4, 'Missile', 1, 2, 20);

// 1d6 damage
let shortBow = new Weapon('Short Bow', 6, 'Missile', 2, 25, 20);
let longBow = new Weapon('Long Bow', 6, 'Missile', 2, 40, 30);
let silverDagger = new Weapon('Dagger', 6, 'Melee', 1, 30, 10);
let handAxe = new Weapon('Hand Axe', 6, 'Melee', 1, 4, 30);
let shortSword = new Weapon('Short Sword', 6, 'Melee', 1, 7, 30);
let javelin = new Weapon('Javelin', 6, 'Missile', 1, 1, 20);
let spear = new Weapon('Spear', 6, 'Melee', 1, 3, 30);
let crossBow = new Weapon('Cross Bow', 6, 'Missile', 2, 30, 50);
let mace = new Weapon('Mace', 6, 'Melee', 1, 5, 30);
let warHammer = new Weapon('War Hammer', 6, 'Melee', 1, 5, 50);

//1d8 damage
let battleAxe = new Weapon('Battle Axe', 8, 'Melee', 2, 7, 60);
let normalSword = new Weapon('Normal Sword', 8, 'Melee', 1, 10, 60 );
let mahoganyStaff = new Weapon('Mahogany Staff', 6, 'Melee', 1, 20, 20);
let gemStaff = new Weapon('Gem Staff', 8, 'Melee', 1, 100, 20);

//1d10 damage
let silverSword = new Weapon('Silver Sword', 10, 'Melee', 1, 200, 50);
let ebonyBow = new Weapon('Ebony Bow', 10, 'Missile', 2, 75, 30); 
let poleArm = new Weapon('Pole Arm', 10, 'Melee', 2, 7, 150);
let twoHandedBroadSword = new Weapon('Two-Handed Sword', 10, 'Melee', 2, 15, 100);


//mega weapon
let obsidianSword = new Weapon('Obsidian Sword', 100, 'Melee', 1, 1000, 40);



export { normalSword, shortBow, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword, woodenClub, dagger, 
    silverDagger, battleAxe, handAxe, crossBow, shortSword, mace, javelin, poleArm, sling, spear, warHammer };