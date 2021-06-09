import { finalCharacter, confirmAttackMonsters } from './js_v14-3.js';

import Weapon from './weapon-class-v2.js';
import { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes } from './armor-class-v2.js';
import Spell from './spell-class-v2.js';
import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall} from './spell-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, masterArcher, highMage } from './specialty-class-v2.js';
import Character from './character-class-v2.js';



export default class Monster {
    constructor (name, healthPoints, armorPoints, damage) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.armorPoints = armorPoints;
        this.damage = damage;        
    };

    monsterAttack() {
        
        const ENEMYONE = arguments[0];
        console.log(ENEMYONE.name);
        console.log('Monsters Attack');    
    
        //alert(`Monster(s) Turn!`);

        if (arguments[0].healthPoints <= 0 || arguments[0].healthPoints === 'Dead') {
            arguments[0].healthPoints === 'Dead';
            
        } else if (arguments[0].healthPoints > 0) {
            arguments[0].healthPoints = arguments[0].healthPoints;                
        };        
        
        console.log(arguments[0].name);    
        
        ENEMYONE.monstersTurn(ENEMYONE.name, ENEMYONE.damage, ENEMYONE.healthPoints, finalCharacter);        
    };    

    monstersTurn(monsterName, monsterDamage, monsterHealthPoints, finalCharacter) {
        this.monsterName = monsterName;
        this.monsterDamage = monsterDamage;
        this.monsterHealthPoints = monsterHealthPoints; 
        this.finalCharacter = finalCharacter;
        
        let monstersAttackTurn = () => {

             

            finalCharacter.specialty.healthPoints = finalCharacter.specialty.healthPoints - this.monsterDamage;    
            //alert(`The ${this.monsterName} attacks you and causes ${this.monsterDamage} points of damage.`);
            
            
            
            let updatedCharHP = document.querySelector("#char-hp");
            updatedCharHP.innerHTML = `
            <h4 id='char-hp'>Health Points:  <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span></h4>
            `;    
            if (finalCharacter.specialty.healthPoints <= 0) {
                alert('You died!');
                window.location.reload(false);
            } else {            
                confirmAttackMonsters();    
            }
        }
        monstersAttackTurn();
    }

};

//initializing monsters

let wolf1 = new Monster('Wolf', 20, 2, 6);
let wolf2 = new Monster('Wolf', 20, 2, 6);
let goblin = new Monster('Goblin', 30, 5, 6);

//exporting monsters

export { wolf1, wolf2, goblin };