import { useContext } from "react";
import { FeedCard } from "../FeedCard";
import { PostsContext } from "../../providers/PostsContext";
import styles from "./style.module.scss";


export const FeedList = () => {
  const { postList } = useContext(PostsContext);

  console.log(postList);

  return (
    <ul className={styles.container}>
      {postList?.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
