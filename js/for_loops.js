"use strict";

function showMultiplicationTable(number) {
    for(var i = 1; i < 11; i++) {
	console.log("%d x %d = %d", number, i, number * i);
    }
}

showMultiplicationTable(7);

for(var i = 1; i < 11; i++) {
    var rand = Math.floor(Math.random() * 180) + 20;
    console.log( (rand % 2) ? "%d is odd" : "%d is even", rand);
}

for(var i = 1; i < 10; i++) {
    console.log(String(i).repeat(i));
}

for(var i = 20; i > 0; i--) {
    console.log(i*5);
}

