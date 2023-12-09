import { useEffect, useRef, useState } from "react"
import { aptitudes } from "../data/aptitudes"
import styles from '../styles/Aptitudes.module.css'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

interface AptitudesProps { darkMode: boolean }

const Aptitudes = ({ darkMode }: AptitudesProps) => {
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
    <Container id="aptitudes" ref={domRef} className={`pt-5 ${visible ? 'opacity-100 visible fadeInDiv open' : 'opacity-0 invisible fadeInDiv hidden'}`}>
      <h2 className="fst-italic text-primary text-center">Aptitudes</h2>
      <p className="text-primary text-center">LO QUE PUEDO APORTAR</p>
      <Row className="justify-content-center">
        {aptitudes.map((aptitud, index) => (
          <Col xs={6} md={4} lg={2} className="text-center" key={index}>
            <Card bg={darkMode ? 'dark' : ''} text={darkMode ? 'light' : ''} border="0">
              <Card.Img variant="top" src={aptitud.icono} alt="Ícono" className={styles.aptitudImg} />
              <Card.Body><Card.Title className="fw-bold">{aptitud.nombre}</Card.Title></Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Aptitudes