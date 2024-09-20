import "dotenv/config";
import User from "../entities/User.entity";
import AppDataSource from "../data-source";
import AppError from "../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import ILogin from "../interfaces/TLogin.interface";

export default class AuthService {
    public static login = async (payload: ILogin): Promise<string> => {
        
        const userRepo = AppDataSource.getRepository(User);

        let user: User | null = await userRepo.findOne({
            where: [
                { email: payload.login },
                { username: payload.login }
            ]
        });

        if (!user || user.deletedAt) {
            throw new AppError("Invalid login!", 401);
        }

        if (!await compare(payload.password, user.password!)) {
            throw new AppError("Invalid password!", 401);
        }

        const secret = process.env.SECRET_KEY;
        const token = jwt.sign(
            { id: user.id },
            secret!,
            { expiresIn: "60d" }
        );

        return token;
    }
}
