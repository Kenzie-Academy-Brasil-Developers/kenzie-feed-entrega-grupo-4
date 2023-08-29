import { FeedList } from "../../components/FeedList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import style from "./style.module.scss";
export const AllPostsPage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main className={style.mainPost}>
          <div>
            <h1 className="title-2">Todas as notícias</h1>
          </div>
          <div>
            <FeedList />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
