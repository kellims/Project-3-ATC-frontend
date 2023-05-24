
//Show page for each Location
import { useState, useEffect } from "react";
import { useParams } from "react-router";



function Information() {
// const locationShow = () = {
  const [locationInfo, setLocationInfo] = useState(null)
  // const { locationsID } = useParams();
  const { id } = useParams()
  // console.log(locationsID)
 

  const URL = `http://localhost:4000/locations/${id}`
  

  

  // async function fetchLocationInformation() {
    const getLocation = async () => {
    try {
      // let myLocationInfo = await fetch(`http://localhost:4000/locations/${locationsID}`);
      const response = await fetch(URL);
      // myLocationInfo = await myLocationInfo.json();
      const result = await response.json()
      // setLocationInfo(myLocationInfo);
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
      <h1>Here's where you'll see all the information about each Location</h1>
      {/* <h2>{locationInfo.img}</h2> */}
      <img src={locationInfo.img} alt={locationInfo.place+" image"} />
      <h2>Location: {locationInfo.place}</h2>
      <h2>Photo: {locationInfo.date}</h2>
      </div>
      </>
    )
  }
  
  useEffect(() => {
    // fetchLocationInformation()
    getLocation()
  }, [])

  // function locationLoaded() {
  //   return (
  //     <>
  //     <h1>Here's where you'll see all the information about each Location</h1>
  //     <h2>Dates: {locationInfo.img}</h2>
  //     <h2>Location: {locationInfo.place}</h2>
  //     <h2>Photo: {locationInfo.date}</h2>
  //     </>
  //   )
  // }

  return(
    <>
      {locationInfo ? locationLoaded() : <h2>Loading..</h2>}
    </>
  )
}


  // if (!locationInfo) {
  //   return <p>Loading Location information ...</p>
  // }
  
  //   return (
  //   <>
  //   <h1>Here's where you'll see all the information about each Location</h1>
  //   <h2>Dates: {locationInfo.img}</h2>
  //   <h2>Location: {locationInfo.place}</h2>
  //   <h2>Photo: {locationInfo.date}</h2>
  //   </>
  // )}
  
  export default Information;