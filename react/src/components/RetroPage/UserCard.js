import React from 'react'
import user from '../../assets/images/user.png'
import '../../assets/css/usercard.css'

const UserCard = ({name, role}) => {
    return (
        <div className="d-flex card-size">
            <div>
                <img src={user} alt="User" />
            </div>
            <div className="user-info">
                <div>{role}</div>
                <div>{name}</div>
            </div>
        </div>
    )
}

export default UserCard
