import AppDataSource from "../data-source";
import Project from "../entities/Project.entity";
import Sprint from "../entities/Sprint.entity";
import User from "../entities/User.entity";
import AppError from "../errors";
import { TSprintCreation, TSprintUpdate } from "../interfaces/Sprint.types";

export default class SprintService {

    public static create = async (payload: TSprintCreation, userId: string): Promise<Sprint> => {

        const sprintRepo = AppDataSource.getRepository(Sprint);
        const projectRepo = AppDataSource.getRepository(Project);
        const userRepo = AppDataSource.getRepository(User);

        const user = await userRepo.findOne({ where: { id: userId } });

        if (!user)
            throw new AppError("Problem authenticating user!", 401);

        // verificar se o usuario tem permição ou se é viewer

        const project = await projectRepo.findOne({ where: { id: payload.projectId } });

        if (!project)
            throw new AppError("Project not found", 404);

        const sprint = sprintRepo.create({ ...payload, project: project, status: false });
        const createdSprint = await sprintRepo.save(sprint);

        return createdSprint;
    }

    public static update = async (id: string, payload: TSprintUpdate, userId: string): Promise<Sprint> => {

        const sprintRepo = AppDataSource.getRepository(Sprint);
        const projectRepo = AppDataSource.getRepository(Project);
        const userRepo = AppDataSource.getRepository(User);

        const user = await userRepo.findOne({ where: { id: userId } });

        if (!user)
            throw new AppError("Problem authenticating user!", 401);

        // verificar se o usuario tem permição ou se é viewer

        const sprint = sprintRepo.findOne({
            where: { id: id },
            relations: {
                project: true
            }
        });

        if (!sprint)
            throw new AppError("Sprint not found!", 404);

        const a = sprintRepo.create({ ...sprint, ...payload });
        const createdSprint = await sprintRepo.save(sprint);

        return createdSprint;
    }

    public static getById = async (id: string): Promise<Sprint> => {

        const sprintRepo = AppDataSource.getRepository(Sprint);

        const sprint = await sprintRepo.findOne({
            where: { id: id },
            relations: {
                columns: {
                    cards: true,
                    sections: true
                }
            }
        })

        if (!sprint)
            throw new AppError("Sprint not found!", 404);

        return sprint;
    }
}