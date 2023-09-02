import style from "./style.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext";
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
          <h1 className="title two">Todas as notícias</h1>
        </div>
        <div>
          <PostList postList={postListReversed} />
        </div>
      </div>
    </DefaultTemplate>
  );
};
