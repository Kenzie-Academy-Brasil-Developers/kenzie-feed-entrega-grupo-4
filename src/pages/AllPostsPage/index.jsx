import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import style from "./style.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext";
import { PostCard } from "../../components/PostList/PostCard";
import { produce } from "immer";
import { PostList } from "../../components/PostList";
import { DefaultTemplate } from "../../components/DefaultTemplate";

export const AllPostsPage = () => {
  const { postList } = useContext(PostsContext);

  const postListTrue = postList || [];

  const postListReversed = produce(postListTrue, (draftPostList) => {
    draftPostList.reverse();
  });

  return (
    <DefaultTemplate>
      <div className={style.mainPost}>
        <div>
          <h1 className="title-2">Todas as notícias</h1>
        </div>
        <div>
          <PostList postList={postListReversed} />
        </div>
      </div>
    </DefaultTemplate>
  );
};
