
import React from 'react'
import { useState } from 'react'
import { setAuthenticationHeader } from '../utils/authentication'
import axios from 'axios'

const Login = (props) => {

    const [loginInfo, setLoginInfo] = useState({})

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    const onHandleGetCreditCards = () => {

        // get the token from local storage 
        const token = localStorage.getItem('jsonwebtoken')
        // token should be in Bearer token format

        fetch('http://localhost:8080/my-credit-cards',{
            method: 'GET', 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))

    }

    const onHandleGetBankAccounts = () => {

        // get the token from local storage 
        // commented out because axios is going to pass the 
        // header by default 
       // const token = localStorage.getItem('jsonwebtoken')
        // token should be in Bearer token format

        axios('http://localhost:8080/accounts/banks')
        .then(response => response.data)

     //   fetch('http://localhost:8080/accounts/banks')
     //   .then(response => response.json())
      //  .then(json => console.log(json))

    }

    const onHandleLogin = () => {
        // perform a fetch request (POST) to login route 
        // passing username and password 

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
          }).then(response => response.json())
          .then(json => {
            const token = json.token 
            // save the token to local storage 
            localStorage.setItem('jsonwebtoken',token)
            // set the token in the authentication header axios 
            setAuthenticationHeader(token)

          })

    }

    return (
        <div>
            <h1>Login</h1>
            <input name="username" onChange={handleChange} type="text" placeholder="username" />
            <input name="password" onChange = {handleChange} type="text" placeholder="password" />
            <button onClick = {onHandleLogin}>Login</button>
            <button onClick={onHandleGetBankAccounts}>Get Bank Accounts</button>
            <button onClick={onHandleGetCreditCards}>Get Credit Card Accounts</button>
        </div>
    )
}

export default Login 