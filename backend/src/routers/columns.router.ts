import { Router } from "express";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";
import ColumnSchemas from "../schemas/ColumnSchemas.schemas";
import ColumnsController from "../controllers/ColumnsController.controller";

const columnsRouter: Router = Router();

columnsRouter.patch("/:id", ValidateMiddleware.validadeBody(ColumnSchemas.update), ValidateMiddleware.validadeToken, ColumnsController.update);
columnsRouter.post("/", ValidateMiddleware.validadeBody(ColumnSchemas.creation), ValidateMiddleware.validadeToken, ColumnsController.create);

export default columnsRouter;