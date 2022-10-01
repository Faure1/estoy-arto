import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Image } from 'react-bootstrap';
import Swal from 'sweetalert2'

export const NavBar = () => {
  const Aviso = () => {
    Swal.fire({
      icon: "warning",
      title: "Uuups",
      text: "Pagina en contrucción",
    });
  }


  return (

    <Navbar key={false} expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand className='d-flex align-items-center' id='titutlo-nav' href="#">
          <Image
            alt='Logo'
            src='/assets/logo.png'
            width={80}
            height={80}
            layout='responsive'
          ></Image>
          <h4 className="letra-nav">Zondar</h4>
        </Navbar.Brand>
        <Navbar.Toggle id='boton-nav' aria-controls={`offcanvasNavbar-expand-false`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='d-flex align-items-center' id={`offcanvasNavbarLabel-expand-false`}>
              <Image
                alt='Logo'
                src='/assets/logo.png'
                width={80}
                height={80}
                layout='responsive'
              ></Image>
              <h4 className="letra-nav ">Zondar</h4>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={Aviso} className='letra-nav text-white' href="#action1">SOBRE NOSOTROS</Nav.Link>
              <Nav.Link onClick={Aviso} className='letra-nav text-white' href="#action2">GALERÍA</Nav.Link>
              <Nav.Link onClick={Aviso} className='letra-nav text-white' href="#action2">CONTÁCTANOS</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>


  );
}

export default NavBar;