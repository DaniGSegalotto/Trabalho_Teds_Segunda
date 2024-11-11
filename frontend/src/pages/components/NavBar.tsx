import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} passHref href="/">
              Home
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} passHref href="/cachorros">
              Cachorro do Dia
            </Nav.Link>
            <Nav.Link as={Link} passHref href="/sobre">
              Sobre
            </Nav.Link>
            <Nav.Link as={Link} passHref href="/usuarios">
              Usuarios
            </Nav.Link>
            <Nav.Link as={Link} passHref href="/contador">
              Contador
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
