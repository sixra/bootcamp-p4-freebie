import { Router } from 'express';
import { getUser } from '../../controllers/userController.js';


const router = Router();


/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */

router.get('/', getUser);

export default router;
