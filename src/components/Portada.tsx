import styled from 'styled-components'
import fondo from '../assets/fondo.jpg'
import yo from '../assets/yo.jpeg'
import CV from '/Jorge_Castro_Vargas.pdf'

const Div = styled.div`
    background: linear-gradient(rgba(1, 33, 82, 0.5), rgba(1, 33, 82, 0.5)), url(${fondo}) fixed;
    background-size: auto 125%;
`;

const H1 = styled.h1`
    font-size: 5rem;
`

const Portada = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Div className='col-md-9 text-white d-flex flex-column align-items-center justify-content-end position-relative pt-5 pt-md-0'>
                    <div className='z-1 position-relative'>
                        <p className='fs-5'>HOLA, SOY</p>
                        <H1 className='fw-bold'>Jorge Castro</H1>
                        <h5 className='fst-italic'>Ingeniero en Sistemas Computacionales</h5>
                    </div>
                </Div>
                <div className="col-md-3 text-bg-primary text-center pt-5 pt-md-0">
                    <img src={yo} alt="Yo" width="150" height='150' className='rounded-circle' />
                    <h1 className='fw-bold pt-5'>Jorge Castro</h1>
                    <p className='py-4'>Ingeniero en Sistemas Computacionales. <br />Universidad Estatal de Milagro</p>
                    <a href="mailto:david92_jc@yahoo.es" className='link-light link-underline-opacity-0 link-underline-opacity-100-hover'>
                        david92_jc@yahoo.es
                    </a>
                    <p>Tel: +593997543298</p>
                    <div className='row px-5 fs-5'>
                        <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank'
                            rel="noopener noreferrer" className='col bi bi-linkedin text-white' title="LinkedIn" />
                        <a href="https://www.facebook.com/jeici21/" target='_blank' title="Facebook"
                            rel="noopener noreferrer" className='col bi bi-facebook text-white' />
                        <a href="https://twitter.com/cijei21" target='_blank' title="Twitter"
                            rel="noopener noreferrer" className='col bi bi-twitter text-white' />
                        <a href="https://github.com/jeici21" target='_blank' title="GitHub"
                            rel="noopener noreferrer" className='col bi bi-github text-white' />
                    </div>
                    <button onClick={() => window.open(CV, '_blank')}
                        className='btn btn-light btn-lg my-5 rounded-0' aria-label="Descargar CV">
                        <i className="bi bi-download" /> Descargar CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Portada