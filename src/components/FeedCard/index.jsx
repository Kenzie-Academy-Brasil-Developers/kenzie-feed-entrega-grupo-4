import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

export const FeedCard = () => {
  return (
    <li>
      <div>
        <img src="" alt="" />
        <h2>Title content</h2>
      </div>
      <div>
        <button>
          <RiDeleteBin6Line
            title="BtnDelete"
            aria-label="excluir post"
            size={21}
          />
        </button>
        <button>
          <MdEdit title="BtnEdit" aria-label="editar post" size={21} />
        </button>
      </div>
    </li>
  );
};
