import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import { Loading } from "./components/Loading";
import { useContext } from "react";
import { PostsContext } from "./providers/PostsContext";

function App() {
  const { isLoading } = useContext(PostsContext);
  return (
    <>
      {isLoading ? <Loading /> : <RoutesMain />}

      <ToastContainer position="bottom-right" autoClose={1.5 * 1000} />
    </>
  );
}

export default App;
