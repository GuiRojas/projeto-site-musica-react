import React, { useEffect} from 'react'
import M from 'materialize-css'

const Parallax = ({img_path}) => {
  useEffect(() => {
    let elements = document.querySelectorAll(".parallax")
    M.Parallax.init(elements)
  },[])

	return (
	  <div className="parallax">
	    <img src={img_path} alt="Unsplashed background parallax img" />
	  </div>
	)
}

export default Parallax