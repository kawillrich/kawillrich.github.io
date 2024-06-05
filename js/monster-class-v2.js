import { finalCharacter, confirmAttackMonsters } from "./js_v14-3.js";

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

export default class Monster
{
  constructor (
    name,
    hitDice,
    healthPoints,
    armorClass,
    damage,
    experienceValue,
    alignment,
    attacks,
    treasure,
    isAlive,
    attackTypes,
    hitRoll,
    status,
    saveAs


  )
  {
    this.name = name;
    this.hitDice = hitDice;
    this.healthPoints = healthPoints;
    this.armorClass = armorClass;
    this.damage = damage;
    this.experienceValue = experienceValue;
    this.alignment = alignment || "Neutral";
    this.attacks = attacks;
    this.treasure = treasure;
    this.isAlive = isAlive || true;
    this.attackTypes = [];
    this.hitRoll = hitRoll;
    this.status = status;
    this.saveAs = saveAs;
    this.maxHP = this.hitDice[0] * 8;
    this.startingHealthPoints = 0;
  }

  //auto generating HD number of hitpoints for monsters
  createHitPoints()
  {
    if (
      this.healthPoints === 0 ||
      this.healthPoints === " " ||
      this.hitDice === 0 ||
      this.hitDice === " "
    )
    {
      return;
    } else
    {
      if (this.hitDice[0] < 1)
      {
        let newHPArray = [];
        let finalHPArray = [];
        for (let i = 0; i < this.hitDice[0]; i++)
        {
          let updatedHP = Math.ceil(Math.random(1) * 4);
          newHPArray.unshift(updatedHP);
        }
        const reducer = (previousValue, currentValue) =>
          previousValue + currentValue;
        finalHPArray = newHPArray.reduce(reducer) + this.hitDice[1];
        if (finalHPArray < 1)
        {
          finalHPArray = 1;
        }
        this.healthPoints = finalHPArray;
        this.startingHealthPoints = finalHPArray;
      } else
      {
        let newHPArray = [];
        let finalHPArray = [];
        for (let i = 0; i < this.hitDice[0]; i++)
        {
          let updatedHP = Math.ceil(Math.random(1) * 8);
          newHPArray.unshift(updatedHP);
        }
        const reducer = (previousValue, currentValue) =>
          previousValue + currentValue;
        finalHPArray = newHPArray.reduce(reducer) + this.hitDice[1];
        if (finalHPArray < 1)
        {
          finalHPArray = 1;
        }
        this.healthPoints = finalHPArray;
        this.startingHealthPoints = finalHPArray;
      }
    }
  }

  monsterAttack(monsterOne, monsterTwo, images)
  {
    alert(`Monster(s) Turn!`);
    //Determining what monster attacks first

    if (monsterTwo.healthPoints <= 0)
    {
      let attackingMonster = monsterOne;
      monsterOne.monstersTurn(attackingMonster, monsterTwo, attackingMonster.name, attackingMonster.damage, attackingMonster.healthPoints, attackingMonster.hitRoll, finalCharacter, monsterOne, monsterTwo, images);
    }
    else if (monsterOne.healthPoints <= 0 && monsterTwo.healthPoints > 0)
    {
      let attackingMonster = monsterTwo;
      monsterTwo.monstersTurn(attackingMonster, monsterOne, attackingMonster.name, attackingMonster.damage, attackingMonster.healthPoints, attackingMonster.hitRoll, finalCharacter, monsterOne, monsterTwo, images);
    }
    else
    {
      let randomMonsterAttack = Math.ceil(Math.random() * 2);
      if (randomMonsterAttack === 2)
      {
        let affectedMonster = monsterTwo;
        monsterTwo.monstersTurn(affectedMonster, monsterOne, affectedMonster.name, affectedMonster.damage, affectedMonster.healthPoints, affectedMonster.hitRoll, finalCharacter, monsterOne, monsterTwo, images);
      } else if (randomMonsterAttack <= 1)
      {
        let affectedMonster = monsterOne;
        monsterOne.monstersTurn(affectedMonster, monsterTwo, affectedMonster.name, affectedMonster.damage, affectedMonster.healthPoints, affectedMonster.hitRoll, finalCharacter, monsterOne, monsterTwo, images);
      }
    }
  }

  monstersTurn(thisMonster, otherMonster, monsterName, monsterDamage, monsterHealthPoints, monsterHitRoll, finalCharacter, monsterOne, monsterTwo, images)
  {
    let monstersHitRollValue = Math.ceil(Math.random() * 20);
    let charArmorClass = finalCharacter.armorClass;

    //CHECKING MONSTER STATUSES

    //asleep:
    if (thisMonster.status.includes("Sleep"))
    {
      this.sleepSpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)
    
    //webbed
    } else if (thisMonster.status.includes("Web"))
    {
      this.webSpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)

