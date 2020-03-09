import * as dotenv from 'dotenv'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'
import loggerMiddleware from './middleware/logger'
import BasicRouter from './routers/basic'
import App from './app'

dotenv.config()

const app = new App({
    port: parseInt(process.env.PORT || '8000', 10),
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        cors(),
        helmet(),
        loggerMiddleware,
    ],
    routes: [
        BasicRouter,
    ],
})

app.listen()
