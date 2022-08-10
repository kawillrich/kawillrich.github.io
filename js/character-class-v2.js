//import other js modules to access

import {
  finalCharacter,
  continueChapterThreeFour,
  render,
} from "./js_v14-3.js";
import Weapon from "./weapon-class-v2.js";
import {
  normalSword,
  shortBow,
  silverSword,
  twoHandedBroadSword,
  longBow,
  ebonyBow,
  mahoganyStaff,
  gemStaff,
  noWeapon,
  obsidianSword,
  woodenClub,
  dagger,
  silverDagger,
  battleAxe,
  handAxe,
  crossBow,
  shortSword,
  mace,
  javelin,
  poleArm,
  sling,
  spear,
  warHammer,
} from "./weapon-class-v2.js";
import Armor from "./armor-class-v2.js";
import {
  chainMail,
  leatherArmor,
  robes,
  noArmor,
  scaleMail,
  plateMail,
  bandedMail,
  obsidianPlateMail,
} from "./armor-class-v2.js";
import Specialty from "./specialty-class-v2.js";
import {
  noSpecialty,
  warrior,
  highMage,
  dragonWarrior,
  elf,
  dwarf,
  halfling,
  cleric,
  thief,
} from "./specialty-class-v2.js";
import {
  fighterVeteran,
  fighterWarrior,
  fighterSwordmaster,
} from "./character-class-levels/fighter-level-class.js";
import {
  veteranMedium,
  warriorSeer,
  swordMasterConjurer,
} from "./character-class-levels/elf-level-class.js";
import {
  apprentice,
  footpad,
  robber,
} from "./character-class-levels/thief-level-class.js";
import { dragonWarriorVeteran } from "./character-class-levels/dragon-warrior-level-class.js";
import {
  continualLight,
  detectEvil,
  invisibility,
  esp,
  knock,
  levitate,
  locateObject,
  mirrorImage,
  phantasmalForce,
  web,
  wizardLock,
  detectInvisible,
} from "./mage-spells/mage-level-two-spells-class.js";
import {
  charmPerson,
  detectMagic,
  floatingDisc,
  holdPortal,
  light,
  magicMissile,
  protectionFromEvil,
  readLanguages,
  shield,
  sleep,
  ventriloquism,
  readMagic,
} from "./mage-spells/mage-level-one-spells-class.js";
import {
  smallWolf,
  wolf1,
  wolf2,
  goblin,
  goblin1,
  goblin2,
  noMonster,
  fireBeetle,
  hobGoblin,
  bugBear,
  kobold,
} from "./monster-class-v2.js";

//import { noAchievements, killedFarmWolves, spokeToRaynard } from './achievements-v1.js';

//==============================================end imports===============================================//

//exports Character class for other module access

export default class Character {
  constructor(
    name,
    specialty,
    armor,
    weapon,
    inventory1,
    inventory2,
    inventory3,
    enchantedItem,
    achievements,
    characterImage,
    treasure,
    hitRollTable
  ) {
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
    this.treasure = treasure;
    this.hitRollTable = [
      [9, 10],
      [8, 11],
      [7, 12],
      [6, 13],
      [5, 14],
      [4, 15],
      [3, 16], 
      [2, 17],
      [1, 18],
      [0, 19],
      [-1, 20]
    ];
  }

  //updates & initiates Character creation

