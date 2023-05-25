import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";


function LocationEdit() {
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
}

export default LocationEdit;