//RENAME as QuestItem?

export default class Inventory {
    constructor (name, description, enchantment, encumbrance, cost) {
        this.name = name;
        this.description = description;
        this.enchantment = enchantment;
        this.encumbrance = encumbrance;
        this.cost = cost;
    };
};

let noItem = new Inventory("None", "None", 0, 0, 0);
let raynardsCoin = new Inventory("Raynard's Coin", "Coin provided to you from Raynard", 0, 0, 0);
let farmersNote = new Inventory("Farmer's Note", "Note received from farmers after defeating wolves", 0, 0, 0);
let eloisesRing = new Inventory("Eloise's Ring", "Ring Eloise wore", 20, 1, 0);
let torch = new Inventory("Torch", "Ordinary torch", 0, 1, 0);
let backPack = new Inventory("Backpack","Ordinary backpack",0,20,5);
let holySymbol = new Inventory("Holy Symbol","Holy Symbol for clerics",0,1,25);
let holyWater = new Inventory("Holy Water","1 vial of Holy Water for clerics",0,1,25);
let smallHammer = new Inventory("Small Hammer","Ordinary small hammer",0,10,2);
let ironSpikes = new Inventory("Iron Spikes","Iron Spikes",0,5,1);
let garlic = new Inventory("Garlic","Bulb of garlic",0,1,5);
let grapplingHook = new Inventory("Grappling Hook","Ordinary Grappling Hook",0,80,25);
let lantern = new Inventory("Lantern","Ordinary Lantern",0,30,10);
let mirrorHandSized = new Inventory("Mirror (hand-sized, steel)","Hand-sized mirror made of steel",0,5,5);
let oil = new Inventory("Oil","One flask of oil",0,10,2);
let poleWooden = new Inventory("Pole (wooden)","Pole, wooden (10ft long)",0,100,1);
let rationsIron = new Inventory("Rations, iron","Iron rations",0,70,15);
let rationsStandard = new Inventory("Rations, standard","Standard rations",0,200,5);
let rope = new Inventory("Rope (50ft length)","",0,50,1);
let sackSmall = new Inventory("Sack, small","Small sack",0,1,1);
let sackLarge = new Inventory("Sack, large","Large sack",0,5,2);
let stakesAndMallet = new Inventory("Stakes and Mallet","Stakes and mallet",0,10,3);
let thievesTools = new Inventory("Thieves' Tools","Tools for thieves",0,10,25);
let tinderBox = new Inventory("Tinder Box","Tinder box used for making fires",0,5,3);
let waterskin = new Inventory("Waterskin (1 quart)","Used for storing water",0,5,1);
let wine = new Inventory("Wine (1 quart)","One quart of wine",0,30,1);
let wolfsbane = new Inventory("Wolfsbane (1 bunch)","One bunch of wolvesbane to repel lycanthrops",0,0,10);

export { raynardsCoin, farmersNote, noItem , eloisesRing, torch, backPack, holySymbol, holyWater, smallHammer, ironSpikes, garlic, grapplingHook, lantern, mirrorHandSized, oil, poleWooden, 
rationsIron, rationsStandard, rope, sackSmall, sackLarge, stakesAndMallet, thievesTools, tinderBox, waterskin, wine, wolfsbane };