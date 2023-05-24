
//Show page for each Location
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate()

  const removeLocation = async () => {
    try {
      const options = {
        method: "DELETE"
      }

      const response = await fetch(URL, options)
      const deletedLocation = await response.json()
      console.log(deletedLocation)
      navigate('')
    
    } catch (error) {
      console.log(error)
      navigate(URL)
    }

  }

  function locationLoaded() {
    return (
      <>
      <div className="locationInfo">
      <h1>Here's where you'll see all the information about each Location</h1>
      <img src={locationInfo.img} alt={locationInfo.place+" image"} />
      <h2>Location: {locationInfo.place}</h2>
      <h2>Photo: {locationInfo.date}</h2>
      <div>
        <button className="delete" onClick={removeLocation}> Remove Location</button>
      </div>
      </div>
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