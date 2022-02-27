import { Router } from 'express';
import { MarketItemController } from '../controllers/MarketItem/MarketItemControlller'

const router = Router();

const marketItemController = new MarketItemController();

router.post('/', marketItemController.create);
router.get('/', marketItemController.getAll)
router.get('/:tag', marketItemController.findByTag)
router.patch('/', marketItemController.updateToFavorite)
router.delete('/:id', marketItemController.delete)

export { router as marketItemRouter };