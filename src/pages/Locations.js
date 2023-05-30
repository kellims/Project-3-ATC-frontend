import { Link } from "react-router-dom";
import { useState, useEffect } from "react";






function LocationsIndex() {
    const [locations, setLocations] = useState([]);
    const [locationsForm, setLocationsForm] = useState({
        place: "",
        date: "",
        img: "",
    });

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
                        <div key={idx} className='location-tile'>
                            <img src={locations.img} alt="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.presspage.com%2Fuploads%2F2431%2F1920_emiratesrampsupglobaloperations.png%3F10000&tbnid=TiV_YpLEZ8TFRM&vet=12ahUKEwiQ55Dejp7_AhV5H94AHZYvC-QQMygLegUIARCDAg..i&imgrefurl=https%3A%2F%2Fwww.emirates.com%2Fmedia-centre%2Femirates-ramps-up-global-operations-with-restart-of-services-to-four-destinations%2F&docid=s3_Ex07V-bDB3M&w=1800&h=1200&q=Emirates%20Airplane%20Photo&ved=2ahUKEwiQ55Dejp7_AhV5H94AHZYvC-QQMygLegUIARCDAg"></img>
                            <Link to={`/locations/${locations._id}`} key={ locations._id }>
                                <h2>{locations.place}</h2>
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
            <section>
            <h4>Add A New Location</h4>
            <form onSubmit={handleSubmit}>
                
                <label>Location Name: </label>
                <input type="text" name="place" onChange={handleChange} placeholder="Location Name"/>
                <label>Date of trip: </label>
                <input type="text" name="date" onChange={handleChange} placeholder="Date of Trip"/>
                <label>Photo: </label>
                <input type="text" name="img" onChange={handleChange} placeholder="Photo of Location"/>
                <button>Submit</button>
            </form>
            </section>
            {locations.length ? loaded(locations) : <h2>Loading...</h2>}
        </>
    )

  }


  
  export default LocationsIndex;


