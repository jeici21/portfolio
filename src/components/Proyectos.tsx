import { useEffect, useRef, useState } from "react";
import { FadeInDiv } from "../utils/styledUtils";

interface ProyectosProps { darkMode: boolean }

const Proyectos = ({ darkMode }: ProyectosProps) => {
    const [visible, setVisible] = useState(true)
    const domRef = useRef<HTMLDivElement>(null)

    const proyectos = [{
        img: "https://raw.githubusercontent.com/jeici21/proyecto-final/ProductPage/src/KMarket.png",
        titulo: 'KMarket Ecommerce',
        descripcion: 'Un sitio web de un supermercado con funciones CRUD de productos junto a sus respectivas categorías.',
        repo: 'https://github.com/jeici21/proyecto-final',
        link: 'https://k-market-ten.vercel.app/'
    }, {
        img: "https://user-images.githubusercontent.com/99937413/212702392-a265b933-c923-4595-b8bc-fc3770f5ed9e.png",
        titulo: 'Kruger Space',
        descripcion: 'El universo es enorme y probablemente infinito, con nuestro website podrás aprender un poco más sobre él.',
        repo: 'https://github.com/DylanVallejo/kruger-grupal-project',
        link: 'https://kruger-grupal-project.vercel.app/'
    }]

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current!);
        return () => observer.unobserve(domRef.current!);
    }, [])

    return (
        <FadeInDiv visibility={String(visible)} id="proyectos" ref={domRef}
            className={`container text-center py-5 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <h2 className="fst-italic text-primary">Proyectos</h2>
            <p className="text-primary">MIS TRABAJOS HASTA EL MOMENTO</p>
            <div className="row row-gap-2 justify-content-center">
                {proyectos.map((proyecto, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <div className={`card ${darkMode && 'text-bg-dark border-light'}`}>
                            <img src={proyecto.img} className="card-img-top" alt="K-Market E-commerce" height={180} />
                            <div className="card-body">
                                <p className="card-title fw-bold">{proyecto.titulo}</p>
                                <p className="card-text">{proyecto.descripcion}</p>
                                {proyecto.repo && <a href={proyecto.repo} className="btn btn-success mx-1" target="_blank">
                                    Ver repositorio
                                </a>}
                                <a href={proyecto.link} className="btn btn-danger mx-1" target="_blank">
                                    Visitar página
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </FadeInDiv>
    )
}

export default Proyectos