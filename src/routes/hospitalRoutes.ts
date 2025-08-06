import { Router } from 'express';
import { 
    addHospital, 
    getHospitals, 
    getHospitalById 
} from '../controllers/hospitalController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Route to add a new hospital
router.post('/', authenticate, addHospital);

// Route to fetch all hospitals
router.get('/', authenticate, getHospitals);

// Route to fetch a hospital by ID
router.get('/:id', authenticate, getHospitalById);

export default router;