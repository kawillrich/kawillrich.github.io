//testing spell functions


import Specialty from "./specialty-class.js";
import Armor from "./armor-class.js";
import Spell from "./spell-class.js";
import Monster from "./monster-class.js";
import Weapon from "./weapon-class.js";
import Character from "./character-class.js";

//Weapon classes
let noWeapon = new Weapon('None', 0);
//swords
let silverSword = new Weapon('Silver Sword', 10);
let twoHandedBroadSword = new Weapon('Two-Handed Sword', 12);

//bows
let longBow = new Weapon('Long Bow', 8);
let ebonyBow = new Weapon('Ebony Bow', 10);

//staves
let mahoganyStaff = new Weapon('Mahogany Staff', 6);
let gemStaff = new Weapon('Gem Staff', 8);

//Armor classes
let noArmor = new Armor('None', 0);
//fighters armor
let scaleMail = new Armor('Scale Mail', 5);
let plateMail = new Armor('Plate Mail', 7);

//archers armor
let reinforcedLeather = new Armor('Reinforced Leather', 4);
let platedLeather = new Armor('Plated Leather', 6);

//mages armor
let reinforcedRobes = new Armor('Reinforced Robes', 2);
let enchantedRobes = new Armor('Enchanged Robes', 4);

//Spell classes
let noSpell = new Spell('None', 0, 0);
let mediumHealing = new Spell('Medium Healing', 0, 6);
let majorHealing = new Spell('Major Healing', 0, 8);
let earthStrike = new Spell('Earth Strike', 10, 0);
let lightening = new Spell('Lightening', 12, 0);

let noSpecialty = new Specialty('None', 0, noSpell, noSpell);
let finalCharacter = new Character('Traveler', noSpecialty, noArmor, noWeapon);

let selectedSpecialty = '';
let confirmedSpecialty = '';

//fighter beginning equipment

let chainMail = new Armor('Chain Mail', 3);
let steelSword = new Weapon('Steel Sword', 8);

let warrior = new Specialty('Warrior', 140, noSpell, noSpell);

//archer beginning equipment

let leatherArmor = new Armor('Leather Armor', 2);
let shortBow = new Weapon('Short Bow', 6);
let minorHealing = new Spell('Minor Healing', 0, 4);
let masterArcher = new Specialty('Master Archer', 125, minorHealing, noSpell);

//mage beginning equipment

let robes = new Armor('Robes', 1);
let staff = new Weapon('Staff', 4);
let fireBall = new Spell ('Fire Ball', 8, 0);
let highMage = new Specialty('High Mage', 115, minorHealing, fireBall);

//Monster classes
let wolf1 = new Monster('Wolf', 40, 2, 6);
let wolf2 = new Monster('Wolf', 40, 2, 6);
let goblin = new Monster('Goblin', 50, 5, 6);

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
        <h4>Name: <span class="character-display-info">${submittedCharName}</span></h4>
        <h4>Specialty: <span class="character-display-info">${finalCharacter.specialty.name}</span></h4>
        <h4>Health Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span></h4> 
        <h4>Armor: <span class="character-display-info">${finalCharacter.armor.name}</span></h4> 
        <h4>Armor Points: <span class="character-display-info">${finalCharacter.armor.armorPoints}</span></h4>
        <h4>Weapon: <span class="character-display-info">${finalCharacter.weapon.name}</span></h4>
        <h4>Damage: <span class="character-display-info">${finalCharacter.weapon.damage}</span></h4>
        <h4>Spell 1: <span class="character-display-info">${finalCharacter.specialty.spell1.name}</span></h4>
        <h4>Spell 2: <span class="character-display-info">${finalCharacter.specialty.spell2.name}</span></h4>`;
        console.log(finalCharacter);   

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
        </p>`;
        
        let submittingCharSpecialtyFighter = document.querySelector("#fighter");
        submittingCharSpecialtyFighter.addEventListener('click', logCharSpecialty, false);
    
        let submittingCharSpecialtyArcher = document.querySelector("#archer");
        submittingCharSpecialtyArcher.addEventListener('click', logCharSpecialty, false);


        let submittingCharSpecialtyMage = document.querySelector("#mage");
        submittingCharSpecialtyMage.addEventListener('click', logCharSpecialty, false);
    };



