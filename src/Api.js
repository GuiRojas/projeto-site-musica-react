import axios from "axios"
import M from "materialize-css"

const URL = "http://localhost:4000"

export async function getAlbums(params) {
	let res = 
		await axios(URL + "/api/albums", {params})
		.catch((e) => {
			M.toast({html: e.response.data})
			return
		})
	return res.data
}

export async function getAlbumInfo(id) {
	let res =
		await axios(URL + "/api/albums/" + id)
		.catch((e) => {
			M.toast({html: e.response.data})
			return
		})
	return res.data
}

export async function createAlbum({name, band, duration, image_path}) {
	let res = await axios.post(URL + "/api/albums/new", {
		name,
		band,
		duration,
		image_path,
	}).catch((e) => {
		M.toast({html: e.response.data})
		return
	}).catch((e) => {
		M.toast({html: e.response.data})
		return
	})
	return res
}

export async function createSong({name, duration, album_id}) {
	let res = await axios.post(URL + "/api/songs/new", {
		name,
		duration,
		album_id,
	}).catch((e) => {
		M.toast({html: e.response.data})
		return
	})
	return res.status === 200
}

export async function deleteAlbum({id}) {
	let res = 
		await axios.delete(URL + "/api/albums/" + id)
		.catch((e) => {
			M.toast({html: e.response.data})
			return
		})
	return res.status === 200
}


export async function deleteSong({id}) {
	let res = 
		await axios.delete(URL + "/api/songs/" + id)
		.catch((e) => {
			M.toast({html: e.response.data})
			return
		})
	return res.status === 200
}
