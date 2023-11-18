import { useEffect, useRef, useState } from "react";
import { FadeInDiv } from "../utils/styledUtils";
import { proyectos } from "../data/proyectos";

interface ProyectosProps { darkMode: boolean }

const Proyectos = ({ darkMode }: ProyectosProps) => {
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
    <FadeInDiv visibility={String(visible)} id="proyectos" ref={domRef}
      className={`container text-center py-5 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <h2 className="fst-italic text-primary">Proyectos</h2>
      <p className="text-primary">MIS TRABAJOS HASTA EL MOMENTO</p>
      <div className="row row-gap-2 justify-content-center">
        {proyectos.map((proyecto, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className={`card ${darkMode && 'text-bg-dark border-light'}`}>
              <img src={proyecto.img} className="card-img-top" alt="K-Market E-commerce" height={180} />
              <div className="card-body">
                <p className="card-title fw-bold">{proyecto.titulo}</p>
                <p className="card-text">{proyecto.descripcion}</p>
                {proyecto.repo && <a href={proyecto.repo} target="_blank" className="btn btn-success mx-1">
                  Repositorio {proyecto.repo_2 && '1'}</a>}
                {proyecto.repo_2 && <a href={proyecto.repo_2} target="_blank" className="btn btn-success mx-1">
                  Repositorio 2</a>}
                <a href={proyecto.link} target="_blank" className={`btn btn-danger ${proyecto.repo_2 ? 'm-1' : 'mx-1'}`}>
                  Sitio Web</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FadeInDiv>
  )
}

export default Proyectos