import { useContext, useEffect, useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "../ViewPost/style.module.scss";
import { PostsContext } from "../../providers/PostsContext";
import { apiFeed } from "../../services/api";
import { PostList } from "../../components/PostList";

export const ViewPost = () => {
  const [currentPost, setCurrentPost] = useState([]);
  const { postList, lsPost, noLike, addLikePost } = useContext(PostsContext);
  const { userId } = JSON.parse(localStorage.getItem("@UserData"));
  const numberLike = currentPost?.likes?.length;
  const isLiked = currentPost.likes;
  const imLiked = isLiked?.filter((likes) => likes.userId === userId);

  useEffect(() => {
    const requestPostById = async () => {
      const postId = localStorage.getItem("@PostId");
      const { data } = await apiFeed.get(`posts/${postId}?_embed=likes`);
      setCurrentPost(data);
    };
    requestPostById();
  }, [lsPost]);

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
              {imLiked?.length > 0 ? (
                <div className={styles.liked}>
                  <AiFillHeart
                    size={20}
                    type="button"
                    onClick={() => noLike.mutate(currentPost?.id)}
                  />{" "}
                  <span className="paragraph small">{numberLike} Curtida</span>
                </div>
              ) : (
                <div className={styles.liked}>
                  <AiOutlineHeart
                    size={20}
                    type="button"
                    onClick={() => addLikePost.mutate(currentPost?.id)}
                    className={styles.teste}
                  />
                  {numberLike <= 0 ? (
                    <span className="paragraph small">
                      Seja o primeiro a curtir este post
                    </span>
                  ) : (
                    <span
                      className="paragraph small"
                      onClick={() => setLike(!like)}
                    >
                      {numberLike} Curtida
                    </span>
                  )}
                </div>
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
      </main>
    </DefaultTemplate>
  );
};
