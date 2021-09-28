import React from 'react'
import '../assets/css/login.css'
import logo from '../assets/images/logo.png'
import login from '../assets/images/login.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="login-left">
                <Link to="/">
                <img src={logo} alt="Logo" />
                </Link>
                <div className="left-text">
                    <span>Daha Eğlenceli Retrospektiflere</span>
                    <strong>Hazır Mısınız?</strong>
                </div>
                <img className="login-image" src={login} alt="Login"/>
            </div>
            <div className="login-right">
                    <span className="text">Giriş Yap</span>
                <div className="login-container">
                <form>
                    <input type="text" placeholder="Kullanıcı Adı" required />
                <div className="password-area">
                    <input type="password" placeholder="Password" required />
                    <span>Şifremi Unuttum</span>
                </div>
                <div className="check">
                    <input type="checkbox"/>
                    <span>Beni Hatırla</span>
                </div>
                <button className="login-button" type="submit">Giriş Yap</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login
