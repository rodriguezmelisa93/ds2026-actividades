import type { ReactNode } from "react";
import { Container, Navbar } from "react-bootstrap";
//import Footer from "react"; TE FALTA CREAR Y AGREGAR EN EL CONTAINER FOOTER





interface LayoutProps { children: ReactNode};

function Layout ({ children}: LayoutProps)

{
    return(

    
    <div className= "Layout">
        <Navbar/>
        <Container className="py-4">{children}</Container>
       
    </div>
    );

}

export default Layout;

