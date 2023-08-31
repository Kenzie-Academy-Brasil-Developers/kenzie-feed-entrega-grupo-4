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
  const { name } = JSON.parse(localStorage.getItem("@UserData"));
  return (
    <>
      <header className={`${styles.header__container} container`}>
        <img src={logo} alt="logo-kz" />
        <div className={styles.buttons__container}>
          <p className="paragraph">{name.substr(0, 1)}</p>
          <button className="btn-outline">Dashboard</button>
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
      <main className={`${styles.main__container} container`}>
        <div className={styles.feedHeader__container}>
          <h2 className="title three">Suas publicações</h2>
          <button
            onClick={() => setIsOpenModalNewPost(true)}
            className="btn-small"
          >
            <IoMdAddCircleOutline
              title="NewPost"
              aria-label="adicionar post"
              size={21}
            />
            Novo post
          </button>
        </div>
        <section>
          <FeedList />
        </section>
      </main>
      <Footer />
    </>
  );
};
