const FormaciónYExp = ({ id, scroll }: { id: string, scroll: string }) => {
    return (
        <div data-bs-spy="scroll" data-bs-target={`#${id}`}>
            <div id={scroll}>FormaciónYExp</div>
        </div>
    )
}

export default FormaciónYExp