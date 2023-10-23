import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import mainLogo from "./img/trolley.png"

function NavBar() {
  return (
    <Navbar  bg="light" data-bs-theme="light">
      <Container >
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Offers</Nav.Link>
            <Nav.Link href="#link">Locations</Nav.Link>
          </Nav>
          <Nav.Item className="ms-auto">
              <Nav.Link><CartWidget /></Nav.Link>
            </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
