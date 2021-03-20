import Specialty from "./specialty-class.js";
import Armor from "./armor-class.js";
import Spell from "./spell-class.js";
import Monster from "./monster-class.js";
import Weapon from "./weapon-class.js";

let confirmedSpecialty = new Specialty('', 0, 0, 0, 0, 0);
let confirmedWeapon = new Weapon('Club', 0, 0, 4);
let confirmedArmor = new Armor('Robes', 0, 0, 0);
let confirmedSpell = new Spell('None', 0, 0, 0);

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

//starts game by opening adventure index.html in same window
//NEED TO UPDATE TO CLEAR DIV ID=CONTAINER AND UPDATE WITH INFO FROM ADVENTURE WEBPAGE
// function startGame() {
//     window.open("adventure/index.html", "_self");
// };

//TEST FUNCTION TO START GAME - creates player info
function startGame() {   
    // let selectedSpecialty = document.querySelector('input[name="selected-specialty"]:checked').value;
    // let confirmedSpecialty = '';
    // if (selectedSpecialty === 'fighter') {
    //     confirmedSpecialty = new Specialty ('Fighter', 140, 5, 8, 0);
    // }

    let newStartGameDialog = document.querySelector("#character-info");
    
    newStartGameDialog.innerHTML = `
    <h3>Name: </h3>
    <h3>Specialty: ${confirmedSpecialty.title}</h3>
    <h3>Health Points: ${confirmedSpecialty.startingHP}</h3> 
    <h3>Armor: ${confirmedSpecialty.starting}</h3> 
    <h3>Armor Points: ${confirmedSpecialty.title}</h3>
    <h3>Weapon: ${confirmedSpecialty.title}</h3>
    <h3>Damage: ${confirmedSpecialty.title}</h3>
    <h3>Spell: ${confirmedSpecialty.title}</h3>`;   

    let chapterOne = document.querySelector('#dialogue');
    chapterOne.innerHTML = `
        <p>What is your specialty?</p>
        <input type = "radio" name="selected-specialty" value="fighter" checked="checked" id="fighter"/> Fighting
        <input type = "radio" name="selected-specialty" value="archer" id="archer"/> Archery
        <input type = "radio" name="selected-specialty" value="mage" id="mage"/> Magic
        </p>`

   
}


//updates character attributes

function logCharSpecialty() {
    var specialtySelected = document
}

var submittingCharName = document.querySelector("#submit-name");
submittingCharName.addEventListener('click', charNameSubmitted, false);

var submittingCharSpecialty = document.querySelector("#fighter");
submittingCharSpecialty.addEventListener('focus', logCharSpecialty, false);


