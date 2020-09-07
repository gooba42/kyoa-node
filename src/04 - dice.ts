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
