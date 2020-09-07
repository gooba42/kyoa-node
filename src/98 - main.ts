
function main(){
    let chunky = new mortal("Chunky","Cooking","Dancing","Singing");
    console.log(`Name: ${chunky.name}\n${chunky.best} Roll: ${chunky.roll("best")}\n${chunky.middling} Roll: ${chunky.roll("middling")}\n${chunky.worst} Roll: ${chunky.roll("worst")}`);
}
main();