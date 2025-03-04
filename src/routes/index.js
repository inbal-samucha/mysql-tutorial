import { Router } from "express";
import usersRoutes from "./user.js";
import betsRoutes from "./bets.js";

const apiRoutes = Router();

apiRoutes.use('/users', usersRoutes);
apiRoutes.use('/bets', betsRoutes);

export default apiRoutes;