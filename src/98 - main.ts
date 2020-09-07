
function main(){
    let D6 = new game_die(6);
    let D8 = new game_die(8);

    console.log(`D6: ${D6.roll()}`);
    console.log(`D8: ${D8.roll()}`);
    console.log(`3D6: ${D6.multi_roll(3)}`)
    console.log(`5D6, drop 2: ${D6.multi_drop(5,2)}`);
}
main();