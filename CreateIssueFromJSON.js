const fetch = require('node-fetch');
require('dotenv').config();
const file = require('./TestIssues.json');
const user = 'ceceliacreates';
const repo = 'APITools';

createIssueFromJSON = function(file) {
    file.forEach(issue => {
        fetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
            method: 'post',
            body:    JSON.stringify(issue),
            headers: {'Content-Type': 'application/json', 'Authorization': `${process.env.TOKEN}`}
        })
        .then(res => res.json())
        .then(json => {
            if (json.Status == 201) {
                console.log(`Issue created at ${json.status.Location}`)
            }
            else {
                console.log(`Something went wrong. Response: ${JSON.stringify(json)}`)
            }
        });
    })
}

createIssueFromJSON(file);