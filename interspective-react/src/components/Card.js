import React from 'react'
import '../assets/css/card.css'
import deleteIcon from '../assets/images/delete.svg'

const Card = ({name, index, deleteItem}) => {
    return (
        <div className="card-wrapper" style={{backgroundColor: "#fce7f6"}}>
            <div>{name}</div>
            <img onClick={deleteItem(index)} src={deleteIcon} alt="delete" />
        </div>
    )
}

export default Card
