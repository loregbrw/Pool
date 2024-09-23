import { z } from "zod";

export default class TagSchemas {

    public static creation = z.object({
        name: z.string().max(255),
        color: z.string().max(255)
    });

    public static update = z.object({
        name: z.string().max(255).optional(),
        color: z.string().max(255).optional()
    })
}