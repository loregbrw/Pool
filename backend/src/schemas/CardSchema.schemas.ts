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
    });

    public static update = z.object({
        name: z.string().max(255).optional(),
        description: z.string().max(1000).optional(),
        dueDate: z.preprocess(
            (arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : undefined),
            z.date()
        ).optional(),
        status: z.boolean().optional(),
        index: z.number().int().nonnegative().optional(),
        sectionId: z.string().uuid().optional().optional(),
        columnId: z.string().uuid().optional().optional(),
        tagsId: z.array(z.string().uuid()).optional()
    })
}