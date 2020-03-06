import * as express from 'express'
import { Application } from 'express'

class App {
    public app: Application

    public port: number

    constructor(appInit: { port: number; middleWares: any; routes: any; }) {
        this.app = express()
        this.app.use(express.json())
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.routes)
        this.assets()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare)
        })
    }

    private routes(routes: { forEach: (arg0: (route: any) => void) => void; }) {
        routes.forEach((route) => {
            this.app.use('/api', route)
        })
    }

    private assets() {
        this.app.use(express.static('public'))
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App
