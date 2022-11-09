import { useParams } from "react-router-dom";

function getAlbum(id){
  // TODO
  return id
}

export function Album(){
  const id = useParams().id;

  let album = getAlbum(id)

	return (
    <div className="container">
      {album}
    </div>
  )
}