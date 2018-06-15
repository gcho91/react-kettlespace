import React from 'react';

var coworkingImg = require('../img/coworking.jpg');
var coworkingImgSmall = require('../img/coworking-small.jpg');


class Header extends React.Component {
    render() {
      return (
        <div>
        <div className="container header">
          <h1>The easiest way to cowork</h1>
          </div>
          <button>Fuck the trial</button>
        </div>
      );
    }
  }

  export default Header;