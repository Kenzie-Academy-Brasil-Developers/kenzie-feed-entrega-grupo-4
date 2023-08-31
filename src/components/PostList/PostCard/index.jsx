import styles from "./style.module.scss";

export const PostCard = ({ post }) => {
  return (
    <>
      {post.length == 0 ? (
        <div className={styles.noPost}>
          <p className="title one">Ainda não possui nenhuma publicação</p>
        </div>
      ) : (
        <li>
          <div className={styles.contentPost}>
            <div className={styles.containerBanner}>
              <img className={styles.banner} src={post.image} alt="" />
            </div>
            <p className="paragraph small">Por: {post.owner}</p>
            <h2 className="title three">{post.title}</h2>
            <p className="paragraph link blue">Ler mais</p>
          </div>
        </li>
      )}
    </>
  );
};
