//import other js modules to access

import
{
  finalCharacter,
  continueChapterThreeFour,
  render,
  animate,
} from "./js_v14-3.js";
import Weapon from "./weapon-class-v2.js";
import
{
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
import
{
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
import
{
  adventurer,
  warrior,
  highMage,
  dragonWarrior,
  elf,
  dwarf,
  halfling,
  cleric,
  thief,
} from "./specialty-class-v2.js";
import
{
  fighterVeteran,
  fighterWarrior,
  fighterSwordmaster,
} from "./character-class-levels/fighter-level-class.js";
import
{
  veteranMedium,
  warriorSeer,
  swordMasterConjurer,
} from "./character-class-levels/elf-level-class.js";
import
{
  apprentice,
  footpad,
  robber,
} from "./character-class-levels/thief-level-class.js";
import { dragonWarriorVeteran } from "./character-class-levels/dragon-warrior-level-class.js";
import
{
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
import
{
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
import
{
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
  phantasmalTroll
} from "./monster-class-v2.js";

//import { noAchievements, killedFarmWolves, spokeToRaynard } from './achievements-v1.js';

//==============================================end imports===============================================//

//exports Character class for other module access

export default class Character
{
  constructor (
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
    hitRollTable,
    activeSpellStatuses,
    status,
    mirrorImages
  )
  {
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
    ],
      this.activeSpellStatuses = [];
    this.status = [];
    this.mirrorImages = 0;
  }

  //updates & initiates Character creation

  characterUpdate()
  {
    let strengthPlusAdjustment;
    let intelligencePlusAdjustment;
    let wisdomPlusAdjustment;
    let dexterityPlusAdjustment;
    let constitutionPlusAdjustment;
    let charismaPlusAdjustment;

    if (finalCharacter.attributes[0].adjustment > 0)
    {
      strengthPlusAdjustment = `+${finalCharacter.attributes[0].adjustment}`;
    } else
    {
      strengthPlusAdjustment = finalCharacter.attributes[0].adjustment;
    }

    if (finalCharacter.attributes[1].adjustment > 0)
    {
      intelligencePlusAdjustment = `+${finalCharacter.attributes[1].adjustment}`;
    } else
    {
      intelligencePlusAdjustment = finalCharacter.attributes[1].adjustment;
    }

    if (finalCharacter.attributes[2].adjustment > 0)
    {
      wisdomPlusAdjustment = `+${finalCharacter.attributes[2].adjustment}`;
    } else
    {
      wisdomPlusAdjustment = finalCharacter.attributes[2].adjustment;
    }

    if (finalCharacter.attributes[3].adjustment > 0)
    {
      dexterityPlusAdjustment = `+${finalCharacter.attributes[3].adjustment}`;
    } else
    {
      dexterityPlusAdjustment = finalCharacter.attributes[3].adjustment;
    }

    if (finalCharacter.attributes[4].adjustment > 0)
    {
      constitutionPlusAdjustment = `+${finalCharacter.attributes[4].adjustment}`;
    } else
    {
      constitutionPlusAdjustment = finalCharacter.attributes[4].adjustment;
    }

    if (finalCharacter.attributes[5].adjustment > 0)
    {
      charismaPlusAdjustment = `+${finalCharacter.attributes[5].adjustment}`;
    } else
    {
      charismaPlusAdjustment = finalCharacter.attributes[5].adjustment;
    }

    let characterInfo = document.querySelector("#character-info");
    // let hpProgressBar = document.querySelector.("#
    characterInfo.innerHTML = `
        <div id='character-stats'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Player Data</legend>
                <h4 id='char-name' class='char-info-label'>Name: <span class="character-display-info">${this.name
      }</span></h4>
                <h4 id='char-specialty' class='char-info-label'>Specialty <span class="character-display-info">: ${this.specialty.name
      }</span></h4>
                <h4 id='char-hp' class='char-info-label'>Hit Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints +
      finalCharacter.attributes[4].adjustment
      }</span><span id='hpBar'><progress id='hp-prog-bar' max="${finalCharacter.specialty.maxHealthPoints +
      finalCharacter.attributes[4].adjustment
      }" value="${finalCharacter.specialty.healthPoints +
      finalCharacter.attributes[4].adjustment
      }"></progress>${finalCharacter.specialty.healthPoints +
      finalCharacter.attributes[4].adjustment
      }/${finalCharacter.specialty.maxHealthPoints +
      finalCharacter.attributes[4].adjustment
      }</span></span></h4> 
                <h4 id='char-armor' class='char-info-label'>Armor: <div class="armor-tooltip" class="character-display-info">${finalCharacter.armor.name
      }<span class="armor-tooltiptext">Armor Class: ${finalCharacter.armor.armorClass
      }</span></div></h4> 
                <h4 id='char-weapon' class='char-info-label'>Weapon: <div class="weapon-tooltip" class="character-display-info">${finalCharacter.weapon.name
      }<span class="weapon-tooltiptext">Damage: d${finalCharacter.weapon.damage
      }</span></div></h4>
                <h4 id='char-spell1' class='char-info-label'>Spell 1:  <span class="character-display-info">${this.specialty.spell1.name
      }</span></h4>
                <h4 id='char-spell2' class='char-info-label'>Spell 2:  <span class="character-display-info">${this.specialty.spell2.name
      }</span></h4>
                <h4 id='char-treasure' class='char-info-label'>Treasure: <span class="character-display-info">${finalCharacter.treasure.gold.quantity
      }</span></h4>
                <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience
      }</span></h4>
                <h4 id='char-status' class='char-info-label'>Status: <span class="character-display-info">${finalCharacter.status
      }</span></h4>
                
                
            </fieldset>
        </div>

        <div id='character-attributes'>
            <fieldset class='char-info-module-attributes'>
                <legend class='player-dashboard'>Attributes</legend>
                <h4 id='char-strength' class='char-info-label'>
                  <span class='character-display-attributes-str'>${finalCharacter.attributes[0].name.slice(0, 3)}</span>
                  <span class='character-display-attributes-scores-str'>${finalCharacter.attributes[0].score}</span>
                  <span class='character-display-attributes-scores-adj-str'>${strengthPlusAdjustment}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                    <defs>
                      <linearGradient id="gradientColor-str" y2="130%">
                        <stop offset="10%" stop-color="blue"/>
                        <stop offset="30%" stop-color="green"/>
                        <stop offset="40%" stop-color="yellow"/>
                        <stop offset="80%" stop-color="red"/>
                        <stop offset="100%" stop-color="maroon"/>                  
                      </linearGradient>
                    </defs>
                    <circle class="circle-str" cx="50" cy="50" r="30" stroke-dashoffset="${finalCharacter.attributes[0].dashArrayAdj()}"/>
                  </svg>

                </h4>
                  <h4 id='char-intelligence' class='char-info-label'>
                  <span class='character-display-attributes-int'>${finalCharacter.attributes[1].name.slice(0, 3)}</span>
                  <span class='character-display-attributes-scores-int'>${finalCharacter.attributes[1].score}</span>
                  <span class='character-display-attributes-scores-adj-int'>${intelligencePlusAdjustment}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                    <defs>
                      <linearGradient id="gradientColor-int" y2="130%">
                      <stop offset="10%" stop-color="blue"/>
                      <stop offset="30%" stop-color="green"/>
                      <stop offset="40%" stop-color="yellow"/>
                      <stop offset="80%" stop-color="red"/>
                      <stop offset="100%" stop-color="maroon"/>                  
                    </linearGradient>
                    </defs>
                    <circle class="circle-int" cx="50" cy="50" r="30" stroke-dashoffset="${finalCharacter.attributes[1].dashArrayAdj()}"/>
                  </svg>
                </h4>
                <h4 id='char-wisdom' class='char-info-label'>
                  <span class='character-display-attributes-wis'>${finalCharacter.attributes[2].name.slice(0, 3)}</span>
                  <span class='character-display-attributes-scores-wis'>${finalCharacter.attributes[2].score}</span>
                  <span class='character-display-attributes-scores-adj-wis'>${wisdomPlusAdjustment}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                  <defs>
                    <linearGradient id="gradientColor-wis" y2="130%">
                    <stop offset="10%" stop-color="blue"/>
                    <stop offset="30%" stop-color="green"/>
                    <stop offset="40%" stop-color="yellow"/>
                    <stop offset="80%" stop-color="red"/>
                    <stop offset="100%" stop-color="maroon"/>                  
              </linearGradient>
                  </defs>
                  <circle class="circle-wis" cx="50" cy="50" r="30" stroke-dashoffset="${finalCharacter.attributes[2].dashArrayAdj()}"/>
                </svg>
                </h4>
                <h4 id='char-dexterity' class='char-info-label'>
                  <span class='character-display-attributes-dex'>${finalCharacter.attributes[3].name.slice(0, 3)}</span>
                  <span class='character-display-attributes-scores-dex'>${finalCharacter.attributes[3].score}</span>
                  <span class='character-display-attributes-scores-adj-dex'>${dexterityPlusAdjustment}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                  <defs>
                    <linearGradient id="gradientColor-dex" y2="130%">
                    <stop offset="10%" stop-color="blue"/>
                    <stop offset="30%" stop-color="green"/>
                    <stop offset="40%" stop-color="yellow"/>
                    <stop offset="80%" stop-color="red"/>
                    <stop offset="100%" stop-color="maroon"/>                  
              </linearGradient>
                  </defs>
                  <circle class="circle-dex" cx="50" cy="50" r="30" stroke-dashoffset="${finalCharacter.attributes[3].dashArrayAdj()}"/>
                </svg>
                </h4>
                <h4 id='char-constitution' class='char-info-label'>
                  <span class='character-display-attributes-con'>${finalCharacter.attributes[4].name.slice(0, 3)}</span>
                  <span class='character-display-attributes-scores-con'>${finalCharacter.attributes[4].score}</span>
                  <span class='character-display-attributes-scores-adj-con'>${constitutionPlusAdjustment}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                  <defs>
                    <linearGradient id="gradientColor-con" y2="130%">
                    <stop offset="10%" stop-color="blue"/>
                    <stop offset="30%" stop-color="green"/>
                    <stop offset="40%" stop-color="yellow"/>
                    <stop offset="80%" stop-color="red"/>
                    <stop offset="100%" stop-color="maroon"/>                  
              </linearGradient>
                  </defs>
                  <circle class="circle-con" cx="50" cy="50" r="30" stroke-dashoffset="${finalCharacter.attributes[4].dashArrayAdj()}"/>
                </svg>
                </h4>
                <h4 id='char-charisma' class='char-info-label'>
                  <span class='character-display-attributes-cha'>${finalCharacter.attributes[5].name.slice(0, 3)}</span>
                  <span class='character-display-attributes-scores-cha'>${finalCharacter.attributes[5].score}</span>
                  <span class='character-display-attributes-scores-adj-cha'>${charismaPlusAdjustment}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                  <defs>
                    <linearGradient id="gradientColor-cha" y2="130%">
                    <stop offset="10%" stop-color="blue"/>
                    <stop offset="30%" stop-color="green"/>
                    <stop offset="40%" stop-color="yellow"/>
                    <stop offset="80%" stop-color="red"/>
                    <stop offset="100%" stop-color="maroon"/>                  
            </linearGradient>
                  </defs>
                  <circle class="circle-cha" cx="50" cy="50" r="30" stroke-dashoffset="${finalCharacter.attributes[5].dashArrayAdj()}"/>
                </svg>
                </h4>
            </fieldset>
        </div>
        
        </div id="canvas-area">
          <fieldset class= 'canvas-info-module-player'>
            <legend class='canvas-dashboard'>Player</legend>
            <canvas id="canvas2" height="100" width="100"></canvas>
           </fieldset>
        </div>

        <div id="character-statuses">
          <fieldset class = "status-info-module-player">
            <legend class="statuses-dashboard">Statuses</legend>
          </fieldset>
        </div>

        <div id="character-saving-throws">
          <fieldset class = "saves-info-module-player">
            <legend class="saves-dashboard">Saves</legend>
              <h4>Poison or Death Ray: ${finalCharacter.specialty.characterLevel.level.savingThrows["Poison or Death Ray"]}</h4>
              <h4>Magic Wand: ${finalCharacter.specialty.characterLevel.level.savingThrows["Magic Wand"]}</h4>
              <h4>Stone or Paralysis: ${finalCharacter.specialty.characterLevel.level.savingThrows["Turn to Stone or Paralysis"]}</h4>
              <h4>Dragon Breath: ${finalCharacter.specialty.characterLevel.level.savingThrows["Dragon Breath"]}</h4>
              <h4>Spells or Magic Staff: ${finalCharacter.specialty.characterLevel.level.savingThrows["Spells or Magic Staff"]}</h4>
          </fieldset>
        </div>             
        `
    console.log(finalCharacter)

      ;

    //populating normal-equipment tab

    for (let i = 0; i < finalCharacter.inventory.length; i++)
    {
      let updateInventory = document.querySelector("#normal-equipment-list");
      updateInventory.innerHTML += `${finalCharacter.inventory[i].name} <br>`;
    }
  }
  //confirms to attack monsters and populates monster-info section

  confirmAttack(monsterOne, monsterTwo)
  {
    //----------------TRYING TO EITHER REMOVE OR CHANGE COLOR OF ATTACK BUTTON IF MONSTER1 IS DEAD-------------

    if (monsterOne.healthPoints <= 0)
    {
      let removeMonsterOneAttackButton = document.querySelector(
        ".attack-monster-one"
      );
      removeMonsterOneAttackButton.classList.add("monster1-dead");
      let removeMonsterOneSpellAttack = document.querySelector(
        ".spell2-monster-one"
      );
      removeMonsterOneSpellAttack.classList.add("monster1-dead");

      let removeMonsterOneSpellHighlight = document.querySelectorAll(".monster-one-spell-list");
      for (let i = 0; i < removeMonsterOneSpellHighlight.length; i++)
      {
        removeMonsterOneSpellHighlight[i].classList.add("monster1-spell-dead");

      }


    }

    if (monsterTwo.healthPoints <= 0)
    {
      let removeMonsterTwoAttackButton = document.querySelector(
        ".attack-monster-two"
      );
      removeMonsterTwoAttackButton.classList.add("monster1-dead");
      let removeMonsterTwoSpellAttack = document.querySelector(
        ".spell2-monster-two"
      );
      removeMonsterTwoSpellAttack.classList.add("monster1-dead");

      let removeMonsterTwoSpellHighlight = document.querySelectorAll(".monster-two-spell-list");
      for (let i = 0; i < removeMonsterTwoSpellHighlight.length; i++)
      {
        removeMonsterTwoSpellHighlight[i].classList.add("monster2-spell-dead");
      }
    }

    if (monsterOne.healthPoints <= 0 && monsterTwo.healthPoints <= 0)
    {
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
                <h4 id="monster-one-status">Status: ${monsterOne.status}</h4>     
            </fieldset>  
        </div>
        <div class="monster" id="monster-two">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 2</legend>
                <h4 id="monster-two-type">Monster Type: ${monsterTwo.name}</h4>
                <h4 id="monster-two-hp">Hit Points: ${monsterTwo.healthPoints}<progress class='monster-hp-prog-bar' max="${monsterTwo.startingHealthPoints}" value="${monsterTwo.healthPoints}"></progress></h4> 
                <h4 id="monster-two-ap">Armor Class: ${monsterTwo.armorClass}</h4>
                <h4 id="monster-two-damage">Damage: ${monsterTwo.damage}</h4> 
                <h4 id="monster-two-status">Status: ${monsterTwo.status}</h4>    
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

  checkLevelUp()
  {
    if (finalCharacter.specialty.characterLevel.level.maxXP)
    {
      if (
        finalCharacter.specialty.characterExperience >
        finalCharacter.specialty.characterLevel.level.maxXP
      )
      {
        alert("Congratulations, you have achieved the next level!");
      }
    } else
    {
      return;
    }
  }

  weaponAttackMonster1(monster1, monster2, weapon, continueNextChapter, acAdjustment = 0, damageAdjustment = 0)
  {
    let self = this;
    let hitRollSucceed = function (enemy1, finalCharacter)
    {
      let attackDialogue = document.querySelector("#dialogue");
      attackDialogue.innerHTML = `
        <p>You attack the ${monster1.name} with your ${finalCharacter.weapon.name} and cause ${inflictedDamage} points of damage.</p>
      `;

      // console.log(finalCharacter.status)
      // if(finalCharacter.status.includes("Invisible")) {
      //   alert(`You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked`);

      // }

      if (monster1.status.includes('Sleep') && finalCharacter.weapon.attackType === "Edged")
      {
        monster1.healthPoints = 0;
        alert(`The ${monster1.name} was asleep, and was killed instantly with your attack.`);
        finalCharacter.greyOutAttackButtons(monster1, monster2);
        let updatedMonsterHP = document.querySelector("#monster-one-hp");
        updatedMonsterHP.innerHTML = `
              <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
              `;
      }

      else if (monster1.status.includes('Sleep') && finalCharacter.weapon.attackType !== "Edged")
      {
        alert(`The ${monster1.name} was asleep, but woke up after being struck by your ${finalCharacter.weapon.name}.`);
        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-one-hp");
        updatedMonsterHP.innerHTML = `
              <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
              `;

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster1.status.splice(monster1.status.indexOf('Sleep'), 1);
        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`
        finalCharacter.greyOutAttackButtons(monster1, monster2);
      }

      //checking if monster is charmed
      else if (monster1.status.includes('Charmed'))
      {
        alert(`The ${monster1.name} was charmed, but the charm was broken after being attacked`);
        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-one-hp");
        updatedMonsterHP.innerHTML = `
          <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
          `;

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster1.status.splice(monster1.status.indexOf('Charmed'), 1);
        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`
        finalCharacter.greyOutAttackButtons(monster1, monster2);

      }

      else if (monster1.status.includes('Visibility Impaired'))
      {
        alert(`You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked`);
        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-one-hp");
        updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
            `;

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster1.status.splice(monster1.status.indexOf('Visibility Impaired'), 1);
        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`
        finalCharacter.greyOutAttackButtons(monster1, monster2);

      }

      //CHECKING ATTACK INTERACTION
      else if (monster1.healthPoints - inflictedDamage > 0)
      {

        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-one-hp");
        updatedMonsterHP.innerHTML = `
              <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
              `;

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//

        finalCharacter.greyOutAttackButtons(monster1, monster2);

        //END
      } else if (monster1.healthPoints - inflictedDamage <= 0)
      {
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
                      <h4 id="monster-one-status">Status: ${monster1.status}</h4>
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

        let removeMonsterOneSpellHighlight = document.querySelectorAll(".monster-one-spell-list");
        for (let i = 0; i < removeMonsterOneSpellHighlight.length; i++)
        {
          removeMonsterOneSpellHighlight[i].classList.add("monster1-spell-dead");

        }

        //-------------------------------------------------------------------//
      }
      finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
    }
    //ADD HITROLL VALUE 

    let playerHitRollValue = (Math.ceil(Math.random() * 20) + finalCharacter.attributes[0].adjustment) + acAdjustment;

    if (playerHitRollValue > 20)
    {
      playerHitRollValue = 20;
    }

    let monsterArmorClass = monster1.armorClass;

    //END HITROLL VALUE

    let inflictedDamage = (Math.ceil(Math.random(1) * finalCharacter.weapon.damage) + finalCharacter.attributes[0].adjustment) + damageAdjustment;
    if (inflictedDamage <= 0)
    {
      inflictedDamage = 0;
    }

    let checkPlayerHitRoll = (playerHitRollValue1, monsterArmorClass1, playerHitRoll1) =>
    {

      // console.log(finalCharacter.status)
      if (finalCharacter.status.includes("Invisible"))
      {
        alert(`You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked`);
        finalCharacter.status.splice(finalCharacter.status.indexOf("Invisible"), 1);
        let playerStatus = document.querySelector("#char-status");
        playerStatus.innerHTML = `
          <h4 id="char-status" class="char-info-label">Status: 
          <span class="character-display-info">${finalCharacter.status}</span>
          </h4>`
      }
      for (let i = 0; i < playerHitRoll1.length; i++)
      {
        if (playerHitRoll1[i][0] === monsterArmorClass1)
        {
          if (playerHitRollValue1 < playerHitRoll1[i][1])
          {
            alert('Player misses!');
            finalCharacter.greyOutAttackButtons(monster1, monster2);
          } else
          {
            hitRollSucceed(monster1, finalCharacter);
          }
        }
      }
    }
    checkPlayerHitRoll(playerHitRollValue, monsterArmorClass, finalCharacter.hitRollTable);
  }

  weaponAttackMonster2(monster1, monster2, weapon, continueNextChapter, acAdjustment = 0, damageAdjustment = 0)
  {

    let self = this;

    let inflictedDamage =
      Math.ceil(Math.random(1) * finalCharacter.weapon.damage) +
      finalCharacter.attributes[0].adjustment;
    if (inflictedDamage <= 0)
    {
      inflictedDamage = 0;
    }

    let hitRollSucceed = function (enemy2, finalCharacter)
    {
      let attackDialogue = document.getElementById("dialogue");
      attackDialogue.innerHTML = `
          <p>You attack the ${monster2.name} with your ${finalCharacter.weapon.name} and cause ${inflictedDamage} points of damage.</p>`;

      //CHECKING ATTACK INTERACTION

      if (monster2.status.includes('Sleep') && finalCharacter.weapon.attackType === "Edged")
      {
        monster2.healthPoints = 0;
        alert(`The ${monster2.name} was asleep, and was killed instantly with your attack.`);
        finalCharacter.greyOutAttackButtons(monster1, monster2);
        let updatedMonsterHP = document.querySelector("#monster-two-hp");
        updatedMonsterHP.innerHTML = `
              <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
              `;
      }

      else if (monster2.status.includes('Sleep') && finalCharacter.weapon.attackType !== "Edged")
      {
        alert(`The ${monster2.name} was asleep, but woke up after being struck by your ${finalCharacter.weapon.name}.`);
        monster2.healthPoints = monster2.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-two-hp");
        updatedMonsterHP.innerHTML = `
          <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
          `;
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`
        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster2.status.splice(monster2.status.indexOf('Sleep'), 1);

        finalCharacter.greyOutAttackButtons(monster1, monster2);
      }
      else if (monster2.status.includes('Charmed'))
      {
        alert(`The ${monster2.name} was charmed, but the charm was broken after being attacked`);
        monster2.healthPoints = monster2.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-two-hp");
        updatedMonsterHP.innerHTML = `
          <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
          `;

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster2.status.splice(monster2.status.indexOf('Charmed'), 1);
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`
        finalCharacter.greyOutAttackButtons(monster2, monster2);

      }


      else if (monster2.status.includes('Visibility Impaired'))
      {
        alert(`You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked`);
        monster2.healthPoints = monster2.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-two-hp");
        updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
            `;

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster2.status.splice(monster2.status.indexOf('Visibility Impaired'), 1);
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`
        finalCharacter.greyOutAttackButtons(monster1, monster2);

      }

      else if (monster2.healthPoints - inflictedDamage > 0)
      {

        monster2.healthPoints = monster2.healthPoints - inflictedDamage;
        let updatedMonsterHP = document.querySelector("#monster-two-hp");
        updatedMonsterHP.innerHTML = `
              <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
              `;
        //greying out attack module buttons when pressed

        finalCharacter.greyOutAttackButtons(monster1, monster2);


      } else if (monster2.healthPoints - inflictedDamage <= 0)
      {
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
                          <h4 id="monster-two-status">Status: ${monster2.status}</h4>   
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

        let removeMonsterTwoSpellHighlight = document.querySelectorAll(".monster-two-spell-list");
        for (let i = 0; i < removeMonsterTwoSpellHighlight.length; i++)
        {
          removeMonsterTwoSpellHighlight[i].classList.add("monster2-spell-dead");
        }

      }
      finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
    }

    let playerHitRollValue = (Math.ceil(Math.random() * 20) + finalCharacter.attributes[0].adjustment) + acAdjustment;

    if (playerHitRollValue > 20)
    {
      playerHitRollValue = 20;
    }

    let monsterArmorClass = monster1.armorClass;

    //END HITROLL VALUE

    let inflictedDamage2 = (Math.ceil(Math.random(1) * finalCharacter.weapon.damage) + finalCharacter.attributes[0].adjustment) + damageAdjustment;
    if (inflictedDamage2 <= 0)
    {
      inflictedDamage2 = 0;
    }

    let checkPlayerHitRoll = (playerHitRollValue1, monsterArmorClass1, playerHitRoll1) =>
    {
      if (finalCharacter.status.includes("Invisible"))
      {
        alert(`You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked`);
        finalCharacter.status.splice(finalCharacter.status.indexOf("Invisible"), 1);
        let playerStatus = document.querySelector("#char-status");
        playerStatus.innerHTML = `
          <h4 id="char-status" class="char-info-label">Status: 
          <span class="character-display-info">${finalCharacter.status}</span>
          </h4>`
      }
      for (let i = 0; i < playerHitRoll1.length; i++)
      {
        if (playerHitRoll1[i][0] === monsterArmorClass1)
        {
          if (playerHitRollValue1 < playerHitRoll1[i][1])
          {
            alert('Player misses!');
            finalCharacter.greyOutAttackButtons(monster1, monster2);
          } else
          {
            hitRollSucceed(monster1, finalCharacter);
          }
        }
      }
    }
    checkPlayerHitRoll(playerHitRollValue, monsterArmorClass, finalCharacter.hitRollTable);
  }

  spell2AttackMonster1(monster1, monster2, continueNextChapter, damage, spellName)
  {

    if (finalCharacter.status.includes("Invisible"))
    {
      alert(`You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked`);
      finalCharacter.status.splice(finalCharacter.status.indexOf("Invisible"), 1);
      let playerStatus = document.querySelector("#char-status");
      playerStatus.innerHTML = `
        <h4 id="char-status" class="char-info-label">Status: 
        <span class="character-display-info">${finalCharacter.status}</span>
        </h4>`
    }

    let self = this;

    let inflictedDamage = Math.ceil(

      Math.random(1) * damage
    );
    if (inflictedDamage <= 0)
    {
      inflictedDamage = 0;
    }

    let attackDialogue = document.querySelector("#dialogue");
    attackDialogue.innerHTML = `
        <p>You cast ${spellName} on the ${monster1.name} and cause ${inflictedDamage} points of damage.</p>`;

    //CHECKING ATTACK INTERACTION

    if (monster1.healthPoints === 0 || monster1.healthPoints === " ")
    {
      let attackDialogue = document.querySelector("#dialogue");
      attackDialogue.innerHTML = `
      <p>You cast ${spellName}, but it had no effect.</p>`;
      finalCharacter.greyOutAttackButtons(monster1, monster2);
    }
    else if (monster1.healthPoints - inflictedDamage > 0)
    {
      let isSleepingM1 = monster1.status.some((x) => x === "Sleep");

      if (isSleepingM1 === true)
      {
        alert(`The ${monster1.name} was asleep, but woke up after being struck by your spell.`);
        monster1.status.splice(monster1.status.indexOf('Sleep'), 1);
        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`;
      }

      monster1.healthPoints = monster1.healthPoints - inflictedDamage;
      let updatedMonsterHP = document.querySelector("#monster-one-hp");
      updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
            `;

      //greying out attack module buttons when pressed

      finalCharacter.greyOutAttackButtons(monster1, monster2);

    } else if (monster1.healthPoints - inflictedDamage <= 0)
    {
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
                    <h4 id="monster-one-status">Status: ${monster1.status}</h4>     
                </fieldset>   
            </div>`;
      defeatMonster1.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`;

      let removingMonster1SpellButton =
        document.getElementsByClassName("spell2-monster-one");
      removingMonster1SpellButton[0].classList.add("monster1-dead");

      let removingMonster1Button =
        document.getElementsByClassName("attack-monster-one");
      removingMonster1Button[0].classList.add("monster1-dead");

      let removeMonsterOneSpellHighlight = document.querySelectorAll(".monster-one-spell-list");
      for (let i = 0; i < removeMonsterOneSpellHighlight.length; i++)
      {
        removeMonsterOneSpellHighlight[i].classList.add("monster1-spell-dead");
      }
    }
    finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
  }

  spell2AttackMonster2(monster1, monster2, continueNextChapter, damage, spellName)
  {
    if (finalCharacter.status.includes("Invisible"))
    {
      alert(`You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked`);
      finalCharacter.status.splice(finalCharacter.status.indexOf("Invisible"), 1);
      let playerStatus = document.querySelector("#char-status");
      playerStatus.innerHTML = `
        <h4 id="char-status" class="char-info-label">Status: 
        <span class="character-display-info">${finalCharacter.status}</span>
        </h4>`
    }

    let self = this;

    let inflictedDamage = Math.ceil(
      Math.random(1) * damage
    );

    if (inflictedDamage <= 0)
    {
      inflictedDamage = 0;
    }

    let attackDialogue = document.querySelector("#dialogue");

    attackDialogue.innerHTML = `
    <p>You cast ${spellName} on the ${monster2.name} and cause ${inflictedDamage} points of damage.</p>`;


    //CHECKING ATTACK INTERACTION
    if (monster2.healthPoints === 0 || monster2.healthPoints === " ")
    {
      let attackDialogue = document.querySelector("#dialogue");
      attackDialogue.innerHTML = `
        <p>You cast ${spellName}, but it had no effect.</p>`;
      finalCharacter.greyOutAttackButtons(monster1, monster2);
      // finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
    }
    else if (monster2.healthPoints - inflictedDamage > 0)
    {
      let isSleepingM2 = monster2.status.some((x) => x === "Sleep");

      if (isSleepingM2 === true)
      {
        alert(`The ${monster2.name} was asleep, but woke up after being struck by your spell.`);
        monster2.status.splice(monster2.status.indexOf('Sleep'), 1);
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`;
      } else if (monster2.status.includes("Charmed"))
      {
        alert(`The ${monster2.name} was charmed, but the charm was broken after being struck by your spell.`);
        monster2.status.splice(monster2.status.indexOf('Charmed'), 1);
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`;
      }

      monster2.healthPoints = monster2.healthPoints - inflictedDamage;
      let updatedMonsterHP = document.querySelector("#monster-two-hp");
      updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
            `;
      //greying out attack module buttons when pressed

      finalCharacter.greyOutAttackButtons(monster1, monster2);

    } else if (monster2.healthPoints - inflictedDamage <= 0)
    {
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
                    <h4 id="monster-two-status">Status: ${monster2.status}</h4>    
                </fieldset>    
            </div>`;
      defeatMonster2.innerHTML = `
            <p>Congratulations, you defeated the Monster 2!</p>`;

      let removingMonster2SpellButton =
        document.getElementsByClassName("spell2-monster-two");
      removingMonster2SpellButton[0].classList.add("monster1-dead");

      let removingMonster2Button =
        document.getElementsByClassName("attack-monster-two");
      removingMonster2Button[0].classList.add("monster1-dead");
    }

    let removeMonsterTwoSpellHighlight = document.querySelectorAll(".monster-two-spell-list");
    for (let i = 0; i < removeMonsterTwoSpellHighlight.length; i++)
    {
      removeMonsterTwoSpellHighlight[i].classList.add("monster2-spell-dead");
    }
    finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
  }

  greyOutAttackButtons(monster1, monster2, images)
  {
    let attackButtons = document.querySelectorAll(".attack");

    for (let attackButton of attackButtons)
    {
      attackButton.classList.add("hidden");
    }

    let spellAttackButton = document.querySelector(".attack-spell");
    spellAttackButton.classList.add("hidden");

    let showMonsterAttackButton = document.querySelector("#monster-attack");
    showMonsterAttackButton.classList.remove("hidden");

    showMonsterAttackButton.onclick = function ()
    {
      if (monster1.healthPoints <= 0)
      {
        monster2.monsterAttack(monster1, monster2, finalCharacter.mirrorImages);
      } else
      {
        monster1.monsterAttack(monster1, monster2, finalCharacter.mirrorImages);
      }
    };
  };

  spell1Heal()
  {
    let healedCharHP = document.querySelector("#char-hp");
    finalCharacter.specialty.healthPoints +=
      finalCharacter.specialty.spell1.healing;
    if (
      finalCharacter.specialty.healthPoints >=
      finalCharacter.specialty.maxHealthPoints
    )
    {
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
    setTimeout(function ()
    {
      castedHealSpell.style.visibility = "visible";
    }, 60000);
  }

  //***TRYING TO CREATE AREA ATTACK SPELL

  areaAttackSpell(monster1, monster2, continueNextChapter, damage, spellName, spellDialogue)
  {
    let areaSpell = (item) =>
    {
      let self = this;

      if (damage <= 0)
      {
        damage = 0;
      }

      item.healthPoints -= damage;

      if (item.name === " ")
      {
        let attackDialogue = document.querySelector("#dialogue");

        attackDialogue.innerHTML += ` `;
      } else if (item.healthPoints <= 0)
      {
        let attackDialogue = document.querySelector("#dialogue");

        attackDialogue.innerHTML += `
            <p>${item.name} is dead.</p>`;
      } else
      {
        let attackDialogue = document.querySelector("#dialogue");

        let isSleepingMonster = item.status.some((x) => x === "Sleep");

        if (isSleepingMonster === true)
        {
          alert(`The ${item.name} was asleep, but woke up after being struck by your spell.`);
          item.status.splice(item.status.indexOf('Sleep'), 1);
        } else if (item.status.includes('Charmed'))
        {
          alert(`The ${item.name} was charmed, but the charm was broken after being struck by your spell.`);
          item.status.splice(item.status.indexOf('Charmed'), 1);
        }

        attackDialogue.innerHTML += `
            <p>You cause ${damage} points of damage on ${item.name}.</p>`;
      }
    };

    let self = this;
    this.monster1 = monster1;
    this.monster2 = monster2;

    let clearDialogue = document.querySelector("#dialogue");
    clearDialogue.innerHTML = spellDialogue;

    let monstersGroup = [monster1, monster2];
    monstersGroup.forEach(function (monster1, monster2, damage, spellName) { areaSpell(monster1, monster2, damage, spellName) });

    //checking if both monsters are dead

    if (monster1.healthPoints <= 0)
    {
      monster1.healthPoints = 0;
    }

    if (monster2.healthPoints <= 0)
    {
      monster2.healthPoints = 0;
    }

    let updatedMonster1HP = document.querySelector("#monster-one-hp");
    updatedMonster1HP.innerHTML = `
      <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
      `;

    let updatedMonster2HP = document.querySelector("#monster-two-hp");
    updatedMonster2HP.innerHTML = `
      <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
      `;

    let monster1Status = document.querySelector("#monster-one-status");
    monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster2.status.join(', ')}</h4>`;

    let monster2Status = document.querySelector("#monster-two-status");
    monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`;

    finalCharacter.greyOutAttackButtons(monster1, monster2, continueNextChapter);

    finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
  }

  confirmMonstersDead(monster1, monster2, continueNextChapter)
  {
    if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0)
    {

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
      updatePlayerTreasure.innerHTML = `
        <h4 id='char-treasure' class='char-info-label'>Treasure: <span class="character-display-info">${finalCharacter.treasure.gold.quantity}</span></h4>        
        `;
      let updatedExperience = document.querySelector("#char-experience");
      updatedExperience.innerHTML = `
          <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
          `;

      finalCharacter.checkLevelUp();

      defeatedMonsters.innerHTML = `
          <p>Congratulations, you won the battle!</p>
          <input type="submit" id="start-chapter-three-four" value="Continue">`;

      removeFightModule.innerHTML = ` `;


      finalCharacter.clearSpellTimeouts(finalCharacter.activeSpellStatuses);
      monster1.status = [];
      monster2.status = [];

      $("#monster-one-status").text(monster1.status);
      $("#monster-two-status").text(monster2.status);

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

  confirmMonsterStatus(monster1, monster2)
  {

    if (monster1.status.includes("Sleep"))
    {
      let sleepDialogue = document.querySelector("#dialogue");

      sleepDialogue.innerHTML += `
            <p>Monster 1 is asleep.</p>`;
    }

  }

  clearSpellTimeouts(spellTimeouts)
  {
    for (let spell in spellTimeouts)
    {
      console.log(finalCharacter.activeSpellStatuses);
      console.log("clearing spell timouts: " + spell)
      clearTimeout(spellTimeouts[spell]);
      delete spellTimeouts[spell]
    };
    finalCharacter.status = [];
    finalCharacter.mirrorImages = 0;

    let clearCharacterStatus = document.querySelector("#char-status");
    clearCharacterStatus.innerHTML = `
      <h4 id='char-status' class='char-info-label'>Status: <span class="character-display-info">${finalCharacter.status
      }</span></h4>`;
  }

}
