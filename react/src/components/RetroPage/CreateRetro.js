import React from 'react'
import logo from '../../assets/images/logo.png'
import mail from '../../assets/images/mail.png'
import link from '../../assets/images/link.png'
import team from '../../assets/images/team.png'
import '../../assets/css/createretro.css'
import UserCard from './UserCard'
import MainCard from './MainCard'
import Timer from './Timer'

const CreateRetro = () => {

    const users = [
        {
            name: "Ahmet",
            role: "Eng"
        },
        {
            name: "Ahmet2",
            role: "Eng"
        },
        {
            name: "Ahmet3",
            role: "Eng"
        },
        {
            name: "Ahmet4",
            role: "Eng"
        },
        {
            name: "Ahmet5",
            role: "Eng"
        },
    ]

    const UserCards = () => {
        let usercards = []

        for (let index = 0; index < users.length; index++) {
            usercards.push(<UserCard name={users[index].name} role={users[index].role}/>)
        }

        return usercards
    }

    return (
        <div className="retro-page">
            
            <div className="retro-navbar">
                <img src={logo} alt="Logo" width="250px" />
                <Timer />
            </div>

            <div className="main-wrapper">
                <div className="aside">
                    <div className="aside-top">
                        <div>
                            <img src={team} alt="Team" />
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
                <div className="main-content">
                    <MainCard 
                        title="To Do"
                        text="Henüz başlatılmamış ancak ekibinizin performansı üzerinde olumlu bir etkisi olması muhtemel fikirler hakkında buraya notlar ekleyin."
                        color="#fce7f6" />

                    <MainCard
                        title="Doing"
                        text="Devam eden ve ekibinizin performansı üzerinde olumlu etkisi olabilecek fikirler hakkında buraya notlar ekleyin."
                        color="#60c9e5" />

                    <MainCard
                        title="Done"
                        text="Devam eden ve ekibinizin performansı üzerinde olumlu etkisi olabilecek fikirler hakkında buraya notlar ekleyin."
                        color="#63e3aa" />
                </div>
            </div>

        </div>
    )
}

export default CreateRetro
