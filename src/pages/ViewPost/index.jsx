import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PostList } from "../../components/PostList";
import styles from "../ViewPost/style.module.scss";

export const ViewPost = () => {
  const data = {
    title: "5 lugares para viajar nas próximas férias de verão",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    owner: "Roberto Silva",
    image:
      "https://res.cloudinary.com/dsbkp5841/image/upload/v1688391686/Rectangle_4_lvbqtd.jpg",
  };

  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(0);

  return (
    <DefaultTemplate>
      <main className="container">
        <section className={styles.contents}>
          <div className={styles.viewPost}>
            <div className={styles.postTitle}>
              <span className="paragraph">Por:{data.owner}</span>
              <h1 className="title two textCenter">{data.title}</h1>
            </div>
            <img className={styles.bannerPost} src={data.image} alt="" />
            <div className={styles.like}>
              {like ? (
                <AiOutlineHeart size={20} type="button" onClick={() => setLike(!like)} />
              ) : (
                <AiFillHeart size={20} type="button" onClick={() => setLike(!like)} />
              )}
              {like ? (
                <span className="paragraph small" onClick={() => setLike(!like)}>
                  Seja o primeiro a curtir este post{" "}
                </span>
              ) : (
                <span className="paragraph small" onClick={() => setLike(!like)}>{countLike} Curtida</span>
              )}
            </div>
            <p className="paragraph">{data.description}</p>
          </div>
        </section>

        <section>
          <div className={styles.more}>
          <h2 className="title one" >Leia também</h2>
          </div>

          <PostList />
        </section>
      </main>
    </DefaultTemplate>
  );
};
