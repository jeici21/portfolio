const Proyectos = ({ scroll }: { scroll: string }) => {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar">
            <div id={scroll}>Proyectos</div>
        </div>
    )
}

export default Proyectos