
function main(){
    let D3 = new game_die(3);
    let chunky = new mortal("Chunky","Cooking","Dancing","Singing");
    let encounter = new challenge(`An old man sits quietly by himself and at your approach he leaps to his feet and challenges ${chunky.name} to a duel of`,(D3.roll()-1),chunky);
 console.log(`${encounter.description} ${encounter.skill.toLowerCase()}!`);
 console.log(D3.roll()-1);
 console.log(D3.roll()-1);
 console.log(D3.roll()-1);
}
main();
