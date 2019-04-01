import express from "express";
import {homeControl, problemControl, problemSolve} from "./controllers/controller"

const router = express.Router();

router.get('', homeControl);
router.get('/problem/:id', problemControl);
router.get('/problem/:id/result', problemSolve);

export default router;