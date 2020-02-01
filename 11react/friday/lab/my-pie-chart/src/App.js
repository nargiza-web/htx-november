import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import Budget from './Budget'
import { useState } from 'react'
import './App.css';

function App() {
  
  const [accounts, setAccounts] = useState([])
  
  const handleAccountAdded = (account) => {
  // setAccounts(accounts.concat(account))//the color property is not passed can't work properly
  
  setAccounts(accounts.concat({
         title: account.accountType,
         value: parseInt(account.Balance),
         color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
       }))
  
  }
    
  
  return(
    <div>
      <Budget onAccountAdded = {handleAccountAdded}/>
      <PieChart data={accounts} />
    </div>
  )
}

export default App;
