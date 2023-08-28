import { useEffect, useState } from "react"
import Aptitudes from "./components/Aptitudes"
import Footer from "./components/Footer"
import FormaciónYExp from "./components/FormaciónYExp"
import Navbar from "./components/Navbar"
import Portada from "./components/Portada"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/Sobremi"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener('change', e => setDarkMode(e.matches));
    return () => darkModeMediaQuery.removeEventListener('change', e => setDarkMode(e.matches));
  }, []);

  return (
    <>
      <Navbar />
      <Portada />
      <SobreMi />
      <FormaciónYExp />
      <Aptitudes darkMode={darkMode} />
      <Proyectos darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  )
}

export default App