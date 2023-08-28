import { useEffect, useRef, useState } from "react"
import { styled } from "styled-components"

const Div = styled.div<{ visibility: string }>`
    transform: ${props => props.visibility === 'true' ? 'none' : 'translateY(10vh)'};
    transition: opacity 0.6s ease-out, transform 1.2s ease-out;
    will-change: opacity, visibility;
`

const FormaciónYExp = () => {
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
        <div id="formacion-y-experiencia" className="container pt-5">
            <Div visibility={String(visible)} ref={domRef}
                className={`row ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="col-md-6">
                    <h2 className="fst-italic text-primary text-center text-md-start">Formación</h2>
                    <p className="text-primary text-center text-md-start">MIS CONOCIMIENTOS</p>
                    <p className="pt-5 fw-bold">2010 - 2016</p>
                    <p>Graduado con el título de Ingeniero en Sistemas Computacionales</p>
                    <p>Universidad Estatal de Milagro</p>
                </div>
                <div className="col-md-6 pt-5 pt-md-0">
                    <h2 className="fst-italic text-primary text-center text-md-start">Experiencia</h2>
                    <p className="text-primary text-center text-md-start">TRAYECTORIA PROFESIONAL</p>
                    <p className="pt-5 fw-bold">Junio 2023 - Actualidad</p>
                    <p>EICHE, Web Developer Vue-React</p>
                    <p className="pt-5 fw-bold">Noviembre 2022 - Febrero 2023</p>
                    <p>Kruger Corporation, Ex participante de Kruger Star</p>
                    <p className="pt-5 fw-bold">Septiembre 2020 - Noviembre 2020</p>
                    <p>GYSECOMP, Web Developer</p>
                </div>
            </Div>
        </div>
    )
}

export default FormaciónYExp