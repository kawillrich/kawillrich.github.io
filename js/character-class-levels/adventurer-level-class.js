export default class AdventurerLevels
{
    constructor (level, specialtySkills)
    {
        this.level = level;
        this.specialtySkills = specialtySkills;
    }
};

let adventurer = new AdventurerLevels(
    {
        name: "Adventurer",
        level: 1,
        maxXP: 1999,
        savingThrows: {
            "Poison or Death Ray": 14,
            "Magic Wand": 15,
            "Turn to Stone or Paralysis": 16,
            "Dragon Breath": 17,
            "Spells or Magic Staff": 17
        },

        hitRolls: [
            [9, 11],
            [8, 12],
            [7, 13],
            [6, 14],
            [5, 15],
            [4, 16],
            [3, 17],
            [2, 18],
            [1, 19],
            [0, 20]
        ]
    },
    ['None']
);

export { adventurer };