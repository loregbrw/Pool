import { z } from "zod";

export default class CardSchema {

    public static creation = z.object({
        name: z.string().max(255),
        description: z.string().max(1000),
        dueDate: z.preprocess(
            (arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : undefined),
            z.date()
        ).optional(),
        status: z.boolean(),
        index: z.number().int().nonnegative(),
        sectionId: z.string().uuid().optional(),
        columnId: z.string().uuid().optional(),
        tagsId: z.array(z.string().uuid())
    })
}