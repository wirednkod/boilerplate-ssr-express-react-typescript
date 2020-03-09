# Express/React Typescript Server Side Rendering Boilerplate ⚛️
## boilerplate-ssr-express-react-typescript
A boilerplate created using SSR (server-side-rendering)

An up-to-date boilerplate for running server(node/express) and client code (React) with as-less-commands as possible.

### What's included:
- Server-side rendering, data fetching and client-side hydration
- Dev server with hot reloading styles (nodemon)
- ESLinter 

### Initial setup
    npm run init
        Runs all needed commands to install server and client modules

### Scripts
  "start": "concurrently --kill-others \"npm run build && node ./dist/src/server\" \"cd client && npm start\"",
    Builds and starts the server serving api and static files (production)
  "dev": "concurrently --kill-others \"cd client && npm start\" \"nodemon\"",
    Starts the server serving api and react files (hot reload)
  "dev:server": "nodemon",
    Starts only the api server
  "dev:client": "cd client && npm start",
    Starts only React
  "build": "rm -rf ./dist && tsc -p .",
    Builds the TS
  "clean": "rm -rf dist",
    Removes build files