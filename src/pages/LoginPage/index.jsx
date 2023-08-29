import banner from "../../assets/Banner.jpeg";
import { LoginForm } from "../../components/Forms/LoginForm";

export const LoginPage = () => {
  return (
    <main>
      <section>
        <img src={banner} alt="" />
        <div>
          <h1>Acesse o KenzieFeed</h1>
          <span>preencha os campos corretamente para fazer login</span>
          <LoginForm />
        </div>
      </section>
    </main>
  );
};
