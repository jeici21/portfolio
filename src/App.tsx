import Aptitudes from "./components/Aptitudes"
import Footer from "./components/Footer"
import FormaciónYExp from "./components/FormaciónYExp"
import Navbar from "./components/Navbar"
import Portada from "./components/Portada"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/Sobremi"

function App() {
  return (
    <>
      <Navbar />
      <Portada />
      <SobreMi />
      <FormaciónYExp />
      <Aptitudes />
      <Proyectos />
      <Footer />
    </>
  )
}

export default App