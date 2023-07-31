import Aptitudes from "./components/Aptitudes"
import FormaciónYExp from "./components/FormaciónYExp"
import Navbar from "./components/Navbar"
import Portada from "./components/Portada"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/Sobremi"

function App() {
  const scroll = ["sobre-mi", "formacion-y-experiencia", "aptitudes", "proyectos"]

  return (
    <>
      <Navbar scroll={scroll} />
      <Portada />
      <SobreMi scroll={scroll[0]} />
      <FormaciónYExp scroll={scroll[1]} />
      <Aptitudes scroll={scroll[2]} />
      <Proyectos scroll={scroll[3]} />
    </>
  )
}

export default App