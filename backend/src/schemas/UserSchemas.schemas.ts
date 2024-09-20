import { z } from "zod";

export default class UserSchemas {

    public static creation = z.object({
        name: z.string().max(255),
        username: z.string().max(50),
        email: z.string().email().max(255),
        birthdate: z.string(),
        password: z.string().max(100),
        image: z.string().max(255)
    });

    public static update = z.object({
        name: z.string().max(255).optional(),
        username: z.string().max(50).optional(),
        email: z.string().email().max(255).optional(),
        birthdate: z.string().optional(),
        password: z.string().max(100).optional(),
        image: z.string().max(255).optional()
    })
}