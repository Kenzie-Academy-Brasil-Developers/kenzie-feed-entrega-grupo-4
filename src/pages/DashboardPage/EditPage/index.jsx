import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import style from "./style.module.scss";
import { Input } from "../../../components/Forms/Input";
import logo from "../../../assets/logo.svg";
import { Footer } from "../../../components/Footer";
import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export const EditPage = () => {
  const { dataPost } = useContext(PostsContext);
  const { handleSubmit, register } = useForm();
  const formData = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <header className={style.header}>
          <img src={logo} alt="Logo Kenzie" />
          <div>
            <div className={style.imgUser}>
              <p>A</p>
            </div>
            <Link
              to={"/dashboard"}
              className={`${"btn-outline"} ${style.link}`}
            >
              Dashboard
            </Link>
            <FiLogOut className={style.icon} />
          </div>
        </header>
        <div className={style.containerMain}>
          <main>
            <div className={style.headerMain}>
              <h2 className="title-2">Editando:</h2>
              <button className={style.buttonBack}>
                <AiOutlineArrowLeft className={style.arrowIcon} />
                <p>Voltar</p>
              </button>
            </div>
            <form className={style.form} onSubmit={handleSubmit(formData)}>
              <label>Titulo</label>
              <Input type={"text"} value={"testando"} {...register("title")} />
              <label>Imagem em destaque</label>
              <Input
                type={"text"}
                value={"testando testando testando"}
                {...register("image")}
              />
              <label>Conteúdo</label>
              <textarea {...register("description")}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente maiores amet magnam dignissimos quos quisquam,
                obcaecati eos et repellat aspernatur mollitia id unde incidunt
                laborum laboriosam ipsum praesentium iusto earum!
              </textarea>
              <button type="submit" className="btn-medium">
                Salvar Post
              </button>
            </form>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
