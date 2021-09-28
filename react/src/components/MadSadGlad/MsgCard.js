import React from 'react'
import '../../assets/css/infocard.css'

const InfoCards = ({title, text}) => {
    return (
        <div className="info-card-container">
            <div className="info-card-title">
                {title}
            </div>
            <div className="info-card-text">
                {text}
            </div>
        </div>
    )
}

export default InfoCards
