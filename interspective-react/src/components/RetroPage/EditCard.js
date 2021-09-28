import React, {useState} from 'react'
import saveIcon from '../../assets/images/save.png'
import '../../assets/css/editcard.css'

const EditCard = ({saveItem, index, color}) => {

    const [ value, setValue ] = useState("")

    return (
        <div className="card-wrapper expand d-flex set-size" style={{ backgroundColor: color }}>
            <div>
                <input className="add-retro" type="text" onChange={ (e) => setValue(e.target.value)} />
            </div>
            <img height="32px" onClick={saveItem(value, index)} src={saveIcon} alt="save" />
        </div>
    )
}

export default EditCard
