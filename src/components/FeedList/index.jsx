import { useContext } from "react";
import { FeedCard } from "../FeedCard";
import { PostsContext } from "../../providers/PostsContext";

export const FeedList = () => {
  const { postList } = useContext(PostsContext);

  console.log(postList);

  return (
    <ul>
      {postList?.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
