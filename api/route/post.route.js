import express from 'express';
import { verifyUser } from '../utils/VerifyUser';
import { create } from '../controller/post.controller';


const router = express.Router();

router.post('/create', verifyUser, create);

export default router;