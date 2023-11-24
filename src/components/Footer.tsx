import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

interface FooterProps { darkMode: boolean }

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <>
      <div className="bg-primary bg-opacity-10 py-5">
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <h2 className="fst-italic text-primary">Mis redes sociales</h2>
              <div className='d-flex flex-row justify-content-center column-gap-4 fs-5 pt-5'>
                <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank'
                  rel="noopener noreferrer" className='bi bi-linkedin' title="LinkedIn" />
                <a href="https://www.facebook.com/jeici21/" target='_blank'
                  rel="noopener noreferrer" className='bi bi-facebook' title="Facebook" />
                <a href="https://twitter.com/cijei21" target='_blank'
                  rel="noopener noreferrer" className='bi bi-twitter' title="Twitter" />
                <a href="https://github.com/jeici21" target='_blank'
                  rel="noopener noreferrer" className='bi bi-github' title="GitHub" />
              </div>
            </Col>
            <Col md={6} className="text-center pt-5 pt-md-0">
              <a href="mailto:david92_jc@yahoo.es" className={`${darkMode ? 'link-light' : 'link-dark'} link-underline-opacity-0 link-underline-opacity-100-hover`}>
                david92_jc@yahoo.es</a>
              <p>Tel: +593997543298</p>
              <Row className='justify-content-around align-items-center pt-5'>
                <Col className='col-auto'>
                  <Button variant="primary" size="lg" aria-label="Descargar CV" className='rounded-0'
                  onClick={() => window.open("https://1drv.ms/b/s!AmoVp6TBUcPb2GLIuS1R0-TOq4d7?e=3BST4b", '_blank')}>
                    <i className="bi bi-download" /> Descargar CV
                  </Button>
                </Col>
                <Col className='col-auto'>
                  <Button variant="outline-primary" onClick={() => window.scrollTo(0, 0)} title='Volver al Inicio'
                    className='border-2 rounded-circle'>
                    <i className='bi bi-chevron-up' />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="container-fluid bg-primary text-white fst-italic ps-5 py-4">
        © {new Date().getFullYear()} Diseñado por Jorge Castro Vargas.
      </footer>
    </>
  )
}

export default Footer