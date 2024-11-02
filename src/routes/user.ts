import { Router } from "express";
import UserController from "../controllers/user";

const userRoute = Router();
const userController = new UserController();

userRoute.get('/', userController.getAll);

export default userRoute;
