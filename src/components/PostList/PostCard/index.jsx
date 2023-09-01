import { useContext } from "react";
import styles from "./style.module.scss";
import { PostsContext } from "../../../providers/PostsContext";
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  const { getPostById } = useContext(PostsContext);

  return (
    <>
      {post.length == 0 ? (
        <div className={styles.noPost}>
          <p className="title one">Ainda não possui nenhuma publicação</p>
        </div>
      ) : (
        <li>
          <div className={styles.contentPost}>
            <div className={styles.containerBanner}>
              <img className={styles.banner} src={post.image} alt="" />
            </div>

            <p className="paragraph small">Por: {post.owner}</p>
            <h2 className="title three">{post.title}</h2>
            <Link
              to={"/viewPost"}
              className="paragraph link blue"
              onClick={() => getPostById(post.id)}
            >
              Leia mais
            </Link>
          </div>
        </li>
      )}
    </>
  );
};
