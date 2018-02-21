{
    const fetch = require('node-fetch');
    const apiKeys = require('./api_keys').apiKeys;

    const wait = (ms) => new Promise( (resolve, reject) => setTimeout(resolve, ms) );

    const getCommits = (username) => {

        let request = fetch( `https://api.github.com/users/${username}/events`, { headers: { 'Authorization': apiKeys.GITHUB } } );

        request.then( response => {
            response.json().then( data => {
                let pushEvent = data.filter( v => v.type === 'PushEvent' )[0];
                console.log( `${username}'s Last Commit: "${pushEvent.payload.commits[0].message}" at ${pushEvent.created_at}` );
            });
        });

        request.catch( response => console.log(response) );
    };

    getCommits('TristanCrawford');
    getCommits('alyxanhscott');
}