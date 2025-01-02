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
main.tsx - Entry point for the React application, renders the ProgressScreen component.
ProgressScreen.css - CSS styles for the ProgressScreen component.
ProgressScreen.tsx - React component displaying a list of goals and their statuses.
vite-env.d.ts - TypeScript declaration file for Vite.
tsconfig.json - TypeScript configuration file for the project.
tsconfig.node.json - TypeScript configuration file for Node.js specific settings.
vite.config.ts - Configuration file for Vite.
README.md - Documentation file describing the project, its structure, and setup instructions.

# TODO

Views

- Long term goals & progress
- (your) week's overview.
- Today's tasks.
- Accomplishments.
- Your crew (forge) overview.

Features

- Define new goal

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

Then clock on the link of thr localhost.

# Development

# (Documentation) first draft

Problems it solves:

- give extra focus to accomplish long-term goals.
- in community.
- cut distractions.
- accountability from friends.
- share progress.
- motivation through visualization and reminders.
- personalized messages to guide process.
- affirmation exercises to help.

Components

- long term goal you want to accomplish
- actions to ensure progress towards goals
- logs

Actions:

- define goal
- define actions
- log actions
