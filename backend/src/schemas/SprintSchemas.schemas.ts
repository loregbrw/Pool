import { z } from "zod";

export default class SprintSchemas {

    public static creation = z.object({
        name: z.string().max(255),
        projectId: z.string().uuid(),
        initialDate: z.preprocess(
            (arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : undefined),
            z.date()
        ),
        duration: z.number()
    });
}