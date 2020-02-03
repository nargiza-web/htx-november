import React from 'react'
import {useState} from 'react'
import { connect } from 'react-redux'

function Login (props) {
  
  const [user, setUser] = useState('')
  
  const handleChange = (e) => {
    setUser(e.target.value)
  }
  
    return (
        <div>
            <h1>Login</h1>
            <h3>{props.username}</h3>
            <input type="text" onChange={handleChange}/>
            <button onClick= {() => props.onSaveUsername(user)}>Login</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isAuthenticated,
        user: state.user 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveUsername: (user) => dispatch({type: 'SAVE_USER', user: user})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)