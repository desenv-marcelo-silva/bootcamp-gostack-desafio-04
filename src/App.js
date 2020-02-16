import React from 'react';

import './App.css';

import Header from './components/Header';
import Posts from './components/Posts';

function App() {
  return (
    <>
    <Header />
    <div className="postList">
      <h2>Here we're a post list</h2>
      <Posts />
    </div>
    </>
  );
}

export default App;