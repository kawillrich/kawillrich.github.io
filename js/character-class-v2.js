//import other js modules to access

import { finalCharacter, continueChapterThreeFour } from './js_v14-3.js';
import Weapon from './weapon-class-v2.js';
import { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes, obsidianPlateMail } from './armor-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, masterArcher, highMage, dragonWarrior } from './specialty-class-v2.js';

//exports Character class for other module access

export default class Character {
    constructor(name, specialty, armor, weapon, inventory1, inventory2, inventory3, enchantedItem) {
        this.name = name;
        this.specialty = specialty;
        this.armor = armor;
        this.weapon = weapon;
        this.inventory1 = inventory1;
        this.inventory2 = inventory2;
        this.inventory3 = inventory3;
        this.enchantedItem = enchantedItem;
    };

    //updates & initiates Character creation

    characterUpdate() {
        let characterInfo =  document.querySelector("#character-info");
        characterInfo.innerHTML = `
        <div id='character-stats'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Player Data</legend>
                <h4 id='char-name' class='char-info-label'>Name: <span class="character-display-info">${this.name}</span></h4>
                <h4 id='char-specialty' class='char-info-label'>Specialty <span class="character-display-info">: ${this.specialty.name}</span></h4>
                <h4 id='char-hp' class='char-info-label'>Health Points:  <span class="character-display-info">${this.specialty.healthPoints}</span></h4> 
                <h4 id='char-armor' class='char-info-label'>Armor:  <span class="character-display-info">${this.armor.name}</span></h4> 
                <h4 id='char-armor-points' class='char-info-label'>Armor Points:  <span class="character-display-info">${this.armor.armorPoints}</span></h4>
                <h4 id='char-weapon' class='char-info-label'>Weapon:  <span class="character-display-info">${this.weapon.name}</span></h4>
                <h4 id='char-damage' class='char-info-label'>Damage:  <span class="character-display-info">${this.weapon.damage}</span></h4>
                <h4 id='char-spell1' class='char-info-label'>Spell 1:  <span class="character-display-info">${this.specialty.spell1.name}</span></h4>
                <h4 id='char-spell2' class='char-info-label'>Spell 2:  <span class="character-display-info">${this.specialty.spell2.name}</span></h4>
                <h4 id='char-spell3' class='char-info-label'>Spell 3:  <span class="character-display-info">${this.specialty.spell3.name}</span></h4><br>
                
            </fieldset>
        </div>
        <div id='character-inventory'>
            <fieldset  class='char-info-module'>
                <legend class='player-dashboard'>Inventory</legend>
                <h4 id='char-items' class='char-info-label'>Item 1: <span class='character-display-inv1'>${this.inventory1.name}</span></h4>
                <h4 id='char-items' class='char-info-label'>Item 2: <span class='character-display-inv2'>${this.inventory2.name}</span></h4>
                <h4 id='char-items' class='char-info-label'>Item 3: <span class='character-display-inv3'>${this.inventory3.name}</span></h4><br>
                <h4 id='char-enchanted-item' class='char-info-label'>Enchanted Item:  <span class="character-display-info">${this.enchantedItem.name}</span></h4>
            </fieldset>
        </div>            
            `; 
    }
    
    //confirms to attack monsters and populates monster-info section

    confirmAttack(enemy1, enemy2) {
        this.enemy1 = enemy1;
        this.enemy2 = enemy2;        
       
//----------------TRYING TO EITHER REMOVE OR CHANGE COLOR OF ATTACK BUTTON IF MONSTER1 IS DEAD-------------

        if (this.enemy1.healthPoints <= 0) {
            let removeMonsterOneAttackButton = document.querySelector('.attack-monster-one');
            removeMonsterOneAttackButton.classList.add('monster1-dead');
            let removeMonsterOneSpellAttack = document.querySelector('.spell2-monster-one');
            removeMonsterOneSpellAttack.classList.add('monster1-dead');
        } else if (this.enemy2.healthPoints <= 0) {
            let removeMonsterTwoAttackButton = document.querySelector('.attack-monster-two');
            removeMonsterTwoAttackButton.classList.add('monster1-dead');
            let removeMonsterTwoSpellAttack = document.querySelector('.spell2-monster-two');
            removeMonsterTwoSpellAttack.classList.add('monster1-dead');
        }; 
//----------------------------------------------------------------------------------------------------------
        let monsterInfo = document.querySelector('#monster-info');
        monsterInfo.innerHTML = `
        <div class="monster" id="monster-one">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 1</legend>
                <h4 id="monster-one-type">Monster Type: ${enemy1.name}</h4>
                <h4 id="monster-one-hp">Health Points: ${enemy1.healthPoints}</h4> 
                <h4 id="monster-one-ap">Armor Points: ${enemy1.armorPoints}</h4>
                <h4 id="monster-one-damage">Damage: ${enemy1.damage}</h4>     
            </fieldset>  
        </div>
        <div class="monster" id="monster-two">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 2</legend>
                <h4 id="monster-two-type">Monster Type: ${enemy2.name}</h4>
                <h4 id="monster-two-hp">Health Points: ${enemy2.healthPoints}</h4> 
                <h4 id="monster-two-ap">Armor Points: ${enemy2.armorPoints}</h4>
                <h4 id="monster-two-damage">Damage: ${enemy2.damage}</h4> 
            </fieldset>        
        </div>
        `;     
    };    

