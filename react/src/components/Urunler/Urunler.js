import React from 'react'
import '../../assets/css/urunler.css'
import Navbar from '../Navbar'
import UrunCard from './UrunCard'
import Image1 from '../../assets/images/urunler1.png'
import Image2 from '../../assets/images/urunler2.png'
import Image3 from '../../assets/images/urunler3.png'
import Image4 from '../../assets/images/urunler4.png'
import searchIcon from '../../assets/images/search.svg'

const Urunler = () => {
    return (
        <div className="urunler-container">
            <Navbar />

            <div className="urunler-content">
                <div className="urunler-card">
                    <UrunCard 
                    title="START, STOP, CONTINUE" 
                    text="Başla, Bırak ve Devam Et, basit ancak etkili bir retrospektif yöntemidir. Yöntem kapsamında beyaz tahta ya da boş bir duvar üç sütuna bölünerek Başla, Bırak ve Devam Et olarak adlandırılır. Başla, gelecek sprint’te takımın yapmaya başlayacakları; bırak, işe yaramadığı ya da sonlandırılması gerektiği düşünülenler; Devam Et ise geçmiş sprint’lerde işe yarayan, vazgeçilemeyenlerdir."
                    img={Image1}
                    to={null}
                    />

                    <UrunCard 
                    title="Mad Sad Glad"
                    text="Bu retrospective tekniği takım üyelerinin duygu durumları etrafında tartışmayı çerçeveleyen, oldukça etkili bir yöntemdir. Geçen sprintte takımın moralini ve iş memnuniyetini iyileştirme fırsatı sunar. Fasilitator katılımcılardan, gerçekleşen olaylardan ziyade, nasıl hissetiklerini paylaşmalarını ister"
                    img={Image2}
                    to="/madsadglad"
                    />

                    <UrunCard 
                    title="Lean Coffee"
                    text="Ekibin tartışmak istedikleri konuları tanımlamasına ve oylamasına olanak tanır. Bu işbirlikçi, meraklı bir ekip kültürü oluşturmak için harikadır.Bu nedenle, geriye dönük olarak tüm katılımcıların aktif olması sağlanır. Ekiplerinizin kendi kendini organize etme becerilerini geliştirmek için harikadır. Anlaşılması gereken şey, bir Yalın Kahve'de temelde üç farklı konuşma aşaması olduğudur; tartışılacak şeyler, tartışılan şeyler ve tartışılan şeyler."
                    img={Image4}
                    to="/leancoffee"
                    />

                    <UrunCard 
                    title="What Went Well"
                    text="Retrospektif, ekiplerin iyileştirme yollarını inceleme fırsatı olduğu için çevik metodolojide hayati bir rol oynar. Bu amaca ulaşmanın en basit yollarından biri, ürün ve yazılım geliştirme ekiplerine iki soru sormaktır - ne iyi gitti, ne iyi gitmedi?
Neyin iyi gittiği, neyin iyi gitmediği tekniği, ekiplerin önceki yineleme üzerindeki faaliyetlerine ve sürekli iyileştirmeyi sağlamak için verimliliklerini ve üretkenliklerini nasıl artırabileceklerine odaklanmasını sağlar."
                    img={Image3}
                    to={null}
                    />
                </div>
                <div className="urunler-search">
                    <div className="search-wrapper">
                        <div className="search-title">ETKINLIK BUL</div>
                        <div className="search-text">
                            <span>Lean Coffee </span>
                            <span>What Went Well</span>
                            <span>Starfish</span>
                            <span>Mad Sad Glad</span>
                            <span>Start Stop Continue</span>
                            <span>Dot Voting</span>
                            <span>Team Radar</span>
                            <span>Sailboat</span>
                            <span> 4 Ls</span>
                            <span>Wishes, Risks, Appreciations, Puzzles</span>
                        </div>
                        <div className="search-bar">
                            <input type="text" placeholder="ARA" />
                            <div className="search-icon">
                                <img src={searchIcon} alt="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Urunler
