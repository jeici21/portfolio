import styled from 'styled-components'
import fondo from '../assets/fondo.jpg'

const Div = styled.div`
    background: url(${fondo});
`

const Portada = () => {
    return (
        <div className="row">
            <Div className="col-9">
                <p>HOLA, SOY</p>
                <h1>Jorge Castro</h1>
                <p>Ingeniero en Sistemas Computacionales</p>
            </Div>
        </div>
    )
}

export default Portada