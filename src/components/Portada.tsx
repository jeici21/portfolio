import styled from 'styled-components'
import fondo from '../assets/fondo.jpg'
import yo from '../assets/yo.jpeg'

const Div = styled.div`
    background: linear-gradient(rgba(1, 33, 82, 0.5), rgba(1, 33, 82, 0.5)), url(${fondo}) fixed;
`;

const Portada = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Div className='col-9 text-white d-flex flex-column align-items-center justify-content-end position-relative'>
                    <div className='z-1 position-relative'>
                        <p>HOLA, SOY</p>
                        <h1 className='fw-bold'>Jorge Castro</h1>
                        <p className='fst-italic'>Ingeniero en Sistemas Computacionales</p>
                    </div>
                </Div>
                <div className="col text-bg-primary text-center">
                    <img src={yo} alt="Yo" width="150" height='150' className='rounded-circle' />
                    <h1 className='fw-bold'>Jorge Castro</h1>
                    <p className='py-4'>Ingeniero en Sistemas Computacionales. <br/>Universidad Estatal de Milagro</p>
                    <a href="mailto:david92_jc@yahoo.es" className='link-light link-underline-opacity-0 link-underline-opacity-100-hover'>
                        david92_jc@yahoo.es
                    </a>
                    <p>Tel: +593997543298</p>
                    <div className='row px-5 fs-5'>
                        <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank' className='col bi bi-linkedin text-white' />
                        <a href="https://www.facebook.com/jeici21/" target='_blank' className='col bi bi-facebook text-white' />
                        <a href="https://twitter.com/cijei21" target='_blank' className='col bi bi-twitter text-white' />
                        <a href="https://github.com/jeici21" target='_blank' className='col bi bi-github text-white' />
                    </div>
                    <button className='btn btn-light btn-lg my-5 rounded-0'>Descargar CV</button>
                </div>
            </div>
        </div>
    )
}

export default Portada