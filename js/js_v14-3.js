//imports modules

//weapon imports
import Weapon from './weapon-class-v2.js';
import { fists, normalSword, shortBow, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword, woodenClub, dagger, 
    silverDagger, battleAxe, handAxe, crossBow, shortSword, mace, javelin, poleArm, sling, spear, warHammer } from './weapon-class-v2.js';

//armor imports
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, scaleMail, plateMail, bandedMail, obsidianPlateMail } from './armor-class-v2.js';

//spell imports
import Spell from './spell-class-v2.js';
import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall, dragonFang, fireArrows} from './spell-class-v2.js';

//specialty imports
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, highMage, dragonWarrior, elf, dwarf, halfling, cleric, thief } from './specialty-class-v2.js';

//character imports
import Character from './character-class-v2.js';

//moster imports
import Monster from './monster-class-v2.js';
import { smallWolf, wolf1, wolf2, goblin, goblin1, goblin2, noMonster, fireBeetle, hobGoblin, bugBear, bugBear1, kobold, kobold1 } from './monster-class-v2.js';

//inventory imports
import Inventory from './inventory-class-v1.js';
import { raynardsCoin, farmersNote, noItem , eloisesRing, torch } from './inventory-class-v1.js';
// import { raynardsCoin1, farmersNote1, noItem1 , eloisesRing1 } from './inventory-array-v1.js';
import * as inventory from './inventory-array-v1.js';

//class-level-imports
import { fighterVeteran, fighterWarrior, fighterSwordmaster } from './character-class-levels/fighter-level-class.js';
import { veteranMedium, warriorSeer, swordMasterConjurer } from './character-class-levels/elf-level-class.js';
import { dragonWarriorVeteran } from './character-class-levels/dragon-warrior-level-class.js';

//mage spell imports
import { mageLevelOneSpells, magicMissile } from './mage-spells/mage-level-one-spells-class.js';
import { mageLevelTwoSpells } from './mage-spells/mage-level-two-spells-class.js';

//cleric spell imports
import { cureLightWoundsCleric, detectEvilCleric, detectMagicCleric, purifyFoodAdWaterCleric, lightSpellCleric, removeFearCleric, protectionFromEvilCleric, resistColdCleric } from './cleric-spells/cleric-level-one-spells-class.js';
import { blessCleric, findTrapsCleric, holdPersonCleric, knowAlignmentCleric, resistFire, silence15ftCleric, snakeCharmCleric, speakWithAnimalCleric} from './cleric-spells/cleric-level-two-spells-class.js';


//achievement imports
//import { noAchievements, killedFarmWolves, spokeToRaynard } from './achievements-v1.js';



//==============================================end imports===============================================//

//inializing character default values


let adventurerImage = 4;
let charAchievements = {};  
let attributes = [];

let strength = {
  name: "Strength",
  score: 9,
  adjustment: 0
};

let intelligence = {
  name: "Intelligence",
  score: 9,
  adjustment: 0,
};

let wisdom = {
  name: "Wisdom",
  score: 9,
  adjustment: 0,
};

let dexterity = {
  name: "Dexterity",
  score: 9,
  adjustment: 0,
};

let constitution = {
  name: "Constitution",
  score: 9,
  adjustment: 0,
};

let charisma = {
  name: "Charisma",
  score: 9,
  adjustment: 0,
};

attributes.unshift(strength, intelligence, wisdom, dexterity, constitution, charisma);

export let finalCharacter = new Character('Traveler', noSpecialty, noArmor, noWeapon, noItem, noItem, noItem, noItem, charAchievements, adventurerImage);
finalCharacter.inventory = [];

//Player sheet tab initialization
function openItem(e, linkName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(linkName).style.display = "block";
    e.currentTarget.className += " active";
  };

let normalEquipmentLink = document.querySelector('#normal-equipment-link');
normalEquipmentLink.addEventListener('click', function(e) { openItem(e, 'normal-equipment')}, false);

let magicalEqiupmentLink = document.querySelector('#magical-equipment-link');
magicalEqiupmentLink.addEventListener('click', function(e) { openItem(e, 'magical-equipment')}, false);

let spellsLink = document.querySelector('#spells-link');
spellsLink.addEventListener('click', function(e) { openItem(e, 'spells')}, false);

document.getElementById("normal-equipment-link").click();

//Animation data

let canvas = document.getElementById('canvas2');
let ctx = canvas.getContext('2d');
let CANVAS_WIDTH = canvas.width = 0;
let CANVAS_HEIGHT = canvas.height = 0;
const playerImage = new Image();
playerImage.src = "images/character-spritesheet.svg";
const spriteWidth = 64;
const spriteHeight = 64;
let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const staggerFrames = 8;
let reqAnim;

export function render() {
    frameY = finalCharacter.characterImage;
    canvas = document.getElementById('canvas2');
    ctx = canvas.getContext('2d');    
    CANVAS_HEIGHT = 200;
    CANVAS_WIDTH = 200;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth*3, spriteHeight*3);    
    requestAnimationFrame(render);
}

export function animate() {
    frameY = finalCharacter.characterImage;
    if(document.querySelector(".attack-monster-one")) {
        document.querySelector(".attack-monster-one").disabled = true;
    };
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth*3, spriteHeight*3);
    
    if (gameFrame % staggerFrames == 0){       
        if (frameX < 4) {
            frameX++;
        } else if (frameX >= 4) {
            frameX = 0;
            if (document.querySelector(".attack-monster-one")) {
                document.querySelector(".attack-monster-one").disabled = false;
            }
            return ;
        }    
    }    
    // console.log(frameX);
    gameFrame++;
    reqAnim = requestAnimationFrame(animate);
    
};

export function stopAnimate() {    
    window.cancelAnimationFrame(reqAnim);    
}

//initialized and clears selectedSpecialty

let selectedSpecialty = '';
//let finalWeapon = finalCharacter.weapon;

//tooltips

//asks if you are ready to start game

function charNameSubmitted() {
    var confirmStart = document.querySelector("#confirm-start");
    submittedCharName = document.querySelector("#character-name").value;
    confirmStart.textContent = `Welcome, ${submittedCharName}, are you ready to begin your journey?`;
    rollAttributes();    
};

//asks to start game

//ADDING ABILITY SCORE GENERATOR FUNCTION

function rollAttributes() {
    document.querySelector('#submit-name').classList.add("disabled");
    
    let getCharName = document.querySelector('#dialogue');
    getCharName.innerHTML = `
    Welcome, ${submittedCharName}, please roll your Attribute Scores. The maximum score is 18 and the lowest score is 7. Select 'Confirm' when done.<br>
    

    <div id="stats"><h3><b>Attributes</b></h3>
        <div class="ability-score-grid-container">            

            <div class="ability-score-header-grid-item ability-score-number-header-grid-item" id="header-stat"><b>Score</b></div>
            <div class="ability-score-header-grid-item ability-score-title-header-grid-item"><b>Attribute</b></div>
            <div class="ability-score-header-grid-item ability-score-header-adjustment-grid-item" id="header-stat-adjustment"><b>Adjustment</b></div>
           
            <div class="ability-score-grid-item ability-score-number-grid-item" id="strength-stat">9</div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Strength</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="strength-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="intelligence-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Intelligence</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="intelligence-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="wisdom-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Wisdom</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="wisdom-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="dexterity-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Dexterity</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="dexterity-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="constitution-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Constitution</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="constitution-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="charisma-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Charisma</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="charisma-stat-adjustment">0</div>



            
           
        </div>
    </div>
 
    <p id="dialogue">Choose your attributes.</p>
    <button id="generate-attributes">Roll</button>
    <button id="confirm-attributes">Confirm</button>
    `

    let getCharStrength = document.querySelector('#strength-stat');
    getCharStrength.innerHTML = strength.score;

    let getCharIntelligence = document.querySelector('#intelligence-stat');
    getCharIntelligence.innerHTML = intelligence.score;

    let getCharWisdom = document.querySelector('#wisdom-stat');
    getCharWisdom.innerHTML = wisdom.score;

    let getCharDexterity = document.querySelector('#dexterity-stat');
    getCharDexterity.innerHTML = dexterity.score;

    let getCharConstitution = document.querySelector('#constitution-stat');
    getCharConstitution.innerHTML = constitution.score;

    let getCharCharisma = document.querySelector('#charisma-stat');
    getCharCharisma.innerHTML = charisma.score;

    let rollNewAttributes = document.querySelector('#generate-attributes');
    rollNewAttributes.addEventListener('click', generateNewAttributes, false);

    let confirmAttributes = document.querySelector('#confirm-attributes');
    confirmAttributes.addEventListener('click', confirmingAttributes, false);

}

