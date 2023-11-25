import { useEffect, useRef, useState } from "react"
import { FadeInDiv } from "../utils/styledUtils"
import { aptitudes } from "../data/aptitudes"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const Img = styled.img`
  transition: .2s;

  &:hover {
    transform: scale(1.1);
  }
`

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
    <FadeInDiv as={Container} visibility={String(visible)} id="aptitudes" ref={domRef}
      className={`pt-5 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <h2 className="fst-italic text-primary text-center">Aptitudes</h2>
      <p className="text-primary text-center">LO QUE PUEDO APORTAR</p>
      <Row className="justify-content-center">
        {aptitudes.map((aptitud, index) => (
          <Col xs={6} md={4} lg={2} className="text-center" key={index}>
            <Card className={`border-0 ${darkMode && 'text-bg-dark'}`}>
              <Img as={Card.Img} variant="top" src={aptitud.icono} alt="Ícono" />
              <Card.Body><Card.Title className="fw-bold">{aptitud.nombre}</Card.Title></Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </FadeInDiv>
  )
}

export default Aptitudes