
import React from 'react'

function AddHike() {

    const getUserLocation = () => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((coords) => {
                recordHike(coords.coords.latitude,coords.coords.longitude)
            });
          } 
    }

    const recordHike = (latitude, longitude) => {
         
        fetch('http://localhost:3001/add-hike',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                latitude: latitude, 
                longitude: longitude
            })
        }) 

    }

    const handleAddHikeButtonPressed = () => {
        getUserLocation()
    }

    return (
        <div><button onClick={() => handleAddHikeButtonPressed()}>Add Hike</button></div>
    )

}

export default AddHike