function generateNewAttributes() {



    attributes[0].score = (Math.ceil(Math.random() * 12) + 6);
    attributes[1].score = (Math.ceil(Math.random() * 12) + 6);
    attributes[2].score = (Math.ceil(Math.random() * 12) + 6);
    attributes[3].score = (Math.ceil(Math.random() * 12) + 6);
    attributes[4].score = (Math.ceil(Math.random() * 12) + 6);
    attributes[5].score = (Math.ceil(Math.random() * 12) + 6);
  
    let getCharStrength = document.querySelector('#strength-stat');
    getCharStrength.innerHTML = attributes[0].score;
  
    let getCharIntelligence = document.querySelector('#intelligence-stat');
    getCharIntelligence.innerHTML = attributes[1].score;
  
    let getCharWisdom = document.querySelector('#wisdom-stat');
    getCharWisdom.innerHTML = attributes[2].score;
  
    let getCharDexterity = document.querySelector('#dexterity-stat');
    getCharDexterity.innerHTML = attributes[3].score;
  
    let getCharConstitution = document.querySelector('#constitution-stat');
    getCharConstitution.innerHTML = attributes[4].score;
  
    let getCharCharisma = document.querySelector('#charisma-stat');
    getCharCharisma.innerHTML = attributes[5].score;

    for (let i = 0; i < attributes.length; i++) {
        if (attributes[i].score === 3) {
          attributes[i].adjustment = -3;
        } else if (attributes[i].score === 4 || attributes[i].score === 5) {
          attributes[i].adjustment = -2;
        } else if (attributes[i].score === 6 || attributes[i].score === 7 || attributes[i].score === 8) {
          attributes[i].adjustment = -1;
        } else if (attributes[i].score > 8 && attributes[i].score < 13) {
          attributes[i].adjustment = 0;
        } else if (attributes[i].score > 12 && attributes[i].score < 16) {
          attributes[i].adjustment = 1;
        } else if (attributes[i].score > 15 && attributes[i].score < 18) {
          attributes[i].adjustment = 2;
        } else if (attributes[i].score === 18) {
          attributes[i].adjustment = 3;
        }
      };

    let getCharStrengthAdj = document.querySelector('#strength-stat-adjustment');
    if (attributes[0].adjustment > 0) {
        getCharStrengthAdj.innerHTML = `+${attributes[0].adjustment}`;        
    } else {
        getCharStrengthAdj.innerHTML = attributes[0].adjustment;
    }

    let getCharIntelligenceAdj = document.querySelector('#intelligence-stat-adjustment');
    if (attributes[1].adjustment > 0) {
        getCharIntelligenceAdj.innerHTML = `+${attributes[1].adjustment}`;        
    } else {
    getCharIntelligenceAdj.innerHTML = attributes[1].adjustment;
    }
  
    let getCharWisdomAdj = document.querySelector('#wisdom-stat-adjustment');
    if (attributes[2].adjustment > 0) {
        getCharWisdomAdj.innerHTML = `+${attributes[2].adjustment}`;        
    } else {
    getCharWisdomAdj.innerHTML = attributes[2].adjustment;
    }

    let getCharDexterityAdj = document.querySelector('#dexterity-stat-adjustment');
    if (attributes[3].adjustment > 0) {
        getCharDexterityAdj.innerHTML = `+${attributes[3].adjustment}`;        
    } else {
    getCharDexterityAdj.innerHTML = attributes[3].adjustment;
    }

    let getCharConstitutionAdj = document.querySelector('#constitution-stat-adjustment');
    if (attributes[4].adjustment > 0) {
        getCharConstitutionAdj.innerHTML = `+${attributes[4].adjustment}`;        
    } else {
    getCharConstitutionAdj.innerHTML = attributes[4].adjustment;
    }
  
    let getCharCharismaAdj = document.querySelector('#charisma-stat-adjustment');
    if (attributes[5].adjustment > 0) {
        getCharCharismaAdj.innerHTML = `+${attributes[5].adjustment}`;        
    } else {
    getCharCharismaAdj.innerHTML = attributes[5].adjustment;
    }
  
    
  
  };

  function confirmingAttributes() {

    let rollNewAttributes = document.querySelector('#generate-attributes');

    let confirmAttributes = document.querySelector('#confirm-attributes');

    rollNewAttributes.style.pointerEvents = "none";
    rollNewAttributes.style.cursor = "not-allowed";
    rollNewAttributes.style.disabled = true;
    rollNewAttributes.style.opacity = .5;
  
    confirmAttributes.style.pointerEvents = "none";
    confirmAttributes.style.cursor = "not-allowed";
    confirmAttributes.style.disabled = true;
    confirmAttributes.style.opacity = .5;
  
    finalCharacter.attributes = attributes;


    let changeDialogue = document.querySelector("#dialogue");
    changeDialogue.innerHTML =
      `
    <p>You have successfully selected your attributes. Now select a an Alignment.</p><br>
    <div id="alignment-container"> 
        <div class="alignment-item" id="alignment-selection-container">
            <div id="lawful-container-item" class="alignment-container-item">
                <input type="radio" name="alignment" value="lawful" id="lawful" checked="checked" autofocus/>Lawful
            </div>
            <div id="neutral-container-item" class="alignment-container-item">
                <input type="radio" name="alignment" value="neutral" id="neutral" />Neutral
            </div>
            <div id="chaotic-container-item" class="alignment-container-item">
                <input type="radio" name="alignment" value="chaotic"id="chaotic" />Chaotic
            </div>
        </div>
        
        <div class="alignment-item" id="alignment-description-container">
            <div id="lawful-description" class="alignment-description">Lawful characters believe that everything should follow an order, and that obeying rules is the natural way of life. 
            Lawful creatures will try to tell the truth, obey laws, and care about all things. Lawful characters always try to keep their promises. They will try to obey laws as long as 
            such laws are fair and just. If a choice must be made between the benefit of the group or an individual, a Lawful character will usually choose the group.
            </div>

            <div id="neutral-description" class="alignement-description hidden no-display">Neutral characters believethat the works is a balance between Law and Chaos. It is important that neither side get
            too much power and upset this balance. The individual is important, but so it the group; the two sides must work together. A Neutral character is most interested in personal
            survival. Such characters believe in their own wits and abilities rather than luck.
            </div>

            <div id="chaotic-description" class="alignment-description hidden no-display">Chaotic characters are the opposite of Lawful characters. They believe that life is random, and that chance and 
            luck rule the world. Everything happens by accident and nother can be predicted. Laws are made to be broken, as long as a person can get away with it. It is not important to 
            keep promises, and lying and telling the truth are both useful. To a Chaotic creature, the individual is the most important of all things. Selfishness is the normal way of 
            life, and the group is not important.
            </div>    
        </div>
        <button id="beginAdventure" class="alignment-description">Continue</button>
    </div>


    
    
    `;

    let lawfulSelected = document.querySelector("#lawful");
    lawfulSelected.checked = true;
    finalCharacter.alignment = "Lawful";

    let neutralSelected = document.querySelector("#neutral");
    let chaoticSelected = document.querySelector("#chaotic");

    lawfulSelected.addEventListener('click', updateAlignmentDescription, false);
    neutralSelected.addEventListener('click', updateAlignmentDescription, false);
    chaoticSelected.addEventListener('click', updateAlignmentDescription, false);

    let beginningAdventure = document.querySelector('#beginAdventure');
    beginningAdventure.addEventListener('click', startGame, false);

  }


function updateAlignmentDescription() {
    let selectedAlignment = document.querySelector('input[name="alignment"]:checked').value;

    let updateAlignmentDescElement = document.querySelector("#alignment-description-container"); 
    if (selectedAlignment === "lawful") {
        finalCharacter.alignment = "Lawful";
        updateAlignmentDescElement.innerHTML = 
        `
        Lawful characters believe that everything should follow an order, and that obeying rules is the natural way of life. 
        Lawful creatures will try to tell the truth, obey laws, and care about all things. Lawful characters always try to keep their promises. They will try to obey laws as long as 
        such laws are fair and just. If a choice must be made between the benefit of the group or an individual, a Lawful character will usually choose the group.
        `
    } else if (selectedAlignment === "neutral") {
        finalCharacter.alignment = "Neutral";
        updateAlignmentDescElement.innerHTML = 
        `
        Neutral characters believethat the works is a balance between Law and Chaos. It is important that neither side get
            too much power and upset this balance. The individual is important, but so it the group; the two sides must work together. A Neutral character is most interested in personal
            survival. Such characters believe in their own wits and abilities rather than luck.
        `
    } else if (selectedAlignment === "chaotic") {
        finalCharacter.alignment = "Chaotic";
        updateAlignmentDescElement.innerHTML = 
        `
        Chaotic characters are the opposite of Lawful characters. They believe that life is random, and that chance and 
            luck rule the world. Everything happens by accident and nother can be predicted. Laws are made to be broken, as long as a person can get away with it. It is not important to 
            keep promises, and lying and telling the truth are both useful. To a Chaotic creature, the individual is the most important of all things. Selfishness is the normal way of 
            life, and the group is not important.
            `
    }

}


