import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"; 


const Header = () =>{
    return (
        <Navbar bg="dark" variant='dark'>
          <Container>
            <Link to="/tiendaDiscosDos/" className='navbar-brand'>Tienda de Discos</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link to="/tiendaDiscosDos/address" className='nav-link'>Dirección</Link>
                <Link to="/tiendaDiscosDos/contact" className='nav-link'>Contacto</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;