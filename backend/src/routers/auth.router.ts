import { Router } from "express";
import UsersController from "../controllers/UsersConstroller.controller";

const authRouter: Router = Router();

authRouter.post("/", UsersController.login);

export default authRouter;