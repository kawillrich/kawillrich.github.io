//imports modules

import Weapon from './weapon-class-v2.js';
import { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes, obsidianPlateMail } from './armor-class-v2.js';
import Spell from './spell-class-v2.js';
import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireBall, dragonFang} from './spell-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, masterArcher, highMage, dragonWarrior } from './specialty-class-v2.js';
import Character from './character-class-v2.js';
import Monster from './monster-class-v2.js';
import { wolf1, wolf2, goblin } from './monster-class-v2.js';
import Inventory from './inventory-class-v1.js';
import { raynardsCoin, farmersNote, noItem } from './inventory-class-v1.js';

//exports finalCharacter for other modules to access

export let finalCharacter = new Character('Traveler', noSpecialty, noArmor, noWeapon, noItem, noItem, noItem);

//initialized and clears selectedSpecialty

let selectedSpecialty = '';
let finalWeapon = finalCharacter.weapon;

//asks if you are ready to start game

function charNameSubmitted() {
    var confirmStart = document.querySelector("#confirm-start");
    submittedCharName = document.querySelector("#character-name").value;
    confirmStart.textContent = `Welcome, ${submittedCharName}, are you ready to begin your journey?`;
    startJourneySubmitted();    
};

//asks to start game

function startJourneySubmitted() {
     var newLinkYes = document.createElement('input');
     newLinkYes.type = "submit";
     newLinkYes.value= "Yes";
     newLinkYes.id = "start";
     
     var DOMinsert = document.querySelector('#confirm-start');
     DOMinsert.appendChild(newLinkYes);

     var newLinkNo = document.createElement('input');
     newLinkNo.type = 'submit';
     newLinkNo.value = 'No';
     newLinkNo.id = 'end';
     DOMinsert.appendChild(newLinkNo);

     var startingGame = document.querySelector("#start");
    startingGame.addEventListener('click', startGame, false);
};


//TEST FUNCTION TO START GAME - creates player info
function startGame() {   
    
    let newStartGameDialogue = document.querySelector("#character-info");
    
    newStartGameDialogue.innerHTML = `
        <div id='character-stats'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Player Data</legend>
                <h4 id='char-name' class='char-info-label'>Name: <span class="character-display-info">${submittedCharName}</span></h4>
                <h4 id='char-specialty' class='char-info-label'>Specialty: <span class="character-display-info">${finalCharacter.specialty.name}</span></h4>
                <h4 id='char-hp' class='char-info-label'>Health Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span></h4> 
                <h4 id='char-armor' class='char-info-label'>Armor: <span class="character-display-info">${finalCharacter.armor.name}</span></h4> 
                <h4 id='char-armor-points' class='char-info-label'>Armor Points: <span class="character-display-info">${finalCharacter.armor.armorPoints}</span></h4>
                <h4 id='char-weapon' class='char-info-label'>Weapon: <span class="character-display-info">${finalCharacter.weapon.name}</span></h4>
                <h4 id='char-damage' class='char-info-label'>Damage: <span class="character-display-info">${finalCharacter.weapon.damage}</span></h4>
                <h4 id='char-spell1' class='char-info-label'>Spell 1: <span class="character-display-info">${finalCharacter.specialty.spell1.name}</span></h4>
                <h4 id='char-spell2' class='char-info-label'>Spell 2: <span class="character-display-info">${finalCharacter.specialty.spell2.name}</span></h4>
            </fieldset>
        </div>
        <div id='character-inventory'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Inventory</legend>
                <h4 id='char-items' class='char-info-label'>Item 1: <span class='character-display-inv1'>${finalCharacter.inventory1.name}</span></h4>
                <h4 id='char-items' class='char-info-label'>Item 2: <span class='character-display-inv2'>${finalCharacter.inventory2.name}</span></h4>
                <h4 id='char-items' class='char-info-label'>Item 3: <span class='character-display-inv3'>${finalCharacter.inventory3.name}</span></h4>
            </fieldset>
    </div>    
                
        `;
        console.table(finalCharacter);   

    let chapterOne = document.querySelector('#dialogue');
    chapterOne.innerHTML = `
        <p>After a good night's sleep, you wake up in your room in the Blue Blade Inn.  The inn is located in Gryphon's Keep, a small, 
        run-down fortress town built in the old days before the Golden Age.  As your eyes open and you look around, you observe 
        your small, but well kept room.  You chose this inn because you know the innkeeper, Raynard Helmsforger, is a meticulous (well-organized) man 
        and he understands the importance of rest for someone like you.  Raynard himself was an adventurer in his youth.  At that time, 
        he was lean, agile, and had the dexterity (relfexes) of a panther.  Looking at him now, you wouldn't necessarily know that, but 
        his reputation precedes him, and everyone from your village of Everglade Forest knows his past.</p>
        <p>You sit up and stretch - feeling good from a full night's sleep.  You close your eyes, take a deep breath in, and then 
        exhale.  As you breath out, you remember the training your father taught you - breathe in....hold...exhale...pause.  This simple
        act, as you know, allows you to focus your thoughts and dispel any doubt and negativity you may have wandering in your mind.  You
        feel the fresh air coming in and the exhale of any wasted thoughts.  This focus and training is part of what has allowed you to 
        act so effective and swiftly.  During training, you noticed how the others would let the worry and doubt consume them...and ultimately
        prevent them from becoming focused, patient, and ready.  </p>
        <p>As you conduct your breathing Kata, you remember your parents, your brother, Kiyan, and your Sister, Avalera.  You feel as though
        everything you've done in life has taken you up to this point.  Then, with your clear and focused mind, you meticulously begin 
        preparing and packing your things.</p>
        <p>What is your specialty?</p>
        <input type = "radio" name="selected-specialty" value="fighter" id="fighter"/> Fighting
        <input type = "radio" name="selected-specialty" value="archer" id="archer"/> Archery
        <input type = "radio" name="selected-specialty" value="mage" id="mage"/> Magic
        <input type = "radio" name="selected-specialty" value="dragonwarrior" id="dragonwarrior"/>Dragon Fighting
        </p>`;
        
        let submittingCharSpecialtyFighter = document.querySelector("#fighter");
        submittingCharSpecialtyFighter.addEventListener('click', logCharSpecialty, false);
    
        let submittingCharSpecialtyArcher = document.querySelector("#archer");
        submittingCharSpecialtyArcher.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyMage = document.querySelector("#mage");
        submittingCharSpecialtyMage.addEventListener('click', logCharSpecialty, false);

        let submittingCharSpecialtyDragon = document.querySelector("#dragonwarrior");
        submittingCharSpecialtyDragon.addEventListener('click', logCharSpecialty, false);
    };

