import { z } from "zod";

export default class ColumnSchemas {

    public static creation = z.object({
        name: z.string().max(255),
        index: z.number().int().nonnegative(),
        sprintId: z.string().uuid()
    });

    public static update = z.object({
        name: z.string().max(255).optional(),
        index: z.number().int().nonnegative().optional(),
        sprintId: z.string().uuid().optional()
    });
}