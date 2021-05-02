//import other js modules to access

import { finalCharacter, continueChapterThreeFour } from './js_v14-3.js';
import Weapon from './weapon-class-v2.js';
import { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes } from './armor-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, masterArcher, highMage } from './specialty-class-v2.js';

//exports Character class for other module access

export default class Character {
    constructor(name, specialty, armor, weapon) {
        this.name = name;
        this.specialty = specialty;
        this.armor = armor;
        this.weapon = weapon;
    };

    //updates & initiates Character creation

    characterUpdate() {
        let characterInfo =  document.querySelector("#character-info");
        characterInfo.innerHTML = `
        <h4 id='char-name'>Name: <span class="character-display-info">${this.name}</span></h4>
        <h4 id='char-specialty'>Specialty <span class="character-display-info">: ${this.specialty.name}</span></h4>
        <h4 id='char-hp'>Health Points:  <span class="character-display-info">${this.specialty.healthPoints}</span></h4> 
        <h4 id='char-armor'>Armor:  <span class="character-display-info">${this.armor.name}</span></h4> 
        <h4 id='char-armor-points'>Armor Points:  <span class="character-display-info">${this.armor.armorPoints}</span></h4>
        <h4 id='char-weapon'>Weapon:  <span class="character-display-info">${this.weapon.name}</span></h4>
        <h4 id='char-damage'>Damage:  <span class="character-display-info">${this.weapon.damage}</span></h4>
        <h4 id='char-spell1'>Spell 1:  <span class="character-display-info">${this.specialty.spell1.name}</span></h4>
        <h4 id='char-spell2'>Spell 2:  <span class="character-display-info">${this.specialty.spell2.name}</span></h4>`; 
    }
    
    //confirms to attack monsters and populates monster-info section

    confirmAttack(enemy1, enemy2) {
        this.enemy1 = enemy1;
        this.enemy2 = enemy2;
        
        let fightMonster = document.querySelector('#dialogue');
        fightMonster.innerHTML = `<p>You Attack!</p>`;
    
        let fightModule = document.querySelector('#fight-module');
        fightModule.innerHTML = `
        <div class="attack-buttons">
            <input type="submit" class="attack-monster-one" value="Weapon Attack Enemy 1">
            <input type="submit" class="attack-monster-two" value="Weapon Attack Enemy 2"><br>
            <input type="submit" class="spell2-monster-one" value="Spells Attack Enemy 1">
            <input type="submit" class="spell2-monster-two" value="Spells Attack Enemy 2"><br>
            <input type="submit" class="spell1-heal" value="Cast Heal Spell"><br>
        </div>
        `;
    
        let monsterInfo = document.querySelector('#monster-info');
        monsterInfo.innerHTML = `
        <div class="monster" id="monster-one">Monster 1:
            <h4 id="monster-one-type">Monster Type: ${enemy1.name}</h4>
            <h4 id="monster-one-hp">Health Points: ${enemy1.healthPoints}</h4> 
            <h4 id="monster-one-ap">Armor Points: ${enemy1.armorPoints}</h4>
            <h4 id="monster-one-damage">Damage: ${enemy1.damage}</h4>       
        </div>
        <div class="monster" id="monster-two">Monster 2:
            <h4 id="monster-two-type">Monster Type: ${enemy2.name}</h4>
            <h4 id="monster-two-hp">Health Points: ${enemy2.healthPoints}</h4> 
            <h4 id="monster-two-ap">Armor Points: ${enemy2.armorPoints}</h4>
            <h4 id="monster-two-damage">Damage: ${enemy2.damage}</h4>       
        </div>
        `;     
    };    

    //attacking monster 1

