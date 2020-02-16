import React from 'react';

import Posts from './Posts';

import './PostLists.css';

function PostLists() {
  return (
    <>
      <div className="postList">
        <h2>Here we're a post list</h2>
        <Posts />
      </div>
    </>
  );
}

export default PostLists;