import { useParams } from "react-router-dom";

function LibroDetalle() {
  const { id } = useParams();

  return (
    <div className="text-center mt-4">
      <h2>Detalle del libro</h2>
      <p>ID del libro: {id}</p>
    </div>
  );
}

export default LibroDetalle;