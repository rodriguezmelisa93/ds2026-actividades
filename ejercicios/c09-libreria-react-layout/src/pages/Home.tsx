import NavBar from "../components/Layout/Navbar";
import DarkVariantExample from "../components/carousel";
import LibroCard from "../components/LibroCard";
import type { Libro } from "../types/libro";

function Home() {
  const libros: Libro[] = [
    {
         id: 1,
      titulo: "Don Quijote",
      descripcion:
        "El libro más vendido en todos los tiempos, es la obra fundamental de la literatura, ¿Aún no lo leíste?",
      imagen: "/imagenes/quijote.jpg",
      precio: 34999,
    },
    {
         id: 2,
      titulo: "Neurociencia",
      descripcion:
        "Aprenderás cómo moldear los hábitos para optimizar el rendimiento y el bienestar mental.",
      imagen: "/imagenes/neurociencia.jpg",
      precio: 24500,
    },
    {
         id: 3,
      titulo: "Mapa en la Cabeza",
      descripcion:
        "Un libro lleno de experiencias y diversión, un recorrido por el mapa de la cabeza.",
      imagen: "/imagenes/viaje.jpg",
      precio: 27999,
    },
  ];

  return (
    <>
        <NavBar />
        <DarkVariantExample />

      <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
        {libros.map((libro) => (
          <LibroCard
            key={libro.titulo}
            libro={libro}
          />
        ))}
      </div>
    </>
  );
}

export default Home;