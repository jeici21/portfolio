import { useState } from "react"
import styled from "styled-components"

const Span = styled.span`
    &:hover {
        color: silver;
    }
`

const Navbar = ({ scroll }: { scroll: string[] }) => {
    const [active, setActive] = useState(0)

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
                        <li className="nav-item ps-5">
                            <a className={`nav-link text-light ${active === 0 && 'fw-bold'}`}
                                onClick={() => setActive(0)} href={`#${scroll[0]}`}>
                                <Span>Sobre mí</Span>
                            </a>
                        </li>
                        <li className="nav-item ps-5">
                            <a className={`nav-link text-light ${active === 1 && 'fw-bold'}`}
                                onClick={() => setActive(1)} href={`#${scroll[1]}`}>
                                <Span>Formación y experiencia</Span>
                            </a>
                        </li>
                        <li className="nav-item ps-5">
                            <a className={`nav-link text-light ${active === 2 && 'fw-bold'}`}
                                onClick={() => setActive(2)} href={`#${scroll[2]}`}>
                                <Span>Aptitudes</Span>
                            </a>
                        </li>
                        <li className="nav-item ps-5">
                            <a className={`nav-link text-light ${active === 3 && 'fw-bold'}`}
                                onClick={() => setActive(3)} href={`#${scroll[3]}`}>
                                <Span>Proyectos</Span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar