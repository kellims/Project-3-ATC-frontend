import { useParams } from "react-router";
import { Link } from "react-router-dom";



function RemoveLocation() {
    const { id } = useParams()
async function removethisLocation() {
    try {
        await fetch(`http://localhost:4000/locations/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch(error) {
        console.log(error)
    }

}

    return (
        <>
            <h2>Are you sure you want to delete this Location?</h2>
            <Link to='/locations'>
                <button onClick={removethisLocation}>Yes, delete it!</button>
            </Link>
            <Link to={`/locations/${id}`}>
                <button>No, cancel</button>
            </Link>
        </>
    )
}


export default RemoveLocation;