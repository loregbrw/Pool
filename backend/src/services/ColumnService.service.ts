import AppDataSource from "../data-source";
import CardsColumn from "../entities/CardsColumn.entity";
import Sprint from "../entities/Sprint.entity";
import User from "../entities/User.entity";
import AppError from "../errors";
import { TColumnCreation } from "../interfaces/Column.types";

export default class ColumnService {

    public static create = async (payload: TColumnCreation, userId: string) => {

        // adicionar verificação de editor e owner

        const columnRepo = AppDataSource.getRepository(CardsColumn);
        const sprintRepo = AppDataSource.getRepository(Sprint);
        const userRepo = AppDataSource.getRepository(User);
        
        const user = await userRepo.findOne({ where: { id: userId } });

        if (!user)
            throw new AppError("Problem authenticating user!", 401);

        const sprint = await sprintRepo.findOne({ where: { id: payload.sprintId }});

        if (!sprint)
            throw new AppError("Sprint not found!", 404);

        const column = columnRepo.create({ name: payload.name, index: payload.index, sprint: sprint });
        const createdColumn = await columnRepo.save(column);

        return createdColumn;
    }
}