
import React from 'react'

function NavigationItems(props) {

    return (
        <div>
            <ul>
            <li>Home</li>
            { props.isAuthenticated ? <li>"My Books"</li> : null } 
            { props.isAuthenticated ? <li>"Logout"</li> : null } 
            </ul>
        </div>
    )

}

export default NavigationItems