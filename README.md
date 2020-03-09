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
    npm start
      Builds and starts the server serving api and static files (production)

    npm run dev
      Starts the server serving api and react files (hot reload)

    npm run dev:server  
      Starts only the api server

    npm run dev:client
      Starts only React

    npm run build
      Builds the TS

    npm run clean
      Removes build files