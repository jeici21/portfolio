import { styled } from "styled-components"

const Img = styled.img`
    height: 180px;
`

const Proyectos = () => {
    const proyectos = [{
        img: "https://raw.githubusercontent.com/jeici21/proyecto-final/ProductPage/src/KMarket.png",
        titulo: 'KMarket Ecommerce',
        descripcion: 'Un sitio web para un supermercado con funciones de agregar, modificar y eliminar productos junto a sus respectivas categorías.',
        repo: 'https://github.com/jeici21/proyecto-final',
        link: 'https://k-market-ten.vercel.app/'
    }, {
        img: "https://user-images.githubusercontent.com/99937413/212702392-a265b933-c923-4595-b8bc-fc3770f5ed9e.png",
        titulo: 'Kruger Space',
        descripcion: 'El universo es enorme y probablemente infinito, con nuestro website podrás aprender un poco más sobre él.',
        repo: 'https://github.com/DylanVallejo/kruger-grupal-project',
        link: 'https://kruger-grupal-project.vercel.app/'
    }]

    return (
        <div id="proyectos" className="container text-center pt-5">
            <h2 className="fst-italic text-primary">Mis proyectos</h2>
            <p className="text-primary">MIS TRABAJOS HASTA EL MOMENTO</p>
            <div className="row row-cols-3">
                {proyectos.map((proyecto, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <Img src={proyecto.img} className="card-img-top" alt="K-Market E-commerce" />
                            <div className="card-body">
                                <h5 className="card-title">{proyecto.titulo}</h5>
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
        </div>
    )
}

export default Proyectos