//updates character attributes
//need to find way to make the weapon, armor, spell class a property of the fighter/archer/mage object
function logCharSpecialty() {
    selectedSpecialty = document.querySelector('input[name="selected-specialty"]:checked').value;
    if (selectedSpecialty === "fighter") {
        console.log('fighter');
        finalCharacter = new Character(submittedCharName, warrior, chainMail, steelSword);
        
        let chapterOneDialogue = document.querySelector("#character-info");
        chapterOneDialogue.innerHTML = `
        <h4>Name: ${finalCharacter.name}</h4>
        <h4>Specialty: ${finalCharacter.specialty.name}</h4>
        <h4>Health Points: ${finalCharacter.specialty.healthPoints}</h4> 
        <h4>Armor: ${finalCharacter.armor.name}</h4> 
        <h4>Armor Points: ${finalCharacter.armor.armorPoints}</h4>
        <h4>Weapon: ${finalCharacter.weapon.name}</h4>
        <h4>Damage: ${finalCharacter.weapon.damage}</h4>
        <h4>Spell 1: ${finalCharacter.specialty.spell1.name}</h4>
        <h4>Spell 2: ${finalCharacter.specialty.spell2.name}</h4>`;
        console.log(finalCharacter);

    } else if (selectedSpecialty === "archer") {
        console.log('archer');
        finalCharacter = new Character(submittedCharName, masterArcher, leatherArmor, shortBow);
        
        let chapterOneDialogue = document.querySelector("#character-info");
        chapterOneDialogue.innerHTML = `
        <h4>Name: ${finalCharacter.name}</h4>
        <h4>Specialty: ${finalCharacter.specialty.name}</h4>
        <h4>Health Points: ${finalCharacter.specialty.healthPoints}</h4> 
        <h4>Armor: ${finalCharacter.armor.name}</h4> 
        <h4>Armor Points: ${finalCharacter.armor.armorPoints}</h4>
        <h4>Weapon: ${finalCharacter.weapon.name}</h4>
        <h4>Damage: ${finalCharacter.weapon.damage}</h4>
        <h4>Spell 1: ${finalCharacter.specialty.spell1.name}</h4>
        <h4>Spell 2: ${finalCharacter.specialty.spell2.name}</h4>`;

    } else if (selectedSpecialty === "mage") {
        console.log('mage');
        
        finalCharacter = new Character(submittedCharName, highMage, robes, staff);
        
        let chapterOneDialogue = document.querySelector("#character-info");
        chapterOneDialogue.innerHTML = `
        <h4>Name: ${finalCharacter.name}</h4>
        <h4>Specialty: ${finalCharacter.specialty.name}</h4>
        <h4>Health Points: ${finalCharacter.specialty.healthPoints}</h4> 
        <h4>Armor: ${finalCharacter.armor.name}</h4> 
        <h4>Armor Points: ${finalCharacter.armor.armorPoints}</h4>
        <h4>Weapon: ${finalCharacter.weapon.name}</h4>
        <h4>Damage: ${finalCharacter.weapon.damage}</h4>
        <h4>Spell 1: ${finalCharacter.specialty.spell1.name}</h4>
        <h4>Spell 2: ${finalCharacter.specialty.spell2.name}</h4>`;

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
    <p>As you pack up your belongings, you know your ${selectedSpecialty} training will serve you well.  You pick up your ${finalCharacter.weapon.name} and slide your 
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
     <p>You thank Raynard for his help, shake his hand, and leave the in.</p>
     
     <input type="submit" id="start-chapter-three" value="Continue">`;
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

    var attackWolvesYes = document.querySelector("#attack-wolves");
    attackWolvesYes.addEventListener('click', confirmAttackWolves, false);

    
    var attackWolvesNo = document.querySelector("#dont-attack-wolves");
    attackWolvesNo.addEventListener('click', goAroundWolves, false);    
};

function confirmAttackWolves() {       
    console.log('Attack Wolves');
    let fightWolvesDialogue = document.querySelector('#dialogue');
    fightWolvesDialogue.innerHTML = `
    <p>You Attack!</p>`;

    let fightModule = document.querySelector('#fight-module');
    fightModule.innerHTML = `
    <div class="attack-buttons">
        <input type="submit" class="attack-monster-one" value="Weapon Attack Monster 1">
        <input type="submit" class="attack-monster-two" value="Weapon Attack Monster 2"><br>
        <input type="submit" class="spell2-monster-one" value="Spells Attack Monster 1">
        <input type="submit" class="spell2-monster-two" value="Spells Attack Monster 2"><br>
        <input type="submit" class="spell1-heal" value="Cast Heal Spell"><br>
    </div>
    `;
    
    let fightWolves = document.querySelector('#monster-info');
    fightWolves.innerHTML = `
   
    <div class="monster" id="monster-one">Monster 1:
        <h4 id="monster-one-type">Monster Type: ${wolf1.name}</h4>
        <h4 id="monster-one-hp">Health Points: ${wolf1.healthPoints}</h4> 
        <h4 id="monster-one-ap">Armor Points: ${wolf1.armorPoints}</h4>
        <h4 id="monster-one-damage">Damage: ${wolf1.damage}</h4>       
    </div>
    <div class="monster" id="monster-two">Monster 2:
        <h4 id="monster-two-type">Monster Type: ${wolf2.name}</h4>
        <h4 id="monster-two-hp">Health Points: ${wolf2.healthPoints}</h4> 
        <h4 id="monster-two-ap">Armor Points: ${wolf2.armorPoints}</h4>
        <h4 id="monster-two-damage">Damage: ${wolf2.damage}</h4>       
    </div>
    `;

    let attackMonsterOne = document.querySelector('.attack-monster-one');
    //attackMonsterOne.addEventListener('click', () => {confirmWolvesDead(); functAttackMonsterOne();}, false);
    attackMonsterOne.addEventListener('click', functAttackMonsterOne, false);

    let attackMonsterTwo = document.querySelector('.attack-monster-two');
    //attackMonsterTwo.addEventListener('click', () => {confirmWolvesDead(); functAttackMonsterTwo();}, false);
    attackMonsterTwo.addEventListener('click', functAttackMonsterTwo, false);
};




function functAttackMonsterOne() {
        //console.log(wolf1.healthPoints);
        if (wolf1.healthPoints - finalCharacter.weapon.damage > 0) {        
        wolf1.healthPoints = wolf1.healthPoints - finalCharacter.weapon.damage;
        let updatedMonsterHP = document.querySelector("#monster-one-hp");
        updatedMonsterHP.innerHTML = `
        <h4 id="monster-one-hp">Health Points: ${wolf1.healthPoints}</h4>`;
        
        } else  {
            if (wolf1.healthPoints - finalCharacter.weapon.damage <= 0 || wolf1.healthPoints === 'Dead') {
            wolf1.healthPoints = 'Dead';
            let monsterOneStatus = document.querySelector('#monster-one');
            let defeatMonster1 = document.querySelector('#dialogue');
            //MAY NEED TO RE-INSERT MONSTER INFO TO ALLOW IT TO SHOW WHEN BOTH MONSTERS DIE
            monsterOneStatus.innerHTML = 
            `<div class="monster" id="monster-one">Monster 1:
            <h4 id="monster-one-type">Monster Type: ${wolf1.name}</h4>
            <h4 id="monster-one-hp">Health Points: ${wolf1.healthPoints}</h4> 
            <h4 id="monster-one-ap">Armor Points: ${wolf1.armorPoints}</h4>
            <h4 id="monster-one-damage">Damage: ${wolf1.damage}</h4>       
            </div>`;;
            defeatMonster1.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`
            };
        }
            confirmWolvesDead();
            wolvesAttack();        
    };

