import logo from "../../assets/logo.svg";
import { MdLogout } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FeedList } from "../../components/FeedList";
import { Footer } from "../../components/Footer";

export const DashboardPage = () => {
  return (
    <>
      <div className="container">
        <header>
          <img src={logo} alt="logo-kz" />
          <div>
            <span>UserImg</span>
            <button>Dashboard</button>
            <button>
              <MdLogout title="Logout" aria-label="sair" />
            </button>
          </div>
        </header>
        <main>
          <div>
            <h1>Suas publicações</h1>
            <button>
              <IoMdAddCircleOutline
                title="NewPost"
                aria-label="adicionar post"
                size={21}
              />
              Novo post
            </button>
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
