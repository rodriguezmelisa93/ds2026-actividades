import "./assets/index.css"

//import { LibrosCatalogo } from './pages/LibrosCatalogo';
//import { Contacto } from './pages/Contacto';
//import { LibroDetalle } from './pages/LibroDetalle';


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/LibrosCatalogo";
import LibroDetalle from "./pages/LibroDetalle";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
      </Routes>
    </Layout>
  );
}

export default App;
