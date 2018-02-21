{
    'use strict';

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
        },
    ];

    let filtered = users.filter( user => user.languages.length > 2 );

    let mapped = users.map( user => user.email );

    let reduced = users.reduce( (a, {id, name, email, languages}) => {
        a[id] = {name, email, languages};
        return a;
    }, {});

    // BONUSES

    const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
    const customers = [
        {
            name: "Fred",
            age: 58,
            occupation: "Police Officer",
            noOfPurchases: 4
        },
        {
            name: "Samantha",
            age: 54,
            occupation: "Teacher",
            noOfPurchases: 18
        },
        {
            name: "Charles",
            age: 38,
            occupation: "Librarian",
            noOfPurchases: 9
        }
    ];

    // PROBLEM 1 - create an array of the first letters of each fruit
    let firstFruitLetter = fruits.map( fruit => fruit.charAt(0) );

    // PROBLEM 2 - create array of user objects based on the customers array
    // of objects (each user object should just have name and age properties)
    let userObjects = customers.map( ({ name, age }) => ({name, age}) );

    // PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
    // containing the same properties as the objects on the customers objects
    let civilServants = customers.filter( ({ occupation }) => (occupation === "Teacher" || occupation === "Police Officer") );

    // PROBLEM 4 - determine the average age of customers
    let averageAge = customers.reduce( (a, { age }) => a + age, 0 ) / customers.length;

    // MORE BONUSES

    const names = ["John", "Max", "Ronald"];

    // - Create an array where all names are given a last name of Smith.
    let lastSmith = names.map( name => `${name} Smith` );
    // - Create an array where each word is in all caps
    let allCaps = names.map( name => name.toUpperCase() );
    // - Create an array where all names have more than 3 letters
    let moreThanThree = names.filter( name => name.length > 3 );
    // - Create an array of names with only the last two letters of each name
    let lastTwo = names.map( name => name.substr(-2) );
    // - Create a total count of all letters
    let letterCount = names.reduce( (a, name) => a + name.length, 0 );
    // - Create a string of all letters in alphabetical order
    let inOrder = names.reduce( (a, name) => a + name.toLowerCase(), '' ).split('').sort().join('');
    // - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
    let objArr = names.map( name => ({ wordLength: name.length, firstLetter: name[0], lastLetter: name.substr(-1) }) );
    // - Create a string of all vowels in the entire array of names
    let allVowels = names.map( name => name.replace(/[^aeiou]/gi, '') ).join('');
    // - Create a single object with properties
    // ???

    // EVEN MORE BONUSES
    const family = [
        {
            name: "Karen",
            gender: "female",
            age: 29,
        },
        {
            name: "Summer",
            gender: "female",
            age: 10,
        },
        {
            name: "Bob",
            gender: "male",
            age: 32,
        },
    ];

    // - Calculate the average age of family members
    let avgAge = family.reduce( (a, { age }) => a + age, 0) / family.length;
    // - Create an array of family objects without the age property
    let noAge = family.map( ({ name, gender }) => ({name, gender}));
    // - Create an array of all minors
    let allMinors = family.filter( member => member.age < 18 );
    // - Calculate the total age combined of family members
    let totalAge = family.reduce( (a, { age }) => a + age, 0);
    // - Create an array of only female family member objects
    let onlyFemales = family.filter( member => member.gender === "female" );
    // - Create a single object with properties containing arrays of all names, genders, and ages
    let propArr = family.reduce( (a, { name, gender, age }) => {
        a.names.push(name);
        a.genders.push(gender);
        a.ages.push(age);
        return a;
    }, { names: [], genders: [], ages: [] });
    console.log(propArr);
}
