
/*
    let D6 = new game_die(6);
    let D8 = new game_die(8);

    console.log(`D6: ${D6.roll()}`);
    console.log(`D8: ${D8.roll()}`);
    console.log(`3D6: ${D6.multi_roll(3)}`)
    console.log(`5D6, drop 2: ${D6.multi_drop(5,2)}`);
*/
class game_die {
    species: number;

    constructor(dietype: number){
        this.species = dietype;
    }

    roll() {
        return Math.floor(Math.random()*this.species)+1;
    }
        multi_roll(rolls:number){
            let result: number[] = [];
            for (let i = 0; i<rolls;i++){
                result.push(this.roll());
            }
            result.sort();
            return result;    
        }
        multi_drop(rolls:number, drop:number){
            let result = this.multi_roll(rolls);
            for (let i = 0; i<drop;i++){
            result.shift();
            }
            return result;
        }
}
