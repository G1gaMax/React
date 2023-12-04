import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import mainLogo from "./img/trolley.png"
import { Link } from "react-router-dom";

function NavBar() {

  return (

    <Navbar bg="light" data-bs-theme="light">
      <Container >
        <Navbar.Brand as={Link} to="/home">
          <img
            src={mainLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{'    '}
          ShopSmart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">All products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jewelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/men's clothing">Men's clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/women's clothing">Women's clothing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/location">Location</Nav.Link>

          </Nav>
          <Nav.Item className="ms-auto">
            <CartWidget />
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
