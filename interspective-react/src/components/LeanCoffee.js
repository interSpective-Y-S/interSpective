import React from 'react'
import '../assets/css/lean.css'
import Navbar from './Navbar'
import LeanPic from '../assets/images/lean.png'
import LeanPic2 from '../assets/images/lean2.png'

const LeanCoffee = () => {
    return (
        <div className="lean-page">

            <Navbar />

            <div className="lean-container">

                <div className="lean-top">
                    <div className="lean-top-left">
                        <div className="lean-top-left-title">
                        Lean Coffee Retrospective
                        </div>

                        <div className="lean-top-left-text">
                            Lean coffee, ekibin tartışmak istedikleri konuları tanımlamasına ve oylamasına olanak tanır. Bu işbirlikçi, meraklı bir ekip kültürü oluşturmak için harikadır. <br/>
                            Tartışılacak konular insanlar tarafından yaratılır. Bu nedenle, geriye dönük olarak tüm katılımcıların katılımını artırdığınızı göreceksiniz. <br/>
                            Formatın mini zaman kısıtlamalı doğası, ekibin bir şey hakkında konuşmayı ne zaman bırakacağına karar vermesine, toplantılarımızı verimli tutmasına ve zamanında bitirmesine olanak tanır.<br/> 
                            Bu, ekiplerinizin kendi kendini organize etme becerilerini geliştirmek için harikadır, sadece onlara nasıl yapacaklarını gösterecek birine ihtiyacınız var. O birisi sensin.<br/>
                            Herhangi bir önemli tartışma gerçekleşmeden önce herkesin konularını göndermesine izin vermek, ekibinizdeki sessiz seslerin bile söz sahibi olması anlamına gelir.<br/>
                            Anlaşılması gereken şey, bir Yalın Kahve'de temelde üç farklı konuşma aşaması olduğudur; tartışılacak, tartışılan ve tartışılmış şeyler.<br/>
                        </div>
                    </div>

                    <div className="lean-top-right">
                        <img src={LeanPic} alt="LeanCoffee" />
                    </div>
                </div>
                
                <div className="lean-bottom">
                    Çalışanlarınızı yönetim kadrosuyla tartışmalara dahil etmenin en etkili yollarından biridir.
                    Motivasyon düzeylerini artırmaya yardımcı olur ve şirket tarafından kendilerine değer verildiğini hissettirir.
                    Sadık bir işgücüne sahip olmak, uzun vadede her firma için faydalıdır ve yalın kahve toplantılarına ev sahipliği yapmak bu amaca büyük katkı sağlayan bir şeydir.
                </div>
                
                <div className="lean-mid">
                    <div className="lean-mid-left">
                        <div className="lean-mid-left-text">Yalın Kahve retrospektifi, yazılım geliştirme ekiplerinin Yapılacaklar sütununa yapışkan notlar ekleyerek ve 
                            ardından bunları tartışma sırasında üç sütunun her birinde taşıyarak ekibin performansı üzerinde olumlu bir 
                            etkisi olması muhtemel konu fikirlerine odaklanmasına yardımcı olur.
                        </div>
                        <div className="info-button scale">Lean Coffee Retrospective Yarat</div>
                    </div>
                    <div className="lean-mid-right">
                        <img src={LeanPic2} alt="LeanCoffee2" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default LeanCoffee
