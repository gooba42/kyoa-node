class character {
    name: string;
    best:string;
    middling:string;
    worst:string;
    skillDice: number[] = [0,0,0];
    constructor(theName:string = "Bob", theBest:string = "Singing",theMiddling:string = "Writing", theWorst:string="Cooking"){
        this.name = theName;        
        this.best = theBest;
        this.middling = theMiddling;
        this.worst = theWorst;
    }
    roll(flavor:string){
        let myDie: game_die;
        flavor = flavor.toLowerCase();
        switch (flavor){
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
    type:string="mortal";
    skillDice = [4,6,8];
}
class hero extends character {
    type:string = "hero";
    skillDice = [6,8,10];
}
class superhero extends character {
    type:string = "superhero";
    skillDice = [8,10,12];
}
class deity extends character {
    type:string = "deity";
    skillDice = [12,20,24];
}
