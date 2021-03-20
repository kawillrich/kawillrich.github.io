import Specialty from "./specialty-class.js";
import Armor from "./armor-class.js";
import Spell from "./spell-class.js";
import Monster from "./monster-class.js";
import Weapon from "./weapon-class.js";


//asks if you are ready to start game

function charNameSubmitted() {
    var confirmStart = document.querySelector("#confirm-start");
    var submittedCharName = document.querySelector("#character-name").value;
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
function startGame() {
    window.open("adventure/index.html", "_self");
};

//updates character attributes

function logCharSpecialty() {
    var specialtySelected = document
}

var submittingCharName = document.querySelector("#submit-name");
submittingCharName.addEventListener('click', charNameSubmitted, false);

var submittingCharSpecialty = document.querySelector("#fighter");
submittingCharSpecialty.addEventListener('focus', logCharSpecialty, false);


