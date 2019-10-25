import React from 'react';

import './Header.css'

import icon from '../../assets/face3.png'
import face from '../../assets/facebook1.png'

function Header(){
  return(
    <>

      <header>
        <div className="logo-face">
          <img src={face} alt="Facebook"/>
        </div>
        <div className="icon">
          <p> Meu perfil </p>
          <img src={icon} alt="Facebook"/>
        </div>
      </header>

    </>
  );
}

export default Header;
