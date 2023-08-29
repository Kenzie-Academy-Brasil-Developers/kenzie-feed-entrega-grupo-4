import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import banner from "../../assets/Banner.jpeg";
import { FeedList } from "../../components/FeedList";
import styles from "../HomePage/style.module.scss";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section>
            <div className={styles.welcomeFeedText}>
              <span>KENZIE FEED</span>
              <h1>Seja muito bem vindo ao KenzieFeed</h1>
              <p>Fique por dentro das últimas notícias</p>
            </div>
            <div className={styles.containerBanner}>
              <img
                className={styles.banner}
                src={banner}
                alt="banner mesa de trabalho"
              />
            </div>
          </section>
          <section className={styles.feedNewsPosts}>
            <h2>Últimas notícias</h2>
            <FeedList />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
