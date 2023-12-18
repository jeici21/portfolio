import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Stack from "react-bootstrap/Stack"

interface FooterProps { darkMode: boolean }

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <>
      <div className="bg-primary bg-opacity-10 py-5">
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <h2 className="fst-italic text-primary">Mis redes sociales</h2>
              <Stack direction="horizontal" gap={4} className='justify-content-center fs-5 pt-5'>
                <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank'
                  rel="noopener noreferrer" title="LinkedIn"><i className='bi bi-linkedin' /></a>
                <a href="https://www.facebook.com/jeici21/" target='_blank'
                  rel="noopener noreferrer" title="Facebook"><i className='bi bi-facebook' /></a>
                <a href="https://twitter.com/cijei21" target='_blank'
                  rel="noopener noreferrer" title="X"><i className='bi bi-twitter-x' /></a>
                <a href="https://github.com/jeici21" target='_blank'
                  rel="noopener noreferrer" title="GitHub"><i className='bi bi-github' /></a>
              </Stack>
            </Col>
            <Col md={6} className="text-center pt-5 pt-md-0">
              <a className={`${darkMode ? 'link-light' : 'link-dark'} link-underline-opacity-0 link-underline-opacity-100-hover`}
                href="mailto:david92_jc@yahoo.es">david92_jc@yahoo.es</a>
              <p>Tel: +593997543298</p>
              <Row className='justify-content-around align-items-center pt-5'>
                <Col xs='auto'>
                  <Button variant="primary" size="lg" aria-label="Descargar CV" className='rounded-0'
                    href="https://1drv.ms/b/s!AmoVp6TBUcPb2GLIuS1R0-TOq4d7?e=3BST4b" target="_blank"
                    rel="noopener noreferrer"><i className="bi bi-download" /> Descargar CV</Button>
                </Col>
                <Col xs='auto'>
                  <Button variant="outline-primary" onClick={() => window.scrollTo(0, 0)} title='Volver al Inicio'
                    className='border-2 rounded-circle'><i className='bi bi-chevron-up' /></Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="bg-primary text-white fst-italic ps-5 py-3">
        © {new Date().getFullYear()} Diseñado por Jorge Castro Vargas.
      </footer>
    </>
  )
}

export default Footer