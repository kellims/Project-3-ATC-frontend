import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";


function LocationEdit() {
    const { id } = useParams()
    const [location, setLocation] = useState(null)
    const navigate = useNavigate

  async function updateLocation() {
    try {
        let myLocation = await fetch(`http://localhost:4000/locations/${id}`)
        myLocation = await myLocation.json()
        setLocation(myLocation)
    }   catch(error) {
        console.log(error)
    }
  }

useEffect(() => {
    updateLocation()
}, []);

function handleChange(e) {
    setLocation((currentState) => ({ 
        ...currentState, 
        [e.target.name]: e.target.value }))
}

async function handleSubmit(e) {
    try {
        e.preventDefault();
        await fetch(`http://localhost:4000/locations/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(location),
        })
        return navigate(`/locations/${id}`)
    } catch(error) {
        console.log(error)
    }
}

function loaded() {
    return (
        <>
        
            <h3>Edit {location.place}</h3>
            <form onSubmit={handleSubmit}>
                Place: <input type="text" value={location.place} name="place" onChange={handleChange} />
                Date: <input type="text" value={location.date} name="date" onChange={handleChange} />
                Image: <input type="text" value={location.img} name="img" onChange={handleChange} />
                <button>Submit</button>
            </form>
        </>
    )
}
    return (
        <>
        {location ? loaded() : <h2>Loading</h2>}
        </>
    )
}
  

export default LocationEdit;