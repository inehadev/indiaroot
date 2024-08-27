import {z} from "zod"

 export const userValidation = z.object({
    name: z.string().min(3 , "uername atleast of 3 characters"),
    email:z.string().email("Invalid email"),
    password:z.string()
})