    //charmed
    } else if (thisMonster.status.includes("Charmed"))
    {
      this.charmSpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)

    //blinded
    } else if (thisMonster.status.includes("Blind"))
    {
      this.lightSpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)

    //visibility impaired
    } else if (thisMonster.status.includes("Visibility Impaired")) 
    {
      this.invisibilitySpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)
    

    //no statuses
    } else
    {
      this.checkMonsterHitRoll(thisMonster, otherMonster, monstersHitRollValue, charArmorClass, thisMonster.hitRoll, monsterOne, monsterTwo, images);

      //actual attack causing damage - maybe bypass depending on statuses

      if (finalCharacter.specialty.healthPoints <= 0)
      {
        alert("You died!");
        window.location.reload(false);
      } else
      {
        this.revertToAttackButtons();
        confirmAttackMonsters(monsterOne, monsterTwo);
      };
    }
  }

  webSpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)
  {
    $("#dialogue").text(`${thisMonster.name} is stuck in the web and cannot attack.`);
    this.revertToAttackButtons();
    confirmAttackMonsters(monsterOne, monsterTwo);
  }

  sleepSpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)
  {
    $("#dialogue").text(`${thisMonster.name} is asleep and cannot attack.`);
    this.revertToAttackButtons();
    confirmAttackMonsters(monsterOne, monsterTwo);
  }

  charmSpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)
  {
    if (otherMonster.healthPoints <= 0)
    {
      alert(`${thisMonster.name} is charmed and does not attack you.`)
      $("#dialogue").text(`${thisMonster.name} is charmed and does not attack you.`);
      this.revertToAttackButtons();
      confirmAttackMonsters(monsterOne, monsterTwo);
    } else if (otherMonster.healthPoints > 0)
    {
      alert(`${thisMonster.name} is charmed and attacks the ${otherMonster.name}!`)
      $("#dialogue").text(`${thisMonster.name} is charmed and attacks the ${otherMonster.name}!`);
      this.attackOtherMonster(thisMonster, otherMonster, monsterOne, monsterTwo)
    }
  }

  lightSpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)
  {
    $("#dialogue").text(`${thisMonster.name} is blinded and cannot attack.`);
    this.revertToAttackButtons();
    confirmAttackMonsters(monsterOne, monsterTwo);
  }

  invisibilitySpellReaction(thisMonster, otherMonster, monsterOne, monsterTwo)
  {
    $("#dialogue").text(`${thisMonster.name} cannot see you and does not attack.`);
    this.revertToAttackButtons();
    confirmAttackMonsters(monsterOne, monsterTwo);
  }

  revertToAttackButtons()
  {
    let showAttackButtons = document.querySelectorAll(".attack");
    for (let showAttackButton of showAttackButtons)
    {
      showAttackButton.classList.remove("hidden");
    };

    let spellAttackButton = document.querySelector(".attack-spell");
    spellAttackButton.classList.remove("hidden");

    let hideMonsterAttackButton =
      document.querySelector("#monster-attack");
    hideMonsterAttackButton.classList.add("hidden");
  };

  checkMonsterHitRoll(thisMonster, otherMonster, monsterHitRollValue1, charArmorClass1, monsterHitRoll1, monsterOne, monsterTwo, images) 
  {
    for (let i = 0; i < monsterHitRoll1.length; i++)
    {
      if (monsterHitRoll1[i][0] === charArmorClass1)
      {
        if (monsterHitRollValue1 < monsterHitRoll1[i][1])
        {
          alert(`${thisMonster.name} misses!`);
          this.revertToAttackButtons();
          confirmAttackMonsters(monsterOne, monsterTwo, images);

        } else if (finalCharacter.status.includes("Mirror Image") && images > 0)
        {
          images -= 1;
          finalCharacter.mirrorImages = images;
          if (images <= 0)
          {
            images = 0;
            let removeMirrorImage = finalCharacter.status.filter((x) => "Mirror Image");
            finalCharacter.status.splice(removeMirrorImage); //removing Mirror Image after function call
            let updateCharacterStatus = document.querySelector("#char-status");
            updateCharacterStatus.innerHTML = `
                <h4 id='char-status' class='char-info-label'>Status: <span class="character-display-info">${finalCharacter.status
              }</span></h4>`;
          };

          alert(`The ${thisMonster.name} attacks you and strikes one of your Mirror Images - there are ${images} left.`);

        } else
        {
          let monsterRandomDamage = Math.ceil(Math.random() * thisMonster.damage);

          finalCharacter.specialty.healthPoints = finalCharacter.specialty.healthPoints - monsterRandomDamage;
          alert(`The ${thisMonster.name} attacks you and causes ${monsterRandomDamage} points of damage.`);

          let updatedCharHP = document.querySelector("#char-hp");
          updatedCharHP.innerHTML = `
              <h4 id='char-hp' class='char-info-label'>Hit Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span><span id='hpBar'><progress id='hp-prog-bar' max="${finalCharacter.specialty.maxHealthPoints}" value="${finalCharacter.specialty.healthPoints}"></progress>${finalCharacter.specialty.healthPoints}/${finalCharacter.specialty.maxHealthPoints}</span></span></h4> 
              `;

          let clearDialogue = document.querySelector("#dialogue");
          clearDialogue.textContent = ``;

          this.revertToAttackButtons();
          confirmAttackMonsters(monsterOne, monsterTwo, images);
        }
      }
    }
  }

  attackOtherMonster(thisMonster, otherMonster, monsterOne, monsterTwo)
  {
    let monstersHitRollValue = Math.ceil(Math.random() * 20);
    for (let i = 0; i < thisMonster.hitRoll.length; i++)
    {
      if (thisMonster.hitRoll[i][0] === otherMonster.armorClass)
      {
        if (monstersHitRollValue < thisMonster.hitRoll[i][1])
        {
          alert(`${thisMonster.name} misses the ${otherMonster.name}!`);
          this.revertToAttackButtons();
          confirmAttackMonsters(monsterOne, monsterTwo);
        } else
        {
          let monsterRandomDamage = Math.ceil(Math.random() * thisMonster.damage);

          otherMonster.healthPoints = otherMonster.healthPoints - monsterRandomDamage;
          alert(`The ${thisMonster.name} attacks the ${otherMonster.name} and causes ${monsterRandomDamage} points of damage.`);

          //need to include follow on function when a monster kills the other
          if (otherMonster.healthPoints <= 0)
          {
            otherMonster.healthPoints = 0;
            this.monsterKilled(thisMonster, otherMonster, monsterOne, monsterTwo);

          } else if (thisMonster.name === monsterOne.name)
          {
            let updatedMonsterHP2 = document.querySelector("#monster-two-hp");

            updatedMonsterHP2.innerHTML = `
              <h4 id="monster-two-hp">Hit Points: ${otherMonster.healthPoints}<progress class='monster-hp-prog-bar' max="${otherMonster.startingHealthPoints}" value="${otherMonster.healthPoints}"></progress></h4> 
              `;
            let clearDialogue = document.querySelector("#dialogue");
            clearDialogue.textContent = ``;

            this.revertToAttackButtons();
            confirmAttackMonsters(monsterOne, monsterTwo);
          } else
          {
            let updatedMonsterHP1 = document.querySelector("#monster-one-hp");

            updatedMonsterHP1.innerHTML = `
              <h4 id="monster-one-hp">Hit Points: ${otherMonster.healthPoints}<progress class='monster-hp-prog-bar' max="${otherMonster.startingHealthPoints}" value="${otherMonster.healthPoints}"></progress></h4> 
              `;
            let clearDialogue = document.querySelector("#dialogue");
            clearDialogue.textContent = ``;

            this.revertToAttackButtons();
            confirmAttackMonsters(monsterOne, monsterTwo);
          }
        }
      }
    }
  }

  monsterKilled(thisMonster, otherMonster, monsterOne, monsterTwo)
  {
    if (thisMonster.name === monsterOne.name)
    {
      let updatedMonsterHP2 = document.querySelector("#monster-two-hp");

      updatedMonsterHP2.innerHTML = `
        <h4 id="monster-two-hp">Hit Points: ${otherMonster.healthPoints}<progress class='monster-hp-prog-bar' max="${otherMonster.startingHealthPoints}" value="${otherMonster.healthPoints}"></progress></h4> 
        `;
      let clearDialogue = document.querySelector("#dialogue");
      clearDialogue.textContent = ``;

      alert(`${monsterOne.name} killed ${monsterTwo.name}!`)

      this.revertToAttackButtons();
      confirmAttackMonsters(monsterOne, monsterTwo);
    } else if (thisMonster.name === monsterTwo.name)
    {
      let updatedMonsterHP1 = document.querySelector("#monster-one-hp");

      updatedMonsterHP1.innerHTML = `
        <h4 id="monster-one-hp">Hit Points: ${otherMonster.healthPoints}<progress class='monster-hp-prog-bar' max="${otherMonster.startingHealthPoints}" value="${otherMonster.healthPoints}"></progress></h4> 
        `;
      let clearDialogue = document.querySelector("#dialogue");
      clearDialogue.textContent = ``;

      alert(`The ${monsterTwo.name} killed the ${monsterOne.name}!`)

      this.revertToAttackButtons();
      confirmAttackMonsters(monsterOne, monsterTwo);
    }
  }
}

