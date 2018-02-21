{
    const fetch = require('node-fetch');
    const apiKeys = require('./api_keys').apiKeys;

    function wait(ms) {
        return new Promise( (resolve, reject) => setTimeout(resolve, ms) );
    }

    // wait(3000).then( () => console.log('Resolved after 3 seconds!') );

    function getCommits(username) {

        let gitHub = fetch( `https://api.github.com/users/${username}/events`, { headers: { 'Authorization': apiKeys.GITHUB } } );

        gitHub.then( (response) => {
            response.json().then( (response) => {
                let gitHub = response.filter( (v) => v.type === 'PushEvent' )[0];
                console.log( `Last Commit "${gitHub.payload.commits[0].message}" at ${gitHub.created_at}` );
            });
        });

        gitHub.catch( (response) => {
            console.log(response);
        });
    }

    getCommits('TristanCrawford');
}