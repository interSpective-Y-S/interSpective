import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/uruncard.css'


const UrunCard = ({title, text, img, to}) => {
    return (
        <div className="card-container">
            <div className="card-left">
                <img src={img} alt="Foto1" />
            </div>
            <div className="card-right">
                <div className="card-title">{title}</div>
                <div className="card-text"> {text}  </div>
                <Link className="card-button scale" to={to || "/urunler"}> 
                    <div >DETAYLI BİLGİ</div>
                </Link>
            </div>
        </div>
    )
}

export default UrunCard
