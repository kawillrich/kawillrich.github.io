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
        console.log('monsterAttack arguments');
        console.table(arguments);
        
        alert(`Monster(s) Turn!`);
        //console.log(arguments);

        if (arguments[0].healthPoints <= 0 || arguments[0].healthPoints === 'Dead') {
            arguments[0].healthPoints === 'Dead';
            
        } else if (arguments[0].healthPoints > 0) {
            arguments[0].healthPoints = arguments[0].healthPoints;                
        };           
                 
        ENEMYONE.monstersTurn(ENEMYONE, finalCharacter);        
    };    

    //monstersTurn(monsterName, monsterDamage, monsterHealthPoints, finalCharacter) {

        monstersTurn() {
            
            console.log("monstersTurn arguments");
            console.table(arguments);
        // this.monsterName = monsterName;
        // this.monsterDamage = monsterDamage;
        // this.monsterHealthPoints = monsterHealthPoints; 
        // this.finalCharacter = finalCharacter;
        
        let monstersAttackTurn = () => {             
            console.log("monstersAttackTurn arguments");
            console.table(arguments);
            
            //console.log(monster1.name);
            //console.log(ENEMYONE.name);
            arguments[1].specialty.healthPoints = arguments[1].specialty.healthPoints - arguments[0].damage;    
            alert(`The ${arguments[0].name} attacks you and causes ${arguments[0].damage} points of damage.`);            
            
            let updatedCharHP = document.querySelector("#char-hp");
            updatedCharHP.innerHTML = `
            <h4 id='char-hp'>Health Points:  <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span></h4>
            `;    
            if (finalCharacter.specialty.healthPoints <= 0) {
                alert('You died!');
                window.location.reload(false);
            } else {            

                //REVERT THE MONSTER(S) TURN BUTTON TO 'HIDDEN' AND PLAYER ATTACK BUTTONS TO VISIBLE
                let revertToAttackButtons = function () {
                    let showAttackButtons = document.querySelectorAll('.attack');
                    
                    for (let i = 0; i < showAttackButtons.length; i++) {
                        showAttackButtons[i].classList.remove('hidden');
                    }
                    
                    // for (let showAttackButton of showAttackButtons) {
                    // showAttackButton.classList.remove('hidden'); 
                    // };

                    let hideMonsterAttackButton = document.querySelector('#monster-attack');
                    hideMonsterAttackButton.classList.add('hidden');
                }

                //END REVERTING CODE
                revertToAttackButtons();
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