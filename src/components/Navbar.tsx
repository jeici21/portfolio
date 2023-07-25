import { useState } from "react"
import styled from "styled-components"

const A = styled.a`
    &:hover {
        color: silver !important;
    }
`

const Navbar = () => {
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <A className={`nav-link text-light ${active === 0 && 'fw-bold'}`}
                                onClick={() => setActive(0)} href="#">Sobre mí</A>
                        </li>
                        <li className="nav-item">
                            <A className={`nav-link text-light ${active === 1 && 'fw-bold'}`}
                                onClick={() => setActive(1)} href="#">Formación y experiencia</A>
                        </li>
                        <li className="nav-item">
                            <A className={`nav-link text-light ${active === 2 && 'fw-bold'}`}
                                onClick={() => setActive(2)} href="#">Aptitudes</A>
                        </li>
                        <li className="nav-item">
                            <A className={`nav-link text-light ${active === 3 && 'fw-bold'}`}
                                onClick={() => setActive(3)} href="#">Proyectos</A>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar