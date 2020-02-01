import React from 'react'
import {useState} from 'react'

const Budget =(props) => {
  
  const [account, setAccount] = useState({})
  
  const handleChange = (e) =>{
    
    setAccount({
      ...account,
      [e.target.name]:e.target.value
    })
    
  }
  
  return(
    <div>
      <input type="text" name="accountType" onChange = {handleChange} placeholder="account type"></input>
      <input type="text" name="Balance" onChange = {handleChange} placeholder="Balance"></input>
      <button onClick={() => props.onAccountAdded(account)}>Add</button>
    </div>
  )
}

export default Budget