import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import style from "./style.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext";
import { PostCard } from "../../components/PostList/PostCard";
import { produce } from "immer";

export const AllPostsPage = () => {
  const { postList } = useContext(PostsContext);

  const postListTrue = postList || [];

  const postListReversed = produce(postListTrue, (draftPostList) => {
    draftPostList.reverse();
  });

  console.log(postListReversed);

  return (
    <>
      <div className="container">
        <Header />
        <main className={style.mainPost}>
          <div>
            <h1 className="title-2">Todas as notícias</h1>
          </div>
          <div>
            <ul>
              {postListReversed?.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
