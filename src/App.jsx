import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";

function App() {
  return (
    <>
      <RoutesMain />

      <ToastContainer position="bottom-right" autoClose={1.5 * 1000} />
    </>
  );
}

export default App;
