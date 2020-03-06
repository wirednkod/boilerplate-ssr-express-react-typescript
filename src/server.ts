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

type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void,
        ): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule

if (module.hot) {
    module.hot.accept()
}
