import { Router } from "express";
import { createNewBetController, getAllBetsController } from "../controllers/betsController.js";

const betsRoutes = Router();

betsRoutes.get('/', getAllBetsController);
betsRoutes.post('/place', createNewBetController);


export default betsRoutes;