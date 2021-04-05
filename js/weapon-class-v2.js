
export default class Weapon {
    constructor (name, damage) {
        this.name = name;
        this.damage = damage;
    }

   
}
 let steelSword = new Weapon('Steel Sword', 8);
 let shortBow = new Weapon('Short Bow', 6);
 let staff = new Weapon('Staff', 4);
 let silverSword = new Weapon('Silver Sword', 10);
 let twoHandedBroadSword = new Weapon('Two-Handed Sword', 12);
 let longBow = new Weapon('Long Bow', 8);
 let ebonyBow = new Weapon('Ebony Bow', 10);
 let mahoganyStaff = new Weapon('Mahogany Staff', 6);
 let gemStaff = new Weapon('Gem Staff', 8);
 let noWeapon = new Weapon('None', 0);

export { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon };