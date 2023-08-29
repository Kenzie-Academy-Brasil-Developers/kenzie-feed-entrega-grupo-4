import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("O campo email é obrigatório")
    .email("Forneça um e-mail válido"),
  password: z.string().nonempty("O campo senha é obrigatório"),
});
