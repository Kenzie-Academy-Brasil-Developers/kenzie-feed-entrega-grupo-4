import { useContext, useEffect, useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "../ViewPost/style.module.scss";
import { PostsContext } from "../../providers/PostsContext";
import { apiFeed } from "../../services/api";
import { PostList } from "../../components/PostList";
import { toast } from "react-toastify";

export const ViewPost = () => {
  const [disableLike, setDisableLike] = useState(false);

  const [currentPost, setCurrentPost] = useState([]);
  const { postList, lsPost, removeLike, addLikePost } =
    useContext(PostsContext);

  const { userId } = JSON.parse(localStorage.getItem("@UserData")) || {};

  const numberLike = currentPost?.likes?.length;
  const isLiked = currentPost.likes;
  const imLiked = isLiked?.filter((likes) => likes.userId === userId);

  useEffect(() => {
    const requestPostById = async () => {
      const postId = localStorage.getItem("@PostId") || {};
      const { data } = await apiFeed.get(`posts/${postId}?_embed=likes`);
      setCurrentPost(data);
    };
    requestPostById();
  }, [lsPost, addLikePost]);

  const seeAlso = postList?.filter((post) => post.id !== currentPost?.id);

  const readMore = seeAlso.slice(0, 2);

  return (
    <DefaultTemplate>
      <div>
        <section className={styles.contents}>
          <div className={styles.viewPost}>
            <div className={styles.postTitle}>
              <span className="paragraph">Por: {currentPost?.owner}</span>
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
                    className={styles.icon}
                    size={20}
                    type="button"
                    onClick={() => {
                      setDisableLike(false),
                        imLiked.length === 1 ? removeLike(imLiked[0].id) : [];
                    }}
                  />{" "}
                  <span className="paragraph small">{numberLike} Curtida</span>
                </div>
              ) : (
                <div className={styles.liked}>
                  {userId ? (
                    <button
                      onClick={(e) => {
                        setDisableLike(true),
                          addLikePost.mutate(currentPost?.id);
                      }}
                      disabled={disableLike}
                    >
                      <AiOutlineHeart
                        size={20}
                        type="button"
                        className={styles.icon}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        // setDisableLike(true),
                        toast.warning("Para interagir faça o login...");
                      }}
                      disabled={disableLike}
                    >
                      <AiOutlineHeart
                        size={20}
                        type="button"
                        className={styles.icon}
                      />
                    </button>
                  )}

                  {numberLike <= 0 ? (
                    <span className="paragraph small">
                      Seja o primeiro a curtir este post
                    </span>
                  ) : (
                    <span className="paragraph small">
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
          <PostList postList={readMore} />
        </section>
      </div>
    </DefaultTemplate>
  );
};
