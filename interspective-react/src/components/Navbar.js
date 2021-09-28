import React from 'react'
import logo from '../assets/images/logo.png'
import '../assets/css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <Link to="/"> 
            <img src={logo} alt="logo" />
            </Link>
            </div>
            
            <div className="menu">
            <Link to="/urunler"> 
                <span>Ürünler</span>
            </Link>

            <span>Çözümler</span>
            <Link to="login">
            <div className="login">Giriş Yap</div>
            </Link>
            </div>
        </div>
    )
}

export default Navbar
