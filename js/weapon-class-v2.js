
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
 let steelSword = new Weapon('Steel Sword', 8, 'Melee', 1, 10, 60 );
 let shortBow = new Weapon('Short Bow', 6, 'Missile', 2, 25, 20);
 let staff = new Weapon('Staff', 4, 'Melee', 2, 2, 20);
 let silverSword = new Weapon('Silver Sword', 10, 'Melee', 1, 200, 50);
 let twoHandedBroadSword = new Weapon('Two-Handed Sword', 12, 'Melee', 2, 15, 100);
 let longBow = new Weapon('Long Bow', 8, 'Missile', 2, 40, 30);
 let ebonyBow = new Weapon('Ebony Bow', 10, 'Missile', 2, 75, 30);
 let mahoganyStaff = new Weapon('Mahogany Staff', 6, 'Melee', 1, 20, 20);
 let gemStaff = new Weapon('Gem Staff', 8, 'Melee', 1, 100, 20);
 let noWeapon = new Weapon('None', 0, 'Melee', 1, 0, 0); 
 let obsidianSword = new Weapon('Obsidian Sword', 100, 'Melee', 1, 1000, 40);


export { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword };