
export default class Weapon {
    constructor (name, damage, type, numOfHands) {
        this.name = name;
        this.damage = damage;
        this.type = type;
        this.numOfHands = numOfHands;
    }

   
}
 let steelSword = new Weapon('Steel Sword', 8, 'Melee', 1);
 let shortBow = new Weapon('Short Bow', 6, 'Missile', 2);
 let staff = new Weapon('Staff', 4, 'Melee', 1);
 let silverSword = new Weapon('Silver Sword', 10, 'Melee', 1);
 let twoHandedBroadSword = new Weapon('Two-Handed Sword', 12, 'Melee', 2);
 let longBow = new Weapon('Long Bow', 8, 'Missile', 2);
 let ebonyBow = new Weapon('Ebony Bow', 10, 'Missile', 2);
 let mahoganyStaff = new Weapon('Mahogany Staff', 6, 'Melee', 1);
 let gemStaff = new Weapon('Gem Staff', 8, 'Melee', 1);
 let noWeapon = new Weapon('None', 0);
 let obsidianSword = new Weapon('Obsidian Sword', 100, 'Melee', 1);

export { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword };