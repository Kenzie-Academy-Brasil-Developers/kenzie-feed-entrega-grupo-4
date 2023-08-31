import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import styles from "./style.module.scss";

export const FeedCard = ({ post }) => {
  return (
    <li >
      <div className={styles.feedCard__container}>
        <div className={styles.btnCard__container}>
          <button>
            <MdEdit title="BtnEdit" aria-label="editar post" size={21} />
          </button>
          <button>
            <RiDeleteBin6Line
              title="BtnDelete"
              aria-label="excluir post"
              size={21}
            />
          </button>
        </div>
        <div className={styles.cardPost}>
          <img src={post.image} alt={post.title} />
          <h4 className="titile one ">{post.title}</h4>
        </div>
      </div>
    </li>
  );
};
