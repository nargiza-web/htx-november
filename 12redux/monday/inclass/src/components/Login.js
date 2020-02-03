
import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const Login = (props) => {

    // local state 
    const [username, setUsername] = useState('')

    const handleOnChange = (e) => {
        setUsername(e.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            <input onChange={handleOnChange} type="text" />
            <button onClick={() => props.onUserNameSaved(username)}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserNameSaved: (myUserName) => dispatch({type: 'USER_NAME_SAVED', username: myUserName, name: 'JOHN', age: 23})
    }
}

export default connect(null,mapDispatchToProps)(Login)