const Proyectos = () => {
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

    return (
        <div id="proyectos" className="container text-center py-5">
            <h2 className="fst-italic text-primary">Proyectos</h2>
            <p className="text-primary">MIS TRABAJOS HASTA EL MOMENTO</p>
            <div className="row row-gap-2">
                {proyectos.map((proyecto, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <div className={`card ${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-bg-dark border-light' : 'text-bg-light'}`}>
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
        </div>
    )
}

export default Proyectos