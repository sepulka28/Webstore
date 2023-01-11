import { string, z } from "zod"


const validatePassword = z.object ({
  name: z.string().min(1, { message: "First name is required" } ).max(100),
  email: z.string()
  .min(1, { message: "Email address is required"})
  .email({ message: "Email Address is invalid"}),
  password: string()
  .min(1, { message: "Password is required" })
  .min(8, { message: "Password must be more than 8 characters"})
  .max(32, { message: "Password must be less than 32 characters"})
})

export type validatePassword =  z.infer< typeof validatePassword>


