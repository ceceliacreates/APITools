const fetch = require('node-fetch');
const fs = require('fs');
require('dotenv').config();

const user = 'ceceliaplayground';
const repo = 'API-demo';
const startDate = '2019-05-06T00:00:00Z';
const commitMessages = [];

fetch(`https://api.github.com/repos/${user}/${repo}/commits?sha=${process.env.SHA}&per_page=100&since=${startDate}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json', 'Authorization': `${process.env.TOKEN}` }
})
    .then(res => res.json())
    .then(json => {
        json.forEach(commit => commitMessages.push({ 'message': commit.commit.message, 'date': commit.commit.author.date }));
        
        fs.writeFile('./commits.json', JSON.stringify(commitMessages), (err) => {
            if (err) throw err;
            console.log('The file has been saved!')});
    });