import { useForm } from "react-hook-form";
import loginImage from "./LoginImage.png";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm({});

  const submit = (formData) => {
  };
  return (
    <main>
      <section>
        <img src={loginImage} alt="" />
        <div>
          <h1>Acesse o KenzieFeed</h1>
          <span>preencha os campos corretamente para fazer login</span>
          <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="E-mail" {...register("email")} />
            <input
              type="password"
              placeholder="senha"
              {...register("password")}
            />
            <button type="submit">Entrar</button>
            <span> Não é cadastrado?</span>
            <button type="button">Cadastre-se</button>
          </form>
        </div>
      </section>
    </main>
  );
};
