/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'tristan';
const email = 'tristanthtcrawford@gmail.com';
const languages = ['cpp', 'python', 'lua', 'js', 'ruby', 'java'];

// TODO: rewrite the object literal using object property shorthand
users.push({ name, email, languages });

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach( ({ email }) => emails.push(email) );
users.forEach( ({ name }) => names.push(name) );

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach( ({ name, email, languages }) => developers.push(`${name}'s email is ${email}, ${name} knows ${languages.join(', ')}`) );

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for(let developer of developers) {
    list += `<li>${developer}</li>`;
}

list += '</ul>';