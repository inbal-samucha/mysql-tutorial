import { Router } from "express";
import { getAllBetsUserController, getAllUsersController, signupUsersController, updateUsersController } from "../controller/userController.js";

const usersRoutes = Router();

usersRoutes.get('/', getAllUsersController);
usersRoutes.post('/', signupUsersController);
usersRoutes.patch('/:id', updateUsersController);
usersRoutes.get('/:id/bets', getAllBetsUserController);



export default usersRoutes;