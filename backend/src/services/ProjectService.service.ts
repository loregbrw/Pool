import AppDataSource from "../data-source";
import Permission from "../entities/Permission.entity";
import Project from "../entities/Project.entity";
import Sprint from "../entities/Sprint.entity";
import User from "../entities/User.entity";
import AppError from "../errors";
import { TProjectCreation, TProjectUpdate } from "../interfaces/Project.types";
import { TSprintCreation } from "../interfaces/Sprint.types";
import { SprintService } from "./SprintService.service";

export default class ProjectService {

    public static create = async (payload: TProjectCreation, userId: string): Promise<Project> => {

        const userRepo = AppDataSource.getRepository(User);
        const projectRepo = AppDataSource.getRepository(Project);

        const user = await userRepo.findOne({ where: { id: userId } });
        
        if (!user)
            throw new AppError("Problem authenticating user!", 401);

        const project = projectRepo.create({ ...payload, user: user });
        const createdProject = await projectRepo.save(project);

        const sprintData: TSprintCreation = {
            name: "Sprint 1",
            initialDate: payload.sprintInitalDate,
            duration: payload.sprintDuration,
            projectId: createdProject.id!
        };

        const sprint = await SprintService.create(sprintData, userId);

        return { ...createdProject, user: undefined };
    }

    public static update = async (id: string, payload: TProjectUpdate, userId: string): Promise<Project> => {

        const projectRepo = AppDataSource.getRepository(Project);
        
        const project = await projectRepo.findOne({
            where: { id: id },
            relations: {
                user: true
            }
        });

        if (!project)
            throw new AppError("Project not found!", 400);

        if (project.user?.id !== userId)
            throw new AppError("Unathorized!", 401);

        const updatedProject = projectRepo.create({ ...project, ...payload });
        const savedProject = await projectRepo.save(updatedProject);

        return { ...savedProject, user: undefined };
    }

    public static delete = async (id: string, userId: string): Promise<void> => {

        const projectRepo = AppDataSource.getRepository(Project);

        const project = await projectRepo.findOne({
            where: { id: id },
            relations: {
                user: true
            }
        });

        if (!project)
            throw new AppError("Project not found!", 400);

        if (project.user?.id !== userId)
            throw new AppError("Unathorized!", 401);

        await projectRepo.softDelete(id);
    }

    public static getById = async (id: string, userId: string): Promise<{project: Project, status: string} => {

    }

    public static getByUser = async (userId: string): Promise<{project?: Project, status?: string}[]> => {

        const userRepo = AppDataSource.getRepository(User);
        const projectRepo = AppDataSource.getRepository(Project);
        const permissionRepo = AppDataSource.getRepository(Permission);

        const user = await userRepo.findOne({ where: { id: userId } });
        
        if (!user)
            throw new AppError("Problem authenticating user!", 401);

        const ownProjects = await projectRepo.find({
            where: { user: user },
            withDeleted: false,
            relations: {
                sprints: true,
                permissions: true,
                tag: true,
            },
        });

        const ownProjectsWithStatus = ownProjects.map(project => ({
            project,
            status: "Own",
        }));
    

        const permissions = await permissionRepo.find({
            where: { user: user },
            relations: {
                project: {
                    sprints: true,
                    permissions: true,
                    tag: true,
                },
            },
        });
    
        const permissionProjects = permissions.map(permission => ({
            project: permission.project,
            status: permission.permission?.toString()
        }));
    
        const allProjects = [...ownProjectsWithStatus, ...permissionProjects];
    
        return allProjects;
    }
}