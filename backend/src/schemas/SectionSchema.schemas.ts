import { z } from "zod";

export default class SectionSchema {

    public static creation = z.object({
        name: z.string().max(255),
        color: z.string().max(255),
        index: z.number().int().nonnegative(),
        columnId: z.string().uuid()
    });

    // public static update = z.object({
    //     name: z.string().max(255).optional(),
    //     description: z.string().max(1000).optional(),
    //     dueDate: z.preprocess(
    //         (arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : undefined),
    //         z.date()
    //     ).optional(),
    //     status: z.boolean().optional(),
    //     index: z.number().int().nonnegative().optional(),
    //     sectionId: z.string().uuid().optional().optional(),
    //     columnId: z.string().uuid().optional().optional(),
    //     tagsId: z.array(z.string().uuid()).optional()
    // })
}