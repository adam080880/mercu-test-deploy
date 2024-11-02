import { Router } from "express";
import userRoute from "./user";

const bootstrapRoute = Router();
bootstrapRoute.use('/users', userRoute);

export default bootstrapRoute;
