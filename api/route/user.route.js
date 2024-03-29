import express from 'express';
import { updateUser, test } from '../controller/user.controller.js';
import { verifyUser } from '../utils/VerifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyUser, updateUser)

export default router; 