//TEST FUNCTION TO START GAME - creates player info
function startGame() {        
     console.log(finalCharacter);


    let maximizeMonsterInfo = document.querySelector('#monster-info');
    maximizeMonsterInfo.classList.remove('minimized');

    let maximizeCanvasAreaMonster = document.querySelector('#canvas-area-monster');
    maximizeCanvasAreaMonster.classList.remove('minimized');

    let maximizeCanvas3 = document.querySelector('#canvas3');
    maximizeCanvas3.classList.remove('minimized');

    let maximizeContainer2 = document.querySelector('#container-2');
    maximizeContainer2.classList.remove('minimized');

    let maximizePlayerSheet = document.querySelector('#player-sheet');
    maximizePlayerSheet.classList.remove('minimized');

    let maximizeMap = document.querySelector('#map');
    maximizeMap.classList.remove('minimized');

    let minimizeHeader = document.querySelector('#header');
    minimizeHeader.classList.add('minimized');

    let maximizeCanvas4 = document.querySelector('#canvas4');
    maximizeCanvas4.classList.remove('minimized');

    let newStartGameDialogue = document.querySelector("#character-info");
    newStartGameDialogue.style.backgroundImage = "none";
    newStartGameDialogue.innerHTML = `
        <div id='character-stats'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Player Data</legend>
                <h4 id='char-name' class='char-info-label'>Name: <span class="character-display-info">${submittedCharName}</span></h4>
                <h4 id='char-specialty' class='char-info-label'>Specialty: <span class="character-display-info">${finalCharacter.specialty.name}</span></h4>
                <h4 id='char-hp' class='char-info-label'>Hit Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment}</span><span id='hpBar'><progress id='hp-prog-bar' max="${finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment}" value="${finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment}"></progress>${finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment}/${finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment}</span></span></h4> 
                <h4 id='char-armor' class='char-info-label'>Armor: <div class="armor-tooltip" class="character-display-info">${finalCharacter.armor.name}<span class="armor-tooltiptext">Armor Class: ${finalCharacter.armor.armorClass}</span></div></h4> 
                <h4 id='char-weapon' class='char-info-label'>Weapon: <div class="weapon-tooltip" class="character-display-info">${finalCharacter.weapon.name}<span class="weapon-tooltiptext">Damage: d${finalCharacter.weapon.damage}</span></div></h4>
                <h4 id='char-spell1' class='char-info-label'>Spell 1: <span class="character-display-info">${finalCharacter.specialty.spell1.name}</span></h4>
                <h4 id='char-spell2' class='char-info-label'>Spell 2: <span class="character-display-info">${finalCharacter.specialty.spell2.name}</span></h4>
                <h4 id='char-spell2' class='char-info-label'>Spell 3: <span class="character-display-info">${finalCharacter.specialty.spell3.name}</span></h4>
                <h4 id='char-experience' class='char-info-label'>Experience: <span class="character-display-info">${finalCharacter.specialty.characterExperience}</span></h4>
               
            </fieldset>
        </div>
        <div id='character-attributes'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Attributes</legend>
                <h4 id='char-strength' class='char-info-label'><span class='character-display-attributes'>Attribute: </span><span class='character-display-attributes-scores'>Score: </span><span class='character-display-attributes-scores-adj'>Adj: </span></h4>
                <h4 id='char-strength' class='char-info-label'><span class='character-display-attributes'>${finalCharacter.attributes[0].name}: </span><span class='character-display-attributes-scores'>${finalCharacter.attributes[0].score}</span><span class='character-display-attributes-scores-adj'>${finalCharacter.attributes[0].adjustment}</span></h4>
                <h4 id='char-intelligence' class='char-info-label'><span class='character-display-attributes'>${finalCharacter.attributes[1].name}: </span><span class='character-display-attributes-scores'>${finalCharacter.attributes[1].score}</span><span class='character-display-attributes-scores-adj'>${finalCharacter.attributes[1].adjustment}</span></h4>
                <h4 id='char-wisdom' class='char-info-label'><span class='character-display-attributes'>${finalCharacter.attributes[2].name}: </span><span class='character-display-attributes-scores'>${finalCharacter.attributes[2].score}</span><span class='character-display-attributes-scores-adj'>${finalCharacter.attributes[2].adjustment}</span></h4>
                <h4 id='char-dexterity' class='char-info-label'><span class='character-display-attributes'>${finalCharacter.attributes[3].name}: </span><span class='character-display-attributes-scores'>${finalCharacter.attributes[3].score}</span><span class='character-display-attributes-scores-adj'>${finalCharacter.attributes[3].adjustment}</span></h4>
                <h4 id='char-constitution' class='char-info-label'><span class='character-display-attributes'>${finalCharacter.attributes[4].name}: </span><span class='character-display-attributes-scores'>${finalCharacter.attributes[4].score}</span><span class='character-display-attributes-scores-adj'>${finalCharacter.attributes[4].adjustment}</span></h4>
                <h4 id='char-charisma' class='char-info-label'><span class='character-display-attributes'>${finalCharacter.attributes[5].name}: </span><span class='character-display-attributes-scores'>${finalCharacter.attributes[5].score}</span><span class='character-display-attributes-scores-adj'>${finalCharacter.attributes[5].adjustment}</span></h4>
            </fieldset>
        </div>
        
        </div id="canvas-area">
          <fieldset class= 'canvas-info-module-player'>
            <legend class='canvas-dashboard'>Arena</legend>
            <canvas id="canvas2" height="200" width="200"></canvas>
           </fieldset>
        </div>                
        `;  
        

        // let addItemToInventory = document.querySelector('#normal-equipment-list');
        let showInventory = () => {
            let accumulator = "";
  
            for (let i = 0; i < finalCharacter.inventory.length; i++ ) {
                accumulator += `${finalCharacter.inventory[i].name} <br>`;
            }

            console.log(accumulator);
            return accumulator;
        }

        let updatedInventory = document.querySelector('#normal-equipment-list');
        updatedInventory.innerHTML = showInventory();

        showInventory();

        // addItemToInventory.innerHTML += `<br> ${raynardsCoin.name}`;   

        // for (let i = 0; i < finalCharacter.inventory.length; i++ ) {
        //     let updateInventory = document.querySelector('#normal-equipment-list').innerHTML;

        //     updateInventory =+ finalCharacter.inventory[i].name;
        //     console.log(updateInventory);
            
            
        // }
    

        render();
        
    let chapterOne = document.querySelector('#dialogue');
    chapterOne.innerHTML = `
        <p>After a good night's sleep, you wake up in your room in the Blue Blade Inn. The inn is located in Gryphon's Keep, a small, 
        run-down fortress town built in the old days before the Golden Age. As your eyes open and you look around, you observe 
        your small, but well kept room. You chose this inn because you know the innkeeper, Raynard Helmsforger, is a meticulous (well-organized) man 
        and he understands the importance of rest for someone like you. Raynard himself was an adventurer in his youth. At that time, 
        he was lean, agile, and had the dexterity (relfexes) of a panther. Looking at him now, you wouldn't necessarily know that, but 
        his reputation precedes him, and everyone from your village of Everglade Forest knows his past.</p>
        
        <p>You sit up and stretch - feeling good from a full night's sleep. You close your eyes, take a deep breath in, and then 
        exhale. As you breath out, you remember the training your father taught you - breathe in....hold...exhale...pause. This simple
        act, as you know, allows you to focus your thoughts and dispel any doubt and negativity you may have wandering in your mind. You
        feel the fresh air coming in and the exhale of any wasted thoughts. This focus and training is part of what has allowed you to 
        act so effective and swiftly.  During training, you noticed how the others would let the worry and doubt consume them...and ultimately
        prevent them from becoming focused, patient, and ready.  </p>
        
        <p>As you conduct your breathing Kata, you remember your parents, your brother, Kiyan, and your sister, Avalera. You feel as though
        everything you've done in life has taken you up to this point. Then, with your clear and focused mind, you meticulously begin 
        preparing and packing your things.</p>
        
        <p>What is your Class?</p>
        
        <input type = "radio" name="selected-specialty" value="fighter" id="fighter"/> Fighter        
        <input type = "radio" name="selected-specialty" value="mage" id="mage"/> Magic-User
        <input type = "radio" name="selected-specialty" value="thief" id="thief"/> Thief
        <input type = "radio" name="selected-specialty" value="dwarf" id="dwarf"/> Dwarf
        <input type = "radio" name="selected-specialty" value="elf" id="elf"/> Elf
        <input type = "radio" name="selected-specialty" value="halfling" id="halfling"/> Halfling
        <input type = "radio" name="selected-specialty" value="cleric" id="cleric"/> Cleric

        <input type = "radio" name="selected-specialty" value="dragonwarrior" class="dragonwarrior"/><span id="dragonwarrior">Dragon Fighting</span>
        </p>`;
        
        let submittingCharSpecialtyFighter = document.querySelector("#fighter");
        submittingCharSpecialtyFighter.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyMage = document.querySelector("#mage");
        submittingCharSpecialtyMage.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyDragon = document.querySelector(".dragonwarrior");
        submittingCharSpecialtyDragon.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyCleric = document.querySelector("#cleric");
        submittingCharSpecialtyCleric.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyThief = document.querySelector("#thief");
        submittingCharSpecialtyThief.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyElf = document.querySelector("#elf");
        submittingCharSpecialtyElf.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyHalfling = document.querySelector("#halfling");
        submittingCharSpecialtyHalfling.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyDwarf = document.querySelector("#dwarf");
        submittingCharSpecialtyDwarf.addEventListener('click', logCharSpecialty, false);
};

