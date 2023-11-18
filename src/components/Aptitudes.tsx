import { useEffect, useRef, useState } from "react"
import { FadeInDiv } from "../utils/styledUtils"
import { aptitudes } from "../data/aptitudes"
import styled from "styled-components"

const Img = styled.img`
  transition: .2s;

  &:hover {
    transform: scale(1.1);
  }
`

interface AptitudesProps { darkMode: boolean }

const Aptitudes = ({ darkMode }: AptitudesProps) => {
  const [visible, setVisible] = useState(true)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current!);
    return () => observer.unobserve(domRef.current!);
  }, [])

  return (
    <FadeInDiv visibility={String(visible)} id="aptitudes" ref={domRef}
      className={`container pt-5 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <h2 className="fst-italic text-primary text-center">Aptitudes</h2>
      <p className="text-primary text-center">LO QUE PUEDO APORTAR</p>
      <div className="row justify-content-center">
        {aptitudes.map((aptitud, index) => (
          <div className="col-sm-6 col-md-4 col-lg-2 text-center" key={index}>
            <div className={`card ${darkMode && 'text-bg-dark border-0'}`}>
              <Img src={aptitud.icono} alt="Ícono" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title fw-bold">{aptitud.nombre}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FadeInDiv>
  )
}

export default Aptitudes