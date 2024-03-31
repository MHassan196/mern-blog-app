import express from 'express';
import { updateUser, test, deleteUser, signout, getUsers, getUser } from '../controller/user.controller.js';
import { verifyUser } from '../utils/VerifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyUser, updateUser)
router.delete('/delete/:userId', verifyUser, deleteUser)
router.post('/signout', signout);
router.get('/getusers', verifyUser, getUsers);
router.get('/:userId', getUser);

export default router; 