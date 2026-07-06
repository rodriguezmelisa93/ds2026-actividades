import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';



function NavBar() {

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
  export default NavBar;