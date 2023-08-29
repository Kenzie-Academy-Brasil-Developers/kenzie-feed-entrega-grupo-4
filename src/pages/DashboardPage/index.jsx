import logo from "../../assets/logo.svg";
import { MdLogout } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FeedList } from "../../components/FeedList";
import { Footer } from "../../components/Footer";
import { PostsContext } from "../../providers/PostsContext";
import { ModalNewPost } from "../../components/Modal/ModalNewPost";
import { useContext } from "react";

export const DashboardPage = () => {
  const { isOpenModalNewPost, setIsOpenModalNewPost } =
    useContext(PostsContext);
  return (
    <>
      {isOpenModalNewPost ? <ModalNewPost>teste</ModalNewPost> : null}
      <main>
        <div>
          <h1>Suas publicações</h1>
          <button onClick={() => setIsOpenModalNewPost(true)}>
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