//updates character attributes
//return out finalCharacter?
function logCharSpecialty() {
    
    selectedSpecialty = document.querySelector('input[name="selected-specialty"]:checked').value;
    if (selectedSpecialty === "fighter") {
        // console.log('fighter');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = warrior; 
        finalCharacter.armor = leatherArmor; 
        finalCharacter.weapon = shortSword;
        finalCharacter.inventory = [torch];
        finalCharacter.enchantedItem = noItem;
        finalCharacter.characterImage = 2;
        console.log(finalCharacter);

        finalCharacter.characterUpdate();              
                
    } else if (selectedSpecialty === "mage") {
        // console.log('mage');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = highMage; 
        finalCharacter.armor = robes; 
        finalCharacter.weapon = fists;
        finalCharacter.inventory = [torch];
        finalCharacter.enchantedItem = noItem;
        finalCharacter.characterImage = 3;
        finalCharacter.specialty.characterLevel.specialtySkills["First Level Mage Spells"] = {magicMissile};
        console.log(finalCharacter);
        finalCharacter.characterUpdate();      

        
    } else if (selectedSpecialty === "dragonwarrior") {
        // console.log('dragonwarrior');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = dragonWarrior; 
        finalCharacter.armor = obsidianPlateMail; 
        finalCharacter.weapon = obsidianSword;
        finalCharacter.inventory = [torch];
        finalCharacter.enchantedItem = eloisesRing;
        finalCharacter.characterImage = 0;
        console.log(finalCharacter);

        finalCharacter.characterUpdate();   
        
    } else if (selectedSpecialty === "thief") {
        // console.log('dragonwarrior');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = thief; 
        finalCharacter.armor = leatherArmor; 
        finalCharacter.weapon = shortBow;
        finalCharacter.inventory = [torch];
        finalCharacter.enchantedItem = noItem;
        finalCharacter.characterImage = 1;
        console.log(finalCharacter);

        finalCharacter.characterUpdate();   
        
        
    } else if (selectedSpecialty === "cleric") {
        // console.log('dragonwarrior');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = cleric; 
        finalCharacter.armor = leatherArmor; 
        finalCharacter.weapon = mace;
        finalCharacter.inventory = [torch];
        finalCharacter.enchantedItem = noItem;
        finalCharacter.characterImage = 4;
        console.log(finalCharacter);

        finalCharacter.characterUpdate();   
        
        
    } else if (selectedSpecialty === "dwarf") {
        // console.log('dragonwarrior');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = dwarf; 
        finalCharacter.armor = leatherArmor; 
        finalCharacter.weapon = normalSword;
        finalCharacter.inventory = [torch];
        finalCharacter.enchantedItem = noItem;
        finalCharacter.characterImage = 6;
        console.log(finalCharacter);

        finalCharacter.characterUpdate();   
        
        
    } else if (selectedSpecialty === "elf") {
        // console.log('dragonwarrior');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = elf; 
        finalCharacter.armor = leatherArmor; 
        finalCharacter.weapon = shortBow;
        finalCharacter.inventory = [torch];
        finalCharacter.enchantedItem = noItem;
        finalCharacter.characterImage = 5;
        console.log(finalCharacter);

        finalCharacter.characterUpdate();   
        
        
    } else if (selectedSpecialty === "halfling") {
        // console.log('dragonwarrior');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = halfling; 
        finalCharacter.armor = leatherArmor; 
        finalCharacter.weapon = shortBow;
        finalCharacter.inventory = [torch, dagger];
        finalCharacter.enchantedItem = noItem;
        finalCharacter.characterImage = 7;
        console.log(finalCharacter);

        finalCharacter.characterUpdate();         
        
    } else {
        // console.log ('none');
    };    
    beginJourney();
};
        
let submittedCharName = document.querySelector("#submit-name");
submittedCharName.addEventListener('click', charNameSubmitted, false);

//confirms your specialty and continues the gameplay

function beginJourney() {
    var readyBeginJourney = document.querySelector('#dialogue');
    let readyBeginJourneyButton = document.querySelector('#dialogue #ready');
    if (readyBeginJourneyButton === null) {
        let createReadyButton = document.createElement('input');
        createReadyButton.type = "submit";
        createReadyButton.value= "Confirm";
        createReadyButton.id = "ready";
        readyBeginJourney.appendChild(createReadyButton);
        var beginningGame = document.querySelector("#ready");
        beginningGame.addEventListener('click', beginChapterTwo, false);
    } else {
        return;    
    };
};

//CHAPTER TWO

function beginChapterTwo() {

    if (finalCharacter.specialty.name === 'High Mage' || finalCharacter.specialty.name === "Elf") {
        pickMageSpells();
    } else if (finalCharacter.specialty.name === 'Cleric') {
        pickClericSpells();
    }

    console.log(finalCharacter);
    let JSONcharacter = JSON.stringify(finalCharacter);
    //console.log(JSONcharacter);

    finalCharacter.specialty.healthPoints = finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment;
    finalCharacter.specialty.maxHealthPoints = finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment;
    // finalCharacter.weapon.damage = finalCharacter.weapon.damage + finalCharacter.attributes[0].adjustment;
    // console.log('Begin');
    let chapterTwo = document.querySelector('#dialogue');
    chapterTwo.innerHTML = `
    <p>As you pack up your belongings, you know your ${finalCharacter.specialty.name} training will serve you well. You pick up your ${finalCharacter.weapon.name} and slide your 
    hand along it. You remember how much time and effort you put into practicing to become proficient (skilled) with it. You don (put on) your ${finalCharacter.armor.name} and 
    and the smell brings you back to your training, remembering what it feels like when you get hit, and how it feels on your body when you strike. These familiar
    memories make you feel at home and bring a reassurance to your mind about what you are about to do. Others have left on the same journey, and none have returned.  
    Are you better than them? Will you make it? Or will you share their fate? As you complete preparing, you finish a small bit of tea and some bread with cheese you prepared 
    for breakfast, knowing you must have a good breakfast for the long walk ahead of you.</p>
    <p>After finishing the last of your breakfast, you head down to the main floor of the inn. You see the innkeeper, Raynard, sitting at the counter. You've already paid for 
    one night of sleep, would you like to speak with Raynard on your way out?</p> 
    <input type="submit" id="talk-raynard-yes" value="Yes"><input type="submit" id="talk-raynard-no" value="No"><br> 
    
    `;    
   
    // let castingSpell = document.querySelector('#cast-spell');
    // castingSpell.addEventListener('click', finalCharacter.specialty.characterLevel.specialtySkills.mageFirstLevelSpells.magicMissile.castingEffect, false);

    var talkToRaynardYes = document.querySelector("#talk-raynard-yes");
    talkToRaynardYes.addEventListener('click', talkToRaynard, false);

    var talkToRaynardNo = document.querySelector("#talk-raynard-no");
    talkToRaynardNo.addEventListener('click', startChapterThreeOne, false);
}; 

function pickMageSpells() {
    alert('Pick Mage Spells');
    let showMageSpellsList = document.querySelector('.hide-mage-container')
    showMageSpellsList.classList.add('show-mage-spells');
    console.log(finalCharacter.specialty.characterLevel.numberOfSpells[0]);
    selectLevelOneMageSpells();
    selectLevelTwoMageSpells();
    selectLevelThreeMageSpells()


};

function pickClericSpells() {
    alert('Pick Cleric Spells');
};

function selectLevelOneMageSpells() {
    if (finalCharacter.specialty.characterLevel.numberOfSpells[0] > 0) {
      let mageFirstLevelSpells = document.getElementById('mage-first-level-spell-list').getElementsByTagName("input");
      let limit = finalCharacter.specialty.characterLevel.numberOfSpells[0];
      for (let i = 0; i < mageFirstLevelSpells.length; i++) {
        mageFirstLevelSpells[i].onclick = function () {
          let checkedcount = 0;
          for (let i = 0; i < mageFirstLevelSpells.length; i++) {
            checkedcount += (mageFirstLevelSpells[i].checked) ? 1 : 0;
          }
          if (checkedcount > limit) {
            console.log("You can select maximum of " + limit + " spell(s).");
            alert("You can select maximum of " + limit + " spell(s).");
            this.checked = false;
          }
        }
      }
    } else {
      let mageFirstLevelSpells = document.getElementById('mage-first-level-spell-list').getElementsByTagName("input");
      for (let i = 0; i < mageFirstLevelSpells.length; i++) {
      mageFirstLevelSpells[i].classList.add('grey-out');
    //   document.querySelector('#submit-spells').classList.add('grey-out');
  
      }
    }
  }
  
  function selectLevelTwoMageSpells() {
    if (finalCharacter.specialty.characterLevel.numberOfSpells[1] > 0) {
      let mageSecondLevelSpells = document.getElementById('mage-second-level-spell-list').getElementsByTagName("input");
      let limit = finalCharacter.specialty.characterLevel.numberOfSpells[1];
      for (let i = 0; i < mageSecondLevelSpells.length; i++) {
        mageSecondLevelSpells[i].onclick = function () {
          let checkedcount = 0;
          for (let i = 0; i < mageSecondLevelSpells.length; i++) {
            checkedcount += (mageSecondLevelSpells[i].checked) ? 1 : 0;
          }
          if (checkedcount > limit) {
            console.log("You can select maximum of " + limit + " spell(s).");
            alert("You can select maximum of " + limit + " spell(s).");
            this.checked = false;
          }
        }
      }
    } else {
      let removeMageSecondLevelSpells = document.querySelector('#mage-second-level-spell-list')
      removeMageSecondLevelSpells.classList.add("hide-mage-container");
      let mageSecondLevelSpells = document.getElementById('mage-second-level-spell-list').getElementsByTagName("input");
      for (let i = 0; i < mageSecondLevelSpells.length; i++) {
      mageSecondLevelSpells[i].classList.add('grey-out');
    //   document.querySelector('#submit-spells').classList.add('grey-out');
  
      }
    }
  }

  function selectLevelThreeMageSpells() {
    if (finalCharacter.specialty.characterLevel.numberOfSpells[2] > 0) {
      let mageThirdLevelSpells = document.getElementById('mage-third-level-spell-list').getElementsByTagName("input");
      let limit = finalCharacter.specialty.characterLevel.numberOfSpells[2];
      for (let i = 0; i < mageThirdLevelSpells.length; i++) {
        mageThirdLevelSpells[i].onclick = function () {
          let checkedcount = 0;
          for (let i = 0; i < mageThirdLevelSpells.length; i++) {
            checkedcount += (mageThirdLevelSpells[i].checked) ? 1 : 0;
          }
          if (checkedcount > limit) {
            console.log("You can select maximum of " + limit + " spell(s).");
            alert("You can select maximum of " + limit + " spell(s).");
            this.checked = false;
          }
        }
      }
    } else {
      let removemageThirdLevelSpells = document.querySelector('#mage-third-level-spell-list')
      removemageThirdLevelSpells.classList.add("hide-mage-container");
      let mageThirdLevelSpells = document.getElementById('mage-third-level-spell-list').getElementsByTagName("input");
      for (let i = 0; i < mageThirdLevelSpells.length; i++) {
      mageThirdLevelSpells[i].classList.add('grey-out');
    //   document.querySelector('#submit-spells').classList.add('grey-out');
  
      }
    }
  }