//initializing monsters

let noMonster = new Monster(" ", " ", " ", " ", " ", 0, " ", " ", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 0
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 0
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 0
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 0
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 0
  }
}, true, "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []);

let smallWolf = new Monster("Small Wolf", [2, 0], 8, 9, 4, 5, "Neutral", "Bite",
  {
    gold: {
      type: "Gold Pieces",
      gpValue: 1,
      quantity: 2
    },
    gems: {
      type: "Gems",
      gpValue: 10,
      quantity: 1
    },
    electrum: {
      type: "Electrum Pieces",
      gpValue: 2,
      quantity: 1
    },
    silver: {
      type: "Silver Pieces",
      gpValue: .1,
      quantity: 1
    },
    copper: {
      type: "Copper Pieces",
      gpValue: .01,
      quantity: 1
    }
  },
  true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []
);

let wolf1 = new Monster("Wolf", [2, 2], 18, 7, 6, 25, "Neutral", "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let wolf2 = new Monster("Wolf", [2, 2], 18, 7, 6, 25, "Neutral", "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let goblin = new Monster("Goblin", [1, -1], 4, 1, 1, 5, "Neutral", "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let goblin1 = new Monster("Goblin", [1, -1], 18, 1, 1, 5, "Neutral", "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let goblin2 = new Monster("Goblin", [1, -1], 3, 1, 1, 5, "Neutral", "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let fireBeetle = new Monster(
  "Fire Beetle",
  [1, 2],
  6,
  4,
  8,
  15,
  "Neutral",
  "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let fireBeetle1 = new Monster(
  "Fire Beetle",
  [1, 2],
  6,
  4,
  8,
  15,
  "Neutral",
  "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []

);

let fireBeetle2 = new Monster(
  "Fire Beetle",
  [1, 2],
  6,
  4,
  8,
  15,
  "Neutral",
  "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []

);

let fireBeetle3 = new Monster(
  "Fire Beetle",
  [1, 2],
  6,
  4,
  8,
  15,
  "Neutral",
  "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []

);

let fireBeetle4 = new Monster(
  "Fire Beetle",
  [1, 2],
  6,
  4,
  8,
  15,
  "Neutral",
  "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []

);

let hobGoblin = new Monster(
  "Hobgoblin",
  [1, 1],
  9,
  6,
  6,
  15,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []

);
let hobGoblin1 = new Monster(
  "Hobgoblin",
  [1, 1],
  9,
  6,
  6,
  15,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []

);

let hobGoblin2 = new Monster(
  "Hobgoblin",
  [1, 1],
  9,
  6,
  6,
  15,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []

);

let hobGoblin3 = new Monster(
  "Hobgoblin",
  [1, 1],
  9,
  6,
  6,
  15,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []

);
let hobGoblin4 = new Monster(
  "Hobgoblin",
  [1, 1],
  9,
  6,
  6,
  15,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []

);
let hobGoblin5 = new Monster(
  "Hobgoblin",
  [1, 1],
  9,
  6,
  8,
  15,
  "Chaotic",
  "Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 9], [8, 10], [7, 11], [6, 12], [5, 13], [4, 14], [3, 15], [2, 16], [1, 17], [0, 18], [-1, 19], [-2, 20], [-3, 20], [-4, 20], [-5, 20]],
  []

);

let bugBear = new Monster(
  "Bug Bear",
  [3, 1],
  19,
  5,
  7,
  3000,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 7], [8, 8], [7, 9], [6, 10], [5, 11], [4, 12], [3, 13], [2, 14], [1, 15], [0, 16], [-1, 17], [-2, 18], [-3, 19], [-4, 20], [-5, 20]], []

);

