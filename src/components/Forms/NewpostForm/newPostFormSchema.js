import { z } from "zod";

export const newPostFormSchema = z.object({
  title: z.string().nonempty("O título é obrigatório"),
  image: z.string().nonempty("O imagem é obrigatória"),
  description: z.string().nonempty("O conteúdo do post é obrigatório"),
});