  characterUpdate() {
    let strengthPlusAdjustment;
    let intelligencePlusAdjustment;
    let wisdomPlusAdjustment;
    let dexterityPlusAdjustment;
    let constitutionPlusAdjustment;
    let charismaPlusAdjustment;

    if (finalCharacter.attributes[0].adjustment > 0) {
      strengthPlusAdjustment = `+${finalCharacter.attributes[0].adjustment}`;
    } else {
      strengthPlusAdjustment = finalCharacter.attributes[0].adjustment;
    }

    if (finalCharacter.attributes[1].adjustment > 0) {
      intelligencePlusAdjustment = `+${finalCharacter.attributes[1].adjustment}`;
    } else {
      intelligencePlusAdjustment = finalCharacter.attributes[1].adjustment;
    }

    if (finalCharacter.attributes[2].adjustment > 0) {
      wisdomPlusAdjustment = `+${finalCharacter.attributes[2].adjustment}`;
    } else {
      wisdomPlusAdjustment = finalCharacter.attributes[2].adjustment;
    }

    if (finalCharacter.attributes[3].adjustment > 0) {
      dexterityPlusAdjustment = `+${finalCharacter.attributes[3].adjustment}`;
    } else {
      dexterityPlusAdjustment = finalCharacter.attributes[3].adjustment;
    }

    if (finalCharacter.attributes[4].adjustment > 0) {
      constitutionPlusAdjustment = `+${finalCharacter.attributes[4].adjustment}`;
    } else {
      constitutionPlusAdjustment = finalCharacter.attributes[4].adjustment;
    }

    if (finalCharacter.attributes[5].adjustment > 0) {
      charismaPlusAdjustment = `+${finalCharacter.attributes[5].adjustment}`;
    } else {
      charismaPlusAdjustment = finalCharacter.attributes[5].adjustment;
    }

    let characterInfo = document.querySelector("#character-info");
    // let hpProgressBar = document.querySelector.("#
    characterInfo.innerHTML = `
        <div id='character-stats'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Player Data</legend>
                <h4 id='char-name' class='char-info-label'>Name: <span class="character-display-info">${
                  this.name
                }</span></h4>
                <h4 id='char-specialty' class='char-info-label'>Specialty <span class="character-display-info">: ${
                  this.specialty.name
                }</span></h4>
                <h4 id='char-hp' class='char-info-label'>Hit Points: <span class="character-display-info">${
                  finalCharacter.specialty.healthPoints +
                  finalCharacter.attributes[4].adjustment
                }</span><span id='hpBar'><progress id='hp-prog-bar' max="${
      finalCharacter.specialty.maxHealthPoints +
      finalCharacter.attributes[4].adjustment
    }" value="${
      finalCharacter.specialty.healthPoints +
      finalCharacter.attributes[4].adjustment
    }"></progress>${
      finalCharacter.specialty.healthPoints +
      finalCharacter.attributes[4].adjustment
    }/${
      finalCharacter.specialty.maxHealthPoints +
      finalCharacter.attributes[4].adjustment
    }</span></span></h4> 
                <h4 id='char-armor' class='char-info-label'>Armor: <div class="armor-tooltip" class="character-display-info">${
                  finalCharacter.armor.name
                }<span class="armor-tooltiptext">Armor Class: ${
      finalCharacter.armor.armorClass
    }</span></div></h4> 
                <h4 id='char-weapon' class='char-info-label'>Weapon: <div class="weapon-tooltip" class="character-display-info">${
                  finalCharacter.weapon.name
                }<span class="weapon-tooltiptext">Damage: d${
      finalCharacter.weapon.damage
    }</span></div></h4>
                <h4 id='char-spell1' class='char-info-label'>Spell 1:  <span class="character-display-info">${
                  this.specialty.spell1.name
                }</span></h4>
                <h4 id='char-spell2' class='char-info-label'>Spell 2:  <span class="character-display-info">${
                  this.specialty.spell2.name
                }</span></h4>
                <h4 id='char-treasure' class='char-info-label'>Treasure: <span class="character-display-info">${
                  finalCharacter.treasure.gold.quantity
                }</span></h4>
                <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${
                  finalCharacter.specialty.characterExperience
                }</span></h4>
                
                
            </fieldset>
        </div>

        <div id='character-attributes'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Attributes</legend>
                <h4 id='char-strength' class='char-info-label'><span class='character-display-attributes'>Attribute: </span><span class='character-display-attributes-scores'>Score: </span><span class='character-display-attributes-scores-adj'>Adj: </span></h4>
                <h4 id='char-strength' class='char-info-label'><span class='character-display-attributes'>${
                  finalCharacter.attributes[0].name
                }: </span><span class='character-display-attributes-scores'>${
      finalCharacter.attributes[0].score
    }</span><span class='character-display-attributes-scores-adj'>${strengthPlusAdjustment}</span></h4>
                <h4 id='char-intelligence' class='char-info-label'><span class='character-display-attributes'>${
                  finalCharacter.attributes[1].name
                }: </span><span class='character-display-attributes-scores'>${
      finalCharacter.attributes[1].score
    }</span><span class='character-display-attributes-scores-adj'>${intelligencePlusAdjustment}</span></h4>
                <h4 id='char-wisdom' class='char-info-label'><span class='character-display-attributes'>${
                  finalCharacter.attributes[2].name
                }: </span><span class='character-display-attributes-scores'>${
      finalCharacter.attributes[2].score
    }</span><span class='character-display-attributes-scores-adj'>${wisdomPlusAdjustment}</span></h4>
                <h4 id='char-dexterity' class='char-info-label'><span class='character-display-attributes'>${
                  finalCharacter.attributes[3].name
                }: </span><span class='character-display-attributes-scores'>${
      finalCharacter.attributes[3].score
    }</span><span class='character-display-attributes-scores-adj'>${dexterityPlusAdjustment}</span></h4>
                <h4 id='char-constitution' class='char-info-label'><span class='character-display-attributes'>${
                  finalCharacter.attributes[4].name
                }: </span><span class='character-display-attributes-scores'>${
      finalCharacter.attributes[4].score
    }</span><span class='character-display-attributes-scores-adj'>${constitutionPlusAdjustment}</span></h4>
                <h4 id='char-charisma' class='char-info-label'><span class='character-display-attributes'>${
                  finalCharacter.attributes[5].name
                }: </span><span class='character-display-attributes-scores'>${
      finalCharacter.attributes[5].score
    }</span><span class='character-display-attributes-scores-adj'>${charismaPlusAdjustment}</span></h4>
            </fieldset>
        </div>

        </div id="canvas-area">
          <fieldset class= 'canvas-info-module-player'>
            <legend class='canvas-dashboard'>Arena</legend>
            <canvas id="canvas2" height="200" width="200"></canvas>
           </fieldset>
        </div>             
        `;

    // let inventoryStatus = document.querySelector("#normal-equipment-list");
    // inventoryStatus.innerHTML = `<p id="normal-equipment-list"></p>`;

    //populating normal-equipment tab

    for (let i = 0; i < finalCharacter.inventory.length; i++) {
      let updateInventory = document.querySelector("#normal-equipment-list");
      updateInventory.innerHTML += `${finalCharacter.inventory[i].name} <br>`;
    }
  }
  //confirms to attack monsters and populates monster-info section

