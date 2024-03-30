import express from 'express';
import { verifyUser } from '../utils/VerifyUser.js';
import { create } from '../controller/post.controller.js';


const router = express.Router();

router.post('/create', verifyUser, create);

export default router;