function submitAllMageSpells() {


}


function talkToRaynard() {
    // console.log('Talking to Raynard');
    let talkingToRaynard = document.querySelector('#dialogue');
    talkingToRaynard.innerHTML = `
    <p>"Good Morning, ${finalCharacter.name}. I hope you slept well. You know, I remember stories of the dragon Soul Stealer. My father's father's grandfather told me of the 
    dragon arriving to the ruins and hoarding a treasure so valuable that many travellers lost their lives looking for it. Did you know that I have also wandered to those ruins
    in my younger years? I remember there being two paths towards the ruins - one path that was easily seen along the north of a forest, but there is another that was less 
    travelled. I learned of this path from a young woman mage who used to live in the forest many moons (years) ago. That was a long time ago, but I believe it would still 
    be possible to find that path if you look hard enough. Beyond the farm, travel East. The path is marked by a large boulder with a strange circular carving in it. That 
    is the entrance."</p>  

    <p>Raynard continued, "I, unfortunately ended up not making it all the way to the ruins where Soul Stealer lives, however, because on my way, I reached some old desert ruins just before his liar.  
    In those ruins, I removed my armor and was preparing for the battle, but I rushed to the aid of a young woman who was gravely injured by the hands of a pack of orcs. I 
    ended up tending her wounds, and we fled the orcs. I returned here, where I took care of her and ended up marrying her. I left my adventures behind, but if you find your 
    way along the hidden path, to the misty forest, and through the underground caves to the desert ruins, you may indeed find my old armor there. Before I forget - if you see 
    Glandar, the owner of the Black Horse Farm, give him this: it's a silver coin. He'll know it's from me. If you give this to him, he will provide you with a place to rest 
    and some extra food for the journey. Talk to him about the forest, he will have information for you. Good luck, ${finalCharacter.name} - I wish you well."</p>

    <p>You thank Raynard for his help, shake his hand, and leave the inn.</p>
    
    <input type="submit" id="start-chapter-three" value="Continue">`;

    finalCharacter.achievements.spokeToRaynard = {name: "Spoke to Raynard", desc: "Spoke to Raynard and received his coin."};
    // console.log(finalCharacter.achievements); 

    // finalCharacter.inventory1 = raynardsCoin;    
    finalCharacter.inventory.push(raynardsCoin);    

    console.log(finalCharacter.inventory);
   
    var continueChapterThreeOne = document.querySelector("#start-chapter-three");
     
    continueChapterThreeOne.addEventListener('click', function() {
        let raynardsCoinIndex = finalCharacter.inventory.indexOf(raynardsCoin);
        console.log(finalCharacter.inventory);
        alert(`You received ${finalCharacter.inventory[raynardsCoinIndex].name}`);
        let addItemToInventory = document.querySelector('#normal-equipment-list');
        addItemToInventory.innerHTML += `${raynardsCoin.name}`;    
        })
        continueChapterThreeOne.addEventListener('click', startChapterThreeOne, false);
        
};

//CHAPTER THREE ONE

function startChapterThreeOne() {
   
    // console.log('Chapter Three-one');
    let chapterThreeOne = document.querySelector('#dialogue');
    chapterThreeOne.innerHTML = `
    <p>As you depart the Blue Blade Inn, you feel confident in what you are about the journey you are about to embark on (begin). You've heard stories from others about the 
    road that leads to a small farm town outside Gryphon's Keep. This road is a mere cart and horse path with two ruts in the dirt where the wagon wheels have worn small 
    ditches in the road over time. The small farm, called the Black Horse Farm, is the last settlement along a large set of woods that span quite a distance to the east.  
    This farm provides some food, animals, and goods to the people of Gryphon's Keep, so the family that owns the Black Horse Farm is known to many here. 
    </p>
    <p>The woods adjacent to the farm is known as the Forgotten Woods. The woods consist mostley of coniferous (pine) trees over flat land sprinkled with some boulders.  
    The woods house many animals such as deer, coyotes, beavers, rabbits, various birds, and other woodland creatures. From what you've heard, there are several brooks 
    throughout the woods, an occasional pond, and some swampy areas. However, it isn't these woods that concern you - it's the forest on the other side of the woods that does.  
    It is rumored that the forest is home to various creatures that don't come out in open fields or the woods. Some of these creatures are said to be mystical, forgotten 
    beings who stay lurking in the shadows since the Godlen Age. One thing is for certain - no one goes into the forest. The Forgotten Woods is much like a 'buffer' between the 
    forest and the the settled areas. It's almost like there is a mutual undestanding that nothing from the forest goes beyond the woods, and no human from the villages go 
    into the forest. The path you've heard about from other adventurers takes you around the northern part of the forest.  
    </p>
    
    <input type="submit" id="start-chapter-three-two" value="Continue">`;
     var startChapterThreeTwo = document.querySelector("#start-chapter-three-two");
     startChapterThreeTwo.addEventListener('click', continueChapterThreeTwo, false);
};

//CHAPTER THREE TWO

function continueChapterThreeTwo() {
    // console.log('Chapter Three-two');
    let chapterThreeTwo = document.querySelector('#dialogue');
    chapterThreeTwo.innerHTML = `
    <p>You find the main road in town and head south until you find the horse cart path running East. You take one look back, beathe in...hold...and exhale. You follow the 
    horse cart path.  
    </p>
    <p>You walk along the past and Gryphon's keep gets farther in the distance and the noise of the village disappears. Part of you likes the queit, you've always been one 
    to enjoy time to yourself - and in some cases - you prefer it. The confident feeling of being on your own, relying on yourself, and accomplishing hard tasks alone 
    has contributed to your self-confidence. You wouldn't be considered arrogant, just confident. Some of your friends and family would mention how you were calm and 
    composed under pressure, but also, how you never bragged about your accomplishments.</p>  
    
    <p>While you think about your past, you also look around you.  The horse cart road is dirt where the cart wheels travel, but grassy everywhere else.  The road is not 
    well-travelled, but it's also not overgrown.  There are some smaller, overgrown paths that lead to the left and right of the road, most likely from people travelling 
    to outlying farms and orchards.  The land around you is open fields, dotted with some maple trees, white birch trees, and an occasional apple orchard.  It's autumn now, 
    prime season for picking apples.  The air is cool, but not too cold.  It's perfect weather to be outside.  You feel a light breeze on your face, and the sky has streaks 
    of clouds, some passing between you and the sun, ocassionally casting shade over the land.  
    </p>

    <p>In front of you, you notice a small dark shape and light dust kicking up along the road.  You aren't alarmed, and you think, "It's probably just an old wagon coming to 
    town."  As it gets closer, you can see one horse in front, pulling along an open wagon.  You can make out the shape of two men in the cart, but as it gets closre you notice 
    that they seems to be in a hurry and that one horse is missing pulling the wagon.  It comes closer and you notice the horse is in a full out trot.  You can clearly tell the 
    men are slightly alarmed, and one of them waves at you to move out of the way.  Finally, the older man gets close enough to you and yells, "Go back! There's trouble ahead 
    - wolf!"  As he passes by, you notice an injured sheep in the back of the cart - blood is everywhere, and you can clearly see a large gash in the animal.  The 
    wagon-riders don't stop and continue in speed, leaving a dust trail behind them as they quickly move out of sight.  "Strange, for around here...", you think.  "What 
    is a wolf doing out here during daylight and in the middle of the fields?"  "Did it attack that sheep?" 
    </p>

    <input type="submit" id="start-chapter-three-three" value="Continue">`;
     var startChapterThreeThree = document.querySelector("#start-chapter-three-three");
     startChapterThreeThree.addEventListener('click', continueChapterThreeThree, false);
};

//CHAPTER THREE THREE

