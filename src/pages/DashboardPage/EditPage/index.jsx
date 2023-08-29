import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import style from "./style.module.scss";
import { Input } from "../../../components/Forms/Input";
import logo from "../../../assets/logo.svg";
import { Footer } from "../../../components/Footer";
import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext";
import { Link } from "react-router-dom";
export const EditPage = () => {
  const { dataPost } = useContext(PostsContext);
  return (
    <>
      <div className="container">
        <header className={style.header}>
          <img src={logo} alt="Logo Kenzie" />
          <div>
            <div className={style.imgUser}>
              <p>A</p>
            </div>
            <Link to={"/dashboard"} className="btn-outline">
              Dashboard
            </Link>
            <FiLogOut className={style.icon} />
          </div>
        </header>
        <div className={style.containerMain}>
          <main>
            <div className={style.handleHeader}>
              <h2 className="title-2">Editando:</h2>
              <button className={"btn-outline"}>
                <AiOutlineArrowLeft className={style.arrowIcon} />
                <p className={style.buttonBack}>Voltar</p>
              </button>
            </div>
            <form>
              <label>Titulo</label>
              <Input type={"text"} value={"testando"} />
              <label>Imagem em destaque</label>
              <Input type={"text"} value={"testando testando testando"} />
              <label>Conteúdo</label>
              <textarea>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente maiores amet magnam dignissimos quos quisquam,
                obcaecati eos et repellat aspernatur mollitia id unde incidunt
                laborum laboriosam ipsum praesentium iusto earum!
              </textarea>
              <button className="btn-solid-s">Salvar Post</button>
            </form>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
