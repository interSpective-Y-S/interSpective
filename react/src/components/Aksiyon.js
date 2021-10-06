import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import '../assets/css/aksiyon.css'

export default class Aksiyon extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
  }
 
  render() {
    return (
      <OffCanvas
        width={500}
        transitionDuration={350}
        effect={"push"}
        isMenuOpened={this.state.isMenuOpened}
        position={"right"}
      >
        <OffCanvasBody
          className=""
           effect={"push"}
        >
         
            <a className="lalala" onClick={this.handleClick.bind(this)}>
                        Aksiyonlar
            </a>{" "}
            
          
        </OffCanvasBody>

        <OffCanvasMenu className="lololo">     
                <h5 className="offcanvas-title"  id="offcanvasExampleLabel">Aksiyon İtemları</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" href="#" onClick={this.handleClick.bind(this)}>X</button>
            
                <div className="offcanvas-body">
                    
                        <div className="alert alert-success" role="alert">
                            Yeni Aksiyonlar Alın ya da Çözülmeyen Aksiyonları Gözden Geçirin.                          
                        </div>
                    </div>

  

                  <form>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Aksiyon yaz" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                              <button class="btn btn-danger" type="button">Aksiyon Ekle</button>
                            </div>
                        </div>
                    </form>   

        </OffCanvasMenu>
      </OffCanvas>
    );
  }
 
  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}



/*<div className="container">
            <div className="row">
                <div className="col-md-9">
                    <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Aksiyonlar
                    </a>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title"  id="offcanvasExampleLabel">Aksiyon İtemları</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>

                    <div className="offcanvas-body">
                      
                        <div className="alert alert-success" role="alert">
                            Yeni Aksiyonlar Alın ya da Çözülmeyen Aksiyonları Gözden Geçirin.                          
                        </div>
                    </div>

                    <div class="dropdown">
                            <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Çözülmeyen Aksiyonlar
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="#">Çözülmeyen Aksiyonlar</a>
                              <a class="dropdown-item" href="#">Çözülen Aksiyonlar</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                    </div>
                    
                    <form>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Aksiyon yaz" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                              <button class="btn btn-danger" type="button">Aksiyon Ekle</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>*/