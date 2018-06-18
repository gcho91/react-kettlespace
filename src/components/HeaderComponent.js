import React from 'react';
import '../styles/Header.css';

var coworkingImg = require('../img/coworking.jpg');
var coworkingImgSmall = require('../img/coworking-small.jpg');
var kettleLogo = require('../img/kettle-logo.png');



class Header extends React.Component {
    render() {
      return (
        
          <div className="container header">

            <Menu />
              <h1>The Easiest Way To Cowork</h1>
            
            <button className="try-btn">Try for a Week</button>
          </div>
          
      );
    }
  }


  {/* Menu component*/}

  class Menu extends React.Component {
    render(){
      return (
        <div className="navbar">
          
          <h3>OwO NAVBAR BITCHES</h3>
        </div>
      )
    }
  }

  export default Header;