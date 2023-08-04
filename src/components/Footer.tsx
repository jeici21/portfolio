import CV from '/Jorge_Castro_Vargas.pdf'

const Footer = () => {
    return (
        <>
            <div className="bg-primary bg-opacity-10 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="fst-italic text-primary">Mis redes sociales</h2>
                            <div className='d-flex flex-row column-gap-4 fs-5 pt-5'>
                                <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank'
                                    rel="noopener noreferrer" className='bi bi-linkedin text-black' />
                                <a href="https://www.facebook.com/jeici21/" target='_blank'
                                    rel="noopener noreferrer" className='bi bi-facebook text-black' />
                                <a href="https://twitter.com/cijei21" target='_blank'
                                    rel="noopener noreferrer" className='bi bi-twitter text-black' />
                                <a href="https://github.com/jeici21" target='_blank'
                                    rel="noopener noreferrer" className='bi bi-github text-black' />
                            </div>
                        </div>
                        <div className="col">
                            <a href="mailto:david92_jc@yahoo.es" className='link-dark link-underline-opacity-0 link-underline-opacity-100-hover'>
                                david92_jc@yahoo.es
                            </a>
                            <p>Tel: +593997543298</p>
                            <div className='row justify-content-around align-items-center pt-5'>
                                <div className='col-auto'>
                                    <button onClick={() => window.open(CV, '_blank')} aria-label="Descargar CV"
                                        className='btn btn-primary btn-lg rounded-0'>
                                        <i className="bi bi-download" /> Descargar CV
                                    </button>
                                </div>
                                <div className='col-auto'>
                                    <button onClick={() => window.scrollTo(0, 0)}
                                        className='btn btn-outline-primary border-2 rounded-circle'>
                                        <i className='bi bi-chevron-up' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-primary text-white fst-italic ps-5 py-4">
                © {new Date().getFullYear()} Diseñado por Jorge Castro Vargas.
            </div>
        </>
    )
}

export default Footer