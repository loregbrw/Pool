import { Router } from "express";

import TagsController from "../controllers/TagsController.controller";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";

const tagsRouter = Router();

tagsRouter.get("/", ValidateMiddleware.validadeToken, TagsController.getByUser);
tagsRouter.post("/", ValidateMiddleware.validadeToken, TagsController.create);
tagsRouter.patch("/:id", ValidateMiddleware.validadeToken, TagsController.update);
tagsRouter.delete("/:id", ValidateMiddleware.validadeToken, TagsController.delete);

export default tagsRouter;