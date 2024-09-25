import { Router } from "express";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";
import SprintSchemas from "../schemas/SprintSchemas.schemas";
import SprintController from "../controllers/SprintController";

const sprintsRouter = Router();

sprintsRouter.get("/:id", ValidateMiddleware.validadeToken, SprintController.getById);
sprintsRouter.post("/", ValidateMiddleware.validadeBody(SprintSchemas.creation), ValidateMiddleware.validadeToken, SprintController.create);
sprintsRouter.patch("/:id", ValidateMiddleware.validadeBody(SprintSchemas.update), ValidateMiddleware.validadeToken, SprintController.update);

export default sprintsRouter;