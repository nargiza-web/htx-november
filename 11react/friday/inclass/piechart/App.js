import React from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from 'react-minimal-pie-chart';
import Budget from './Budget';
import { useState } from 'react'

function App() {

  const [accounts, setAccounts] = useState([])

  const handleAccountAdded = (account) => {
    //console.log(account)
    
    setAccounts(accounts.concat({
      title: account.accountType, 
      value: parseInt(account.balance), 
      color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }))

    //setAccounts(accounts.concat(account))

    //console.log("handleAccountAdded in App.js")
  }

  return (

    <div>
      <Budget onAccountAdded = {handleAccountAdded} />
    <PieChart
  data={accounts}/>

  </div>

  );
}

export default App;