let bugBear1 = new Monster(
  "Bug Bear",
  [3, 1],
  19,
  5,
  7,
  3000,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 7], [8, 8], [7, 9], [6, 10], [5, 11], [4, 12], [3, 13], [2, 14], [1, 15], [0, 16], [-1, 17], [-2, 18], [-3, 19], [-4, 20], [-5, 20]], []

);

let bugBear2 = new Monster(
  "Bug Bear",
  [3, 1],
  19,
  5,
  7,
  75,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 7], [8, 8], [7, 9], [6, 10], [5, 11], [4, 12], [3, 13], [2, 14], [1, 15], [0, 16], [-1, 17], [-2, 18], [-3, 19], [-4, 20], [-5, 20]], []

);

let bugBear3 = new Monster(
  "Bug Bear",
  [3, 1],
  19,
  5,
  7,
  75,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 7], [8, 8], [7, 9], [6, 10], [5, 11], [4, 12], [3, 13], [2, 14], [1, 15], [0, 16], [-1, 17], [-2, 18], [-3, 19], [-4, 20], [-5, 20]], []

);

let bugBear4 = new Monster(
  "Bug Bear",
  [3, 1],
  19,
  5,
  7,
  75,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 7], [8, 8], [7, 9], [6, 10], [5, 11], [4, 12], [3, 13], [2, 14], [1, 15], [0, 16], [-1, 17], [-2, 18], [-3, 19], [-4, 20], [-5, 20]], []

);

