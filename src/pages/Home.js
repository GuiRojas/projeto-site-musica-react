import { Link } from "react-router-dom"
import Parallax from './Parallax'

export function Home(){
  return (
    <>
    <div id="index-banner" className="parallax-container">
      <div className="section">
        <div className="container">
          <h1 className="header center amber-text text-darken-1">Site de música</h1>
          <div className="row center">
            <h5 className="header col s12 light amber-text text-darken-1">Um hub para compartilhar música</h5>
          </div>
          <div className="row center">
            <Link
              to="musicas"
              className="btn-large amber darken-1"
            >
              Ver nossa Biblioteca
            </Link>
          </div>  
        </div>
      </div>

      <Parallax img_path={process.env.PUBLIC_URL + '/background1.jpg'} />

    </div>

    <div className="brown lighten-5">
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">volume_up</i></h2>
                <h5 className="center">Curta as melhores músicas</h5>

                <p className="light">Navegue pela nossa coleção para conhecer novos artistas com nosso sistema de recomendação baseado nos seus interesses</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">video_library</i></h2>
                <h5 className="center">Crie a sua playlist</h5>
                <p className="light">Selecione suas músicas favoritas para criar playlists personalizadas e ouvir onde quiser</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">recent_actors</i></h2>
                <h5 className="center">Compartilhe com seus amigos</h5>
                <p className="light">Se conecte com seus amigos para compartilhar músicas e playlists e receba recomendações automáticas baseado nos interesses comuns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="parallax-container valign-wrapper">
      <div className="container">
        <div className="row">
          <h5 className="center-align light">Feito por fanáticos por música, para fanáticos por música</h5>
        </div>
      </div>
      <Parallax img_path={process.env.PUBLIC_URL + '/background2.jpg'} />
    </div>

    <div className="brown lighten-5">
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h4>Aproveite música como nunca antes</h4>
              <p className="left-align light">
                Nossa missão é providenciar a melhor experiência virtual possível para fãs de música ao redor do mundo.
                Criando uma plataforma conectada, queremos ser o hub #1 para ouvir, descobrir, e compartilhar música.
                Acreditamos que a música conecta as pessoas, e queremos ajudar fãs a se relacionarem com suas maiores paixões.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="parallax-container valign-wrapper">
      <Parallax img_path={process.env.PUBLIC_URL + '/background3.jpg'} />
    </div>
    </>
  )
}