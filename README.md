# Habits Accountability App

An app that helps users achieve their long-term goals through community accountability. The app allows users to create a network with their friends or strangers
trying to achieve similar goals. The app hopes to support users in their journey to better themselves by allowing them to acquire good habits and skills. Accountability
will be achieved through the user's network. The user's friends will be responsible for keeping the user accountable in their goals.

# Repo structure

Summer2024Project/
    .DS_Store
    react-code/
    .gitignore - Specifies files and directories to be ignored by Git.
    index.html - The main HTML file that includes the root div and script to load the React app.
    package.json - Contains metadata about the project and dependencies.
    public/ - Directory for static assets.
    src/ - Directory for source code.
        AccomplishmentsScreen.css - CSS styles for the AccomplishmentsScreen component.
        AccomplishmentsScreen.tsx - React component displaying a list of accomplishments.
        assets/ - Directory for asset files (images, fonts, etc.).
        index.css - Global CSS styles for the application.
        App.tsx - Entry point for the React application, renders the ProgressScreen component.
        ProgressScreen.css - CSS styles for the ProgressScreen component.
        ProgressScreen.tsx - React component displaying a list of goals and their statuses.
        vite-env.d.ts - TypeScript declaration file for Vite.
    tsconfig.json - TypeScript configuration file for the project.
    tsconfig.node.json - TypeScript configuration file for Node.js specific settings.
    vite.config.ts - Configuration file for Vite.
    README.md - Documentation file describing the project, its structure, and setup instructions.

# Environment Setup

1. Install `node.js`: https://nodejs.org/en/download/package-manager using `nvm`.

2. Install `react-native`: https://reactnative.dev/docs/set-up-your-environment.

3. Install VSCode extensions (optional)

- React Native Tools
- React/Redux/React-Native snippets
- Prettier - Code formatter
  - activate `formatonsave` in settings

Test your node version (should be >=12)

```
node -v
```

# Testing the app

```
cd react-code

npm run build

npm run preview
```

Then click on the link of thr localhost.

# Development

Write clean commit messages on what changed and why.

TODO branches and PRs
TODO write and pass unit tests
TODO write and pass integration tests
TODO code formatting
TODO integration testing

# App documentation and roadmap

Problems it solves:

- give extra focus to accomplish long-term goals.
- in community.
- cut distractions.
- accountability from friends.
- share progress.
- motivation through visualization and reminders.
- personalized messages to guide process.
- affirmation exercises to help.

Concepts (which will need to be turned into code)
- Action: well defined action which can be measures by "done/not done".
    - Data structure:
        - Description (text)
        - Status (done or not done)
- Goal: 
    - Definition: Set of actions which together will trigger growth in a particular area. Naming convention is the "area of improvement" and an optional suffix.
    - Data structure:
        - Description: 
    - examples: 
        - `Bible Study - II`:
            - Watch Howard Hendrick's series on youtube.
            - Separate 2h of in-depth study of Scripture 2x per week for 2 months.
            - Prepare in-depth study of one book in the Bible and send to the person discipling you.
        - `Evangelism - I`
            - Why do you want someone else to give their life to Jesus?
            - Study in the Bible what is evangelism: what is your role? what is the Holy Spirit's role?
            - Upload a recording of your testimony in 2 minutes.
            - Share your testimony with 5 people.
        - `Overcoming sin - I`
            - Ask the Holy Spirit to reveal to you areas of your life in which you are not living in holiness and are grieving Him.
            - list the consequences of living in sin as a christian.
            - list the consequences of living blamelessly before God.
            - How does the Bible teach us to overcome sin?
            - Choose one sin which you need to give up right now.
            - Replace the sin pattern with holy pattern for at least 60 succesful days.
- Log: update from the user.
    - logs can be linked to specific actions or a simple message.
    - examples:
        - Jimmy on 2025-01-01 11:23:21: Today I spent 30 minutes in prayer before going to school, which really helped me to engage in evagelism with my classmates, as God revealed me about some specific situation at home this person was going through. It felt awesome and I want to do it more often!
        - Fillybert on 2025-01-01 09:23:21: Completed action "Morning devotion" in Goal "Discipleship lifestyle III".
- Forge team: group of people who are together in same forge team and can view each other's logs.

# Implementation Roadmap

## 1. MVP 

Done:


TODO:
- user can define goal 
- user can update the status of the actions defined
- user can input log messages
- create a forge team
- create a view for the user
    - of the goals and progress
    - shows God's given identity
    - shows who is in the same forge 
- create a view of the logs of the forge team
- make actions SMART (measureable, timed, doable, ...). Add a deadline for each. Allow for habits with defined frequency.
- Today's assignments

## 2. Short term future

- week overview
- reminders
- block certain apps?
- ?


## 3. Long term future ?

- overview of the forge's progress
- create backlog of "common goals" with LLM summary of the people's logs.