    weaponAttackMonster1(monster1, weapon) {
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints === 'Dead' && self.enemy2.healthPoints === 'Dead') {
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
        You attack the ${this.monster1.name} with your ${this.weapon.name} and cause ${this.weapon.damage} points of damage.`;
        
        console.log(this.weapon.damage);
                
        //CHECKING ATTACK INTERACTION
        if (this.monster1.healthPoints - this.weapon.damage > 0) {        
            this.monster1.healthPoints = this.monster1.healthPoints - this.weapon.damage;
            let updatedMonsterHP = document.querySelector("#monster-one-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4>`;
            self.monster1.monsterAttack.apply(null, arguments);
        
        } else if (this.monster1.healthPoints - this.weapon.damage <= 0 || this.monster1.healthPoints === 'Dead') {
            this.monster1.healthPoints = 'Dead';
            
            let monsterTwoStatus = document.querySelector('#monster-one');
            let defeatMonster2 = document.querySelector('#dialogue');
            monsterTwoStatus.innerHTML = `
            <div class="monster" id="monster-one">Monster 1:
            <h4 id="monster-one-type">Monster Type: ${this.monster1.name}</h4>
            <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4> 
            <h4 id="monster-one-ap">Armor Points: ${this.monster1.armorPoints}</h4>
            <h4 id="monster-one-damage">Damage: ${this.monster1.damage}</h4>       
            </div>`;
            defeatMonster2.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`;            
            };
            let monster1DeadHP = this.monster1.healthPoints;            
            confirmMonstersDead();
            

    };      

    weaponAttackMonster2(monster2, weapon) {
        let self = this;
        let confirmMonstersDead = (enemy2) => {            
            //console.log(self.enemy1.name);
            console.log(self.enemy2.name);
        
            console.log("checking function" + " " + self.enemy2.healthPoints);
        
            if (self.enemy2.healthPoints === 'Dead' && self.enemy1.healthPoints === 'Dead') {
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

        console.log(this.weapon.damage);
                
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        You attack the ${this.monster2.name} with your ${this.weapon.name} and cause ${this.weapon.damage} points of damage.`;
        
        //CHECKING ATTACK INTERACTION
        if (this.monster2.healthPoints - this.weapon.damage > 0) {        
            this.monster2.healthPoints = this.monster2.healthPoints - this.weapon.damage;
            let updatedMonsterHP = document.querySelector("#monster-two-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4>`;
            self.monster2.monsterAttack.apply(null, arguments);
            
            } else if (this.monster2.healthPoints - this.weapon.damage <= 0 || this.monster2.healthPoints === 'Dead') {
                this.monster2.healthPoints = 'Dead';
                
                let monsterTwoStatus = document.querySelector('#monster-two');
                let defeatMonster2 = document.querySelector('#dialogue');
                monsterTwoStatus.innerHTML = `
                <div class="monster" id="monster-two">Monster 1:
                <h4 id="monster-two-type">Monster Type: ${this.monster2.name}</h4>
                <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4> 
                <h4 id="monster-two-ap">Armor Points: ${this.monster2.armorPoints}</h4>
                <h4 id="monster-two-damage">Damage: ${this.monster2.damage}</h4>       
                </div>`;
                defeatMonster2.innerHTML = `
                <p>Congratulations, you defeated the Monster 2!</p>`;            
                };
                confirmMonstersDead();                 
    }

    spell2AttackMonster1(monster1, spell2) {
        console.log('Casting Spell Two on Monster One');
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints === 'Dead' && self.enemy2.healthPoints === 'Dead') {
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
        You cast ${this.specialty.spell2.name} on the ${this.monster1.name} and cause ${this.specialty.spell2.damage} points of damage.`;
        
        console.log(this.specialty.spell2.damage);
                
        //CHECKING ATTACK INTERACTION
        if (this.monster1.healthPoints - this.specialty.spell2.damage > 0) {        
            this.monster1.healthPoints = this.monster1.healthPoints - this.specialty.spell2.damage;
            let updatedMonsterHP = document.querySelector("#monster-one-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4>`;
            self.monster1.monsterAttack.apply(null, arguments);
        
        } else if (this.monster1.healthPoints - this.specialty.spell2.damage <= 0 || this.monster1.healthPoints === 'Dead') {
            this.monster1.healthPoints = 'Dead';
            
            let monsterOneStatus = document.querySelector('#monster-one');
            let defeatMonster1 = document.querySelector('#dialogue');
            monsterOneStatus.innerHTML = `
            <div class="monster" id="monster-one">Monster 1:
            <h4 id="monster-one-type">Monster Type: ${this.monster1.name}</h4>
            <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4> 
            <h4 id="monster-one-ap">Armor Points: ${this.monster1.armorPoints}</h4>
            <h4 id="monster-one-damage">Damage: ${this.monster1.damage}</h4>       
            </div>`;
            defeatMonster1.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`;            
            };            
            confirmMonstersDead();
    }

    spell2AttackMonster2(monster2, spell2) {
        console.log('Casting Spell Two on Monster Two');
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints === 'Dead' && self.enemy2.healthPoints === 'Dead') {
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
        You cast ${this.specialty.spell2.name} on the ${this.monster2.name} and cause ${this.specialty.spell2.damage} points of damage.`;
        
        console.log(this.specialty.spell2.damage);
                
        //CHECKING ATTACK INTERACTION
        if (this.monster2.healthPoints - this.specialty.spell2.damage > 0) {        
            this.monster2.healthPoints = this.monster2.healthPoints - this.specialty.spell2.damage;
            let updatedMonsterHP = document.querySelector("#monster-two-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4>`;
            self.monster2.monsterAttack.apply(null, arguments);
        
        } else if (this.monster2.healthPoints - this.specialty.spell2.damage <= 0 || this.monster2.healthPoints === 'Dead') {
            this.monster2.healthPoints = 'Dead';
            
            let monsterTwoStatus = document.querySelector('#monster-two');
            let defeatMonster2 = document.querySelector('#dialogue');
            monsterTwoStatus.innerHTML = `
            <div class="monster" id="monster-two">Monster 1:
            <h4 id="monster-two-type">Monster Type: ${this.monster2.name}</h4>
            <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4> 
            <h4 id="monster-two-ap">Armor Points: ${this.monster2.armorPoints}</h4>
            <h4 id="monster-two-damage">Damage: ${this.monster2.damage}</h4>       
            </div>`;
            defeatMonster2.innerHTML = `
            <p>Congratulations, you defeated the Monster 2!</p>`;            
            };                        
            confirmMonstersDead();
    }

    spell1Heal() {
        console.log('Casting Heal Spell');
        console.log(finalCharacter.specialty.spell1.healing)
        let healedCharHP = document.querySelector("#char-hp");
        finalCharacter.specialty.healthPoints += finalCharacter.specialty.spell1.healing;
        if (finalCharacter.specialty.healthPoints >= finalCharacter.specialty.maxHealthPoints) {
            finalCharacter.specialty.healthPoints = finalCharacter.specialty.maxHealthPoints;
            }   
        healedCharHP.innerHTML = `
        <h4 id='char-hp'>Health Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span></h4>
        `;
        
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        You cast ${finalCharacter.specialty.spell1.name} and heal ${finalCharacter.specialty.spell1.healing} health points.`;

        let castedHealSpell = document.querySelector('.spell1-heal');
        castedHealSpell.remove();

        }

    

    

};

