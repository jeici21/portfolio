import Container from "react-bootstrap/Container";
import styles from '../styles/Portada.module.css'
import yo from '../assets/yo.jpeg'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Portada = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={9} className={`text-light d-flex flex-column align-items-center justify-content-end pt-5 pt-md-0 ${styles.portadaDiv}`}>
          <div className='z-1 position-relative'>
            <p className='fs-5'>HOLA, SOY</p>
            <h1 className={`fw-bold ${styles.nombreH1}`}>Jorge Castro</h1>
            <h5 className='fst-italic'>Ingeniero en Sistemas Computacionales</h5>
          </div>
        </Col>
        <Col md={3} className='text-bg-primary text-center pt-5 pt-md-0'>
          <Image src={yo} alt="Yo" width="150" height='150' roundedCircle />
          <h1 className='fw-bold pt-5'>Jorge Castro</h1>
          <p className='py-4'>Ingeniero en Sistemas Computacionales.<br />Universidad Estatal de Milagro</p>
          <a href="mailto:david92_jc@yahoo.es" className='link-light link-underline-opacity-0 link-underline-opacity-100-hover'>
            david92_jc@yahoo.es
          </a>
          <p>Tel: +593997543298</p>
          <Stack direction="horizontal" gap={4} className='justify-content-center fs-5'>
            <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank'
              rel="noopener noreferrer" title="LinkedIn"><i className='bi bi-linkedin text-light' /></a>
            <a href="https://www.facebook.com/jeici21/" target='_blank' title="Facebook"
              rel="noopener noreferrer"><i className='bi bi-facebook text-light' /></a>
            <a href="https://twitter.com/cijei21" target='_blank' title="X"
              rel="noopener noreferrer"><i className='bi bi-twitter-x text-light' /></a>
            <a href="https://github.com/jeici21" target='_blank' title="GitHub"
              rel="noopener noreferrer"><i className='bi bi-github text-light' /></a>
          </Stack>
          <Button variant='light' size='lg' className='my-5 rounded-0'
            onClick={() => window.open("https://1drv.ms/b/s!AmoVp6TBUcPb2GLIuS1R0-TOq4d7?e=3BST4b", '_blank')}>
            <i className="bi bi-download" /> Descargar CV
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Portada