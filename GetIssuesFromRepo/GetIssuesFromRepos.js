const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();

const username = "ceceliacreates";

function getIssuesFromRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      const issues = [];
      json.forEach((repo) => {
        fetch(`https://api.github.com/repos/${username}/${repo.name}/issues`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${process.env.TOKEN}`,
          },
        })
          .then((res) => res.json())
          .then((json) => {
            issues.push({
              repo: repo.name,
              issues: JSON.stringify(json),
            });
            fs.writeFile(
              "./IssuesFromRepos.json",
              JSON.stringify(issues),
              (err) => {
                if (err) throw err;
                console.log("The file has been saved!");
              }
            );
          });
      });
    });
}

getIssuesFromRepos(username);
