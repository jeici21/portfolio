import { styled } from "styled-components"

const Div = styled.div<{ width: number }>`
    width: ${props => props.width}%;
`

const Aptitudes = () => {
    const aptitudes = [
        { icono: "https://img.icons8.com/?size=1x&id=20909&format=png", nombre: 'HTML', valor: 90 },
        { icono: "https://img.icons8.com/?size=1x&id=21278&format=png", nombre: 'CSS', valor: 90 },
        { icono: "https://img.icons8.com/?size=1x&id=108784&format=png", nombre: 'Javascript', valor: 90 },
        { icono: "https://img.icons8.com/?size=1x&id=uJM6fQYqDaZK&format=png", nombre: 'Typescript', valor: 80 },
        { icono: "https://img.icons8.com/?size=1x&id=123603&format=png", nombre: 'React', valor: 80 },
        { icono: "https://img.icons8.com/?size=1x&id=hsPbhkOH4FMe&format=png", nombre: 'Nodejs', valor: 75 },
        { icono: "https://img.icons8.com/?size=1x&id=kg46nzoJrmTR&format=png", nombre: 'Express', valor: 75 },
        { icono: "https://img.icons8.com/?size=1x&id=rY6agKizO9eb&format=png", nombre: 'Vue', valor: 50 },
    ]

    return (
        <div id="aptitudes" className="container pt-5">
            <h2 className="fst-italic text-primary text-center">Aptitudes</h2>
            <p className="text-primary text-center">LO QUE PUEDO APORTAR</p>
            <table className="table table-borderless">
                <tbody>
                    {aptitudes.map((aptitud, index) => (
                        <tr key={index}>
                            <td className="col-4">
                                <img src={aptitud.icono} alt="Icono" width="30" height="30" /> {aptitud.nombre}
                            </td>
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