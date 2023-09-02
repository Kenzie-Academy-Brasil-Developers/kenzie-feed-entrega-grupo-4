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
  const { name } = JSON.parse(localStorage.getItem("@UserData"));
  const { dataPost, editPost, editingPost } = useContext(PostsContext);
  const { handleSubmit, register } = useForm({
    values: {
      title: editingPost?.title,
      description: editingPost?.description,
      image: editingPost?.image,
    },
  });

  const formData = (data) => {
    const newPost = {
      id: dataPost.id,
      userId: dataPost.userId,
      owner: dataPost.owner,
      title: data.title,
      description: data.description,
      image: data.image,
    };
    editPost.mutate(newPost);
  };

  return (
    <>
      <div className="container">
        <header className={style.header}>
          <img src={logo} alt="Logo Kenzie" />
          <div>
            <div className={style.imgUser}>
              <p className="paragraph">{name.substr(0, 1)}</p>
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
      </div>
      <div className={style.colors}>
        <div className={style.containerMain}>
          <main>
            <div className={style.headerMain}>
              <h2 className="title-2">Editando:</h2>
              <Link to={"/dashboard"} className={style.buttonBack}>
                <AiOutlineArrowLeft className={style.arrowIcon} />
                <p>Voltar</p>
              </Link>
            </div>
            <form className={style.form} onSubmit={handleSubmit(formData)}>
              <label>Titulo</label>
              <Input type={"text"} {...register("title", { required: true })} />
              <label>Imagem em destaque</label>
              <Input type={"text"} {...register("image", { required: true })} />
              <label>Conteúdo</label>
              <textarea
                {...register("description", { required: true })}
              ></textarea>
              <button type="submit" className="btn-medium">
                Salvar Post
              </button>
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
