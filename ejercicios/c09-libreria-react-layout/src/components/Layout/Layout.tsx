//import Footer from "react"; TE FALTA CREAR Y AGREGAR EN EL CONTAINER FOOTER(+adelante)


import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
