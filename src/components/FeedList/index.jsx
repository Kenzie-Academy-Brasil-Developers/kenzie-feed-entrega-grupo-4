import { useContext } from "react";
import { FeedCard } from "../FeedCard";
import { PostsContext } from "../../providers/PostsContext";

export const FeedList = () => {
  const { postList, setIsOpenModalNewPost } = useContext(PostsContext);
  const { userId } = JSON.parse(localStorage.getItem("@UserData"));
  const newPostList = postList?.filter((post) => post.userId === userId);
  return (
    <ul>
      {newPostList.length !== 0 ? ( newPostList?.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))) : (<li onClick={() => setIsOpenModalNewPost(true)} className="paragraph line"><p className="paragraph bold blue textCenter">Você ainda não possui publicações</p></li>)}
    </ul>
  );
};
