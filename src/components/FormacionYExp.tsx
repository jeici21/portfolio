import { useEffect, useRef, useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const FormacionYExp = () => {
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
    <Container id="formacion-y-exp" className="pt-5">
      <Row ref={domRef} className={visible ? 'opacity-100 visible fadeInDiv open' : 'opacity-0 invisible fadeInDiv hidden'}>
        <Col md={6}>
          <h2 className="fst-italic text-primary text-center text-md-start">Formación</h2>
          <p className="text-primary text-center text-md-start">MIS CONOCIMIENTOS</p>
          <p className="pt-5 fw-bold">2010 - 2016</p>
          <p>Graduado con el título de Ingeniero en Sistemas Computacionales</p>
          <p>Universidad Estatal de Milagro</p>
        </Col>
        <Col md={6}>
          <h2 className="fst-italic text-primary text-center text-md-start">Experiencia</h2>
          <p className="text-primary text-center text-md-start">TRAYECTORIA PROFESIONAL</p>
          <p className="pt-5 fw-bold">Junio 2023 - Agosto 2023</p>
          <p>EICHE, Web Developer Vue-React</p>
          <p className="pt-5 fw-bold">Noviembre 2022 - Febrero 2023</p>
          <p>Kruger Corporation, Ex participante de Kruger Star</p>
          <p className="pt-5 fw-bold">Septiembre 2020 - Noviembre 2020</p>
          <p>GYSECOMP, Web Developer</p>
        </Col>
      </Row>
    </Container>
  )
}

export default FormacionYExp