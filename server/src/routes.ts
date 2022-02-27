import { Router } from 'express'
import { marketItemRouter } from './router/marketItemRouter'

const router = Router();

router.use('/market-items', marketItemRouter)

export { router }