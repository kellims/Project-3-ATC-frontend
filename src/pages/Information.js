
//Show page for each Location
import { useParams } from "react-router";

import React, { useState, useEffect } from "react";

function Information() {
  const { locationsID } = useParams();
  
  const url = `http://localhost:4000/locations/${locationsID}`
  console.log(locationsID)

  const [locationInfo, setLocationInfo] = useState(null)


  const fetchLocationInformation = async () => {
    try {
      const response = await fetch(url);
      const locationInfo = await response.json();
  
      setLocationInfo(locationInfo);

    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    fetchLocationInformation()
  }, [])

  if (!locationInfo) {
    return <p>Loading Location information ...</p>
  }
  
    return (
    <>
    <h1>Here's where you'll see all the information about each Location</h1>
    <h2>Location: {locationInfo.place}</h2>
    <h2>Dates: {locationInfo.date}</h2>
    </>
  )}
  
  export default Information;