import { Router } from 'express'
import { marketItemRouter } from './router/marketItemRouter'

const router = Router();

router.use('/marketItems', marketItemRouter)

export { router }