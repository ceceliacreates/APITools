const fetch = require('node-fetch');
require('dotenv').config();
const file = require('./TestIssues.json');
const user = 'ceceliacreates';
const repo = 'APITools';

createIssuesFromJSON = function(file) {
    file.forEach(issue => {
        fetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
            method: 'post',
            body:    JSON.stringify(issue),
            headers: {'Content-Type': 'application/json', 'Authorization': `token ${process.env.TOKEN}`}
        })
        .then(res =>  res.json())
        .then(json => {
            console.log(`Issue created at ${json.url}`)
        })
    })
}

createIssuesFromJSON(file);