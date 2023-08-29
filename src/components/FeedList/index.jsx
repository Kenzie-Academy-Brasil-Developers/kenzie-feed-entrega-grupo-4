import { FeedCard } from "./FeedCard";
import style from "./style.module.scss";

export const FeedList = () => {
  return (
    <ul className={style.postList}>
      <FeedCard />
    </ul>
  );
};
