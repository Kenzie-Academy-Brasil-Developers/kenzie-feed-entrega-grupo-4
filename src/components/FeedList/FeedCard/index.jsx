import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import style from "./style.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext";

export const FeedCard = () => {
  const { postList } = useContext(PostsContext);
  const posts = postList?.data || [];

  return (
    <>
      {!posts.length && (
        <p className="title-2">Ainda não possui nenhuma publicação</p>
      )}
      {posts?.map((post) => {
        return (
          <li key={post.id}>
            <div className={style.contentPost}>
              <img className={style.img} src={post.image} alt="" />
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