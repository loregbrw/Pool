import { z } from "zod";

export default class ProjectSchemas {

    public static creation = z.object({
        name: z.string().max(255),
        description: z.string().max(500),
        tagId: z.string().max(255),
        users: z.array(z.string().max(255)),
        sprintInitialDate: z.preprocess(
            (arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : undefined),
            z.date()
        ),
        sprintDuration: z.number()
    })
}