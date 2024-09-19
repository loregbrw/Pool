import { Request, Response } from "express";
import AuthService from "../services/authService.service"

export default class userController {
    public static login = async (req: Request, res: Response) => {

        const token = await AuthService.login(req.body);
        return res.status(200).json({ token });
    }

    public static create = async (req: Request, res: Response) => {
        
    }
}