import {z} from "zod"

export const postValidation  = z.object({
    img:z.string(),
    text:z.string().max(500 , "exceeds its max length")
})