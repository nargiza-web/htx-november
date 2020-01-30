import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About Us</Link></li>
            <li><NavLink to = "/contact" className = "some-class">Contact Us</NavLink></li>
        </ul>
    )
  }
}

export default Menu;
