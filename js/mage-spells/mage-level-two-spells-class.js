import
{
    finalCharacter
} from "/js/js_v14-3.js";

import { toggleShowSpellList } from "/js/js_v14-3.js";

export let mageLevelTwoSpells = [];

export default class MageLevelTwoSpells
{
    constructor (name, level, range, duration, effect, castingEffect, className, useBattle, damage, isAreaEffect, numberOfUses = 0)
    {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
        this.className = className;
        this.useBattle = useBattle;
        this.damage = damage;
        this.isAreaEffect = isAreaEffect;
        this.numberOfUses = numberOfUses;
    }
};

let continualLight = new MageLevelTwoSpells("Continual Light", 2, 120, 999, "Volume of 60 foot diameter", function () { console.log('Casting'); }, "continual-light", true, 0, true);
let detectEvil = new MageLevelTwoSpells("Detect Evil", 2, 60, 2, "Everything within 60 feet", function () { console.log('Casting'); }, "detect-evil", false, 0, true);
let invisibility = new MageLevelTwoSpells("Invisibility", 2, 240, 999, "One creature or object", function () { console.log('Casting'); }, "invisibility", true, 0, false);
let esp = new MageLevelTwoSpells("ESP", 2, 60, 12, "All thoughts in one direction", function () { console.log('Casting'); }, "esp", false, 0, false);
let knock = new MageLevelTwoSpells("Knock", 2, 60, 1, "One lock or bar", function () { console.log('Casting'); }, "knock", false, 0, false);
let levitate = new MageLevelTwoSpells("Levitate", 2, 0, 6, "The mage only", function () { console.log('Casting'); }, "levitate", false, 0, false);
let locateObject = new MageLevelTwoSpells("Locate Object", 2, 60, 2, "One object within range", function () { console.log('Casting'); }, "locate-object", false, 0, true);
let mirrorImage = new MageLevelTwoSpells("Mirror Image", 2, 0, 6, "The mage only", function () { console.log('Casting'); }, "mirror-image", true, 0, false);
let phantasmalForce = new MageLevelTwoSpells("Phantasmal Force", 2, 999, 12, "20 foot volume", function () { console.log('Casting'); }, "phantasmal-force", true, 0, true);
let web = new MageLevelTwoSpells("Web", 2, 10, 48, "A volume of 10 by 10 by 10", function () { console.log('Casting'); }, "web", true, 0, true);
let wizardLock = new MageLevelTwoSpells("Wizard Lock", 2, 10, 999, "One portal or lock", function () { console.log('Casting'); }, "wizard-lock", false, 0, false);
let detectInvisible = new MageLevelTwoSpells("Detect Invisible", 2, 10, 6, "Detect invisibility", function () { console.log('Casting'); }, "detect-invisible", false, 0, true);

continualLight.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#dialogue');
        dialogue.innerHTML = `<p>You try to cast Light, but the words won't come to your mind.</p>`;
        toggleShowSpellList();

    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }
        toggleShowSpellList();

        finalCharacter.greyOutAttackButtons(monster1, monster2);
        let dialogue = document.querySelector('#dialogue');
        dialogue.innerHTML = `<p>You cast Light spell, which affects a 30 foot area.</p>`;

        let isBlindedM1 = monster1.status.some((x) => x === "Blind");
        let isBlindedM2 = monster2.status.some((x) => x === "Blind");

        //checking if M1 is alive -

        if ((attackedMonster === "Monster 1" && monster1.healthPoints > 0 && isBlindedM1 === false) || (attackedMonster === "Monster 1" && (monster1.healthPoints > 0 && isBlindedM1 === false)))
        {
            dialogue.innerHTML += `<p>${monster1.name} has been blinded.</p>`;
            monster1.status.push('Blind');
            let monster1Status = document.querySelector("#monster-one-status");
            monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`

            //need to make variable, push to an array, and then call the function expression

            let blindTimer = setTimeout(function ()
            {
                let removeBlindM1 = monster1.status.filter((x) => "Blind");
                monster1.status.splice(removeBlindM1); //removing Blind after function call
                let updateM1Status = document.querySelector("#monster-one");
                updateM1Status.innerHTML = `
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
                console.log('Blind removed m1')
            }, 60000);

            finalCharacter.activeSpellStatuses.push(blindTimer);
            //end of setTimeout

        } else if ((attackedMonster === "Monster 2" && monster2.healthPoints > 0 && isBlindedM2 === false) || (attackedMonster === "Monster 2" && (monster2.healthPoints > 0 && isBlindedM2 === false)))
        {
            dialogue.innerHTML += `<p>${monster2.name} is blinded.</p>`;
            monster2.status.push('Blind');
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`

            let blindTimer2 = setTimeout(function ()
            {
                let removeBlindM2 = monster2.status.filter((x) => "Blind");
                monster2.status.splice(removeBlindM2);
                let updateM2Status = document.querySelector("#monster-two");
                updateM2Status.innerHTML = `
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
                console.log('blind removed m2')

            }, 60000);

            finalCharacter.activeSpellStatuses.push(blindTimer2);

        } else 
        {
            // //TRIGGERS WHEN FIRST BATTLE WITH ONLY ONE MONSTER STARTS
            alert('NEED TO FIX CONDITIONAL LINE 232 MAGE-LEVEL-ONE-SPELLS-CLASS')
        }
    }
}

detectEvil.castSpell = function ()
{
    console.log('Casting Detect Evil')
}

invisibility.castSpell = function ()
{
    console.log('Casting Invisibility')
}

esp.castSpell = function ()
{
    console.log('Casting ESP')
}

knock.castSpell = function ()
{
    console.log('Casting Knock')
}

levitate.castSpell = function ()
{
    console.log('Casting Levitate')
}

locateObject.castSpell = function ()
{
    console.log('Casting Locate Object')
}

mirrorImage.castSpell = function ()
{
    console.log('Casting Mirror Image')
}

phantasmalForce.castSpell = function ()
{
    console.log('Casting Phantasmal Force')
}

web.castSpell = function ()
{
    console.log('Casting Web')
}

wizardLock.castSpell = function ()
{
    console.log('Casting Wizard Lock')
}

detectInvisible.castSpell = function ()
{
    console.log('Casting Detect Invisibility')
}

export { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, web, wizardLock, detectInvisible }