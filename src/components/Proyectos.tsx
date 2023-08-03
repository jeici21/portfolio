const Proyectos = () => {
    const proyectos = [{
        img: "https://raw.githubusercontent.com/jeici21/proyecto-final/ProductPage/src/KMarket.png",
        titulo: 'KMarket Ecommerce',
        descripcion: 'Un sitio web para un supermercado con funciones de agregar, modificar y eliminar productos junto a sus respectivas categorías. También es posible revisar más detalles sobre los productos y agregarlos al carrito de compras.',
        repo: 'https://github.com/jeici21/proyecto-final',
        link: ''
    }]

    return (
        <div id="proyectos" className="container text-center pt-5">
            <h2 className="fst-italic text-primary">Mis proyectos</h2>
            <p className="text-primary">MIS TRABAJOS HASTA EL MOMENTO</p>
            <div className="row row-cols-3">
                {proyectos.map((proyecto, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <img src={proyecto.img} className="card-img-top" alt="K-Market E-commerce" />
                            <div className="card-body">
                                <h5 className="card-title">{proyecto.titulo}</h5>
                                <p className="card-text">{proyecto.descripcion}</p>
                                {proyecto.repo && <a href={proyecto.repo} className="btn btn-success mx-1" target="_blank">
                                    Ver repositorio
                                </a>}
                                {proyecto.link && <a href={proyecto.link} className="btn btn-danger mx-1" target="_blank">
                                    Visitar página
                                </a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Proyectos