"use strict";
/**
 * Title: KYOA (Kid Your Own Adventure) - Node Edition
 * Desc: Kid Your Own Adventure is an RPG engine built to power a kids' storytelling game
 * It was originally started in Python but I'm writing JavaScript for work and
 * thought I could benefit from the practice porting it over to Node.JS.
 *
 * Author: Kyle Turpin
 * License - GPL V2
 */
let desc = true;
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
function main() {
    let D6 = new game_die(6);
    let D8 = new game_die(8);
    console.log(`D6: ${D6.roll()}`);
    console.log(`D8: ${D8.roll()}`);
    console.log(`3D6: ${D6.multi_roll(3)}`);
    console.log(`5D6, drop 2: ${D6.multi_drop(5, 2)}`);
}
main();
