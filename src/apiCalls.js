const URL = "http://localhost:4000"

export const locationsLoader = async () => {
    const response = await fetch(URL + "/locations")
    const locations = await response.json()
    return locations
}

export const informationLoader = async () => {
    const response = await fetch(URL + "/information")
    const information = await response.json()
    return information
}