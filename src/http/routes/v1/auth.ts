import express from 'express';
import AuthController from '../../../controller/auth';

const router = express.Router();
const authController = new AuthController();

router.post('/auth/login', async (req, res) => {
    await authController.login(req, res);
})

router.post('/auth/register', async (req, res) => {
    await authController.register(req, res);
});

export default router;