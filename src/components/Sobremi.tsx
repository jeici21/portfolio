const SobreMi = ({ scroll }: { scroll: string }) => {
    return (
        <div className="bg-primary bg-opacity-10" data-bs-spy="scroll" data-bs-target="navbar">
            <div className="container" id={scroll}>
                <h2 className="fst-italic text-primary">Sobre mí</h2>
                <p className="text-primary">MI PERFIL</p>
                <h4>Me apasionan los negocios, las redes sociales y el marketing, y poseo las aptitudes y
                    experiencia profesional necesarias para entrar en dicho mundo. Como profesional optimista,
                    motivada y con excelentes habilidades comunicativas y de trabajo en equipo, espero un
                    futuro brillante en esta industria. Explora mi sitio para ver lo que puedo aportar.</h4>
            </div>
        </div>
    )
}

export default SobreMi