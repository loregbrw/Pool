import { Router } from "express";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";
import CardSchema from "../schemas/CardSchema.schemas";
import CardController from "../controllers/CardController.controller";

const cardsRouter: Router = Router();

cardsRouter.get("/:id", ValidateMiddleware.validadeToken, CardController.getById);
cardsRouter.patch("/:id", ValidateMiddleware.validadeBody(CardSchema.update), ValidateMiddleware.validadeToken, CardController.update);
cardsRouter.post("/", ValidateMiddleware.validadeBody(CardSchema.creation), ValidateMiddleware.validadeToken, CardController.create);

export default cardsRouter;