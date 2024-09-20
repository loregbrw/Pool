import { Request, Response } from "express";
import AuthService from "../services/authService.service";
import UserService from "../services/userService.service";

export default class UserController {
    public static login = async (req: Request, res: Response) => {

        const token = await AuthService.login(req.body);
        return res.status(200).json({ token });
    }

    public static create = async (req: Request, res: Response) => {
        
        const user = await UserService.create(req.body);
        return res.status(200).json({ user });
    }
}