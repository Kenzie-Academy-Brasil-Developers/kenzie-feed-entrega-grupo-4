import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import styles from "./style.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext";
import { useNavigate } from "react-router-dom";

export const FeedCard = ({ post }) => {
  const { postForId, deletePost } = useContext(PostsContext);
  const navigate = useNavigate();
  const btnEdit = (postId) => {
    navigate("/editPage");
    postForId(postId);
  };
  return (
    <li>
      <div className={styles.feedCard__container}>
        <div className={styles.btnCard__container}>
          <button onClick={() => btnEdit(post.id)}>
            <MdEdit title="BtnEdit" aria-label="editar post" size={21} />
          </button>
          <button onClick={() => deletePost.mutate(post.id)}>
            <RiDeleteBin6Line
              title="BtnDelete"
              aria-label="excluir post"
              size={21}
            />
          </button>
        </div>
        <div className={styles.cardPost}>
          <img src={post.image} alt={post.title} />
          <h4>{post.title}</h4>
        </div>
      </div>
    </li>
  );
};
