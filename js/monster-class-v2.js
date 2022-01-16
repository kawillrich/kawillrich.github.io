import { finalCharacter, confirmAttackMonsters } from './js_v14-3.js';

import Weapon from './weapon-class-v2.js';
import { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes } from './armor-class-v2.js';
import Spell from './spell-class-v2.js';
import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall} from './spell-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, masterArcher, highMage, dragonWarrior, elf, dwarf, halfling, cleric, thief } from './specialty-class-v2.js';
import Character from './character-class-v2.js';



export default class Monster {
    constructor (name, hitDice, healthPoints, armorClass, damage, experienceValue, alignment, attacks, treasureType, saveAs, status) {
        this.name = name;
        this.hitDice = hitDice;
        this.healthPoints = healthPoints;
        this.armorClass = armorClass;
        this.damage = damage;        
        this.experienceValue = experienceValue;
        this.alignment = alignment || 'Neutral';
        this.attacks = attacks;
        this.treasureType = treasureType;
        this.saveAs = saveAs;
        this.satus = status || "Alive";

    };

    monsterAttack(monsterOne, monsterTwo) {
        // console.log(monsterOne);
        // console.log(monsterTwo);
       
        // console.log('Monsters Attack');    
        
        

        alert(`Monster(s) Turn!`);

        if (arguments[0].healthPoints <= 0 || arguments[0].healthPoints === 'Dead') {
            arguments[0].healthPoints === 'Dead';
            
        } else if (arguments[0].healthPoints > 0) {
            arguments[0].healthPoints = arguments[0].healthPoints;                
        };        
        
       
        
        monsterOne.monstersTurn(monsterOne, monsterTwo, monsterOne.name, monsterOne.damage, monsterOne.healthPoints, finalCharacter);        
    };    

    monstersTurn(monsterOne, monsterTwo, monsterName, monsterDamage, monsterHealthPoints, finalCharacter) {
        this.monsterName = monsterName;
        this.monsterDamage = monsterDamage;
        this.monsterHealthPoints = monsterHealthPoints; 
        this.finalCharacter = finalCharacter;
        
      

        let monstersAttackTurn = (monsterOne, monsterTwo) => {     
            // console.log(monsterOne);        
            // console.log(monsterTwo);
         

            finalCharacter.specialty.healthPoints = finalCharacter.specialty.healthPoints - this.monsterDamage;    
            alert(`The ${this.monsterName} attacks you and causes ${this.monsterDamage} points of damage.`);            
            
            let updatedCharHP = document.querySelector("#char-hp");
            updatedCharHP.innerHTML = `
            <h4 id='char-hp'>Hit Points:  <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span></h4>
            `;    
            if (finalCharacter.specialty.healthPoints <= 0) {
                alert('You died!');
                window.location.reload(false);
            } else {            

                //REVERT THE MONSTER(S) TURN BUTTON TO 'HIDDEN' AND PLAYER ATTACK BUTTONS TO VISIBLE
                let revertToAttackButtons = function () {
                    let showAttackButtons = document.querySelectorAll('.attack');
                    for (let showAttackButton of showAttackButtons) {
                    showAttackButton.classList.remove('hidden'); 
                    };
                    let hideMonsterAttackButton = document.querySelector('#monster-attack');
                    hideMonsterAttackButton.classList.add('hidden');
                }

                //END REVERTING CODE
                revertToAttackButtons();
                confirmAttackMonsters(monsterOne, monsterTwo);    
            }
        }
        monstersAttackTurn(monsterOne, monsterTwo);
    }

};

//initializing monsters

let wolf1 = new Monster('Wolf', 1, 16, 2, 6, 5);
let wolf2 = new Monster('Wolf', 1, 16, 2, 6, 5);
let goblin = new Monster('Goblin', 1, 30, 5, 6, 5);

let goblin1 = new Monster('Goblin', 1, 8, 5, 6, 5);
let goblin2 = new Monster('Goblin', 1, 8, 5, 6, 5);

//exporting monsters

export { wolf1, wolf2, goblin, goblin1, goblin2 };