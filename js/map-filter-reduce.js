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

    let filtered = users.filter( (v) => v.languages.length > 2 );
    let mapped = users.map( (v) => v.email );
    let reduced = users.reduce( (a, {id, name, email, languages}) => {
        a[id] = {name, email, languages};
        return a;
    }, {});

    console.log(filtered, mapped, reduced);
}
