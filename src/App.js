import React from 'react';

import './App.css';

import Header from './components/Header';
import Comments from './components/Comments';

function App() {
  return (
    <>
    <Header />
    <div className="postList">
      <h2>Here we're a post list</h2>
      <div className="post">
        <h3>Here we're a posts</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi atque necessitatibus voluptatum sunt, sit nesciunt delectus alias repellendus iste sequi maiores ducimus id odio facere cum optio consequatur dicta quo.</p>
        <Comments />
      </div>
    </div>
    </>
  );
}

export default App;