import { useContext } from "react";
import { FeedCard } from "../FeedCard";
import { PostsContext } from "../../providers/PostsContext";


export const FeedList = () => {
  const { postList } = useContext(PostsContext);
  const { userId } = JSON.parse(localStorage.getItem("@UserData"));
  const newPostList = postList?.filter((post) => post.userId === userId);
  return (
    
    <ul >
      {newPostList?.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
