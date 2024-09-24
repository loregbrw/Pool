import { Router } from "express";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";
import ColumnSchemas from "../schemas/ColumnSchemas.schemas";
import ColumnController from "../controllers/ColumnController.controller";

const columnsRouter: Router = Router();

columnsRouter.post("/", ValidateMiddleware.validadeBody(ColumnSchemas.creation), ValidateMiddleware.validadeToken, ColumnController.create);

export default columnsRouter;