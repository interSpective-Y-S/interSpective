import history from './history'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import MainPage from './components/MainPage'
import Login from './components/Login'
import RetroType from './components/RetroType'
import JoinRetro from './components/JoinRetro'
import Urunler from './components/Urunler/Urunler'
import MadSadGlad from './components/MadSadGlad/MadSadGlad'
import LeanCoffee from './components/LeanCoffee'
import CreateRetro from './components/RetroPage/CreateRetro'

function App() {
  return (
    <div className="App">
      
    <Router history={history}>

    <Route exact path="/" component={MainPage} />

    <Route path="/login" component={Login} />

    <Route path="/urunler" component={Urunler} />

    <Route path="/madsadglad" component={MadSadGlad} />

    <Route path="/leanCoffee" component={LeanCoffee} />

    <Route path="/choose-retro-type" component={RetroType} />

    <Route path='/join-retro:id' component={JoinRetro} />

    <Route path="/retro" component={CreateRetro} />

    </Router>

    </div>
  );
}

export default App;
