const Proyectos = ({ id, scroll }: { id: string, scroll: string }) => {
    return (
        <div data-bs-spy="scroll" data-bs-target={`#${id}`}>
            <div id={scroll}>Proyectos</div>
        </div>
    )
}

export default Proyectos