  confirmAttack(monsterOne, monsterTwo) {
    //----------------TRYING TO EITHER REMOVE OR CHANGE COLOR OF ATTACK BUTTON IF MONSTER1 IS DEAD-------------

    if (monsterOne.healthPoints <= 0) {
      let removeMonsterOneAttackButton = document.querySelector(
        ".attack-monster-one"
      );
      removeMonsterOneAttackButton.classList.add("monster1-dead");
      let removeMonsterOneSpellAttack = document.querySelector(
        ".spell2-monster-one"
      );
      removeMonsterOneSpellAttack.classList.add("monster1-dead");
    }

    if (monsterTwo.healthPoints <= 0) {
      let removeMonsterTwoAttackButton = document.querySelector(
        ".attack-monster-two"
      );
      removeMonsterTwoAttackButton.classList.add("monster1-dead");
      let removeMonsterTwoSpellAttack = document.querySelector(
        ".spell2-monster-two"
      );
      removeMonsterTwoSpellAttack.classList.add("monster1-dead");
    }

    if (monsterOne.healthPoints <= 0 && monsterTwo.healthPoints <= 0) {
      let removeAreaAttackSpellButton = document.querySelector(".area-attack");
      removeAreaAttackSpellButton.classList.add("monster1-dead");
    }

    //----------------------------------------------------------------------------------------------------------
    let monsterInfo = document.querySelector("#monster-info");
    monsterInfo.innerHTML = `
        <div class="monster" id="monster-one">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 1</legend>
                <h4 id="monster-one-type">Monster Type: ${monsterOne.name}</h4>
                <h4 id="monster-one-hp">Hit Points: ${monsterOne.healthPoints}<progress class='monster-hp-prog-bar' max="${monsterOne.startingHealthPoints}" value="${monsterOne.healthPoints}"></progress></h4> 
                <h4 id="monster-one-ap">Armor Class: ${monsterOne.armorClass}</h4>
                <h4 id="monster-one-damage">Damage: ${monsterOne.damage}</h4>     
            </fieldset>  
        </div>
        <div class="monster" id="monster-two">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 2</legend>
                <h4 id="monster-two-type">Monster Type: ${monsterTwo.name}</h4>
                <h4 id="monster-two-hp">Hit Points: ${monsterTwo.healthPoints}<progress class='monster-hp-prog-bar' max="${monsterTwo.startingHealthPoints}" value="${monsterTwo.healthPoints}"></progress></h4> 
                <h4 id="monster-two-ap">Armor Class: ${monsterTwo.armorClass}</h4>
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
  }

  //attacking monster 1

  checkLevelUp() {
    if (finalCharacter.specialty.characterLevel.level.maxXP) {
      if (
        finalCharacter.specialty.characterExperience >
        finalCharacter.specialty.characterLevel.level.maxXP
      ) {
        alert("Congratulations, you have achieved the next level!");
      }
    } else {
      return;
    }
  }

  weaponAttackMonster1(monster1, monster2, weapon, continueNextChapter) {
    let self = this;

    let confirmMonstersDead = (enemy1) => {
      //checking if both monsters are dead

      if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
        // console.log('both dead');

        let defeatedMonsters = document.querySelector("#dialogue");
        let removeFightModule = document.querySelector("#fight-module");

        finalCharacter.specialty.characterExperience +=
          monster1.experienceValue;
        finalCharacter.specialty.characterExperience +=
          monster2.experienceValue;

        finalCharacter.treasure.gold.quantity += monster1.treasure.gold.quantity;
        finalCharacter.treasure.gold.quantity += monster2.treasure.gold.quantity;

        finalCharacter.treasure.electrum.quantity += monster1.treasure.electrum.quantity;
        finalCharacter.treasure.electrum.quantity += monster2.treasure.electrum.quantity;

        finalCharacter.treasure.silver.quantity += monster1.treasure.silver.quantity;
        finalCharacter.treasure.silver.quantity += monster2.treasure.silver.quantity;

        finalCharacter.treasure.copper.quantity += monster1.treasure.copper.quantity;
        finalCharacter.treasure.copper.quantity += monster2.treasure.copper.quantity;

        finalCharacter.treasure.gems.quantity += monster1.treasure.gems.quantity;
        finalCharacter.treasure.gems.quantity += monster2.treasure.gems.quantity;

        let updateTreasure = document.querySelector(".char-coins");
        updateTreasure.innerHTML = `
          <span id="char-gp" class="char-treasure">Gold: </span><span">${finalCharacter.treasure.gold.quantity}</span></br>
          <span id="char-ep" class="char-treasure">Electrum: </span><span>${finalCharacter.treasure.electrum.quantity}</span></br>
          <span id="char-sp" class="char-treasure">Silver: </span><span>${finalCharacter.treasure.silver.quantity}</span></br>
          <span id="char-cp" class="char-treasure">Copper: </span><span>${finalCharacter.treasure.copper.quantity}</span></br>
          <span id="char-gems" class="char-treasure">Gems: </span><span>${finalCharacter.treasure.gems.quantity}</span></br>
        `;

        let updatePlayerTreasure = document.querySelector('#char-treasure');
        console.log(finalCharacter.treasure.gold.quantity);
        updatePlayerTreasure.innerHTML = `
          <h4 id='char-treasure' class='char-info-label'>Treasure: <span class="character-display-info">${finalCharacter.treasure.gold.quantity}</span></h4>        
          `;

        let updatedExperience = document.querySelector("#char-experience");
        updatedExperience.innerHTML = `
          <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
          `;

        finalCharacter.checkLevelUp();

        // removeFightModule.innerHTML = `<p>You won!</p>`;
        defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;
        removeFightModule.innerHTML = ` `;

        var startChapterThreeFour = document.querySelector(
          "#start-chapter-three-four"
        );
        startChapterThreeFour.addEventListener(
          "click",
          continueNextChapter,
          false
        );
      }
    };

    let greyOutAttackButtons = function () {
      let attackButtons = document.querySelectorAll(".attack");

      for (let attackButton of attackButtons) {
        attackButton.classList.add("hidden");
      }

      let showMonsterAttackButton = document.querySelector("#monster-attack");
      showMonsterAttackButton.classList.remove("hidden");

      showMonsterAttackButton.onclick = function () {
        monster1.monsterAttack(monster1, monster2);
      };
    };

    let hitRollSucceed = function(enemy1, finalCharacter) {
      let attackDialogue = document.querySelector("#dialogue");
      attackDialogue.innerHTML = `
        <p>You attack the ${monster1.name} with your ${finalCharacter.weapon.name} and cause ${inflictedDamage} points of damage.</p>
      `;
  
      //CHECKING ATTACK INTERACTION
      if (monster1.healthPoints - inflictedDamage > 0) {
        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-one-hp");
        updatedMonsterHP.innerHTML = `
              <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
              `;
  
        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        
        greyOutAttackButtons();
  
        //END
      } else if (monster1.healthPoints - inflictedDamage <= 0) {
        monster1.healthPoints = 0;
  
        let monsterOneStatus = document.querySelector("#monster-one");
        let defeatMonster1 = document.querySelector("#dialogue");
        monsterOneStatus.innerHTML = `
              <div class="monster" id="monster-one">
                  <fieldset class='monster-info-module'>
                      <legend class='monster-dashboard'>Monster 1</legend>
                      <h4 id="monster-one-type">Monster Type: ${monster1.name}</h4>
                      <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
                      <h4 id="monster-one-ap">Armor Class: ${monster1.armorClass}</h4>
                      <h4 id="monster-one-damage">Damage: ${monster1.damage}</h4>    
                  </fieldset>   
              </div>`;
        defeatMonster1.innerHTML = `<p>Congratulations, you defeated the Monster 1!</p>`;
  
        let updatedExperience = document.querySelector("#char-experience");
        updatedExperience.innerHTML = `
              <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
              `;
  
        //----------------------------trying to remove monster attack button--------------//
  
        let removingMonster1Button =
          document.getElementsByClassName("attack-monster-one");
        removingMonster1Button[0].classList.add("monster1-dead");
  
        let removeMonster1SpellAttack =
          document.getElementsByClassName("spell2-monster-one");
        removeMonster1SpellAttack[0].classList.add("monster1-dead");
  
        //-------------------------------------------------------------------//
      }  
        confirmMonstersDead();
    }
    //ADD HITROLL VALUE 

    let playerHitRollValue = Math.ceil(Math.random() * 20) + finalCharacter.attributes[0].adjustment;
    let monsterArmorClass = monster1.armorClass;

    //END HITROLL VALUE

    let inflictedDamage = Math.ceil(Math.random(1) * finalCharacter.weapon.damage) + finalCharacter.attributes[0].adjustment;
    if (inflictedDamage <= 0) {
      inflictedDamage = 0;
    }

    let checkPlayerHitRoll = (playerHitRollValue1, monsterArmorClass1, playerHitRoll1) => {
      console.log("Player's HitRoll: " + playerHitRollValue1);
      console.log("Monster's Armor Class: " + monsterArmorClass1);
      console.table(playerHitRoll1);
      for (let i = 0; i < playerHitRoll1.length; i++) {
        if (playerHitRoll1[i][0] === monsterArmorClass1) {
          console.log("got correct hit roll table");
          console.log("Player's AC:" + playerHitRoll1[i][1]);
          if (playerHitRollValue1 < playerHitRoll1[i][1]) {
            alert('Player misses!');
            greyOutAttackButtons();
          } else {
            hitRollSucceed(monster1, finalCharacter);
            // greyOutAttackButtons();
          }
        }
      }
    }
    checkPlayerHitRoll(playerHitRollValue, monsterArmorClass, finalCharacter.hitRollTable);
  }

  weaponAttackMonster2(monster1, monster2, weapon, continueNextChapter) {
    // console.log("Logging NEXT CHAPTER" + continueNextChapter)
    // console.log(monster1);
    // console.log(weapon);
    // console.log(monster2);
    let self = this;
    let inflictedDamage =
      Math.ceil(Math.random(1) * finalCharacter.weapon.damage) +
      finalCharacter.attributes[0].adjustment;
    if (inflictedDamage <= 0) {
      inflictedDamage = 0;
    }

    let confirmMonstersDead = (enemy2) => {
      if (monster2.healthPoints <= 0 && monster1.healthPoints <= 0) {
        // console.log('both dead');

        let defeatedMonsters = document.querySelector("#dialogue");
        let removeFightModule = document.querySelector("#fight-module");
        removeFightModule.innerHTML = ` `;

        finalCharacter.specialty.characterExperience +=
          monster1.experienceValue;
        finalCharacter.specialty.characterExperience +=
          monster2.experienceValue;

        finalCharacter.treasure.gold.quantity += monster1.treasure.gold.quantity;
        finalCharacter.treasure.gold.quantity += monster2.treasure.gold.quantity;

        finalCharacter.treasure.electrum.quantity += monster1.treasure.electrum.quantity;
        finalCharacter.treasure.electrum.quantity += monster2.treasure.electrum.quantity;

        finalCharacter.treasure.silver.quantity += monster1.treasure.silver.quantity;
        finalCharacter.treasure.silver.quantity += monster2.treasure.silver.quantity;

        finalCharacter.treasure.copper.quantity += monster1.treasure.copper.quantity;
        finalCharacter.treasure.copper.quantity += monster2.treasure.copper.quantity;

        finalCharacter.treasure.gems.quantity += monster1.treasure.gems.quantity;
        finalCharacter.treasure.gems.quantity += monster2.treasure.gems.quantity;

        let updateTreasure = document.querySelector(".char-coins");
        updateTreasure.innerHTML = `
          <span id="char-gp" class="char-treasure">Gold: </span><span">${finalCharacter.treasure.gold.quantity}</span></br>
          <span id="char-ep" class="char-treasure">Electrum: </span><span>${finalCharacter.treasure.electrum.quantity}</span></br>
          <span id="char-sp" class="char-treasure">Silver: </span><span>${finalCharacter.treasure.silver.quantity}</span></br>
          <span id="char-cp" class="char-treasure">Copper: </span><span>${finalCharacter.treasure.copper.quantity}</span></br>
          <span id="char-gems" class="char-treasure">Gems: </span><span>${finalCharacter.treasure.gems.quantity}</span></br>
        `;

        let updatePlayerTreasure = document.querySelector('#char-treasure');
        console.log(finalCharacter.treasure.gold.quantity);
        updatePlayerTreasure.innerHTML = `
          <h4 id='char-treasure' class='char-info-label'>Treasure: <span class="character-display-info">${finalCharacter.treasure.gold.quantity}</span></h4>        
          `;

        let updatedExperience = document.querySelector("#char-experience");
        updatedExperience.innerHTML = `
            <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
            `;

        finalCharacter.checkLevelUp();

        // removeFightModule.innerHTML = `<p>You won!</p>`;
        defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;

        var startChapterThreeFour = document.querySelector(
          "#start-chapter-three-four"
        );
        startChapterThreeFour.addEventListener(
          "click",
          continueNextChapter,
          false
        );
      }
    };

    // this.monster2 = monster2;
    // this.weapon = weapon;
    // let enemy2X = this.enemy2;

    let attackDialogue = document.getElementById("dialogue");
    attackDialogue.innerHTML = `
        <p>You attack the ${monster2.name} with your ${this.weapon.name} and cause ${inflictedDamage} points of damage.</p>`;

    //CHECKING ATTACK INTERACTION
    if (monster2.healthPoints - inflictedDamage > 0) {
      monster2.healthPoints = monster2.healthPoints - inflictedDamage;
      let updatedMonsterHP = document.querySelector("#monster-two-hp");
      updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
            `;
      //greying out attack module buttons when pressed

      let greyOutAttackButtons = function () {
        let attackButtons = document.querySelectorAll(".attack");

        for (let attackButton of attackButtons) {
          attackButton.classList.add("hidden");
        }

        let showMonsterAttackButton = document.querySelector("#monster-attack");
        showMonsterAttackButton.classList.remove("hidden");

        showMonsterAttackButton.onclick = function () {
          monster2.monsterAttack(monster1, monster2);
        };
      };

      greyOutAttackButtons();
    } else if (monster2.healthPoints - inflictedDamage <= 0) {
      monster2.healthPoints = 0;

      let monsterTwoStatus = document.querySelector("#monster-two");
      let defeatMonster2 = document.querySelector("#dialogue");
      monsterTwoStatus.innerHTML = `
                <div class="monster" id="monster-two">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 2</legend>
                        <h4 id="monster-two-type">Monster Type: ${monster2.name}</h4>
                        <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
                        <h4 id="monster-two-ap">Armor Class: ${monster2.armorClass}</h4>
                        <h4 id="monster-two-damage">Damage: ${monster2.damage}</h4>   
                    </fieldset>    
                </div>`;
      defeatMonster2.innerHTML = `
                <p>Congratulations, you defeated the Monster 2!</p>`;

      let updatedExperience = document.querySelector("#char-experience");
      updatedExperience.innerHTML = `
                <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
                `;

      let removingMonster2Button =
        document.getElementsByClassName("attack-monster-two");
      removingMonster2Button[0].classList.add("monster1-dead");

      let removeMonster2SpellAttack =
        document.getElementsByClassName("spell2-monster-two");
      removeMonster2SpellAttack[0].classList.add("monster1-dead");
    }
    confirmMonstersDead();
  }

  spell2AttackMonster1(monster1, monster2, spell2, continueNextChapter) {
    // console.log('Casting Spell Two on Monster One');
    // console.log(monster1);
    // console.log(monster2);
    // console.log(spell2);
    let self = this;

    let inflictedDamage = Math.ceil(
      Math.random(1) * finalCharacter.specialty.spell2.damage
    );
    if (inflictedDamage <= 0) {
      inflictedDamage = 0;
    }

    let confirmMonstersDead = (enemy1) => {
      //checking if both monsters are dead

      if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
        // console.log('both dead');

        let defeatedMonsters = document.querySelector("#dialogue");
        let removeFightModule = document.querySelector("#fight-module");
        removeFightModule.innerHTML = ` `;

        finalCharacter.specialty.characterExperience +=
          monster1.experienceValue;
        finalCharacter.specialty.characterExperience +=
          monster2.experienceValue;

        finalCharacter.treasure.gold.quantity += monster1.treasure.gold.quantity;
        finalCharacter.treasure.gold.quantity += monster2.treasure.gold.quantity;

        finalCharacter.treasure.electrum.quantity += monster1.treasure.electrum.quantity;
        finalCharacter.treasure.electrum.quantity += monster2.treasure.electrum.quantity;

        finalCharacter.treasure.silver.quantity += monster1.treasure.silver.quantity;
        finalCharacter.treasure.silver.quantity += monster2.treasure.silver.quantity;

        finalCharacter.treasure.copper.quantity += monster1.treasure.copper.quantity;
        finalCharacter.treasure.copper.quantity += monster2.treasure.copper.quantity;

        finalCharacter.treasure.gems.quantity += monster1.treasure.gems.quantity;
        finalCharacter.treasure.gems.quantity += monster2.treasure.gems.quantity;

        let updateTreasure = document.querySelector(".char-coins");
        updateTreasure.innerHTML = `
          <span id="char-gp" class="char-treasure">Gold: </span><span">${finalCharacter.treasure.gold.quantity}</span></br>
          <span id="char-ep" class="char-treasure">Electrum: </span><span>${finalCharacter.treasure.electrum.quantity}</span></br>
          <span id="char-sp" class="char-treasure">Silver: </span><span>${finalCharacter.treasure.silver.quantity}</span></br>
          <span id="char-cp" class="char-treasure">Copper: </span><span>${finalCharacter.treasure.copper.quantity}</span></br>
          <span id="char-gems" class="char-treasure">Gems: </span><span>${finalCharacter.treasure.gems.quantity}</span></br>
        `;

        let updatePlayerTreasure = document.querySelector('#char-treasure');
        console.log(finalCharacter.treasure.gold.quantity);
        updatePlayerTreasure.innerHTML = `
          <h4 id='char-treasure' class='char-info-label'>Treasure: <span class="character-display-info">${finalCharacter.treasure.gold.quantity}</span></h4>        
          `;

        let updatedExperience = document.querySelector("#char-experience");
        updatedExperience.innerHTML = `
            <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
            `;

        finalCharacter.checkLevelUp();

        // removeFightModule.innerHTML = `<p>You won!</p>`;
        defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;

        var startChapterThreeFour = document.querySelector(
          "#start-chapter-three-four"
        );
        startChapterThreeFour.addEventListener(
          "click",
          continueNextChapter,
          false
        );
      }
    };
    //this.monster1 = monster1;
    //this.spell2 = spell2;

    let attackDialogue = document.querySelector("#dialogue");
    attackDialogue.innerHTML = `
        <p>You cast ${this.specialty.spell2.name} on the ${monster1.name} and cause ${inflictedDamage} points of damage.</p>`;

    // console.log(this.specialty.spell2.damage);

    //CHECKING ATTACK INTERACTION
    if (monster1.healthPoints - inflictedDamage > 0) {
      monster1.healthPoints = monster1.healthPoints - inflictedDamage;
      let updatedMonsterHP = document.querySelector("#monster-one-hp");
      updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
            `;

      //greying out attack module buttons when pressed

      let greyOutAttackButtons = function () {
        let attackButtons = document.querySelectorAll(".attack");

        for (let attackButton of attackButtons) {
          attackButton.classList.add("hidden");
        }

        let showMonsterAttackButton = document.querySelector("#monster-attack");
        showMonsterAttackButton.classList.remove("hidden");

        showMonsterAttackButton.onclick = function () {
          monster1.monsterAttack(monster1, monster2);
        };
      };

      greyOutAttackButtons();
    } else if (monster1.healthPoints - inflictedDamage <= 0) {
      monster1.healthPoints = 0;

      let monsterOneStatus = document.querySelector("#monster-one");
      let defeatMonster1 = document.querySelector("#dialogue");
      monsterOneStatus.innerHTML = `
            <div class="monster" id="monster-one">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 1</legend>
                    <h4 id="monster-one-type">Monster Type: ${monster1.name}</h4>
                    <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
                    <h4 id="monster-one-ap">Armor Class: ${monster1.armorClass}</h4>
                    <h4 id="monster-one-damage">Damage: ${monster1.damage}</h4>    
                </fieldset>   
            </div>`;
      defeatMonster1.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`;

      // console.log(finalCharacter.specialty.characterExperience);

      // let updatedExperience = document.querySelector('#char-experience');
      // updatedExperience.innerHTML = `
      // <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
      // `;

      let removingMonster1SpellButton =
        document.getElementsByClassName("spell2-monster-one");
      removingMonster1SpellButton[0].classList.add("monster1-dead");

      let removingMonster1Button =
        document.getElementsByClassName("attack-monster-one");
      removingMonster1Button[0].classList.add("monster1-dead");
    }
    confirmMonstersDead();
  }

  spell2AttackMonster2(monster1, monster2, spell2, continueNextChapter) {
    // console.log('Casting Spell Two on Monster Two');
    let self = this;

    let inflictedDamage = Math.ceil(
      Math.random(1) * finalCharacter.specialty.spell2.damage
    );
    if (inflictedDamage <= 0) {
      inflictedDamage = 0;
    }
    let confirmMonstersDead = (enemy1) => {
      //checking if both monsters are dead

      if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
        // console.log('both dead');

        let defeatedMonsters = document.querySelector("#dialogue");
        let removeFightModule = document.querySelector("#fight-module");

        removeFightModule.innerHTML = ` `;

        finalCharacter.specialty.characterExperience +=
          monster1.experienceValue;
        finalCharacter.specialty.characterExperience +=
          monster2.experienceValue;

        finalCharacter.treasure.gold.quantity += monster1.treasure.gold.quantity;
        finalCharacter.treasure.gold.quantity += monster2.treasure.gold.quantity;

        finalCharacter.treasure.electrum.quantity += monster1.treasure.electrum.quantity;
        finalCharacter.treasure.electrum.quantity += monster2.treasure.electrum.quantity;

        finalCharacter.treasure.silver.quantity += monster1.treasure.silver.quantity;
        finalCharacter.treasure.silver.quantity += monster2.treasure.silver.quantity;

        finalCharacter.treasure.copper.quantity += monster1.treasure.copper.quantity;
        finalCharacter.treasure.copper.quantity += monster2.treasure.copper.quantity;

        finalCharacter.treasure.gems.quantity += monster1.treasure.gems.quantity;
        finalCharacter.treasure.gems.quantity += monster2.treasure.gems.quantity;

        let updateTreasure = document.querySelector(".char-coins");
        updateTreasure.innerHTML = `
          <span id="char-gp" class="char-treasure">Gold: </span><span">${finalCharacter.treasure.gold.quantity}</span></br>
          <span id="char-ep" class="char-treasure">Electrum: </span><span>${finalCharacter.treasure.electrum.quantity}</span></br>
          <span id="char-sp" class="char-treasure">Silver: </span><span>${finalCharacter.treasure.silver.quantity}</span></br>
          <span id="char-cp" class="char-treasure">Copper: </span><span>${finalCharacter.treasure.copper.quantity}</span></br>
          <span id="char-gems" class="char-treasure">Gems: </span><span>${finalCharacter.treasure.gems.quantity}</span></br>
        `;

        let updatePlayerTreasure = document.querySelector('#char-treasure');
        console.log(finalCharacter.treasure.gold.quantity);
        updatePlayerTreasure.innerHTML = `
          <h4 id='char-treasure' class='char-info-label'>Treasure: <span class="character-display-info">${finalCharacter.treasure.gold.quantity}</span></h4>        
          `;

        let updatedExperience = document.querySelector("#char-experience");
        updatedExperience.innerHTML = `
            <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
            `;

        finalCharacter.checkLevelUp();

        // removeFightModule.innerHTML = `<p>You won!</p>`;
        defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;

        var startChapterThreeFour = document.querySelector(
          "#start-chapter-three-four"
        );
        startChapterThreeFour.addEventListener(
          "click",
          continueNextChapter,
          false
        );
      }
    };
    //this.monster2 = monster2;
    //this.spell2 = spell2;

    let attackDialogue = document.querySelector("#dialogue");
    attackDialogue.innerHTML = `
        <p>You cast ${this.specialty.spell2.name} on the ${monster2.name} and cause ${inflictedDamage} points of damage.</p>`;

    // console.log(this.specialty.spell2.damage);

    //CHECKING ATTACK INTERACTION
    if (monster2.healthPoints - inflictedDamage > 0) {
      monster2.healthPoints = monster2.healthPoints - inflictedDamage;
      let updatedMonsterHP = document.querySelector("#monster-two-hp");
      updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
            `;
      //greying out attack module buttons when pressed

      let greyOutAttackButtons = function () {
        let attackButtons = document.querySelectorAll(".attack");

        for (let attackButton of attackButtons) {
          attackButton.classList.add("hidden");
        }

        let showMonsterAttackButton = document.querySelector("#monster-attack");
        showMonsterAttackButton.classList.remove("hidden");

        showMonsterAttackButton.onclick = function () {
          monster2.monsterAttack(monster1, monster2);
        };
      };

      greyOutAttackButtons();
    } else if (monster2.healthPoints - inflictedDamage <= 0) {
      monster2.healthPoints = 0;

      let monsterTwoStatus = document.querySelector("#monster-two");
      let defeatMonster2 = document.querySelector("#dialogue");
      monsterTwoStatus.innerHTML = `
            <div class="monster" id="monster-two">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 2</legend>
                    <h4 id="monster-two-type">Monster Type: ${monster2.name}</h4>
                    <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
                    <h4 id="monster-two-ap">Armor Class: ${monster2.armorClass}</h4>
                    <h4 id="monster-two-damage">Damage: ${monster2.damage}</h4>   
                </fieldset>    
            </div>`;
      defeatMonster2.innerHTML = `
            <p>Congratulations, you defeated the Monster 2!</p>`;

      // finalCharacter.specialty.characterExperience += monster2.experienceValue;
      // let updatedExperience = document.querySelector('#char-experience');
      // updatedExperience.innerHTML = `
      // <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
      // `;
      // console.log(finalCharacter.specialty.characterExperience);

      let removingMonster2SpellButton =
        document.getElementsByClassName("spell2-monster-two");
      removingMonster2SpellButton[0].classList.add("monster1-dead");

      let removingMonster2Button =
        document.getElementsByClassName("attack-monster-two");
      removingMonster2Button[0].classList.add("monster1-dead");
    }
    confirmMonstersDead();
  }

  spell1Heal() {
    // console.log('Casting Heal Spell');
    let healedCharHP = document.querySelector("#char-hp");
    finalCharacter.specialty.healthPoints +=
      finalCharacter.specialty.spell1.healing;
    if (
      finalCharacter.specialty.healthPoints >=
      finalCharacter.specialty.maxHealthPoints
    ) {
      finalCharacter.specialty.healthPoints =
        finalCharacter.specialty.maxHealthPoints;
    }
    healedCharHP.innerHTML = `
        <h4 id='char-hp' class='char-info-label'>Hit Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span><span id='hpBar'><progress id='hp-prog-bar' max="${finalCharacter.specialty.maxHealthPoints}" value="${finalCharacter.specialty.healthPoints}"></progress>${finalCharacter.specialty.healthPoints}/${finalCharacter.specialty.maxHealthPoints}</span></span></h4> 
        `;

    let attackDialogue = document.querySelector("#dialogue");
    attackDialogue.innerHTML = `
        <p>You cast ${finalCharacter.specialty.spell1.name} and heal ${finalCharacter.specialty.spell1.healing} hit points.</p>`;

    let castedHealSpell = document.querySelector(".spell1-heal");

    //WORKS, BUT NEED TO IMPLEMENT ALERT WINDOW WHEN MONSTERS ATTACK AND NOT RESET FIGHT MODULE
    castedHealSpell.style.visibility = "hidden";
    setTimeout(function () {
      castedHealSpell.style.visibility = "visible";
    }, 60000);
  }

  //***TRYING TO CREATE AREA ATTACK SPELL

  areaAttackSpell(monster1, monster2, spell3, continueNextChapter) {
    // console.log('Casting Area Attack Spell');

    let self = this;
    this.monster1 = monster1;
    this.monster2 = monster2;
    this.spell3 = spell3;

    let clearDialogue = document.querySelector("#dialogue");
    clearDialogue.innerHTML = "";

    let monstersGroup = [monster1, monster2];
    monstersGroup.forEach(this.areaSpell);

    //checking if both monsters are dead

    let confirmMonstersDead = () => {
      // console.log(monster1.healthPoints);
      // console.log(monster2.healthPoints);

      if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
        // console.log('both dead');

        monster1.healthPoints = 0;
        monster2.healthPoints = 0;

        let updatedMonster1HP = document.querySelector("#monster-one-hp");
        updatedMonster1HP.innerHTML = `
            <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> `;

        let updatedMonster2HP = document.querySelector("#monster-two-hp");
        updatedMonster2HP.innerHTML = `
            <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> `;

        let defeatedMonsters = document.querySelector("#dialogue");
        let removeFightModule = document.querySelector("#fight-module");
        finalCharacter.specialty.characterExperience +=
          monster1.experienceValue;
        finalCharacter.specialty.characterExperience +=
          monster2.experienceValue;

        finalCharacter.treasure.gold.quantity += monster1.treasure.gold.quantity;
        finalCharacter.treasure.gold.quantity += monster2.treasure.gold.quantity;

        finalCharacter.treasure.electrum.quantity += monster1.treasure.electrum.quantity;
        finalCharacter.treasure.electrum.quantity += monster2.treasure.electrum.quantity;

        finalCharacter.treasure.silver.quantity += monster1.treasure.silver.quantity;
        finalCharacter.treasure.silver.quantity += monster2.treasure.silver.quantity;

        finalCharacter.treasure.copper.quantity += monster1.treasure.copper.quantity;
        finalCharacter.treasure.copper.quantity += monster2.treasure.copper.quantity;

        finalCharacter.treasure.gems.quantity += monster1.treasure.gems.quantity;
        finalCharacter.treasure.gems.quantity += monster2.treasure.gems.quantity;

        let updateTreasure = document.querySelector(".char-coins");
        updateTreasure.innerHTML = `
          <span id="char-gp" class="char-treasure">Gold: </span><span">${finalCharacter.treasure.gold.quantity}</span></br>
          <span id="char-ep" class="char-treasure">Electrum: </span><span>${finalCharacter.treasure.electrum.quantity}</span></br>
          <span id="char-sp" class="char-treasure">Silver: </span><span>${finalCharacter.treasure.silver.quantity}</span></br>
          <span id="char-cp" class="char-treasure">Copper: </span><span>${finalCharacter.treasure.copper.quantity}</span></br>
          <span id="char-gems" class="char-treasure">Gems: </span><span>${finalCharacter.treasure.gems.quantity}</span></br>
        `;

        let updatePlayerTreasure = document.querySelector('#char-treasure');
        console.log(finalCharacter.treasure.gold.quantity);
        updatePlayerTreasure.innerHTML = `
          <h4 id='char-treasure' class='char-info-label'>Treasure: <span class="character-display-info">${finalCharacter.treasure.gold.quantity}</span></h4>        
          `;
        let updatedExperience = document.querySelector("#char-experience");
        updatedExperience.innerHTML = `
            <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
            `;

        finalCharacter.checkLevelUp();

        // removeFightModule.innerHTML = `<p>You won!</p>`;
        defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;

        removeFightModule.innerHTML = ` `;

        var startChapterThreeFour = document.querySelector(
          "#start-chapter-three-four"
        );
        startChapterThreeFour.addEventListener(
          "click",
          continueNextChapter,
          false
        );
      }
    };
    //  console.log(monster1);
    //  console.log(monster2);
    if (monster1.healthPoints <= 0) {
      monster1.healthPoints = 0;
    }

    if (monster2.healthPoints <= 0) {
      monster2.healthPoints = 0;

      // let updatedExperience = document.querySelector('#char-experience');
      // updatedExperience.innerHTML = `
      // <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
      // `;
    }

    let updatedMonster1HP = document.querySelector("#monster-one-hp");
    updatedMonster1HP.innerHTML = `
            <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
            `;

    let updatedMonster2HP = document.querySelector("#monster-two-hp");
    updatedMonster2HP.innerHTML = `
            <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
            `;

    let greyOutAttackButtons = function () {
      // console.log('greyOutAttackButtons arguments');

      let attackButtons = document.querySelectorAll(".attack");

      for (let attackButton of attackButtons) {
        attackButton.classList.add("hidden");
      }

      let showMonsterAttackButton = document.querySelector("#monster-attack");
      showMonsterAttackButton.classList.remove("hidden");

      showMonsterAttackButton.onclick = function () {
        if (monster1.healthPoints > 0) {
          monster1.monsterAttack(monster1, monster2);
        } else {
          monster2.monsterAttack(monster1, monster2);
        }
      };
    };

    greyOutAttackButtons();

    confirmMonstersDead();
  }

  areaSpell = function (item) {
    let self = this;

    let damage = Math.ceil(
      Math.random(1) * finalCharacter.specialty.spell3.damage
    );
    if (damage <= 0) {
      damage = 0;
    }

    console.log(damage);

    // let damage = finalCharacter.specialty.spell3.damage;

    item.healthPoints -= damage;

    if (item.name === " ") {
      let attackDialogue = document.querySelector("#dialogue");

      attackDialogue.innerHTML += ` `;
    } else if (item.healthPoints <= 0) {
      let attackDialogue = document.querySelector("#dialogue");

      attackDialogue.innerHTML += `
            <p>${item.name} is dead.</p>`;
    } else {
      //item.healthPoints -= damage;
      // console.log(`You attacked ${item.name} for ${damage} points of damage`);

      let attackDialogue = document.querySelector("#dialogue");

      attackDialogue.innerHTML += `
            <p>You cast ${finalCharacter.specialty.spell3.name} on the ${item.name} and cause ${damage} points of damage.</p>`;
    }
  };

  //END OF AREA ATTACK SPELL

  // transferToMonsterAttack() {
  //     self.monster1.monsterAttack(monster1, weapon);
  // }
}
