import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import M from "materialize-css"
import {
	getAlbumInfo,
	createSong,
	deleteSong,
	deleteAlbum,
	editAlbum,
} from '../Api.js'

const SongListing = ({id, name, duration, title}) => {
	const deleteSongSubmit = (event) => {
		event.preventDefault()
		const paramId = event.target.id.value

		const doDelete = async () => {
			const resp = await deleteSong({id: paramId})
			if(resp){
				window.location.reload(false)
			}
		}
		doDelete()
	}

	let deleteButton = (<></>)
	if(title !== "true"){
		deleteButton = (
			<form onSubmit={deleteSongSubmit}>
				<input type="hidden" value={id} name="id" id="id"/>
				<button className="btn brown" type="submit" name="action">
					<i className="material-icons right">close</i>
				</button>
			</form>
		)
	}

	return(
		<div className="row">
			<div className="col s7 l6 offset-l2 left-align">
				<b>{name}</b>
			</div>
			<div className="col s2 l2 right-align grey-text">
				{duration}
			</div>
			<div className="col s2 l2">
				{deleteButton}
			</div>
		</div>
	)
}

// eslint-disable-next-line no-empty-pattern
const FloatingButton = ({}) => {
	return(
		<div className="fixed-action-btn">
			<a className="btn-floating btn-large amber modal-trigger" href="#new-song-modal">
				<i className="large material-icons">add</i>
			</a>
		</div>
	)
}

// eslint-disable-next-line no-empty-pattern
const NewSongModal = ({album_id}) => {
	const modalSubmit = (event) => {
		event.preventDefault()
		const name = event.target.name.value
		const duration = event.target.duration.value

		if(!name || !duration || name === "" || duration === ""){
			M.toast({html: "Preecha todos os dados corretamente!"})
			return
		}

		const add = async () => {
			const resp = await createSong({name, duration, album_id})
			if(resp){
				window.location.reload(false)
			}
		}
		add()
	}

	return(
		<div id="new-song-modal" className="modal">
			<div className="modal-content row">
				<h4>Adicionar música</h4>
				<form className="col s12" onSubmit={modalSubmit}>
					<div className="row">
						<div className="input-field col s12 l6">
							<input id="name" name="nome" type="text"/>
							<label htmlFor="name">Nome da Música</label>
						</div>
						<div className="input-field col s12 l6">
							<input id="duration" name="duration" type="text"/>
							<label htmlFor="duration">Duração</label>
						</div>
					</div>
					<button className="right btn amber" type="submit" name="action">
						Adicionar!
						<i className="material-icons right">send</i>
					</button>
				</form>
			</div>
		</div>
	)
}


// eslint-disable-next-line no-empty-pattern
const EditAlbumModal = ({album_id, name, band, duration, image_path}) => {
	const modalSubmit = (event) => {
		event.preventDefault()
		const name = event.target.name.value
		const band = event.target.band.value
		const duration = event.target.duration.value
		const image_path = event.target.image_path.value

		if(!name || !duration || name === "" || duration === "" ||
		   !band || !image_path || band === "" || image_path === ""){
			M.toast({html: "Preecha todos os dados corretamente!"})
			return
		}

		const edit = async () => {
			const resp = await editAlbum({id: album_id, name, duration, band, image_path})
			if(resp){
				window.location.reload(false)
			}
		}
		edit()
	}

	return(
		<div id="edit-album-modal" className="modal">
			<div className="modal-content row">
				<h4>Editar Album</h4>
				<form className="col s12" onSubmit={modalSubmit}>
					<div className="row">
						<div className="input-field col s12 l6">
							<input id="name" name="nome" type="text" defaultValue={name}/>
							<label className="active" htmlFor="name">Nome do Album</label>
						</div>
						<div className="input-field col s12 l6">
							<input id="band" name="band" type="text" defaultValue={band}/>
							<label className="active" htmlFor="band">Banda</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12 l6">
							<input id="duration" name="duration" type="text" defaultValue={duration}/>
							<label className="active" htmlFor="duration">Duração</label>
						</div>
						<div className="input-field col s12 l6">
							<input id="image_path" name="image_path" type="text" defaultValue={image_path}/>
							<label className="active" htmlFor="image_path">Link para capa do album</label>
						</div>
					</div>
					<button className="right btn amber" type="submit" name="action">
						Editar!
						<i className="material-icons right">send</i>
					</button>
				</form>
			</div>
		</div>
	)
}

export function Album(){
	const [album, setAlbum] = useState([])
	const albumId = useParams().id;

	useEffect(() => {
		M.AutoInit(document.body)

		const fetchData = async () => {
			const resp = await getAlbumInfo(albumId);
			setAlbum(resp)
		}
		fetchData()

		return () => {}
  }, [albumId])

	const {
		name,
		band,
		duration,
		image_path,
		songs = [],
	} = album

	let songsHtml = []

	songs.forEach((songX, index) => {
		songsHtml.push(<SongListing
			name={songX.name}
			duration={songX.duration}
			key={songX.name}
			id={songX.id}
			title="false"
		/>)
	})

	const navigate = useNavigate()

	const deleteAlbumSubmit = (event) => {
		event.preventDefault()
		const paramId = event.target.id.value

		const doDelete = async () => {
			const resp = await deleteAlbum({id: paramId})
			if(resp){
				navigate('../musicas')
				window.location.reload(false)
			}
		}
		doDelete()
	}

	return (
		<div className="container center">
			<h3 className="amber-text text-darken-1">{name}</h3>
			<h5 className="amber-text text-darken-1">{band} ({duration})</h5>
			<img className="materialboxed center" width="100%" alt={"capa do album " + name} src={image_path}/>
			<br/>
			<div className="row">
				<div className="col left s6 l6">
					<a className="btn amber modal-trigger" href="#edit-album-modal">
						Editar Album
						<i className="material-icons right">create</i>
					</a>
				</div>
				<div className="col s6 l6">
					<form onSubmit={deleteAlbumSubmit} className="center">
						<input type="hidden" value={albumId} name="id" id="id"/>
						<button className="btn amber" type="submit" name="action">
							Deletar Album
							<i className="material-icons right">delete</i>
						</button>
					</form>
				</div>
			</div>
			<h4 className="amber-text text-darken-1">Músicas</h4>
			<SongListing
				name="Nome da música"
				duration="Duração"
				key="legenda"
				id="0"
				title="true"
			/>
			<hr className="center valign-wrapper"/>
			{songsHtml}
			<FloatingButton/>
			<NewSongModal
				album_id={albumId}
			/>
			<EditAlbumModal
				album_id={albumId}
				name={name}
				band={band}
				duration={duration}
				image_path={image_path}
			/>
		</div>
	)
}