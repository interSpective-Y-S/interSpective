import { useState, React } from "react";
import '../assets/css/retrocard.css'
import { Link } from 'react-router-dom'

const RetroTypeCardText = () => {

  const [ menu, setMenu ] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
  
    <div className="aside-right">
      <div className="retro-menu border-none">
        <div onClick={handleMenu} className={ "right-menu " + (menu ? "" : "selected")} >Retro Oluştur</div>
        <div onClick={handleMenu} className={"right-menu " + (menu ? "selected" : "")} >Retroya Katıl</div>
      </div>

    <div className="retro-input-menu"> 

    { menu ?   
        
        <input type="text" placeholder="Retro Numarası" />
      
     :
      <div className = "retro-olustur">
        <input type="text" placeholder="Oda İsmi" />
        <input type="text" placeholder="Maximum Kullanıcı Sayısı" />
      </div>
    }

    <div className="retro-menu-buttons">
      <Link to ="retro">
        <div className="retro-button">
          {menu ? "Odaya Katıl" : "Oda Oluştur"}  
        </div>
      </Link>

      <Link to="">
        <div>
          <span> ana ekran </span>
        </div>   
      </Link>
      </div>
    </div>
    </div>
  )
}

export default RetroTypeCardText
