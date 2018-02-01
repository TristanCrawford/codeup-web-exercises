"use strict";

var testNumbers = [ 1, 3, 3, 7 ];

function sumAll(numbers) {
    var result = 0;     
    numbers.forEach( (num) => result += num );
    return result;
}

function average(numbers) {
    return sumAll(numbers) / numbers.length;
}

function toPhoneNumber(input) {
    return ( input.length == 11 ) ? input.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '$1-$2-$3-$4') :
           ( input.length == 10 ) ? input.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') :
           ( input.length == 7  ) ? input.replace(/(\d{3})(\d{4})/, '$1-$2') : false;
}

function upperCaseAll(input) {
    input.forEach( (word) => input[input.indexOf(word)] = word.toUpperCase() );
    return input;
}

function getOdd(array) {
    return array.filter(num => ( num % 2 ));
}

function getEven(array) {
    return array.filter(num => !( num % 2 ));
}
