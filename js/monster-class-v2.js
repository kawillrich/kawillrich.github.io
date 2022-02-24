import { finalCharacter, confirmAttackMonsters } from './js_v14-3.js';

// import Weapon from './weapon-class-v2.js';
// import { normalSword, shortBow, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword, woodenClub, dagger, 
//     silverDagger, battleAxe, handAxe, crossBow, shortSword, mace, javelin, poleArm, sling, spear, warHammer } from './weapon-class-v2.js';
// import Armor from './armor-class-v2.js';
// import { chainMail, leatherArmor, robes, noArmor, scaleMail, plateMail, bandedMail, obsidianPlateMail } from './armor-class-v2.js';
// import Spell from './spell-class-v2.js';
// import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall} from './spell-class-v2.js';
// import Specialty from './specialty-class-v2.js';
// import { noSpecialty, warrior, highMage, dragonWarrior, elf, dwarf, halfling, cleric, thief } from './specialty-class-v2.js';
// import Character from './character-class-v2.js';



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
        this.maxHP = this.hitDice[0]*8;
        this.startingHealthPoints = 0;
    };

    //auto generating HD number of hitpoints for monsters
    createHitPoints() {
        if (this.healthPoints === 0 || this.healthPoints === ' ' || this.hitDice === 0 || this.hitDice === ' ') {
            return;
        } else {

            if (this.hitDice[0] < 1) {
                let newHPArray = [];
                let finalHPArray = [];
                for ( let i = 0; i < this.hitDice[0]; i++) {
                    let updatedHP = (Math.ceil(Math.random(1) * 4));
                    newHPArray.unshift(updatedHP);
                }
                const reducer = (previousValue, currentValue) => previousValue + currentValue;
                finalHPArray = newHPArray.reduce(reducer) + this.hitDice[1];
                if (finalHPArray < 1) {
                    finalHPArray = 1;
                }
                console.log(finalHPArray);
                this.healthPoints = finalHPArray;
                this.startingHealthPoints = finalHPArray;

        
            } else {
                let newHPArray = [];
                let finalHPArray = [];
                for ( let i = 0; i < this.hitDice[0]; i++) {
                    let updatedHP = (Math.ceil(Math.random(1) * 8));
                    newHPArray.unshift(updatedHP);
                  }
                  const reducer = (previousValue, currentValue) => previousValue + currentValue;
                  finalHPArray = newHPArray.reduce(reducer) + this.hitDice[1];
                  if (finalHPArray < 1) {
                      finalHPArray = 1;
                  }
                  console.log(finalHPArray);
                  this.healthPoints = finalHPArray;
                  this.startingHealthPoints = finalHPArray;
                }
        }            
    };

    monsterAttack(monsterOne, monsterTwo) {        

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
         
            let monsterRandomDamage = Math.ceil(Math.random(this.monsterDamage) * 6);

            finalCharacter.specialty.healthPoints = finalCharacter.specialty.healthPoints - monsterRandomDamage;    
            alert(`The ${this.monsterName} attacks you and causes ${monsterRandomDamage} points of damage.`);            
            
            let updatedCharHP = document.querySelector("#char-hp");
            updatedCharHP.innerHTML = `
            <h4 id='char-hp' class='char-info-label'>Hit Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment}</span><span id='hpBar'><progress id='hp-prog-bar' max="${finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment}" value="${finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment}"></progress>${finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment}/${finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment}</span></span></h4> 
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

let noMonster = new Monster(' ', ' ', ' ', ' ', ' ', 0);

let smallWolf = new Monster('Small Wolf', [2, 0], 8, 9, 4, 5);

let wolf1 = new Monster('Wolf', [2, 2], 18, 7, 6, 25);
let wolf2 = new Monster('Wolf', [2, 2], 18, 7, 6, 25);

let goblin = new Monster('Goblin', [1, -1], 4, 1, 1, 5);
let goblin1 = new Monster('Goblin', [1, -1], 18, 1, 1, 5);
let goblin2 = new Monster('Goblin', [1, -1], 3, 1, 1, 5);

let fireBeetle = new Monster('Fire Beetle', [1, 2], 6, 4, 8, 15, 'Neutral', 'Bite');
let fireBeetle1 = new Monster('Fire Beetle', [1, 2], 6, 4, 8, 15, 'Neutral', 'Bite');
let fireBeetle2 = new Monster('Fire Beetle', [1, 2], 6, 4, 8, 15, 'Neutral', 'Bite');
let fireBeetle3 = new Monster('Fire Beetle', [1, 2], 6, 4, 8, 15, 'Neutral', 'Bite');
let fireBeetle4 = new Monster('Fire Beetle', [1, 2], 6, 4, 8, 15, 'Neutral', 'Bite');


let hobGoblin = new Monster('Hobgoblin', [1, 1], 9, 6, 6, 15, 'Chaotic', 'Short Sword');
let hobGoblin1 = new Monster('Hobgoblin', [1, 1], 9, 6, 6, 15, 'Chaotic', 'Short Sword');
let hobGoblin2 = new Monster('Hobgoblin', [1, 1], 9, 6, 6, 15, 'Chaotic', 'Short Sword');
let hobGoblin3 = new Monster('Hobgoblin', [1, 1], 9, 6, 6, 15, 'Chaotic', 'Short Sword');
let hobGoblin4 = new Monster('Hobgoblin', [1, 1], 9, 6, 6, 15, 'Chaotic', 'Short Sword');
let hobGoblin5 = new Monster('Hobgoblin', [1, 1], 9, 6, 8, 15, 'Chaotic', 'Sword');


let bugBear = new Monster('Bug Bear', [3, 1], 19, 5, 7, 3000, 'Chaotic', 'Short Sword');
let bugBear1 = new Monster('Bug Bear', [3, 1], 19, 5, 7, 3000, 'Chaotic', 'Short Sword');
let bugBear2 = new Monster('Bug Bear', [3, 1], 19, 5, 7, 75, 'Chaotic', 'Short Sword');
let bugBear3 = new Monster('Bug Bear', [3, 1], 19, 5, 7, 75, 'Chaotic', 'Short Sword');
let bugBear4 = new Monster('Bug Bear', [3, 1], 19, 5, 7, 75, 'Chaotic', 'Short Sword');
let bugBear5 = new Monster('Bug Bear', [3, 1], 19, 5, 9, 75, 'Chaotic', 'Sword');


let kobold = new Monster('Kobold', [.5, 0], 4, 7, 4, 5, 'Chaotic', 'Club');
let kobold1 = new Monster('Kobold', [.5, 0], 4, 7, 4, 5, 'Chaotic', 'Dagger');
let kobold2 = new Monster('Kobold', [.5, 0], 4, 7, 4, 5, 'Chaotic', 'Club');
let kobold3 = new Monster('Kobold', [.5, 0], 4, 7, 4, 5, 'Chaotic', 'Dagger');
let kobold4 = new Monster('Kobold', [.5, 0], 4, 7, 4, 5, 'Chaotic', 'Club');
let kobold5 = new Monster('Kobold', [.5, 0], 4, 7, 4, 5, 'Chaotic', 'Club');
let kobold6 = new Monster('Kobold', [.5, 0], 4, 7, 4, 5, 'Chaotic', 'Club');


let orc = new Monster('Orc', [1, 0], 8, 6, 6, 10, 'Chaotic', 'Short Sword');
let orc1 = new Monster('Orc', [1, 0], 8, 6, 6, 10, 'Chaotic', 'Short Sword');
let orc2 = new Monster('Orc', [1, 0], 8, 6, 6, 10, 'Chaotic', 'Short Sword');
let orc3 = new Monster('Orc', [1, 0], 8, 6, 6, 10, 'Chaotic', 'Short Sword');
let orc4 = new Monster('Orc', [1, 0], 8, 6, 6, 10, 'Chaotic', 'Short Sword');
let orc5 = new Monster('Orc', [1, 0], 8, 6, 8, 10, 'Chaotic', 'Sword');

let skeleton = new Monster('Skeleton', [1, 0], 8, 7, 4, 10, 'Chaotic', 'Dagger');
let skeleton1 = new Monster('Skeleton', [1, 0], 8, 7, 4, 10, 'Chaotic', 'Club');
let skeleton2 = new Monster('Skeleton', [1, 0], 8, 7, 4, 10, 'Chaotic', 'Dagger');
let skeleton3 = new Monster('Skeleton', [1, 0], 8, 7, 6, 10, 'Chaotic', 'Short Sword');
let skeleton4 = new Monster('Skeleton', [1, 0], 8, 7, 6, 10, 'Chaotic', 'Short Sword');
let skeleton5 = new Monster('Skeleton', [1, 0], 8, 7, 6, 10, 'Chaotic', 'Short Sword');


let giantRacer = new Monster('Giant Racer', 2, 16, 5, 6, 20, 'Neutral', 'Bite');


//exporting monsters

export { smallWolf, wolf1, wolf2, goblin, goblin1, goblin2, noMonster, fireBeetle, hobGoblin, bugBear, bugBear1, kobold, kobold1 };