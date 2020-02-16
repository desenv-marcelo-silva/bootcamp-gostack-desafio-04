import React from 'react';

import './App.css';
import loginAvatar from '../public/assets/login_avatar.png';

function App() {
  return (
    <>
    <header>
      <div>Facebook</div>
      <div className="login">
        <div>Meu perfil</div>
        <div className="icon">
          <img src={loginAvatar} />
        </div>
      </div>
    </header>
    <div className="postList">
      <h2>Here we're a post list</h2>
      <div className="post">
        <h3>Here we're a posts</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi atque necessitatibus voluptatum sunt, sit nesciunt delectus alias repellendus iste sequi maiores ducimus id odio facere cum optio consequatur dicta quo.</p>
        <div className="comments">
          <h4>Here we're comments</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis distinctio eaque eius placeat ex debitis perspiciatis officiis ea sunt eligendi at, quod provident nihil modi ad mollitia, ipsum corporis?
        </div>
      </div>
    </div>
    </>
  );
}

export default App;