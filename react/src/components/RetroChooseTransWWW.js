import React,{useState} from 'react'
import '../assets/css/myretro.css'
import Card from './Card'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const RetroChooseTransWWW = () => {

    return (
        <div className="aside-right">
            <div className="retro-menu cursor padzero">
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
        </div>

        <div className="retro-input-menu "> 
            <div className="choose-ret-left">
                <input type="text" placeholder="Oda İsmi" />
                <Link className="card-button2 scale" to="what-went-well"> 
                    <div >What Went Well Oluştur</div>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default RetroChooseTransWWW
