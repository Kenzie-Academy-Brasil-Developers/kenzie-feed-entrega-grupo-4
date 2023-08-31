import { useContext, useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PostList } from "../../components/PostList";
import styles from "../ViewPost/style.module.scss";
import { PostsContext } from "../../providers/PostsContext";
import { useQuery } from "react-query";
import { apiFeed } from "../../services/api";

export const ViewPost = () => {
  const { data: currentPost } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const postId = localStorage.getItem("@PostId");
      const { data } = await apiFeed.get(`posts/${postId}?_embed=likes`);
      return data;
    },
  });

  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(0);

  return (
    <DefaultTemplate>
      <main className="container">
        <section className={styles.contents}>
          <div className={styles.viewPost}>
            <div className={styles.postTitle}>
              <span className="paragraph">Por:{currentPost?.owner}</span>
              <h1 className="title two textCenter">{currentPost?.title}</h1>
            </div>
            <img
              className={styles.bannerPost}
              src={currentPost?.image}
              alt=""
            />
            <div className={styles.like}>
              {like ? (
                <AiOutlineHeart
                  size={20}
                  type="button"
                  onClick={() => setLike(!like)}
                />
              ) : (
                <AiFillHeart
                  size={20}
                  type="button"
                  onClick={() => setLike(!like)}
                />
              )}
              {like ? (
                <span
                  className="paragraph small"
                  onClick={() => setLike(!like)}
                >
                  Seja o primeiro a curtir este post{" "}
                </span>
              ) : (
                <span
                  className="paragraph small"
                  onClick={() => setLike(!like)}
                >
                  {countLike} Curtida
                </span>
              )}
            </div>
            <p className="paragraph">{currentPost?.description}</p>
          </div>
        </section>

        <section>
          <div className={styles.more}>
            <h2 className="title one">Leia também</h2>
          </div>

          <PostList />
        </section>
      </main>
    </DefaultTemplate>
  );
};
