import { Router } from 'express';
import { MarketItemController } from '../controllers/MarketItem/MarketItemControlller'

const router = Router();

const marketItemController = new MarketItemController();

router.post('/', marketItemController.create);

export { router as marketItemRouter };