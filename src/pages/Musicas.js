const MusicCard = ({name, band, duration, img_path}) => {
  return(
    <div className="col s12 m6 l3">
      <div className="card brown lighten-5">
        <div className="card-image">
          <img src={img_path} alt={'Album ' + name}/>
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p><b>Banda: </b>{band}</p>
          <p><b>Duração: </b>{duration}</p>
        </div>
        <div className="card-action">
          <a href="#!">Ver Álbum</a>
        </div>
      </div>
    </div>
  )
}

export function Musicas(){
	return (
    <div className="container">   
      <h3 className="header col s12 light center">Nossas Músicas</h3>
      <h5 className="col s12 light center">Acesse nosso acervo de onde quiser</h5>

      <div className="row">

        <MusicCard
          name='Black Album'
          band='Metallica'
          duration='62:40'
          img_path='https://m.media-amazon.com/images/I/61Na6eN05jS._AC_SL1500_.jpg'
        />

        <MusicCard
          name='Holy Diver'
          band='DIO'
          duration='41:29'
          img_path='https://upload.wikimedia.org/wikipedia/pt/8/85/HolyDiver.jpg'
        />

        <MusicCard
          name='Powerslave'
          band='Iron Maiden'
          duration='51:12'
          img_path='https://upload.wikimedia.org/wikipedia/en/1/1c/Iron_Maiden_-_Powerslave.jpg'
        />

        <MusicCard
          name='Paranoid'
          band='Black Sabbath'
          duration='41:51'
          img_path='https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/08/black-sabbath-paranoid-super-deluxe.jpeg'
        />
      </div>
      <div className="row">


        <MusicCard
          name='The Dark Side of the Moon'
          band='Pink Floyd'
          duration='42:50'
          img_path='https://urbanarts.vteximg.com.br/arquivos/ids/4768804-1000-1000/the-dark-side-of-the-moon-minimalista.jpg?v=637200910802670000'
        />

        <MusicCard
          name='In the Court of the Crimson King'
          band='King Crimson'
          duration='43:56'
          img_path='https://m.media-amazon.com/images/I/61r34SB-E2L._AC_SX425_.jpg'
        />

        <MusicCard
          name='Toxicity'
          band='System of a Down'
          duration='44:01'
          img_path='https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg'
        />

        <MusicCard
          name="Ritchie Blackmore's Rainbow"
          band='Rainbow'
          duration='36:54'
          img_path='https://i.discogs.com/IgiwvlIMXMEf68tkk8z4ybwIwsOotBAwpVXr555XkRY/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MTc3/NTEtMTU2MDQ5OTI0/OC02MzY3LmpwZWc.jpeg'
        />
      </div>
    </div>
  )
}