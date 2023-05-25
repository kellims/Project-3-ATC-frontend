
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

 




  function locationLoaded() {
    return (
      <>
      <div className="locationInfo">
      <h1>Here's all your information about {locationInfo.place}</h1>
      <img src={locationInfo.img} alt={locationInfo.place+" image"} />
      <h2>Location: {locationInfo.place}</h2>
      <h2>Photo: {locationInfo.date}</h2>
      <Link to={`/locations/${id}/delete`}>
                    <button>Delete this Location</button>
                </Link>
      <Link to={`/locations/${id}/edit`}>
                    <button>Edit this Location</button>
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