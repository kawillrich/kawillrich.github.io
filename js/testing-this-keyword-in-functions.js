//creates weapon class
class Weapon {
	constructor(name, damage, description) {
    this.name = name;
    this.damage = damage;
    this.description = description;
	}	
};

//creates new weapons
let silverSword = new Weapon('Silver Sword', 10, 'shiny sword');
let broadSword = new Weapon('Broad Sword', 50, 'wide-bladed broadsword');

//creates player class
//passes assigned weapon and monster info to attack function
class Player {
	constructor(name, hitPoints, weapon) {
  	this.name = name;
    this.hitPoints = hitPoints;
    this.weapon = weapon;
  };
  
  playerAttack(monster) {
  	this.monster =  monster;
 		console.log(`You attack the ${this.monster.name} with your ${this.weapon.description}! Your ${this.weapon.name} causes 				${this.weapon.damage} damage to the enemy`);
    console.log(monster.monsterHitPoints - this.weapon.damage);   
  };
};

//creates monster class
class Monster {
	constructor(name, monsterHitPoints, damage, description) {
  	this.name = name;
    this.monsterHitPoints = monsterHitPoints;
    this.damage = damage;
    this.description = description;
  };
//passes character hitpoint data into function
  monsterAttack(character) {
  	console.log(character.hitPoints - this.damage);    
  };
};

//creates new objects
let dragon = new Monster('Dragon', 150, 50, 'large, black, with obsidian talons');
let goblin = new Monster('Goblin', 10, 4, 'ugly, short, smelly and furry');
let character = new Player('Thorne', 50, broadSword);


character.playerAttack(dragon);
goblin.monsterAttack(character);
dragon.monsterAttack(character);


  
  