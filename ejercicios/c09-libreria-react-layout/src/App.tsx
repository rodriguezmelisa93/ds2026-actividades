import "./assets/index.css"

//import { LibrosCatalogo } from './pages/LibrosCatalogo';
//import { Contacto } from './pages/Contacto';
//import { LibroDetalle } from './pages/LibroDetalle';

import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
