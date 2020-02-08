import React from 'react'
import {useState} from 'react'
import {setAuthenticationHeader} from '../utils/authentication'
import Axios from 'axios';
import {connect} from 'react-redux'


const Login = (props) =>{
  const [loginInfo, setLoginInfo] = useState({})
    
  const handleChange =(e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    })
  }
  
  const handleCreditCards = () => {
    // get the token from local storage
    const token = localStorage.getItem('jsonwebtoken')
    
    fetch('http://localhost:8080/my-credit-cards', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }
  
  const handleBankAccounts = ()=> {
    Axios('http://localhost:8080/accounts/banks')
        .then(response => response.data)
  }
  
  const handleLogin =() => {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify(loginInfo)
    }).then(response => response.json())
      .then(json => {
        //getting the token from server
        const token = json.token
        
        //saving token into local storage
        localStorage.setItem('jsonwebtoken', token)
        
        //set the token in authentication header axios
        setAuthenticationHeader(token)
        // update the global state for redux
        
        props.onLoginSuccess(token)
      })
  }
  
  
  return (
    <div>
      <h1>Login</h1>
      <input name="username" onChange={handleChange} type="text" placeholder="username"/>
      <input name="password" onChange={handleChange} type="password" placeholder="password"/>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleBankAccounts}>Get Bank Accounts</button>
      <button onClick = {handleCreditCards}>Get Credit Card Accounts</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSuccess: (token) => dispatch({type: 'ON_LOGIN_SUCCESS', token: token})
  }
}

export default connect(null, mapDispatchToProps)(Login)