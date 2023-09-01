import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { TextArea } from "../TextAreaForm";
import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPostFormSchema } from "./newPostFormSchema";
import styles from "./style.module.scss";

export const FormNewPost = () => {
  const { createPost, isLoading } = useContext(PostsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newPostFormSchema),
  });

  const submit = (formData) => {
    createPost.mutate(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <Input
        type={"text"}
        placeholder={"Título"}
        {...register("title")}
        error={errors.title}
        disabled={isLoading}
      />
      <Input
        type={"text"}
        placeholder={"Imagem em destaque"}
        {...register("image")}
        error={errors.image}
        disabled={isLoading}
      />
      <TextArea
        type={"text"}
        placeholder={"Conteúdo do post"}
        {...register("description")}
        error={errors.description}
        disabled={isLoading}
      />
      <button type="submit" className="btn-large" disabled={isLoading}>
        Criar post
      </button>
    </form>
  );
};
