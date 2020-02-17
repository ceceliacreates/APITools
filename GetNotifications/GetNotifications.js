const fetch = require("node-fetch");
const fs = require('fs');
require('dotenv').config();

const owner = "ceceliacreates";
const repo = "react-portfolio";

getNotifications = function (owner, repo) {

    //Gets all unread notifications for given repo
    //Endpoint: repos/:owner/:repo/notifications


    //Converts response to JSON


    //Creates array to hold security notifications


    //Loops through each notification in JSON


    //Checks if the notification is a security alert and creates a message


    //Adds notificationMessage to the securityNotifications array


    //Marks thread as read on GitHub by passing thread ID
    //Endpoint: /notifications/threads/:id


    //Writes securityNotifications array to file


}

// Calls the function