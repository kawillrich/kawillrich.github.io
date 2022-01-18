
export default class Weapon {
    constructor (name, damage, type) {
        this.name = name;
        this.damage = damage;
    }

   
}
 let steelSword = new Weapon('Steel Sword', 8, 'Melee');
 let shortBow = new Weapon('Short Bow', 6, 'Missile');
 let staff = new Weapon('Staff', 4, 'Melee');
 let silverSword = new Weapon('Silver Sword', 10, 'Melee');
 let twoHandedBroadSword = new Weapon('Two-Handed Sword', 12, 'Melee');
 let longBow = new Weapon('Long Bow', 8, 'Missile');
 let ebonyBow = new Weapon('Ebony Bow', 10, 'Missile');
 let mahoganyStaff = new Weapon('Mahogany Staff', 6, 'Melee');
 let gemStaff = new Weapon('Gem Staff', 8, 'Melee');
 let noWeapon = new Weapon('None', 0);
 let obsidianSword = new Weapon('Obsidian Sword', 100, 'Melee');

export { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword };