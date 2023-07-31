const FormaciónYExp = ({ scroll }: { scroll: string }) => {
    return (
        <div data-bs-spy="scroll" data-bs-target='navbar' data-bs-smooth-scroll="true">
            <div id={scroll}>FormaciónYExp</div>
        </div>
    )
}

export default FormaciónYExp