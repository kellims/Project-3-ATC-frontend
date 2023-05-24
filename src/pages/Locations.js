import { Link } from "react-router-dom";
import { useState, useEffect } from "react";






function LocationsIndex() {
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

    function handleChange(e) {
        console.log(e.target);
        setLocationsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await fetch('http://localhost:4000/locations', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(locationsForm)
            })
            getLocations();
            e.target.reset();
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Location Name: </label>
                <input type="text" name="place" onChange={handleChange} placeholder="Location Name"/>
                <label>Date of trip: </label>
                <input type="text" name="date" onChange={handleChange} placeholder="Date of Trip"/>
                <button>Submit</button>
            </form>
            {locations.length ? loaded(locations) : <h2>Loading...</h2>}
        </>
    )

  }


  
  export default LocationsIndex;


