import { useState } from "react"
import styled from "styled-components"

const Span = styled.span`
    &:hover {
        color: silver;
    }
`

const Navbar = () => {
    const [active, setActive] = useState(0)

    const links = [
        { text: "Sobre mí", href: "#sobre-mi" },
        { text: "Formación y experiencia", href: "#formacion-y-experiencia" },
        { text: "Aptitudes", href: "#aptitudes" },
        { text: "Proyectos", href: "#proyectos" },
    ];

    return (
        <nav className="navbar navbar-expand-sm bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list text-light" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fst-italic">
                        {links.map((link, index) => (
                            <li className="nav-item ps-5" key={index}>
                                <a className={`nav-link text-light ${active === index && 'fw-bold'}`}
                                    onClick={() => setActive(index)} href={link.href}>
                                    <Span>{link.text}</Span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar