import { account } from "@/lib/appwrite";
import { loginSchema, signupSchema } from "@/schemas";
import { ID } from "appwrite";
import { z } from "zod";

class Auth {
  async createAccount(data: z.infer<typeof signupSchema>) {
    try {
      const validatedFields = signupSchema.safeParse(data);
      if (!validatedFields.success) {
        return { error: "Invalid fields!" };
      }

      const {email, password} = validatedFields.data;
      const user =  await account.create(
        ID.unique(), 
        email, 
        password
    );
    console.log(user)
    // const promise = await account.createVerification(`${process.env.NEXT_PUBLIC_URL!}/verify-email`);
    // console.log(promise)
      return { success: true, message: "Account created successfully!" };
    } catch (error) {
      return { error };
    }
  }

  async login(data: z.infer<typeof loginSchema>) {
    try {
      const validatedFields = loginSchema.safeParse(data);
      if (!validatedFields.success) {
        return { error: "Invalid fields!" };
      }

      const {email, password} = validatedFields.data;
      const session = await account.createEmailPasswordSession(email, password);
      return { success: true, session, message: "Login successful!" };
    } catch (error) {
      return { error: "An error occurred during login." };
    }
  }
}

// Usage
const auth = new Auth();

export { auth };
