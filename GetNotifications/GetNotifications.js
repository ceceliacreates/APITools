const fetch = require("node-fetch");
const fs = require('fs');
require('dotenv').config();

const owner = "ceceliacreates";
const repo = "react-portfolio";

getNotifications = function (owner, repo) {

    //Gets all unread notifications for given repo
    fetch(`https://api.github.com/repos/${owner}/${repo}/notifications`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'Authorization': `token ${process.env.TOKEN}` }
    })

        //Converts response to JSON
        .then(res => res.json())
        .then(json => {

            //Creates array to hold security notifications
            const securityNotifications = [];
            json.forEach(notification => {

                //Checks if the notification is a security alert and creates a message
                if (notification.reason === "security_alert") {
                    const notificationMessage = {
                        "id": notification.id,
                        "subject": notification.subject.title,
                        "type": notification.subject.type,
                        "reason": notification.reason,
                        "URL": notification.url
                    }

                    //Adds notificationMessage to the securityNotifications array
                    securityNotifications.push(notificationMessage)

                    //Marks thread as read on GitHub by passing thread ID
                    console.log("Marking as Read: " + notification.id)
                    
                    fetch(`https://api.github.com/notifications/threads/${notification.id}`, {
                        method: 'patch',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `token ${process.env.TOKEN}` }
                    })
                }
            })

            //Writes securityNotifications array to file
            fs.writeFile('./securityAlerts.json', JSON.stringify(securityNotifications), (err) => {
                if (err) throw err;
                console.log('The file has been saved!')
            });
        })
}

getNotifications(owner, repo);