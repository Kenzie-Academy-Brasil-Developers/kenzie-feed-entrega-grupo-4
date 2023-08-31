import { PostCard } from "./PostCard";
import style from "./style.module.scss";

export const PostList = ({ postList }) => {
  return (
    <ul className={style.postList}>
      {postList?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
