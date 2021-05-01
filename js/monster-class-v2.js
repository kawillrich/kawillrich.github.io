import { finalCharacter, confirmAttackWolves } from './js_v14-3.js';

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

        let monstersTurn = document.querySelector('#fight-module');
        monstersTurn.innerHTML = `
        <div class="monster-attack-buttons">
        <input type="submit" id="attack-player" value="Monster(s) Turn">        
        </div>`;
    
        let monsterOneStatus = document.querySelector('#monster-one');
        if (arguments[0].healthPoints <= 0 || arguments[0].healthPoints === 'Dead') {
            arguments[0].healthPoints === 'Dead';
            
        } else if (arguments[0].healthPoints > 0) {
            arguments[0].healthPoints = arguments[0].healthPoints;                
            };        
        
        console.log(arguments[0].name);        
        let confirmMonsterAttack = document.querySelector('#attack-player');
        confirmMonsterAttack.addEventListener('click', function() { ENEMYONE.monstersTurn(ENEMYONE.name, ENEMYONE.damage, ENEMYONE.healthPoints, finalCharacter) }, false);             
    };

    //NEED TO MAKE THE MONSTERS ATTACK
    //Need to remember to import/export other functions from js_v14-3.js file to be able to access here

    monstersTurn(monsterName, monsterDamage, monsterHealthPoints, finalCharacter) {
        this.monsterName = monsterName;
        this.monsterDamage = monsterDamage;
        this.monsterHealthPoints = monsterHealthPoints; 
        this.finalCharacter = finalCharacter;
        
        let monstersAttackTurn = () => {
        console.log("Executing monstersAttackTurn");
        console.log("Monster's Name: " + this.monsterName);
        console.log("Monster's HP: " + this.monsterHealthPoints);
        console.log("Monster's Damage: " + this.monsterDamage);
        console.log("Character Name: " + this.finalCharacter.name);        
        confirmAttackWolves();
    
    //NEED TO ADD ATTACK SEQUENCE - IF PLAYER HP IS <= 0, ETC.    
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