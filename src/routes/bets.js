import { Router } from "express";
import { createNewBetController, getAllBetsController } from "../controller/betsController.js";

const betsRoutes = Router();

betsRoutes.get('/', getAllBetsController);
betsRoutes.post('/place', createNewBetController);


export default betsRoutes;