import { z } from "zod";

export default class ColumnSchemas {

    public static creation = z.object({
        name: z.string().max(255),
        index: z.number().int().nonnegative(),
        sprintId: z.string().uuid()
    })
}