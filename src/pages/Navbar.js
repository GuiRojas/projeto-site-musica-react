import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import M from "materialize-css"

function Links() {
  return(
    <>
      <li>
        <Link
          to="musicas"
          className="amber-text text-darken-1"
        >
          <span className="logo-text amber-text text-darken-1">Nossas músicas</span>
        </Link>
      </li>
      <li>
        <Link
          to="cadastro"
          className="amber-text text-darken-1"
        >
          <span className="logo-text amber-text text-darken-1">Cadastre-se!</span>
        </Link>
      </li>
    </>
  )
}

export function Navbar(){
  useEffect(() => {
    let elements = document.querySelectorAll(".sidenav")
    M.Sidenav.init(elements, {})
  },[])

  return(
    <nav className="brown darken-1">
      <div className="nav-wrapper container">
      <Link
        to="/"
        className="brand-logo"
        id="logo-container"
      >
        <span className="logo-text amber-text text-darken-1">Site de Música</span>
      </Link>
      <ul className="right hide-on-med-and-down">
        <Links/>
      </ul>
      <ul id="nav-mobile" className="sidenav brown darken-1">
        <Links/>
      </ul>
      <a href="#!" data-target="nav-mobile" className="sidenav-trigger">
        <i className="material-icons amber-text text-darken-1">menu</i>
      </a>
      </div>
    </nav>
  )
}
