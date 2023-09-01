import { useContext, useEffect, useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "../ViewPost/style.module.scss";
import { PostsContext } from "../../providers/PostsContext";
import { apiFeed } from "../../services/api";
import { PostList } from "../../components/PostList";

export const ViewPost = () => {
  const { postList, lsPost } = useContext(PostsContext);
  const [like, setLike] = useState(false);

  const [currentPost, setCurrentPost] = useState([]);

  useEffect(() => {
    const requestPostById = async () => {
      const postId = localStorage.getItem("@PostId");
      const { data } = await apiFeed.get(`posts/${postId}?_embed=likes`);
      setCurrentPost(data);
    };
    requestPostById();
  }, [lsPost]);

  const [countLike, setCountLike] = useState(0);

  return (
    <DefaultTemplate>
      <section className={styles.contents}>
        <div className={styles.viewPost}>
          <div className={styles.postTitle}>
            <span className="paragraph">Por:{currentPost?.owner}</span>
            <h1 className="title two textCenter">{currentPost?.title}</h1>
          </div>
          <img className={styles.bannerPost} src={currentPost?.image} alt="" />
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
              <span className="paragraph small" onClick={() => setLike(!like)}>
                Seja o primeiro a curtir este post{" "}
              </span>
            ) : (
              <span className="paragraph small" onClick={() => setLike(!like)}>
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
        <PostList postList={postList} />
      </section>
    </DefaultTemplate>
  );
};
