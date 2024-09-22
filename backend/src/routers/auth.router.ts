import { Router } from "express";
import UsersController from "../controllers/UsersConstroller.controller";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";
import UserSchemas from "../schemas/UserSchemas.schemas";

const authRouter: Router = Router();

authRouter.post("/",ValidateMiddleware.validadeBody(UserSchemas.login), UsersController.login);

export default authRouter;