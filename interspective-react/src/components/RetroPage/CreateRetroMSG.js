import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/logo.png'
import mail from '../../assets/images/mail.png'
import link from '../../assets/images/link.png'
import team from '../../assets/images/team.png'
import '../../assets/css/createretro.css'
import UserCard from './UserCard'
import MainCard from './MainCard'
import Timer from './Timer'
import { Link } from 'react-router-dom'
import ıs from '../../assets/images/ıs.png'
import icon1 from '../../assets/images/çan.png'
import icon2 from '../../assets/images/çark.png'
import icon3 from '../../assets/images/saat.png'
import Aksiyon from '../Aksiyon'

const CreateRetroMSG = () => {
    const [retro, setRetro] = useState({})
    const [sadList, setSadList] = useState([])
    const [madList, setMadList] = useState([])
    const [gladList, setGladList] = useState([])

    const startTime = () => {
        const clock = "1";
        
    }

    useEffect(() => {
        const fetchData = async () => {
            var response = await fetch("http://localhost:8080/madsadglad/2")
            var data = await response.json();
                console.log("aaaa",data)
            setRetro(data);  
            setGladList(data.gladList)    
            setMadList(data.madList)    
            setSadList(data.sadList)    
        };

        fetchData();
        
    },[]);

    const saveRetro = () => {
        var data = {
            madList : madList,
            sadList : sadList,
            gladList : gladList,
            actionList : retro.actionList,
            rate : retro.rate,
            notes : retro.notes
        }
        const putMethod = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        }
        fetch("http://localhost:8080/madsadglad/2",putMethod)
        .then(response => response.json)
        .then(dat => console.log(dat))

    }
   
    const users = [
        {
            name: "Özlem",
            role: "Scrum Master",
            src: "./özlem.png"
        },
        {
            name: "İlker",
            role: "Product Owner",
            src: "./ilker.png"
        },
        {
            name: "Sema",
            role: "Business Analytics",
            src: "./sema.png"
        },
        {
            
            name: "Göksel",
            role: "Data Scientist",
            src: "./goksel.png"
        },
    ]

    const UserCards = () => {
        let usercards = []

        for (let index = 0; index < users.length; index++) {
            usercards.push(<UserCard name={users[index].name} role={users[index].role} src={users[index].src}/>)
        }

        return usercards
    }

    return (
        
        <div className="retro-page">
            
            <div className="retro-navbar">
                <img src={logo} alt="Logo" width="300px" />
                <Aksiyon />
            </div>

            <div className="main-wrapper">
                <div className="aside">
                    <div className="aside-top">
                        <div>
                            <img src={ıs} alt="Team" />
                        </div>
                        <div className="aside-top-right">
                            <div>Takım</div>
                            <div>INTERN</div>
                        </div>
                    </div>
                 
                    <div className="aside-mid">
                        <div className="aside-mid-title">
                            Takımını Davet Et
                        </div>

                        <div className="aside-mid-links">
                            <div className="d-flex">
                                <img src={link} alt="Link" />
                                <span>Link Paylaş</span>
                            </div>
                            <div className="d-flex">
                                <img src={mail} alt="Mail" />
                                <span>Mail Gönder</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="aside-bottom">
                        <div className="aside-bottom-title">
                            Katılımcılar
                        </div>

                        <div className="users">
                            {UserCards()}
                        </div>
                    </div>
                </div>
                <div >
                <div className="main-content">
                    <MainCard 
                        title="Kızgınlığım"
                        text="Sizi kızgınlığa uğratan şeyler hakkında notlar ekleyin."
                        color="#fce7f6" 
                            notes={madList}
                            saveNote={(mad) => {
                                setMadList([...madList, mad])
                            }}
                            
                         deleteNote={(index)=> {
                            setMadList(madList.filter((item,index2) => index !== index2))
                         }}
                        />

                    <MainCard
                        title="Üzgünlüğüm"
                        text="Sizi hayal kırıklığına uğratan şeyler hakkında notlar ekleyin."
                        color="#60c9e5" 
                        notes={sadList}
                        saveNote={(sad) => {
                                setSadList([...sadList, sad])
                            }}
                            
                         deleteNote={(index)=> {
                            setSadList(sadList.filter((item,index2) => index !== index2))
                         }}
                        />

                    <MainCard
                        title="Mutluluğum"
                        text="Sizi heyecanlandıran şeyler hakkında notlar ekleyin."
                        color="#63e3aa"
                        notes={gladList}
                        saveNote={(glad) => {
                                setGladList([...gladList, glad])
                            }}
                            
                         deleteNote={(index)=> {
                            setGladList(gladList.filter((item,index2) => index !== index2))
                         }}
                         />
                </div>
                        
                
                <div className= "lala">
        <div className="bottom-bar">
            <div className="icons">
            <img className = "icon1" src={icon1} alt="icon" />
                <img className = "icon2" src={icon2} alt="icon"/>
                <img className = "icon3" src={icon3} alt="icon" onClick={() => startTime()}/>
                
            </div>
            <div className="menu2">
                <span>Düşün</span>
                <span>Grup</span>
                <span>Oyla</span>
                <span>Tartış</span>
                
                <span onClick={() => saveRetro()}>Kapat</span>
                
            </div>
        </div>
    <div className="info-button2 scale" onClick={() => saveRetro()}>
        <span>Güncelle !</span>
    </div>
    </div>
                
                </div>
            </div>
        </div>
    )
}

export default CreateRetroMSG


