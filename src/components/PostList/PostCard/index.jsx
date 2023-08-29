import styles from "./style.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext";

export const PostCard = () => {
  const { postList } = useContext(PostsContext);
  const posts = postList || [];

  return (
    <>
      {!posts.length && (
        <div className={styles.noPost}>
          <p>Ainda não possui nenhuma publicação</p>
        </div>
      )}
      {posts?.map((post) => {
        return (
          <li key={post.id}>
            <div className={styles.contentPost}>
              <img className={styles.img} src={post.image} alt="" />
              <p className="paragraph-small">Por: {post.owner}</p>
              <h2 className="title-3">{post.title}</h2>
              <p className="font-link">Ler mais</p>
            </div>
          </li>
        );
      })}
    </>
  );
};