import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const BaseLayout = (props) => {
  return (
    <div>
      <Menu isSignedIn = {props.isAuthenticated} />
      {props.children}
    </div>
  )
}

const Menu = (props) => {
  return (
    <ul>
      <li><Link to="/">Home</Link> </li>
      {!props.isSignedIn ? <li><Link to ="/register">Register</Link></li> : null}
      {props.isSignedIn ? <li><Link to="/bank-accounts">Bank Accounts</Link></li> : null}
      {props.isSignedIn ? <li><Link to = "/credit-card-accounts">Credit Card Accounts</Link></li>: null}
      {props.isSignedIn ? <li><Link to="/logout">Logout</Link></li> : null}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated:state.isAuthenticated
  }
}

export default connect(mapStateToProps)(BaseLayout)