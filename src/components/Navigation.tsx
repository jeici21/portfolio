import { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
  const [active, setActive] = useState(0)

  return (
    <Navbar expand="md" bg="primary" variant="dark" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-bar" className="ms-auto me-1" />
      <Navbar.Collapse id="basic-navbar-bar">
        <Nav className="me-auto fst-italic text-center">
          <Nav.Item className="ps-md-5">
            <Nav.Link href="#sobre-mi" onClick={() => setActive(0)} active={active === 0}>
              Sobre mí
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ps-md-5">
            <Nav.Link href="#formacion-y-exp" onClick={() => setActive(1)} active={active === 1}>
              Formación y experiencia
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ps-md-5">
            <Nav.Link href="#aptitudes" onClick={() => setActive(2)} active={active === 2}>
              Aptitudes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ps-md-5">
            <Nav.Link href="#proyectos" onClick={() => setActive(3)} active={active === 3}>
              Proyectos
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation