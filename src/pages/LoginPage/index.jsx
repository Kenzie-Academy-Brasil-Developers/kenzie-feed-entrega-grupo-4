import { useForm } from "react-hook-form";
import loginImage from "./LoginImage.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { PostsContext } from "../../providers/PostsContext";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm({});
  const {userLogin} = useContext(UserContext)  
  const {createPost} = useContext(PostsContext)  

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
            <button onClick={()=>userLogin()}>aaaaaaaaaaaaaaaaaaaaaaa</button>
            <button onClick={()=>createPost.mutate()}>postar</button>

          </form>
        </div>
      </section>
    </main>
  );
};
