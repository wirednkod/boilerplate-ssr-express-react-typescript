import * as express from 'express'
import { Request, Response } from 'express'

class BasicRouter {
	public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
    	this.router.get('/', (req: Request, res: Response) => {
			res.status(200).send({ success: true, data: 'ok'})
		})
	}
}

export default new BasicRouter().router
