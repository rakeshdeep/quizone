import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav className='nav-bar'>
        
      <ul className="nav-list">
        <li className='sub-heading'><h3>Quizone </h3></li>
        <li><a href="/">Home</a></li>
        <li><a href="/">News</a></li>
        <li><a href="/">contact</a></li>
      </ul>
      <div className="search-box">
        <input type="search" name="search" placeholder='Search your Quiz' id="search" />
        <button className="btn  btn-primary btn-focus" type='button'>Go</button>
      </div>
    </nav>
  )
}
