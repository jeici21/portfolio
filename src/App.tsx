import Aptitudes from "./components/Aptitudes"
import FormaciónYExp from "./components/FormaciónYExp"
import Navbar from "./components/Navbar"
import Portada from "./components/Portada"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/Sobremi"

function App() {
  const navbarId = "navbar"
  const scroll = ["sobre-mi", "formacion-y-experiencia", "aptitudes", "proyectos"]

  return (
    <>
      <Navbar id={navbarId} scroll={scroll} />
      <Portada />
      <SobreMi id={navbarId} scroll={scroll[0]} />
      <FormaciónYExp id={navbarId} scroll={scroll[1]} />
      <Aptitudes id={navbarId} scroll={scroll[2]} />
      <Proyectos id={navbarId} scroll={scroll[3]} />
    </>
  )
}

export default App