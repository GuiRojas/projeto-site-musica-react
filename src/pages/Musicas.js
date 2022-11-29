import React, { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import M from "materialize-css"
import { getAlbums, createAlbum } from '../Api.js'

// eslint-disable-next-line no-empty-pattern
const FloatingButton = ({}) => {
	return(
		<div className="fixed-action-btn">
			<a className="btn-floating btn-large amber modal-trigger" href="#new">
				<i className="large material-icons">add</i>
			</a>
		</div>
	)
}

// eslint-disable-next-line no-empty-pattern
const NewAlbumModal = ({}) => {
	const navigate = useNavigate()

	const Create = async ({name, band, duration, image_path}) => {
		const resp = await createAlbum({name, band, duration, image_path})
		if(resp.status === 200){
			navigate('../album/'+resp.data.id)
			window.location.reload(false)
		}
	}

	const ModalSubmit = (event) => {
		event.preventDefault()
		const name = event.target.nome.value
		const band = event.target.banda.value
		const duration = event.target.duration.value
		const image_path = event.target.img.value

		if(!name || !duration || name === "" || duration === "" ||
		   !band || !image_path || band === "" || image_path === ""){
			M.toast({html: "Preecha todos os dados corretamente!"})
			return
		}

		Create({name, band, duration, image_path})
	}

	return(
		<div id="new" className="modal">
			<div className="modal-content row">
				<h4>Criar novo album</h4>
				<form className="col s12" onSubmit={ModalSubmit}>
					<div className="row">
						<div className="input-field col s12 l6">
							<input id="nome" name="nome" type="text"/>
							<label htmlFor="nome">Nome do Álbum</label>
						</div>
						<div className="input-field col s12 l6">
							<input id="banda" name="banda" type="text"/>
							<label htmlFor="banda">Banda/Artista</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12 l6">
							<input id="duration" name="duration" type="text"/>
							<label htmlFor="duration">Duração</label>
						</div>
						<div className="input-field col s12 l6">
							<input id="img" name="img" type="text"/>
							<label htmlFor="img">Link para capa do Álbum</label>
						</div>
					</div>
					<button className="right btn amber" type="submit" name="action">
						Criar!
						<i className="material-icons right">send</i>
					</button>
				</form>
			</div>
		</div>
	)
}

const MusicCard = ({name, band, duration, img_path, id}) => {
	return(
		<div className="col s12 m6 l3">
			<div className="card brown lighten-5">
				<div className="card-image">
					<img src={img_path} alt={'Album ' + name}/>
				</div>
				<div className="card-content">
					<span className="card-title black-text bold">{name}</span>
					<p><b>Banda: </b>{band}</p>
					<p><b>Duração: </b>{duration}</p>
				</div>
				<div className="card-action">
					<Link
						to={"/album/"+id}
					>
						<span className="logo-text amber-text text-darken-1">
							Ver Álbum
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

const SearchBar = ({query, size}) => {
	useEffect(() => {
    	let selectElements = document.querySelectorAll("select")
	    M.FormSelect.init(selectElements, {})

		return () => {}
	},[])

	return(
		<div className="row">
			<form>
				<div className="input-field col s8 l8">
					<input defaultValue={query} id="query" type="text" name="query"/>
					<label className="active" htmlFor="query">Pesquisar...</label>
				</div>
				<div className="input-field col s2 l2">
					<select defaultValue={size} name="size">
						<option value="4">4</option>
						<option value="8">8</option>
						<option value="16">16</option>
						<option value="24">24</option>
					</select>
					<label>Álbums por página</label>
				</div>
				<input type="hidden" value={1} name="page"/>
				<div className="col s2 l2 bottom valign-wrapper">
					<button className="btn waves-effect waves-light brown" type="submit" name="action">
						Filtrar
					</button>
				</div>
			</form>
		</div>
	)
}

const PageArrows = ({query, size, page, results}) => {
	if(!page){
		page = 1
	} else {
		page = parseInt(page)
	}

	let leftArrow
	let rightArrow

	if(page <= 1){
		page = 1
		leftArrow = (
			<button className="disabled btn waves-effect waves-light brown" type="submit" name="action">
				<i className="large material-icons">chevron_left</i>
			</button>
		)
	} else {
		leftArrow = (
			<form>
				<input type="hidden" value={page-1} name="page"/>
				<input type="hidden" value={query} name="query"/>
				<input type="hidden" value={size} name="size"/>
				<button className="btn waves-effect waves-light brown" type="submit" name="action">
					<i className="large material-icons">chevron_left</i>
				</button>
			</form>
		)
	}

	if(results === parseInt(size)){
		rightArrow = (
			<form>
				<input type="hidden" value={page+1} name="page"/>
				<input type="hidden" value={query} name="query"/>
				<input type="hidden" value={size} name="size"/>
				<button className="btn waves-effect waves-light brown" type="submit" name="action">
					<i className="large material-icons">chevron_right</i>
				</button>
			</form>
		)
	} else {
		rightArrow = (
			<button className="disabled btn waves-effect waves-light brown" type="submit" name="action">
				<i className="large material-icons">chevron_right</i>
			</button>
		)
	}

	return(
		<div className="row">
			<div className="left s6 l6">
				{leftArrow}
			</div>
			<div className="right s6 l6">
				{rightArrow}
			</div>
		</div>
	)
}

export function Musicas(){
	const [albums, setAlbums] = useState([])
	const [searchParams, ] = useSearchParams()

	let query = searchParams.get('query')
	let size = searchParams.get('size')
	let page = searchParams.get('page')

	if(!query){query = ''}
	if(!size){size = '8'}
	if(!page){page = '1'}

	useEffect(() => {
		M.AutoInit(document.body)

		const fetchData = async () => {
			const resp = await getAlbums({query, size, page});
			setAlbums(resp)
		}
		fetchData()

		return () => {}
	},[query, size, page])

	if (!albums)
		return (
			<>
				<div className="center"> carregando.... </div>
				<NewAlbumModal/>
				<FloatingButton/>
			</>
		)

	if (!albums[0])
		return (
			<>
				<div className="container">
					<h3 className="header col s12 light center">Nossas Músicas</h3>
					<h5 className="col s12 light center">Acesse nosso acervo de onde quiser</h5>
					<SearchBar
						query={query}
						size={size}
					/>
					<br/><br/>
					<h4 className="light center">Nenhuma música encontrada!</h4>
					<br/>
					<h6 className="light center">Tente ajustar os filtros de busca</h6>
					<br/><br/><br/>
				</div>
				<NewAlbumModal/>
				<FloatingButton/>
			</>
		)

	let albumCards = []

	albums.forEach((albumX, index) => {
		albumCards.push(
			<MusicCard
				name={albumX.name}
				band={albumX.band}
				duration={albumX.duration}
				img_path={albumX.image_path}
				id={albumX.id}
				key={albumX.id}
			/>)
	})

	let divRows = []

	const chunkSize = 4;
	for (var i = 0; i < albumCards.length; i += chunkSize) {
	    const chunk = albumCards.slice(i, i + chunkSize);

	    divRows.push(
	    	<div className="row" key={"row " + i}>
	    		{chunk}
	    	</div>
	    )
	}

	return (
		<>
			<div className="container">
				<h3 className="header col s12 light center">Nossas Músicas</h3>
				<h5 className="col s12 light center">Acesse nosso acervo de onde quiser</h5>
				<SearchBar
					query={query}
					size={size}
				/>
				{divRows}
				<PageArrows
					page={page}
					query={query}
					size={size}
					results={albums.length}
				/>
			</div>
			<NewAlbumModal/>
			<FloatingButton/>
		</>
	)
}