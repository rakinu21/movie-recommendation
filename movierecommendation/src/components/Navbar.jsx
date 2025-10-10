import React from 'react'
import { Link, Links } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-home-link">
            <Link to='/'>Movie app</Link>
        </div>
        <div className="navbar-fav">
            <Link to='/favorite'>favorite</Link>
        </div>
    </div>
  )
}
