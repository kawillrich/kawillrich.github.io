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
} from "../mage-spells/mage-level-one-spells-class.js";
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
} from "../mage-spells/mage-level-two-spells-class.js";
import {
  clairvoyance,
  dispelMagic,
  fireBall,
  fly,
  haste,
  holdPerson,
  infravision,
  invisibilityTenFoot,
  lightningBolt,
  protectionFromEvilTenFoot,
  protectionFromNormalMissiles,
  waterBreathing,
} from "../mage-spells/mage-level-three-spells-class.js";

//==============================================end imports===============================================//

export default class MageLevels {
  constructor(level, specialtySkills, numberOfSpells) {
    this.level = level;
    this.specialtySkills = specialtySkills;
    this.numberOfSpells = numberOfSpells;
  }
}

let mageMedium = new MageLevels(
  {
    name: "Medium",
    level: 1,
    maxXP: 2499,
    savingThrows: {       
      "Poison or Death Ray": 13,
      "Magic Wand": 14,
      "Turn to Stone or Paralysis": 13,
      "Dragon Breath": 16,
      "Spells or Magic Staff": 15
  },

    hitRolls: [
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
    ],
  },
  {
    "First Level Mage Spells": " ",
    "Second Level Mage Spells": " ",
    "Third Level Mage Spells": " ",
  },
  [1, 0, 0]
);

let mageSeer = new MageLevels(
  {
    name: "Seer",
    level: 2,
    maxXP: 4999,
    savingThrows: {       
      "Poison or Death Ray": 13,
      "Magic Wand": 14,
      "Turn to Stone or Paralysis": 13,
      "Dragon Breath": 16,
      "Spells or Magic Staff": 15
  },

    hitRolls: [
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
    ],
  },
  {
    "First Level Mage Spells": " ",
    "Second Level Mage Spells": " ",
    "Third Level Mage Spells": " ",
  },
  [2, 0, 0]
);

let mageConjurer = new MageLevels(
  {
    name: "Conjurer",
    level: 3,
    maxXP: 9999,
    savingThrows: {       
      "Poison or Death Ray": 13,
      "Magic Wand": 14,
      "Turn to Stone or Paralysis": 13,
      "Dragon Breath": 16,
      "Spells or Magic Staff": 15
  },

    hitRolls: [
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
    ],
  },
  {
    "First Level Mage Spells": " ",
    "Second Level Mage Spells": " ",
    "Third Level Mage Spells": " ",
  },
  [3, 2, 2]
);

export { mageMedium, mageSeer, mageConjurer };
