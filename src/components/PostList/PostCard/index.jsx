import styles from "./style.module.scss";

export const PostCard = ({ post }) => {
  const { getPostById } = useContext(PostsContext);

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
            <p className="paragraph-small">Por: {post.owner}</p>
            <h2 className="title-3">{post.title}</h2>
            <button onClick={() => getPostById(post.id)}>Ler mais</button>
          </div>
        </li>
      )}
    </>
  );
};
