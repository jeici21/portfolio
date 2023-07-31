const Aptitudes = ({ scroll }: { scroll: string }) => {
    return (
        <div data-bs-spy="scroll" data-bs-target="navbar" data-bs-smooth-scroll="true">
            <div id={scroll}>Aptitudes</div>
        </div>
    )
}

export default Aptitudes