import React from 'react'
import Navbar from '../Navbar'
import '../../assets/css/info.css'
import InfoPic from '../../assets/images/info.png'
import InfoCards from './MsgCard'

const Info = () => {
    return (
        <div className="info-page">

        <Navbar />

        <div className="info-container">
            <div className="info-top">
                    <div className="info-top-left">
                    <div className="info-top-left-title">
                        <div>Mad Sad Glad</div>
                    </div>
                <div className="info-top-left-text">
                        <div>
                            Bu retrospective tekniği takım üyelerinin duygu durumları etrafında tartışmayı çerçeveleyen, oldukça etkili bir yöntemdir.
                            Geçen sprintte takımın moralini ve iş memnuniyetini iyileştirme fırsatı sunar.
                            Fasilitator katılımcılardan, gerçekleşen olaylardan ziyade, nasıl hissetiklerini paylaşmalarını ister.
                        </div>
                        <div className="info-list">
                            <span>Mad: Sinirli olma durumu 😠</span>
                            <span>Sad: Üzgün olma durumu 🙁</span>
                            <span>Glad: Mutlu olma durumu 🙂</span>
                        </div>
                        <div>
                            Mad Sad Glad retrospective tekniği, olumlu bir takım dinamiği oluşturmaya yardımcı olmak için daha duygusal olmaya 
                            teşvik eder.Sorunları ve fırsatları farklı bir perspektiften görmeye yardımcı olur.
                        </div>
                </div>
                    </div>
                    <div className="info-top-right">
                        <img src={InfoPic} alt="InfoPhoto" />
                    </div>
            </div>
                <div className="info-mid">
                    <div className="info-mid-title">MAD SAD GLAD NASIL UYGULANIR ?</div>
                </div>
                
                <div className="info-bottom">
                    <div className="info-bottom-cards">
                        <InfoCards 
                        title="Fikir Aşaması"
                        text="Bu aşama için bir time box süresi belirlenir. Fasilitator, katılımcılara postitleri dağıtır. 
                        Katılımcılardan belirlenen time box süresince, geçen sprinti düşünmelerini ve hissettiklerini her üç kolon için postitlere yazmalarını ister.
                        Time box dolduğunda katılımcılar yazdıklarını uygun kolonlara yapıştırırlar."
                        />
                        <InfoCards 
                        title="Oylama "
                        text="Bazen retrospektif sırasında tartışılması gereken bir nokta olduğu açıktır.
                        Ve bazen bu çok açık değildir ve ekip için en acil konuları belirlemek zor olabilir. 
                        Bu durumda, kolaylaştırıcı grup tarafından verilen oylara dayalı olarak tartışmaya öncelik vermek için oylamayı kullanabilir."
                        />
                        <InfoCards 
                        title="Tartışma "
                        text="Fasilitator tartışma bölümü için bir time box belirler. 
                        Katılımcılardan paylaşılan postitlerin teker teker okunup kendi aralarında değerlendirmelerini ister. 
                        Özellikle daha negatif duygu durumu olan “Mad” ve “Sad” paylaşımları konuşurken, mümkün olduğunca kök nedene inmelerini tavsiye eder.
                        Hatta gerekli durumlarda onlara yardımcı olur."
                        />
                        <InfoCards 
                        title="Aksiyon Alma"
                        text="Yapılan bu retrospective sonunda takımın alması gereken aksiyon kararları olabilir.
                        Bu durumda yine bir timebox belirlenir ve kararlar tartışılmaya başlanır.
                        Bu aşamayı bazen yapmayabilirsiniz. Gelen paylaşımlara göre karar vermek daha doğru olacaktır.
                        Ama her retrospective’de bir aksiyon kararı almak KAIZEN’e destek verir."
                        />
                    </div>
                </div>

                <div className="info-bottom-button">
                    <div className="info-button scale">
                        Mad Sad Glad Yarat
                    </div>
                </div>
        </div>

        </div>
    )
}

export default Info
