import { Router } from "express";
import UsersController from "../controllers/UsersConstroller.controller";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";
import UserSchemas from "../schemas/UserSchemas.schemas";

const usersRouter: Router = Router();

usersRouter.post("/", ValidateMiddleware.validadeBody(UserSchemas.creation), UsersController.create);
usersRouter.patch("/", ValidateMiddleware.validadeBody(UserSchemas.update), ValidateMiddleware.validadeToken, UsersController.update);
usersRouter.delete("/", ValidateMiddleware.validadeToken, UsersController.delete);
usersRouter.get("/", UsersController.getPagination);

export default usersRouter;