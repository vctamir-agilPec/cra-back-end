import express from 'express';
import associadoRouter from './v1/associado';
import authRouter from './v1/auth';

const router = express.Router();

router.use('/v1', authRouter);
router.use('/v1/associado', associadoRouter)

export default router;