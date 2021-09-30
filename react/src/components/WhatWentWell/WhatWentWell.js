import React from 'react'
import Navbar from '../Navbar'
import '../../assets/css/info.css'
import InfoPic from '../../assets/images/www.png'
import InfoCards from './MsgCard'
import { Link } from 'react-router-dom'
import www1 from '../../assets/images/www1.png'
import www2 from '../../assets/images/www2.png'
import www3 from '../../assets/images/www3.png'
import deepl from '../../assets/images/www-deep-l.png'
import bar from '../../assets/images/bar.png'


const WhatWentWell = () => {
    return (
        <div className="info-page3">

        <Navbar />

        <div className="info-container">
            <div className="info-top">
                    <div className="info-top-left">
                    <div className="info-top-left-title-www">
                        <div>What Went Well</div>
                    </div>
                <div className="info-top-left-text-www">
                        <div>
                        Retrospektif, ekiplerin iyileştirme yollarını inceleme fırsatı olduğu için çevik metodolojide hayati bir rol oynar. Bu amaca ulaşmanın en basit yollarından biri, ürün ve yazılım geliştirme ekiplerine iki soru sormaktır - ne iyi gitti, ne iyi gitmedi?
                        Neyin iyi gittiği, neyin iyi gitmediği tekniği, ekiplerin önceki yineleme üzerindeki faaliyetlerine ve sürekli iyileştirmeyi sağlamak için verimliliklerini ve üretkenliklerini nasıl artırabileceklerine odaklanmasını sağlar. Alıştırma, tartışmaya odaklanmaya yardımcı olur ve yeni ve gelişmekte olan ekipler için bir projenin bir sonraki yinelemesinde performansı ve kaliteyi iyileştirmeleri için harika bir araçtır.
                        Yine bu teknik, ekibin ürün geliştirmede nelerin iyi gittiği ve nelerin iyi gitmediği şeklindeki iki temel soruya verdiği yanıtlara dayanmaktadır.
                        </div>
                        
                </div>
                    </div>
                    <div className="info-top-right-www">
                        <img src={InfoPic} alt="InfoPhoto" />
                    </div>
            </div>


            

                <div className="info-mid-www">
                    <div className="info-mid-title">
                        What Went Well
                    </div>
                </div>

                <div className ="info-bottom-www">
                    <div className ="left-bot-www">
                        <div className="info-bot-left-www">
                            <img src={www1} alt="InfoPhoto" />
                        </div>

                        <div className="info-bot-left-www">
                            <img src={www2} alt="InfoPhoto" />
                        </div>

                        <div className="info-bot-left-www">
                            <img src={www3} alt="InfoPhoto" />
                        </div>
                    </div>
                    <div className ="right-bot-www">
                        <InfoCards 
                        text="Bu, sprint sonucunuzu elde etmenize yardımcı olan her şeyin paketidir. 
                              Etkinliğin kendisi hakkında ikili dosyalarda konuşun. Bir şey ya işe yaradı 
                              ya da yaramadı. Peki takım olarak hangi uygulamalarda başarılı oldunuz? Bunlar, 
                              bir sonraki sprintinizde veya bir sonraki yinelemenizde ikiye katlamayı düşünmek 
                              isteyeceğiniz şeyler olacaktır. Aynı zamanda ekiple biraz pozitifliği ve övgüleri 
                              paylaşmak için iyi bir fırsat. Örnek: Takım içi iletişim çok güzeldi."
                        />

                        <InfoCards 
                        text="Bu, sprint sonucu için çalışmayan aktivitelerin kovasıdır. Belki de ilk kez bir şey
                            denediniz ve sadece sıfırdan sonuçlanmadı. Düzensiz bir sorun, eylem planınıza veya sprint 
                            için iş akışınıza zarar vermiş olabilir. Bu sütun, iyileştirilebilmeleri için elden çıkardığınız
                            veya önceliklendirme için işaretlediğiniz öğeleri içerecektir.
                            Örnek:' Hata önceliklendirme' süreci"
                        />

                        <InfoCards 
                        text="Scrum Takım’ı üyeleri çalışma şekillerine dair negatif, pozitif değerlendirdikleri tüm konuları
                         açık yüreklilikle konuşurlar. Ancak, bu toplantının sağlıklı bir Retrospective olarak addedilebilmesi 
                         için, konuşulan maddelere dair kök sebepler de bulunmalı, aksiyonlar çıkmalı ve bu aksiyonlar takım 
                         tarafından takip edilerek hayata geçirilmelidir. Bu toplantılar serbest formatta da yapılabilse de, 
                         genelde belli bir süreç ile ilerlemek şeffaflık ve işin disiplini açısından daha verimlidir."
                        />
                    </div>

                </div>

            </div>
            

            <div className="info-mid-img-www">
                <img src={bar} alt="InfoPhoto" />
            </div>
            
            <div className="info-deep-www">
                <div className="info-deep-left-www">
                    <div className="info-deep-left-img-www">
                        <img src={deepl} alt="InfoPhoto" />
                    </div>
                    
                </div>

                <div className="info-deep-right-www">
                    <div className="info-bot-right-title-www">
                        <div>What Went Well Ne Zaman Yapılmalı?</div>
                    </div>

                    <div className="info-top-deep-text-www">
                        <div>
                            Neler İyi Gitti retrospektifleri birkaç farklı senaryoda yardımcı olur: 
                            Duygular yerine sonuçlara odaklanmak istediğinizde: Retrospektifin yapısı, bu konuda nasıl
                            hissettiğinizi değil,yalnızca neyin işe yarayıp neyin yaramadığını belirtmenizi ister.
                            Otopsi tarzında bir retrospektif istediğinizde: Geriye bakmak istediğiniz belirli bir ürününüz
                            veya projeniz varsa, bu geriye dönük şablon herkesin aklını size hizmet eden faaliyetlere karşı 
                            olmayan faaliyetlere odaklamaya yardımcı olur. Hafif bir retrospektif istediğinizde: What Went Well
                            retrospektifleri her şeyi basit tutar, ancak yine de geniş kapsamlı bir konuşma yapmanıza olanak tanır.
                        </div>

                        <div className="info-bottom-button-www">
                        <Link to="choose-retro-www">
                            <div className="info-button scale">
                                What Went Well Yarat
                            </div>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWentWell
