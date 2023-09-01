import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { FadeInDiv } from "../utils/styledUtils"

const ProgressBarDiv = styled.div<{ width: number }>`
    width: ${props => props.width}%;
`

interface AptitudesProps { darkMode: boolean }

const Aptitudes = ({ darkMode }: AptitudesProps) => {
    const [visible, setVisible] = useState(true)
    const domRef = useRef<HTMLDivElement>(null)

    const aptitudes = [
        { icono: "https://img.icons8.com/?size=1x&id=20909&format=png", nombre: 'HTML', valor: 90 },
        { icono: "https://img.icons8.com/?size=1x&id=21278&format=png", nombre: 'CSS', valor: 90 },
        { icono: "https://img.icons8.com/?size=1x&id=108784&format=png", nombre: 'Javascript', valor: 90 },
        { icono: "https://img.icons8.com/?size=1x&id=uJM6fQYqDaZK&format=png", nombre: 'Typescript', valor: 80 },
        { icono: "https://img.icons8.com/?size=1x&id=123603&format=png", nombre: 'React', valor: 80 },
        { icono: "https://img.icons8.com/?size=1x&id=hsPbhkOH4FMe&format=png", nombre: 'Nodejs', valor: 75 },
        { icono: "https://img.icons8.com/?size=1x&id=kg46nzoJrmTR&format=png", nombre: 'Express', valor: 75 },
        { icono: "https://img.icons8.com/?size=512&id=HKNzD81eiiSc&format=png", nombre: 'jQuery', valor: 70 },
        { icono: "https://img.icons8.com/?size=512&id=84710&format=png", nombre: 'Bootstrap', valor: 90 },
        { icono: "https://img.icons8.com/?size=512&id=4PiNHtUJVbLs&format=png", nombre: 'Tailwind', valor: 75 },
    ]

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