function functAttackMonsterTwo() {
        //console.log(wolf2.healthPoints);
        if (wolf2.healthPoints - finalCharacter.weapon.damage > 0) {        
        wolf2.healthPoints = wolf2.healthPoints - finalCharacter.weapon.damage;
        let updatedMonsterHP = document.querySelector("#monster-two-hp");
        updatedMonsterHP.innerHTML = `
        <h4 id="monster-two-hp">Health Points: ${wolf2.healthPoints}</h4>`;
        
        } else {
            if (wolf2.healthPoints - finalCharacter.weapon.damage <= 0 || wolf2.healthPoints === 'Dead') {
            wolf2.healthPoints = 'Dead';
            
            let monsterTwoStatus = document.querySelector('#monster-two');
            let defeatMonster2 = document.querySelector('#dialogue');
            monsterTwoStatus.innerHTML = `
            <div class="monster" id="monster-two">Monster 1:
            <h4 id="monster-two-type">Monster Type: ${wolf2.name}</h4>
            <h4 id="monster-two-hp">Health Points: ${wolf2.healthPoints}</h4> 
            <h4 id="monster-two-ap">Armor Points: ${wolf2.armorPoints}</h4>
            <h4 id="monster-two-damage">Damage: ${wolf2.damage}</h4>       
            </div>`;
            defeatMonster2.innerHTML = `
            <p>Congratulations, you defeated the Monster 2!</p>`;            
            };
        };
            confirmWolvesDead();
            wolvesAttack();        
    };

