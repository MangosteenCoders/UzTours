import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logotip.svg'

export default function Navbar() {
  const[navbar, setNavbar] = useState(false)
  const [active, setActive] = useState("nav-list")
  const [toglleIcon, setToggleIcon ] = useState("nav__toggler")

  const navToggle  = () => {
    active === "nav-list"
     ? setActive("nav-list nav__active")
     : setActive("nav-list")

    toglleIcon === "nav__toggler"
      ? setToggleIcon ("nav__toggler toggle")
      : setToggleIcon("nav__toggler")
  }

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

          <ul className={active}>
            <li><Link onClick={navToggle} to="/">Bosh sahifa</Link></li>
            <li><Link onClick={navToggle} to='/tours'>Turlar</Link></li>
            <li><Link onClick={navToggle} to="/about">Biz haqimizda</Link></li>
            <li><Link onClick={navToggle} to="/transport">Transport</Link></li>
          </ul>

          <select name="" id="">
            <option value="">o’zbekcha</option>
            <option value="">русский</option>
            <option value="">english</option>
          </select>

          <div onClick={navToggle} className={toglleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>  
    </nav>
  )
}
