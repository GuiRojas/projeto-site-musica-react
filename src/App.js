import { Route, Routes } from "react-router-dom"
import { MissingPage } from './pages/MissingPage';
import { Home } from "./pages/Home"
import { Musicas } from "./pages/Musicas"
import { Album } from "./pages/Album"
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
      <Route path="/musicas/:id" element={<Album/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="*" element={<MissingPage/>} />
    </Routes>

    <Footer/>
    
    </>
  )
}

export default App;
