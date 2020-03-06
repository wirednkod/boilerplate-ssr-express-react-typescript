# Express/React Typescript Server Side Rendering Boilerplate ⚛️
## boilerplate-ssr-express-react-typescript
A boilerplate created using SSR (server-side-rendering)

An up-to-date boilerplate for running server(node/express) and client code (React) with as-less-commands as possible.

### What's included:
- Server-side rendering, data fetching and client-side hydration
- Dev server with hot reloading styles (webpack)
- ESLinter 

### Initial setup
    npm run init
        Runs all needed commands to install server and client modules

### Development

    npm run start:client
        Start the dev server at http://localhost:3000
    npm test
        Start jest in watch mode

### Production

    npm run build && npm run start:prod
        Bundle the JS and fire up the Express server for production


    "start": "npm run build && node ./dist/srv/server",
    "dev": "concurrently --kill-others \"cd client && npm start\" \"webpack --config webpack.config.ts\"",
    "dev:server": "webpack --config webpack.config.ts",
    "dev:client": "cd client && npm start",
    "build": "rm -rf ./dist && tsc -p .",
    "clean": "rm -rf dist client/build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },