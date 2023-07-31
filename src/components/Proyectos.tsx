const Proyectos = ({ scroll }: { scroll: string }) => {
    return (
        <div data-bs-spy="scroll" data-bs-target="navbar" data-bs-smooth-scroll="true">
            <div id={scroll}>Proyectos</div>
        </div>
    )
}

export default Proyectos