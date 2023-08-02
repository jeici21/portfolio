import { styled } from "styled-components"

const Div = styled.div<{ width: number }>`
    width: ${props => props.width}%;
`

const Aptitudes = () => {
    const aptitudes = [
        { nombre: 'Análisis de datos', valor: 50 },
        { nombre: 'Redacción de contenidos', valor: 75 },
        { nombre: 'HTML y CSS', valor: 90 },
        { nombre: 'Javascript', valor: 90 },
        { nombre: 'Typescript', valor: 80 },
        { nombre: 'React', valor: 80 },
        { nombre: 'Nodejs', valor: 75 },
        { nombre: 'Vue', valor: 50 },
    ]

    return (
        <div id="aptitudes" className="container pt-5">
            <h2 className="fst-italic text-primary">Aptitudes</h2>
            <p className="text-primary">LO QUE PUEDO APORTAR</p>
            <table className="table table-borderless">
                <tbody>
                    {aptitudes.map((aptitud, index) => (
                        <tr key={index}>
                            <td className="col-4">{aptitud.nombre}</td>
                            <td className="col">
                                <div className="progress" role="progressbar" aria-label={aptitud.nombre}
                                    aria-valuenow={aptitud.valor} aria-valuemin={0} aria-valuemax={100}>
                                    <Div width={aptitud.valor} className='progress-bar progress-bar-striped progress-bar-animated' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Aptitudes