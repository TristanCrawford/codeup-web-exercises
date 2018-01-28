// Make a function named sayHello(name) that returns "Hi " + name.

function sayHello(name) {
    return "Hi " + name;
}

console.log(sayHello("Tristan"));

// Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.

function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

console.log(capitalize("DaNk MeMeS."));

// Write a function named upperCase(string)

function upperCase(string) {
    return string.toUpperCase();
}

console.log(upperCase("yeet"));

// Make a function named identity(input) that returns the input exactly as provided.

function identity(input) {
    return input;
}

console.log(identity(1337));

// Make a function named isOdd(number)

function isOdd(number) {
    return Boolean( number % 2 );
}

console.log("isOdd: " + isOdd(1337));

// Make a function named isEven(number)

function isEven(number) {
    return Boolean( !( number % 2 ) );
}

console.log("isEven: " + isEven(1337));

// Make a function named isPositive(number)

function isPositive(number) {
    return number > 0;
}

console.log("isPositive: " + isPositive(1337));

// Make a function named isNegative(number)

function isNegative(number) {
    return number < 0;
}

console.log("isNegative: " + isNegative(1337));

// Make a function named isBoolean(input)

function isBoolean(input) {
    return typeof(input) === typeof(true);
}

console.log("isBoolean: " + isBoolean(13 > 37));

// Make a function named isTrue(boolean)

function isTrue(bool) {
    return bool === true;
}

console.log("isTrue: " + isTrue(13 < 37));

// Make a function named isFalse(boolean)

function isFalse(bool) {
    return bool === false;
}

console.log("isFalse: " + isFalse(13 > 37));

// Make a function named isTruthy(input)

function isTruthy(input) {
    return input === true;
}

console.log("isTruthy: " + isTruthy(1337));

// Make a function named isFalsy(input)

function isFalsy(input) {
    return input === false;
}

console.log("isFalsy: " + isFalsy(1337));

// Make a function named isVowel(letter)

function isVowel(letter) {
    return (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u');
}

console.log("isVowel: " + isVowel('a'));

// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels

function hasVowels(string) {

    for(var i = 0; i < string.length; i++) {
        if(isVowel(string[i]))
            return true;
    }

    return false;
}

console.log("hasVowels: " + hasVowels("Tristan"));

// Make a function named isConsonant(letter)

function isConsonant(letter) {
    return !(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u');
}

console.log("isConsonant: " + isConsonant('h'));

// Make a function named hasConsonants(string)

function hasConsonants(string) {
    
    for(var i = 0; i < string.length; i++) {
        if(isConsonant(string[i]))
            return true;
    }

    return false;
}

console.log("hasConsonants: " + hasConsonants("Tristan"));

// Make a function named isCapital(letter)

function isCapital(letter) {
    return letter === letter.toUpperCase();
}

console.log("isCapital: " + isCapital('g'));

// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.

function hasCapitalLetters(string) {

    for(var i = 0; i < string.length; i++) {
        if(isCapital(string[i]))
            return true;
    }

    return false;
}

console.log("hasCapitalLetters: " + hasCapitalLetters("Tristan"));

// Make a function named isLowerCase(letter)

function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}

console.log("isLowerCase: " + isLowerCase('g'));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased

function hasLowerCase(string) {

    for(var i = 0; i < string.length; i++) {
        if(isLowerCase(string[i]))
            return true;
    }

    return false;
}

console.log("hasLowerCase: " + hasLowerCase("Tristan"));

// Make a function named isSpace(letter) that returns if a character is a space character

function isSpace(letter) {
    return letter === ' ';
}

console.log("isSpace: " + isSpace(' '));

// Make a function named hasSpaces(string) that returns if a string has any space characters

function hasSpaces(string) {

    for(var i = 0; i < string.length; i++) {
        if(isSpace(string[i]))
            return true;
    }

    return false;
}

console.log("hasSpace: " + hasSpaces("Tristan C."));

// Make a function named isZero(number)

function isZero(number) {
    return number === 0;
}

console.log("isZero: " + isZero(0));

// Make a function named increment(number) that returns a number plus one

function increment(number) {
    return number + 1;
}

console.log("increment: " + increment(1337));

// Make a function named decrement(number) that returns a number minus one

function decrement(number) {
    return number - 1;
}

console.log("decrement: " + decrement(1337));

// Make a function named isFive(input)

function isFive(input) {
    return input === 5;
}

console.log("isFive: " + isFive(1337));

// Make a function named addFive(input) that adds five to some input.

function addFive(input) {
    return input + 5;
}

console.log("addFive: " + addFive(1337));

// Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input) {
    return !Boolean(input % 5);
}

console.log("isMultipleOfFive: " + isMultipleOfFive(1337));

// Make a function named isThree(input)

function isThree(input) {
    return input === 3;
}

console.log("isThree: " + isThree(1337));

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input) {
    return !Boolean(input % 3);
}

console.log("isMultipleOfThree: " + isMultipleOfThree(1337));

// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(input) {
    return isMultipleOfThree(input) && isMultipleOfFive(input);
}

console.log("isMultipleOfThreeAndFive: " + isMultipleOfThreeAndFive(1337));

// Write a function named lowerCase(string)

function lowerCase(string) {
    return string.toLowerCase();
}

console.log("lowerCase: " + lowerCase("Tristan"));

// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.

function capitalizeEachWord(string) {
    var words = string.split(' ');

    for(var i = 0; i < words.length; i++) {
        words[i] = capitalize(words[i]);
    }

    return words.join(' ');
}

console.log("capitalizeEachWord: " + capitalizeEachWord("tristan crawford"));

// Write a function named add(a, b) that returns the sum of a and b

function add(a, b) {
    return a + b;
}

console.log("add: " + add(13, 37));

// Write a function named subtract(a, b) that returns a minus b

function subtract(a, b) {
    return a - b;
}

console.log("subtract: " + subtract(13, 37));

// Write a function named multiply(a, b) that returns the product of a times b

function multiply(a, b) {
    return a * b;
}

console.log("multiply: " + multiply(13, 37));

// Write a function named divide(a, b) that returns a divided by b

function divide(a, b) {
    return a / b;
}

console.log("divide: " + divide(13, 37));

// Write a function named remainder(a, b) that returns the remainder after dividing a by b

function remainder(a, b) {
    return a % b;
}

console.log("remainder: " + remainder(13, 37));

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.

function isBlank(input) {
    return (input.indexOf('\t') === -1) || (input.indexOf('\n') === -1) || (input.indexOf(' ') === -1);
}

console.log("isBlank: " + isBlank("ayy\tlmao"));

// Make a function named isNumeric(input) returns true/false if the input is a number or numeric string

function isNumeric(input) {
    return !isNaN(Number(input));
}

console.log("isNumeric: " + isNumeric('1337'));

// Make a function named trim(string) that removes empty spaces before and after the input. 

function trim(string) {
    return string.trim();
}

console.log("trim: " + trim(" Tristan C. "));

