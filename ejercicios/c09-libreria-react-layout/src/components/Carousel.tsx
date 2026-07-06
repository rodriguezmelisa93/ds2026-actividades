import { Carousel } from "react-bootstrap";


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
  
  
  
  
  
  export default DarkVariantExample;
  
  