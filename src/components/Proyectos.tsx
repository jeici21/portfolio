import { useEffect, useRef, useState } from "react";
import { proyectos } from "../data/proyectos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface ProyectosProps { darkMode: boolean }

const Proyectos = ({ darkMode }: ProyectosProps) => {
  const [visible, setVisible] = useState(true)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current!);
    return () => observer.unobserve(domRef.current!);
  }, [])

  return (
    <Container id="proyectos" ref={domRef} className={`text-center py-5 ${visible ? 'opacity-100 visible fadeInDiv open' : 'opacity-0 invisible fadeInDiv hidden'}`}>
      <h2 className="fst-italic text-primary">Proyectos</h2>
      <p className="text-primary">MIS TRABAJOS HASTA EL MOMENTO</p>
      <Row className="row-gap-2 justify-content-center">
        {proyectos.map((proyecto, index) => (
          <Col md={6} lg={4} key={index}>
            <Card bg={darkMode ? 'dark' : ''} text={darkMode ? 'light' : ''} border='secondary' className='h-100'>
              <Card.Img variant="top" src={proyecto.img} alt="K-Market E-commerce" height={180} />
              <Card.Body>
                <Card.Title className="fw-bold">{proyecto.titulo}</Card.Title>
                <Card.Text>{proyecto.descripcion}</Card.Text>
                {proyecto.repo && <Button href={proyecto.repo} variant="success" target="_blank" className="mx-1">
                  Repositorio {proyecto.repo_2 && '1'}</Button>}
                {proyecto.repo_2 && <Button href={proyecto.repo_2} variant="success" target="_blank" className="mx-1">
                  Repositorio 2</Button>}<br />
                <Button href={proyecto.link} variant="danger" target="_blank" className='mt-2'>
                  Sitio Web
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Proyectos