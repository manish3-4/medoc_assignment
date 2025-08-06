import { Router } from 'express';
import { reportDelay } from '../controllers/delayController';
import authenticate  from '../middlewares/authMiddleware';

const router = Router();

// Route to report a delay on a sample pickup
router.post('/report', authenticate, reportDelay);

export default router;