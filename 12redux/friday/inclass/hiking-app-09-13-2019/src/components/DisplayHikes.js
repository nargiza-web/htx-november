
import React from 'react'

function DisplayHikes(props) {

    return (
        <div>
            {props.myHikes.map(hike => {
                return <div><a href={`https://www.latlong.net/c/?lat=${hike.latitude}&long=${hike.longitude}`}>{hike.latitude}, {hike.longitude}</a> </div>
            })}
        </div>
    )

}

export default DisplayHikes