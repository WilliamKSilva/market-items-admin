import { Router } from 'express';
import { MarketItemController } from '../controllers/MarketItem/MarketItemControlller'

const router = Router();

const marketItemController = new MarketItemController();

router.post('/', marketItemController.create);
router.get('/', marketItemController.getAll)
router.get('/:tag', marketItemController.findByTag)

export { router as marketItemRouter };