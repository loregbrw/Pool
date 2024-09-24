import { Request, Response } from "express";
import AppError from "../errors";
import CardService from "../services/CardService.service";

export default class CardController {

    public static create = async (req: Request, res: Response) => {

        const userSession = (req as any).userSession;

        if (!userSession)
            throw new AppError("Unathorized!", 401);

        const card = await CardService.create(req.body);
        return res.status(201).json({ card });
    };

    public static getById = async (req: Request, res: Response) => {

        const userSession = (req as any).userSession;

        if (!userSession)
            throw new AppError("Unathorized!", 401);

        const card = await CardService.getById(req.params.id);
        return res.status(201).json({ card });
    }
}