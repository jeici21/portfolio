import { useEffect, useRef, useState } from "react"
import { FadeInDiv } from "../utils/styledUtils"

const SobreMi = () => {
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
        <div className="bg-primary bg-opacity-10 pt-5" id="sobre-mi">
            <div className="container">
                <FadeInDiv visibility={String(visible)} ref={domRef}
                    className={`row ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="col-md-6">
                        <h2 className="fst-italic text-primary text-center text-md-start">Sobre mí</h2>
                        <p className="text-primary text-center text-md-start">MI PERFIL</p>
                        <p className="pt-5 fs-5 lh-lg">Me apasionan la programación y el diseño de páginas web, y poseo las aptitudes y
                            experiencia profesional necesarias para entrar en dicho mundo. Como un profesional
                            optimista con excelentes habilidades de trabajo en equipo, espero un futuro brillante
                            en esta industria. Explora mi sitio para ver lo que puedo aportar.</p>
                    </div>
                    <div className="col-md-6 pt-5 pt-md-0">
                        <h2 className="fst-italic text-primary text-center text-md-start">Intereses</h2>
                        <p className="text-primary text-center text-md-start">EN MIS RATOS LIBRES</p>
                        <div className="row row-cols-2 pt-5">
                            <p className="col">🎮 Videojuegos</p>
                            <p className="col">💻 Programación</p>
                            <p className="col">📺 Series</p>
                            <p className="col">⚽ Fútbol</p>
                            <p className="col">📖 Lectura</p>
                        </div>
                    </div>
                </FadeInDiv>
            </div>
        </div>
    )
}

export default SobreMi