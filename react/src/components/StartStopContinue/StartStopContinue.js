import React from 'react'
import Navbar from '../Navbar'
import '../../assets/css/info.css'
import InfoPic from '../../assets/images/pc.png'
import InfoCards from './MsgCard'
import { Link } from 'react-router-dom'
import LeanPic2 from '../../assets/images/ssc.png'

const StartStopContinue = () => {
    return (
        <div className="info-page2">

        <Navbar />

        <div className="info-container">
            <div className="info-top">
                    <div className="info-top-left">
                    <div className="info-top-left-title-ssc">
                        <div>Start, Stop, Continue</div>
                    </div>
                <div className="info-top-left-text-ssc">
                        <div>
                        Başla, Bırak ve Devam Et, basit ancak etkili bir retrospektif yöntemidir. Yöntem kapsamında beyaz tahta ya da boş bir duvar üç sütuna bölünerek Başla, Bırak ve Devam Et olarak adlandırılır. Başla, gelecek sprint’te takımın yapmaya başlayacakları; bırak, işe yaramadığı ya da sonlandırılması gerektiği düşünülenler; Devam Et ise geçmiş sprint’lerde işe yarayan, vazgeçilemeyenlerdir. Bu retrospektif teknik, 
                        üç temel soruya dayanmaktadır - ne yapmaya başlamalıyız? ne yapmayı bırakmalıyız? ve ne yapmaya devam etmeliyiz?
                        <br />
                        <br />
                        Basitliği nedeniyle bu yöntem aşağıdakiler için uygundur:
                        
                        </div>
                        <div className="info-list">
                            <span>•Yazılım geliştirme dahil her türlü proje ekibi </span>
                            <span>•Program incelemeleri </span>
                            <span>•Yönetici incelemeleri </span>
                            <span>•Kişisel performans değerlendirmeleri </span>
                        </div>
                        
                </div>
                    </div>
                    <div className="info-top-right-ssc">
                        <img src={InfoPic} alt="InfoPhoto" />
                    </div>
            </div>
            
                
                <div className="info-bottom">
                    <div className="info-bottom-cards">
                        <InfoCards 
                        text="Ekiplere nasıl gittiklerini gözden geçirme ve gelecekte uygulayabilecekleri iyileştirmeleri belirleme fırsatı verir."
                        />
                        <InfoCards 
                        text="Ekiplerin sorunları netleştirmesini, fikirlerin etkisine ağırlık vermesini ve ortak önceliklere dayalı bir fikir birliğine varmasını kolaylaştırır."
                        />
                        <InfoCards 
                        text="Aksiyon odaklıdır ve takıma ivme ve enerji sağlar. Listedeki her öğe davranış değişikliği ile sonuçlanır."
                        />
                        <InfoCards 
                        text="Ekiplerin çalışma yöntemlerini sürekli olarak iyileştirmelerini sağlar."
                        />
                    </div>
                </div>
                

                <div className="lean-mid">
                    <div className="ssc-mid-left">
                        <div className="ssc-mid-left-text">
                        <div className="info-top-left-title-ssc">
                            <div>START, STOP, CONTINUE  YARARLARI</div>
                        </div>
                        •Ekiplere nasıl ilerlediklerini gözden geçirme ve gelecekte uygulayabilecekleri iyileştirmeleri belirleme fırsatı verir. <br />
                        •Mevcut sorunları konuşmaya teşvik eder. <br />
                        •Etkinlik boyunca konuşulanlar bir davranış değişikliği ile sonuçlanır. Aksiyon almaya odaklı olduğu için takıma ivme katıp ve enerjiyi hep yüksek tutar. <br />
                        •Kaizen’e katkı sağlar. Takımlara çalışma şekillerini sürekli iyileştirmeleri için fırsat ve güç verir. <br />
                        </div>
                            
                    </div>
                    <div className="lean-mid-right">
                        <div className="ssc-bot-back">
                        <img src={LeanPic2} alt="LeanCoffee2" />
                        <Link to = "choose-retro">
                                <div className="info-button scale">
                                    Start Stop Continue Yarat
                                </div>
                            </Link>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default StartStopContinue
