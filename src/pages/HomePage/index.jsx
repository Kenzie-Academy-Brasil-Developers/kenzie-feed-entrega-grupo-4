import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import banner from "../../assets/Banner.jpeg";
import styles from "../HomePage/style.module.scss";
import { useNavigate } from "react-router-dom";
import { produce } from "immer";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext";
import { PostCard } from "../../components/PostList/PostCard";

export const HomePage = () => {
  const navigate = useNavigate();

  const { postList } = useContext(PostsContext);

  const postListTrue = postList || [];

  const postListReversed = produce(postListTrue, (draftPostList) => {
    draftPostList.reverse();
  });
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section>
            <div className={styles.welcomeFeedText}>
              <span className="paragraph small bold">KENZIE FEED</span>
              <h1 className="title one">Seja muito bem vindo ao KenzieFeed</h1>
              <p className="paragraph">Fique por dentro das últimas notícias</p>
            </div>
            <div className={styles.containerBanner}>
              <img
                className={styles.banner}
                src={banner}
                alt="banner mesa de trabalho"
              />
            </div>
          </section>
          <section className={styles.feedNewsPosts}>
            <div className={styles.viewAll}>
              <h2 className="title two">Últimas notícias</h2>
              <button
                className="btn-small"
                onClick={() => navigate("/allPosts")}
              >
                Ver tudo
              </button>
            </div>
            <ul>
              {postListReversed?.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
