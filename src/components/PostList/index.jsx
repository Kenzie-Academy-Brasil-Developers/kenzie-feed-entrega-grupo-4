import { useContext } from "react";
import { PostCard } from "./PostCard";
import style from "./style.module.scss";
import { PostsContext } from "../../providers/PostsContext";

export const PostList = () => {
  const { postList } = useContext(PostsContext);

  return (
    <ul className={style.postList}>
      {postList?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
