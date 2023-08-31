import styles from "./style.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext";

export const PostCard = ({ post }) => {
  const { getPostById } = useContext(PostsContext);

  return (
    <>
      {post.length == 0 ? (
        <div className={styles.noPost}>
          <p>Ainda não possui nenhuma publicação</p>
        </div>
      ) : (
        <li>
          <div className={styles.contentPost}>
            <img className={styles.img} src={post.image} alt="" />
            <p className="paragraph-small">Por: {post.owner}</p>
            <h2 className="title-3">{post.title}</h2>
            <button onClick={() => getPostById(post.id)}>Ler mais</button>
          </div>
        </li>
      )}
    </>
  );
};
