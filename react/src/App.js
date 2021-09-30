import history from './history'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import MainPage from './components/MainPage'
import Login from './components/Login'
import RetroType from './components/RetroType'
import JoinRetro from './components/JoinRetro'
import Urunler from './components/Urunler/Urunler'
import MadSadGlad from './components/MadSadGlad/MadSadGlad'
import StartStopContinue from './components/StartStopContinue/StartStopContinue'
import LeanCoffee from './components/LeanCoffee'
import CreateRetro from './components/RetroPage/CreateRetro'
import CreateRetroSSC from './components/RetroPage/CreateRetroSSC'
import CreateRetroLC from './components/RetroPage/CreateRetroLC'
import CreateRetroMSG from './components/RetroPage/CreateRetroMSG'
import CreateRetroWWW from './components/RetroPage/CreateRetroWWW'
import RetroChoose from './components/RetroChoose'
import RetroChooseSSC from './components/RetroChooseSSC'
import RetroChooseWWW from './components/RetroChooseWWW'
import RetroChooseMSG from './components/RetroChooseMSG'
import RetroChooseLC from './components/RetroChooseLC'
import WhatWentWell from './components/WhatWentWell/WhatWentWell'

function App() {
  return (
    <div className="App">
      
    <Router history={history}>

    <Route exact path="/" component={MainPage} />

    <Route path="/login" component={Login} />

    <Route path="/urunler" component={Urunler} />

    <Route path="/info-mad-sad-glad" component={MadSadGlad} />

    <Route path="/info-lean-coffee" component={LeanCoffee} />

    <Route path="/choose-retro-type" component={RetroType} />

    <Route path='/join-retro:id' component={JoinRetro} />

    <Route path="/retro" component={CreateRetro} />

    <Route path="/start-stop-continue" component={CreateRetroSSC} />

    <Route path="/mad-sad-glad" component={CreateRetroMSG} />

    <Route path="/lean-coffee" component={CreateRetroLC} />

    <Route path="/what-went-well" component={CreateRetroWWW} />

    <Route path="/choose-retro" component={RetroChoose} />

    <Route path="/choose-retro-ssc" component={RetroChooseSSC} />

    <Route path="/choose-retro-www" component={RetroChooseWWW} />

    <Route path="/choose-retro-msg" component={RetroChooseMSG} />

    <Route path="/choose-retro-lc" component={RetroChooseLC} />

    <Route path="/info-start-stop-continue" component={StartStopContinue} />
    
    <Route path="/info-what-went-well" component={WhatWentWell} />

    
    </Router>

    </div>
  );
}

export default App;
