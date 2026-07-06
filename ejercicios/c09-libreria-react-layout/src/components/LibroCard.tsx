import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import type { Libro } from "../types/libro";
import { Link } from "react-router-dom";

type Props = {
  libro: Libro;
};

function LibroCard({ libro }: Props) {
  const [likes, setLikes] = useState(0);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={libro.imagen}
        className="cardStyle"
      />

      <Card.Body>
        <Card.Title>{libro.titulo}</Card.Title>

        <Card.Text>
          {libro.descripcion}
        </Card.Text>

        <Button
          variant="danger"
          onClick={() => setLikes(likes + 1)}
        >
          💙 {likes}
        </Button>

        <Button variant="primary" className="ms-2">
          ${libro.precio}
        </Button>

        {/* 👇 ESTO VA DENTRO DEL RETURN */}
        <div className="mt-2">
          <Link to={`/libros/${libro.id}`}>
            <Button variant="info">
              Ver más
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LibroCard;




// import { Card } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { useState } from "react";


// const [likes1, setLikes1] = useState(0);
//   const [likes2, setLikes2] = useState(0);
//   const [likes3, setLikes3] = useState(0);

     
    

//       <div className="d-flex justify-content-center gap-4 flex-wrap ">

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="/imagenes/quijote.jpg" className='cardStyle' />
//           <Card.Body>
//             <Card.Title>Don Quijote</Card.Title>
//             <Card.Text>
              
//               El libro más vendido en todos los tiempos, es la obra fundamental de la literatura, ¿Aun no lo leiste?
//             </Card.Text>
//             <Button
//               variant="danger"
//               onClick={() => setLikes1(likes1 + 1)}
//             >
//               💙{likes1}
//             </Button>
//             <Button variant="primary">$34.999</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="/imagenes/neurociencia.jpg" className='cardStyle' />
//           <Card.Body>
//             <Card.Title>Neurociencia</Card.Title>
//             <Card.Text>
//               Aprenderas como moldear los hábitos para optimizar el rendimiento y el bienestar mental.
//             </Card.Text>
//              <Button
//               variant="danger"
//               onClick={() => setLikes2(likes2 + 1)}
//             >
//               💙 {likes2}
//             </Button>
//             <Button variant="primary">$24.500</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="/imagenes/viaje.jpg" className='cardStyle' />
//           <Card.Body>
//             <Card.Title>Mapa en la Cabeza</Card.Title>
//             <Card.Text>
//               Un libro lleno de experiencias y diversión, un recorrido por el mapa de la cabeza.
//             </Card.Text>
//              <Button
//               variant="danger"
//               onClick={() => setLikes3(likes3 + 1)}
//             >
//               💙 {likes3}
//             </Button>
//             <Button variant="primary">$27.999</Button>
//           </Card.Body>
//         </Card>

//       </div>


    

//   ;
