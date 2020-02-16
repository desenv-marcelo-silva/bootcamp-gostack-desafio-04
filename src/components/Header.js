import React from 'react';
import loginAvatar from '../../public/assets/login_avatar.png';

import './Header.css';
function Header() {
    return (
      <header>
      <div>Facebook</div>
      <div className="login">
        <div>Meu perfil</div>
        <div className="icon">
          <img src={loginAvatar} />
        </div>
      </div>
    </header>
    );
}

export default Header;