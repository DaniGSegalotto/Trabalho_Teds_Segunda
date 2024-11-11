import Link from "next/link"
import { Container, Nav, Navbar } from "react-bootstrap"

const FooterBar = () => {

    return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} passHref href="/health">
              HealthCheck
            </Nav.Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default FooterBar