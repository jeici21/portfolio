const Aptitudes = ({ id, scroll }: { id: string, scroll: string }) => {
    return (
        <div data-bs-spy="scroll" data-bs-target={`#${id}`}>
            <div id={scroll}>Aptitudes</div>
        </div>
    )
}

export default Aptitudes