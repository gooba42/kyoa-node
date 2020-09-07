class challenge {
    description:string;
    skill: string;
    constructor(theDescription:string,difficulty:number,theProtagonist:character){
        this.description = theDescription;
        switch(difficulty){
            case 0:
                //Worst
                this.skill = theProtagonist.worst;
                break;
            case 1:
                //Middling
                this.skill = theProtagonist.middling
                break;
            case 2:
                //Best
                this.skill = theProtagonist.best
                break;
            default:
                this.skill = "Singing";
        }
    }
}
