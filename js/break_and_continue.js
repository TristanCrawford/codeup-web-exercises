"use strict";

function listOdds() {

    var num;

    while(true) {

        num = parseInt(prompt("Enter an odd number between 1 and 50"));

        if( num < 51 && num > 0 && (num % 2 !== 0) )
            break;
    }

    console.log("Number to skip is: %d", num);

    for(var i = 0; i < 50; i++) {

        if(i % 2 === 0)
            continue;

        if(i == num) {
            console.log("Yikes! Skipping number: %d", i);
            continue;
        }

        console.log("Here is an odd number: %d", i);
    }
}

// BONUSES

function toggleCase(str) {
    
    var ret = '';
    
    for(var i = 0; i < str.length; i++)
        ret += (str[i] === str[i].toLowerCase()) ? str[i].toUpperCase() : str[i].toLowerCase();

    return ret;
}

function ninetyNineBottles() {
    
    var bottle = function(n) { return (n === 1) ? "bottle" : "bottles"; }

    for(var i = 99; i > 0; i--) {
        console.log("%d %s of beer on the wall, %d %s of beer! Take one down and pass it around, %d %s of beer on the wall!",
        i, bottle(i), i, bottle(i), i - 1, bottle(i - 1) );
    }
}

function isValidPassword(input) {
    return input.length == input.replace(/[^\d]/g, '');
}
