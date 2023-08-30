import logo from "../../assets/logo.svg";
import { MdLogout } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FeedList } from "../../components/FeedList";
import { Footer } from "../../components/Footer";
import { PostsContext } from "../../providers/PostsContext";
import { ModalNewPost } from "../../components/Modal/ModalNewPost";
import { useContext } from "react";
import { FormNewPost } from "../../components/Forms/NewpostForm";
import styles from "./style.module.scss";

export const DashboardPage = () => {
  const { isOpenModalNewPost, setIsOpenModalNewPost } =
    useContext(PostsContext);

  return (
    <>
      <header className={styles.header__container}>
        <img src={logo} alt="logo-kz" />
        <div className={styles.buttons__container}>
          <img src="#"></img>
          <button className="btn-outline-mobile">Dashboard</button>
          <button>
            <MdLogout title="Logout" aria-label="sair" size={20} />
          </button>
        </div>
      </header>
      {isOpenModalNewPost ? (
        <ModalNewPost>
          <FormNewPost />
        </ModalNewPost>
      ) : null}
      <main>
        <div className={styles.feedHeader__container}>
          <h2 className="title-3">Suas publicações</h2>
          <button
            onClick={() => setIsOpenModalNewPost(true)}
            className="btn-solid-s-mobile"
          >
            <IoMdAddCircleOutline
              title="NewPost"
              aria-label="adicionar post"
              size={21}
            />
            Novo post
          </button>
        </div>
        <div>
          <FeedList />
        </div>
      </main>
      <Footer />
    </>
  );
};