let bugBear5 = new Monster(
  "Bug Bear",
  [3, 1],
  19,
  5,
  9,
  75,
  "Chaotic",
  "Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 7], [8, 8], [7, 9], [6, 10], [5, 11], [4, 12], [3, 13], [2, 14], [1, 15], [0, 16], [-1, 17], [-2, 18], [-3, 19], [-4, 20], [-5, 20]], []

);

let kobold = new Monster("Kobold", [0.5, 0], 4, 7, 4, 5, "Chaotic", "Club", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let kobold1 = new Monster("Kobold", [0.5, 0], 4, 7, 4, 5, "Chaotic", "Dagger", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let kobold2 = new Monster("Kobold", [0.5, 0], 4, 7, 4, 5, "Chaotic", "Club", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let kobold3 = new Monster("Kobold", [0.5, 0], 4, 7, 4, 5, "Chaotic", "Dagger", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let kobold4 = new Monster("Kobold", [0.5, 0], 4, 7, 4, 5, "Chaotic", "Club", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let kobold5 = new Monster("Kobold", [0.5, 0], 4, 7, 4, 5, "Chaotic", "Club", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let kobold6 = new Monster("Kobold", [0.5, 0], 4, 7, 4, 5, "Chaotic", "Club", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let orc = new Monster("Orc", [1, 0], 8, 6, 6, 10, "Chaotic", "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let orc1 = new Monster("Orc", [1, 0], 8, 6, 6, 10, "Chaotic", "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let orc2 = new Monster("Orc", [1, 0], 8, 6, 6, 10, "Chaotic", "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let orc3 = new Monster("Orc", [1, 0], 8, 6, 6, 10, "Chaotic", "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let orc4 = new Monster("Orc", [1, 0], 8, 6, 6, 10, "Chaotic", "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let orc5 = new Monster("Orc", [1, 0], 8, 6, 8, 10, "Chaotic", "Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let skeleton1 = new Monster("Skeleton", [1, 0], 8, 7, 4, 10, "Chaotic", "Club", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []
);

let skeleton2 = new Monster(
  "Skeleton",
  [1, 0],
  8,
  7,
  4,
  10,
  "Chaotic",
  "Dagger", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []

);

let skeleton3 = new Monster(
  "Skeleton",
  [1, 0],
  8,
  7,
  6,
  10,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []

);

let skeleton4 = new Monster(
  "Skeleton",
  [1, 0],
  8,
  7,
  6,
  10,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []

);
let skeleton5 = new Monster(
  "Skeleton",
  [1, 0],
  8,
  7,
  6,
  10,
  "Chaotic",
  "Short Sword", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",
  [[9, 10], [8, 11], [7, 12], [6, 13], [5, 14], [4, 15], [3, 16], [2, 17], [1, 18], [0, 19], [-1, 20], [-2, 20], [-3, 20], [-4, 20], [-5, 20]], []

);

let giantRacer = new Monster("Giant Racer", 2, 16, 5, 6, 20, "Neutral", "Bite", {
  gold: {
    type: "Gold Pieces",
    gpValue: 1,
    quantity: 2
  },
  gems: {
    type: "Gems",
    gpValue: 10,
    quantity: 1
  },
  electrum: {
    type: "Electrum Pieces",
    gpValue: 2,
    quantity: 1
  },
  silver: {
    type: "Silver Pieces",
    gpValue: .1,
    quantity: 1
  },
  copper: {
    type: "Copper Pieces",
    gpValue: .01,
    quantity: 1
  }
}, true,
  "melee",);

//exporting monsters

export
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
  bugBear1,
  kobold,
  kobold1,
};
