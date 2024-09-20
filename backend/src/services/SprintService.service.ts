import AppDataSource from "../data-source";
import Project from "../entities/Project.entity";
import Sprint from "../entities/Sprint.entity";
import AppError from "../errors";
import { TSprintCreation } from "../interfaces/Sprint.types";

export class SprintService {

    public static create = async (payload: TSprintCreation, userId: string): Promise<Sprint> => {

        const sprintRepo = AppDataSource.getRepository(Sprint);
        const projectRepo = AppDataSource.getRepository(Project);

        const project = await projectRepo.findOne({ where: { id: payload.projectId }});

        if (!project)
            throw new AppError("Project not found", 404);

        const sprint = sprintRepo.create({ ...payload, project: project, status: false });
        const createdSprint = await sprintRepo.save(sprint);

        return createdSprint;
    }
}