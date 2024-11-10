import catchErrors from "../utils/catchErrors";
import {z} from 'zod'

const registerSchema = z.object({
    email: z.string().email().min(1).max(255),
    password: z.string().min(5).max(255),
    confirmPassword: z.string().min(5).max(255),
    userAgent:z.string().optional()
}).refine(
    (data) => data.password === data.confirmPassword , {
        message: "Passwords do not match",
        path:["confirmPassword"]//this is the field failed the registration
    }
)

export const registerHandler = catchErrors(
    async(req,res) =>{
        const request  = registerSchema.parse({
            ...req.body,
            userAgent:req.headers["user-agent"],
        });
    }
)