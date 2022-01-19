import { finalCharacter, confirmAttackMonsters } from './js_v14-3.js';

import Weapon from './weapon-class-v2.js';
import { normalSword, shortBow, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword, woodenClub, dagger, 
    silverDagger, battleAxe, handAxe, crossBow, shortSword, mace, javelin, poleArm, sling, spear, warHammer } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, scaleMail, plateMail, bandedMail, obsidianPlateMail } from './armor-class-v2.js';
import Spell from './spell-class-v2.js';
import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall} from './spell-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, highMage, dragonWarrior, elf, dwarf, halfling, cleric, thief } from './specialty-class-v2.js';
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

    createHitPoints() {
        let newHPArray = [];
        let finalHPArray = [];
        for ( let i = 0; i < this.hitDice; i++) {
            let updatedHP = (Math.ceil(Math.random(1) * 6));
            newHPArray.unshift(updatedHP);
            console.log(newHPArray);
          }
          const reducer = (previousValue, currentValue) => previousValue + currentValue;
          if (!newHPArray ===[]) {
            finalHPArray = newHPArray.reduce(reducer);
            console.log(finalHPArray);
            this.healthPoints = finalHPArray;
          } else {
              return;
          }

        //   return finalHPArray;
        
      












        // this.healthPoints = this.hitDice * (Math.ceil(Math.random(1)* 6));
        // return this.healthPoints;
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
         
            let monsterRandomDamage = Math.ceil(Math.random(this.monsterDamage) * 6);

            finalCharacter.specialty.healthPoints = finalCharacter.specialty.healthPoints - monsterRandomDamage;    
            alert(`The ${this.monsterName} attacks you and causes ${monsterRandomDamage} points of damage.`);            
            
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

let wolf1 = new Monster('Wolf', 5, 16, 2, 1, 5);
let wolf2 = new Monster('Wolf', 5, 16, 2, 1, 5);
let goblin = new Monster('Goblin', 1, 4, 1, 1, 5);

let goblin1 = new Monster('Goblin', 1, 18, 1, 1, 5);
let goblin2 = new Monster('Goblin', 1, 3, 1, 1, 5);

let noMonster = new Monster(' ', ' ', ' ', ' ', ' ', ' ');

//exporting monsters

export { wolf1, wolf2, goblin, goblin1, goblin2, noMonster };