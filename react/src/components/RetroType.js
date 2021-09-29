import { React } from 'react'
import '../assets/css/retrotype.css'
import RetroRight from './RetroRight'
import MyRetro from './MyRetro'
import Navbar2 from './NavBar2'

const RetroType = () => {

  return (
    <div className="back">
    <Navbar2 />
    <div className="retro-container">
      <div className="retro-wrapper">
          <div className="card">
            <MyRetro />
          </div>

        <div className="card">
            <RetroRight  />
          </div>
      </div>
    </div>
    </div>
  )
}
export default RetroType