function continueChapterThreeThree() {
    // console.log('Chapter Three-three');
    let chapterThreeThree = document.querySelector('#dialogue');
    chapterThreeThree.innerHTML = `
    <p>You hasten (quicken) your pace, enough to move more quickly, but not in a jog - you have a long journey ahead of you and know you can't tire yourself out to soon.  
    Ahead, you see two dark figures hovering over a shape on the ground.  You quicken your pace still, and as you come closer, you can make out a wolf picking at a 
    sheep, dead on the road.  Not only is this odd because of the time of day, but wolves haven't been a problem in this country side for quite some time.  You have heard 
    of some stories of attacks from foxes on chickens, or coyotes on deer, but a sighting of wolves is a rare thing.  Regardless, as you approach, you see the wolf look up 
    at you, while still chewing on the sheep.  It lifts its head up slowly, eyes lowered and it bares its teeth in a small growl.  "Well," you think, "I wasn't planning 
    on needing to use my training this soon, but now is as good of a time as any..."</p>

    <p>At first you try to scare the wolf away.  You aren't a person to invite violence or to willfully harm others, but you also don't back down from a fight either.  
    You can tell this wolf has no intention of leaving the sheep, and wolves are dangerous for the farm, so you have to make a decision.  You slow down 
    as you get closer to the animals.  One wolf isn't too challenging you think...  Breathe in...hold...exhale.  Hand on your 
    weapon and your mind focused, what do you do?</p>
    <p>  
    
    </p>
    <input type="submit" id="attack-wolves" value="Attack"><input type="submit" id="dont-attack-wolves" value="Go Around">`;

    // var attackWolvesYes = document.querySelector("#attack-wolves");
    // attackWolvesYes.addEventListener('click', confirmAttackMonsters, false);
    
    var attackWolvesYes = document.querySelector("#attack-wolves");
    attackWolvesYes.addEventListener('click', () => {
        addingFightModule(smallWolf, noMonster, continueChapterThreeFour);
        declareAttack();
        
        },   
        false);

    var attackWolvesNo = document.querySelector("#dont-attack-wolves");
    attackWolvesNo.addEventListener('click', goAroundMonsters(continueChapterThreeFive), false);    
};

function declareAttack() {
    let declareAttackDialogue = document.querySelector('#dialogue');
    declareAttackDialogue.innerHTML = `<p>You Attack!</p>`;
};

function addingFightModule(monsterOne, monsterTwo, continueNextChapter) {
    
    monsterOne.createHitPoints();
    monsterTwo.createHitPoints();
    
    console.log(monsterOne);
    console.log(monsterTwo); 

    let headerFightModule = document.querySelector('#fight-module');
        headerFightModule.innerHTML = `
        <div class="attack-buttons">
            <span class='button-border'><input type="submit" class="attack attack-monster-one fight-module-button" value="Weapon Attack Enemy 1"></span>
            <span class='button-border'><input type="submit" class="attack attack-monster-two fight-module-button" value="Weapon Attack Enemy 2"></span><br>
            <span class='button-border'><input type="submit" class="attack spell2-monster-one fight-module-button" value="Spells Attack Enemy 1"></span>
            <span class='button-border'><input type="submit" class="attack spell2-monster-two fight-module-button" value="Spells Attack Enemy 2"></span><br>            
            <span class='button-border'><input type="submit" class="attack area-attack fight-module-button" value="Area Attack Spell"></span>
            <span class='button-border'><input type="submit" class="attack item-enchantment fight-module-button" value="Use Item Enchantment"></span><br>            
            <span class='button-border'><input type="submit" class="attack spell1-heal fight-module-button" value="Cast Heal Spell"></span>

            <span class='button-border'><input type="submit" class="attack spell2-monster-one fight-module-button" value="Magic Missile"></span>

            <span class='button-border hidden-border'><input type="submit" id="monster-attack" class="fight-module-button hidden" value="Monster(s) Turn"></span><br>
        </div>
        `;

    let attackMonsterOne = document.querySelector('.attack-monster-one');
    attackMonsterOne.addEventListener('click', function() {animate(); finalCharacter.weaponAttackMonster1(monsterOne, monsterTwo, finalCharacter.weapon, continueNextChapter)}, false);
    
    let attackMonsterTwo = document.querySelector('.attack-monster-two');
    attackMonsterTwo.addEventListener('click', function() {animate(); finalCharacter.weaponAttackMonster2(monsterOne, monsterTwo, finalCharacter.weapon, continueNextChapter)}, false);    

    if (finalCharacter.specialty.spell2.name === 'None') {            

        let attackSpellTwoMonsterOneNone = document.querySelector('.spell2-monster-one');
        attackSpellTwoMonsterOneNone.className = 'no-spell attack spell2-monster-one';

        let attackSpellTwoMonsterTwoNone = document.querySelector('.spell2-monster-two');
        attackSpellTwoMonsterTwoNone.className = 'no-spell attack spell2-monster-two';

    } else {
        let attackSpellTwoMonsterOne = document.querySelector('.spell2-monster-one');
        attackSpellTwoMonsterOne.addEventListener('click', function() {animate(); finalCharacter.spell2AttackMonster1(monsterOne, monsterTwo, finalCharacter.spell2, continueNextChapter)}, false);

        let attackSpellTwoMonsterTwo = document.querySelector('.spell2-monster-two');
        attackSpellTwoMonsterTwo.addEventListener('click', function() {animate(); finalCharacter.spell2AttackMonster2(monsterOne, monsterTwo, finalCharacter.spell2, continueNextChapter)}, false);        
    }
    
    if (finalCharacter.specialty.spell3.name === 'None') {

        let groupAttackSpellNone = document.querySelector('.area-attack');
        groupAttackSpellNone.className = 'no-spell attack area-attack';

    } else {

        let groupAttackSpell = document.querySelector('.area-attack');
        groupAttackSpell.addEventListener('click', function () {animate(); finalCharacter.areaAttackSpell(monsterOne, monsterTwo, finalCharacter.spell3, continueNextChapter)}, false);
    }

    if (finalCharacter.specialty.spell1.name === 'None') {

        let healSpellSelfNone = document.querySelector('.spell1-heal');
        healSpellSelfNone.className = 'no-spell attack';
    } else {
        let healSpellSelf = document.querySelector('.spell1-heal');
        healSpellSelf.addEventListener('click', function () {finalCharacter.spell1Heal(finalCharacter.spell1)}, false);
    }
    confirmAttackMonsters(monsterOne, monsterTwo);    
};

export function confirmAttackMonsters(monsterOne, monsterTwo) {           

//PUTTING FIGHT MODULE IN FOOTER FOR TESTING PURPOSES

    finalCharacter.confirmAttack(monsterOne, monsterTwo);        
}
    
export function attackingMonsters() {
    
}

//MOVE TO MONSTER CLASS AND THEN REFERENCE IN CHARACTER CLASS AS THIS.MONSTER.MONSTERATTACK    

function goAroundMonsters(nextChapter) {
    return nextChapter;
};

//CHAPTER THREE FOUR

export function continueChapterThreeFour() {    
    // console.log('Chapter Three-four');

    //ADDING ACHIEVEMENT

    finalCharacter.achievements.killedFarmWolves = {name: "Killed Farm Wolves", desc: "Killed two wolves near farmhouse."};
    // console.log(finalCharacter.achievements);

    //END ACHIEVEMENT ADD

    let chapterThreeFour = document.querySelector('#dialogue');
    chapterThreeFour.innerHTML = `
    <p>As you pause after your victory over the wolf, you take a breath to regroup.  As you inspect the wolf, you notice that this 
    don't appear to be normal wolf that you've seen before.  This wolf has a distinctly black coat of fur running down its backs, at 
    the tip of their tails, and the edges of their ears.  "So strange.", you think.  Then, you notice something very odd...its claws are 
    black a night!  You didn't immediately notice during the fight, but now you can see plain as day.  You aren't someone who disrespects 
    animals, but you take one of the large claws and place it on a string around your neck so that you can ask around about it and what others
    may know of it.  "Well," you think to yourself, "at least I'll have some interseting stories to tell at the end of this journey..."
    
    You don't want to linger too long, and decide it's time to get moving.</p>    
    
    <p>Would you like to rest a moment to tend to your wounds as your mother has taught you?</p>
        
    <input type="submit" id="rest-and-heal" value="Rest">
    
    <input type="submit" id="start-chapter-three-five" value="Continue">`;


    
    var restAndHeal = document.querySelector('#rest-and-heal');
    restAndHeal.addEventListener('click', function() {regenerateHP(finalCharacter.specialty.healthPoints, finalCharacter.specialty.maxHealthPoints)}, false);

    var startChapterThreeFive = document.querySelector("#start-chapter-three-five");
    startChapterThreeFive.addEventListener('click', continueChapterThreeFive, false);    
};

//RESTING

function regenerateHP(hp, maxHP) {
    let completeHealing = function() {
    
        let finishedRegeneratingHP = document.getElementById('dialogue');        
        finishedRegeneratingHP.innerHTML = `
        <p>You are rested.</p>        
        <input type="submit" id="start-chapter-three-five" value="Continue"></input>
        `;
    
        let startChapterThreeFive = document.querySelector("#start-chapter-three-five");
        
        startChapterThreeFive.addEventListener('click', continueChapterThreeFive, false);
    }

    // console.log('regenerating HP');

    var removeMonsterInfo = document.querySelector('#monster-info');
    removeMonsterInfo.innerHTML = ` `;

    var restAndHealRemove = document.querySelector('#rest-and-heal');
    restAndHealRemove.remove();

    let pauseStartChapterThreeFive = document.querySelector("#start-chapter-three-five");
    pauseStartChapterThreeFive.remove();

    regenerating(hp, maxHP); 
            
    function regenerating(hp, maxHP) {
        if (hp === maxHP) {
            finalCharacter.specialty.healthPoints = finalCharacter.specialty.maxHealthPoints;
            continueChapterThreeFive();
            completeHealing();
        } else {
            hp += 1;
            let regeneratedHP = document.getElementById('char-hp');
            regeneratedHP.innerHTML = 
                `
                Hit Points: <span class="character-display-info">${hp}</span><span id='hpBar'><progress id='hp-prog-bar' max="${finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment}" value="${hp}"></progress>${hp}/${finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment}</span></span>
                `;

            let regenerationDialogue = document.getElementById('dialogue');
            regenerationDialogue.innerHTML = 
                `
                <p>Resting...</p>
                `;                

                setTimeout( function() {regenerating(hp, maxHP)}, 500);           
        }            
    }            
}

