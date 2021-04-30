import { finalCharacter, continueChapterThreeFour } from './js_v14-3.js';
import Weapon from './weapon-class-v2.js';
import { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes } from './armor-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, masterArcher, highMage } from './specialty-class-v2.js';

export default class Character {
    constructor(name, specialty, armor, weapon) {
        this.name = name;
        this.specialty = specialty;
        this.armor = armor;
        this.weapon = weapon;
    };

    characterUpdate() {
        let characterInfo =  document.querySelector("#character-info");
        characterInfo.innerHTML = `
        <h4>Name: ${this.name}</h4>
        <h4>Specialty: ${this.specialty.name}</h4>
        <h4>Health Points: ${this.specialty.healthPoints}</h4> 
        <h4>Armor: ${this.armor.name}</h4> 
        <h4>Armor Points: ${this.armor.armorPoints}</h4>
        <h4>Weapon: ${this.weapon.name}</h4>
        <h4>Damage: ${this.weapon.damage}</h4>
        <h4>Spell 1: ${this.specialty.spell1.name}</h4>
        <h4>Spell 2: ${this.specialty.spell2.name}</h4>`; 
    }
    
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

    weaponAttackMonster1(monster1, weapon) {
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
           

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
                 
                      
            //ENDING CHECK
    }

    //NEED TO FIND A WAY TO CHECK IF BOTH MONSTER 1 AND MONSTER 2 ARE DEAD...MAYBE IN JS FILE INSTEAD OF THE CLASS FILE
    //DO NOT DELETE

    // confirmMonstersDead() {
    //     let monster2DeadHP = this.monster2.healthPoints;
    //     this.monster1HP = monster1HP;
    //     this.monster2HP = monster2HP;
       
    //     console.log(`${this.monster1HP}`);  
    //     console.log(`${this.monster2Dead.healthPoints}`);
    //     if (this.monster1HP === 'Dead' && this.monster2Dead.healthPoints === 'Dead') {
    //         console.log('both dead');
    //         let defeatedMonsters = document.querySelector('#dialogue');
    //         let removeFightModule = document.querySelector('#fight-module');
            
    //         removeFightModule.innerHTML = `<p>You won!</p>`;
    //         defeatedMonsters.innerHTML = `
    //         <p>Congratulations, you defeated the monster(s)!</p>
    //         <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
            
            
            
            
    //        //var removeMonstersTurnButton = document.querySelector('#attack-player');
    //         // removeMonstersTurnButton.remove();
    //         var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
    //         startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
    //         };            
    // };
    testingOutput () {
        console.log("Testing cross module import");
    }
};

