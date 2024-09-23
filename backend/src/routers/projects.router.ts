import { Router } from "express";
import ProjectsController from "../controllers/ProjectsController.controller";
import ValidateMiddleware from "../middlewares/ValidateMiddleware.middleware";
import ProjectSchemas from "../schemas/ProjectSchemas";

const projectsRouter = Router();

projectsRouter.get("/", ValidateMiddleware.validadeToken, ProjectsController.get);
projectsRouter.post("/", ValidateMiddleware.validadeBody(ProjectSchemas.creation), ValidateMiddleware.validadeToken, ProjectsController.create);

export default projectsRouter;