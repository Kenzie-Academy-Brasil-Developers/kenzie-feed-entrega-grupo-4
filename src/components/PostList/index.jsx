import { PostCard } from "./PostCard";
import style from "./style.module.scss";

export const PostList = () => {
  return (
    <ul className={style.postList}>
      <PostCard />
    </ul>
  );
};
