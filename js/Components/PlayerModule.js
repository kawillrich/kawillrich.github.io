export default PlayerModule = 
`<div id='character-stats'>
          <fieldset class='char-info-module'>
            <legend class='player-dashboard'>Player Data</legend>
              <h4 id='char-name' class='char-info-label'>Name: <span class="character-display-info">${submittedCharName}</span></h4>
              <h4 id='char-specialty' class='char-info-label'>Specialty: <span class="character-display-info">${
                finalCharacter.specialty.name
              }</span></h4>

              <h4 id='char-level' class='char-info-label'>Level: <span class="character-display-info">${
                finalCharacter.specialty.characterLevel.level.level
              }</span></h4>


              <h4 id='char-hp' class='char-info-label'>Hit Points: 
                    <span id='hpBar'>                    
                      <progress id='hp-prog-bar' max="${
                        finalCharacter.specialty.maxHealthPoints +
                        finalCharacter.attributes[4].adjustment
                      }" value="${
    finalCharacter.specialty.healthPoints +
    finalCharacter.attributes[4].adjustment
  }"></progress>
                      <span class="character-hp-bar">${
                        finalCharacter.specialty.healthPoints +
                        finalCharacter.attributes[4].adjustment
                      }/${
    finalCharacter.specialty.maxHealthPoints +
    finalCharacter.attributes[4].adjustment
  }</span>
                    </span>
                  </h4>  
                
              <h4 id='char-armor' class='char-info-label'>Armor: 
                <span class="armor-tooltip">
                  <span class="character-display-info">${
                    finalCharacter.armor.name
                  }</span>
                  <span class="armor-tooltiptext">Armor Class: ${
                    finalCharacter.armor.armorClass
                  }</span>
                </span>
              </h4> 

              <h4 id='char-weapon' class='char-info-label'>Weapon: 
                <span class="weapon-tooltip">
                  <span class="character-display-info">${
                    finalCharacter.weapon.name
                  }</span>
                  <span class="weapon-tooltiptext">Damage: ${
                    finalCharacter.weapon.damage
                  }</span>
                </span>
              </h4>              

              <h4 id='char-treasure' class='char-info-label'>Treasure: 
                <span class="character-display-info">${
                  finalCharacter.treasure.gold.quantity
                }</span>
              </h4>

              <h4 id='char-experience' class='char-info-label'>Experience: 
                <span class="character-display-info">${
                  finalCharacter.specialty.characterExperience
                }</span>
              </h4>                
              
          </fieldset>
        </div>

        <div id='character-attributes'>
          <fieldset class='char-info-module-attributes'>
              <legend class='player-dashboard'>Attributes</legend>
              <h4 id='char-strength' class='char-info-label'>
                <span class='character-display-attributes-str'>${finalCharacter.attributes[0].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-str'>${
                  finalCharacter.attributes[0].score
                }</span>
                <span class='character-display-attributes-scores-adj-str'>${strengthPlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                  <circle class="circle-str-background" cx="50" cy="50" r="30"/>
                  <circle class="circle-str" cx="50" cy="50" r="30" stroke-dashoffset="${strength.dashArrayAdj()}"/>
                  
                  </svg>

              </h4>
                <h4 id='char-intelligence' class='char-info-label'>
                <span class='character-display-attributes-int'>${finalCharacter.attributes[1].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-int'>${
                  finalCharacter.attributes[1].score
                }</span>
                <span class='character-display-attributes-scores-adj-int'>${intelligencePlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                  <circle class="circle-int-background" cx="50" cy="50" r="30"/>
                  <circle class="circle-int" cx="50" cy="50" r="30" stroke-dashoffset="${intelligence.dashArrayAdj()}"/>
                  
                </svg>
              </h4>
              <h4 id='char-wisdom' class='char-info-label'>
                <span class='character-display-attributes-wis'>${finalCharacter.attributes[2].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-wis'>${
                  finalCharacter.attributes[2].score
                }</span>
                <span class='character-display-attributes-scores-adj-wis'>${wisdomPlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                <circle class="circle-wis-background" cx="50" cy="50" r="30"/>
                <circle class="circle-wis" cx="50" cy="50" r="30" stroke-dashoffset="${wisdom.dashArrayAdj()}"/>
                
                </svg>
              </h4>
              <h4 id='char-dexterity' class='char-info-label'>
                <span class='character-display-attributes-dex'>${finalCharacter.attributes[3].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-dex'>${
                  finalCharacter.attributes[3].score
                }</span>
                <span class='character-display-attributes-scores-adj-dex'>${dexterityPlusAdjustment}</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">                  
                  <circle class="circle-dex-background" cx="50" cy="50" r="30"/>
                  <circle class="circle-dex" cx="50" cy="50" r="30" stroke-dashoffset="${dexterity.dashArrayAdj()}"/>
                </svg>                

              </h4>
              <h4 id='char-constitution' class='char-info-label'>
                <span class='character-display-attributes-con'>${finalCharacter.attributes[4].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-con'>${
                  finalCharacter.attributes[4].score
                }</span>
                <span class='character-display-attributes-scores-adj-con'>${constitutionPlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">                
                <circle class="circle-con-background" cx="50" cy="50" r="30"/>
                <circle class="circle-con" cx="50" cy="50" r="30" stroke-dashoffset="${constitution.dashArrayAdj()}"/>
              </svg>
              </h4>
              <h4 id='char-charisma' class='char-info-label'>
                <span class='character-display-attributes-cha'>${finalCharacter.attributes[5].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-cha'>${
                  finalCharacter.attributes[5].score
                }</span>
                <span class='character-display-attributes-scores-adj-cha'>${charismaPlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                
                               
                <circle class="circle-cha-background" cx="50" cy="50" r="30"/>
                <circle class="circle-cha" cx="50" cy="50" r="30" stroke-dashoffset="${charisma.dashArrayAdj()}"/>
                
                </svg>
              </h4>
          </fieldset>
        </div>        
        
        <div id="character-canvas">
          <fieldset class= 'canvas-info-module-player'>
            <legend class='canvas-dashboard'>Player</legend>
            <canvas id="canvas2" height="100" width="100"></canvas>
          </fieldset>
        </div>

        <div id="character-statuses">
          <fieldset class = "status-info-module-player">
            <img class="container-item protection-from-evil-status hide-status"></img>
            <img src="/images/gui/statuses/shield-status.png" class="container-item shield-status hide-status"></img>
            <img src="/images/gui/statuses/invisibility-status.png" class="container-item invisibility-status hide-status"></img>
            <img src="/images/gui/statuses/mirror-image-status.png" class="container-item mirror-image-status hide-status"></img>
            <img class="container-item detect-invisibility-status hide-status"></img>
            <img class="container-item fly-status hide-status"></img>
            <img class="container-item haste-status hide-status"></img>
            <img class="container-item invisibility-10-status hide-status"></img>
            <img class="container-item protection-from-evil-10-status hide-status"></img>
            <img class="container-item protection-from-missiles-status hide-status"></img>
            <img class="container-item hide-status"></img>
            <img class="container-item hide-status"></img>
            <legend class="statuses-dashboard">Statuses</legend>              
          </fieldset>
        </div>

        <div id="character-saving-throws">
          <fieldset class = "saves-info-module-player">
            <legend class="saves-dashboard">Saves</legend>
              <h4 class="saving-throws">Poison or Death Ray: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Poison or Death Ray"
                ]
              }</span></h4>
              <h4 class="saving-throws">Magic Wand: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Magic Wand"
                ]
              }</span></h4>
              <h4 class="saving-throws">Stone or Paralysis: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Turn to Stone or Paralysis"
                ]
              }</span></h4>
              <h4 class="saving-throws">Dragon Breath: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Dragon Breath"
                ]
              }</span></h4>
              <h4 class="saving-throws">Spells or Magic Staff: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Spells or Magic Staff"
                ]
              }</span></h4>
          </fieldset>
        </div>

      </div>        
      
       <div id="character-afflictions">
          <fieldset class = "afflictions-info-module-player">
            <legend class="afflictions-dashboard">Afflictions</legend>
            
            </fieldset>
        </div>

        <div id="character-menu">
          <fieldset class = "menu-info-module-player">
            <legend class="menu-dashboard">Menu</legend>
            
            </fieldset>
        </div>

        <div id="character-hitpoints">
          <fieldset class = "hitpoints-info-module-player hp-grid-container">
            <legend class="hitpoints-dashboard">Hitpoints</legend>
            <div class="ac-guage">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150" height="150">                  
                <circle class="circle-ac-background"/>
                <circle class="circle-ac"/>
              </svg>
            </div>

            <div class="hitpoints-guage">
              <div class="hitpoint-guage-value-current">${
                finalCharacter.specialty.healthPoints +
                finalCharacter.attributes[4].adjustment
              }</div>  
              <div class="hitpoint-guage-value-total">${
                finalCharacter.specialty.maxHealthPoints +
                finalCharacter.attributes[4].adjustment
              }</div>                            

              
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150" height="150">                  
                <circle class="circle-hitpoints-background"/>
                <circle class="circle-hitpoints"/>
              </svg>
            </div>

            <div class="xp-guage">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150" height="150">                  
                <circle class="circle-xp-background"/>
                <circle class="circle-xp"/>
              </svg>
            </div>
            
            </fieldset>
        </div>
    `;
  