//CHAPTER THREE FIVE

function continueChapterThreeFive () {
    // console.log('Chapter Three-Five');
    var removeMonsterInfo = document.querySelector('#monster-info');
    removeMonsterInfo.innerHTML = ` `;

    var chapterThreeFiveDialogue = document.getElementById('dialogue');
    chapterThreeFiveDialogue.innerHTML = `
    <p>You continue down the path towards the farm.  While you are walking towards the farm, you glance around and take in the sight around you.
    You don't travel this far often.  Normally, you may travel to Gryphon's Keep to buy goods that you can't find in your village.  You definitely
    haven't travelled beyond the farm you are headed to.  Even though you some of your thoughts wander to worrying about travelling farther than
    you have in the past, you know that you will be okay and you are reassured by your own thoughts and knowledge that you are capable of doing
    this.  Besides, there is also a tinge of exitement!        
    </p>
    
    <input type="submit" id="start-chapter-three-six" value="Continue">    
    `;

    var startChapterThreeSix = document.querySelector("#start-chapter-three-six");
    startChapterThreeSix.addEventListener('click', continueChapterThreeSix, false);    

}

//CHAPTER THREE SIX

function continueChapterThreeSix () {
    // console.log('Chapter Three Six');
    let chapterThreeSixDialogue = document.querySelector('#dialogue');
    chapterThreeSixDialogue.innerHTML = `
    <p>
    After walking for about 30 minutes, you finally can see the farmhouse in the distance.  You being to approach the farmhouse and start to notice 
    it and the property it is located on.  You walk up to the farmhouse a large - but noticeably worn down - structure, with several other outlying 
    buildings randomly located in some of the adjacent fields.  The smells of hay and cow manure fill the air and you can see the heavily worn dirt 
    paths on the ground where people walk.  One path leads to a small hut-like structure, a simple shed really, where you can see some goats moving
    about. Another larger structure appears to be a barn, and as you listen, you can hear the shuffling of horses in the stalls on the inside. What do you do?
    </p>
    
    <input type="submit" id="farmhouse-door" value="Knock">
    
    <input type="submit" id="start-chapter-five" value="Continue">`;


    
    let knockFarmhouse = document.querySelector('#farmhouse-door');
    knockFarmhouse.addEventListener('click', function() {
        continueChapterFour();
        //regenerateHP(finalCharacter.specialty.healthPoints, finalCharacter.specialty.maxHealthPoints)

    }, false);

    var startChapterFive = document.querySelector("#start-chapter-five");
    startChapterFive.addEventListener('click', continueChapterFive, false);  




};

function continueChapterThreeSeven () {
    // console.log('Chapter Three-Seven');
    let chapterThreeSevenDialogue = document.getElementById('dialogue');
    chapterThreeSevenDialogue.innerHTML = `
    <p>         
    </p>     
    `
}

function continueChapterFour () {
    // console.log('Chapter Four');
    let chapterFourDialogue = document.getElementById('dialogue');
    chapterFourDialogue.innerHTML = `
    <p>You decide to knock on the door.  You can see how the wooden door shutters when you strike your hand against it.  As you wait for an 
    answer, you glance at the building and take notice to its shape and construction.  The farmhouse appears to be imprecisely built, made
    up of irregulary-shaped boards and lumbar.  Despite it's uneven build, it does look sturdy and well built - suited for a place far
    from the town.  You can see and smell the smoke from the fireplace and as you glance around, you notice movement through the window and
    hear footsteps walking along the creaky boards.  When the footsteps get closer, they stop, and then you hear latch sliding, and the 
    creak of the door as the hinges seem to whine when the door opens.  An elderly man appears in the door.  He is shorter than you, but
    you can tell that in his youth, he was likely a very strong man.  Now, he has a weathered face, white hair, and caloused hands.
    
    <br>
    <br>
    
    "Can I help you?"

    <br>
    <br>

    As he waits for your reply, you can tell that he gives you a cursory once over, looking you up and down quickly to see if you are a 
    threat.
    </p>     
    `; 

    if (finalCharacter.achievements.killedFarmWolves) {
        chapterFourDialogue.innerHTML += `
        <p>You reply, "I killed a wolf that attacked a sheep down the path and was wondering if the sheep belonged to you.  If so, that
        wolf won't be a threat to you anymore.  Do you see many wolves around here?"</p>

        <input type="submit" id="continueChapt4-yesWolvesAchievement" value="Continue">`;
        
        let contChaptFourThree = document.querySelector("#continueChapt4-yesWolvesAchievement");
        contChaptFourThree.addEventListener('click', continueChapterFourThree, false);

        
    } else {
        chapterFourDialogue.innerHTML += `
        <p>You reply, "I just saw two wovles eating a dead sheep down the path.  Do you see many wolves around here?"</p>

        <input type="submit" id="continueChapt4-noWolvesAchievement" value="Continue">`;
        
        let contChaptFourTwo = document.querySelector("#continueChapt4-noWolvesAchievement");
        contChaptFourTwo.addEventListener('click', continueChapterFourTwo, false);  



    }
    

    
}

function continueChapterFourThree() {
    let chapterFourTwoThreeDialogue = document.getElementById('dialogue');
    chapterFourTwoThreeDialogue.innerHTML = `
    <p>Upon hearing your words, the farmer says, "Thank you, adventurer! I have had a lot of trouble with the dire wolves lately, and sadly
    I am too old to take care of them myself.  They have been eating my livestock.  This is so strange to see dire wolves in this area, and 
    it has reduced the amount of meat I can provide to the inn and markets at Gryphon's Keep.  This is how I make a living now-a-day.  As 
    appreciation for your troubles, please come in and rest a bit, surely that fight must have worn you down a little bit, and looking at
    those cuts on your arms, you could use some healing."</p>

    <input type="submit" id="enter-farmhouse" value="Enter Farmhouse">

    <input type="submit" id="leave-farmhouse" value="Decline to Enter">

    `
    let enterFarmhouse = document.querySelector('#enter-farmhouse');
    enterFarmhouse.addEventListener('click', continueChapterFourThreeOne, false);

    let declineToEnter = document.querySelector('#leave-farmhouse');
    declineToEnter.addEventListener('click', continueChapterFourThreeTwo, false);

}



function continueChapterFourThreeOne() {
    let chapterFourThreeFourOneDialogue = document.getElementById('dialogue');
    chapterFourThreeFourOneDialogue.innerHTML = `
    <p>You decide to take the farmer up on his offer to help.  "Come in", he says.  You follow him as he escorts you to the kitchen. "Please,
    have a seat."  As you sit down at the the wooden table, he calls his wife over, asks her to get some field dressing for your wounds.  The
    farmer begins to prepare some tea, and his wife returns with some bandages and herbal ointments.  While the tea is cooking and his wife 
    is applying some ointments, he walks over to his cabinet and brings you some cheese and bread. "I know it's not much," he says, "but 
    this should fill you up a little bit for the rest of your trip."</p>
    
    <input type="submit" id="farmhouse-rest" value="Drink tea and eat">
    `
    let farmhouseResting = document.querySelector('#farmhouse-rest');    
    farmhouseResting.addEventListener('click', continueChapterFourThreeThree, false);

    
};

function continueChapterFourThreeTwo() {
    let chapterFourThreeFourOneDialogue = document.getElementById('dialogue');
    chapterFourThreeFourOneDialogue.innerHTML = `
    <p>You decide to focus on your mission and not to get caught up in small talk with the farmer, afterall, what could an old farmer 
    possibly do to help you on this journey?  You politely decline to enter, and say goodbye to the old man and then continue along
    your adventure.</p>
    
    <input type="submit" id="bypass-farm" value="Continue">
    
    `
    
    let beginChapterFive = document.querySelector('#bypass-farm');
    beginChapterFive.addEventListener('click', continueChapterFive, false)
    
    
};

function continueChapterFourThreeThree() {

    let chapterFourThreeThreeDialogue = document.querySelector('#dialogue');
    chapterFourThreeThreeDialogue.innerHTML = 
    `<p>As you drink tea and eat, you can already notice the tingling of the ointments on your arms as they being to heal your wounds</p>
    `

    function farmhouseResting(hp, maxHP) {
        if (hp === maxHP) {
            finalCharacter.specialty.healthPoints = finalCharacter.specialty.maxHealthPoints;
            chapterFourThreeThreeDialogue.innerHTML += `
            <input type="submit" id="start-chapt-five" value="Continue">`;

            let continueChapterFive = document.querySelector("#start-chapt-five");
            continueChapterFive.addEventListener('click', continueChapterFourThreeFour, false);

            //continueChapterThreeFive();
            //completeHealing();
        } else {
            hp += 1;
            let regeneratedHP = document.getElementById('char-hp');
            regeneratedHP.innerHTML = 
                `
                Hit Points: <span class="character-display-info">${hp}</span><span id='hpBar'><progress id='hp-prog-bar' max="${finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment}" value="${hp}"></progress>${hp}/${finalCharacter.specialty.maxHealthPoints + finalCharacter.attributes[4].adjustment}</span></span>
                `;

            // let regenerationDialogue = document.getElementById('dialogue');
            // regenerationDialogue.innerHTML = 
            //     `
            //     <p>Resting...</p>
            //     `;                

                setTimeout( function() {farmhouseResting(hp, maxHP)}, 500);           
        }            
    }       

    farmhouseResting(finalCharacter.specialty.healthPoints, finalCharacter.specialty.maxHealthPoints);
}

