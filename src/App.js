import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Musicas } from "./pages/Musicas"
import { Cadastro } from "./pages/Cadastro"
import { Navbar } from "./pages/Navbar"
import { Footer } from "./pages/Footer"

function App() {
  return (
    <>

    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/musicas" element={<Musicas/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>

    <Footer/>
    
    </>
  )
}

export default App;
