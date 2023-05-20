import { Link } from "react-router-dom";
import { useState, useEffect } from "react";






function Locations() {
    const [locations, setLocations] = useState([]);
    const [locationsForm, setLocationsForm] = useState({
        place: "",
        date: ""
    })

    async function getLocations() {
        try {
            
            let mylocations = await fetch('http://localhost:4000/locations')
            mylocations = await mylocations.json();
            setLocations(mylocations);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getLocations();
    }, []);

    console.log(locations);

    function loaded(arr) {
        return(
            <>
                {arr.map((locations, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/locations/${locations._id}`}>
                                <h2>Location: {locations.place}</h2>
                            </Link>
                            <h3>Date: {locations.date}</h3>
            
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }

  }


  
  export default Locations;


