import React, { useEffect } from "react"
import M from "materialize-css"

export function Navbar(){
  useEffect(() => {
    let elements = document.querySelectorAll(".sidenav")
    M.Sidenav.init(elements, {})
  },[])

  return(
    <nav className="brown darken-1">
      <div className="nav-wrapper container">
      <a id="logo-container" href="/" className="brand-logo">
        <span className="logo-text amber-text text-darken-1">Site de Música</span>
      </a>
      <ul className="right hide-on-med-and-down">
        <li><a href="musicas" className="amber-text text-darken-1">Nossas músicas</a></li>
        <li><a href="cadastro" className="amber-text text-darken-1">Cadastre-se!</a></li>
      </ul>
      <ul id="nav-mobile" className="sidenav brown darken-1">
        <li><a href="musicas" className="amber-text text-darken-1">Nossas músicas</a></li>
        <li><a href="cadastro" className="amber-text text-darken-1">Cadastre-se!</a></li>
      </ul>
      <a href="#!" data-target="nav-mobile" className="sidenav-trigger">
        <i className="material-icons amber-text text-darken-1">menu</i>
      </a>
      </div>
    </nav>
  )
}
