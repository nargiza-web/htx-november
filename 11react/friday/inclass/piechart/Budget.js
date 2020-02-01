
import React from 'react'
import { useState } from 'react'

const Budget = (props) => {

    const [account, setAccount] = useState({})
    //const [balance, setBalance] = useState(0)
    
    const handleChange = (e) => {

        setAccount({
            ...account, 
            [e.target.name]: e.target.value 
        })
    }

    return (<div>
        <input type="text" name="accountType" onChange={handleChange} placeholder ="accountType"></input>
        <input type="text" name="balance" onChange = {handleChange} placeholder ="balance"></input>
        <button onClick={() => props.onAccountAdded(account)}>Add</button>

    </div>)
}

export default Budget