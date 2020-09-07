"use strict";
/**
 * Title: KYOA (Kid Your Own Adventure) - Node Edition
 * Desc: Kid Your Own Adventure is an RPG engine built to power a kids'
 * storytelling game. It was originally started in Python but I'm writing
 * JavaScript for work and thought I could benefit from the practice porting it
 * over to Node.JS.
 *
 * Author: Kyle Turpin
 * License - GPL V2
 */
let desc = true;
/*
    let D6 = new game_die(6);
    let D8 = new game_die(8);

    console.log(`D6: ${D6.roll()}`);
    console.log(`D8: ${D8.roll()}`);
    console.log(`3D6: ${D6.multi_roll(3)}`)
    console.log(`5D6, drop 2: ${D6.multi_drop(5,2)}`);
*/
class game_die {
    constructor(dietype) {
        this.species = dietype;
    }
    roll() {
        return Math.floor(Math.random() * this.species) + 1;
    }
    multi_roll(rolls) {
        let result = [];
        for (let i = 0; i < rolls; i++) {
            result.push(this.roll());
        }
        result.sort();
        return result;
    }
    multi_drop(rolls, drop) {
        let result = this.multi_roll(rolls);
        for (let i = 0; i < drop; i++) {
            result.shift();
        }
        return result;
    }
}
class character {
    constructor(theName = "Bob", theBest = "Singing", theMiddling = "Writing", theWorst = "Cooking") {
        this.skillDice = [0, 0, 0];
        this.name = theName;
        this.best = theBest;
        this.middling = theMiddling;
        this.worst = theWorst;
    }
    roll(flavor) {
        let myDie;
        flavor = flavor.toLowerCase();
        switch (flavor) {
            case "best":
                myDie = new game_die(this.skillDice[2]);
                return myDie.roll();
            case "middling":
                myDie = new game_die(this.skillDice[1]);
                return myDie.roll();
            case "worst":
                myDie = new game_die(this.skillDice[0]);
                return myDie.roll();
            default:
                console.log("WRONG");
        }
    }
}
class mortal extends character {
    constructor() {
        super(...arguments);
        this.type = "mortal";
        this.skillDice = [4, 6, 8];
    }
}
class hero extends character {
    constructor() {
        super(...arguments);
        this.type = "hero";
        this.skillDice = [6, 8, 10];
    }
}
class superhero extends character {
    constructor() {
        super(...arguments);
        this.type = "superhero";
        this.skillDice = [8, 10, 12];
    }
}
class deity extends character {
    constructor() {
        super(...arguments);
        this.type = "deity";
        this.skillDice = [12, 20, 24];
    }
}
class challenge {
    constructor(theDescription, difficulty, theProtagonist) {
        this.description = theDescription;
        switch (difficulty) {
            case 0:
                //Worst
                this.skill = theProtagonist.worst;
                break;
            case 1:
                //Middling
                this.skill = theProtagonist.middling;
                break;
            case 2:
                //Best
                this.skill = theProtagonist.best;
                break;
            default:
                this.skill = "Singing";
        }
    }
}
function main() {
    let D3 = new game_die(3);
    let chunky = new mortal("Chunky", "Cooking", "Dancing", "Singing");
    let encounter = new challenge(`An old man sits quietly by himself and at your approach he leaps to his feet and challenges ${chunky.name} to a duel of`, (D3.roll() - 1), chunky);
    console.log(`${encounter.description} ${encounter.skill.toLowerCase()}!`);
    console.log(D3.roll() - 1);
    console.log(D3.roll() - 1);
    console.log(D3.roll() - 1);
}
main();
