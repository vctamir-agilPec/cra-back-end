import express from 'express';
import authRouter from './v1/auth';

const router = express.Router();

router.use('/v1', authRouter);

export default router;