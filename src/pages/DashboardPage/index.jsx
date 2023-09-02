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
import { UserContext } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const { isOpenModalNewPost, setIsOpenModalNewPost } =
    useContext(PostsContext);
  const { userLogout } = useContext(UserContext);

  const navigate = useNavigate();

  const { name } = JSON.parse(localStorage.getItem("@UserData"));
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <img onClick={() => navigate("/")} src={logo} alt="logo-kz" />
          <div className={styles.userLogged}>
            <p className="paragraph">{name.substr(0, 1)}</p>
            <button className="btn-outline">Dashboard</button>
            <button>
              <MdLogout
                title="Logout"
                aria-label="sair"
                size={20}
                onClick={() => userLogout()}
              />
            </button>
          </div>
        </header>
        {isOpenModalNewPost ? (
          <ModalNewPost>
            <FormNewPost />
          </ModalNewPost>
        ) : null}
      </div>
      <main className={styles.container}>
        <div className="container">
          <section className={styles.newPost}>
            <div className={styles.contents}>
              <h2 className="title two">Suas publicações</h2>
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