function continueChapterFourThreeFour() {
    let chapterFourThreeFourDialogue = document.querySelector('#dialogue');
    chapterFourThreeFourDialogue.innerHTML = `
    <p>You, the farmer, and his wife talk about the wolves and he tells you that this is the first time he has seen dire wolves in 
    the area for decades.  The farmer continues, "I've even heard the farm helpers mention that they've seen and heard some strange
    shadows and noises coming from the forerst.  I'm not sure if they are just playing jokes trying to scare each other, but if you
    are headed that way, I recommend being careful.</p>`


    if (finalCharacter.achievements.spokeToRaynard) {
        chapterFourThreeFourDialogue.innerHTML += `
        <p>You thank the farmer and his wife for their hospitality, tea, and food.  As you say your thanks, you hand them the coin that
        Raynard provided to you back at the Blue Blade Inn.  You tell the farmer, "On my way here, I came across a man named Raynard.
        He mentioned he knew who you were and asked me to give this to you, if I came across you."</p>
        
        <p>The farmer smiles and looks at you.</p>
        
        <input type="submit" id="give-coin-to-farmer" value="Continue">        
        `

        let contChaptFourTwoOne = document.querySelector("#give-coin-to-farmer");
        contChaptFourTwoOne.addEventListener('click', continueChapterFourTwoOne, false); 

    } else {
        chapterFourThreeFourDialogue.innerHTML += `
        <p>You thank the farmer and his wife for their hospitality, tea, and food.  You let them know you must be going to travel as
        far as you can by foot before it gets dark out.  They thank you again, and bid you safe travels as they escort you to the 
        front door so you can continue your journey.  You exit the farmhouse, grateful for having met the couple and return to the path.</p>
        
        <input type="submit" id="return-to-path" value="Continue"> 
        `;

        let beginChapterFive = document.querySelector('#return-to-path');
        beginChapterFive.addEventListener('click', continueChapterFive, false); 

    }


    
};

function continueChapterFourTwo() {
    let chapterFourTwoDialogue = document.querySelector('#dialogue');
        
    chapterFourTwoDialogue.innerHTML = `
        </p>"Yes, there has been several strange occurances of dire wolves showing up lately.  This is so odd for around here, I haven't
        seen these types of wolves in this area for decades.
        `
    
    if (finalCharacter.achievements.spokeToRaynard) {
        chapterFourTwoDialogue.innerHTML += `
        <p>You thank the farmer for his time, and mention that after speaking to Raynard, the owner of the Blue Blade Inn, he handed you this coin
        to give to the farmer in the event you run into him.  You hand the coin to the farmer, and when he looks at it, you see a gleam in his
        eyes.</p> 
        
        <input type="submit" id="continueChapt4-2-noWolvesAchievement" value="Continue">`;
        
        let contChaptFourTwoOne = document.querySelector("#continueChapt4-2-noWolvesAchievement");
        contChaptFourTwoOne.addEventListener('click', continueChapterFourTwoOne, false);  

    }  else { chapterFourTwoDialogue.innerHTML += `
        <p>You thank the farmer for his time, and let him know you are just passing through and will be on your way.  You exchange goodbyes and continue
        along your journey.</p> 
        
        <input type="submit" id="continue-chapt-5" value="Continue">`;

        let beginChapterFive = document.querySelector('#continue-chapt-5');
        beginChapterFive.addEventListener('click', continueChapterFive, false);

    }
}

function continueChapterFourTwoOne() {
    let giveAwayRaynardsCoin = finalCharacter.inventory.indexOf(raynardsCoin);
    alert(`You gave away ${finalCharacter.inventory[giveAwayRaynardsCoin].name}`);

    console.log(finalCharacter.inventory);
    let findRaynardsCoin = finalCharacter.inventory.indexOf(raynardsCoin);
    finalCharacter.inventory.splice(findRaynardsCoin, 1);
    console.log(findRaynardsCoin);
    console.log(finalCharacter.inventory);
    document.querySelector('#normal-equipment-list').innerHTML = `<p id="normal-equipment-list"></p>`;

    for (let i = 0; i < finalCharacter.inventory.length; i++ ) {
        let giveRaynardsCoin = document.querySelector('#normal-equipment-list');
        giveRaynardsCoin.innerHTML += `${finalCharacter.inventory[i].name} <br>`;
    }

    let chapterFourTwoOneDialogue = document.querySelector('#dialogue');
    chapterFourTwoOneDialogue.innerHTML = `
    <p>"So, you know Raynard?  If you gave you this coin, it can only mean that he trusts you.  Wait here one moment..."  The farmer walks away
    for a moment and then returns with a long object wrapped in an old blanket.  You can tell the blanket is covered in dust, protecting 
    whatever is inside.  The blanket is tied up with some twing and a leather strap.  He hands you the object, and begins to speak:</p>

    <p>"Me and Raynard used to adventure together in our youth.  This weapon is what i used during my adventures.  It treated me well, and 
    never failed.  Unfortunately, during one journey, I was wounded badly.  I returned to Gryphon's Keep, with the help of Raynard.  Had he
    not helped me, I would have died on the way back before reaching the town.  I owe Raynard my life.  Please take this and make good use
    of it, I cannot use it any longer."</p>

    <p>You take the gift, and farmer walks you to his door to escort you back to your journey.  You exchnage goodbyes, thank him for all he
    has done, and exit the farmhouse to continue on.</p>
     
    <input type="submit" id="start-chapt-five" value="Continue">`;
    
    
    if (finalCharacter.specialty === warrior) {
        //resetting weapon damage to account for strength adjustment
        finalCharacter.weapon = twoHandedBroadSword;
    } else if (finalCharacter.specialty === thief) {
        finalCharacter.weapon = longBow;
    } else if (finalCharacter.specialty === cleric) {
        finalCharacter.weapon = warHammer;
    } else if (finalCharacter.specialty === halfling) {
        finalCharacter.weapon = shortSword;
    } else if (finalCharacter.specialty === dwarf) {
        finalCharacter.weapon = normalSword;
        console.log(finalCharacter);
        console.log(finalCharacter.weapon);
    } else if (finalCharacter.specialty === highMage) {
        finalCharacter.weapon = silverDagger;
    } else if (finalCharacter.specialty === elf) {
        finalCharacter.weapon = longBow;
    } else {
        finalCharacter.weapon = finalCharacter.weapon;
    }

    //finalCharacter.weapon.damage = finalCharacter.weapon.damage + finalCharacter.attributes[0].adjustment;

    // console.log(finalCharacter.weapon.name);

    let beginChapterFive = document.querySelector('#start-chapt-five');
    beginChapterFive.addEventListener('click', continueChapterFive, false);
    beginChapterFive.addEventListener('click', () => alert(`You received ${finalCharacter.weapon.name}`));

}

function continueChapterFive() {
    // console.log(finalCharacter.weapon.name);
    let updatedCharWeapon = document.querySelector('#char-weapon');
    updatedCharWeapon.innerHTML = `<h4 id='char-weapon' class='char-info-label'>Weapon: <div class="weapon-tooltip" class="character-display-info">${finalCharacter.weapon.name}<span class="weapon-tooltiptext">Damage: ${finalCharacter.weapon.damage}</span></div></h4>
    `;

    // let updatedCharDamage = document.querySelector('#char-damage');
    // updatedCharDamage.innerHTML = `
    // <h4 id='char-damage' class='char-info-label'>Damage: <span class="character-display-info">${finalCharacter.weapon.damage}</span></h4>`;

    let chapterFiveDialogue = document.querySelector('#dialogue');
    chapterFiveDialogue.innerHTML = `
    <p>You continue along the path from the farmhouse and anxiously head towards the forest.</p>

    <input type="submit" id="test-chapter" value="Continue">
    `

    let continueTestChapter = document.querySelector('#test-chapter');
    continueTestChapter.addEventListener('click', beginTestChapter, false);

}


function beginTestChapter () {
    // console.log('Chapter Three-Six');
        
    var chapterThreeSixDialogue = document.getElementById('dialogue');
    chapterThreeSixDialogue.innerHTML = `
    <p>As you approach the forest, you hear some rusltling and grunting noises - you get attacked!!          
    </p>
        
    <input type="submit" id="attack-goblins" value="Attack">     
    `
    
    var attackWolvesYes = document.querySelector("#attack-goblins");
    attackWolvesYes.addEventListener('click', () => {
        addingFightModule(bugBear, bugBear1, continueChapterSix);
        declareAttack();
    
    
    ;
})

}

function continueChapterSix() {
    let chapterSixDialogue = document.getElementById('dialogue');
    chapterSixDialogue.innerHTML = `
    <p>You continue into the forest.          
    </p>
            
    `
}

