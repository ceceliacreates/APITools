# APITools
Hello! This is a test repo for various tools related to APIs (specifically so far the GitHub API).

[Webinar Recording for Women Who Code Front End](https://zoom.us/rec/share/x9RIf6PO6T9IYK_qtwLVZIUqOYfkT6a80yId-PNfmU2-WeEARuypanXZmE2NKWop)

[Presentation Slides](https://docs.google.com/presentation/d/1tX609xC3losnKLCF6Atq-fpXtqpYaGMHe_rmEcW34nI/edit?usp=sharing)

Also presented at:

- [ngALT @ DevNexus](https://twitter.com/angelmbanks/status/1227987552772202497)
- [Women Techmakers Atlanta Meetup](https://twitter.com/WTM_Atl/status/1232381653009477632)

## Talk Code-Along Instructions

If you are here for a code-along portion at a talk, welcome! I'll go over these instructions in the talk, but in case you miss something or are watching from home, here are the steps for coding along.

1. Fork this repo and clone it locally.

2. Check out the `notifications-starter` branch, then run the following commands in the project folder:

`npm install`

`touch .env`

This repository has two dependencies -- `dotenv` and `node-fetch`. `Dotenv` is for protecting your GitHub token and `node-fetch` is for making API calls. Feel free to use `axios`, another package, or `Node` to make the calls if you prefer.

4. Make sure to add `.env` to your `.gitginore` if you plan to push this code to GitHub.

5. Once your GitHub access token is generated, save it to your `.env` file as

`TOKEN=<TOKEN HERE>`

6. Code in `GetNotifications.js` using the comment prompts to write a script that gets your notifications for a repository, saves any of the type `security-alert` to a file, then marks those notifications as read.

## Scripts

Run the following scripts from the `master` branch in the root project directory.

### Create Issues from JSON 

File: CreateIssueFromJSON.js

`cd CreateIssuesFromJSON
node CreateIssuesFromJSON.js`

or

`npm run issues`

[Video Demo](https://youtu.be/tR5FpO3QglA)

### Pull Commits Since Given Date

File PullCommitsSinceRelease.js

`cd PullCommitsSinceRelease
node PullCommitsSinceRelease.js`

or

`npm run commits`

### Get Security Notifications

File GetNotifications.js

`cd GetNotifications
node GetNotifications.js`

or

`npm run notifications`

### GitHub Emoji Tool

File: CopyEmojis.HTML

Open `CopyEmojis.HTML` in any browser.

## Contributing

Interested in open source? First-time contributors welcome!

### Contribution Ideas:

- Create issues with feature requests or bug reports
- Add documentation
- Add error handling
- Add features to existing tools
- Add new tools
- Refactor
- Optional UIs


