import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Musicas } from "./pages/Musicas"
import { Cadastro } from "./pages/Cadastro"
import { Navbar } from "./pages/Navbar"

function App() {
  return (
    <>

    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/musicas" element={<Musicas/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>

    <footer className="page-footer brown darken-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="amber-text">Sobre nós</h5>
            <p className="amber-text text-darken-2">
              Somos uma pequena equipe de estudantes tentando melhorar a vida das pessoas.
              Seu suporte nos ajuda a alcançar nossos objetivos e providenciar os melhores produtos para você.
            </p>
          </div>
          <div className="col l3 s12 offset-l3">
            <h5 className="amber-text">Contate a gente!</h5>
            <ul>
              <li><a className="amber-text text-darken-2" href="https://github.com/GuiRojas">GitHub</a></li>
              <li><a className="amber-text text-darken-2" href="https://github.com/GuiRojas">Twitter</a></li>
              <li><a className="amber-text text-darken-2" href="https://github.com/GuiRojas">Email</a></li>
              <li><a className="amber-text text-darken-2" href="https://github.com/GuiRojas">telefone</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        Feito por <a className="amber-text text-lighten-3" href="https://github.com/GuiRojas">Guilherme Rojas</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App;
