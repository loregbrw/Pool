import { Router } from "express";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";
import SprintSchemas from "../schemas/SprintSchemas.schemas";
import SprintsController from "../controllers/SprintsController";

const sprintsRouter = Router();

sprintsRouter.get("/:id", ValidateMiddleware.validadeToken, SprintsController.getById);
sprintsRouter.post("/", ValidateMiddleware.validadeBody(SprintSchemas.creation), ValidateMiddleware.validadeToken, SprintsController.create);
sprintsRouter.patch("/:id", ValidateMiddleware.validadeBody(SprintSchemas.update), ValidateMiddleware.validadeToken, SprintsController.update);

export default sprintsRouter;