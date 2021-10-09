import React from 'react'
import background from '../assets/images/main.png'
import '../assets/css/content.css'
import Navbar from './Navbar';

const Content = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
            <div className="left">
                <h1> ONLINE RETROSPECTIVES </h1>
                <span className="top">Çevik Retrospektifleri Daha İlgi Çekici Hale Getirmek İçin Faaliyetler</span>
                <span className="bottom">Çevik ekipler için çok yönlü retrospektif araç, ekibinizle işbirliği yapın ve basit, güçlü ve güzel bir araçla yaptığınız işte daha iyi olun.</span>
                <div className="button-div">
                    <div className="button">Find Out More</div>
                </div>

            </div>

            <div className="right">
                <img src={background} alt="background"/>
            </div>
        </div>
        </div>
        
    )
}

export default Content
