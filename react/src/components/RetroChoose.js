import React from 'react'
import '../assets/css/login.css'
import logo from '../assets/images/logo.png'
import login from '../assets/images/login.png'
import { Link } from 'react-router-dom'

const RetroChoose = () => {
    return (
        <div className="choose-back">
        <div className="login-left">
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>

            <div className="retro-div">
            <div className="retro-choose-container">
                <form>
                    <input type="text" placeholder="Oda İsmi" required />
                <div className="password-area">
                    <input type="text" placeholder="Maximum Kullanıcı Sayısı" required />
                </div>
                <Link to = "retro">
                <button className="login-button" type="submit">Retro Oluştur</button>
                </Link>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default RetroChoose
