import { connect } from 'react-redux'
import React from 'react'

// higher order component 

export default function(ComposedComponent) {

    const Authenticate = (props) => {

        if(!props.isLoggedIn) {
            // not logged in 
            props.history.push('/')
        }

        // person is logged in successfully 
        return <ComposedComponent {...props} />

    } 

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate)

}
