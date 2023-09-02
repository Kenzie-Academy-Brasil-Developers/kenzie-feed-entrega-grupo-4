import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import styles from "./style.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext";
import { useNavigate } from "react-router-dom";

export const FeedCard = ({ post }) => {
  const { postForId, deletePost, setEditingPost } = useContext(PostsContext);
  const navigate = useNavigate();
  const btnEdit = (postId) => {
    navigate("/editPage");
    postForId(postId);
  };
  return (
    <li>
      <div className={styles.cards}>
        <div className={styles.contents}>
          <img src={post.image} alt={post.title} />
          <h4 className="title editPost">{post.title}</h4>
        </div>

        <div className={styles.interaction}>
          <button onClick={() => (setEditingPost(post), btnEdit(post.id))}>
            <MdEdit
              title="BtnEdit"
              aria-label="editar post"
              size={36}
              color="#55a3ff"
            />
          </button>
          <button onClick={() => deletePost.mutate(post.id)}>
            <RiDeleteBin6Line
              title="BtnDelete"
              aria-label="excluir post"
              size={36}
              color="#55a3ff"
            />
          </button>
        </div>
      </div>
    </li>
  );
};
