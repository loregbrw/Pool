import AppDataSource from "../data-source";
import Section from "../entities/Section.entity";
import { TSectionCreation } from "../interfaces/Section.types";

export default class SectionService {

    public static create = async (payload: TSectionCreation) => {
        
        const sectionRepo = AppDataSource.getRepository(Section);
        const columnrepo = AppDataSource.getRepository(Section);

        const column = await columnrepo.findOne({ where: { id: payload.columnId }});

        
    }
}