    //attacking monster 1

    weaponAttackMonster1(monster1, weapon) {
        let self = this;        

        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints <= 0 && self.enemy2.healthPoints <= 0) {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        
        };        
        this.monster1 = monster1;
        this.weapon = weapon;
                 
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        <p>You attack the ${this.monster1.name} with your ${this.weapon.name} and cause ${this.weapon.damage} points of damage.</p>`;       
       
        //CHECKING ATTACK INTERACTION
        if (this.monster1.healthPoints - this.weapon.damage > 0) {        
            this.monster1.healthPoints = this.monster1.healthPoints - this.weapon.damage;
            let updatedMonsterHP = document.querySelector("#monster-one-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4>`;
            

//ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
            let greyOutAttackButtons = function() {                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                showMonsterAttackButton.onclick = function() {monster1.monsterAttack(monster1)};
            }            
            greyOutAttackButtons();

//END
        
        } else if (this.monster1.healthPoints - this.weapon.damage <= 0) {
            this.monster1.healthPoints = 0;
            
            let monsterOneStatus = document.querySelector('#monster-one');
            let defeatMonster1 = document.querySelector('#dialogue');
            monsterOneStatus.innerHTML = `
            <div class="monster" id="monster-one">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 1</legend>
                    <h4 id="monster-one-type">Monster Type: ${this.monster1.name}</h4>
                    <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4> 
                    <h4 id="monster-one-ap">Armor Points: ${this.monster1.armorPoints}</h4>
                    <h4 id="monster-one-damage">Damage: ${this.monster1.damage}</h4>    
                </fieldset>   
            </div>`;
            defeatMonster1.innerHTML = `<p>Congratulations, you defeated the Monster 1!</p>`;

//----------------------------trying to remove monster attack button--------------//
           
            let removingMonster1Button = document.getElementsByClassName('attack-monster-one');
            removingMonster1Button[0].classList.add('monster1-dead')
            
            let removeMonster1SpellAttack = document.getElementsByClassName('spell2-monster-one');
            removeMonster1SpellAttack[0].classList.add('monster1-dead');

//-------------------------------------------------------------------//
            };               
        
            confirmMonstersDead();    
    };      

    weaponAttackMonster2(monster2, weapon) {

        let self = this;
        let confirmMonstersDead = (enemy2) => {            
            //console.log(self.enemy1.name);
                    
            if (self.enemy2.healthPoints <= 0 && self.enemy1.healthPoints <= 0) {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;
            
            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        };
        
        this.monster2 = monster2;
        this.weapon = weapon;
        let enemy2X = this.enemy2;


        let attackDialogue = document.getElementById("dialogue");
        attackDialogue.innerHTML = `
        <p>You attack the ${enemy2X.name} with your ${this.weapon.name} and cause ${this.weapon.damage} points of damage.</p>`;
        
        //CHECKING ATTACK INTERACTION
        if (this.monster2.healthPoints - this.weapon.damage > 0) {        
            this.monster2.healthPoints = this.monster2.healthPoints - this.weapon.damage;
            let updatedMonsterHP = document.querySelector("#monster-two-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${enemy2X.healthPoints}</h4>`;

            //greying out attack module buttons when pressed

            let greyOutAttackButtons = function() {                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                showMonsterAttackButton.onclick = function() {monster2.monsterAttack(monster2)};
            }
            
            greyOutAttackButtons();
            
            } else if (this.monster2.healthPoints - this.weapon.damage <= 0) {
                this.monster2.healthPoints = 0;
                
                let monsterTwoStatus = document.querySelector('#monster-two');
                let defeatMonster2 = document.querySelector('#dialogue');
                monsterTwoStatus.innerHTML = `
                <div class="monster" id="monster-two">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 2</legend>
                        <h4 id="monster-two-type">Monster Type: ${this.monster2.name}</h4>
                        <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4> 
                        <h4 id="monster-two-ap">Armor Points: ${this.monster2.armorPoints}</h4>
                        <h4 id="monster-two-damage">Damage: ${this.monster2.damage}</h4>   
                    </fieldset>    
                </div>`;
                defeatMonster2.innerHTML = `
                <p>Congratulations, you defeated the Monster 2!</p>`;    
                
                let removingMonster2Button = document.getElementsByClassName('attack-monster-two');
                removingMonster2Button[0].classList.add('monster1-dead')        
                
                let removeMonster2SpellAttack = document.getElementsByClassName('spell2-monster-two');
                removeMonster2SpellAttack[0].classList.add('monster1-dead');
            
                };
                confirmMonstersDead();                 
    }

    spell2AttackMonster1(monster1, spell2) {
        console.log('Casting Spell Two on Monster One');
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints <= 0 && self.enemy2.healthPoints <= 0) {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        
        };        
        this.monster1 = monster1;
        this.spell2 = spell2;
                 
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        <p>You cast ${this.specialty.spell2.name} on the ${this.monster1.name} and cause ${this.specialty.spell2.damage} points of damage.</p>`;
        
        console.log(this.specialty.spell2.damage);
                
        //CHECKING ATTACK INTERACTION
        if (this.monster1.healthPoints - this.specialty.spell2.damage > 0) {        
            this.monster1.healthPoints = this.monster1.healthPoints - this.specialty.spell2.damage;
            let updatedMonsterHP = document.querySelector("#monster-one-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4>`;

            //greying out attack module buttons when pressed

            let greyOutAttackButtons = function() {                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                showMonsterAttackButton.onclick = function() {monster1.monsterAttack(monster1)};
            }
            
            greyOutAttackButtons();
        
        } else if (this.monster1.healthPoints - this.specialty.spell2.damage <= 0 ) {
            this.monster1.healthPoints = 0;
            
            let monsterOneStatus = document.querySelector('#monster-one');
            let defeatMonster1 = document.querySelector('#dialogue');
            monsterOneStatus.innerHTML = `
            <div class="monster" id="monster-one">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 1</legend>
                    <h4 id="monster-one-type">Monster Type: ${this.monster1.name}</h4>
                    <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4> 
                    <h4 id="monster-one-ap">Armor Points: ${this.monster1.armorPoints}</h4>
                    <h4 id="monster-one-damage">Damage: ${this.monster1.damage}</h4>    
                </fieldset>   
            </div>`;
            defeatMonster1.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`;     

            let removingMonster1SpellButton = document.getElementsByClassName('spell2-monster-one');
            removingMonster1SpellButton[0].classList.add('monster1-dead');       

            let removingMonster1Button = document.getElementsByClassName('attack-monster-one');
            removingMonster1Button[0].classList.add('monster1-dead');

            };            
            confirmMonstersDead();
    }

    spell2AttackMonster2(monster2, spell2) {
        console.log('Casting Spell Two on Monster Two');
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints <= 0 && self.enemy2.healthPoints <= 0) {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        
        };        
        this.monster2 = monster2;
        this.spell2 = spell2;
                 
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        <p>You cast ${this.specialty.spell2.name} on the ${this.monster2.name} and cause ${this.specialty.spell2.damage} points of damage.</p>`;
        
        console.log(this.specialty.spell2.damage);
                
        //CHECKING ATTACK INTERACTION
        if (this.monster2.healthPoints - this.specialty.spell2.damage > 0) {        
            this.monster2.healthPoints = this.monster2.healthPoints - this.specialty.spell2.damage;
            let updatedMonsterHP = document.querySelector("#monster-two-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4>`;

            //greying out attack module buttons when pressed

            let greyOutAttackButtons = function() {                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                showMonsterAttackButton.onclick = function() {monster2.monsterAttack(monster2)};
            }

            greyOutAttackButtons();
        
        } else if (this.monster2.healthPoints - this.specialty.spell2.damage <= 0 ) {
            this.monster2.healthPoints = 0;
            
            let monsterTwoStatus = document.querySelector('#monster-two');
            let defeatMonster2 = document.querySelector('#dialogue');
            monsterTwoStatus.innerHTML = `
            <div class="monster" id="monster-two">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 2</legend>
                    <h4 id="monster-two-type">Monster Type: ${this.monster2.name}</h4>
                    <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4> 
                    <h4 id="monster-two-ap">Armor Points: ${this.monster2.armorPoints}</h4>
                    <h4 id="monster-two-damage">Damage: ${this.monster2.damage}</h4>   
                </fieldset>    
            </div>`;
            defeatMonster2.innerHTML = `
            <p>Congratulations, you defeated the Monster 2!</p>`;    

            let removingMonster2SpellButton = document.getElementsByClassName('spell2-monster-two');
            removingMonster2SpellButton[0].classList.add('monster1-dead');
            
            let removingMonster2Button = document.getElementsByClassName('attack-monster-two');
            removingMonster2Button[0].classList.add('monster1-dead');
            };                        
            confirmMonstersDead();
    }

    spell1Heal() {
        console.log('Casting Heal Spell');        
        let healedCharHP = document.querySelector("#char-hp");
        finalCharacter.specialty.healthPoints += finalCharacter.specialty.spell1.healing;
        if (finalCharacter.specialty.healthPoints >= finalCharacter.specialty.maxHealthPoints) {
            finalCharacter.specialty.healthPoints = finalCharacter.specialty.maxHealthPoints;
            }   
        healedCharHP.innerHTML = `
        <h4 id='char-hp' class='char-info-label'>Health Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span></h4>
        `;
        
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        <p>You cast ${finalCharacter.specialty.spell1.name} and heal ${finalCharacter.specialty.spell1.healing} health points.</p>`;

        let castedHealSpell = document.querySelector('.spell1-heal');       

        //WORKS, BUT NEED TO IMPLEMENT ALERT WINDOW WHEN MONSTERS ATTACK AND NOT RESET FIGHT MODULE
        castedHealSpell.style.visibility = "hidden"
        setTimeout(function() {
            castedHealSpell.style.visibility = "visible"}, 60000);
        }

    //***TRYING TO CREATE AREA ATTACK SPELL
    areaAttackSpell(monster1, monster2, spell3) {
        console.log('Casting Area Attack Spell');
        
        let self = this;
        this.monster1 = monster1;
        this.monster2 = monster2;
        this.spell3 = spell3;

        let clearDialogue = document.querySelector('#dialogue');
        clearDialogue.innerHTML = "";

        let monstersGroup = [monster1, monster2];
        monstersGroup.forEach(this.areaSpell);



        //checking if both monsters are dead
   
        let confirmMonstersDead = () => {      
            console.log(self.enemy1.healthPoints);
            console.log(self.enemy2.healthPoints);
            if (self.enemy1.healthPoints <= 0 && self.enemy2.healthPoints <= 0) {
            console.log('both dead');
        
            self.enemy1.healthPoints = 0;
            self.enemy2.healthPoints = 0;

            let updatedMonster1HP = document.querySelector("#monster-one-hp");
            updatedMonster1HP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${self.enemy1.healthPoints}</h4>`;

            let updatedMonster2HP = document.querySelector("#monster-two-hp");
            updatedMonster2HP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${self.enemy2.healthPoints}</h4>`;



            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        
         };        

            if (self.enemy1.healthPoints <= 0) {
                self.enemy1.healthPoints = 0;
            };

            if (self.enemy2.healthPoints <= 0) {
                self.enemy2.healthPoints = 0;
            };


            let updatedMonster1HP = document.querySelector("#monster-one-hp");
            updatedMonster1HP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${self.enemy1.healthPoints}</h4>`;

            let updatedMonster2HP = document.querySelector("#monster-two-hp");
            updatedMonster2HP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${self.enemy2.healthPoints}</h4>`;

            let greyOutAttackButtons = function() {
                console.log('greyOutAttackButtons arguments');                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                showMonsterAttackButton.onclick = function() {
                    if (monster1.healthPoints > 0) {
                        monster1.monsterAttack(monster1)
                    
                    } else {
                        monster2.monsterAttack(monster2);
                    };
            }
        }
            
            greyOutAttackButtons();        
    
            confirmMonstersDead();
    }
    
    areaSpell = function(item) {
        
        let self = this;
        let damage = finalCharacter.specialty.spell3.damage;
        
        item.healthPoints -= damage;

        if (item.healthPoints <= 0) {
            let attackDialogue = document.querySelector("#dialogue");
        
            attackDialogue.innerHTML += `
            <p>${item.name} is dead.</p>`;

            

        } else {
            //item.healthPoints -= damage;
            console.log(`You attacked ${item.name} for ${damage} points of damage`);

            let attackDialogue = document.querySelector("#dialogue");
        
            attackDialogue.innerHTML += `
            <p>You cast ${finalCharacter.specialty.spell3.name} on the ${item.name} and cause ${finalCharacter.specialty.spell3.damage} points of damage.</p>`;

        }
        
    }

//END OF AREA ATTACK SPELL




    // transferToMonsterAttack() {
    //     self.monster1.monsterAttack(monster1, weapon);
    // }    
};

