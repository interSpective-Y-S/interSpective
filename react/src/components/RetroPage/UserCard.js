import React from 'react'
import user from '../../assets/images/user.png'
import goks from '../../assets/images/goks.png'
import '../../assets/css/usercard.css'

const UserCard = ({name, role, src}) => {
    return (
        <div className="d-flex card-size">
            <div className="pic">
                <img src={src} alt="User" />
            </div>
            <div className="user-info">
                <div>{role}</div>
                <div>{name}</div>
            </div>
        </div>
    )
}

export default UserCard
