import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import M from "materialize-css"

function getAlbum(id){
	// TODO
	return {
		id: "id",
		name: "nome",
		banda: "banda",
		duration: "51:50",
		img: "https://www.teclasap.com.br/wp-content/uploads/2014/09/fish.jpg"
	}
}

export function Album(){
  useEffect(() => {  	
    let albumImg = document.querySelectorAll(".materialboxed")
    M.Materialbox.init(albumImg)
  }, [])

	const id = useParams().id;

	const {
		name,
		banda,
		duration,
		img
	} = getAlbum(id)

	return (
		<div className="container center">

			<h3 className="amber-text text-darken-1">{name}</h3>

			<img className="materialboxed center" width="100%" alt="capa do album {name}" src={img}/>

			<h5 className="amber-text text-darken-1">{banda} ({duration})</h5>
		</div>
	)
}