import { useContext, useEffect, useRef } from "react";
import { PostsContext } from "../../../providers/PostsContext";
import styles from "./style.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export const ModalNewPost = ({ children }) => {
  const { setIsOpenModalNewPost } = useContext(PostsContext);

  const modalNewPostRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalNewPostRef.current?.contains(event.target)) {
        setIsOpenModalNewPost(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div role="dialog" className={styles.modalOverlay}>
      <div ref={modalNewPostRef} className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <p className="title two">Novo post</p>
          <button
            ref={buttonRef}
            className={styles.closeButton}
            onClick={() => setIsOpenModalNewPost(false)}
          >
            <AiOutlineClose size={30} color="#00000050" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