function confirmWolvesDead() {
        
        console.log(`${wolf1.healthPoints}`);  
        console.log(`${wolf2.healthPoints}`);
        if (wolf1.healthPoints === 'Dead' && wolf2.healthPoints === 'Dead') {
            console.log('both dead');
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
            
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
            
            
            
            
           //var removeMonstersTurnButton = document.querySelector('#attack-player');
            // removeMonstersTurnButton.remove();
            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
    };

function goAroundWolves() {
    continueChapterThreeFour();
};

function wolvesAttack() {
    console.log('Wovles Attack');
    if (wolf1.healthPoints === 'Dead' && wolf2.healthPoints === 'Dead') {
        let removeFightModule = document.querySelector('#fight-module');
        removeFightModule.innerHTML = `<p>You won!</p>`;
    } else {
    let monstersTurn = document.querySelector('#fight-module');
    monstersTurn.innerHTML = `
    <div class="monster-attack-buttons">
        <input type="submit" id="attack-player" value="Monster(s) Turn">        
    </div>`;


    let monsterOneStatus = document.querySelector('#monster-one');
    if (wolf1.healthPoints <= 0 || wolf1.healthPoints === 'Dead') {
	    wolf1.healthPoints === 'Dead';
        monsterOneStatus.innerHTML =`
		    <div class="monster" id="monster-one">Monster 1:
        	    <h4 id="monster-one-type">Monster Type: ${wolf1.name}</h4>
        	    <h4 id="monster-one-hp">Health Points: ${wolf1.healthPoints}</h4> 
        	    <h4 id="monster-one-ap">Armor Points: ${wolf1.armorPoints}</h4>
        	    <h4 id="monster-one-damage">Damage: ${wolf1.damage}</h4>       
    		    </div>`;
	    } else if (wolf1.healthPoints > 0) {
            monsterOneStatus.innerHTML =`
		    <div class="monster" id="monster-one">Monster 1:
        	    <h4 id="monster-one-type">Monster Type: ${wolf1.name}</h4>
        	    <h4 id="monster-one-hp">Health Points: ${wolf1.healthPoints}</h4> 
        	    <h4 id="monster-one-ap">Armor Points: ${wolf1.armorPoints}</h4>
        	    <h4 id="monster-one-damage">Damage: ${wolf1.damage}</h4>       
    		    </div>`
		    };

    let monsterTwoStatus = document.querySelector('#monster-two');
    if (wolf2.healthPoints <= 0 || wolf2.healthPoints === 'Dead') {
	    wolf2.healthPoints === 'Dead';
        monsterTwoStatus.innerHTML =`
		<div class="monster" id="monster-two">Monster 2:
        	<h4 id="monster-two-type">Monster Type: ${wolf2.name}</h4>
        	<h4 id="monster-two-hp">Health Points: ${wolf2.healthPoints}</h4> 
        	<h4 id="monster-two-ap">Armor Points: ${wolf2.armorPoints}</h4>
        	<h4 id="monster-two-damage">Damage: ${wolf2.damage}</h4>       
    		</div>`;
	} else if (wolf2.healthPoints > 0) {
        monsterTwoStatus.innerHTML =`
		<div class="monster" id="monster-two">Monster 2:
        	<h4 id="monster-two-type">Monster Type: ${wolf2.name}</h4>
        	<h4 id="monster-two-hp">Health Points: ${wolf2.healthPoints}</h4> 
        	<h4 id="monster-two-ap">Armor Points: ${wolf2.armorPoints}</h4>
        	<h4 id="monster-two-damage">Damage: ${wolf2.damage}</h4>       
    		</div>`
		};
    let confirmMonsterAttack = document.querySelector('#attack-player');
    confirmMonsterAttack.addEventListener('click', confirmAttackWolves, false);
    }
};

function continueChapterThreeFour() {
    console.log('Chapter Three-four');
    let currentMonster1 = goblin;    
    let currentMonster2 = goblin;
    console.log(currentMonster1.name, currentMonster2.damage);
    //WORKS
};

// function castSpell1 () {
//     console.log('Casting Spell 1');
// };

// function castSpell2 () {
//     console.log('Casting Spell 2');
// };
