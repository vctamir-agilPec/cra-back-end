import express from "express";
import { AssociadoController } from "../../../controller/associado";

const router = express.Router();

router.post("/", async (req, res) => {
    const associadoController = new AssociadoController(req.body);
    await associadoController.create(req, res);
});

router.get("/", async (req, res) => {
    const associadoController = new AssociadoController();
    await associadoController.get(req, res);
});

export default router;