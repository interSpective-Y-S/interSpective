import { React } from 'react'
import '../assets/css/retrotype.css'
import RetroRight from './RetroRight'
import MyRetro from './MyRetro'
const RetroType = () => {

  return (

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

  )

}
export default RetroType