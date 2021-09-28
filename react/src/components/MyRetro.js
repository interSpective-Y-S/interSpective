import React,{useState} from 'react'
import '../assets/css/myretro.css'
import Card from './Card'

const MyRetro = () => {


    const [names, setNames] = useState(["Intertech 1", "Intertech 2", "Intertech 3"])

    const deleteItem = (key) => (e) => {
        console.log(key)
        let newNames = names.filter((item, index) => index !== key)
        console.log(newNames)
        setNames(newNames)
    }

    const list = () => {
        let comp = [] 

        for (let index = 0; index < names.length; index++) {
            comp.push(<Card name={names[index]} index={index} deleteItem={deleteItem} />)
        }

        return comp
    }

    return (
        <div className="aside-right">
            <div className="retro-menu cursor padzero">
        <div className="myretro">Retrolarım</div>
      </div>
      <div className="retrolist">
      
    {list()}

      </div>
        </div>
    )
}

export default MyRetro
