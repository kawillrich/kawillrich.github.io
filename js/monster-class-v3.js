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
               
        //let monsterAttackVariable = this;
        console.log(arguments);
        //console.log(enemy2.name);
        // console.log(enemy2.name);
        console.log('Monsters Attack');              
        console.log(arguments);

        if (arguments[0].healthPoints === 'Dead' && arguments[1].healthPoints === 'Dead') {
            let removeFightModule = document.querySelector('#fight-module');
            removeFightModule.innerHTML = `<p>You won!</p>`;
        } else {
        let monstersTurn = document.querySelector('#fight-module');
        monstersTurn.innerHTML = `
        <div class="monster-attack-buttons">
            <input type="submit" id="attack-player" value="Monster(s) Turn">        
        </div>`;
        }

        let monsterOneStatus = document.querySelector('#monster-one');
        if (arguments[0].healthPoints <= 0 || arguments[0].healthPoints === 'Dead') {
            arguments[0].healthPoints === 'Dead';

        // if (arguments[0].healthPoints === 'Dead' && arguments[1].healthPoints === 'Dead') {
        //     let removeFightModule = document.querySelector('#fight-module');
        //     removeFightModule.innerHTML = `<p>You won!</p>`;
        // } else {
        // let monstersTurn = document.querySelector('#fight-module');
        // monstersTurn.innerHTML = `
        // <div class="monster-attack-buttons">
        //     <input type="submit" id="attack-player" value="Monster(s) Turn">        
        // </div>`;
    
        //     let monsterOneStatus = document.querySelector('#monster-one');
        // if (this.healthPoints <= 0 || this.healthPoints === 'Dead') {
        //     this.healthPoints === 'Dead';

            // monsterOneStatus.innerHTML =`
            //     <div class="monster" id="monster-one">Monster 1:
            //         <h4 id="monster-one-type">Monster Type: ${this.enemy1.name}</h4>
            //         <h4 id="monster-one-hp">Health Points: ${this.enemy1.healthPoints}</h4> 
            //         <h4 id="monster-one-ap">Armor Points: ${this.enemy1.armorPoints}</h4>
            //         <h4 id="monster-one-damage">Damage: ${this.enemy1.damage}</h4>       
            //         </div>`;
            } else if (arguments[0].healthPoints > 0) {
                arguments[0].healthPoints = arguments[0].healthPoints;
                // monsterOneStatus.innerHTML =`
                // <div class="monster" id="monster-one">Monster 1:
                //     <h4 id="monster-one-type">Monster Type: ${wolf1.name}</h4>
                //     <h4 id="monster-one-hp">Health Points: ${wolf1.healthPoints}</h4> 
                //     <h4 id="monster-one-ap">Armor Points: ${wolf1.armorPoints}</h4>
                //     <h4 id="monster-one-damage">Damage: ${wolf1.damage}</h4>       
                //     </div>`
                };
    
        // let monsterTwoStatus = document.querySelector('#monster-two');
        // if (wolf2.healthPoints <= 0 || wolf2.healthPoints === 'Dead') {
        //     wolf2.healthPoints === 'Dead';
        //     monsterTwoStatus.innerHTML =`
        //     <div class="monster" id="monster-two">Monster 2:
        //         <h4 id="monster-two-type">Monster Type: ${wolf2.name}</h4>
        //         <h4 id="monster-two-hp">Health Points: ${wolf2.healthPoints}</h4> 
        //         <h4 id="monster-two-ap">Armor Points: ${wolf2.armorPoints}</h4>
        //         <h4 id="monster-two-damage">Damage: ${wolf2.damage}</h4>       
        //         </div>`;
        // } else if (wolf2.healthPoints > 0) {
        //     monsterTwoStatus.innerHTML =`
        //     <div class="monster" id="monster-two">Monster 2:
        //         <h4 id="monster-two-type">Monster Type: ${wolf2.name}</h4>
        //         <h4 id="monster-two-hp">Health Points: ${wolf2.healthPoints}</h4> 
        //         <h4 id="monster-two-ap">Armor Points: ${wolf2.armorPoints}</h4>
        //         <h4 id="monster-two-damage">Damage: ${wolf2.damage}</h4>       
        //         </div>`
        //     };
         
        let confirmMonsterAttack = document.querySelector('#attack-player');
        confirmMonsterAttack.addEventListener('click', function() {self.monstersTurn(self.name, self.damage, self.healthPoints, finalCharacter)}, false);
        
        //return monsterAttackVariable;
        }
    

    //NEED TO FIGURE OUT HOW TO GO BACK TO CHARACTER ATTACKING & HOW TO USE CONFIRMWOLVES ATTACK FUNCTION IN EVENT LISTENER
    //NEED TO MAKE THE MONSTERS ATTACK
    //Need to remember to import/export other functions from js_v14-3.js file to be able to access here

    monstersTurn(monsterName, monsterDamage, monsterHealthPoints, finalCharacter) {
        this.monsterName = monsterName;
        this.monsterDamage = monsterDamage;
        this.monsterHealthPoints = monsterHealthPoints; 
        this.finalCharacter = finalCharacter;
        
        let monstersAttackTurn = () => {
        console.log("Executing monstersTurn");
        console.log(this.monsterName);
        console.log(this.monsterHealthPoints);
        console.log(this.monsterDamage);
        console.log(this.finalCharacter.name);
        console.log(this.finalCharacter.confirmAttack)
        console.log(confirmAttackWolves);
        confirmAttackWolves();
        }
    
    //NEED TO ADD ATTACK SEQUENCE - IF PLAYER HP IS <= 0, ETC.
    

    // let attackMonsterOne = document.querySelector('.attack-monster-one');
    // attackMonsterOne.addEventListener('click', RETURN_TO_FIGHT_MODULE, false);
    
    // let attackMonsterTwo = document.querySelector('.attack-monster-two');
    // attackMonsterTwo.addEventListener('click', RETURN_TO_FIGHT_MODULE, false);

        monstersAttackTurn();
    }
}



let wolf1 = new Monster('Wolf', 20, 2, 6);
let wolf2 = new Monster('Wolf', 20, 2, 6);
let goblin = new Monster('Goblin', 30, 5, 6);

export { wolf1, wolf2, goblin };