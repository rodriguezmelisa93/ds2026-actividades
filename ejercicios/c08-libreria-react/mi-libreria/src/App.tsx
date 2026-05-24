import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import "./index.css";


function App() {

  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [likes3, setLikes3] = useState(0);
  return (
    <>
      <NavScrollExample />
      <DarkVariantExample />

      <div className="d-flex justify-content-center gap-4 flex-wrap ">

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/imagenes/quijote.jpg" className='cardStyle' />
          <Card.Body>
            <Card.Title>Don Quijote</Card.Title>
            <Card.Text>
              
              El libro más vendido en todos los tiempos, es la obra fundamental de la literatura, ¿Aun no lo leiste?
            </Card.Text>
            <Button
              variant="danger"
              onClick={() => setLikes1(likes1 + 1)}
            >
              💙{likes1}
            </Button>
            <Button variant="primary">$34.999</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/imagenes/neurociencia.jpg" className='cardStyle' />
          <Card.Body>
            <Card.Title>Neurociencia</Card.Title>
            <Card.Text>
              Aprenderas como moldear los hábitos para optimizar el rendimiento y el bienestar mental.
            </Card.Text>
             <Button
              variant="danger"
              onClick={() => setLikes2(likes2 + 1)}
            >
              💙 {likes2}
            </Button>
            <Button variant="primary">$24.500</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/imagenes/viaje.jpg" className='cardStyle' />
          <Card.Body>
            <Card.Title>Mapa en la Cabeza</Card.Title>
            <Card.Text>
              Un libro lleno de experiencias y diversión, un recorrido por el mapa de la cabeza.
            </Card.Text>
             <Button
              variant="danger"
              onClick={() => setLikes3(likes3 + 1)}
            >
              💙 {likes3}
            </Button>
            <Button variant="primary">$27.999</Button>
          </Card.Body>
        </Card>

      </div>


    </>

  );
}

export default App;


function NavScrollExample() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src="/imagenes/puntoycomalogo.png" alt="puntoycoma" className="logo-img" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Libros</Nav.Link>
            <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Artes</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Biologia</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Ciencias y Matematicas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Ciencias Informaticas</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Deporte</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Infantiles</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Musica</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Romance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                100+vendidos
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca por libro, autor .."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//export default NavScrollExample;


function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/mapaenlacabeza.png"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/neurociencialibro.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/noserprincesa.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/donquijotedelamancha.png"
          alt="Second slide"
        />

      </Carousel.Item>

    </Carousel>
  );
}





//export { DarkVariantExample};

