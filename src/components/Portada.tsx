import styled from 'styled-components'
import fondo from '../assets/fondo.jpg'
import yo from '../assets/yo.jpg'

const Div = styled.div`
    background: url(${fondo}) 100%;
`

const Portada = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Div className="col-9 text-white">
                    <p>HOLA, SOY</p>
                    <h1>Jorge Castro</h1>
                    <p>Ingeniero en Sistemas Computacionales</p>
                </Div>
                <div className="col text-bg-primary text-center">
                    <img src={yo} alt="Yo" width="150" height='150' className='rounded-circle' />
                    <h1 className='fw-bold'>Jorge Castro</h1>
                    <p className='py-4'>Ingeniero en Sistemas Computacionales. <br/>Universidad Estatal de Milagro</p>
                    <a href="mailto:david92_jc@yahoo.es" className='link-light link-underline-opacity-0 link-underline-opacity-100-hover'>
                        david92_jc@yahoo.es
                    </a>
                    <p>Tel: 914-123-456</p>
                    <div className='row px-5'>
                        <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank' className='col bi bi-linkedin text-white' />
                        <a href="https://www.facebook.com/jeici21/" target='_blank' className='col bi bi-facebook text-white' />
                        <a href="https://twitter.com/cijei21" target='_blank' className='col bi bi-twitter text-white' />
                        <a href="https://github.com/jeici21" target='_blank' className='col bi bi-github text-white' />
                    </div>
                    <button className='btn btn-light btn-lg my-5'>Descargar CV</button>
                </div>
            </div>
        </div>
    )
}

export default Portada