//updates character attributes
//return out finalCharacter?
function logCharSpecialty() {
    
    selectedSpecialty = document.querySelector('input[name="selected-specialty"]:checked').value;
    if (selectedSpecialty === "fighter") {
        console.log('fighter');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = warrior; 
        finalCharacter.armor = chainMail; 
        finalCharacter.weapon = steelSword;

        finalCharacter.characterUpdate(); 
        console.table(finalCharacter);
        
        
    } else if (selectedSpecialty === "archer") {
        console.log('archer');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = masterArcher; 
        finalCharacter.armor = leatherArmor; 
        finalCharacter.weapon = shortBow;
        finalCharacter.characterUpdate();        
        console.table(finalCharacter);
        
    } else if (selectedSpecialty === "mage") {
        console.log('mage');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = highMage; 
        finalCharacter.armor = robes; 
        finalCharacter.weapon = staff;
        finalCharacter.characterUpdate();        
        console.table(finalCharacter);

    } else if (selectedSpecialty === "dragonwarrior") {
        console.log('dragonwarrior');
        finalCharacter.name = submittedCharName;
        finalCharacter.specialty = dragonWarrior; 
        finalCharacter.armor = obsidianPlateMail; 
        finalCharacter.weapon = obsidianSword;
        finalCharacter.characterUpdate();        
        console.table(finalCharacter);

    } else {
        console.log ('none');
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

//begins chapter one

function beginChapterTwo() {
    console.log('Begin');
    let chapterTwo = document.querySelector('#dialogue');
    chapterTwo.innerHTML = `
    <p>As you pack up your belongings, you know your ${finalCharacter.specialty.name} training will serve you well.  You pick up your ${finalCharacter.weapon.name} and slide your 
    hand along it.  You remember how much time and effort you put into practicing to become proficient (skilled) with it.  You don (put on) your ${finalCharacter.armor.name} and 
    and the smell brings you back to your training, remembering what it feels like when you get hit, and how it feels on your body when you strike.  These familiar
    memories make you feel at home and bring a reassurance to your mind about what you are about to do.  Others have left on the same journey, and none have returned.  
    Are you better than them?  Will you make it?  Or will you share their fate?  As you complete preparing, you finish a small bit of tea and some bread with cheese you prepared 
    for breakfast, knowing you must have a good breakfast for the long walk ahead of you.</p>
    <p>After finishing the last of your breakfast, you head down to the main floor of the inn.  You see the innkeeper, Raynard, sitting at the counter.  You've already paid for 
    one night of sleep, would you like to speak with Raynard on your way out?</p> 
    <input type="submit" id="talk-raynard-yes" value="Yes"><input type="submit" id="talk-raynard-no" value="No"><br> 
    `;    
   
    var talkToRaynardYes = document.querySelector("#talk-raynard-yes");
    talkToRaynardYes.addEventListener('click', talkToRaynard, false);

    var talkToRaynardNo = document.querySelector("#talk-raynard-no");
    talkToRaynardNo.addEventListener('click', startChapterThreeOne, false);
}; 

function talkToRaynard() {
    console.log('Talking to Raynard');
    let talkingToRaynard = document.querySelector('#dialogue');
    talkingToRaynard.innerHTML = `
    <p>"Good Morning, ${finalCharacter.name}.  I hope you slept well.  You know, I remember stories of the dragon Soul Stealer.  My father's father's grandfather told me of the 
    dragon arriving to the ruins and hoarding a treasure so valuable that many travellers lost their lives looking for it.  Did you know that I have also wandered to those ruins
    in my younger years?  I remember there being two paths towards the ruins - one path that was easily seen along the north of a forest, but there is another that was less 
    travelled.  I learned of this path from a young woman mage who used to live in the forest many moons (years) ago.  That was a long time ago, but I believe it would still 
    be possible to find that path if you look hard enough.  Beyond the farm, travel East.  The path is marked by a large boulder with a strange circular carving in it.  That 
    is the entrance."</p>  

    <p>Raynard continued, "I, unfortunately ended up not making it all the way to the ruins where Soul Stealer lives, however, because on my way, I reached some old desert ruins just before his liar.  
    In those ruins, I removed my armor and was preparing for the battle, but I rushed to the aid of a young woman who was gravely injured by the hands of a pack of orcs.  I 
    ended up tending her wounds, and we fled the orcs.  I returned here, where I took care of her and ended up marrying her.  I left my adventures behind, but if you find your 
    way along the hidden path, to the misty forest, and through the underground caves to the desert ruins, you may indeed find my old armor there.  Before I forget - if you see 
    Glandar, the owner of the Black Horse Farm, give him this: it's a silver coin.  He'll know it's from me.  If you give this to him, he will provide 
     you with a place to rest and some extra food for the journey.  Talk to him about the forest, he will have information for you.  Good luck, ${finalCharacter.name} 
     - I wish you well."</p>
     <p>You thank Raynard for his help, shake his hand, and leave the inn.</p>
    
     <input type="submit" id="start-chapter-three" value="Continue">`;

    finalCharacter.inventory1 = raynardsCoin;    
    let receiveCoin = document.getElementsByClassName('character-display-inv1');
    receiveCoin[0].innerHTML = `
    <span class='character-display-inv1'>${finalCharacter.inventory1.name}</span>
    
    `
    console.log("Received " + finalCharacter.inventory1.name);
     var continueChapterThreeOne = document.querySelector("#start-chapter-three");
     continueChapterThreeOne.addEventListener('click', startChapterThreeOne, false);
};

function startChapterThreeOne() {
    console.log('Chapter Three-one');
    let chapterThreeOne = document.querySelector('#dialogue');
    chapterThreeOne.innerHTML = `
    <p>As you depart the Blue Blade Inn, you feel confident in what you are about the journey you are about to embark on (begin).  You've heard stories from others about the 
    road that leads to a small farm town outside Gryphon's Keep.  This road is a mere cart and horse path with two ruts in the dirt where the wagon wheels have worn small 
    ditches in the road over time.  The small farm, called the Black Horse Farm, is the last settlement along a large set of woods that span quite a distance to the east.  
    This farm provides some food, animals, and goods to the people of Gryphon's Keep, so the family that owns the Black Horse Farm is known to many here. 
    </p>
    <p>The woods adjacent to the farm is known as the Forgotten Woods.  The woods consist mostley of coniferous (pine) trees over flat land sprinkled with some boulders.  
    The woods house many animals such as deer, coyotes, beavers, rabbits, various birds, and other woodland creatures.  From what you've heard, there are several brooks 
    throughout the woods, an occasional pond, and some swampy areas.  However, it isn't these woods that concern you - it's the forest on the other side of the woods that does.  
    It is rumored that the forest is home to various creatures that don't come out in open fields or the woods.  Some of these creatures are said to be mystical, forgotten 
    beings who stay lurking in the shadows since the Godlen Age.  One thing is for certain - no one goes into the forest.  The Forgotten Woods is much like a 'buffer' between the 
    forest and the the settled areas.  It's almost like there is a mutual undestanding that nothing from the forest goes beyond the woods, and no human from the villages go 
    into the forest.  The path you've heard about from other adventurers takes you around the northern part of the forest.  
    </p>
    
    <input type="submit" id="start-chapter-three-two" value="Continue">`;
     var startChapterThreeTwo = document.querySelector("#start-chapter-three-two");
     startChapterThreeTwo.addEventListener('click', continueChapterThreeTwo, false);
};

function continueChapterThreeTwo() {
    console.log('Chapter Three-two');
    let chapterThreeTwo = document.querySelector('#dialogue');
    chapterThreeTwo.innerHTML = `
    <p>You find the main road in town and head south until you find the horse cart path running East.  You take one look back, beathe in...hold...and exhale.  You follow the 
    horse cart path.  
    </p>
    <p>You walk along the past and Gryphon's keep gets farther in the distance and the noise of the village disappears.  Part of you likes the queit, you've always been one 
    to enjoy time to yourself - and in some cases - you prefer it.  The confident feeling of being on your own, relying on yourself, and accomplishing hard tasks alone 
    has contributed to your self-confidence.  You wouldn't be considered arrogant, just confident.  Some of your friends and family would mention how you were calm and 
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
    - wolves!"  As he passes by, you notice an injured sheep in the back of the cart - blood is everywhere, and you can clearly see a large gash in the animal.  The 
    wagon-riders don't stop and continue in speed, leaving a dust trail behind them as they quickly move out of sight.  "Strange, for around here...", you think.  "What 
    are wolves doing out here during daylight and in the middle of the fields?"  "Did they attack that sheep?" 
    </p>

    <input type="submit" id="start-chapter-three-three" value="Continue">`;
     var startChapterThreeThree = document.querySelector("#start-chapter-three-three");
     startChapterThreeThree.addEventListener('click', continueChapterThreeThree, false);
};

function continueChapterThreeThree() {
    console.log('Chapter Three-three');
    let chapterThreeThree = document.querySelector('#dialogue');
    chapterThreeThree.innerHTML = `
    <p>You hasten (quicken) your pace, enough to move more quickly, but not in a jog - you have a long journey ahead of you and know you can't tire yourself out to soon.  
    Ahead, you see two dark figures hovering over a shape on the ground.  You quicken your pace still, and as you come closer, you can make out two wolves picking at a 
    sheep, dead on the road.  Not only is this odd because of the time of day, but wolves haven't been a problem in this country side for quite some time.  You have heard 
    of some stories of attacks from foxes on chickens, or coyotes on deer, but a sighting of wolves is a rare thing.  Regardless, as you approach, you see the wolves look up 
    at you, while still chewing on the sheep.  One lifts its head up slowly, eyes lowered and it bares its teeth in a small growl.  "Well," you think, "I wasn't planning 
    on needing to use my training this soon, but now is as good of a time as any..."</p>
    <p>At first you try to scare the wolves away.  You aren't a person to invite violence or to willfully harm others, but you also don't back down from a fight either.  
    You can tell these wolves have no intention of leaving the sheep, and wolves are dangerous for the farm, so you have to make a decision.  You slow down 
    as you get closer to the animals.  One wolf isn't too challenging, but two, on the other hand, can be a difficult fight.  Breathe in...hold...exhale.  Hand on your 
    weapon and your mind focused, what do you do?</p>
    <p>  
    
    </p>
    <input type="submit" id="attack-wolves" value="Attack"><input type="submit" id="dont-attack-wolves" value="Go Around">`;

    // var attackWolvesYes = document.querySelector("#attack-wolves");
    // attackWolvesYes.addEventListener('click', confirmAttackMonsters, false);
    
    var attackWolvesYes = document.querySelector("#attack-wolves");
    attackWolvesYes.addEventListener('click', () => {
        addingFightModule();
        declareAttack();
        
        },   
        false);

    var attackWolvesNo = document.querySelector("#dont-attack-wolves");
    attackWolvesNo.addEventListener('click', goAroundMonsters, false);    
};

function declareAttack() {
    let declareAttackDialogue = document.querySelector('#dialogue');
    declareAttackDialogue.innerHTML = 'You Attack!';
}

function addingFightModule() {
    let headerFightModule = document.querySelector('#fight-module');
        headerFightModule.innerHTML = `
        <div class="attack-buttons">
            <span class='button-border'><input type="submit" class="attack attack-monster-one fight-module-button" value="Weapon Attack Enemy 1"></span>
            <span class='button-border'><input type="submit" class="attack attack-monster-two fight-module-button" value="Weapon Attack Enemy 2"></span><br>
            <span class='button-border'><input type="submit" class="attack spell2-monster-one fight-module-button" value="Spells Attack Enemy 1"></span>
            <span class='button-border'><input type="submit" class="attack spell2-monster-two fight-module-button" value="Spells Attack Enemy 2"></span><br>
            <span class='button-border'><input type="submit" class="attack spell1-heal fight-module-button" value="Cast Heal Spell"></span><br>
            <span class='button-border hidden-border><input type="submit" class="monster-attack hidden" value="Monster(s) Turn"></span>
        </div>
        `;

        let attackMonsterOne = document.querySelector('.attack-monster-one');
    attackMonsterOne.addEventListener('click', function() {finalCharacter.weaponAttackMonster1(wolf1, finalCharacter.weapon)}, false);
    
    let attackMonsterTwo = document.querySelector('.attack-monster-two');
    attackMonsterTwo.addEventListener('click', function() {finalCharacter.weaponAttackMonster2(wolf2, finalCharacter.weapon)}, false);    

    if (finalCharacter.specialty.spell2.name === 'None') {            

        let attackSpellTwoMonsterOneNone = document.querySelector('.spell2-monster-one');
        attackSpellTwoMonsterOneNone.className = 'no-spell';

        let attackSpellTwoMonsterTwoNone = document.querySelector('.spell2-monster-two');
        attackSpellTwoMonsterTwoNone.className = 'no-spell';

    } else {
        let attackSpellTwoMonsterOne = document.querySelector('.spell2-monster-one');
        attackSpellTwoMonsterOne.addEventListener('click', function() {finalCharacter.spell2AttackMonster1(wolf1, finalCharacter.spell2)}, false);

        let attackSpellTwoMonsterTwo = document.querySelector('.spell2-monster-two');
        attackSpellTwoMonsterTwo.addEventListener('click', function() {finalCharacter.spell2AttackMonster2(wolf2, finalCharacter.spell2)}, false);        
    }
    
    if (finalCharacter.specialty.spell1.name === 'None') {

        let healSpellSelfNone = document.querySelector('.spell1-heal');
        healSpellSelfNone.className = 'no-spell';
    } else {
        let healSpellSelf = document.querySelector('.spell1-heal');
        healSpellSelf.addEventListener('click', function () {finalCharacter.spell1Heal(finalCharacter.spell1)}, false);
}
    confirmAttackMonsters();
}

export function confirmAttackMonsters() {           

//PUTTING FIGHT MODULE IN FOOTER FOR TESTING PURPOSES

    console.log('Attacking Monsters');        
    finalCharacter.confirmAttack(wolf1, wolf2);        
    attackingMonsters.apply(null, arguments);
}
    
export function attackingMonsters() {

    // let attackMonsterOne = document.querySelector('.attack-monster-one');
    // attackMonsterOne.addEventListener('click', function() {finalCharacter.weaponAttackMonster1(wolf1, finalCharacter.weapon)}, false);
    
    // let attackMonsterTwo = document.querySelector('.attack-monster-two');
    // attackMonsterTwo.addEventListener('click', function() {finalCharacter.weaponAttackMonster2(wolf2, finalCharacter.weapon)}, false);    

    // if (finalCharacter.specialty.spell2.name === 'None') {            

    //     let attackSpellTwoMonsterOneNone = document.querySelector('.spell2-monster-one');
    //     attackSpellTwoMonsterOneNone.className = 'no-spell';

    //     let attackSpellTwoMonsterTwoNone = document.querySelector('.spell2-monster-two');
    //     attackSpellTwoMonsterTwoNone.className = 'no-spell';

    // } else {
    //     let attackSpellTwoMonsterOne = document.querySelector('.spell2-monster-one');
    //     attackSpellTwoMonsterOne.addEventListener('click', function() {finalCharacter.spell2AttackMonster1(wolf1, finalCharacter.spell2)}, false);

    //     let attackSpellTwoMonsterTwo = document.querySelector('.spell2-monster-two');
    //     attackSpellTwoMonsterTwo.addEventListener('click', function() {finalCharacter.spell2AttackMonster2(wolf2, finalCharacter.spell2)}, false);        
    // }
    
    // if (finalCharacter.specialty.spell1.name === 'None') {

    //     let healSpellSelfNone = document.querySelector('.spell1-heal');
    //     healSpellSelfNone.className = 'no-spell';
    // } else {
    //     let healSpellSelf = document.querySelector('.spell1-heal');
    //     healSpellSelf.addEventListener('click', function () {finalCharacter.spell1Heal(finalCharacter.spell1)}, false);
    // }
}

//MOVE TO MONSTER CLASS AND THEN REFERENCE IN CHARACTER CLASS AS THIS.MONSTER.MONSTERATTACK    

function goAroundMonsters() {
    continueChapterThreeFive();
};

export function continueChapterThreeFour() {    
    console.log('Chapter Three-four');

    let chapterThreeFour = document.querySelector('#dialogue');
    chapterThreeFour.innerHTML = `
    <p>As you pause after your victory over the wolves, you take a breath to regroup.  Would you like to rest a moment to tend to your wounds as your mother has taught you?</p>
    
    
    <input type="submit" id="rest-and-heal" value="Rest">
    
    <input type="submit" id="start-chapter-three-five" value="Continue">`;

    var restAndHeal = document.querySelector('#rest-and-heal');
    restAndHeal.addEventListener('click', function() {regenerateHP(finalCharacter.specialty.healthPoints, finalCharacter.specialty.maxHealthPoints)}, false);

    var startChapterThreeFive = document.querySelector("#start-chapter-three-five");
    startChapterThreeFive.addEventListener('click', continueChapterThreeFive, false);    
};

function regenerateHP(hp, maxHP) {
    let completeHealing = function() {
    
        let finishedRegeneratingHP = document.getElementById('dialogue');        
        finishedRegeneratingHP.innerHTML = `
        <p>You are rested.</p>        
        <input type="submit" id="start-chapter-three-five" value="Continue"></input>
        `;
    
        var startChapterThreeFive = document.querySelector("#start-chapter-three-five");
        
        startChapterThreeFive.addEventListener('click', continueChapterThreeFive, false);
    }

            console.log('regenerating HP');

            var removeMonsterInfo = document.querySelector('#monster-info');
            removeMonsterInfo.innerHTML = ` `;

            var restAndHealRemove = document.querySelector('#rest-and-heal');
            restAndHealRemove.remove();

            let pauseStartChapterThreeFive = document.querySelector("#start-chapter-three-five");
            pauseStartChapterThreeFive.remove();

            regenerating(hp, maxHP); 
            
            function regenerating(hp, maxHP) {
            if (hp === maxHP) {
                continueChapterThreeFive();
                completeHealing();
            } else {
                hp += 1;
                let regeneratedHP = document.getElementById('char-hp');
                regeneratedHP.innerHTML = 
                `
                Health Points: <span class="character-display-info">${hp}</span>
                `;

                let regenerationDialogue = document.getElementById('dialogue');
                regenerationDialogue.innerHTML = 'Resting...';

                setTimeout( function() {regenerating(hp, maxHP)}, 500);                  
            }            
        }            
}

function continueChapterThreeFive () {
    console.log('Chapter Three-Five');
    var removeMonsterInfo = document.querySelector('#monster-info');
    removeMonsterInfo.innerHTML = ` `;

    var chapterThreeFiveDialogue = document.getElementById('dialogue');
    chapterThreeFiveDialogue.innerHTML = `
    <p>You continue down the path towards the farm    
    </p>`;


}

