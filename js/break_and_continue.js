"use strict";

var oddNum;

do {
    oddNum = parseInt(prompt("Enter an odd number between 1 and 50"));
} while ( (oddNum > 50) || (oddNum < 1) );

console.log("Number to skip is: %d", oddNum);

for(var i = 0; i < 50; i++) {

    if(!(i % 2))
        continue;
    
    if(i == oddNum) {
        console.log("Yikes! Skipping number: %d", i);
        continue;
    }
    
    console.log("Here is an odd number: %d", i);
}
