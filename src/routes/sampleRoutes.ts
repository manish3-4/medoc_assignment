import { Router } from 'express';
import { 
    addSample, 
    markSampleCollected, 
    fetchSamplesByAgent 
} from '../controllers/sampleController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Route to add a new sample
router.post('/', authenticate, addSample);

// Route to mark a sample as collected
router.patch('/:id/collected', authenticate, markSampleCollected);

// Route to fetch all samples assigned to an agent
router.get('/agent/:agentId', authenticate, fetchSamplesByAgent);

export default router;