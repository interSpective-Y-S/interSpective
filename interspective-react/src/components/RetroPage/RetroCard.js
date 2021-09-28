import React from 'react'
import deleteIcon from '../../assets/images/delete.svg'

const RetroCard = ({text, index, deleteItem, color}) => {
    return (
        <div className="card-wrapper expand" style={{ backgroundColor: color }}>
            <div>{text}</div>
            <img onClick={deleteItem(index)} src={deleteIcon} alt="delete" />
        </div>
    )
}

export default RetroCard
