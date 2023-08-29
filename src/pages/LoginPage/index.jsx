import loginImage from "../../assets/LoginImage.png";
import { LoginForm } from "../../components/Forms/LoginForm";

export const LoginPage = () => {
  return (
    <main>
      <section>
        <img src={loginImage} alt="" />
        <div>
          <h1>Acesse o KenzieFeed</h1>
          <span>preencha os campos corretamente para fazer login</span>
          <LoginForm />
        </div>
      </section>
    </main>
  );
};
