// var num = 2;
// var cond = 0;
//
// while(cond < 16) {
//     console.log(num);
//     num *= 2;
//     cond++;
// }

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    console.log(allCones);
    var toSell = Math.floor(Math.random() * 4) + 1;

    if(allCones > toSell) {
        allCones -= toSell;
        console.log("%d cones sold...", toSell);
    } else if (allCones < toSell) {
        console.log("Cannot sell you %d cones, I only have %d", toSell, allCones);
    } else {
        console.log("Yay, sold all of my cones!");
    }
} while (allCones > 1);
