import AppDataSource from "../data-source";
import User from "../entities/User.entity";

export default class userService {
    public static create = async () => {
        const userRepo = AppDataSource.getRepository(User);

        const user: User = userRepo.create
    }
}