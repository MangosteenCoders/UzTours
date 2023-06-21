import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logotip.svg'

export default function Navbar() {
  const[navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
window.addEventListener('scroll', changeNavbar);
  return (
    <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container">
        <div className="nav-body">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul className="nav-list">
            <li><Link to="/">Bosh sahifa</Link></li>
            <li><Link to='/tours'>Turlar</Link></li>
            <li><Link to="/about">Biz haqimizda</Link></li>
            <li><Link to="/transport">Transport</Link></li>
          </ul>

          <select name="" id="">
            <option value="">o’zbekcha</option>
            <option value="">русский</option>
            <option value="">english</option>
          </select>
        </div>
      </div>  
    </nav>
  )
}
