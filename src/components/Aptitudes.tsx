import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { FadeInDiv } from "../utils/styledUtils"
import { aptitudes } from "../data/aptitudes"

const ProgressBarDiv = styled.div<{ width: number }>`
    width: ${props => props.width}%;
`

interface AptitudesProps { darkMode: boolean }

const Aptitudes = ({ darkMode }: AptitudesProps) => {
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
        <FadeInDiv visibility={String(visible)} id="aptitudes" ref={domRef}
            className={`container pt-5 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <h2 className="fst-italic text-primary text-center">Aptitudes</h2>
            <p className="text-primary text-center">LO QUE PUEDO APORTAR</p>
            <table className={`table table-borderless ${darkMode && 'table-dark'}`}>
                <tbody>
                    {aptitudes.map((aptitud, index) => (
                        <tr key={index}>
                            <td className="col-5 col-md-3">
                                <img src={aptitud.icono} alt="Icono" width={30} height={30} /> {aptitud.nombre}
                            </td>
                            <td className="col">
                                <div className="progress" role="progressbar" aria-label={aptitud.nombre}
                                    aria-valuenow={aptitud.valor} aria-valuemin={0} aria-valuemax={100}>
                                    <ProgressBarDiv width={aptitud.valor} className='progress-bar progress-bar-striped progress-bar-animated' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </FadeInDiv>
    )
}

export default Aptitudes