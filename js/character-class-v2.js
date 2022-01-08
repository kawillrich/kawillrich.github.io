//import other js modules to access

import { finalCharacter, continueChapterThreeFour, render } from './js_v14-3.js';
import Weapon from './weapon-class-v2.js';
import { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes, obsidianPlateMail } from './armor-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, masterArcher, highMage, dragonWarrior } from './specialty-class-v2.js';
//import { noAchievements, killedFarmWolves, spokeToRaynard } from './achievements-v1.js';

//exports Character class for other module access

export default class Character {
    constructor(name, specialty, armor, weapon, inventory1, inventory2, inventory3, enchantedItem, achievements, characterImage) {
        this.name = name;
        this.specialty = specialty;
        this.armor = armor;
        this.weapon = weapon;
        this.inventory1 = inventory1;
        this.inventory2 = inventory2;
        this.inventory3 = inventory3;
        this.enchantedItem = enchantedItem;
        this.achievements = achievements;
        this.characterImage = characterImage;
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
                <h4 id='char-armor' class='char-info-label'>Armor: <div class="armor-tooltip" class="character-display-info">${finalCharacter.armor.name}<span class="armor-tooltiptext">Armor Class: ${finalCharacter.armor.armorPoints}</span></div></h4> 
                <h4 id='char-weapon' class='char-info-label'>Weapon: <div class="weapon-tooltip" class="character-display-info">${finalCharacter.weapon.name}<span class="weapon-tooltiptext">Damage: ${finalCharacter.weapon.damage}</span></div></h4>
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
        </div id="canvas-area">
          <fieldset class= 'canvas-info-module-player'>
            <legend class='canvas-dashboard'>Arena</legend>
            <canvas id="canvas2" height="200" width="200"></canvas>
           </fieldset>
        </div>             
            `; 
    }
    
    //confirms to attack monsters and populates monster-info section

    confirmAttack(monsterOne, monsterTwo) {
        console.log(monsterOne);
        console.log(monsterTwo);
        //this.enemy1 = monsterOne;
        //this.enemy2 = monsterTwo;        
       
//----------------TRYING TO EITHER REMOVE OR CHANGE COLOR OF ATTACK BUTTON IF MONSTER1 IS DEAD-------------

        if (monsterOne.healthPoints <= 0) {
            let removeMonsterOneAttackButton = document.querySelector('.attack-monster-one');
            removeMonsterOneAttackButton.classList.add('monster1-dead');
            let removeMonsterOneSpellAttack = document.querySelector('.spell2-monster-one');
            removeMonsterOneSpellAttack.classList.add('monster1-dead');
        } 
        
        if (monsterTwo.healthPoints <= 0) {
            let removeMonsterTwoAttackButton = document.querySelector('.attack-monster-two');
            removeMonsterTwoAttackButton.classList.add('monster1-dead');
            let removeMonsterTwoSpellAttack = document.querySelector('.spell2-monster-two');
            removeMonsterTwoSpellAttack.classList.add('monster1-dead');
        }
        
        if (monsterOne.healthPoints <= 0 && monsterTwo.healthPoints <= 0) {
            let removeAreaAttackSpellButton = document.querySelector('.area-attack');
            removeAreaAttackSpellButton.classList.add('monster1-dead');
        }
        
        ; 
//----------------------------------------------------------------------------------------------------------
        let monsterInfo = document.querySelector('#monster-info');
        monsterInfo.innerHTML = `
        <div class="monster" id="monster-one">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 1</legend>
                <h4 id="monster-one-type">Monster Type: ${monsterOne.name}</h4>
                <h4 id="monster-one-hp">Health Points: ${monsterOne.healthPoints}</h4> 
                <h4 id="monster-one-ap">Armor Points: ${monsterOne.armorPoints}</h4>
                <h4 id="monster-one-damage">Damage: ${monsterOne.damage}</h4>     
            </fieldset>  
        </div>
        <div class="monster" id="monster-two">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 2</legend>
                <h4 id="monster-two-type">Monster Type: ${monsterTwo.name}</h4>
                <h4 id="monster-two-hp">Health Points: ${monsterTwo.healthPoints}</h4> 
                <h4 id="monster-two-ap">Armor Points: ${monsterTwo.armorPoints}</h4>
                <h4 id="monster-two-damage">Damage: ${monsterTwo.damage}</h4> 
            </fieldset>        
        </div>

        </div id="canvas-area-monster">
          <fieldset class= 'canvas-info-module-monster'>
            <legend class='canvas-dashboard'>Arena</legend>
            <canvas id="canvas3" height="200" width="200"></canvas>
           </fieldset>
        </div>
        `;     
    };    

    //attacking monster 1

    weaponAttackMonster1(monster1, monster2, weapon, continueNextChapter) {
        console.log("Logging NEXT CHAPTER" + continueNextChapter)
        console.log(monster1);
        console.log(weapon);
        console.log(monster2);
        let self = this;        

        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueNextChapter, false);
            };            
        
        };        
        //this.monster1 = monster1;
        //this.weapon = weapon;
                 
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        <p>You attack the ${monster1.name} with your ${this.weapon.name} and cause ${this.weapon.damage} points of damage.</p>`;       
       
        //CHECKING ATTACK INTERACTION
        if (monster1.healthPoints - this.weapon.damage > 0) {        
            monster1.healthPoints = monster1.healthPoints - this.weapon.damage;
            let updatedMonsterHP = document.querySelector("#monster-one-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${monster1.healthPoints}</h4>`;
            

//ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
            let greyOutAttackButtons = function() {                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                
                showMonsterAttackButton.onclick = function() {monster1.monsterAttack(monster1, monster2)};
            }            
            greyOutAttackButtons();

//END
        
        } else if (monster1.healthPoints - this.weapon.damage <= 0) {
            monster1.healthPoints = 0;
            
            let monsterOneStatus = document.querySelector('#monster-one');
            let defeatMonster1 = document.querySelector('#dialogue');
            monsterOneStatus.innerHTML = `
            <div class="monster" id="monster-one">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 1</legend>
                    <h4 id="monster-one-type">Monster Type: ${monster1.name}</h4>
                    <h4 id="monster-one-hp">Health Points: ${monster1.healthPoints}</h4> 
                    <h4 id="monster-one-ap">Armor Points: ${monster1.armorPoints}</h4>
                    <h4 id="monster-one-damage">Damage: ${monster1.damage}</h4>    
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

    weaponAttackMonster2(monster1, monster2, weapon, continueNextChapter) {
        console.log("Logging NEXT CHAPTER" + continueNextChapter)
        console.log(monster1);
        console.log(weapon);
        console.log(monster2);
        let self = this;
        let confirmMonstersDead = (enemy2) => {            
            //console.log(self.enemy1.name);
                    
            if (monster2.healthPoints <= 0 && monster1.healthPoints <= 0) {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;
            
            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueNextChapter, false);
            };            
        };
        
        // this.monster2 = monster2;
        // this.weapon = weapon;
        // let enemy2X = this.enemy2;


        let attackDialogue = document.getElementById("dialogue");
        attackDialogue.innerHTML = `
        <p>You attack the ${monster2.name} with your ${this.weapon.name} and cause ${this.weapon.damage} points of damage.</p>`;
        
        //CHECKING ATTACK INTERACTION
        if (monster2.healthPoints - this.weapon.damage > 0) {        
            monster2.healthPoints = monster2.healthPoints - this.weapon.damage;
            let updatedMonsterHP = document.querySelector("#monster-two-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${monster2.healthPoints}</h4>`;

            //greying out attack module buttons when pressed

            let greyOutAttackButtons = function() {                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                showMonsterAttackButton.onclick = function() {monster2.monsterAttack(monster1, monster2)};
            }
            
            greyOutAttackButtons();
            
            } else if (monster2.healthPoints - this.weapon.damage <= 0) {
                monster2.healthPoints = 0;
                
                let monsterTwoStatus = document.querySelector('#monster-two');
                let defeatMonster2 = document.querySelector('#dialogue');
                monsterTwoStatus.innerHTML = `
                <div class="monster" id="monster-two">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 2</legend>
                        <h4 id="monster-two-type">Monster Type: ${monster2.name}</h4>
                        <h4 id="monster-two-hp">Health Points: ${monster2.healthPoints}</h4> 
                        <h4 id="monster-two-ap">Armor Points: ${monster2.armorPoints}</h4>
                        <h4 id="monster-two-damage">Damage: ${monster2.damage}</h4>   
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

    spell2AttackMonster1(monster1, monster2, spell2, continueNextChapter) {
        console.log('Casting Spell Two on Monster One');
        console.log(monster1);
        console.log(monster2);
        console.log(spell2);
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueNextChapter, false);
            };            
        
        };        
        //this.monster1 = monster1;
        //this.spell2 = spell2;
                 
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        <p>You cast ${this.specialty.spell2.name} on the ${monster1.name} and cause ${this.specialty.spell2.damage} points of damage.</p>`;
        
        console.log(this.specialty.spell2.damage);
                
        //CHECKING ATTACK INTERACTION
        if (monster1.healthPoints - this.specialty.spell2.damage > 0) {        
            monster1.healthPoints = monster1.healthPoints - this.specialty.spell2.damage;
            let updatedMonsterHP = document.querySelector("#monster-one-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${monster1.healthPoints}</h4>`;

            //greying out attack module buttons when pressed

            let greyOutAttackButtons = function() {                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                showMonsterAttackButton.onclick = function() {monster1.monsterAttack(monster1, monster2)};
            }
            
            greyOutAttackButtons();
        
        } else if (monster1.healthPoints - this.specialty.spell2.damage <= 0 ) {
            monster1.healthPoints = 0;
            
            let monsterOneStatus = document.querySelector('#monster-one');
            let defeatMonster1 = document.querySelector('#dialogue');
            monsterOneStatus.innerHTML = `
            <div class="monster" id="monster-one">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 1</legend>
                    <h4 id="monster-one-type">Monster Type: ${monster1.name}</h4>
                    <h4 id="monster-one-hp">Health Points: ${monster1.healthPoints}</h4> 
                    <h4 id="monster-one-ap">Armor Points: ${monster1.armorPoints}</h4>
                    <h4 id="monster-one-damage">Damage: ${monster1.damage}</h4>    
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

    spell2AttackMonster2(monster1, monster2, spell2, continueNextChapter) {
        console.log('Casting Spell Two on Monster Two');
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueNextChapter, false);
            };            
        
        };        
        //this.monster2 = monster2;
        //this.spell2 = spell2;
                 
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        <p>You cast ${this.specialty.spell2.name} on the ${monster2.name} and cause ${this.specialty.spell2.damage} points of damage.</p>`;
        
        console.log(this.specialty.spell2.damage);
                
        //CHECKING ATTACK INTERACTION
        if (monster2.healthPoints - this.specialty.spell2.damage > 0) {        
            monster2.healthPoints = monster2.healthPoints - this.specialty.spell2.damage;
            let updatedMonsterHP = document.querySelector("#monster-two-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${monster2.healthPoints}</h4>`;

            //greying out attack module buttons when pressed

            let greyOutAttackButtons = function() {                
                
                let attackButtons = document.querySelectorAll('.attack');
                
                for (let attackButton of attackButtons) {
                    attackButton.classList.add('hidden');
                }                

                let showMonsterAttackButton = document.querySelector('#monster-attack');
                showMonsterAttackButton.classList.remove('hidden');
                
                showMonsterAttackButton.onclick = function() {monster2.monsterAttack(monster1, monster2)};
            }

            greyOutAttackButtons();
        
        } else if (monster2.healthPoints - this.specialty.spell2.damage <= 0 ) {
            monster2.healthPoints = 0;
            
            let monsterTwoStatus = document.querySelector('#monster-two');
            let defeatMonster2 = document.querySelector('#dialogue');
            monsterTwoStatus.innerHTML = `
            <div class="monster" id="monster-two">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 2</legend>
                    <h4 id="monster-two-type">Monster Type: ${monster2.name}</h4>
                    <h4 id="monster-two-hp">Health Points: ${monster2.healthPoints}</h4> 
                    <h4 id="monster-two-ap">Armor Points: ${monster2.armorPoints}</h4>
                    <h4 id="monster-two-damage">Damage: ${monster2.damage}</h4>   
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
    areaAttackSpell(monster1, monster2, spell3, continueNextChapter) {
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
            console.log(monster1.healthPoints);
            console.log(monster2.healthPoints);
            
            if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
            console.log('both dead');
        
            monster1.healthPoints = 0;
            monster2.healthPoints = 0;

            let updatedMonster1HP = document.querySelector("#monster-one-hp");
            updatedMonster1HP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${monster1.healthPoints}</h4>`;

            let updatedMonster2HP = document.querySelector("#monster-two-hp");
            updatedMonster2HP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${monster2.healthPoints}</h4>`;



            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueNextChapter, false);
            };            
        
         };        
         console.log(monster1);
         console.log(monster2);
            if (monster1.healthPoints <= 0) {
                monster1.healthPoints = 0;
            };

            if (monster2.healthPoints <= 0) {
                monster2.healthPoints = 0;
            };


            let updatedMonster1HP = document.querySelector("#monster-one-hp");
            updatedMonster1HP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${monster1.healthPoints}</h4>`;

            let updatedMonster2HP = document.querySelector("#monster-two-hp");
            updatedMonster2HP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${monster2.healthPoints}</h4>`;

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
                        monster1.monsterAttack(monster1, monster2)
                    
                    } else {
                        monster2.monsterAttack(monster1, monster2);
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

