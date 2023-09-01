import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
