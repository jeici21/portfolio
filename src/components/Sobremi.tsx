import { useEffect, useRef, useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SobreMi = () => {
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
    <div className="bg-primary bg-opacity-10 pt-5" id="sobre-mi">
      <Container>
        <Row ref={domRef} className={visible ? 'opacity-100 visible fadeInDiv open' : 'opacity-0 invisible fadeInDiv hidden'}>
          <Col md={6}>
            <h2 className="fst-italic text-primary text-center text-md-start">Sobre mí</h2>
            <p className="text-primary text-center text-md-start">MI PERFIL</p>
            <p className="pt-5 fs-5 lh-lg">Me apasionan la programación y el diseño de páginas web, y
              poseo las aptitudes y experiencia profesional necesarias para entrar en dicho mundo. Como un
              profesional optimista con excelentes habilidades de trabajo en equipo, espero un futuro
              brillante en esta industria. Explora mi sitio para ver lo que puedo aportar.</p>
          </Col>
          <Col md={6} className="pt-5 pt-md-0">
            <h2 className="fst-italic text-primary text-center text-md-start">Intereses</h2>
            <p className="text-primary text-center text-md-start">EN MIS RATOS LIBRES</p>
            <Row className="row-cols-2 pt-5">
              <Col><p>🎮 Videojuegos</p></Col>
              <Col><p>💻 Programación</p></Col>
              <Col><p>📺 Series</p></Col>
              <Col><p>⚽ Fútbol</p></Col>
              <Col><p>📖 Lectura</p></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SobreMi