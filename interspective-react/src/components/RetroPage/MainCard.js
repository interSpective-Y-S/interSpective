import React, {useState, useEffect} from 'react'
import '../../assets/css/maincard.css'
import EditCard from './EditCard'
import RetroCard from './RetroCard'

const MainCard = ({title, text, color, notes, saveNote, deleteNote}) => {

    const [names, setNames] = useState(["Intertech 1", "Intertech 2", "Intertech 3"])
    const [ length, setLength] = useState(names.length)
    const [ editText, setEditText ] = useState(0)

    const deleteItem = (index) => (e) => {
        setNames(names.filter((item,index2) => index !== index2))
    }
console.log(notes)
    const saveItem = (value, index) => (e) => {

        //setNames([...names, value])
saveNote(value);
        setEditText(editText-1)
    }

    const createClick = () => (e) => {
        setEditText(editText + 1)
    }

    const editComponent = () => {
        let arr = []

        for (let index = 0; index < editText; index++) {
            arr.push(<EditCard saveItem={saveItem} index={index} color={color} />)
        }

        return arr
    }

    return (
        
        <div className="main-card-wrap">
            <div className="main-card-title">
                {title}
            </div>
            <div className="main-card-text">
                {text}
            </div>
            <div onClick={createClick()} className={"main-card-button scale " + (editText !== 0 ? "disable-button" : "")}>Not Yarat</div>
            <div className="main-card-list">
                {notes && notes.length > 0 && notes.map((item, index) => <RetroCard text={notes[index]} index={index} deleteItem={(index) => deleteNote(index)} color={color} />)}
                {editComponent()}
            </div>
        </div>
    )
}

export default MainCard
