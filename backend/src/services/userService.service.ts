import AppDataSource from "../data-source";
import User from "../entities/User.entity";
import AppError from "../errors";
import { TUserCreation, TUserUpdate } from "../interfaces/TUser.interfaces";

export default class UserService {
    public static create = async (payload: TUserCreation): Promise<User> => {

        const userRepo = AppDataSource.getRepository(User);
        const user: User = userRepo.create(payload);
        const createdUser = await userRepo.save(user);

        return { ...createdUser, password: undefined };
    }

    public static update = async (id: string, payload: TUserUpdate): Promise<User> => {

        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.findOne({ where: { id: id } });

        if (!user)
            throw new AppError("User not found!", 404);

        const updatedUser = userRepo.create({ ...user, ...payload });
        const savedUser = await userRepo.save(updatedUser);

        return { ...savedUser, password: undefined };
    }

    public static delete = async (id: string): Promise<void> => {

        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.findOne({ where: { id: id } });

        if (!user)
            throw new AppError("User not found!", 404);

        await userRepo.softDelete(id);
    }

    public static getPagination = async (page: number, size: number): Promise<Partial<User>[]> => {

        const userRepo = AppDataSource.getRepository(User);
    
        const users = await userRepo.find({
            withDeleted: false,
            take: size,
            skip: (page - 1) * size,
        });
    
        return users.map(user => {
            return { ...user, password: undefined };
        });
    }
    
    public static getById = async (id: string): Promise<Partial<User>> => {
        
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.findOne({ where: { id: id }, withDeleted: false });
    
        if (!user)
            throw new AppError("User not found!", 404);
    
        return { ...user, password: undefined };
    }
}
