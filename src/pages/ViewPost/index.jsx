import { useContext, useEffect, useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "../ViewPost/style.module.scss";
import { PostsContext } from "../../providers/PostsContext";
import { apiFeed } from "../../services/api";
import { produce } from "immer";
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
  }, [lsPost, addLikePost]);

//   const postListTrue = postList || [];

//   const postListReversed = produce(postListTrue, (draftPostList) => {
//     draftPostList.reverse();
//   });

//   const readMore = postListReversed.slice(0, 2);




  const seeAlso = postList?.filter((post) => post.id !== currentPost?.id);
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
        <PostList postList={readMore} />
      </section>

    </DefaultTemplate>
  );
};
