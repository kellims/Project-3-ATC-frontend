
//Show page for each Location
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function Information() {

  const [locationInfo, setLocationInfo] = useState(null)
  
  const { id } = useParams()
  console.log(id)
 

  const URL = `http://localhost:4000/locations/${id}`
  

  

  
    const getLocation = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json()
      setLocationInfo(result)

    } catch (error) {
      console.log(error);
    }
  }

  console.log(locationInfo)

  // const navigate = useNavigate()

  // const removeLocation = async () => {
  //   try {
  //     const options = {
  //       method: "DELETE"
  //     }

  //     const response = await fetch(URL, options)
  //     const deletedLocation = await response.json()
  //     console.log(deletedLocation)
  //     navigate('')
    
  //   } catch (error) {
  //     console.log(error)
  //     navigate(URL)
  //   }

  // }

  const [editForm, setEditForm] = useState(locationInfo)

  const updateLocation = async (e) => {
    e.preventDefault()

    try {
      await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      })

      getLocation()
    } catch (err) {
      console.log(err)
    }
  }

const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
}



  function locationLoaded() {
    return (
      <>
      <div className="locationInfo">
      <h1>Here's where you'll see all the information about each Location</h1>
      <img src={locationInfo.img} alt={locationInfo.place+" image"} />
      <h2>Location: {locationInfo.place}</h2>
      <h2>Photo: {locationInfo.date}</h2>
      <Link to={`/locations/${id}/delete`}>
                    <button>Delete</button>
                </Link>
      </div>
      <section>

	
</section>
      </>
    )
  }
  
  useEffect(() => {
    getLocation()
  }, [])

  

  return(
    <>
      {locationInfo ? locationLoaded() : <h2>Loading..</h2>}
    </>
  )


  }

  








 
  
  export default Information;